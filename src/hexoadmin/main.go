package main

import (
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/net/ghttp"
	"gowww/hexoadmin/articleutil"
	"gowww/hexoadmin/param"
)

func main() {


	s := g.Server()
	s.BindHandler("/createArticle", func(r *ghttp.Request) {
		// 解析参数
		params := param.ParseParam(r)

		//发布一篇文章
		articleutil.PostArticle(&params)

	})
	s.SetPort(5050)
	s.Run()

}


