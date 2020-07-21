title: Istio 是什么
author: 知识铺
date: 2020-04-09 10:08:02
tags:
---
 

## istio 是什么

> Istio 提供一种简单的方式来为已部署的服务建立网络，该网络具有负载均衡、服务间认证、监控等功能，而不需要对服务的代码做任何改动。

*   istio 适用于容器或虚拟机环境（特别是 k8s），兼容异构架构。
*   istio 使用 sidecar（边车模式）代理服务的网络，不需要对业务代码本身做任何的改动。
*   HTTP、gRPC、WebSocket 和 TCP 流量的自动负载均衡。
*   istio 通过丰富的路由规则、重试、故障转移和故障注入，可以对流量行为进行细粒度控制；支持访问控制、速率限制和配额。
*   istio 对出入集群入口和出口中所有流量的自动度量指标、日志记录和跟踪。

### [_istio_官网](https://zshipu.com/t?url=https://istio.io/)

 Connect, secure, control, and observe services.... _Istio_ Connect, secure, control, and observe services. Connect Intelligently control the flow of traffic a...

### [_Istio_ / 文档](https://zshipu.com/t?url=https://istio.io/zh/docs/)

 2020年3月17日 - 了解如何部署、使用和运维 _Istio_。... 了解如何部署、使用和运维 _Istio_。 概念 一些概念,理解它们有助于您更好地了解 _Istio_ 系统的不同部分及其使用的...

### [_istio_ 简介 - 简书](https://zshipu.com/t?url=https://www.jianshu.com/p/bed143a1c886)

 2018年12月18日 - 最近接触到了 _istio_,感觉十分强大,写篇短文推荐给大家。本文所涉及的具体实验步骤可以参考官网教程。 _istio_ 相关文章列表: _istio_ 简介 _istio_ 性能测试 i...

### [_Istio_是啥?一文带你彻底了解!_代理_搜狐](https://zshipu.com/t?url=https://www.sohu.com/a/270131876_463994)

 2018年10月19日 - 如果你比较关注新兴技术的话,那么很可能在不同的地方听说过 _Istio_,并且知道它和 Service Mesh 有着牵扯。 这篇文章可以作为了解 _Istio_ 的入门介绍,了解什么是 Is...

### [_istio_的原理和功能介绍 - Jo_ZSM - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/JoZSM/p/10902306.html)

 2019年5月21日 - 而_Istio_则为我们把这件事执行的更彻底。让我们看看_Istio_到底能干啥?_Istio_ lets you connect, secure, control, and observe services.官方给出的_Istio_的总结,很...

### [在生产中使用_Istio_,我们学到了什么? - 简书](https://zshipu.com/t?url=https://www.jianshu.com/p/cf4d4258b7f6)

 2019年6月10日 - 首先,给大家简单介绍一下_Istio_,_Istio_是一个Service Mesh的开源框架,来自Google,大部分使用Go语言来开发,是Service Mesh的集大成者。 I...

### [_Istio_ - 知乎](https://zshipu.com/t?url=https://www.zhihu.com/topic/20680818/top-answers)

 2019年2月15日 - 本文转载自:宋净超的博客 这不是一篇教程,本文试图带您梳理清楚 Kubernetes、Envoy(xDS 协议)以及 _Istio_ Service Mesh 之间的关系及内在联系。本文介...

### [_Istio_简介_如果你是一个县长,吃着火锅唱着歌,突然就被..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/chenleiking/article/details/79785493)

 2018年4月2日 - _Istio_简介1、简介1.1、ServiceMesh上网了解一下:Servicemesh和sidec... 旁白:事先准备一个Ansible的脚本确实很方便,在部署_Istio_的过程中出现过很多问...

### [_Istio_,下一个Kubernetes? - 老孙的博客 - CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/sunhf_csdn/article/details/84257923)

 2018年11月19日 - 近年来,开源项目被业界予以厚望,为业界众多技术大咖所推崇,其中一个项目就是由谷歌和IBM联合打造的_Istio_。_Istio_的出现使得服务网格——ServiceMesh这一概念开始流行...

