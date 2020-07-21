title: 2.深入Java系列之虚拟机栈
author: 知识铺
date: 2020-03-31 17:07:43
tags:
---
### [深入理解JVM-_java虚拟机栈_ - 姿势帝 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/newAndHui/p/11168791.html)

 2019年7月11日 - 3\. _Java虚拟机栈_描述的是_Java_方法执行的内存模型:每个方法执行的同时会创建一个栈帧。 对于我们来说,主要关注的stack栈内存,就是_虚拟机栈_中局部变量...

### [JVM 系列 - 内存区域 - _Java_ _虚拟机栈_(三) - 简书](https://zshipu.com/t?url=https://www.jianshu.com/p/ecfcc9fb1de7)

 2018年12月4日 - 特点_Java_ _虚拟机栈_(_Java_ Virtual Machine Stacks)是线程私有的,生命周期随着线程,线程启动而产生,线程结束而消亡。 _Java_ _虚拟机栈_描述的是...

### [_java虚拟机栈_空间_Yohohaha的博客-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/yohohaha/article/details/89378915)

 2019年4月20日 - 翻译自:https://www.geeksforgeeks.org/_java_-virtual-mac... _Java虚拟机栈_是线程私有的,它描述的是_Java_方法执行的内存模型:每个方法在执行的同时会创...

### [_Java虚拟机_运行时栈帧结构--《深入理解_Java虚拟机_》学习..._博客园](https://zshipu.com/t?url=https://www.cnblogs.com/noKing/p/8167700.html)

 2018年1月2日 - 栈帧是什么?栈帧是一种数据结构,用于_虚拟机_进行方法的调用和执行。...实例方法的调用时,局部变量表的第0位是一个指向当前对象的引用,也就是_Java_里...

