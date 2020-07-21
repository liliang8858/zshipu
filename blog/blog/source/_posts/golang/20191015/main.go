package main

import (
	"bufio"
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

func main() {
	fmt.Println("helo")
	ReSetPhotoNames()
}

func ReSetPhotoNames() {
	photoFolder := "E:\\app\\im-ai\\knowledge-base\\blog\\blog\\source\\_posts\\golang\\20191015"
	//photoFoldermenu := "E:\\app\\im-ai\\knowledge-base\\blog\\blog\\source\\_posts\\golang\\20191015\\go入门教程-目录.md2"
	//photoFoldermenunew := "E:\\app\\im-ai\\knowledge-base\\blog\\blog\\source\\_posts\\golang\\20191015\\go入门教程-目录.md3"
	//in, err := os.Open(photoFoldermenu)
	//if err != nil {
	//	return
	//}
	//defer  in.Close()
	//out, err := os.OpenFile(photoFoldermenunew, os.O_RDWR|os.O_CREATE, 0766)
	//if err != nil {
	//	return
	//}
	//defer out.Close()
	//
	//bytes, err := ioutil.ReadFile(photoFoldermenu)
	//if err != nil {
	//	return
	//}
	//
	//strs := string(bytes)
	//fmt.Println(strs)

	files, _ := ioutil.ReadDir(photoFolder)
	for _, file := range files {
		if file.IsDir() {
			continue
		} else {
			fileName := file.Name()
			f, err := os.Open(photoFolder+"\\"+fileName)
			if err != nil {
				continue
			}
			defer f.Close()
			rd := bufio.NewReader(f)
			line, err := rd.ReadString('\n')
			if err != nil {
				continue
			}
			line = strings.Replace(line,"#","" ,-1)
			line = strings.Replace(line,"\n","" ,-1)
			line = strings.Replace(line,"\r","" ,-1)
			line = strings.Replace(line, "\uFEFF", "", -1)

			dotIndex := strings.LastIndex(fileName, ".")
			if fileName[dotIndex:] == ".md"{
				line = strings.Trim(line," ")
				if strings.Index(line,"10.8") == 0 {
					fmt.Println(line)
				}
				newFileName :=  line + ".md"
				fmt.Println(newFileName)
				//strs = strings.Replace(strs,"("+fileName+")","("+newFileName+")",-1)
				err2 := os.Rename(photoFolder+"\\"+fileName, photoFolder+"\\"+newFileName)
				if err2 != nil {
					fmt.Println("reName Error", err2)
					continue
				}
			}


		}
	}
	//fmt.Println(strs)
}

func GetMD5Hash(text string) string {
	haser := md5.New()
	haser.Write([]byte(text))
	return hex.EncodeToString(haser.Sum(nil))
}