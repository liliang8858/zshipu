package main

import (
	"flag"
	"fmt"
	mqtt "github.com/eclipse/paho.mqtt.golang"
	"sync"
	"time"
)


/*
***
*
* 连接任务和发布消息方法
*/
func mqttConnPubMsgTask(taskId int, waitGroup *sync.WaitGroup) {
	defer waitGroup.Done()
	//设置连接参数
	clinetOptions := mqtt.NewClientOptions().AddBroker("tcp://106.12.184.132:1883").SetUsername("admin").SetPassword("hlwadmin")
	//设置客户端ID
	clinetOptions.SetClientID(fmt.Sprintf("go Publish client example： %d-%d", taskId, time.Now().Unix()))
	//设置handler
	clinetOptions.SetDefaultPublishHandler(messagePubHandler)
	//设置连接超时
	clinetOptions.SetConnectTimeout(time.Duration(60) * time.Second)
	//创建客户端连接
	client := mqtt.NewClient(clinetOptions)

	//客户端连接判断
	if token := client.Connect(); token.WaitTimeout(time.Duration(60)*time.Second) && token.Wait() && token.Error() != nil {
		failNums++
		fmt.Printf("[Pub] mqtt connect error, taskId: %d, fail_nums: %d, error: %s \n", taskId, failNums, token.Error())
		return
	}

	i := 0

	for {
		i++
		time.Sleep(time.Duration(3) * time.Second)
		text := fmt.Sprintf("this is test msg #%d ! from task :%d", i, taskId)
		//fmt.Printf("start publish msg to mqtt broker, taskId: %d, count: %d \n", taskId, i)
		//发布消息
		token := client.Publish("article", 1, false, text)
		fmt.Printf("[Pub] end publish msg to mqtt broker, taskId: %d, count: %d, token : %s \n", taskId, i, token)
		token.Wait()
	}

	client.Disconnect(250)
	fmt.Println("[Pub] task is ok")

}




//创建全局mqtt publish消息处理 handler
var messagePubHandler mqtt.MessageHandler = func(client mqtt.Client, msg mqtt.Message) {
	fmt.Printf("Pub Client Topic : %s \n", msg.Topic())
	fmt.Printf("Pub Client msg : %s \n", msg.Payload())
}


//连接失败数
var failNums = 0
/***
* 创建客户端连接
 */
func main() {
	clientNum := flag.Uint64("clientNum", 30000, "client nums")
	flag.Parse()
	nums := int(*clientNum)
	waitGroup := sync.WaitGroup{}

	for i:= 0; i < nums; i++ {
		fmt.Printf("publish client num : %s \n" , i)
		waitGroup.Add(1)
		time.Sleep(3 * time.Millisecond)
		//调用连接和发布消息
		go mqttConnPubMsgTask(i , &waitGroup)

	}

	waitGroup.Wait()
}