package main

import (
	"log"
	"net"
	"net/http"
	"net/rpc"
)

type  Item struct{
	Title string
	Body  string
}

type Api int

var database []Item

func(a *Api) GetDB(title string, reply *[]Item) error {
	*reply = database
	return nil
}

func (a *Api) GetByName(title string,reply *Item) error  {
	var getItem Item
	for _,val:=range database{
		if val.Title == title {
			getItem = val
		}
	}
	*reply = getItem
	return  nil
}

func CreateItem(item Item) Item  {
	database = append(database,item)
	return item
}

func  (a *Api)AddItem(item Item, reply *Item) error {
	database = append(database,item)
	*reply = item
	return nil
}
func  (a *Api)EditItem( edit Item, reply *Item) error {
	var changd Item
	for idx,val := range database  {
		if val.Title == edit.Title {
			database[idx] = Item{edit.Title,edit.Body}
			changd = database[idx]
		}
	}
	*reply = changd
	return nil
	
}

func (a *Api)DeleteItem(item Item, reply *Item)error  {
	var del Item
	for idx,val := range database  {
		if val.Title == item.Title && val.Body == item.Body {
			database = append(database[:idx],database[idx+1])
			del = item
			break
		}

	}
	*reply = del
	return nil
}

func main() {

	var api = new(Api)
	err := rpc.Register(api)
	if err != nil {
		log.Fatal("error regit api",err)

	}
	rpc.HandleHTTP()

	listen, err := net.Listen("tcp", ":4040")
	if err != nil {
		log.Fatal("Listener error",err)
	}

	log.Printf("server rpc on poort $d",4040)
	err = http.Serve(listen,nil)
	if err != nil {
		log.Fatal("error serving:",err)
	}




	//fmt.Println("init databasae",database)
	//a := Item{"first","a best item"}
	//b := Item{"second","a secnd item"}
	//c := Item{"third","a third item"}
	//
	//AddItem(a)
	//AddItem(b)
	//AddItem(c)
	//
	//fmt.Println("second database",database)
	//
	//DeleteItem(b)
	//
	//fmt.Println("third datbase",database)
	//
	//EditItem("third",Item{"fourth","a new item"})
	//
	//fmt.Println("fourth database:",database)
	//
	//x := GetByName("fourth")
	//y := GetByName("first")
	//
	//fmt.Println(x,y)


}
