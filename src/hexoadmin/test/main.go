package main

import "github.com/gin-gonic/gin"

func main() {

	r := gin.New()
	r.GET("/ping", func(c *gin.Context) {
		c.String(200,"hello world")
	})
	r.Run() // 监听并在 0.0.0.0:8080 上启动服务
}