### [istio_云计算解决方案](https://zshipu.com/t?url=http://www.baidu.com/baidu.php?url=af0000KpxzUee8WytjNIIijzpJahEaTBEA5XC6n2F0FPjRUCp_xmtw2MpuFjvpeZ2XZrkp2B18zRPsfkJ3KUNWvNK7TsBDYNB1FBfc2NSgfPK9lYEAPDgqx6NTUqcyeHhYnSoICXvUfa-L3CX256d9xyS77enHqEmkAj-tBwDAJH4YOZJo1CySTBEJ6hCt5qNMhlT31wlMYcvPNotXi9xm34M55G.7R_jVswRTDRP7va4a-muCyrrO__z20.U1Yk0ZDqigPYpyt0TA-W5H00TZPGuv3qPhNWPjc3Pj9WrjbYn199uWnLm1-WPHKhPjKWmWRLPH60IjdGTLwGUsKGUHYznWT0u1dsT1c0Iybqmh7GuZR0TA-b5Hnz0APGujYzrj00UgfqnH0kPdtznjmzg1DsnH-xn1msnfKopHYs0ZFY5Hm30ANGujYkPjmYg1nknHm4g1cknj6vg1nknH6vg1nsrH0zg1nsrjc1g1nknj6dg1nknHmYg1nknHbd0AFG5HDdPNtkPH9xnW0Yg1ckPsKVm1Ykrjf3nWfYPjbzg1DzPWDzPW6knjnkg1Dsnj7xn0KkTA-b5H00TyPGujYs0ZFMIA7M5H00mycqn7ts0ANzu1Ys0ZKs5HDzPHcdrHmd0A4vTjYsQW0snj0snj0s0AdYTjYs0AwbUL0qnfKzpWYs0Aw-IWdsmsKhIjYs0ZKC5H00ULnqn0KBI1Ykn0K8IjYs0ZPl5fK9TdqGuAnqTZnVUhC0pywW5R42i-n0IZN15HTsnHRzrjb1PjcLPWb4nW0dnjm0ThNkIjYkPH6vn1bYPWn1rHR10ZPGujdhnWuWuym3m10snj7hnWnL0AP1UHYLfRRznH0snjIjwDPDwDfs0A7W5HD0TA3qn0KkUgfqn0KkUgnqn0KlIjYs0AdWgvuzUvYqn7tsg1Kxn0Kbmy4dmhNxTAk9Uh-bT1Ysg1Kxn7ts0ZK9I7qhUA7M5H00uAPGujYs0ANYpyfqQHD0mgPsmvnqn0KdTA-8mvnqn0KkUymqn0KhmLNY5H00pgPWUjYs0ZGsUZN15H00mywhUA7M5HD0UAuW5H00uAPWujY0mhwGujYYn10dnRFDfY7DnHNjfYR1fWDLnbR3PHfzPWnLrH03w6KBIjYs0AqY5H00ULFsIjYsc10Wc10Wnansc108nj0snj0sc10Wc10WQfKkgLmqna3drNtsQW0sg108njKxna3sP-tsQW0Yg108nWm0ug9Y5H00mMPxTZFEuA-b5H00mLFW5Hf3rHDs&word=Istio&ck=0.0.0.0.0.0.0.0&shh=www.baidu.com)

 istio平台是在容器调度平台 Kubernetes 上构建的企业级分布式多租户容器管理平台具有多集群管理多存储类型支持等特性，在网络，存储方面提供多种便捷可靠方案

