package main

import (
	"encoding/json"
	"fmt"
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/net/ghttp"
	"github.com/seefan/gossdb"
	"github.com/seefan/gossdb/conf"
	"gowww/tongji/common"
	"log"
	"net/url"
	"time"
)

// 参数
type ReqUrlParam struct {
	JsonpCallback  string `params:"jsonpCallback"`
	ItemTile       string `params:"itemTile"`
	Referrer       string `params:"referrer"`
	Localurl	   string `params:"localurl"`
}

// 页面 pv
type SiteUvPv struct {
	SiteUv  int     `json:"site_uv"`
	PagePv  int     `json:"page_pv"`
	Version float64 `json:"version"`
	SitePv  int     `json:"site_pv"`
	RecommendList []ItemArts  `json:"recommend_list"`
}

// 贡献榜
type Contribution struct {
	Cbi int64 `json:"cbi"`
}

type ItemArts struct {
	Title string `params:"title"`
	Url   string `params:"url"`
}
func main() {
	pool, err := gossdb.NewPool(&conf.Config{
		Host:             "127.0.0.1",
		Port:             8888,
		MinPoolSize:      5,
		MaxPoolSize:      50,
		AcquireIncrement: 5,
	})
	if err != nil {
		log.Fatal(err)
		return
	}

	c, err := pool.NewClient()
	if err != nil {
		log.Println(err.Error())
		return
	}
	defer c.Close()

	s := g.Server()
	s.BindHandler("/pushtsua", func(r *ghttp.Request) {
		params := new(ReqUrlParam)
		r.GetToStruct(params)

		// 1.贡献referrer 异步处理
		dealCbi(params, c)

		// 2.处理页面 pv uv siteuv
		dealPagePvUv(r, c, params)

	})
	s.SetPort(5040)
	s.Run()

}
func parseurl(urls string) string {
	if len(urls) < 4 {
		return ""
	}
	t := &url.URL{Path: urls}
	urlstr := t.String()
	return urlstr[2:]
}

func dealCbi(params *ReqUrlParam, c *gossdb.Client) {

	defer  common.TimeoutWarning("dealCbi", "dealCbi time ", time.Now(), 1)

	sourceReferrer := params.Referrer
	//sourceReferrer = parseurl(sourceReferrer)
	log.Println("dealCbi:"+sourceReferrer+" begin")
	score, _ := c.Zget("cbi", sourceReferrer)
	score = score + 1
	log.Println("dealCbi:"+sourceReferrer+" score:"+string(score))
	err := c.Zset("cbi", sourceReferrer, score)
	if err != nil {
		log.Println(err)
	}
	log.Println("dealCbi:"+sourceReferrer+" end")
}

func dealPagePvUv(r *ghttp.Request, c *gossdb.Client, params *ReqUrlParam) {

	defer  common.TimeoutWarning("dealPagePvUv", "dealPagePvUv time ", time.Now(), 10)

	refererstr := params.Localurl
	log.Println("dealPagePvUv:"+refererstr+" begin1")
	refererstr = parseurl(refererstr)
	log.Println("dealPagePvUv:"+refererstr+" begin2")
	strstr, err := c.Get(refererstr)
	if err != nil {
		log.Println(err)
	}

	if len(strstr) > 0 {
		//fmt.Println(strstr)

		var pv SiteUvPv
		// 将字符串反解析为结构体
		json.Unmarshal([]byte(strstr), &pv)
		//fmt.Println(pv) //

		pv.PagePv = pv.PagePv + 1

		log.Println("dealPagePvUv:"+refererstr+ " old  " +string(pv.PagePv))

		//Marshal失败时err!=nil
		marstr, err := json.Marshal(pv)
		if err != nil {
			fmt.Println("生成json字符串错误")
		}

		c.Set(refererstr, string(marstr))

		c.Zset("list", refererstr, int64(pv.PagePv))
		c.Set(refererstr+"content", params.ItemTile)

		//获取阅读排行榜
		recomlist := Recommend(err, c)
		pv.RecommendList = recomlist

		//Marshal失败时err!=nil
		marstr2, err2 := json.Marshal(pv)
		if err2 != nil {
			//fmt.Println("生成json字符串错误")
		}

		r.Response.Write(`try{` + params.JsonpCallback + `(` + string(marstr2) + "" + `);}catch(e){}`)

	} else {
		pv := &SiteUvPv{
			SiteUv: 1,
			SitePv: 1,
			PagePv: 1,
		}

		log.Println("dealPagePvUv:"+refererstr+ " new  " +string(pv.PagePv))

		c.Zset("list", refererstr, int64(pv.PagePv))
		c.Set(refererstr+"content", params.ItemTile)

		//Marshal失败时err!=nil
		marstr, err := json.Marshal(pv)
		if err != nil {
			//fmt.Println("生成json字符串错误")
		}
		c.Set(refererstr, marstr)

		//获取阅读排行榜
		recomlist := Recommend(err, c)
		pv.RecommendList = recomlist

		//Marshal失败时err!=nil
		marstr2, err2 := json.Marshal(pv)
		if err2 != nil {
			log.Println(err2)
		}
		r.Response.Write(`try{` + params.JsonpCallback + `(` + string(marstr2) + `);}catch(e){}`)
	}
}

// 阅读 热门排行
func Recommend(err error, c *gossdb.Client) []ItemArts {
	stringlist, _, err := c.Zrscan("list", "", "", "", 10)
	//fmt.Println("strings:"+ strings.Replace(strings.Trim(fmt.Sprint(stringlist), "[]"), " ", ",", -1))
	recomlist := dealItemList(stringlist, c)
	return recomlist
}

// 阅读 最新榜单
func RecommendNew(err error, c *gossdb.Client) []ItemArts {
	stringlist, _, err := c.Zrscan("list", "", "", "", 10)
	//fmt.Println("strings:"+ strings.Replace(strings.Trim(fmt.Sprint(stringlist), "[]"), " ", ",", -1))
	recomlist := dealItemList(stringlist, c)
	return recomlist
}

// 阅读 最佳贡献榜
func Cbi(err error, c *gossdb.Client) []ItemArts {
	stringlist, _, err := c.Zrscan("cbi", "", "", "", 10)
	//fmt.Println("strings:"+ strings.Replace(strings.Trim(fmt.Sprint(stringlist), "[]"), " ", ",", -1))
	recomlist := dealItemList(stringlist, c)
	return recomlist
}

func dealItemList(stringlist []string, c *gossdb.Client) []ItemArts {
	recomlist := make([]ItemArts, 0, len(stringlist))
	for i := 0; i < len(stringlist); i++ {
		url := stringlist[i]
		titlecon, err := c.Get(url + "content")
		if err != nil {
			continue
		}
		item := &ItemArts{
			Title: string(titlecon),
			Url:   url,
		}
		recomlist = append(recomlist, *item)

	}
	return recomlist
}

