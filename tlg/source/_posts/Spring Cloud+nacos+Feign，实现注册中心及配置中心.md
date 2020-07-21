
title: Spring Cloud+nacos+Feign，实现注册中心及配置中心
author: 知识铺
date: 2020-07-16 18:39:59
tags:
---
 # 写在前面

注册中心、配置中心的概念就不在这里解释了。发现服务原来一直用的是Eureka，因为这家伙闭源了，不爽。然后就发现了nacos，阿里巴巴的，好东西，一个搞定注册中心和配置中心。官网：[https://nacos.io/en-us/](https://zshipu.com/t?url=https://nacos.io/en-us/)。官网的手册比较入门可以，实用化还需要结合项目。接下来简单介绍下如何使用nacos搭建注册中心和服务中心。

在进行下面操作前，自己去git上下载一个打包发布后的nacos服务，地址：[https://github.com/alibaba/nacos/releases](https://zshipu.com/t?url=https://github.com/alibaba/nacos/releases)。Linux下载第一个，windows下载第二个。后面两个是源码。如何启动使用nacos，nacos官网说的很详细，不再赘述。

![](https://img2020.cnblogs.com/blog/488159/202004/488159-20200419170916251-210044313.png)

# 注册中心

## 服务提供者

从[https://start.spring.io/](https://zshipu.com/t?url=https://start.spring.io/)下载一个原始的spring boot工程，别忘了添加Web依赖，如何下载就不在这里说了。添加依赖：

<dependency>
　　<groupId>com.alibaba.cloud</groupId>
　　<artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
　　<version>2.2.1.RELEASE</version>
</dependency>

**配置文件application.properties添加配置：**

server.port=8070
spring.application.name=service-provider
spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848

**启动类**：

![](https://img2020.cnblogs.com/blog/488159/202004/488159-20200419171707395-354987438.png)

** 添加一个测试用的Controller：**

![](https://img2020.cnblogs.com/blog/488159/202004/488159-20200419171907016-978205314.png)

 至此，服务提供者完成。

## 服务消费者

同服务提供者操作，下载一个原始的spring boot工程，添加依赖，**注意，**因为要使用feign调用服务提供者，要添加相应依赖：

<dependency>
　　<groupId>com.alibaba.cloud</groupId>
　　<artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
　　<version>2.2.1.RELEASE</version>
</dependency>
　　<dependency>
　　<groupId>org.springframework.cloud</groupId>
　　<artifactId>spring-cloud-starter-openfeign</artifactId>
　　<version>2.2.2.RELEASE</version>
</dependency>

**配置文件application.properties添加配置：**

server.port=8080
spring.application.name=service-consumer
spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848

**启动类：**

![](https://img2020.cnblogs.com/blog/488159/202004/488159-20200419172450332-632021520.png)

 **添加feign的client：**

![](https://img2020.cnblogs.com/blog/488159/202004/488159-20200419172628432-906108239.png)

 **添加测试controller：**

![](https://img2020.cnblogs.com/blog/488159/202004/488159-20200419172659471-520990514.png)

 准备工作完成，启动nacos、服务提供者，服务消费者。全部启动成功后，就可以在nacos的控制台界面里看到两个已经注册进去的服务：

![](https://img2020.cnblogs.com/blog/488159/202004/488159-20200419173019549-744122355.png)

 直接使用浏览器访问：[http://127.0.0.1:8080/consumer/hello-consumer](https://zshipu.com/t?url=http://127.0.0.1:8080/consumer/hello-consumer)。

# 配置中心

直接在上面的**服务提供者**中使用nacos的配置中心。添加依赖：

<dependency>
　　<groupId>com.alibaba.cloud</groupId>
　　<artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
　　<version>2.2.1.RELEASE</version>
</dependency>

在Controller添加以下注解及代码，并修改接口：

![](https://img2020.cnblogs.com/blog/488159/202004/488159-20200419173654043-1739993602.png)

 **配置文件application.properties添加配置：**

spring.cloud.nacos.config.server-addr=127.0.0.1:8848

重启服务提供者。

 在nacos控制台界面的【配置列表】中添加配置：

![](https://img2020.cnblogs.com/blog/488159/202004/488159-20200419173825984-1788722329.png)

 ![](https://img2020.cnblogs.com/blog/488159/202004/488159-20200419174208593-620819795.png)

 发布后，再访问[http://127.0.0.1:8080/consumer/hello-consumer](https://zshipu.com/t?url=http://127.0.0.1:8080/consumer/hello-consumer)。

# 写在最后

简单介绍了如何使用，至于用到的注解有什么用，大家自行百度。
