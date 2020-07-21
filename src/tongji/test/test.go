package main

import (
	"fmt"
	"net/url"
)

func main() {
	t := &url.URL{Path: "https://blog.zshipu.com/note/2019/11/03/Hexo admin 自动发布文章/"}
	urlstr := t.String()
	fmt.Println(urlstr)
	fmt.Println(urlstr[2:])
	fmt.Println(url.QueryEscape("https://blog.zshipu.com/note/2019/11/03/Hexo admin 自动发布文章/"))


}
