package main

import (
	"fmt"
	"gowww/crawler/httpget"
)

func main() {
	gethtml := httpget.HttpGet("http://www.baidu.com")
	fmt.Println(gethtml)

}