### [istio KubeSphere -- 企业容器平台](https://zshipu.com/t?url=http://www.baidu.com/baidu.php?url=af0000KpxzUee8Wyt2zw5jQzp37JxGf8xD5dFg5GMjPpyF6Aao0lqYzrbHiNjDRu9Qk4lBb9gub6nMT6cB9bviNg3KUvoestBpms-xr9b6uC8FHhHt_P1KWXJwudsKo3NpgltW8lSXxvX1PTRxtGBA9uIHdhkoezXzsRkdRC_fyVxYbhaCM5QLJ8jMKKbzZqgWjpLMUwBWKZjN1joytd-Zc7ScXF.DY_iI8aqnXrGnzxQv51fYgmQbfIt7jHzs_lTUQqRHZCl32AM-YG8x6Y_g_3_ZgKfYt_U_DY2yAU88Ge8yBSQV4TH7OSEkYOYxZR4i_nYQAHxYqMBC0.U1Yz0ZDqigPYpyt0TA-W5H00TZPGuv3qPjfvujFbPyuWnjmvnA7WPWRsuWnzmWfvuHTdPHNhP160IjdGTLwGUsKGUHYznWT0u1dsT1c0Iybqmh7GuZR0TA-b5Hnz0APGujYzrj00UgfqnH0kPdtznjmzg1DsnH-xn1msnfKopHYs0ZFY5Hm30ANGujYkPjmYg1nknHm4g1cknj6vg1nknH6vg1nsrH0zg1nsrjc1g1nknj6dg1nknHmYg1nknHbd0AFG5HDdPNtkPH9xnW0Yg1ckPsKVm1YkrjfYnHb3rjRvg1bdrjc3P1b1PW7xnH0snNts0Z7spyfqn0Kkmv-b5H00ThIYmyTqn0K9mWYsg100ugFM5H00TZ0qnHcdnWR4PWR0UMus5H08nj0snj0snj00Ugws5H00uAwETjYs0ZFJ5H00uANv5gKW0AuY5H00TA6qn0KET1Ys0AFL5HDs0A4Y5H00TLCq0A71gv-bm1dsTzd8p6KGuAnqHbG2RsKYIgnqn1cdPW0LnHDLP1T4PjDdnHRkrfKzug7Y5HDdrjm1rHfvn1n4PHn0Tv-b5ymzPhP-uW9Wnj0snymzn1T0mLPV5HIKwHcknj0sPYPDfYwDwj00mynqnfKsUWYs0Z7VIjYs0Z7VT1Ys0ZGY5H00UyPxuMFEUHYsg1Kxn7ts0Aw9UMNBuNqsUA78pyw15HKxn7tsg100TA7Ygvu_myTqn0Kbmv-b5H00ugwGujYVnfK9TLKWm1Ys0ZNspy4Wm1Ys0Z7VuWYs0AuWIgfqn0KGTvP_5H00XMK_Ignqn0K9uAu_myTqnfK_uhnqn0KbmvPb5fKBuA-b5Hf1njRkfbwjfRfkPRPjwHPanHTzwH6dPjcvn1T4nj9A0AFY5H00ULfqn0KETMKY5H0WnanWnansc10Wna3snj0snj0WnanWnanV0Z7xIWYsQWmzg108njKxna3sn7tsQW04g108njwxna3zrfK-XZfqn0KBTdqsThqbpyfqn0KWThnqnWmLPs&word=Istio&ck=0.0.0.0.0.0.0.0&shh=www.baidu.com)

 KubeSphere 是基于 Kubernetes 构建的多租户，企业级容器管理平台，具有强大且完善的网络与存储能力，提供完善的 CI / CD ，微服务，多集群管理，应用管理等功能

### [_Istio_ 中文社区](https://zshipu.com/t?url=https://istio.cn/)

 文档_Istio_ 官方英文文档 _Istio_ 官方中文文档纸质书籍 #TODO 电子书 _Istio_深度解析与项目实践该电子书深度解析服务网格开源项目_Istio_的基本原理,实现机制,以及如何在...

### [_istio_ · Service Mesh|服务网格中文社区](https://zshipu.com/t?url=https://www.servicemesher.com/tags/istio/)

 作者马若飞 | 2900字 | 阅读大约需要6分钟 | 归档于_istio_ 2020年3月3日 本文基于_istio_最新的架构调整设计文档,分析了_istio_未来的设计目标。 继续阅读 ist...

### [_Istio__Kubernetes中文社区](https://zshipu.com/t?url=https://www.kubernetes.org.cn/tags/istio)

 5天前 - 在_Istio_中,使用网关定义在网格边缘运行的负载均衡器,用于接收传入或传出的HTTP / TCP请求,网关配置适用于在网格边缘运行的独立Envoy代理。 与其他控制进入系统流量的...

### [使用_Istio_治理微服务入门 - 割肉机 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/williamjie/p/9442340.html)

 2018年8月8日 - 三、_Istio_安装 _Istio_目前支持最好的就是Kubernetes了,因此我们的实验环境就定在Kubernetes上。至于版本,_Istio_当前最新版本为0.4.0,这个版本据说要Kub...

### [_Istio_首页、文档和下载 - 大型微服务系统管理工具 - OSCHINA](https://zshipu.com/t?url=https://www.oschina.net/p/Istio)

 2017年5月26日 - _Istio_ 是一个由谷歌、IBM 与 Lyft 共同开发的开源项目,旨在提供一种统一化的微服务连接、安全保障、管理与监控方式。_Istio_ 项目能够为微服务架构提供流量管理机制...

### [《_Istio_官方文档》什么是_Istio_——综述 | 并发编程网 – ifeve.com](https://zshipu.com/t?url=http://ifeve.com/istio-overview/)

 2018年1月5日 -   本文介绍_Istio_:开源的连接,管理和安全的微服务。_Istio_提供了一种简单方式,让发布的服务创建连接并实现负载均衡,服务间的认证,监控,还有更多,而在...

