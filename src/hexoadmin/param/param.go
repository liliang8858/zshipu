package param

import (
	"encoding/json"
	"fmt"
	"github.com/gogf/gf/net/ghttp"
	"io/ioutil"
)

// 参数
type ReqUrlParam struct {
	Title       string `params:"title"`
	Content	    string `params:"content"`
}

func ParseParam(r *ghttp.Request) ReqUrlParam {
	con, _ := ioutil.ReadAll(r.Body) //获取post的数据

	var params ReqUrlParam

	if err := json.Unmarshal([]byte(string(con)), &params); err != nil {
		fmt.Println(err)
	}

	return params
}
