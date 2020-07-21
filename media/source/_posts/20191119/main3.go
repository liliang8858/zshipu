package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

func main() {
	fmt.Println("helo")
	rename()
}

func rename() {
	photoFolder := "E:\\app\\im-ai\\knowledge-base\\blog\\article\\content\\post\\other\\20191119"
	dealpathrename(photoFolder)
}
func dealpathrename(photoFolder string) {
	files, _ := ioutil.ReadDir(photoFolder)
	for _, file := range files {
		if file.IsDir() {
			subpath := file.Name()
			fpath := photoFolder + "\\" + subpath
			dealpathrename(fpath)
		} else {
			fileName := file.Name()
			fpath := photoFolder + "\\" + fileName
			fmt.Println(fpath)
			dotIndex := strings.LastIndex(fileName, ".")
			if dotIndex < 0 {
				continue
			}
			if fileName[dotIndex:] == ".md"{
				nname := strings.ReplaceAll(fileName,"ddd","satj")
				npath :=  photoFolder + "\\" + nname
				os.Rename(fpath, npath)
			}

		}
	}
}