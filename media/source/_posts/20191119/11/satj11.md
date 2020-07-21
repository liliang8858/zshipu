---
categories:
- 月刊
tags:
- 月刊,技术月刊
keywords: 知识铺,技术月刊
date: 2019-11-19T13:56:17+08:00
title:  技术月刊第 11 期
author: 知识铺
weight: -1
---

# 《技术月刊》第 11 期
>兴趣是最好的老师，**技术月刊** 就是帮你找到兴趣！


## 简介
分享 GitHub 上有趣、入门级的开源项目。



🎉  🎉

## 目录
- [C 项目](#C-项目)
- [Go 项目](#Go-项目)
- [Java 项目](#Java-项目)
- [JavaScript 项目](#JavaScript-项目)
- [Python 项目](#Python-项目)
- [Swift 项目](#Swift-项目)
- [其它](#其它)
- [开源书籍](#开源书籍)


### C 项目
1、[wrk](https://github.com/wg/wrk)：现代 HTTP 基准测试（实现对一类测试对象的某项性能指标进行定量的和可对比的测试）工具，使用示例：
```sh
# 输入命令
wrk -t12 -c400 -d30s http://127.0.0.1:8080/index.html

# 输出
Running 30s test @ http://127.0.0.1:8080/index.html
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   635.91us    0.89ms  12.92ms   93.69%
    Req/Sec    56.20k     8.07k   62.00k    86.54%
  22464657 requests in 30.00s, 17.76GB read
Requests/sec: 748868.53
Transfer/sec:    606.33MB
```

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>

### Go 项目
2、[negroni](https://github.com/urfave/negroni)：Negroni 是一个很地道的 Web 中间件，它不是一个框架，是为了方便使用 net/http 而设计的一个库而已。[中文介绍](https://github.com/urfave/negroni/blob/master/translations/README_zh_cn.md)

3、[openedge](https://github.com/baidu/openedge)：百度云开源的边缘计算平台，可将云计算能力拓展至用户现场，提供临时离线、低延时的计算服务，包括设备接入、消息路由、消息远程同步、函数计算、视频接入预处理、AI推断等功能

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>

### Java 项目
4、[GitClub](https://github.com/TellH/GitClub)：GitClub 不仅仅是一个 GitHub 客户端，还是一个发现优秀 GitHub 开源项目的 App

5、[tale](https://github.com/otale/tale)：简洁、漂亮、轻量级、Java 博客，[在线预览](https://tale.biezhi.me/)。特性：
- 设计简洁，界面美观
- Markdown 文章发布
- 自定义文章链接
- 支持多主题
- 支持 Emoji 表情
- 支持网易云音乐播放
- 支持附件和数据库备份
- 部署简单，不依赖 Tomcat


<p align="center"><img src='https://sblig.gitee.io/static/satj/11/img/tale-show-min.png' style="max-width:80%; max-height=80%;"></img></p>

6、[jvm-mon](https://github.com/ajermakovics/jvm-mon)：命令行模式的 JVM 监控


<p align="center"><img src='https://sblig.gitee.io/static/satj/11/img/jvm-show-min.png' style="max-width:80%; max-height=80%;"></img></p>

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>

### JavaScript 项目
7、[react-tetris](https://github.com/chvin/react-tetris)：逼真的俄罗斯方块（非常逼真、强大！），详细的技术介绍，[在线试玩](https://chvin.github.io/react-tetris/?lan=zh)


<p align="center"><img src='https://sblig.gitee.io/static/satj/11/img/tetris.gif' style="max-width:80%; max-height=80%;"></img></p>

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>

### Python 项目
8、[sh](https://github.com/amoffat/sh)：sh 是一个成熟，用于替代 subprocess，它允许你调用任何程序，就像它是一个函数，支持 Python2.6 - 3.5

```python
from sh import ifconfig
print ifconfig("eth0")
```

9、[fastText.py](https://github.com/salestock/fastText.py)：fastText 简而言之，就是把文档中所有词通过 lookup table 变成向量，取平均后直接用线性分类器得到分类结果。[fastText 的实现](https://www.zybuluo.com/Wayne-Z/note/460881)

10、[mongoaudit](https://github.com/stampery/mongoaudit)：强大的 MongoDB 渗透测试工具，用于发掘 MongoDB 漏洞、并提出改善方法。
- 安装：`pip install mongoaudit`
- 运行：`python mongoaudit`

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>

### Swift 项目
11、[Swift30Projects](https://github.com/soapyigu/Swift30Projects)：30 个小型 Swift Apps，可以用来上手学习、练习移动开发。


<p align="center"><img src='https://sblig.gitee.io/static/satj/11/img/swift30projects-show-min.jpg' style="max-width:80%; max-height=80%;"></img></p>

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>

### 其它
12、[linux-command](https://github.com/jaywcjlove/linux-command)：Linux 命令大全搜索工具，内容包含 Linux 命令手册、详解、学习、搜集

13、[chinese-programmer-wrong-pronunciation](https://github.com/shimohq/chinese-programmer-wrong-pronunciation)：中国程序员容易发音错误的单词

14、[go-lang-cheat-sheet](https://github.com/a8m/go-lang-cheat-sheet)：（英文）Go 语法特性集合

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>

### 开源书籍
15、[book](https://github.com/qyuhen/book)：雨痕大神写的学习笔记

16、[nginx-book](https://github.com/taobao/nginx-book)：Nginx 开发从入门到精通——本书的作者为淘宝核心系统服务器平台组的成员

17、[real-world-haskell-cn](https://github.com/huangz1990/real-world-haskell-cn)：《Real World Haskell》中文翻译项目

18、[open-shell-book](https://github.com/tinyclub/open-shell-book)：《Shell 编程范例》，面向操作对象学 Shell！

19、[python-data-structure-cn](https://github.com/facert/python-data-structure-cn)：《Problem Solving with Algorithms and Data Structures using Python》中文版

20、[docker_practice](https://github.com/yeasy/docker_practice)：Dokcer 从入门到实践

21、[explore-flask](https://github.com/spacewander/explore-flask-zh)：[《explore flask》中文翻译](https://spacewander.github.io/explore-flask-zh/index.html)

22、[react-cookbook](https://github.com/shimohq/react-cookbook)：编写简洁漂亮，可维护的 React 应用

23、[rust-book-chinese](https://github.com/KaiserY/rust-book-chinese)：Rust 程序设计语言 中文版

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>



<p align="center">
    <a href="../../10/satj10">『上一期』</a>  | <a href="../../12/satj12">『下一期』</a>
</p>




