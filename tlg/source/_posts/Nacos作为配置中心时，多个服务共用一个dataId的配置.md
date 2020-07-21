
title: Nacos作为配置中心时，多个服务共用一个dataId的配置
author: 知识铺
date: 2020-07-16 18:32:26
tags:
---
 # 写在前面

本文是对我之前一篇文章《[Spring Cloud+nacos+Feign，实现注册中心及配置中心](https://zshipu.com/t?url=https://www.cnblogs.com/ncwuwsh/p/12732516.html)》的补充。此文章中简单写了如何将Nacos作为配置中心。在使用配置中心时，我们会遇到一种情况：多个微服务中有相同的配置，在配置中心中我们也就希望使用同一个dataId的配置。本文就是说明如何解决这个问题的。

# 多服务共用一个dataId

关于dataId，Nacos官网是这么解释的：

**在 Nacos Spring Cloud 中，```dataId``` 的完整格式如下：**

**```${prefix}-${spring.profile.active}.${file-extension}```** 

*   **```prefix``` 默认为 ```spring.application.name``` 的值，也可以通过配置项 ```spring.cloud.nacos.config.prefix```来配置。**
*   **```spring.profile.active``` 即为当前环境对应的 profile，详情可以参考 [Spring Boot文档](https://zshipu.com/t?url=https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-profiles.html#boot-features-profiles)。 注意：当 ```spring.profile.active``` 为空时，对应的连接符 ```-``` 也将不存在，dataId 的拼接格式变成 ```${prefix}.${file-extension}```**
*   **```file-exetension``` 为配置内容的数据格式，可以通过配置项 ```spring.cloud.nacos.config.file-extension``` 来配置。目前只支持 ```properties``` 和 ```yaml``` 类型**

上面的这段写的明白，我们可以用spring.cloud.nacos.config.prefix来替代spring.application.name的值。看到这里，大家肯定会认为，如果要多个服务共用一个dataId的配置，我将多个服务的spring.cloud.nacos.config.prefix写成一样的不就可以了吗？然后兴高采烈的去配置文件里做了这个配置，再启动程序，然后测试，可郁闷的发现，没有起作用。。。。。。。。，是不是很伤心，官方文档明明这么写的，却不起作用。

之所以没有起作用，是因为官方文档里虽然写了用spring.cloud.nacos.config.prefix配置，但没有写在哪里写这个配置，大家往往根据经验，写在了application.properties中，不对的，文档里没写，**这个配置是要写在bootstrap.properties中**，工程中没有这个文件？那就自己新建一个，和application.properties在相同路径下。

下面是我代码中的配置，我用的yaml格式，其他代码，参照《[Spring Cloud+nacos+Feign，实现注册中心及配置中心](https://zshipu.com/t?url=https://www.cnblogs.com/ncwuwsh/p/12732516.html)》

 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

server:
  port: 7080 spring:
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848 config:
        server-addr: 127.0.0.1:8848 **prefix: chris**
        **file****-****extension: yaml**
  application:
    name: demo2
 [![复制代码](//common.cnblogs.com/images/copycode.gif)](https://zshipu.com/t?url=javascript:void(0); "复制代码")

Nacos对应的截图为：

![](https://img2020.cnblogs.com/blog/488159/202005/488159-20200503220521867-608456388.png)

 ![](https://img2020.cnblogs.com/blog/488159/202005/488159-20200503220601772-389015988.png)

 上图中，两个箭头所指要注意：配置格式选择了YAML，配置内容就要按照YAML格式来写，配置格式选择了Properties，配置内容要按照Properties来写，不要搞错了。
