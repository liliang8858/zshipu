title: MQTT之Mosquitto源码分析
author: 知识铺
date: 2020-04-11 13:10:29
tags:
---

一、  Mosquitto简介

mosquitto是一款实现了消息推送协议MQTT v3.1 的开源消息代理软件，提供轻量级的，支持可发布/可订阅的的消息推送模式，使设备对设备之间的短消息通信变得简单，例如现在应用广泛的低功耗传感器，手机、嵌入式计算机、微型控制器等移动设备。

Mosquitto采用出版/订阅的模式实现MQTT协议，这种设计模式将通信终端之间的关系统一到服务程序中进行管理，可极大减轻客户端的开发和维护工作。

1.1、  mqtt协议简介

MQTT（MessageQueuing Telemetry Transport，消息队列遥测传输）是IBM开发的一个即时通讯协议，有可能成为物联网的重要组成部分。在某些应用场合中，可通过该协议维持与客户端的长连接。关于mqtt协议更详细的介绍，请参考其官方网站：http://mqtt.org/

其他版本源码下载位置：http://mosquitto.org/files/source/

1.2、  出版/订阅模式简介

出版/订阅模式定义了如何向一个节点发布和订阅消息，这些节点被称作主题(topic)。主题可以被认为是消息的传输中介，发布者(publisher)发布消息到主题，订阅者(subscriber) 从主题订阅消息。这种模式使得消息订阅者和消息发布者保持互相独立，不需要接触即可保证消息的传送。

 

[mosquitto github开源代码](https://zshipu.com/t?url=https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Feclipse%2Fmosquitto)

[mosquitto 官方网站](https://zshipu.com/t?url=https://links.jianshu.com/go?to=https%3A%2F%2Fmosquitto.org%2F)

[趁着年轻：《Mosquitto pub/sub服务实现代码浅析-主体框架》](https://zshipu.com/t?url=https://links.jianshu.com/go?to=http%3A%2F%2Fchenzhenianqing.com%2Farticles%2F985.html)

[小诺Z《Mosquitto集群搭建》](https://zshipu.com/t?url=https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fz729685731%2Farticle%2Fdetails%2F70142182)

[逍遥子《mosquitto源码分析（一）》简介](https://zshipu.com/t?url=https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fhoujixin%2Farticle%2Fdetails%2F21461225)

[逍遥子《mosquitto源码分析（二）》数据结构](https://zshipu.com/t?url=https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fhoujixin%2Farticle%2Fdetails%2F21462005)

[逍遥子《mosquitto源码分析（三）》订阅树](https://zshipu.com/t?url=https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fhoujixin%2Farticle%2Fdetails%2F21462255)

[逍遥子《mosquitto源码分析（四）》订阅树](https://zshipu.com/t?url=https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fhoujixin%2Farticle%2Fdetails%2F21463965)

[逍遥子《mosquitto源码分析（五）》Poll和消息收发](https://zshipu.com/t?url=https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fhoujixin%2Farticle%2Fdetails%2F21464519)

[逍遥子《mosquitto源码分析（六）》日志](https://zshipu.com/t?url=https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fhoujixin%2Farticle%2Fdetails%2F21465011)

[逍遥子《Mosquito的优化——epoll优化（七）》](https://zshipu.com/t?url=https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fhoujixin%2Farticle%2Fdetails%2F46413583)

[逍遥子《Mosquito的优化——订阅树优化（八）》](https://zshipu.com/t?url=https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fhoujixin%2Farticle%2Fdetails%2F46413783)

[逍遥子《Mosquito的优化——其他优化（九）》](https://zshipu.com/t?url=https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fhoujixin%2Farticle%2Fdetails%2F46413941)