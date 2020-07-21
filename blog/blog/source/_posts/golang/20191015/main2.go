package main

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"os"
	"strings"
	"time"
)

func main() {
	fmt.Println("helo")
	ReSetPhotoNames2()
}

func ReSetPhotoNames2() {
	photoFolder := "D:\\gowww\\blog\\blog\\source\\_posts\\golang\\20191015"

	files, _ := ioutil.ReadDir(photoFolder)
	for _, file := range files {
		if file.IsDir() {
			continue
		} else {
			fileName := file.Name()
			dotIndex := strings.LastIndex(fileName, ".")
			if fileName[dotIndex:] == ".md"{
				fpath := photoFolder + "\\" + fileName
				fmt.Println(fpath)


				f2, err := os.Open(fpath)
				if err != nil {
					continue
				}
				defer f2.Close()
				rd := bufio.NewReader(f2)
				title, err := rd.ReadString('\n')
				if err != nil {
					continue
				}
				title = strings.Replace(title,"#","" ,-1)
				title = strings.Replace(title,"\n","" ,-1)
				title = strings.Replace(title,"\r","" ,-1)
				title = strings.Replace(title, "\uFEFF", "", -1)

				bytes, err := ioutil.ReadFile(fpath)
				if err != nil {
					fmt.Println("error : %s", err)
					continue
				}
				content := string(bytes)
				timestamp := time.Now().Unix()
				tm := time.Unix(timestamp, 0)
				formattimestr := tm.Format("2006-01-02 15:04:05")
				fmt.Println(tm.Format("2006-01-02 15:04:05"))
				prx :=`---
title: go入门教程-`+title+`   
date: `+formattimestr+`   
categories: Golang   
tags: [go]   
---
`;
				f, err := os.OpenFile(fpath, os.O_WRONLY|os.O_TRUNC, 0600)
				defer f.Close()
				num, err := f.WriteString(prx+content)
				fmt.Println(num)
			}

		}
	}
}
