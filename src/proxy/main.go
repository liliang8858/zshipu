package main

import (
	"crypto/rand"
	"fmt"
	"github.com/seefan/gossdb"
	"github.com/seefan/gossdb/conf"
	"log"
	"math/big"
	"strconv"
)

func main() {
	pool, err := gossdb.NewPool(&conf.Config{
		Host:             "127.0.0.1",
		Port:             8888,
		MinPoolSize:      5,
		MaxPoolSize:      50,
		AcquireIncrement: 5,
	})
	if err != nil {
		log.Fatal(err)
		return
	}


	c, err := pool.NewClient()
	if err != nil {
		log.Println(err.Error())
		return
	}
	defer c.Close()
	c.Set("test","hello world.")
	re, err := c.Get("test")
	if err != nil {
		log.Println(err)
	} else {
		log.Println(re, "is get")
	}
	//设置10 秒过期
	c.Set("test1",1225,10)
	//取出数据，并指定类型为 int
	re, err = c.Get("test1")
	if err != nil {
		log.Println(err)
	} else {
		log.Println(re.Int(), "is get")
	}

	//size, err := c.Qpush_front("ip", "192.168.1.1:20000")
	//fmt.Println(size)
	//i, err := c.Qpush_front("ip", "192.168.1.1:20001")
	//fmt.Println(i)
	//size2, err := c.Qpush_front("ip", "192.168.1.1:20002")
	//fmt.Println(size2)
	//size3, err := c.Qpush_front("ip", "192.168.1.1:20003")
	//fmt.Println(size3)

	size, err := c.Qsize("ip")
	if err != nil {
		fmt.Println(err)
	}
	max := big.NewInt(size)
	idx, err := rand.Int(rand.Reader, max)
	if err != nil {
		fmt.Println(err)
	}
	sprintf := fmt.Sprintf("%v", idx)
	fmt.Println(sprintf)
	intidx, err := strconv.Atoi(sprintf)
	if err != nil {
		fmt.Println(err)
	}
	v, err := c.Qget("ip",int64(intidx))
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(v)

}