### [_Istio__最佳实践_容器服务Kubernetes版-阿里云](https://zshipu.com/t?url=https://help.aliyun.com/knowledge_list/96908.html)

 在Kubernetes上基于_Istio_实现Service Mesh智能路由 基于_Istio_实现Kubernetes与ECS上的应用服务混合编排 基于_Istio_实现TCP入口流量路由的统一管理 基于_Istio_实现服务的...

### [_Istio_是什么?_百度知道](https://zshipu.com/t?url=https://zhidao.baidu.com/question/687426310948483132.html)

 2018年11月22日 - 回答：_Istio_是由Google、IBM和Lyft开源的微服务管理、保护和监控框架。_Istio_为希腊语,意思是”起航“使用_istio_可以很简单的创建具有负载均衡、服务间...

### [_istio_资源的页面 - _Istio_ | IBM](https://zshipu.com/t?url=https://www.ibm.com/cloud/info/istio)

 2020年1月27日 - Learn about _Istio_ as a tool for managing microservices at scale and get started with useful resources from IBM Cloud.

### [码云极速下载/_istio_](https://zshipu.com/t?url=https://gitee.com/mirrors/istio)

 _istio_/api. This repository defines component-level APIs and common configuration formats for the _Istio_ platform. _istio_/proxy. The _Istio_ proxy contains ext...

### [简单解释_Istio_是什么](https://zshipu.com/t?url=https://www.jdon.com/50273)

 2018年10月12日 - Envoy是_Istio_控制的主要部分,Envoy核心功能可以被认为是一个第7层路由表。或者,可以认为是没有DNS的DNS,类似DNS,但是不是真正DNS。 假如你在主机上运...

### [_Istio_ / _Istio_ 是什么?](https://zshipu.com/t?url=https://istio.io/zh/docs/concepts/what-is-istio/)

 2020年3月17日 - 介绍_Istio_,它要解决的问题,高层面的架构和设计目标。... _Istio_ 允许您连接、保护、控制和观察服务。 从较高的层面来说,_Istio_ 有助于降低这些部署的复...

### [_istio__Kubernetes中文社区](https://zshipu.com/t?url=https://www.kubernetes.org.cn/istio)

 5天前 - _Istio_被称作Kubernetes的最佳云原生拍档。从今天起,我们推出“_Istio_技术实践”系列专题,在本专题中,我们将通过技术文章+视频授课的方式,为大家详细阐...

### [_istio_架构及各个组件介绍 - itanony - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/itanony/p/11976340.html)

 2019年12月3日 - _Istio_ 服务网格从逻辑上分为数据平面和控制平面。 数据平面由一组智能代理(Envoy)组成,被部署为 sidecar。这些代理通过一个通用的策略和遥测中心(Mixe...

### [带你玩转_Istio_-第3篇---_Istio_架构概述篇_坚持的道路注..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/qq_31136839/article/details/101478870)

 2019年9月26日 - _Istio_架构概述前面的内容分别讲解了_Istio_是什么,以及_Istio_能做什么。本章将在此基础上进行

### [_Istio_简介_网络_z69183787的专栏-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/z69183787/article/details/90756295)

 2019年6月3日 - _Istio_简介1、简介1.1、Service Mesh上网了解一下:Service mesh和sid网络... 旁白:事先准备一个Ansible的脚本确实很方便,在部署_Istio_的过程中出现过很多问题,很多时...

### [_Istio_ – IBM Developer – IBM Developer](https://zshipu.com/t?url=https://developer.ibm.com/components/istio/)

 Connect, manage, and secure microservices with this open-source platform.... _Istio_ is an open-source service mesh platform that connects microservices and ...

### [_istio_入门教程 - 个人文章 - SegmentFault 思否](https://zshipu.com/t?url=https://segmentfault.com/a/1190000019997952)

 2019年8月7日 - [root@_istio_host ~]# wget https://storage.googleapis.com/kubernetes-helm/helm-v2.9.1-linux-amd64.tar.gz [root@_istio_host ~]# tar zxvf helm-v2...

### [_istio_ – 运维派](https://zshipu.com/t?url=http://www.yunweipai.com/tags/istio)

 2019年4月5日 - Google、IBM和Lyft开源其大型微服务系统管理工具_Istio_ 谷歌、IBM 与 Lyft 三方已经共同公布了 _Istio_ 项目的首次公开发行版。_Istio_ 是一个开源项目,旨...

### [_Istio_官方文档中文版](https://zshipu.com/t?url=https://www.bbsmax.com/A/l1dyegj0de/)

 2018年7月17日 - https://_istio_.io/docs/concepts/what-is-_istio_/goals.html为什么要使用_Istio_?在从单体应用程序向分布式微服务架构的转型过程中,开发人员和运维人员面...