title: MQTT和WebSocket 对比
author: 知识铺
date: 2020-04-13 09:27:10
tags:
---
MQTT跟WebSocket关系不大。他们不是在一个层级的。

MQTT和TCP、WebSocket的关系可以用下图一目了然：


![知识铺-pasted-353.png](https:\/\/blog.zshipu.com/tlg/images/pasted-353.png)

参考资料：

[http://www.zhihu.com/question/21816631](https://zshipu.com/t?url=http://www.zhihu.com/question/21816631 "http://www.zhihu.com/question/21816631")

# WebSocket的优势

以前，很多网站使用轮询实现推送技术。轮询是在特定的的时间间隔（比如1秒），由浏览器对服务器发出HTTP request，然后由服务器返回最新的数据给浏览器。轮询的缺点很明显，浏览器需要不断的向服务器发出请求，然而HTTP请求的header是非常长的，而实际传输的数据可能很小，这就造成了带宽和服务器资源的浪费。

Comet使用了AJAX改进了轮询，可以实现双向通信。但是Comet依然需要发出请求，而且在Comet中，普遍采用了长链接，这也会大量消耗服务器带宽和资源。

于是，WebSocket协议应运而生。 浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求，连接建立以后，客户端和服务器通过 TCP 连接直接交换数据。WebSocket 连接本质上是一个 TCP 连接。

WebSocket在数据传输的稳定性和数据传输量的大小方面，具有很大的性能优势。Websocket.org 比较了轮询和WebSocket的性能优势：

HTTP 轮训每次需要返回871个字节，websocket每次只需要2个字节

Use Case A： 1,000个客户端每秒接受一个message，网络吞吐量 （2*1,000）=2,000 bytes = 16,000 每秒bits

Use Case B： 10,000个客户端每秒接受一个message，网络吞吐量 （2*10,000）=20,000 bytes = 160,000 每秒bits

Use Case C： 100,000个客户端每秒接受一个message，网络吞吐量 （2*100,000）=200,000 bytes = 1,600,000 每秒bits


![知识铺-pasted-354.png](https:\/\/blog.zshipu.com/tlg/images/pasted-354.png)
参考：

[http://segmentfault.com/a/1190000000382788](https://zshipu.com/t?url=http://segmentfault.com/a/1190000000382788 "http://segmentfault.com/a/1190000000382788")

Spring 4.0 中的 WebSocket 架构
[http://www.oschina.net/translate/websocket-architecture-in-spring-4-0](https://zshipu.com/t?url=http://www.oschina.net/translate/websocket-architecture-in-spring-4-0)

# MQTT

MQTT 协议是为大量计算能力有限，且工作在低带宽、不可靠的网络的远程传感器和控制设备通讯而设计的协议，它具有以下主要的几项特性：

*   非常小的通信开销（最小的消息大小为 2 字节），小型传输，开销很小（固定长度的头部是 2 字节），协议交换最小化，以降低网络流量。
*   支持各种流行编程语言（包括 C，Java，Ruby，Python 等等）且易于使用的客户端；
*   使用发布 / 订阅消息模式，提供一对多的消息发布，解除应用程序耦合。
*   对负载内容屏蔽的消息传输。
*   使用 TCP/IP 提供网络连接。
*   有三种消息发布服务质量，让消息能按需到达目的地，适应在不稳定工作的网络传输需求 ：

*   "至多一次"，消息发布完全依赖底层 TCP/IP 网络。会发生消息丢失或重复。这一级别可用于如下情况，环境传感器数据，丢失一次读记录无所谓，因为不久后还会有第二次发送。
*   "至少一次"，确保消息到达，但消息重复可能会发生。
*   "只有一次"，确保消息到达一次。这一级别可用于如下情况，在计费系统中，消息重复或丢失会导致不正确的结果。

*   使用 Last Will 和 Testament 特性通知有关各方客户端异常中断的机制。

参考：

MQTT技术：为物联网而生
[http://www.leiphone.com/0828-danice-mqtt.html](https://zshipu.com/t?url=http://www.leiphone.com/0828-danice-mqtt.html)

MQTT 折腾笔记----协议简读
[http://www.cnblogs.com/youxilua/archive/2013/04/25/3041528.html](https://zshipu.com/t?url=http://www.cnblogs.com/youxilua/archive/2013/04/25/3041528.html)

基于 WebSocket 的 MQTT 移动推送方案
[http://www.ibm.com/developerworks/cn/websphere/library/techarticles/1308_xiangr_mqtt/1308_xiangr_mqtt.html](https://zshipu.com/t?url=http://www.ibm.com/developerworks/cn/websphere/library/techarticles/1308_xiangr_mqtt/1308_xiangr_mqtt.html)