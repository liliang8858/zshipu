title: Vertx系列二、vert.x
author: 知识铺
date: 2020-04-13 18:59:58
tags:
---
## 2\. vert x

我们将尝试用几行来解释 Vert.x。请记住，我们在上一节中说过，Vert.x 是_"在 JVM 上构建无功应用程序的工具包"。_

此描述中有三个要点：**工具包**、**反应**和_"JVM"。_

首先，Vert.x 是一个**工具包**。也就是说，Vert.x 不是应用程序服务器、容器或框架。它也不是 JavaScript 库。Vert.x 是一个普通的旧文件，因此 Vert.x 应用程序是使用此文件的应用程序。Vert.x 不定义打包模型，所有 Vert.x_组件_都是普通的_枯燥_文件。这对您和您的应用程序有什么影响？假设您正在使用生成工具（如 Maven 或 Gradle）来使应用程序成为 Vert.x 应用程序，只需添加依赖项。想要使用其他 Vert.x 组件，只需将其添加为依赖项。很简单，没有负担。启动应用程序是具有入口点的简单类。没有要安装的特定 IDE 或插件开始使用 Vert.x。
```
jar vertx-core public static void main(String[] args)
```

因此，要使用 Vert.x 提供的令人敬畏性，只需在代码中使用它，但要耐心等待，稍后将介绍这一点。

其次，Vert.x 是**反应性的**。它是专门用来构建反应应用程序，或者更恰当地，**系统**。反应系统<sup class="footnote">[[1](https://zshipu.com/t?url=http://escoffier.me/vertx-hol/#_footnotedef_1 "View footnote.")]</sup>已在[《反应宣言》](https://zshipu.com/t?url=http://reactivemanifesto.org/)中定义。虽然文档阅读时间并不长，但我们会进一步将其减少到以下 4 个要点：

*   响应式：反应系统需要在_合理_的时间内处理请求（我让您定义_合理的_）。

*   弹性：反应系统必须在_发生故障_（崩溃、超时、错误...）时保持响应，因此必须_针对故障进行设计_并妥善处理。500

*   弹性：反应系统必须在各种负载下保持响应。因此，它必须向上和向下扩展，并能够以最少的资源处理负载。

*   消息驱动：来自反应系统的组件使用**异步消息传递**进行交互。

此外，Vert.x 是事件驱动的，也是非阻塞的。事件在事件_循环_中传递，**绝不能阻止**。让我们解释一下原因。与传统不同，假设"企业"系统，Vert.x 使用很少的线程。其中一些线程是_事件循环_，它们负责在 中调度事件。如果阻止此线程，则事件不再传递。此执行模型会影响代码的编写方式，而不是_传统的_阻止代码模型，您的代码将是异步的<sup class="footnote">[[2](https://zshipu.com/t?url=http://escoffier.me/vertx-hol/#_footnotedef_2 "View footnote.")]</sup>和非阻塞 [ <sup class="footnote">[3](https://zshipu.com/t?url=http://escoffier.me/vertx-hol/#_footnotedef_3 "View footnote.")]</sup>。
```
Handlers
```

例如，如果我们想要从 URL 检索 resoure，我们会执行如下操作：

```
URL site = new URL("http://vertx.io/");
BufferedReader in = new BufferedReader(new InputStreamReader(site.openStream()));

String inputLine;
while ((inputLine = in.readLine()) != null) {
  System.out.println(inputLine);
} in.close();
```

但是，使用 Vert.x，我们更有可能做到：

```
vertx.createHttpClient().getNow(80, "vertx.io", "", response -> { response.bodyHandler(System.out::println);
});
```

这两个代码之间的主要区别是：

*   第一个是同步的，并且可能阻塞：指令_按顺序_执行，并可能长时间阻止线程（因为网站可能很慢或别的什么）。

*   Vert.x 一个是异步的和非阻塞的：线程（事件循环）在建立与 HTTP 服务器的连接时被释放，因此可以执行其他操作。收到响应后，**同一**事件循环调用_回调_。大多数 Vert.x 组件都是单线程的（仅由单个线程访问），因此不再承担并发负担。顺便说一下，对于 Vert.x，即使是 DNS 解析也是异步的和非阻塞的（而 Java DNS 解析是阻塞的）。

最后，Vert.x 应用程序_运行"JVM"Java_虚拟机 （8+）。这意味着可以使用在 JVM 上运行的任何语言开发 Vert.x 应用程序。包括Java（当然），格洛维，锡兰，红宝石，JavaScript，科特林和斯卡拉。我们甚至可以混合和匹配所有这些语言的任意组合。Vert.x 应用程序的多面体特性允许您为任务使用最合适的语言。

Vert.x 允许您通过使用内置 TCP 和 HTTP 服务器和客户端实现分布式应用程序，但也使用 Vert.x 事件总线（一种用于发送和接收消息的轻量级机制）。使用事件总线，您将消息发送到 。它支持三种分发模式：
```
addresses
```

1.  _点对点_：消息发送到侦听地址的单个_使用者_

2.  _发布/订阅_：所有收听该地址_的消费者_都收到该消息

3.  _请求/回复_：邮件发送给单个_使用者_，并让它通过向初始发件人发送另一_条消息_来_回复_邮件

哇！那是很多要处理的信息...但是，您可能仍要问：**我可以为哪类应用程序使用 Vert.x？**我们说，Vert.x 非常灵活 - 无论是简单的网络实用程序、复杂的现代 Web 应用程序、HTTP/REST 微服务、大容量事件处理还是完全成熟的后端消息总线应用程序，Vert.x 都非常适合。它速度快，不会约束您。最后但并非最不重要的一点是，Vert.x 提供了适当的工具来构建反应系统;系统：_响应式、弹性、弹性和异步_！
