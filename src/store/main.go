package main

import (
	"encoding/json"
	"fmt"
	"gowww/store/models"
	"gowww/store/storage"
)

func main() {
	fmt.Println("hello")
	db := storage.NewLevDb()
	article := models.NewArticle()
	article.Content = "第一个文章2"
	article.Type = "t"
	article.Title = "第一个文章2"
	db.CreateItem(article)

	articles, _ := db.GetAll()

	bytes, _ := json.MarshalIndent(articles, "", "")
	fmt.Printf("%s", string(bytes))

	articlete, _ := db.GetItemById("cdd096c920c96c505bd4ff89b47ec950")
	idt, _ := json.MarshalIndent(articlete, "", "")
	fmt.Printf("%s", string(idt))

}
