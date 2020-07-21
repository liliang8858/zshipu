package httpget

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

// 获取url内容
func HttpGet(url string) string {
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println(err)
		return ""
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
		return ""
	}

	return string(body)

}
