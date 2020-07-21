package main;

import (
	"fmt"
	"github.com/fsnotify/fsnotify"
	"log"
	"os/exec"
	"time"
)
var ch chan int = make(chan  int )
var dis = time.Now()

func main() {
	//创建一个监控对象
	watch, err := fsnotify.NewWatcher();
	if err != nil {
		log.Fatal(err);
	}
	defer watch.Close();
	//添加要监控的对象，文件或文件夹
	err = watch.Add("/etc/nginx/html/blog/blog");
	if err != nil {
		log.Fatal(err);
	}
	//我们另启一个goroutine来处理监控对象的事件
	go func() {
		for {
			select {
			case ev := <-watch.Events:
				{
					//判断事件发生的类型，如下5种
					// Create 创建
					// Write 写入
					// Remove 删除
					// Rename 重命名
					// Chmod 修改权限
					if ev.Op&fsnotify.Create == fsnotify.Create {
						log.Println("创建文件 : ", ev.Name);
					}
					if ev.Op&fsnotify.Write == fsnotify.Write {
						log.Println("写入文件 : ", ev.Name);
					}
					if ev.Op&fsnotify.Remove == fsnotify.Remove {
						log.Println("删除文件 : ", ev.Name);
					}
					if ev.Op&fsnotify.Rename == fsnotify.Rename {
						log.Println("重命名文件 : ", ev.Name);
					}
					if ev.Op&fsnotify.Chmod == fsnotify.Chmod {
						log.Println("修改权限 : ", ev.Name);
					}

					ch <- 0

				}
			case err := <-watch.Errors:
				{
					log.Println("error : ", err);
					return;
				}
			}
		}
	}();

	go func() {
		for{
			select {
			case <-ch:
				{
					fmt.Println("modify")
					cur := time.Now().Sub(dis).Seconds()
					if cur > 10 {
						fmt.Println("hexo g")

						cmdStr := `
#!/bin/bash
cd /etc/nginx/html/blog/blog
hexo g
`
						cmd := exec.Command("bash", "-c", cmdStr)
						cmd.StdoutPipe()
						cmd.StderrPipe()
						err := cmd.Start()
						if err != nil {
							fmt.Println(err)
						}

						dis = time.Now()
					}
				}
			}
		}
	}()



	//循环
	select {};
}