package httpimg

import (
	"bytes"
	"fmt"
	"gowww/crawler/httpget"
	"io"
	"os"
	"strings"
)

func GetImg(url string) (n int64, err error) {
	path := strings.Split(url, "/")
	var name string
	if len(path) > 1 {
		name = path[len(path)-1]
	}
	fmt.Println(name)
	out, err := os.Create(name) // 创建文件
	defer out.Close()

	pix := httpget.HttpGet(url) // 获取图片
	pic := []byte(pix)
	n, err = io.Copy(out, bytes.NewBuffer(pic))
	return
}
