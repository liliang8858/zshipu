title: MQTT再学习 -- 搭建MQTT服务器及测试
author: 知识铺
date: 2020-04-11 12:44:47
tags:
---
 

MQTT服务器有好多种，**参看：[Servers/Brokers](https://zshipu.com/t?url=https://github.com/mqtt/mqtt.github.io/wiki/servers) **

Apache-Apollo：一个代理服务器，在ActiveMQ基础上发展而来，可以支持STOMP、AMQP、MQTT、Openwire、SSL和WebSockets等多种协议，并且Apollo提供后台管理页面，方便开发者管理和调试。
EMQ：EMQ 2.0，号称百万级开源MQTT消息服务器，基于Erlang/OTP语言平台开发，支持大规模连接和分布式集群，发布订阅模式的开源MQTT消息服务器。
HiveMQ：一个企业级的MQTT代理，主要用于企业和新兴的机器到机器M2M通讯和内部传输，最大程度的满足可伸缩性、易管理和安全特性，提供免费的个人版。HiveMQ提供了开源的插件开发包。
Mosquitto：一款实现了消息推送协议MQTT v3.1的开源消息代理软件，提供轻量级的、支持可发布/可订阅的消息推送模式。

这篇文章我们只讲两种，一种是 Mosquitto、另一种是 Apollo，以及它们在 linux 下和 Windows 下的安装。

我们本篇都会来一一做讲解。

**参看：[【MQTT】在Ubuntu下搭建MQTT服务器](https://zshipu.com/t?url=http://blog.csdn.net/yannanxiu/article/details/70504586)**

## 一、Ubuntu 下 MQTT 服务器搭建之Apollo

## （1） 首先要搞清楚什么是 Apollo 

**参看：[ActiveMQ's next generation of messaging](https://zshipu.com/t?url=http://activemq.apache.org/apollo/index.html)**

[ActiveMQ Apollo](https://zshipu.com/t?url=http://activemq.apache.org/apollo/) is a faster, more reliable, easier to maintain messaging broker built from the foundations of the original [ActiveMQ](https://zshipu.com/t?url=http://activemq.apache.org/). It accomplishes this using a radically different threading and message dispatching [architecture](https://zshipu.com/t?url=http://activemq.apache.org/apollo/documentation/architecture.html). Like ActiveMQ, Apollo is a multi-protocol broker and supports STOMP, AMQP, MQTT, Openwire, SSL, and WebSockets.

**翻译一下：**

ActiveMQ Apollo是从原始ActiveMQ的基础构建的更快，更可靠，更易于维护的消息代理。 它使用完全不同的线程和消息调度架构来实现。 像ActiveMQ一样，Apollo是一个多协议代理，支持STOMP，AMQP，**MQTT**，Openwire，SSL和WebSockets。

看到没，有支持 MQTT  

**下载：[Download it today!](https://zshipu.com/t?url=http://activemq.apache.org/apollo/download.html)**


![知识铺-pasted-273.png](https:\/\/blog.zshipu.com/tlg/images/pasted-273.png)

![知识铺-pasted-274.png](https:\/\/blog.zshipu.com/tlg/images/pasted-274.png)

## <a name="t2"></a><a name="t2"></a>（2）安装

### <a name="t3"></a><a name="t3"></a>先解压

```
# sudo tar -zxvf apache-apollo-1.7.1-unix-distro.tar.gz
```

### <a name="t4"></a><a name="t4"></a>查看 bin/apollp.cmd
```
1.  # cat apollo.cmd

2.  @REM

3.  @REM Licensed to the Apache Software Foundation (ASF) under one or more

4.  @REM contributor license agreements. See the NOTICE file distributed with

5.  @REM this work for additional information regarding copyright ownership.

6.  @REM The ASF licenses this file to You under the Apache License, Version 2.0

7.  @REM (the "License"); you may not use this file except in compliance with

8.  @REM the License. You may obtain a copy of the License at

9.  @REM

10.  @REM http://www.apache.org/licenses/LICENSE-2.0

11.  @REM

12.  @REM Unless required by applicable law or agreed to in writing, software

13.  @REM distributed under the License is distributed on an "AS IS" BASIS,

14.  @REM WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

15.  @REM See the License for the specific language governing permissions and

16.  @REM limitations under the License.

17.  @REM

18.  @echo off

20.  setlocal

22.  if NOT "%APOLLO_HOME%"=="" goto CHECK_APOLLO_HOME

23.  PUSHD .

24.  CD %~dp0..

25.  set APOLLO_HOME=%CD%

26.  POPD

28.  :CHECK_APOLLO_HOME

29.  if exist "%APOLLO_HOME%\bin\apollo.cmd" goto CHECK_JAVA

31.  :NO_HOME

32.  echo APOLLO_HOME environment variable is set incorrectly. Please set APOLLO_HOME.

33.  goto END

35.  :CHECK_JAVA

36.  set _JAVACMD=%JAVACMD%

38.  if "%JAVA_HOME%" == "" goto NO_JAVA_HOME

39.  if not exist "%JAVA_HOME%\bin\java.exe" goto NO_JAVA_HOME

40.  if "%_JAVACMD%" == "" set _JAVACMD=%JAVA_HOME%\bin\java.exe

41.  goto RUN_JAVA

43.  :NO_JAVA_HOME

44.  if "%_JAVACMD%" == "" set _JAVACMD=java.exe

45.  echo.

46.  echo Warning: JAVA_HOME environment variable is not set.

47.  echo.

49.  :RUN_JAVA

51.  set CLASSPATH=%APOLLO_HOME%\lib\apollo-boot.jar

53.  set BOOTDIRS=%APOLLO_HOME%\lib

54.  if NOT "x%APOLLO_BASE%" == "x" set BOOTDIRS=%APOLLO_BASE%\lib;%BOOTDIRS%

56.  if "%JVM_FLAGS%" == "" set JVM_FLAGS=-server -Xmx1G -XX:-UseBiasedLocking

58.  if "%APOLLO_ASSERTIONS%"=="false" goto noAPOLLO_ASSERTIONS

59.  set JVM_FLAGS=-ea %JVM_FLAGS%

60.  :noAPOLLO_ASSERTIONS

62.  if "x%APOLLO_OPTS%" == "x" goto noAPOLLO_OPTS

63.  set JVM_FLAGS=%JVM_FLAGS% %APOLLO_OPTS%

64.  :noAPOLLO_OPTS

66.  if "x%APOLLO_DEBUG%" == "x" goto noDEBUG

67.  set JVM_FLAGS=%JVM_FLAGS% -Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005

68.  :noDEBUG

70.  if "x%APOLLO_PROFILE%" == "x" goto noPROFILE

71.  set JVM_FLAGS=-agentlib:yjpagent %JVM_FLAGS%

72.  :noPROFILE

74.  if "%JMX_OPTS%" == "" set JMX_OPTS=-Dcom.sun.management.jmxremote

75.  rem set JMX_OPTS=-Dcom.sun.management.jmxremote.port=1099 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false

76.  set JVM_FLAGS=%JVM_FLAGS% %JMX_OPTS%

78.  set JVM_FLAGS=%JVM_FLAGS% -Dapollo.home="%APOLLO_HOME%"

79.  if NOT "x%APOLLO_BASE%" == "x" set JVM_FLAGS=%JVM_FLAGS% -Dapollo.base="%APOLLO_BASE%"

80.  set JVM_FLAGS=%JVM_FLAGS% -classpath "%CLASSPATH%"

82.  "%_JAVACMD%" %JVM_FLAGS% org.apache.activemq.apollo.boot.Apollo "%BOOTDIRS%" org.apache.activemq.apollo.cli.Apollo %*

84.  :END

85.  endlocal

86.  GOTO :EOF

88.  :EOF
```
由于搭建 Apollo 环境变量需要有 JAVA_HOME，这个时候需要安装 JDK

### <a name="t5"></a><a name="t5"></a>安装 JDK

**下载：[Java SE Development Kit 8 Downloads](https://zshipu.com/t?url=http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)**


![知识铺-pasted-275.png](https:\/\/blog.zshipu.com/tlg/images/pasted-275.png)


![知识铺-pasted-276.png](https:\/\/blog.zshipu.com/tlg/images/pasted-276.png)
从上图可以看到，这个Linux版本有 x86 和 x64 等版本。如果查看你的 Ubuntu 是什么版本呢？

**参看：[如何判断Linux是32位还是64位](https://zshipu.com/t?url=http://chenzhou123520.iteye.com/blog/1944947)**

**方法一：getconf LONG_BIT**
在linux终端输入 **getconf LONG_BIT **命令
如果是32位机器，则结果为32
```
1.  [root@localhost ~]# getconf LONG_BIT

2.  32
```

如果是64位机器，则结果为64
```
1.  [root@localhost ~]# getconf LONG_BIT

2.  64
```
**方法二：uname -a**
如果是64位机器，会输出x86_64
```
1.  [chenzhou@testweb01 ~]$ uname -a

2.  Linux testweb01 2.6.18-308.4.1.el5 #1 SMP Tue Apr 17 17:08:00 EDT 2012 x86_64 x86_64 x86_64 GNU/Linux
```
可以看到，uname-a执行后的结果中输出了x86_64，说明该机器是64位的，否则代表该机器是32位的
```
1.  [root@localhost ~]# uname -a

2.  Linux localhost.localdomain 2.6.18-164.el5 #1 SMP Tue Aug 18 15:51:54 EDT 2009 i686 i686 i386 GNU/Linux
```
**方法三：file /sbin/init 或者 file /bin/ls**
示例：32位机器
file /sbin/init
```
1.  [root@localhost ~]# file /sbin/init

2.  /sbin/init: ELF 32-bit LSB executable, Intel 80386, version 1 (SYSV), for GNU/Linux 2.6.9, dynamically linked (uses shared libs), for GNU/Linux 2.6.9, stripped
```
file /bin/ls
```
1.  [root@localhost ~]# file /bin/ls

2.  /bin/ls: ELF 32-bit LSB executable, Intel 80386, version 1 (SYSV), for GNU/Linux 2.6.9, dynamically linked (uses shared libs), for GNU/Linux 2.6.9, stripped
```
示例：64位机器
file /sbin/init
```
1.  [chenzhou@testweb01 ~]$ file /sbin/init

2.  /sbin/init: ELF 64-bit LSB executable, AMD x86-64, version 1 (SYSV), for GNU/Linux 2.6.9, dynamically linked (uses shared libs), for GNU/Linux 2.6.9, stripped
```
file /bin/ls
```
1.  [chenzhou@testweb01 ~]$ file /bin/ls

2.  /bin/ls: ELF 64-bit LSB executable, AMD x86-64, version 1 (SYSV), for GNU/Linux 2.6.9, dynamically linked (uses shared libs), for GNU/Linux 2.6.9, stripped
```
可以通过命令结果中的64-bit或者32-bit来判断该机器是64位还是32位

最后如下经过测试，我的Ubuntu是32位的，下载  jdk-8u144-linux-i586.tar.gz
```
1.  # uname -a

2.  Linux ubuntu 3.2.0-23-generic-pae #36-Ubuntu SMP Tue Apr 10 22:19:09 UTC 2012 i686 i686 i386 GNU/Linux

4.  #getconf LONG_BIT

5.  32
```
通过终端在/usr/local目录下新建java文件夹，命令行：

```
sudo mkdir /usr/local/java
```


然后进入java目录，命令行：

```
cd /usr/local/java
```


解压压缩包：

```
sudo tar xvf jdk-8u25-linux-x64.tar.gz
```


设置jdk环境变量：
```
1.  # gedit /etc/profile

2.  在最后添加下面代码：

4.  export JAVA_HOME=/usr/local/java/jdk1.8.0_144

5.  export JRE_HOME=${JAVA_HOME}/jre

6.  export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib

7.  export PATH=${JAVA_HOME}/bin:$PATH

9.  使用 source /etc/profile 使它立即生效
```
检验是否安装成功：
```
1.  # java -version

2.  java version "1.8.0_144"

3.  Java(TM) SE Runtime Environment (build 1.8.0_144-b01)

4.  Java HotSpot(TM) Client VM (build 25.144-b01, mixed mode)
```
### <a name="t6"></a><a name="t6"></a>配置 Apollo

**参看：[Getting Started Guide](https://zshipu.com/t?url=http://activemq.apache.org/apollo/documentation/getting-started.html)**

进入apache-apollo-1.7.1/bin目录
cd apache-apollo-1.7.1/bin/
输入 ./apollo 可以查看帮助
```
1.  # ./apollo

2.  usage: apollo [--log <log_level>] <command> [<args>]

4.  The most commonly used apollo commands are:

5.  create creates a new broker instance

6.  disk-benchmark Benchmarks your disk's speed

7.  help Display help information

8.  version Displays the broker version

10.  See 'apollo help <command>' for more information on a specific command.
```
创建一个Broker示例：/apollo create mybroker，MQTT服务器都是叫Broker。
```
1.  # ./apollo create mybroker

2.  Creating apollo instance at: mybroker

3.  Generating ssl keystore...

5.  You can now start the broker by executing:

7.  "/home/tarena/project/MQTT/apache-apollo-1.7.1/bin/mybroker/bin/apollo-broker" run

9.  Or you can setup the broker as system service and run it in the background:

11.  sudo ln -s "/home/tarena/project/MQTT/apache-apollo-1.7.1/bin/mybroker/bin/apollo-broker-service" /etc/init.d/

12.  /etc/init.d/apollo-broker-service start
```
后面会有提示怎么启动服务器，以及创建一个service。
启动Apollo ：
```
1.  # ./mybroker/bin/apollo-broker run

3.  _____ .__ .__

4.  / _ \ ______ ____ | | | | ____

5.  / /_\ \\____ \ / _ \| | | | / _ \

6.  / | \ |_> > <_> ) |_| |_( <_> )

7.  \____|__ / __/ \____/|____/____/\____/

8.  \/|__| Apache Apollo (1.7.1)

11.  Loading configuration file '/home/tarena/project/MQTT/apache-apollo-1.7.1/bin/mybroker/etc/apollo.xml'.

12.  INFO | OS : Linux 3.2.0-23-generic-pae (Ubuntu 12.04 LTS)

13.  INFO | JVM : Java HotSpot(TM) Server VM 1.8.0_144 (Oracle Corporation)

14.  INFO | Apollo : 1.7.1 (at: /home/tarena/project/MQTT/apache-apollo-1.7.1)

15.  INFO | OS is restricting the open file limit to: 100000

16.  INFO | Accepting connections at: tcp://0.0.0.0:61613

17.  INFO | Accepting connections at: tls://0.0.0.0:61614

18.  INFO | Starting store: leveldb store at /home/tarena/project/MQTT/apache-apollo-1.7.1/bin/mybroker/data

19.  INFO | Accepting connections at: ws://0.0.0.0:61623/

20.  INFO | Accepting connections at: wss://0.0.0.0:61624/

21.  INFO | Administration interface available at: https://127.0.0.1:61681/

22.  INFO | Administration interface available at: http://127.0.0.1:61680/
```
之后查看打印信息即可知道MQTT要连接的端口和管理页面端口。

然后打开Ubuntu浏览器，输入 http://127.0.0.1:61680/ 或 https://127.0.0.1:61681/

即可进入 Apollo Console 窗口。


![知识铺-pasted-277.png](https:\/\/blog.zshipu.com/tlg/images/pasted-277.png)

默认的登录id和密码是 **admin** 和 **password** 。


![知识铺-pasted-278.png](https:\/\/blog.zshipu.com/tlg/images/pasted-278.png)

# <a name="t7"></a><a name="t7"></a>二、Windows 下 MQTT 服务器搭建之Apollo

## <a name="t8"></a><a name="t8"></a>**（1）下载 Apollo**

**下载：[Download it today!](https://zshipu.com/t?url=http://activemq.apache.org/apollo/download.html)**

![](https://img-blog.csdn.net/20170807092603717)![](https://img-blog.csdn.net/20170807092609253)

## <a name="t9"></a><a name="t9"></a>（2）安装

解压得到如下文件。

这里需要注意了，解压 apache-apollo-1.7.1 所在文件夹名称不能有 **中文或者空格，**后面会提到出现什么错误。

![](https://img-blog.csdn.net/20170807092847152)

进入 apache-apollo-1.7.1-windows-distro\apache-apollo-1.7.1\bin 文件夹

按住 shift键选择 apollo.cmd 再点击右键。选择 在此处打开命令窗口。

![](https://img-blog.csdn.net/20170807093454617)

然后在 cmd 窗口执行 apollo.cmd。然后就可以看到发生错误。上面Ubuntu下安装时已经提到，还需要安装 JDK。

![](https://img-blog.csdn.net/20170807093742828)

## <a name="t10"></a><a name="t10"></a>（3）安装 JDK

**下载：[Java SE Development Kit 8 Downloads](https://zshipu.com/t?url=http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)**

**![](https://img-blog.csdn.net/20170807094035752)**

Windows 系统是多少位的，这个应该很清楚吧。查看 我的电脑->属性，查看有关计算机的基本信息。

![](https://img-blog.csdn.net/20170807100016579)

我的电脑为 win 10 64位，下载并安装 jdk-8u144-windows-x64.exe

然后配置 JDK 环境变量

我的电脑->属性->高级系统设置->高级->环境变量

![](https://img-blog.csdn.net/20170807101239190)

这部分我们之前将 FFmpeg 的Windows安装说明时有提到过的。可看到有用户变量和系统变量。

修改“用户变量”为当前用户使用，其他 Windows 用户不能够使用。如果要使每个用户都能够使用，你需要修改 "系统变量" 。

![](https://img-blog.csdn.net/20170807101510828)

**注意，不要够删除在变量中原来已有的内容。**如果之前已存在变量，则在其之后用分号“;”分隔，然后添加。

![](https://img-blog.csdn.net/20170807103700066)

我们只让当前用户可用，修改用户变量即可。

在用户环境变量中新建变量 JAVA_HOME，设置变量值 F:\Program Files\Java\jdk1.8.0_144

![](https://img-blog.csdn.net/20170807101957306)

新建PATH，设置变量值%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin

![](https://img-blog.csdn.net/20170807102152133)

新建CLASSPATH，设置变量值.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar注意前面的.表示当前目录。然后点击“确定”按钮。

![](https://img-blog.csdn.net/20170807102310634)

到此，配置完成。打开 cmd 测试一下配置是否成功。

输入java -version，显示版本java version "1.8.0_144"，输入javac -version，也显示javac 1.8.0_144，说明JDK安装及环境变量配置成功。

![](https://img-blog.csdn.net/20170807102628246)

然后接着上面来讲。进入 apache-apollo-1.7.1-windows-distro\apache-apollo-1.7.1\bin 文件夹

按住 shift键选择 apollo.cmd 再点击右键。选择 在此处打开命令窗口。

再次在 cmd 窗口执行 apollo.cmd，可以看到如下的信息，这就和 Ubuntu 下安装对上了。

![](https://img-blog.csdn.net/20170807102841431)

## <a name="t11"></a><a name="t11"></a>**（4）创建服务器实例**

**参看：[Getting Started Guide](https://zshipu.com/t?url=http://activemq.apache.org/apollo/documentation/getting-started.html)**

在 CMD 命令窗口输入 apollo create mybroker ，当然 mybroker 这个名字可以随便起。

![](https://img-blog.csdn.net/20170807104339107)

然后查看 mybroker 可以发现里面包含有很多信息，其中etc\apollo.xml文件下是配置服务器信息的文件，etc\users.properties文件包含连接MQTT服务器时用到的用户名和密码，可以修改原始的admin=password，可以接着换行添加新的用户名密码。

![](https://img-blog.csdn.net/20170807104415660)

bin：保存与该实例关联的执行脚本。
etc：保存实例配置文件
data：保存用于存储持久消息的数据文件
日志：保存旋转日志文件
tmp：保存在代理运行之间安全删除的临时文件

打开cmd，运行 apache-apollo-1.7.1\bin\mybroker\bin\apollo-broker.cmd run 开启服务器，如下图所示：

![](https://img-blog.csdn.net/20170807132055526)

这里需要注意了，所在 apache-apollo-1.7.1 所在文件夹名称不能有 **中文或者空格。**因为我上面的是存放在 360安全浏览下载 这个目录下了。导致出现系统找不到指定的路径。

![](https://img-blog.csdn.net/20170807132641206)

然后打开浏览器上，输入 http://127.0.0.1:61680/ 或 https://127.0.0.1:61681/

即可进入 Apollo Console 窗口。

![](https://img-blog.csdn.net/20170807132245529)

默认的登录id和密码是 admin 和 password 

![](https://img-blog.csdn.net/20170807132350731)

# <a name="t12"></a><a name="t12"></a>三、MQTT 客户端测试

Apollo 服务器安装已经讲完，接下来简单测试一下发布订阅。

这里面网上有 **[MQTT协议之Apache Apollo 安装使用](https://zshipu.com/t?url=http://blog.csdn.net/zhu_tianwei/article/details/42984085/) **这种文章用的是 java，在Android上测试的。

这就不太适合我了，不懂 Android 蓝瘦香菇啊！

再有一种是用 谷歌浏览器上的 扩展程序 mqttlens

首先添加该插件

![](https://img-blog.csdn.net/20171011155428242)

点击 获取更多扩展程序

![](https://img-blog.csdn.net/20171011155651676)

搜索 mqttlens ，最后添加至 CHROME

![](https://img-blog.csdn.net/20171011155721912)

安装完成！！

下面进行测试

先运行 Apollo 服务器

![](https://img-blog.csdn.net/20171011160446886)

![](https://img-blog.csdn.net/20171011160523632)

然后启动 mqttlens 

![](https://img-blog.csdn.net/20171011160601509)

然后点击 Connections+

![](https://img-blog.csdn.net/20171011160623385)

出现下图，并填写好相关的信息

![](https://img-blog.csdn.net/20171011161350516)

然后就进入了，订阅发布界面

![](https://img-blog.csdn.net/20171011161642075)

OK，到此结束

# <a name="t13"></a><a name="t13"></a>四、Ubuntu 下 MQTT 服务器搭建之Mosquitto

Mosquitto 是一款实现了消息推送协议MQTT v3.1的开源消息代理软件，提供轻量级的、支持可发布/可订阅的消息推送模式。现在我们开始搭建服务器。

**参看：[CentOS 安装Mosquitto及测试](https://zshipu.com/t?url=http://blog.163.com/allegro_tyc/blog/static/33743768201667101816858/)**

**参看：[MQTT学习笔记——MQTT协议体验 Mosquitto安装和使用](https://zshipu.com/t?url=http://blog.csdn.net/xukai871105/article/details/39252653)**

## <a name="t14"></a><a name="t14"></a>（1）下载相关文件

**下载：[index : libwebsockets](https://zshipu.com/t?url=https://libwebsockets.org/git/libwebsockets/snapshot/libwebsockets-2.0.2.tar.gz)**

**下载：[mosquitto-1.4.14.tar.gz (319kB) (GPG signature)](https://zshipu.com/t?url=https://mosquitto.org/download/)**

## <a name="t15"></a><a name="t15"></a>（2）安装编译

### <a name="t16"></a><a name="t16"></a>**《1》安装 libwebsockets-2.0.2.tar.gz**

解压：

tar -zxvf libwebsockets-2.0.2

进入该目录:

cd libwebsockets-2.0.2/

新建目录 build

mkdir build

进入 build

cd build

跨平台编译

cmake .. -DLIB_SUFFIX=64

编译：

make && make install

**这里需要注意，cmake .. 提示 程序“cmake”尚未安装**

**安装 sudo apt-get install cmake**

### <a name="t17"></a><a name="t17"></a>**《2》安装**

解压：mosquitto-1.4.14

tar -zxvf mosquitto-1.4.14.tar.gz

进入该目录：

cd mosquitto-1.4.14/

更改config.mk 让其支持 websockets
WITH_WEBSOCKETS:=no
为
WITH_WEBSOCKETS:=yes

编译：

make && make install

**这里会出现两处错误：**

**致命错误： ares.h：没有那个文件或目录**

**    解决方法：sudo apt-get install libc-ares-dev libc-ares2**

**致命错误：uuid/uuid.h： 没有这个文件或目录 **

**    解决方法：sudo apt-get install uuid-dev**

<code class="language-html hljs xml">至此程序已经安装完毕！
```
<code class="language-html hljs xml">程序文件将默认安装到以下位置
```


| 路径 | 程序文件 |
| --- | --- |
| /usr/local/sbin | mosquiotto server |
| /etc/mosquitto | configuration |
| /usr/local/bin | utility command |

修正链接库路径
由于操作系统版本及架构原因，很容易出现安装之后的链接库无法被找到，如启动mosquitto客户端可能出现找不到
libmosquitto.so.1文件，因此需要添加链接库路径
```
1.  修正链接库

2.  vim /etc/ld.so.conf.d/liblocal.conf

3.  /usr/local/lib64

4.  /usr/local/lib
```
再执行 ldconfig 

cp mosquitto.conf /etc/mosquitto
修改mosquitto.conf文件
在 /etc/mosquitto/mosquitto.conf 的 Default Listener 一节添加如下几行：
```
1.  # =================================================================

2.  # Default listener

3.  # =================================================================

5.  # IP address/hostname to bind the default listener to. If not

6.  # given, the default listener will not be bound to a specific

7.  # address and so will be accessible to all network interfaces.

8.  # bind_address ip-address/host name

9.  #bind_address

11.  # Port to use for the default listener.

12.  pid_file /var/run/mosquitto.pid

13.  user tarena

14.  port 1883

15.  max_connections -1

16.  allow_anonymous true

17.  listener 8080

18.  protocol websockets
```
**这里有出现两个问题：**

**Error: Invalid user 'mosquitto'.**

**解决方法：修改配置文件 mosquitto.conf ，增加登录的用户，例如当前登录用户为root**

**因此在上面添加  user root**

**但是运行 mosquitto 时会出现警告**

**1502156001: Warning: Mosquitto should not be run as root/administrator.**

**所以改为普通用户 user tarena  （改成你自己的）

下面测试时打开 mosquitto 会出现错误
# mosquitto -c /etc/mosquitto/mosquitto.conf
1502415109: mosquitto version 1.4.14 (build date 2017-08-07 15:54:10+0800) starting
1502415109: Config loaded from /etc/mosquitto/mosquitto.conf.
1502415109: Opening websockets listen socket on port 8080.
1502415109: Error: Unable to create websockets listener on port 8080.
解决方法：**

**重装了好几遍，网上查了好久。最后发现，是修改上面的mosquitto.conf文件时有空格，将空格删掉就好了。**

**居然还有这种操作，醉醉哒...  **

**![](https://img-blog.csdn.net/20170811100814475)**

## <a name="t18"></a><a name="t18"></a>**（3）**测试

### <a name="t19"></a><a name="t19"></a>《1》打开mosquitto

 打开一个终端输入

mosquitto -c /etc/mosquitto/mosquitto.conf
```
1.  # mosquitto -c /etc/mosquitto/mosquitto.conf

2.  1502159482: mosquitto version 1.4.14 (build date 2017-08-07 15:54:10+0800) starting

3.  1502159482: Config loaded from /etc/mosquitto/mosquitto.conf.

4.  1502159482: Opening websockets listen socket on port 8080.

5.  1502159482: Opening ipv4 listen socket on port 1883.

6.  1502159482: Opening ipv6 listen socket on port 1883.
```
**mosquitto 选项介绍：**

**参看：[mosquitto Options](https://zshipu.com/t?url=https://mosquitto.org/man/mosquitto-8.html)**
```
1.  -c，--config文件

2.  从文件加载配置。 如果没有给出，则使用mosquitto.conf（5）中描述的默认值。

3.  -d，--daemon

4.  在后台运行蚊子作为守护进程。 所有其他行为保持不变。

5.  -p，--port

6.  在指定的端口上监听，而不是默认的1883.除了配置文件中的端口设置外，还会起作用。 可以指定多次以打开在不同端口上侦听的多个套接字。 该套接字将绑定到所有网络接口。

7.  -v，--verbose

8.  使用详细日志记录。 这相当于在配置文件中将log_type设置为全部。 这种覆盖和记录选项在配置文件中给出。
```
### <a name="t20"></a><a name="t20"></a>《2》订阅主题

打开另一个终端输入：

mosquitto_sub -t test 
```
1.  此时第一个终端多了一行信息

2.  # mosquitto -c /etc/mosquitto/mosquitto.conf

3.  1502159482: mosquitto version 1.4.14 (build date 2017-08-07 15:54:10+0800) starting

4.  1502159482: Config loaded from /etc/mosquitto/mosquitto.conf.

5.  1502159482: Opening websockets listen socket on port 8080.

6.  1502159482: Opening ipv4 listen socket on port 1883.

7.  1502159482: Opening ipv6 listen socket on port 1883.

8.  1502159601: New connection from 127.0.0.1 on port 1883.

9.  1502159601: New client connected from 127.0.0.1 as mosqsub|2431-ubuntu (c1, k60)
```
**mosquitto_sub 选项介绍**

**参看：[mosquitto_sub Options](https://zshipu.com/t?url=https://mosquitto.org/man/mosquitto_sub-1.html)**
```
1.  下面的选项可以在命令行中给出，但也可以放置在位于$ XDG_CONFIG_HOME / mosquitto_sub或$ HOME / .config / mosquitto_sub的配置文件中，每行一对 - 吸附值。配置文件中的值将被用作默认值，并且可以通过使用命令行来覆盖。这个例外是-t和-T，如果在配置文件中给出，将不会被覆盖。还要注意，目前一些选项不能被否定，例如-S。具有＃作为第一个字符的配置文件行将被视为注释，不会进一步处理。

2.  -a

3.  将输出连接绑定到本地IP地址/主机名。如果需要将网络通信限制在特定接口上，请使用此参数。

4.  -c，--disable-clean-session

5.  禁用“'clean session”标志。这意味着客户端的所有订阅将在断开连接后维护，以及到达的后续QoS 1和QoS 2消息。当客户端重新连接时，它将接收所有排队的消息。如果使用此选项，建议使用 -id 手动设置客户机ID

6.  --cafile

7.  定义包含受信任的PEM编码的CA证书的文件的路径。用于启用SSL通信。另请参见--capath

8.  --capath

9.  定义包含受信任的PEM编码的CA证书的目录的路径。用于启用SSL通信。

10.  为了--capath正常工作，证书文件必须具有“.crt”作为文件结束，您必须在每次添加/删除证书时运行“c_rehash <path to capath>”。另请参见--cafile

11.  --cert

12.  如果服务器需要，定义包含此客户端的PEM编码证书的文件的路径。另请参阅--key。

13.  --ciphers

14.  在客户端支持的TLS密码的openssl兼容列表。有关详细信息，请参阅密码（1）。

15.  -C

16.  在接收到给定的消息数后立即断开并退出程序。例如，在需要单个状态值的shell脚本中这可能很有用。

17.  结合-R来仅打印第一组新消息（即，没有设置保留标志），或者使用 -T 来过滤哪些主题被处理。

18.  -d，--debug

19.  启用调试消息。

20.  - help

21.  显示使用信息。

22.  -h，--host

23.  指定要连接的主机。默认为localhost。

24.  -i，--id

25.  该客户端使用的id。如果没有给出，默认为mosquitto_sub_附加客户端的进程ID。不能与-id-prefix参数同时使用。

26.  -I，-id-prefix

27.  通过追加客户端的进程标识来提供客户端ID的前缀。这在代理使用clientid_prefixes选项时很有用。不能与-id参数同时使用。

28.  --insecure

29.  使用基于证书的加密时，此选项将禁用对服务器证书中服务器主机名的验证。这在测试初始服务器配置时可能很有用，但是通过DNS欺骗可以让恶意第三方冒充您的服务器。仅在测试中使用此选项。如果您需要在生产环境中使用此选项，则您的设置会出现故障，并且无需使用加密。

30.  -k，--keepalive

31.  发送PING命令到经纪人以通知它之前的秒数仍然是连接和运行的。默认为60秒。

32.  - key

33.  如果服务器需要，定义包含此客户端的PEM编码私钥的文件的路径。另请参见--cert。

34.  -N

35.  打印时，不要在有效负载上附加行尾符号。这允许将来自多个消息的有效载荷数据直接传输到另一个应用程序。只有在不使用-v的时候才真正有意义。

36.  -p，--port

37.  连接到指定的端口而不是默认端口1883。

38.  -P， - pw

39.  提供用于与经纪人进行认证的密码。在不指定用户名的情况下使用此参数是无效的。这需要一个支持MQTT v3.1的代理。另请参阅--username选项。

40.  - proxy

41.  指定要连接的SOCKS5代理。支持“无”和“用户名”身份验证类型。 socks-url必须是形式socks5h：// [username [：password] @] host [：port]。协议前缀socks5h表示主机名由代理解析。符号％25，％3A和％40分别被URL解码为％，...和@，如果存在于用户名或密码中。

42.  如果没有给出用户名，则不会尝试认证。如果没有给出端口，则使用默认值为1080。

43.  根据需求，将来可能会有更多SOCKS版本，并且将使用不同的协议前缀，如卷曲（1）所述。

44.  --psk

45.  提供与代理使用的十六进制（无前导0x）预共享密钥，以使用TLS-PSK加密支持。还必须提供--psk身份以启用TLS-PSK。

46.  --psk身份

47.  使用TLS-PSK支持的客户端身份。这可以用来代替用户名
```
### <a name="t21"></a><a name="t21"></a>《3》发布内容

再打开一个终端输入：

mosquitto_pub -t test -m "hello world" 
```
1.  此时第二个终端多了一行信息

2.  # mosquitto_sub -v -t test

3.  hello world
```
**mosquitto_pub 选项介绍**

**参看：[mosquitto_pub Options](https://zshipu.com/t?url=https://mosquitto.org/man/mosquitto_pub-1.html)**
```
1.  下面的选项可以在命令行中给出，但是也可以放置在位于$ XDG_CONFIG_HOME / mosquitto_pub或$ HOME / .config / mosquitto_sub的配置文件中，每行一对 - 吸附值。配置文件中的值将被用作默认值，并且可以通过使用命令行来覆盖。这个例外是消息类型选项，其中只能指定一个。还要注意，目前一些选项不能被否定，例如-S。具有＃作为第一个字符的配置文件行将被视为注释，不会进一步处理。

2.  -a

3.  将输出连接绑定到本地IP地址/主机名。如果需要将网络通信限制在特定接口上，请使用此参数。

4.  --cafile

5.  定义包含受信任的PEM编码的CA证书的文件的路径。用于启用SSL通信。另请参见--capath

6.  --capath

7.  定义包含受信任的PEM编码的CA证书的目录的路径。用于启用SSL通信。

8.  为了--capath正常工作，证书文件必须具有“.crt”作为文件结束，您必须在每次添加/删除证书时运行“c_rehash <path to capath>”。另请参见--cafile

9.  --cert

10.  如果服务器需要，定义包含此客户端的PEM编码证书的文件的路径。另请参阅--key。

11.  --ciphers

12.  在客户端支持的TLS密码的openssl兼容列表。有关详细信息，请参阅密码（1）。

13.  -d，--debug

14.  启用调试消息。

15.  -f，--file

16.  发送文件的内容作为消息。

17.  - help

18.  显示使用信息。

19.  -h，--host

20.  指定要连接的主机。默认为localhost。

21.  -i，--id

22.  该客户端使用的id。如果没有给出，默认为mosquitto_pub_附加客户端的进程ID。不能与-id-prefix参数同时使用。

23.  -I，-id-prefix

24.  通过追加客户端的进程标识来提供客户端ID的前缀。这在代理使用clientid_prefixes选项时很有用。不能与-id参数同时使用。

25.  --insecure

26.  使用基于证书的加密时，此选项将禁用对服务器证书中服务器主机名的验证。这在测试初始服务器配置时可能很有用，但是通过DNS欺骗可以让恶意第三方冒充您的服务器。仅在测试中使用此选项。如果您需要在生产环境中使用此选项，则您的设置会出现故障，并且无需使用加密。

27.  -k，--keepalive

28.  发送PING命令到经纪人以通知它之前的秒数仍然是连接和运行的。默认为60秒。

29.  -key

30.  如果服务器需要，定义包含此客户端的PEM编码私钥的文件的路径。另请参见--cert。

31.  -l，--stdin-line

32.  发送从stdin读取的消息，将单独的行分成单独的消息。请注意，空行不会被发送。

33.  -m， - 消息

34.  从命令行发送一条消息。

35.  -n， - 消息

36.  发送null（零长度）消息。

37.  -p，--port

38.  连接到指定的端口而不是默认端口1883。

39.  -P， - pw

40.  提供用于与经纪人进行认证的密码。在不指定用户名的情况下使用此参数是无效的。这需要一个支持MQTT v3.1的代理。另请参阅--username选项。

41.  -proxy

42.  指定要连接的SOCKS5代理。支持“无”和“用户名”身份验证类型。 socks-url必须是形式socks5h：// [username [：password] @] host [：port]。协议前缀socks5h表示主机名由代理解析。符号％25，％3A和％40分别被URL解码为％，...和@，如果存在于用户名或密码中。

43.  如果没有给出用户名，则不会尝试认证。如果没有给出端口，则使用默认值为1080。

44.  根据需求，将来可能会有更多SOCKS版本，并且将使用不同的协议前缀，如卷曲（1）所述。

45.  --psk

46.  提供与代理使用的十六进制（无前导0x）预共享密钥，以使用TLS-PSK加密支持。还必须提供--psk身份以启用TLS-PSK。

47.  --psk身份

48.  使用TLS-PSK支持的客户端身份。如果代理配置为这样做，则可以使用这可以替代用户名。

49.  -q，--qos

50.  指定消息的使用质量，从0，1和2.默认为0。

51.  - quiet

52.  如果给出此参数，则不会打印运行时错误。这排除了在无效用户输入的情况下给出的任何错误消息（例如使用 - 没有端口的端口）。

53.  -r， - 保存

54.  如果保留被赋予，则该消息将被保留为经纪人的“最后已知的良好”值。有关更多信息，请参阅mqtt（7）。

55.  -s，--stdin-file

56.  发送从stdin读取的消息，将整个内容作为单个消息发送。

57.  -S

58.  使用SRV查找来确定要连接的主机。当我们执行查询_mqtt._tcp
```
**不过如果直接将第一个终端关闭再打开 mosquitto 会出现一个问题**

**Error: Address already in use**

**解决方法：重启...   别的方法暂时不知道呢**

## <a name="t22"></a><a name="t22"></a>（4）取消匿名登录

**参看：[MQTT服务器搭建--Mosquitto用户名密码配置](https://zshipu.com/t?url=http://blog.csdn.net/u012377333/article/details/69397124)**

**如需转载请注明出处：https://blog.csdn.net/qq_29350001/article/details/76680646**
