
title: Nacos 集群部署
author: 知识铺
date: 2020-07-16 17:31:53
tags:
---
  

**阅读目录**

*   [准备数据库](https://zshipu.com/t?url=#_label0)
*   [准备nacos](https://zshipu.com/t?url=#_label1)
*   [观察集群](https://zshipu.com/t?url=#_label2)
*   [Nacos + Docker 集群](https://zshipu.com/t?url=#_label3)
*   [通过Nginx配置真正的集群](https://zshipu.com/t?url=#_label4)
*   [其他注意事项](https://zshipu.com/t?url=#_label5)

关于nacos 集群部署，网上的示例往往不全或不可用，而官方的教程太简单了。官方也提供了一个 docker  + nacos 的伪集群的 部署示例。但毕竟是 伪， 不能实际生产使用。

全网就几乎就没有一个 完整的教程？？？！！！

怎么办呢？ 自己动手吧。

 <a name="_label0"></a>

## 准备数据库

数据库用了 mysql， 其实nacos 也是支持mysql  主从集群的，不过简单起见， 这里就只用了一个 mysql 节点。 mysql 是需要自己事先安装 配置的（需要执行 nacos 提供的 conf/nacos-mysql.sql 脚本）

这个其实很简单。schema 名字不重要，重要的是 执行 nacos 的sql 脚本就好了。

 <a name="_label1"></a>

## 准备nacos

一般集群需要至少3个节点。我们先准备3台机器： 192.168.11.200、192.168.11.196、192.168.11.126

nacos 的默认服务端口是 8848 ，但是由于 我们的机器上还有其他nacos 服务正在作用，所以， 我们这里把端口改为 8748， 如下：

192.168.11.200:8748
192.168.11.196:8748
192.168.11.126:8748

我们需要nacos-server 的安装包， 1.0.0.zip 版本并没有 集群的展示功能， 我们这里使用 nacos-server-1.1.0.zip， 这个也是最新的 nacos server 安装包。 （从github 上下载非常耗时， 最好把这个安装包 共享起来）

安装目录是 /app， 没有的话， 需要自己创建。 将nacos-server-1.1.0.zip 上传到 /app 目录， 然后进入cd /app,

执行下面的 shell （需要3个节点上都要执行！！）：

unzip nacos-server-1.1.0.zip  -d nacos-cluster  && cd nacos-cluster/nacos  && cp conf/cluster.conf.example  conf/cluster.conf  && 

echo "192.168.11.200:8748
192.168.11.196:8748
192.168.11.126:8748" >  conf/cluster.conf  && sed -i s/server\.port=8848/server\.port=8748/  conf/application.properties  && echo "

spring.datasource.platform=mysql

db.num=1
db.url.0=jdbc:mysql://192.168.11.200:3316/test3?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true
db.user=root
db.password=123456"  >> conf/application.properties  && sh bin/startup.sh

上面的脚本，需要按照情况修改， 主要是其中的 端口、 数据库配置。  上面的脚本 包括了 启动 nacos。 

如果 3个节点都能正常访问了，那么就表明集群部署基本正常了，如果有问题， 那么可以查看nacos 的日志， 位于  logs目录， 主要 是下面几个日志文件：

/app/nacos-cluster/nacos/start.out
/app/nacos-cluster/nacos/nacos.out
/app/nacos-cluster/nacos/naming-raft.out

 <a name="_label2"></a>

## 观察集群

3个节点都正常启动之后， 可以分别登录 各个web 界面查看 集群的节点、健康状态：

[http://192.168.11.126:8748/nacos/#/clusterManagement?dataId=&group=&appName=&namespace=&serverId=](https://zshipu.com/t?url=http://192.168.11.196:8748/nacos/#/clusterManagement?dataId=&group=&appName=&namespace=&serverId=)

[http://192.168.11.196:8748/nacos/#/clusterManagement?dataId=&group=&appName=&namespace=&serverId=](https://zshipu.com/t?url=http://192.168.11.196:8748/nacos/#/clusterManagement?dataId=&group=&appName=&namespace=&serverId=)

[http://192.168.11.200:8748/nacos/#/clusterManagement?dataId=&group=&appName=&namespace=&serverId=](https://zshipu.com/t?url=http://192.168.11.196:8748/nacos/#/clusterManagement?dataId=&group=&appName=&namespace=&serverId=)

最开始的时候， 所有节点都没有启动， 集群任期 应该都是0 

![](https://img2018.cnblogs.com/blog/493842/201907/493842-20190717151727270-1463276167.png)

（看到这个图片， 说明 3个节点都正常启动了， 否则请检查是否有步骤遗漏了！）

如果我们只启动一个节点，那么它的状态会是 candidate：

![](https://img2018.cnblogs.com/blog/493842/201907/493842-20190717151734612-266677501.png)

处于candidate 状态的 集群会一直进行选举， 从而任期也会一直增加：

![](https://img2018.cnblogs.com/blog/493842/201907/493842-20190717151741138-1049330699.png)

最先启动的节点， 一般就是 leader ， 但这个时候还只是 准leader，需要至少多数节点都启动了， 才能做一个决断。如下面的 126：

![](https://img2018.cnblogs.com/blog/493842/201907/493842-20190717151750417-1553732482.png)

在没有leader 产生之前， 集群会进行多次的选举。 每次的选举 任期会加1。 从而 最后会进行大概 2次的选举， 从而 126 的任期是2；最后加入的 节点已经没有了选举的机会， 故直接作为 follower 加入， 其任期默认是0；

如果某一个或某几个节点都挂了， 只要剩余节点不少于 1+ 1/N ，那么 集群仍然能够正常运行； 挂掉的节点重新加入集群后，如果此时集群已经有了leader， 那么它的角色一般是follower， 它的任期是0（ 就跟一个新节点一样的）；

当然，如果集群的剩余节点少于 1+ 1/N，集群仍然是可以工作的，只是已经无法保证 高可用了。

任期低节点一般是没有资格参与选举的，leader 一般是在 任期高的几个节点之中产生（至少会有2个节点）。

![](https://img2018.cnblogs.com/blog/493842/201907/493842-20190717151757830-1661146717.png)

如果把126 的nacos 杀掉，我们会观察到 多个leader，其实这个时候的 126 已经死了， 至少集群保留它之前的状态。同时 集群会重新选举，如下，我们看到200 被选举为 leader，126 的状态被保留（其实他已经死掉了）， 同时任期 +1：

![](https://img2018.cnblogs.com/blog/493842/201907/493842-20190717151802465-652359809.png)

在已经存在leader 的集群中，如果挂掉的节点不是 leader，那么不会重新进行选举。 挂掉的节点虽不可用（其状态会一直保留直到重启）， 不会影响集群的使用。

如果我们又把 126 启动起来， 那么它的角色会是 follower，任期是0：

![](https://img2018.cnblogs.com/blog/493842/201907/493842-20190717151808708-141563613.png)

我们再把 200 的nacos 杀掉， 那么又会产生新的 leader：

![](https://img2018.cnblogs.com/blog/493842/201907/493842-20190717151816018-1280785062.png)

 <a name="_label3"></a>

## Nacos + Docker 集群

nacos 官方 https://hub.docker.com/r/nacos/nacos-server  有提供docker 的镜像：nacos/nacos-server，我们拿来用即可：

docker run --name nacos  --net=host --env MODE=cluster --env NACOS_SERVERS="192.168.11.126:8748 192.168.11.196:8748 192.168.11.200:8748" --env MYSQL_DATABASE_NUM=1 --env MYSQL_MASTER_SERVICE_HOST=192.168.11.200 --env MYSQL_MASTER_SERVICE_PORT=3316 --env MYSQL_MASTER_SERVICE_DB_NAME=test3 --env MYSQL_MASTER_SERVICE_USER=root --env MYSQL_MASTER_SERVICE_PASSWORD=123456 --env NACOS_SERVER_PORT=8848 -d -p 8748:8848 nacos/nacos-server

上面的语句即启动了 docker nacos ，同时通过env 设置了所有的相关的参数 比如数据库、端口等。 特别需要注意的是， 网络模式是 host，也就是使用直接宿主机的网络， 这个是最简单的nacos +docker 集群，否则我们可能需要做比较多的docker网络配置。 另外注意，  --net=host 应该放在命令的前面， 不能放最后， 否则不会生效。

NACOS_SERVERS 是所有的节点+端口 配置，目前只能写死， nacos 不提供自动扩容等功能。

如果配置有误，我们只能删除nacos 容器，重新配置 ： docker stop nacos && docker rm nacos 。

3个节点都执行上面的命令之后，我们的nacos 集群就做好了！

 <a name="_label4"></a>

## 通过Nginx配置真正的集群

上面的集群，虽然可用， 但仍不是真正的集群， 我们一般不会这么用。官方推荐，nacos集群一般有3种方式：

http://ip1:port/openAPI 直连ip模式，机器挂则需要修改ip才可以使用。

http://VIP:port/openAPI 挂载VIP模式，直连vip即可，下面挂server真实ip，可读性不好。

http://nacos.com:port/openAPI 域名 + VIP模式，可读性好，而且换ip方便，推荐模式

域名的方式比较麻烦，暂不考虑。vip 的方式也稍稍麻烦。 这里我使用 nginx 的方式。 nginx 做集群很简单， 只要 nginx.conf 做如下的配置就好了：

upstream nacos_server {
server 192.168.11.200:8748;
server 192.168.11.196:8748;
server 192.168.11.126:8748;
}

server {
listen 8648;
server_name localhost;
#charset koi8-r;
#access_log logs/host.access.log main;
location / {
proxy_pass http://nacos_server;
index index.html index.htm;
}
}

8648 的nginx 提供的 nacos 服务接口，可以自定义。 我们访问 

192.168.11.139:8648/nacos/#/clusterManagement?dataId=&group=&appName=&namespace=&serverId=

，就可以看到：

![](https://img2018.cnblogs.com/blog/493842/201907/493842-20190717151826015-620927747.png)

我们可以简单测试一下，杀掉 126 或 196 上的 nacos ，看服务是否正常。 后面，我们对微服务提供nacos服务的时候，只要配置这个nginx 端口就好了！！

 <a name="_label5"></a>

## 其他注意事项

nacos 默认是需要登录， 有些麻烦，开发测试的时候，我们可以把它关闭，怎么办呢？ 修改 conf/application.properties 的相关配置即可：

### turn off security
spring.security.enabled=false
management.security=false
security.basic.enabled=false
nacos.security.ignore.urls=/**

#nacos.security.ignore.urls=/,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/v1/auth/login,/v1/console/health/**,/v1/cs/**,/v1/ns/**,/v1/cmdb/**,/actuator/**,/v1/console/server/**

另外，我们发现 nacos 的日志实在增长太快， 可以tomcat.accesslog 关闭： 

server.tomcat.accesslog.enabled=true – 改为false 

另外，我们可以把 日志级别调整一下，修改 conf/nacos-logback.xml 即可。

参考：

https://nacos.io/zh-cn/docs/cluster-mode-quick-start.html

https://hub.docker.com/r/nacos/nacos-server
