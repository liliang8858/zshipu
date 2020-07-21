
title: Spring Cloud Gateway+Nacos，yml+properties两种配置文件方式搭建网关服务
author: 知识铺
date: 2020-07-16 18:43:02
tags:
---
 # 写在前面

网关的作用不在此赘述，举个最常用的例子，我们搭建了微服务，前端调用各服务接口时，由于各服务接口不一样，如果让前端同事分别调用，前端同事会疯的。而网关就可以解决这个问题，网关屏蔽了各业务服务的端口，对前端同事来说，他们只负责调用网关服务端口下的服务就可以了。本文简单描述如何使用Spring Cloud全家桶中的网关服务，再配以Nacos。关于Nacos简单应用，可以看我其他博客。

# 服务提供者

从[https://start.spring.io/](https://zshipu.com/t?url=https://start.spring.io/)下载一个原始的spring boot工程，如何下载就不在这里说了。添加依赖：

 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

<dependency>
　　<groupId>org.springframework.boot</groupId>
　　<artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
　　<groupId>com.alibaba.cloud</groupId>
　　<artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
　　<version>2.2.1.RELEASE</version>
</dependency>
<dependency>
　　<groupId>com.alibaba.cloud</groupId>
　　<artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
　　<version>2.2.1.RELEASE</version>
</dependency>

 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

分别添加了web依赖、配置中心依赖和注册中心依赖。

配置文件如下：

 server.port=8070
spring.application.name=service-provider
spring.cloud.nacos.config.server-addr=127.0.0.1:8848
spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848

启动类如下：

 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

package com.chris.springboot; import org.springframework.boot.SpringApplication; import org.springframework.boot.autoconfigure.SpringBootApplication; import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient public class MySpringbootApplication { public static void main(String[] args) {
        SpringApplication.run(MySpringbootApplication.class, args);
    }
}
 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

接口类如下：

 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

package com.chris.springboot.controller; import org.springframework.beans.factory.annotation.Value; import org.springframework.cloud.context.config.annotation.RefreshScope; import org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/provider")
@RefreshScope public class ConfigController {

    @Value(value = "${Hello:123}") private String hello;

     @GetMapping("/helloProvider") public String helloProvider(){ return hello;
        }
}
 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

此服务为我的博客：[https://www.cnblogs.com/ncwuwsh/p/12732516.html](https://zshipu.com/t?url=https://www.cnblogs.com/ncwuwsh/p/12732516.html)中的服务，可参看。

# 网关服务

从[https://start.spring.io/](https://zshipu.com/t?url=https://start.spring.io/)下载一个原始的spring boot工程，如何下载就不在这里说了。添加依赖：

 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

　　　　 <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-gateway</artifactId>
        </dependency>
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
            <version>2.2.1.RELEASE</version>
        </dependency>
 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

**注意，千万不要添加web依赖。**

配置文件可以使用properties，也可以使用yml格式。yml格式如下：

 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

server:
  port: 8080
spring:
  application:
    name: api-gateway
  cloud:
    nacos: 
      discovery: 
        server-addr: 127.0.0.1:8848
    gateway:
      discovery:
        locator:
          enabled: true #表明gateway开启服务注册和发现的功能，并且spring cloud gateway自动根据服务发现为每一个服务创建了一个router，这个router将以服务名开头的请求路径转发到对应的服务。
          lower-case-service-id: true #是将请求路径上的服务名配置为小写（因为服务注册的时候，向注册中心注册时将服务名转成大写的了），比如以/service-hi/*的请求路径被路由转发到服务名为service-hi的服务上。
      routes:
        - id: gateway-service
          uri: lb://service-provider #此配置的值注册到Nacos中服务提供者的spring.application.name的值
          predicates:
            - Path=/provider/**
 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

**使用yml的同学，一定要去查下yml的一些规则，比如 ：后面，值的前面，一定要有空格，缩进不要使用tab键，而要用两个空格缩进等**

下面是properties格式配置文件：

 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

server.port=8080
spring.application.name=api-gateway
spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848
#表明gateway开启服务注册和发现的功能，并且spring cloud gateway自动根据服务发现为每一个服务创建了一个router，这个router将以服务名开头的请求路径转发到对应的服务。
spring.cloud.gateway.discovery.locator.enabled=true
#是将请求路径上的服务名配置为小写（因为服务注册的时候，向注册中心注册时将服务名转成大写的了），比如以/service-hi/*的请求路径被路由转发到服务名为service-hi的服务上。
spring.cloud.gateway.discovery.locator.lower-case-service-id=true
spring.cloud.gateway.routes[0].id=gateway-service
spring.cloud.gateway.routes[0].uri=lb://service-provider
spring.cloud.gateway.routes[0].predicates[0]=Path=/provider/**
 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

下面是网关的启动类：

 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

package com.chris.gatewayrouter; import org.springframework.boot.SpringApplication; import org.springframework.boot.autoconfigure.SpringBootApplication; import org.springframework.cloud.client.discovery.EnableDiscoveryClient; import org.springframework.cloud.gateway.route.RouteLocator; import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder; import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient public class GatewayrouterApplication { public static void main(String[] args) {
        SpringApplication.run(GatewayrouterApplication.class, args);
    }

    @Bean public RouteLocator myRoutes(RouteLocatorBuilder builder) { return builder.routes().build();
    }

}
 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

然后启动Nacos，服务提供者和网关服务，使用浏览器访问：[http://127.0.0.1:8080/provider/helloProvider](https://zshipu.com/t?url=http://127.0.0.1:8080/provider/helloProvider)

搞定。

网关服务的其他高级应用，自己去看官网吧。

官网是最好的老师
