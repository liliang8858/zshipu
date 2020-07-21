package main

import (
	"log"
	"net"
	"net/rpc"
)

// 1. 定义实体类型
type Gstus struct {}


/*
   2. 定义service fun
Go语言的RPC规则：方法只能有两个可序列化的参数，
                 其中第二个参数是指针类型，
                并且返回一个error类型，同时必须是公开的方法
*/
func (p Gstus) Printgs(request string, reply *string) error {
	*reply = "ok:"+request
	return nil
}

func main() {
	// 3. 注册
	rpc.RegisterName("tgs",new(Gstus))

	listener, err := net.Listen("tcp", ":1234")
	if err != nil {
		log.Fatal("ListenTCP error:", err)
	}

	conn, err := listener.Accept()
	if err != nil {
		log.Fatal("Accept error:", err)
	}

	// 4. 开启服务端 并监听注册端口
	rpc.ServeConn(conn)

}
