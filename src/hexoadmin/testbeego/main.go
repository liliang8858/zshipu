package main

import (
	"github.com/astaxie/beego"
)
type MainController struct {
	beego.Controller
}
func (this *MainController) Get() {
	this.Ctx.WriteString("hello world")
}
func main() {
	beego.Router("/ping", &MainController{})
	beego.RunWithMiddleWares(":8081")
}