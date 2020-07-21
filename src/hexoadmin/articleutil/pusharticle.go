package articleutil

import (
	"encoding/json"
	"fmt"
	"gowww/hexoadmin/param"
	"io/ioutil"
	"net/http"
	"net/url"
	"os"
	"strings"
	"time"
)

type RequestInfo struct {
	Url string
	Content string
	Data map[string]string //post要传输的数据，必须key value必须都是string
	DataInterface map[string]interface{}
}
type NewPage struct {
	Title     string        `json:"title"`
	Author    string        `json:"author"`
	Content   string        `json:"_content"`
	Source    string        `json:"source"`
	Raw       string        `json:"raw"`
	Slug      string        `json:"slug"`
	Published bool          `json:"published"`
	Date      time.Time     `json:"date"`
	Updated   time.Time     `json:"updated"`
	Comments  bool          `json:"comments"`
	Layout    string        `json:"layout"`
	Photos    []interface{} `json:"photos"`
	Link      string        `json:"link"`
	ID        string        `json:"_id"`
	Site      struct {
		Data struct {
		} `json:"data"`
	} `json:"site"`
	Excerpt     string        `json:"excerpt"`
	More        string        `json:"more"`
	Path        string        `json:"path"`
	Permalink   string        `json:"permalink"`
	FullSource  string        `json:"full_source"`
	AssetDir    string        `json:"asset_dir"`
	Tags        []interface{} `json:"tags"`
	Categories  []interface{} `json:"categories"`
	IsDraft     bool          `json:"isDraft"`
	IsDiscarded bool          `json:"isDiscarded"`
}

type SavePage struct {
	Post struct {
		Title       string        `json:"title"`
		Author      string        `json:"author"`
		Date        time.Time     `json:"date"`
		Content     string        `json:"_content"`
		Source      string        `json:"source"`
		Raw         string        `json:"raw"`
		Slug        string        `json:"slug"`
		Published   bool          `json:"published"`
		Updated     time.Time     `json:"updated"`
		ID          string        `json:"_id"`
		Comments    bool          `json:"comments"`
		Layout      string        `json:"layout"`
		Photos      []interface{} `json:"photos"`
		Link        string        `json:"link"`
		Path        string        `json:"path"`
		Permalink   string        `json:"permalink"`
		FullSource  string        `json:"full_source"`
		AssetDir    string        `json:"asset_dir"`
		Tags        []interface{} `json:"tags"`
		Categories  []interface{} `json:"categories"`
		IsDraft     bool          `json:"isDraft"`
		IsDiscarded bool          `json:"isDiscarded"`
	} `json:"post"`
	TagsCategoriesAndMetadata struct {
		Categories struct {
			Ck8Nz5Rk7001Vjcdm9Prevx35 string `json:"ck8nz5rk7001vjcdm9prevx35"`
		} `json:"categories"`
		Tags struct {
			Ck8Nz5Rku001Wjcdm65N825Dl string `json:"ck8nz5rku001wjcdm65n825dl"`
			Ck8Nz5Rkw001Zjcdma49Idhtx string `json:"ck8nz5rkw001zjcdma49idhtx"`
		} `json:"tags"`
		Metadata []interface{} `json:"metadata"`
	} `json:"tagsCategoriesAndMetadata"`
}
//适用于 application/x-www-form-urlencoded
func (this RequestInfo) postUrlEncoded( )([]byte,error){
	client := &http.Client{}
	this.Content = strings.Replace(this.Content, "\n", "\\n", -1)
	fmt.Println("-----33302 url->",this.Url)
	fmt.Println("-----33302 content->",this.Content)

	req,err := http.NewRequest("POST",this.Url,strings.NewReader(this.Content))
	if err != nil{
		fmt.Println("----req,err := http.NewRequest(\"POST\",this.Url,strings.NewReader(this.Content))->:",err,this.Url)
		return nil,err
	}
	//伪装头部
	req.Header.Set("Accept","*/*")
	req.Header.Add("Accept-Encoding","gzip, deflate, br")
	req.Header.Add("Accept-Language","zh-CN,zh;q=0.9,en;q=0.8")
	req.Header.Add("Connection","keep-alive")
	req.Header.Add("Content-Length","15")
	req.Header.Add("Content-Type","application/json")
	req.Header.Add("Cookie","connect.sid=s%3A03tI8Fn5L74RZjq7Gp56vwbN8gdg1UDR.A%2FHNYt%2BGkn4tsAogJQziESp3xLxUlUXF%2B0zaq7X%2FOVc; UM_distinctid=171671a3f995ea-011737edc13156-235b0d4c-ff000-171671a3f9a416; _ga=GA1.1.2118846719.1586572712; sm_anonymous_id=79f8fcc1-81b6-4d62-b726-c29a4a18b688; __gads=ID=1011ae046465c878:T=1586592022:S=ALNI_MZcD3OLIAwjNTqaeOrTtO6d76JcJw; __cfduid=d50fb210c5b397fa9fd9ae663265ca0e91589691213; hibext_instdsigdipv2=1; CNZZDATA1278144647=692246298-1586587467-https%253A%252F%252Fzshipu.coding.net%252F%7C1589890075; __atuvc=1%7C17%2C0%7C18%2C0%7C19%2C0%7C20%2C4%7C21; Hm_lvt_6aa3f11e071bb2936fd0275e7fd3a182=1589892666,1590292425,1590292434,1590292445; Hm_lpvt_6aa3f11e071bb2936fd0275e7fd3a182=1590292445; _ga_M7TMLNPPFB=GS1.1.1590291341.23.1.1590292449.0")
	req.Header.Add("Host","zshipu.com")
	req.Header.Add("Origin","https://zshipu.com")
	req.Header.Add("Referer","https://zshipu.com/admintlg/")
	req.Header.Add("Sec-Fetch-Dest","empty")
	req.Header.Add("Sec-Fetch-Mode","cors")
	req.Header.Add("Sec-Fetch-Site","same-origin")
	req.Header.Add("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4090.0 Safari/537.36 Edg/83.0.467.0")
	//提交请求
	resp,err := client.Do(req)
	defer resp.Body.Close()
	if err != nil{
		fmt.Println("err client.Do ",err)
		return nil,err
	}
	fmt.Println("ok client.Do ")
	//读取返回值
	result,err := ioutil.ReadAll(resp.Body)
	if err != nil{
		fmt.Println("err ioutil.ReadAll ",err)
		return nil,err
	}
	fmt.Printf("ok client.ReadAll %s",result)
	fmt.Printf("ok client.ReadAll %v",result)
	return result,nil
}




