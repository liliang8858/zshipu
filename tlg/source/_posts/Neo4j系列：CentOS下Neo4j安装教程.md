title: Neo4j系列：CentOS下Neo4j安装教程
author: 知识铺
date: 2020-03-31 11:03:20
tags:
---
 

### 下载并安装neo4j

[下载地址](https://neo4j.com/download-center/#releases)

![知识铺-pasted-249.png](https:\/\/blog.zshipu.com/tlg/images/pasted-249.png)

**或者直接用wget命令**

<code class="hljs java">wget https://neo4j.com/artifact.php?name=neo4j-community-3.4.9-unix.tar.gz</code>

_然后解压_

<code class="hljs delphi">tar -zxvf artifact.php?name=neo4j-community-3.4.9-unix.tar.gz</code>

_然后将目录移动到/usr下_

<code class="hljs">mv neo4j-community-3.4.9 /usr/neo4j</code>

_修改配置_

1.  cd /usr/neo4j/conf

3.  vim neo4j.conf

 _允许远程访问_


![知识铺-pasted-250.png](https:\/\/blog.zshipu.com/tlg/images/pasted-250.png)

_后面导入数据到neo4j的时候可能会因为内存不足导致出错，可以将下面两项适当调大（不能超过实际内存大小）_


![知识铺-pasted-251.png](https:\/\/blog.zshipu.com/tlg/images/pasted-251.png)

_保存退出_

**运行**

1.  /usr/neo4j/bin/neo4j start

3.  或者进入到neo4j的bin目录下

4.  cd /usr/neo4j/bin

5.  ./neo4j start

1.  查看neo4j的状态

2.  ./neo4j status

4.  停止neo4j

5.  ./neo4j stop

_此时在你的浏览器中输入网址http://<ip>:7474，即可看到如下页面_


![知识铺-pasted-252.png](https:\/\/blog.zshipu.com/tlg/images/pasted-252.png)

### 配置环境变量

现在你是不是发现每次启动都要进入安装目录？太麻烦了

接下来我们进行环境变量的配置

1.  vim /etc/profile

3.  加入以下语句

5.  NEO4J_HOME=/usr/neo4j

6.  PATH=$PATH:$NEO4J_HOME/bin

7.  export NEO4J_HOME PATH

9.  然后重新加载

10.  source /etc/profile

这时，只需输入neo4j start即可启动