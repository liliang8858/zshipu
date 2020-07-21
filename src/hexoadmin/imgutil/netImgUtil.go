package imgutil

import (
	"encoding/base64"
	"fmt"
	"io/ioutil"
	"net/http"
)

// 下载远程图片
func ImagDownload(imgUrl string)([]byte,error)  {

	res, err := http.Get(imgUrl)
	if err != nil {
		fmt.Println("A error occurred!")
		return nil,err
	}
	defer res.Body.Close()
	// 获得get请求响应的reader对象
	body, err := ioutil.ReadAll(res.Body)

	return body,err
}

func Img2base64Byte(imgbyte []byte ) []byte {
	bufstore := make([]byte, 10000000)                     //数据缓存
	base64.StdEncoding.Encode(bufstore, imgbyte)               // 文件转base64
	return bufstore
}

func Img2base64(filename string) []byte {
	ff, _ := ioutil.ReadFile(filename)               //我还是喜欢用这个快速读文件
	bufstore := make([]byte, 10000000)                     //数据缓存
	base64.StdEncoding.Encode(bufstore, ff)               // 文件转base64
	return bufstore
}