func pushPage(someOne NewPage) {
	bdpush := &RequestInfo{
		Url:     "https://zshipu.com/admintlg/api/posts/" + someOne.ID + "/publish",
		Content: "",
	}
	bdpush.postUrlEncoded()
}

// 可以通过修改底层url.QueryEscape代码获得更高的效率，很简单
func encodeURIComponent(str string) string {
	r := url.QueryEscape(str)
	r = strings.Replace(r, "+", "%20", -1)
	return r
}


func Foo(src string, dist string) {
	r := url.QueryEscape(src)
	r = strings.Replace(r, "+", "%20", -1)
	if r != dist {
		fmt.Printf("ensrc:%s\ngo:%s\njs:%s\n\n", src, r, dist)
	}

	r2,_ := url.QueryUnescape(dist)

	if r2 != src {
		fmt.Printf("desrc:%s\ngo:%s\njs:%s\n\n", src, r, dist)
	}
}

type ContentStruct struct {
	Content string `json:"_content"`
}
func saveArticle(someOne NewPage,content string) {

	con:=&ContentStruct{
		Content:content,
	}
	constr, err := json.Marshal(con);
	if err != nil {
		fmt.Println("content to string",err)
		return
	}
	content = string(constr)

	bdsave := &RequestInfo{
		Url:     "https://zshipu.com/admintlg/api/posts/" + someOne.ID,
		Content: content,
	}


	_, errsave := bdsave.postUrlEncoded()
	if errsave != nil{
		fmt.Println("resultsave, errsave := bdsave.postUrlEncoded() ",errsave)
	}


}

func createPage(title string) (NewPage,error) {
	bd := &RequestInfo{
		Url:     "https://zshipu.com/admintlg/api/posts/new",
		Content: "{\"title\":\""+title+"\"}",
	}
	var someOne NewPage
	result, err := bd.postUrlEncoded()
	if err != nil {
		fmt.Println("createPage bd.postUrlEncoded",err)
		return someOne,err
	}
	fmt.Println("string(result)---> ",string(result))
	if err := json.Unmarshal([]byte(string(result)), &someOne); err == nil {
		fmt.Println("ok someOne.ID",someOne.ID)
	} else {
		fmt.Println("err someOne.ID",err)
		return someOne,err
	}
	return someOne,nil
}

func PostArticle(param *param.ReqUrlParam) {

	/*
	/etc/nginx/html/tlg/source/_posts

	*/

	//1. 查询文件是否存在
	var path = "/etc/nginx/html/tlg/source/_posts/"+param.Title+".md"
	exists, err := PathExists(path)
	if err != nil {
		return
	}
	if exists {
		path = "/etc/nginx/html/tlg/source/_posts/"+param.Title+"1.md"
	}

	var content = `
title: `+param.Title+`
author: 知识铺
date: `+GetCurTime()+`
tags:
---
 `+param.Content+`
`
	WriteToFile(path,content);

	fmt.Println(GetCurTime()," save ok !")

	//////创建一篇文章
	//someOne,err := createPage(param.Title)
	//if err != nil {
	//	fmt.Println("PostArticle err",err)
	//	return
	//}
	//////保存文章
	//saveArticle(someOne,param.Content)
	//
	//////发布文章
	//pushPage(someOne)

}

func PathExists(path string) (bool, error) {
	_, err := os.Stat(path)
	if err == nil {
		return true, nil
	}
	if os.IsNotExist(err) {
		return false, nil
	}
	return false, err
}

func WriteToFile(filepath string,msg string)  {
	f, err := os.Create(filepath)
	if err != nil {
		fmt.Println(err.Error())
	}

	_, err = f.Write([]byte(msg))
	if err != nil {
		fmt.Println(err.Error())
	}
	f.Close()
}

func GetCurTime() string {
	timeStr:=time.Now().Format("2006-01-02 15:04:05")

	return timeStr
}
