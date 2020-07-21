
title: Node.js的替代者，初识Deno
author: 知识铺
date: 2020-05-30 11:59:58
tags:
---
 ## 欢迎来到 Deno 世界

> [点击链接查看完整 Slides](https://zshipu.com/t?url=https://hijiangtao.github.io/slides/s-YFD/Welcome-to-Deno-World#/)

2018年在 JSConf EU 上，被称为 Node.js 之父的 Ryan 发表主题为「10 Things I Regret About Node.js」的演讲，并向大家介绍了他的“新玩具” Deno，两年过去，Deno 已于2020年5月13日发布1.0版本。你可能会疑惑 Deno 到底是什么，Deno 和 Node 有什么关系？Deno 和我有什么关系？

在这接近两年的日子里 Deno 又经历了些什么，从我们普通开发者角度来看，又有哪些值得了解的 Deno 概念呢？本次分享为团队内分享，通过介绍 Deno 的发展历史以及一些研发工程师值得了解的 Deno 特点，以期将读者初步带入 Deno 世界。

本次分享主要就三个问题展开：

1.  What is Deno?
2.  Why is Deno?
3.  How is Deno?

本文的各项内容也同时采编自社区各活跃开发者的布道文章、演讲与各类材料，所以也可将此 Slides 认为是图文简易版入门教程​。更多参考资料以及文中各类​片段与图片出处，见 Slides 末尾罗列。以下为 Slides 截图。

* * *

**关于 Deno 如果你还想了解更多，可以参照如下内容与链接**

1.  deno.land [https://deno.land/](https://zshipu.com/t?url=https://deno.land/)
2.  Deno GitHub [https://github.com/denoland/deno](https://zshipu.com/t?url=https://github.com/denoland/deno)
3.  Deno API [https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts](https://zshipu.com/t?url=https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts)
4.  [https://www.youtube.com/watch?v=z6JRlx5NC9E](https://zshipu.com/t?url=https://www.youtube.com/watch?v=z6JRlx5NC9E&t=469s)
5.  [https://www.youtube.com/watch?v=M3BM9TB-8yA](https://zshipu.com/t?url=https://www.youtube.com/watch?v=M3BM9TB-8yA&t=102s)
6.  [https://tinyclouds.org/jsconf2018.pdf](https://zshipu.com/t?url=https://tinyclouds.org/jsconf2018.pdf)
7.  [https://www.rust-lang.org/](https://zshipu.com/t?url=https://www.rust-lang.org/)
8.  [https://v8.dev/](https://zshipu.com/t?url=https://v8.dev/)
9.  [https://github.com/v8/v8](https://zshipu.com/t?url=https://github.com/v8/v8)
10.  [https://github.com/tokio-rs/tokio](https://zshipu.com/t?url=https://github.com/tokio-rs/tokio)
11.  [https://blog.logrocket.com/deno-1-0-what-you-need-to-know/](https://zshipu.com/t?url=https://blog.logrocket.com/deno-1-0-what-you-need-to-know/)
12.  [https://www.ruanyifeng.com/blog/2020/01/deno-intro.html](https://zshipu.com/t?url=https://www.ruanyifeng.com/blog/2020/01/deno-intro.html)
13.  [https://zhuanlan.zhihu.com/p/141832695](https://zshipu.com/t?url=https://zhuanlan.zhihu.com/p/141832695)
14.  [https://zhuanlan.zhihu.com/p/140787128](https://zshipu.com/t?url=https://zhuanlan.zhihu.com/p/140787128)
15.  [https://zhuanlan.zhihu.com/p/142002526](https://zshipu.com/t?url=https://zhuanlan.zhihu.com/p/142002526)
16.  [https://github.com/dt-fe/weekly/issues/248](https://zshipu.com/t?url=https://github.com/dt-fe/weekly/issues/248)
17.  [https://zhuanlan.zhihu.com/p/37637923](https://zshipu.com/t?url=https://zhuanlan.zhihu.com/p/37637923)
18.  [https://www.youtube.com/embed/5nmpokoRaZI](https://zshipu.com/t?url=https://www.youtube.com/embed/5nmpokoRaZI)
19.  [https://zhuanlan.zhihu.com/p/42630183](https://zshipu.com/t?url=https://zhuanlan.zhihu.com/p/42630183)
20.  [https://zhuanlan.zhihu.com/p/38202123](https://zshipu.com/t?url=https://zhuanlan.zhihu.com/p/38202123)

原文地址 [https://hijiangtao.github.io/2020/05/29/Welcome-to-Deno-World/](https://zshipu.com/t?url=https://hijiangtao.github.io/2020/05/29/Welcome-to-Deno-World/)

* * *

个人公众号「**黯晓**」，微信搜索或扫这个[二维码](https://zshipu.com/t?url=https://hijiangtao.github.io/assets/pic/qrcode_for_gh_4e090cdcbcc5_258.jpg)，交个朋友吧。

知乎专栏「[初级前端工程师](https://zshipu.com/t?url=https://zhuanlan.zhihu.com/makewebgreatagain)」，前端技术博客，欢迎投稿与关注。

生活中难免犯错，请多多指教！

> 作者：hijiangtao
