package main

import (
	"fmt"
	"log"
	"net/rpc"
)

type  Item struct{
	Title string
	Body  string
}


func main() {
	var reply Item
	var db []Item

	client, err := rpc.DialHTTP("tcp", "localhost:4040")
	if err != err {
		log.Fatal("Connection error",err)
	}

	a := Item{"first","a best item"}
	b := Item{"second","a secnd item"}
	c := Item{"third","a third item"}

	client.Call("Api.AddItem",a,&reply)
	client.Call("Api.AddItem",b,&reply)
	client.Call("Api.AddItem",c,&reply)

	client.Call("Api.GetDB","",&db)

	fmt.Println("database:",db)
}