### [深入理解_Java虚拟机栈_的栈帧_没头脑遇到不高兴-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/u012988901/article/details/100043857)

 2019年8月25日 - 本节将会介绍一下_Java虚拟机栈_中的栈帧,会对栈帧的组成部分(局部变量表、操作数栈、动态链接、方法出

### [_Java虚拟机_—栈帧、操作数栈和局部变量表 - 知乎](https://zshipu.com/t?url=https://zhuanlan.zhihu.com/p/45354152)

 2018年9月27日 - 前言:在之前的文章:_Java_虚拟机—堆、栈、运行时数据区 中,我们整体介绍了JVM在运行时的一些数据区域如堆、方法区、程序计数器、_虚拟机栈_、本地方法栈。本篇...

### [_Java虚拟机_的堆、栈、_堆栈_如何去理解? - 知乎](https://zshipu.com/t?url=https://www.zhihu.com/question/29833675)

 2016年1月21日 - 我只片面的知道堆和堆栈是一种存储结构,栈是一种数据结构... 本地方法栈(Native Method Stack)和_Java虚拟机栈_类似,区别在于_Java虚拟机栈_是为了_Java_方...

### [探究_Java_ _虚拟机栈_ - CSDN](https://zshipu.com/t?url=https://baijiahao.baidu.com/s?id=1580588874613411713&wfr=spider&for=pc)

 2017年10月7日 - _Java_ 虚拟机的内存模型分为两部分:一部分是线程共享的,包括 _Java_ 堆和方法区;另一部分是线程私有的,包括_虚拟机栈_和本地方法栈,以及程序计数器这一小部分内存。...

### [_Java虚拟机栈_的五点内部结构|其他|观点|犀牛代理 - 原创文..._站酷](https://zshipu.com/t?url=https://www.zcool.com.cn/article/ZODY1OTMy.html)

 2019年3月27日 - _Java_虚拟机管理的内存包括几个运行时数据内存:方法区、_虚拟机栈_、堆、本地方法栈、程序计数器(PCR Program Counter Register)。其中方法区和堆是线程...

### [JVM_虚拟机栈_——_JAVA_方法的消亡史-沙漏半杯-51CTO博客](https://zshipu.com/t?url=https://blog.51cto.com/14028890/2372451?source=dra)

 2019年4月1日 - _Java虚拟机_(JVM)是基于栈结构的,其中的“栈”指的就是操作数栈。 在代码的实际运行中,每个线程都会创建一个JVM栈存储栈帧(frame)。每当有方法调用时,frame就会...

### [jvm - [_Java_]对象的实例存放在_Java虚拟机栈_(VM Stack)的什么位置...](https://zshipu.com/t?url=https://segmentfault.com/q/1010000015327556?utm_source=tag-newest)

 2018年6月20日 - obj是对象的实例,广义上讲是存放在「栈」上,指向「堆」上的内存地址;具体讲,我的印象里obj应该是存放在运行时数据区的_虚拟机栈_(VM Stack)上,我知道_虚_...

### [浅析_JAVA虚拟机_的栈与堆](https://zshipu.com/t?url=https://www.sohu.com/a/157050148_99926657)

 2017年7月14日 - 浅析_JAVA虚拟机_的栈与堆 一,数据类型 _Java虚拟机_中,数据类型可以分为两类:基本类型和引用类型。基本类型的变量保存原始值,即:他代表的值就是数值本身;而引用类型...

### [_java虚拟机栈_溢出-CSDN论坛](https://zshipu.com/t?url=https://bbs.csdn.net/topics/391858145)

 2015年11月13日 - 最近在看《深入理解_java_虚拟机》,看到_虚拟机栈_溢出,有个地方很不解: 如果线程请求的栈深度大于虚拟机所允许的最大深度,将抛出StackOverFlowError异常;...

### [栈帧——深入理解_Java虚拟机_ - 程序员大本营](https://zshipu.com/t?url=https://www.pianshen.com/article/2459215984/)

 栈帧——深入理解_Java_虚拟机,程序员大本营,技术文章内容聚合第一站。... 我们的_Java_运行时数据区包括线程独占区中的_Java虚拟机栈_,_Java虚拟机栈_中的“元素”就是栈...

### [面试专题(JVM _虚拟机_)丶一个站在_Java_后端设计之路的男青年个人...](https://zshipu.com/t?url=https://www.liangzl.com/get-article-detail-28549.html)

 2018年11月7日 - _java_ 栈:线程私有,生命周期和线程,每个方法在执行的同时都会创建一个 栈帧用于...方法区:也叫永久区,用于存储已经被_虚拟机_加载的类信息,常量("zdy","123"等)...

### [_Java_ _虚拟机栈_的垃圾是怎样回收的? - V2EX](https://zshipu.com/t?url=https://www.v2ex.com/amp/t/546984)

 2019年3月21日 - 注意,是_虚拟机栈_314 次点击所在节点 问与答Ad 0 条回复 第1 页/共 1 页Ad 这是一个专为移动设备优化的页面(即为了让你能够在 Google 搜索结果里秒开这...

### [_Java虚拟机_的堆,栈,_堆栈_如何去理解?](https://zshipu.com/t?url=https://m.imooc.com/wenda/detail/309675)

 堆内存用来存储_Java_中的对象。无论是成员变量,局部变量,还是类变量,它们指向的对象都存储在堆内存中。独有还是共享_栈_内存归属于单个线程,每个线程都会有一个_栈_内存...

### [jvm中_虚拟机栈_的使用-虚拟机- 阿里云](https://zshipu.com/t?url=https://www.aliyun.com/citiao/1007326.html)

 jvm中_虚拟机栈_的使用阿里云虚拟主机主要用于搭建网站。提供预装网站运行环境、赠送正版数据库、可通过图形化控制面板管理,包括独享系列虚机和共享系列虚机。独享系列适合...

### [JVM之_虚拟机栈__云博客_云社区-华为云](https://zshipu.com/t?url=https://bbs.huaweicloud.com/blogs/140662)

 2019年12月24日 - 【推荐】2019_Java_开发者跳槽指南.pdf(吐血整理)>>> _java虚拟机栈_描述的是_java_方法执行的是内存模型,它也是线

### [_Java虚拟机_(JVM)_堆栈_区域 - Break易站](https://zshipu.com/t?url=https://www.breakyizhan.com/java/3705.html)

 2018年4月27日 - 对于每个线程,JVM在线程创建时创建一个单独的堆栈。_Java虚拟机堆栈_的内存不需要是连续的。_Java_虚拟机仅在_Java堆栈_上直接执行两个操作:它推送和弹出帧...

### [_Java虚拟机_的堆、栈、_堆栈_如何去理解? - 素染年华 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/liyonghua/p/8805017.html%20)

 2018年4月12日 - _Java虚拟机_的堆、栈、_堆栈_如何去理解? 堆是堆(heap),栈是栈(stack),_堆栈_是栈。 栈中分配的是基本类型和自定义对象的引用。 堆中分配的是对象,也就是ne...

### [_Java_虚拟机之_虚拟机栈_与本地方法栈 - IBLiplus的博客 - CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/IBLiplus/article/details/81636543)

 2018年8月13日 - _虚拟机栈_ 与程序计数器一样,_Java虚拟机栈_也是线程私有的,它的生命周期与线程相同。虚拟机描述的是_Java_方法执行的内存模型: 每个方法在执行的同时都会...

### [_JAVA虚拟机_结构之栈帧_LZ的博客-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/u014296316/article/details/82668670)

 2018年9月12日 - 概述(Stack Frame)栈帧(Stack Frame) 是用于_虚拟机_执行时方法调用和方法执行时... _Java_ _虚拟机_的解释执行引擎称为“基于栈的执行引擎”,这里的栈就是...

### [_Java虚拟机栈_ - 立志变成_java_巨头_CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/hnust_lizeming/article/details/88891677)

 2019年3月29日 - 一_Java虚拟机栈_概念。_Java虚拟机栈_中存储的内容,它用于存储数据和部分过程结果的数据结构,同时也被用来处理动态链接/方法返回值和异常分派.一个完整的栈帧包括:局部...

### [_java虚拟机栈_ - FigSprite - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/figsprite/p/10461475.html)

 2019年3月2日 - _java虚拟机栈_ 作用: 用于存储局部变量、操作数栈、动态链接、方法出口等信息。 特点: 1.线程私有 2.生命周期与线程相同 工作特点: 1.局部变量表(_虚拟_...

### [_Java虚拟机_之栈帧的组成结构__java_,_虚拟机_,栈帧_mine_so..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/mine_song/article/details/71517200)

 2017年5月10日 - 在_Java_虚拟机规范中,_Java_栈(_Java_ Stack)也可以被称之为_Java虚拟机栈_(_Java_ Virtual Machine Stack),它同PC寄存器一样都是线程私有的,并且生命周期与线...

### [_Java虚拟机栈_和本地方法栈 - 托马斯的半亩地 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/thomas12112406/p/5858298.html)

 2016年9月9日 - 4\. Re:_Java虚拟机栈_和本地方法栈 @ 黄登科别理我之前的胡说八道;我自己再去了解了一下,大致理解如下:一个Native Method就是一个_java_调用非_java_代码的...

### [JVM _虚拟机栈_详解 - 奔波儿灞_CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/qq_36866808/article/details/78654060)

 2017年11月28日 - 当_Java_虚拟机运行程序时。每当一个新的线程被创建时。_Java_ 虚拟机都会分配一个_虚拟机栈_,_Java虚拟机栈_是以帧为单位来保存线程的运行状态。_Java_栈只会有...

### [_Java_ _虚拟机栈_ - luzhensmart的专栏_CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/luzhensmart/article/details/81255740)

 2018年7月27日 - _java栈_保存的主要内容为栈帧,每一次函数调用,都会有一个对应的栈帧被压入_java_...无论是_Java虚拟机_内部产生的异常,还是代码中使用athrow字节码指令产生...

### [JVM _虚拟机栈_详解_向振华的博客-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/anenan/article/details/83899970)

 2018年11月9日 - 栈帧(Stack Frame) 是用于支持_虚拟机_进行方法调用和方法执行的数据结构,它是虚拟...在 _Java_程序被编译为 Class文件时,就在方法的 Code属性的max_local...

### [_Java虚拟机_之栈帧 - Code菜菜的世界 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/codecaicai/p/10342277.html)

 2019年1月31日 - _Java虚拟机_之栈帧 写在前面的话:_Java虚拟机_是一门学问,是众多_Java_大神们的杰作,由于我个人水平有限,精力有限,不能保证所有的东西都是正确的,这里内容...

### [深入理解JVM-_java虚拟机栈_ - 姿势帝 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/newAndHui/p/11168791.html%20)

 2019年7月11日 - 3\. _Java虚拟机栈_描述的是_Java_方法执行的内存模型:每个方法执行的同时会创建一个栈帧。 对于我们来说,主要关注的stack栈内存,就是_虚拟机栈_中局部变量...

### [_Java虚拟机栈_动态扩展是个什么概念?汗血宝马](https://zshipu.com/t?url=http://www.caotama.com/107258.html)

 2018年3月28日 - 看到有说:如果_虚拟机栈_可以动态扩展(大部分虚拟机允许动态扩展,也可以设置固定大小的_虚拟机栈_) 这个动态扩展是个什么概念?jvm中如何设置? Warning: Il...

### [_java虚拟机栈_栈帧过大(线程私有的数据区)StackOve..._ChinaUnix博客](https://zshipu.com/t?url=http://blog.chinaunix.net/uid-26602509-id-3988753.html)

 2013年11月13日 - _虚拟机栈_和本地方法栈溢出 StackOverflowError 关于_虚拟机栈_和本地方法栈,在 _Java_ 虚拟机规范中描述了两种异常: 如果线程请求的栈深度大于虚拟机所允...

### [深入_Java虚拟机_(十):运行时栈帧结构 - 码农教程](https://zshipu.com/t?url=http://www.manongjc.com/article/56046.html)

 2019年2月17日 - 本文章向大家介绍深入_Java虚拟机_(十):运行时栈帧结构,主要包括深入_Java虚拟机_(十):运行时栈帧结构使用实例、应用技巧、基本知识点总结和需要注意事项,...

### [理解_java虚拟机_内存分配堆,栈和方法区](https://zshipu.com/t?url=https://www.bbsmax.com/A/l1dyO2nJem/)

 2016年5月30日 - _java虚拟机_就会在栈中 根据类的模板 加载出一个类信息 stu1 类中方法实现是固定的,_java_给每一个方法都分配了一个地址,需要使用方法的时候...

### [_Java虚拟机_的堆、栈、_堆栈_如何去理解? - 知乎](https://zshipu.com/t?url=https://www.zhihu.com/question/29833675/answer/45811216)

 2015年4月25日 - 普通_Java_ 程序使用的就是process virtual memory. 上图中最顶端的一部分内存叫做user stack. 这就是题目问的 stack. 中间有个 runtime heap。就是题目...

### [_Java虚拟机_如何执行的-百度经验](https://zshipu.com/t?url=https://jingyan.baidu.com/article/0eb457e54f480c43f1a905f1.html)

 2019年7月16日 - _Java虚拟机_如何执行的,在_java_开发中,理解jvm的运行是非常重要的,这里一起探讨下,通过编写一个_java_类,然后编译成cla文件,通过工具,查看cla文件的指令步...

### [jvm 本地方法_栈_(native Method stacks) 基本概念 - _java_ 技术细节...](https://zshipu.com/t?url=https://annan211.iteye.com/blog/2112456)

 2014年9月3日 - _Java_ 虚拟机 运行时数据区域 一般可区分为 :方法区,堆,_Java虚拟机栈_,本地方法栈和程序计数器。 其中_Java虚拟机栈_ 为虚拟机执行_Java_ 方法服务,本地方法...

### [深入理解_Java虚拟机_之类运行时栈帧结构-简祥-51CTO博客](https://zshipu.com/t?url=https://blog.51cto.com/13965558/2175739?source=dra)

 2018年9月16日 - 栈帧(Stack Frame)是用于支持虚拟机进行方法调用和方法执行的数据结构,它是虚拟机运行时数据区中的_虚拟机栈_(Virtual Machine Stack)的栈元素。栈帧存...

### [_java虚拟机栈_深度是什么意思?-CSDN论坛](https://zshipu.com/t?url=https://bbs.csdn.net/topics/390433050?locationNum=12&fps=1)

 2013年4月20日 - 对_Java虚拟机栈_深度的理解 在读“深入理解_Java_虚拟机”一书时看到这个概念:在_Java_虚拟机规范中,对这个区域规定了两种异常状况:如果线程请求的栈深度大...

### [详细解析_Java虚拟机_的栈帧结构 - 知乎](https://zshipu.com/t?url=https://zhuanlan.zhihu.com/p/102065453)

 2020年1月14日 - 什么是栈帧? 正如大家所了解的,_Java_虚拟机的内存区域被划分为程序计数器、_虚拟机栈_、本地方法栈、堆和方法区。(什么?你还不知道,赶紧去看看《_Java_虚拟...

### [_Java_ _虚拟机栈_的垃圾是怎样回收的? - V2EX](https://zshipu.com/t?url=https://www.v2ex.com/t/546984)

 2019年3月21日 - 问与答 - @tlriavsihd - 注意,是_虚拟机栈_... 注意,是_虚拟机栈_ 目前尚无回复 机栈_Java_回收垃圾关于 · FAQ · API · 我们的愿景 · 广告投放 · 感谢 ·...

### [深入了解_Java_之_虚拟机_内存_VMStack](https://zshipu.com/t?url=https://www.sohu.com/a/251580989_465221)

 2018年9月3日 - 作者:feifei 来自:http://itfeifei.win/2017/03/13/深入了解_Java_之_虚拟机_内存/ 在讨论JVM内存区域分析之前,先来看一下_Java_程序具体执行的过程: _Java_程...

### [_JAVA虚拟机_内存(栈,堆,方法区) - 程序员大本营](https://zshipu.com/t?url=https://www.pianshen.com/article/2818204604/)

 _JAVA虚拟机_内存(栈,堆,方法区),程序员大本营,技术文章内容聚合第一站。... 一、_java虚拟机_的内存可以分为三个区域:栈stack 、堆heap、方法区method area 1\. 栈...

### [_Java_内存管理运行时数据区域之_Java虚拟机栈_与本地方法栈](https://zshipu.com/t?url=https://baijiahao.baidu.com/s?id=1644083281526003615&wfr=spider&for=pc)

 2019年9月9日 - 通常我们说的栈(Stack),即_Java虚拟机栈_(_Java_ Vritual Stacks) ,与程序计数器类似,也是“线程私有”的,与线程生死与共,依赖于线程的启动和结束而建立与销毁。虚拟...

### [_Java虚拟机栈_动态扩展是个什么概念? - 的回答 - SegmentFault 思否](https://zshipu.com/t?url=https://segmentfault.com/q/1010000013255380/a-1020000013304709)

 2018年2月11日 - 看到有说:如果_虚拟机栈_可以动态扩展(大部分虚拟机允许动态扩展,也可以设置固定大小的_虚拟机栈_) 这个动态扩展是个什么概念?jvm中如何设置?阅读...

### [_JAVA虚拟机_规范_百度文库](https://zshipu.com/t?url=https://wenku.baidu.com/view/ab705cee988fcc22bcd126fff705cc1755275f06.html)

 此区域是虚拟机规范中没有规定 任何 OutOfMemoryError 情况的区域。 _Java_ _虚拟机栈_ _Java_ _虚拟机栈_也是线程私有的,生命周期与线程相同。_虚拟机栈_描述的是 _Java_ ...