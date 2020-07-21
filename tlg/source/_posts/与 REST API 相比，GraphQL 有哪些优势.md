
title: 与 REST API 相比，GraphQL 有哪些优势
author: 知识铺
date: 2020-06-25 12:02:49
tags:
---
   GraphQL 充当"编织"图层。

您拥有所有 API 的终结点，GraphQL 允许您同时调用多个终结点并将它们编织在一起。

<font _mstmutation="1" _msthash="7565506" _msttexthash="744557697">GraphQL 方法的问题是，对于调用的每个终结点，它都会发出单独的请求/响应，而不是重用一个内部请求/响应。这是因为 GraphQL 基于</font>[旧 api 模式](https://zshipu.com/t?url=https://www.slideshare.net/bobdobbes/api-pattern#13 "www.slideshare.net")其中通信逻辑/数据绑定到业务逻辑创建[交叉切割问题](https://zshipu.com/t?url=https://en.wikipedia.org/wiki/Cross-cutting_concern "en.wikipedia.org")在你的架构中。

在 REST 中，您可以执行与 GraphQL 完全相同的操作，除非通过实现[新的 API 模式](https://zshipu.com/t?url=https://www.slideshare.net/bobdobbes/api-pattern "www.slideshare.net")并从业务逻辑中抽象通信逻辑。

这反过来又允许您实现[API 链接（tm） 模式](https://zshipu.com/t?url=https://orubel.github.io/Beapi-API-Framework/chain.html "orubel.github.io")<font _mstmutation="1" _msthash="7568549" _msttexthash="612245166">它做完全相同的事情与GraphQL（即编织api调用在一起），除了它使用一个请求/响应，从而节省大量的开销。</font>

• 性能注意事项###

*   如果将常规 api 调用视为基准，GraphQL 将始终变慢（因为所有附加处理），因为它必须为每个附加资源分别进行 REQUEST/响应并将其编织在一起。
*   如果您考虑使用常规 api 调用[旧的 api 模式](https://zshipu.com/t?url=https://www.slideshare.net/bobdobbes/api-pattern#13 "www.slideshare.net")与[新的 api 模式](https://zshipu.com/t?url=https://www.slideshare.net/bobdobbes/api-pattern#22 "www.slideshare.net")，新的 api 模式将始终更快，因为它减少了代码膨胀和需要完成的处理量。
*   如果您考虑[API 链接](https://zshipu.com/t?url=https://orubel.github.io/Beapi-API-Framework/chain.html "orubel.github.io")vs 图形 QL，[API 链接](https://zshipu.com/t?url=https://orubel.github.io/Beapi-API-Framework/chain.html "orubel.github.io")会一直更快，因为它只需要一个请求/响应任何给定的呼叫

总之...GraphQL 是那些无法编写解决方案代码的用户的解决方案。而那些能够编写代码的人，拥有更可扩展、更快速的东西。不要粗鲁，但GraphQL只是猴子谁需要一个UI比devops或外壳的工具。

但不要听我的话...下面是一个 100K 请求，在 1.8ghz 计算机上完成 80 个并发，4 个内核和 1GB 专用 RAM，显示 API 的速度：

这是4700个reqs/秒的东西，实际上是一个树莓派的强大。
