
title: SpringCloudAlibaba(二)：Nacos介绍与环境安装
author: 知识铺
date: 2020-07-16 17:26:15
tags:
---
 SpringCloud alibaba在之前已经进行了大概的介绍,在微服务环境下对于大量存在的服务管理等肯定需要一个统一的服务注册中心，同时也由于之前提到的集中式配置中心的需求。那么在SpringCloud alibaba中最优的选择就是Nacos。

### <a name="t0"></a><a name="t0"></a>什么是Nacos?

Nacos用于服务的注册发现与服务的配置管理。Nacos提供了简单易用的Web Console。可以帮助开发者快速的实现服务发现、服务配置管理、服务元数据等需求。
它类似于Dubbo的zookeeper注册中心、SpringCloud 的Eureka等。同时又支持了分布式服务配置管理等特点。

### <a name="t1"></a><a name="t1"></a>Nacos的关键特性

*   服务注册发现与健康检查

*   动态配置管理，可视化管理界面

*   动态DNS

*   服务及元数据管理

### <a name="t2"></a><a name="t2"></a>Nacos 地图

![](https://img-blog.csdnimg.cn/20200508174625934.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTE1MzIxMDU=,size_16,color_FFFFFF,t_70)

### <a name="t3"></a><a name="t3"></a>Nacos生态图

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWdrci5jbi1iai51ZmlsZW9zLmNvbS83OTkwYjU2Yi1kYmVkLTQzNGEtOTU2OC1kMjEyZjJlZDM4ZGIucG5n?x-oss-process=image/format,png)

### <a name="t4"></a><a name="t4"></a>Nacos基础架构与概念

### <a name="t5"></a>![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWdrci5jbi1iai51ZmlsZW9zLmNvbS9iZWFkNWQ3My02NzFiLTRkOTQtYWU0Ny1lMWM5YWQwMDZkYzAuanBlZw?x-oss-process=image/format,png)

*   服务 (Service)
    服务是指一个或一组软件功能（例如特定信息的检索或一组操作的执行），其目的是不同的客户端可以为不同的目的重用（例如通过跨进程的网络调用）。Nacos 支持主流的服务生态，如 Kubernetes Service、gRPC|Dubbo RPC Service 或者 Spring Cloud RESTful Service.

*   服务注册中心 (Service Registry)
    服务注册中心，它是服务，其实例及元数据的数据库。服务实例在启动时注册到服务注册表，并在关闭时注销。服务和路由器的客户端查询服务注册表以查找服务的可用实例。服务注册中心可能会调用服务实例的健康检查 API 来验证它是否能够处理请求。

*   服务元数据 (Service Metadata)
    服务元数据是指包括服务端点(endpoints)、服务标签、服务版本号、服务实例权重、路由规则、安全策略等描述服务的数据

*   服务提供方 (Service Provider)
    是指提供可复用和可调用服务的应用方

*   服务消费方 (Service Consumer)
    是指会发起对某个服务调用的应用方

*   配置 (Configuration)
    在系统开发过程中通常会将一些需要变更的参数、变量等从代码中分离出来独立管理，以独立的配置文件的形式存在。目的是让静态的系统工件或者交付物（如 WAR，JAR 包等）更好地和实际的物理运行环境进行适配。配置管理一般包含在系统部署的过程中，由系统管理员或者运维人员完成这个步骤。配置变更是调整系统运行时的行为的有效手段之一。

*   配置管理 (Configuration Management)
    在数据中心中，系统中所有配置的编辑、存储、分发、变更管理、历史版本管理、变更审计等所有与配置相关的活动统称为配置管理。

*   名字服务 (Naming Service)
    提供分布式系统中所有对象(Object)、实体(Entity)的“名字”到关联的元数据之间的映射管理服务，例如 ServiceName -> Endpoints Info, Distributed Lock Name -> Lock Owner/Status Info, DNS Domain Name -> IP List, 服务发现和 DNS 就是名字服务的2大场景。

*   配置服务 (Configuration Service)
    在服务或者应用运行过程中，提供动态配置或者元数据以及配置管理的服务提供者。

## <a name="t6"></a><a name="t6"></a>安装Nacos

### <a name="t7"></a><a name="t7"></a>1\. 预备环境准备

nacos是依赖Java环境运行的,如果使用源码来编译运行Nacos那么需要首先准备Apache Maven环境。

 ```1.  64 bit OS，支持 Linux/Unix/Mac/Windows，推荐选用 Linux/Unix/Mac。

2.  64 bit JDK1.8+；

3.  Maven 3.2+;``` 
### <a name="t8"></a><a name="t8"></a>2\. 下载源码或安装包

可以选择使用源码或直接使用安装包的方式获取Nacos

 ```1.  从Github下载源码的方式

2.  git clone https://github.com/alibaba/nacos.git

3.  cd nacos/

4.  mvn -Prelease-nacos -Dmaven.test.skip=true clean install -U 

5.  ls -al distribution/target/

7.  // change the $version to your actual path

8.  cd distribution/target/nacos-server-$version/nacos/bin

10.  下载编译后的压缩包方式

11.  unzip nacos-server-$version.zip 或者 tar -xvf nacos-server-$version.tar.gz

12.  cd nacos/bin``` 
### <a name="t9"></a><a name="t9"></a>3.配置MySql服务器

Nacos可以通过两种方式进行数据的持久化管理,1.JDK自带的Derby DB内存数据库 2.使用MySql数据库. 由于DerbyDB对于数据的展现不是很友好,所以我们选择MySql数据库。

```##初始化MySql数据库.``````下载解压Nacos后可以在 /conf目录下找到 nacos-mysql.sql 文件用于初始化MySql数据库.``````##修改Nacos连接配置``````选择 /conf/application.properties配置文件.``````找到 If user MySQL as datasource  修改如下配置信息```
```spring.datasource.platform=mysql```
```### Count of DB:``````db.num=1```
```### Connect URL of DB:``````db.url.0=jdbc:mysql://localhost:3306/nacos_config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true``````db.user=XXX``````db.password=XXXXXXX```
### <a name="t10"></a><a name="t10"></a>4\. 启动服务器

Linux/Unix/Mac

启动命令(Standalone代表单机模式,非集群模式):

```sh startup.sh -m standalone```

如果您使用的是ubuntu系统，或者运行脚本报错提示[[符号找不到，可尝试如下运行

```bash startup.sh -m standalone```

Windows

启动命令

```cmd startup.cmd```
### <a name="t11"></a><a name="t11"></a>5\. Web Console

Nacos的默认端口为8848，启动完成后可以通过访问 http://localhost:8848/nacos 进入web控制台,默认帐号密码为 nacos/nacos

### <a name="t12"></a><a name="t12"></a>6\. 服务注册发现管理

*   服务注册
    _curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?serviceName=nacos.naming.serviceName&ip=20.18.7.10&port=8080'_

*   服务发现
    _curl -X GET 'http://127.0.0.1:8848/nacos/v1/ns/instance/list?serviceName=nacos.naming.serviceName'_

*   发布配置
    _curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test&content=HelloWorld"_

*   获取配置
    _curl -X GET "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test"_

### <a name="t13"></a><a name="t13"></a>7\. 关闭服务器

Linux/Unix/Mac

```sh shutdown.sh```

Windows

```cmd shutdown.cmd```

或者双击shutdown.cmd运行文件。
