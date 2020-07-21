title: 23.深入Java系列Java内存模型和JVM内存模型
author: 知识铺
date: 2020-04-06 11:17:06
tags:
---
 
### [区分-_JVM内存_分区和_Java内存模型_(Java Memory Model)_q..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/qq_41297896/article/details/89949632)

 2019年5月8日 - 虚拟机栈(_JVM_ Stacks):属线程私有内存区域,与线程同时创建,总数与线程数关联,代表_Java_方法执行的_内存模型_。每一个运行在_Java_虚拟机里的线程都拥有自己..

### [比较_jvm内存_结构&_java内存模型_&java对象_模型_ - 个人文章...](https://zshipu.com/t?url=https://segmentfault.com/a/1190000020206676?utm_source=tag-newest)

 2019年8月27日 -   学习java过程中有三个概念,分别是_jvm内存_结构、_java内存模型_、java对象_模型_。我们系统的学习完之后,如果不加以总结对比,很容易混淆,相信不光是自...

### [_JVM内存_结构、_Java内存模型和_Java对象模型的区别 - 简书](https://zshipu.com/t?url=https://www.jianshu.com/p/dff4bd49d25a)

 2018年12月19日 - _JVM内存_结构、_Java内存模型和_Java对象模型是截然不同的三种概念。 1\. _JVM内存_结构 Java程序执行过程中,内存会被划分为不同的数据区域,各个区域有各自...

### [_Java内存_管理-_JVM内存模型_以及JDK7和JDK8_内存模型_对比总结(三...](https://zshipu.com/t?url=https://www.cnblogs.com/aflyun/p/10575740.html)

 2019年3月22日 - 如果虚拟机栈可以动态扩展,当扩展到无法申请_内存_到足够的_内存_,就会抛出OutOfMemoryError异常! 4、_Java_堆 堆是_jvm内存_管理的最大的一块区域,此_内存_区域的唯一目的就...

### [深入理解_JVM_-_内存模型_(jmm)和GC - 简书](https://zshipu.com/t?url=https://www.jianshu.com/p/76959115d486)

 1 CPU和内存的交互 了解_jvm内存模型_前,了解下cpu和计算机内存的交互情况。【因为_Java_虚拟机_内存模型_定义的访问操作与计算机十分相似】 有篇很棒的文章,从cpu讲到内...

### [_JVM内存模型_、_Java内存模型 和_ Java对象模型 - 水木湛清华 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/wenxiangchen/p/11478767.html)

 2019年9月6日 - 1.Java对象在JVM中的存储模型称之为Java对象模型。 四、总结 1._JVM内存模型_,和Java虚拟机的运行时区域有关。 2._Java内存模型_,和Java的并发编程有关。 ...

### [_Java内存模型_(JMM)_和JVM内存_结构 - Java 技术驿站-Java 技术驿站](https://zshipu.com/t?url=http://cmsblogs.com/?p=14815)

 2019年12月10日 - _Java内存模型_(JMM),Java Memory Model,指的在java程序运行过程中,计算机有主内存,每个java线程有自己的工作内存。java线程的工作内存是计算机主内存的...

### [_JVM内存模型和_性能优化 - 解道Jdon](https://zshipu.com/t?url=https://www.jdon.com/idea/jvm.html)

 _JVM内存模型_优点 内置基于_内存_的并发_模型_: 多线程机制 同步锁Synchronization 大量...Heap堆_内存_ 对象实例的属性数据和数组。堆_内存_由_Java_虚拟机的自动垃圾回收器来管理...

### [【教程】终于有人把_Java内存模型_说清楚了! - 51CTO.COM](https://zshipu.com/t?url=https://developer.51cto.com/art/201807/579744.htm)

 2018年7月26日 - 网上有很多关于 _Java 内存模型_的文章,但是很多人读完之后还是搞不清楚,甚至有的人说自己更懵了。本文就来整体的介绍一下 _Java 内存模型_,比如 _Java 内存模型_是什么...

### [_java内存模型和jvm_运行时数据区对应起来谈的疑惑-CSDN问答](https://zshipu.com/t?url=https://ask.csdn.net/questions/683783)

 2018年3月28日 - 在_java内存模型_中有工作_内存_和主_内存_,主_内存_是所有线程共享的_内存_区域, 规定变量都必须存储在主_内存_中。但是在_jvm_运行时数据区中,又谈到所有局部 变量...

### [深入理解_Java内存模型_(一)——基础 | 并发编程网 – ifeve.com](https://zshipu.com/t?url=https://ifeve.com/java-memory-model-1/)

 Java线程之间的通信由_Java内存模型_(本文简称为JMM)控制,JMM决定一个线程对共享变量的写入何时对另一个线程可见。从抽象的角度来看,JMM定义了线程和主_内存_之间的抽象...

### [_JVM内存模型和_垃圾回收 - robustwang - ITeye博客](https://zshipu.com/t?url=https://robustwang.iteye.com/blog/2255805)

 2019年2月12日 - _JAVA_堆的描述如下: _内存_由Perm和Heap组成。其中Heap = {Old + NEW = { Eden , from, to } } _JVM内存模型_中分两大块: NEW Generation:程序新创建的对 ...

### [终于有人把_Java内存模型_说清楚了_ITPUB博客](https://zshipu.com/t?url=http://blog.itpub.net/69917606/viewspace-2642808/)

 2019年4月28日 - 内部原理_JVM_ 中试图定义一种 JMM 来屏蔽各种硬件和操作系统的_内存_访问差异,以实现让 _Java_ 程序在各种平台下都能达到一致的_内存_访问效果。JMM 的主要目标是定义程序...

### [_Java内存模型与JVM_运行时数据区的区别详解_java_脚本之家](https://zshipu.com/t?url=https://www.jb51.net/article/172264.htm)

 2019年10月18日 - 这篇文章主要介绍了_Java内存模型与JVM_运行时数据区的区别详解,文中通过示例代码介绍的非常详细,对大家的学习或者工作具有一定的参考学习价值,需要的朋...

### [_JVM内存模型_——_JAVA_的根基丶一个站在_Java_后端设计之路的男青年...](https://zshipu.com/t?url=https://www.liangzl.com/get-article-detail-121504.html)

 2019年3月26日 - 站长的个人微信公众号:_Java_云库,每天分享技术文章和学习视频。让我们一起走向架构师之路!!Hi,欢迎来到梁钟霖个人博客网站。本博客是自己通过代码构建的。前端html,...

### [_java内存模型和Jvm内存_分配 - 算法网](https://zshipu.com/t?url=http://ddrv.cn/a/35921)

 2019年3月10日 - (百度上说:在_java_程序运行时,_jvm_会在系统_内存_中划定一块区域作为程序的主_内存_, _java_中的所有变量都存在主_内存_中,并且对所有线程共享。而每个线程又有...

### [【_java_】_jvm内存模型_全面解析_哔哩哔哩 (゜-゜)つロ 干杯~-bil...](https://zshipu.com/t?url=https://www.bilibili.com/video/av62009886)

### [_JVM内存模型_看这个就够了_技术交流_牛客网](https://zshipu.com/t?url=https://www.nowcoder.com/discuss/151138?type=1)

 2019年1月11日 - _内存_是非常重要的系统资源,是硬盘和CPU的中间仓库及桥梁,承载着操作系统和应用程序的实时运行_JVM内存_布局规定了_Java_在运行过程中_内存_申请、分配、管理...

### [区分-_JVM内存_分区和_Java内存模型_(Java Memory Model)_q..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/qq_41297896/article/details/89949632)

 2019年5月8日 - 虚拟机栈(_JVM_ Stacks):属线程私有内存区域,与线程同时创建,总数与线程数关联,代表_Java_方法执行的_内存模型_。每一个运行在_Java_虚拟机里的线程都拥有自己...

### [快速带你分清_java内存_结构,_java内存模型_,java对象_模型和jvm内存_...](https://zshipu.com/t?url=https://blog.csdn.net/sinat_33921105/article/details/82819435)

 2018年9月23日 - 过程中的重点和难点,我习惯把这块的知识叫做javaSE高级基础,在学习jvm这块的知识,你一定会遇到几个概念,那就是java内存结构,_java内存模型_,java对象_模型和jvm内存_...

### [_JVM内存模型和_JMM(_Java内存模型_)的异同小结_魔临天下-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/libafei/article/details/80385208)

 2018年5月20日 - 1、_JVM内存模型和_JMM(_Java内存模型_)不是一回事,JMM来源于JSR-133:memory_... 1、_JVM内存模型和_JMM(_Java内存模型_)不是一回事,JMM来源于JSR-133:memory_...

### [_JAVA内存模型与JVM内存_结构 - 编程小可爱 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/karrya/p/10960112.html)

 2019年6月1日 - 这是JVM的内存结构。下面阐述了JMM_和JVM_的区别和自己对JMM的见解 1、_Java内存模型_(JMM):即多线程相关的。定义了一个线程对另一个线程可见,共享变量放...

### [_Java内存_管理-_JVM内存模型_以及JDK7和JDK8_内存模型_对比...-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/u010648555/article/details/88730080)

 2019年3月22日 - 1、_Java内存_管理-程序运行过程(一) 2、_Java内存_管理-初始JVM_和JVM_启动流程(二) 3、_Java内存_管理-_JVM内存模型_以及JDK7和JDK8_内存模型_对比总结(三) 4、_J_...

### [_JAVA内存_结构和_JAVA内存模型__xiaojia_wahaha_的博客-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/xiaojia_wahaha_/article/details/79094118)

 2018年1月18日 - 有些人喜欢把_Java内存模型和_Java内存区域Java内存区域详解弄混淆,这两个是完全不..._JVM内存模型_完整图解 阅读数 915 最近研究内存模型,读了深入JVM的...

### [_JVM内存_结构 VS _Java内存模型_ VS Java对象_模型_ - qingshanli...](https://zshipu.com/t?url=https://www.cnblogs.com/qingshanli/p/9256387.html)

 2018年7月2日 - 前面几篇文章中, 系统的学习了下_JVM内存_结构、_Java内存模型_、Java对象_模型_, 但是发现自己还是对这三者的概念和区别比较模糊, 傻傻分不清楚。所以就有了这篇文章, ...

### [什么是_Java内存模型_? - 程序员小灰的博客 - CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/bjweimengshu/article/details/79597938)

 2018年3月17日 - 说”_JVM内存模型_“,有人会说是关于JVM内存分布(堆栈,方法区等)这些介绍,也有地方说(深入理解JVM虚拟机)上说_Java内存模型_是JVM的抽象模型(主内存,本地...

### [_Java内存模型和JVM内存_管理 - 鸿燕藏锋 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/yjd_hycf_space/p/7505372.html)

 2017年9月11日 - 1、主内存和工作内存(即是本地内存):_Java内存模型_的主要目标是定义程序中各个变量的访问规则,即在_JVM_中将变量存储到_内存_和从_内存_中取出变量这样的底层细节。此处的...

### [【JVM】_JVM内存_结构 VS _Java内存模型_ VS Java对象_模型_](https://zshipu.com/t?url=https://www.cnblogs.com/z00377750/p/9277836.html)

 2018年7月7日 - 原文:_JVM内存_结构 VS _Java内存模型_ VS Java对象_模型_ Java作为一种面向对象的,跨平台语言,其对象、内存等一直是比较难的知识点。而且很多概念的名称看起来又那么...

### [_Java内存模型及_性能优化 - yehx - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/handsomeye/p/5442879.html)

 _Java内存模型及_性能优化 最近在做一个项目的性能优化,遇到好多以前没有关注过的性能问题,一头雾水,今天做个笔记,简单记录下JVM相关的参数设置。 一、_JVM内存模型_ ...

### [_Java内存模型_是什么,为什么要有_Java内存模型_,Java_内存_..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/yaoyuanbo/article/details/81199154)

 2018年7月25日 - 这里面提到的主内存和工作内存,读者可以简单的类比成计算机_内存模型_中的主存和缓存的概念。特别需要注意的是,主内存和工作内存_与JVM内存_结构中的_Java_堆、栈、方法区...

### [_JVM内存_结构、_Java内存模型和_Java对象模型 - murphy_gb - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/kyoner/p/11067680.html)

 2019年6月22日 - 如上,做个总结,_JVM内存_结构,由Java虚拟机规范定义。描述的是Java程序执行过程中,由JVM管理的不同数据区域。各个区域有其特定的功能。 _Java内存模型_ _Ja_...

### [_JVM_——_Java内存模型_ (JDK1.8) - 「dt猫」](https://zshipu.com/t?url=http://www.luyixian.cn/news_show_16727.aspx)

 2019年2月21日 - ​ 程序计数器(Program Counter Register)是一块较小的_内存_空间,它可以看作是当前线程所执行的字节码行号 的指示器。 2.程序计数器的作用 字节码解...

### [《成神之路-基础篇》_JVM_——_Java内存模型_(已完结)-HollisChuang's...](https://zshipu.com/t?url=http://www.hollischuang.com/archives/1003)

 2016年1月17日 - _Java内存模型_ 本文是《成神之路系列文章》的第一篇,主要是关于JVM的一些介绍。 持续更新中 _Java内存模型_ _JVM内存_结构 VS _Java内存模型_ VS Java对象_模_...

### [_jvm内存模型_-CSDN论坛](https://zshipu.com/t?url=http://community.csdn.net/topics/392467571?page=1)

 JVM介绍 JVM整体架构 _JVM内存_结构 JVM介绍 1.虚拟机是啥 虚拟机(Virtual Machine..._内存模型_,一个线程对应一个栈,用于存储_java_方法中的私有数据,它的生命周期和...

### [_JAVA内存模型与_垃圾回收_java _内存模型_ 垃圾回收-Java文档类资源...](https://zshipu.com/t?url=https://download.csdn.net/download/twlke/2369598)

 2010年5月19日 - _JAVA内存模型与_垃圾回收 _JAVA内存模型与_垃圾回收 JAVA...论文研究-基于_JVM内存模型_的String分析 .pdf 基于...

### [_Java内存模型_(JMM) - 云+社区 - 腾讯云](https://zshipu.com/t?url=https://cloud.tencent.com/developer/article/1462257)

 2019年7月12日 - _Java内存模型_规范了Java虚拟机与计算机内存是如何协同工作的。Java虚拟机是一个完整的计算机的一个模型,因此这个模型自然也包含一个_内存模型_——又称...

### [图解_JAVA内存模型_(JMM:JAVA Memory Model)](https://zshipu.com/t?url=http://www.mamicode.com/info-detail-2716234.html)

 2019年6月30日 - _java内存模型和jvm内存模型_是不一样,要区分开。如上图所示,多个线程对共享变量并没有直接采用加锁的方式,其中 (1)实际内存(也叫主内存)中存储的是待共享的变量...

### [【免费】_Java内存模型_之_JVM_进阶-1-Java运行流程-李兴华的在线视频...](https://zshipu.com/t?url=https://edu.csdn.net/course/play/3580)

 第一章:JVM执行分析 _Java_运行流程 (20:54) 免费 _Java_对象访问模式 (19:57) 第二章:_JVM内存模型与_垃圾收集 _Java_堆内存模型 (11:11) _Java_垃圾回收流程...

### [老师这几章讲的是_Java内存模型_还是_JVM内存_结构啊?_实战问答](https://zshipu.com/t?url=https://coding.imooc.com/learn/questiondetail/114915.html)

 2019年4月18日 - 拥有丰富的大型网站架构经验,先后参与并负责过_Java_、PHP、Go等项目的开发,自己曾创过业,也曾在汤森路透负责金融产品的研发工作,现就职于某知名大型互...

### [浅析_java内存模型_--JMM(Java Memory Model)_码神岛](https://zshipu.com/t?url=https://msd.misuland.com/pd/3047868153708151374)

 2019年3月12日 - 主内存和工作内存: _Java内存模型_的主要目标是定义程序中各个变量的访问规则,即在_JVM_中将变量存储到_内存_和从_内存_中取出变量这样的底层细节。此处的变量与Java编程里面...

### [《深入理解_JAVA内存模型_》PDF 下载_Java知识分享网-免费Java资源...](https://zshipu.com/t?url=http://www.java1234.com/a/javabook/javabase/2016/0229/5745.html)

 2016年2月29日 - 以及如何从虚拟机外部观察和分析JIT编译的数据和结果;第五部分探讨了Java实现高效并发的原理,包括_JVM内存模型_的结构和操作;原子性、可见性和有序性在_J_...

### [_Java内存模型_ —— 深入_JVM_ - 网易云课堂](https://zshipu.com/t?url=https://study.163.com/course/introduction.htm?courseId=1003283011)

 若不同意,将无法使用我们的产品和服务。 同意 ...

### [深入理解_Java内存模型_(一)——基础-InfoQ](https://zshipu.com/t?url=https://www.infoq.cn/articles/java-memory-model-1)

 Java线程之间的通信对程序员完全透明,内存可见性问题很容易困扰Java程序员,本文试图揭开_Java内存模型_神秘的面纱。本文大致分三部分:重

### [_JVM内存模型与_运行时数据区域的详解(图文)-_java_教程-PHP中文网](https://zshipu.com/t?url=https://www.php.cn/java-article-411721.html)

 2018年10月16日 - 本篇文章给大家带来的内容是关于_JVM内存模型与_运行时数据区域的详解(图文),有一定的参考价值,有需要的朋友可以参考一下,希望对你有所帮助。 一、_java内存模型_ java...

### [JMM(_Java内存模型_)中的核心概念 - guibin - ITeye博客](https://zshipu.com/t?url=http://guibin.iteye.com/blog/1172731)

 2011年9月15日 - 在JLS-_Java_ Language Specification的17.4节详细描述了JMM(_Java_ Memory Model),这个文档从语言学和实现_JVM_的角度讲非常棒,但是对于我们这些应用开发者...

### [_Java内存模型_的历史变迁-CSDN.NET](https://zshipu.com/t?url=https://www.csdn.net/article/2015-05-20/2824722-Java)

 2015年5月20日 - 旧_Java内存模型_对Java实现如何执行变量的读/写,加锁/解锁,以及volatile变量的读/写,定义了非常严格的规则。这些规则非常复杂,具体详情请参考《_JVM_规范...

### [_java内存模型及_GC原理 和 图解_JVM_在_内存_中申请对象及垃..._新浪博客](https://zshipu.com/t?url=http://blog.sina.com.cn/s/blog_4745d1c10102wng2.html)

 2015年8月1日 - _java内存模型_ _JVM内存模型_中分两大块,一块是 NEW Generation, 另一块是Old Generation. 在New Generation中,有一个叫Eden的空间,主要是用来存放新生的...

### [聊聊高并发(三十五)_Java内存模型_那些事(三)理解_内存_屏障 | 学步园](https://zshipu.com/t?url=https://www.xuebuyuan.com/3192696.html)

 2017年11月9日 - 内存屏障的概念很好理解,不同硬件实现内存屏障的方式不同,_Java内存模型_屏蔽了这种底层硬件平台的差异,由_JVM_来为不同的平台生成相应的机器码。...

### [深入理解_java内存模型_pdf下载|深入理解_java内存模型_下载_ 绿色...](https://zshipu.com/t?url=http://www.downcc.com/soft/302754.html)

 2017年8月3日 - 深入理解_java内存模型_是由程晓明推出的_java内存模型_介绍的软件开发图书,从基础、冲排序、JMM设计等多方面讲述了_内存模型_的建立和使用,需要的朋友快来...

### [_jvm内存模型和_内存分配 - dancing007的个人空间 - OSCHINA](https://zshipu.com/t?url=https://my.oschina.net/u/3735426/blog/1580482)

 2017年11月27日 - _jvm内存模型和_内存分配 转dancing007 发布于 2017/11/27 16:45...(1)jvm是_java_的核心和基础,在_java_编译器和os平台之间的虚拟处理器,可在上面...

### [_java内存模型_ 新生代中的比例为什么是8:1:1?_java吧_百度贴吧](https://zshipu.com/t?url=http://tieba.baidu.com/p/5883346597)

 1楼: 求助，吧内的大神们？遇到一个_jvm_面试题 _java内存模型_ ...

 2楼: 之前看ibm有做过一个研究，新生代大部分都是垃圾，一次...

### [_Java 内存模型_,_内存_监控,GC查看 - 禅鸣之时 - ITeye博客](https://zshipu.com/t?url=http://shihlei.iteye.com/blog/2244799)

 2018年5月27日 - ——_Java_ 8 后 Metaspace 代替 默认受物理_内存_限制,可以通过 -XX:MaxMetaspaceSize 设置最大使用_内存_数。 4)程序计数器 5)本地方法栈 (二)_JVM 内存_设...

### [_JAVA内存模型_简述及总结_教程库](https://zshipu.com/t?url=http://www.jiaochengku.net/ITjiaocheng/wangluobiancheng/38109.html)

 2019年8月5日 - JMM定义了java 虚拟机(_JVM_)在计算机内存(RAM)中的工作方式。_JVM_是整个计算机虚拟模型,所以JMM是隶属于_JVM_的 _Java内存模型_定义了多线程之间共享变量的...

### [BAT经典面试题,深入理解_Java内存模型_JMM - HelloJava菜鸟社区](https://zshipu.com/t?url=http://www.hellojava.com/a/77344.html)

 2019年5月16日 - _Java 内存模型_(JMM)是一种抽象的概念,并不真实存在,它描述了一组规则或规范,...注意JMM_与JVM内存_区域划分的区别: JMM描述的是一组规则,围绕原子性、有序性和...

### [终于有人把_Java内存模型_说清楚了 - 知乎](https://zshipu.com/t?url=https://zhuanlan.zhihu.com/p/61424782)

 2019年4月13日 - _JVM_ 中试图定义一种 JMM 来屏蔽各种硬件和操作系统的_内存_访问差异,以实现让 _Java_ 程序在各种平台下都能达到一致的_内存_访问效果。 JMM 的主要目标是定义程序中各个...

### [_java内存模型__图文_百度文库](https://zshipu.com/t?url=https://wenku.baidu.com/view/e68201ecf8c75fbfc77db2a4.html)

 评分:3.5/5 14页

 2011年4月29日 - 内容什么是内存模型 _内存模型与_可见性 发生前关系(Happen-before) 初始化安全性 1 3 2 3 4 IBM&重庆大学 9.1 _Java内存模型_ _内存模型_同步和线程安全的...

### [浅谈_JAVA内存模型___Java 内存模型_以及应用程序常见..._爱问共享资料](https://zshipu.com/t?url=https://ishare.iask.sina.com.cn/f/1H1iIrgF7wt9.html)

 
### [【_Java_面试题】_Java内存模型_-教育-高清完整正版视频在线观看-...](https://zshipu.com/t?url=https://v.youku.com/v_show/id_XMzgzODk1OTM1Mg==.html)

### [_Java内存模型_FAQ(一) 什么是_内存模型_ | 并发编程网 – ifeve.com](https://zshipu.com/t?url=https://ifeve.com/memory-model/)

 和降低共享_内存_在总线上的通讯(因为本地缓存能够满足许多_内存_操作)来提高CPU性能..._Java_ 10的类型推导 谈谈Netty的线程_模型_ _JVM_之动态方法调用:invokedynamic _Jav_...

### [_JVM_—虚拟机_内存模型与_高效并发丶一个站在_Java_后端设计之路的男...](https://zshipu.com/t?url=https://www.liangzl.com/get-article-detail-9958.html)

 2018年7月25日 - _Java内存模型_,即Java Memory Model,简称 JMM ,它是一种抽象的概念,或者是一种协议,用来解决在并发编程过程中_内存_访问的问题,同时又可以兼容不同的硬件和操作系统,...

### [_Java内存_区域和_内存模型_讲解_java_脚本之家](https://zshipu.com/t?url=https://www.jb51.net/article/155559.htm)

 2019年1月29日 - 今天小编就为大家分享一篇关于_Java内存_区域和_内存模型_讲解,小编觉得内容挺不错的...堆(公有):是_JVM_所管理的_内存_中最大的一块。唯一目的就是存放实例对...

### [_Java内存模型_之_JVM_进阶-李兴华的在线视频教程-CSDN学院](https://zshipu.com/t?url=https://edu.csdn.net/course/detail/3580)

 第一章:JVM执行分析 1\. _Java_运行流程 [ 20:54 ] 免费 2\. _Java_对象访问模式 [ 19:57 ] 第二章:_JVM内存模型与_垃圾收集 1\. _Java_堆内存模型 [ 11:...

### [_JVM内存模型与_运行时数据区域 - mmmming - SegmentFault 思否](https://zshipu.com/t?url=https://segmentfault.com/a/1190000016694247)

 2018年10月15日 - _java_定义_内存模型_的目的是:为了屏蔽各种硬件和操作系统的内存访问之间的差异。 _java_...参考文章:_java_8的_jvm内存_区域。 元空间和永久代的性质是一样的,...

### [_JVM内存模型_的相关概念-创头条](https://zshipu.com/t?url=http://www.ctoutiao.com/2303616.html)

 2019年9月18日 - 2._JVM内存模型_ JVM在执行_Java_程序时,会把它管理的_内存_划分为若干个的区域,每个区域都有自己的用途和创建销毁时间。如下图所示,可以分为两大部分,线程...

### [_Java_(_JVM_)_内存模型_ - _Java_中的_内存_管理_慕课手记](https://zshipu.com/t?url=http://www.imooc.com/article/details/id/282396)

 2019年3月9日 - 了解_JVM内存模型_,如果您想了解Java垃圾收集的工作,_Java内存_管理非常重要。今天我们将研究Java中的内存管理,JVM内存的不同部分以及如何监视和执行垃圾...

### [_JVM内存模型_详解-_Java_工具类资源-CSDN下载](https://zshipu.com/t?url=https://download.csdn.net/download/cgperfect/10970604)

 2019年9月4日 - _jvm内存模型_,jvm脑图,jvm调优,jvm垃圾回收算法,jvm垃圾回收器,逃逸算法等总结。jvm 所需积分/C币:12 上传时间:2019-02-22 资源大小:14MB ...

### [_java内存模型_(JMM)与并发 - Java 技术驿站-Java 技术驿站](https://zshipu.com/t?url=http://cmsblogs.com/?p=14823)

 2019年12月10日 - JMM-_java内存模型_,就是通过定义一套抽象规则,去屏蔽底层操作系统、硬件对_内存_访问...(long\doubel 64bit数据操作允许非原子性,但目前很少有非原子性实...

### [聊聊我对_Java内存模型_的理解 | 并发编程网](https://zshipu.com/t?url=http://www.360doc.com/content/15/0326/16/7853380_458246813.shtml)

 2015年3月26日 - 我试图了解了_Java_、C#和Go语言的_内存模型_,发现内容基本大同小异,只是这些语言在...这个问题也曾经困扰了我很长时间,因为我从来没有从_JVM_的实现中找到...

### [_Java内存模型_(JMM)总结 - 知乎](https://zshipu.com/t?url=https://zhuanlan.zhihu.com/p/29881777)

 2018年10月27日 - _Java内存模型_中的线程的工作内存(working memory)是cpu的寄存器和高速缓存的抽象描述。而JVM的静态内存储模型(_JVM内存模型_)只是一种对内存的物理划分...

### [_java_基础,_JVM_(_java内存模型_)_哔哩哔哩 (゜-゜)つロ 干杯~-bili...](https://zshipu.com/t?url=https://www.bilibili.com/video/av60307346)

### [深入理解_java内存模型_系列文章 | 并发编程网 – ifeve.com](https://zshipu.com/t?url=http://ifeve.com/java-memory-model-0/)

 的内存语义,重排序规则及在处理器中的实现;_java内存模型_的设计目标,及其与处理...Java 10的类型推导 谈谈Netty的线程_模型_ _JVM_之动态方法调用:invokedynamic Java...

### [_JVM_---_java内存_区域与_java内存模型__码神岛](https://zshipu.com/t?url=https://msd.misuland.com/pd/2884250068896980116)

 2019年2月22日 - _jvm_在执行_java_程序的过程中会把所管理的_内存_分为若干不同的区域,有的区域随着虚拟机进程的启动而存在,有些区域则是依赖用户线程的启动和结束而建立和销毁的。 以下...

### [_java内存模型_详解以及Java堆的分代 - 程序员大本营](https://zshipu.com/t?url=https://www.pianshen.com/article/3463293914/)

 _jvm_是_java_的核心和基础,在_java_编译器和os平台之间的虚拟处理器,_JVM_有自己完善的硬件架构,如处理器、堆栈、寄存器等,使用_JVM_就是为了支持与操作系统无关,实现跨平台...

### [_Java内存模型与_线程 - loda0128的个人空间 - OSCHINA](https://zshipu.com/t?url=https://my.oschina.net/u/1378920/blog/425566)

 2015年6月6日 - _jvmjava内存模型_JMM多线程并发单例模式先行发生Happens-Before原则底层优化 工作_内存_与主_内存_ _Java内存模型_(jmm)的出现是为了各种操作系统和硬件的_内_...

### [硬件_内存模型和Java内存模型_中的主内存相当于电脑中的内存还是磁盘?](https://zshipu.com/t?url=https://zhidao.baidu.com/question/1181471485174753499.html)

 2019年8月14日 - 回答：是硬盘模拟_内存_。

### [_java 内存模型与JVM_的_内存模型_是一个意思吗_百度知道](https://zshipu.com/t?url=https://zhidao.baidu.com/question/525226214255683725.html)

 2018年9月18日 - 回答：是的,是一个意思。

### [聊聊我对_Java内存模型_的理解 | 并发编程网 – ifeve.com](https://zshipu.com/t?url=https://ifeve.com/talk-to-my-understanding-of-the-java-memory-model/)

 所有的编程语言中都有_内存模型_这个概念,区别于微架构的_内存模型_,高级语言的_内存模型_包括了编译器和微架构两部分。我试图了解了_Java_、C#和Go语言的_内存模型_,发现内容...

### [_Java内存模型_(Memory Model)_线程](https://zshipu.com/t?url=https://www.sohu.com/a/275306693_100123073)

 2018年11月14日 - _Java内存模型_,Java Memory Model,我个人更喜欢“Java存储_模型_”的译法。 介绍 如前所述,_JVM_被设计成一台抽象的虚拟计算机,_JVM_的并发问题及解决方案与物理计算机中...

### [_Java内存模型_详解(一) - 云+社区 - 腾讯云](https://zshipu.com/t?url=https://cloud.tencent.com/developer/article/1492855)

 2019年8月23日 - 本文开始死磕JMM(_Java内存模型_)由于知识点较多,分来写该文为JMM第一篇技术往往...同时JMM也规范了_JVM_如何与计算机_内存_进行交互。简单的来说JMM就是Jav...

### [_jvm内存模型和_内存分配 - 简书](https://zshipu.com/t?url=https://www.jianshu.com/p/a448fba00aa0)

 2019年3月19日 - _jvm_包含一套字节码指令集,一组寄存器,一个栈,一个垃圾回收堆和一个存储方法域。 _JVM_屏蔽了与具体操作系统平台相关的信息,使_Java_程序只需生成在_Java_虚...

### [面试问题:你了解_Java内存模型_么(Java7、8、9_内存模型_的区别) - 简书](https://zshipu.com/t?url=https://www.jianshu.com/p/4455e4234d5c)

 2018年10月9日 - _Java内存模型_是每个java程序员必须掌握理解的,这是Java的核心基础,对我们编写代码特别是并发编程时有很大帮助。由于Java程序是交由_JVM_执行的,所以我们...

### [_JVM内存模型_总结](https://zshipu.com/t?url=http://www.360doc.com/content/19/0627/15/13328254_845198882.shtml)

 2019年6月27日 - 在_Java内存模型_中,为了效率是允许编译器和处理器对指令进行重排序,当然重排序它...在_JVM_底层volatile是采用“_内存_屏障”来实现的。 问题的提出 计算机...

### [_Jvm内存模型与_垃圾回收_慕课手记](https://zshipu.com/t?url=http://www.imooc.com/article/266252)

 2018年12月5日 - _内存模型_ _JVM内存_空间包含:方法区、_java_堆、_java_栈、本地方法栈。 352511-20170810232433792-373676900.png 方法区是各个线程共享的区域,存放类信息、...

### [一篇文章搞懂_Java内存模型_(详解) - 知乎](https://zshipu.com/t?url=https://zhuanlan.zhihu.com/p/93958995)

 2019年11月27日 - _Java 内存模型_(JMM)是一种抽象的概念,并不真实存在,它描述了一组规则或规范,...注意JMM_与JVM内存_区域划分的区别: JMM描述的是一组规则,围绕原子性、有...

### [什么是_Java内存模型_(JMM) - Java 技术驿站-Java 技术驿站](https://zshipu.com/t?url=http://cmsblogs.com/?p=14044)

 2019年12月10日 - 什么是_java内存模型_ 缓存一致性问题 在现代计算机中,因为CPU的运算速度远大于_内存_的读写速度,因此为了不让CPU在计算的时候因为实时读取_内存_数据而影响...

### [_JAVA_的_内存模型及_结构 | 并发编程网 – ifeve.com](https://zshipu.com/t?url=http://ifeve.com/under-the-hood-runtime-data-areas-javas-memory-model/)

 _Java内存模型_在_JVM_ specification, Java SE 7 Edition, and mainly in the chapters “2.5 Runtime Data Areas” and “2.6 Frames”中有详细的说明。对象和类...

### [_Java内存模型_、GC工作原理-Java文档类资源-CSDN下载](https://zshipu.com/t?url=https://download.csdn.net/download/d470969047h/9959881)

 2017年9月1日 - 一个优秀Java程序员,必须了解_Java内存模型_、GC工作原理,以及如何优化GC的性能、...本文将从_JVM内存模型_、GC工作原理,以及GC的几个关键问题进行探讨,从...

### [_Java内存模型和_类加载过程 - JerryLin123的个人空间 - OSCHINA](https://zshipu.com/t?url=https://my.oschina.net/u/3863980/blog/1839508)

 2018年7月3日 - _Java_栈描述的是_Java_方法执行的_内存模型_:每个方法在执行的同时都会创建一个栈帧...如果类满足卸载条件,_JVM_就在GC的时候,对类进行卸载,即在方法区清除类的信息。...

### [_java内存模型与_线程规范 PDF 下载_Java知识分享网-免费Java资源下载](https://zshipu.com/t?url=http://www.java1234.com/a/javaziliao/shuji/2014/0413/1963.html)

 2014年4月13日 - _java内存模型与_线程规范 PDF 下载失效链接处理 _java内存模型与_线程规范 PDF 下载 下载地址:_java内存模型与_线程规范 PDF 下载 相关截图:...

### [又踩到一个坑——_JAVA_虚拟机最大_内存_-CSDN论坛](https://zshipu.com/t?url=https://bbs.csdn.net/topics/390666921)

 32位操作系统最大也就只能支持4G_内存_啊。这是根据操作...堆是在_Java_虚拟机启动时创建的。 _JVM内存_最大能调...32位操作系统最大也就只能支持4G_内存_啊。这是根据操...

### [_java_ - _jvm内存模型_的工作_内存_和主_内存_到底是什么?是在哪个层面上...](https://zshipu.com/t?url=https://segmentfault.com/q/1010000017483975)

 2018年12月23日 - 看了周志明老师的<深入理解_JVM_虚拟机>12章,很自然地萌生了这个疑问.在书中周老师也并没有明确给出这两个概念是在哪个逻辑层次上做的划分,而只是说了"...

### [《深入理解_JAVA内存模型_》PDF-Java文档类资源-CSDN下载](https://zshipu.com/t?url=https://download.csdn.net/download/javry/10134745)

 2017年11月27日 - (_java_语言规范称之为formal method parameters)和异常处理器参数(exception handler parameters)不会在线程之间共享,它们不会有内存可见性问题,也不受_..._

### [_Java内存模型和JVM内存_管理 - 鸿燕藏锋 - CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/yanjiangdi/article/details/77934113)

 2017年9月11日 - _Java内存模型_的主要目标是定义程序中各个变量的访问规则,即在_JVM_中将变量存储到_内存_和从_内存_中取出变量这样的底层细节。此处的变量与Java编程里面的变...

### [_Java内存模型_JMM详解_java_脚本之家](https://zshipu.com/t?url=https://www.jb51.net/article/129051.htm)

 2017年11月25日 - 这个保证简单来说就是一个线程的修改何时对其他线程可见,因此Java语言提出了JavaMemoryModel即_Java内存模型_,对于Java语言、_JVM_、编译器等实现者需要按...

### [_Java内存模型_JMM 高并发原子性可见性有序性简介 多线程中篇(十...](https://zshipu.com/t?url=http://www.west.cn/info/html/chengxusheji/Javajishu/20190220/4613219.html)

 2019年2月20日 - _Java 内存模型_作为_JVM_的一种抽象_内存模型_,屏蔽掉各种硬件和操作系统的内存差异,达到跨平台的内存访问效果。 Java语言规范定义了一个统一的内存管理模型JMM(Java Memory...

### [理解_Java内存模型__慕课手记](https://zshipu.com/t?url=http://www.imooc.com/article/266546)

 2018年12月7日 - _Java内存模型_抽象示意图 _JVM内存_操作的并发问题 结合前面介绍的物理机的处理器处理内存的问题,可以类比总结出_JVM内存_操作的问题,下面介绍的_Java内存模型_的执行处理将围...

### [_JVM内存_结构、_Java内存模型_以及Java对象_模型_之间的区别_CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/zyc88888/article/details/83756364)

 2018年11月5日 - 这就是一个简单的Java对象的OOP-Klass模型,即Java对象模型。 总结 我们再来区分下_JVM内存_结构、 _Java内存模型_ 以及 Java对象_模型_ 三个概念。 _JVM内存_结构,和Java虚...

### [_Java内存模型与JVM_ (二) - 简书](https://zshipu.com/t?url=https://www.jianshu.com/p/91f816803a4e)

 2017年8月18日 - 第一步,了解_JVM_基本概念,基本结构。 第二步,了解_JVM_中线程私有区和公有区。 第三步,了解线程与_Java内存模型_。 第四步,了解并发编程 _JVM_的基础概念 _JVM_的中文...

### [快速带你分清_java内存_结构,_java内存模型_,java对象_模型和jvm内存_...](https://zshipu.com/t?url=https://www.cnblogs.com/aademeng/articles/11069773.html)

 2019年6月22日 - 过程中的重点和难点,我习惯把这块的知识叫做javaSE高级基础,在学习jvm这块的知识,你一定会遇到几个概念,那就是java内存结构,_java内存模型_,java对象_模_...

### [_jvm_面试系列一:_java内存模型_你掌握了多少?](https://zshipu.com/t?url=https://www.sohu.com/a/135260918_499839)

 2017年4月20日 - 今天我们就来聊一聊_Java内存模型_,面试中面试官会通过考察你对_jvm_的理解更深入得了解你的水平。如果你应聘的职位涉及系统调优,如堆大小的分配、垃圾回...

### [_Java内存_管理-_JVM内存模型_以及JDK7和JDK8_内存模型_对比总结(三...](https://zshipu.com/t?url=https://www.cnblogs.com/aflyun/p/10575740.html)

 2019年3月22日 - 如果虚拟机栈可以动态扩展,当扩展到无法申请_内存_到足够的_内存_,就会抛出OutOfMemoryError异常! 4、_Java_堆 堆是_jvm内存_管理的最大的一块区域,此_内存_区域的唯一目的就...

### [【_Java_】JMM_内存模型和JVM内存_结构 - 热咖啡与白猫 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/xcmelody/p/10961132.html)

 2019年6月1日 - JMM_内存模型和JVM内存_结构 _JAVA内存模型_(Java Memory Model) _Java内存模型_,一般指的是JDK 5 开始使用的新的_内存模型_,主要由JSR-133: JavaTM Memory Mo...

### [终于有人把_Java内存模型_说清楚了! - 小推爱学习 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/ncy1/articles/9380046.html)

 2018年7月27日 - 网上有很多关于 _Java 内存模型_的文章,但是很多人读完之后还是搞不清楚,甚至有的...特别需要注意的是,主内存...

### [_Java内存模型与JVM_运行时数据区的区别_a7151593的博客-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/a7151593/article/details/102526483)

 2019年10月12日 - _Java内存模型_是Java语言在多线程并发情况下对于共享变量读写(实际是共享变量对应的_内存_操作)的规范,主要是为了解决多线程可见性、原子性的问题,解决共...

### [_Java 内存模型和 JVM 内存_结构真不是一回事_顿悟源码-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/weixin_42885157/article/details/100847188)

 2019年9月15日 - 这两个概念估计有不少人会混淆,它们都可以说是 _JVM_ 规范的一部分,但真不是一回事!它们描述和解决的是不同问题,简单来说, _Java 内存模型_,描述的是多线...

### [浅析_java内存模型_--JMM(Java Memory Model) - 路易小七 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/lewis0077/p/5143268.html1)

 2016年1月22日 - 主内存和工作内存: _Java内存模型_的主要目标是定义程序中各个变量的访问规则,即在_JVM_中将变量存储到_内存_和从_内存_中取出变量这样的底层细节。此处的变量...

### [深入理解_Java内存模型_之系列篇 - CSniper - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/csniper/articles/5463138.html)

 2016年5月5日 - _Java内存模型_的抽象 在java中,所有实例域、静态域和数组元素存储在堆_内存_中,堆...为了实现最小安全性,_JVM_在...

### [_Java内存模型_ - 残雪余香 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/nexiyi/p/java_memory_model_and_thread.html)

 2014年3月9日 - 在讨论_Java内存模型和_线程之前,先简单介绍一下硬件的效率与一致性。 2.硬件的...· _JVM内存_结构、_Java内存模型和_Java对象模型· 求你了,再问你Java_内存模型_的...

### [_Java内存模型_ | 并发编程网 – ifeve.com](https://zshipu.com/t?url=http://ifeve.com/java-memory-model-6/)

 _Java内存模型_规定了如何和何时可以看到由其他线程修改过后的共享变量的值,以及在必须时如何同步的访问共享变量。原始的_Java内存模型_存在一些不足,因此_Java内存模型_在...

### [_java内存模型和_内存分配_kunpeng90的博客-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/kunpeng90/article/details/80232135)

 2018年5月12日 - _jvm内存模型和_内存分配 1.什么是jvm? (1)jvm是一种用于计算设备的规范,它是...(3)JVM屏蔽了与具体操作系统平台相关的信息,使_Java_程序只需生成在_Java_虚拟机上...

### [_JVM_ _Java内存模型与_线程 - 知乎](https://zshipu.com/t?url=https://zhuanlan.zhihu.com/p/103232785)

 2020年1月18日 - 本文记录了阅读《深入理解Java虚拟机:_JVM_高级特性与最佳实践 —— 周志明》的《_Java内存模型与_线程》章节的笔记。硬件的效率与一致性计算机中的运算任...

### [_JVM内存模型及_内存分配过程 - 神奇的旋风 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/xuan52rock/p/4736783.html)

 2015年8月17日 - 一、_JVM内存模型_ JVM主要管理两种类型内存:堆(Heap)和非堆(Permanent区域)。 1..._Java 内存模型及_GC原理 _java内存模型及_GC原理 和 图解JVM在内存中申...

### [_JVM内存模型与_调优__JVM内存模型与_调优_给我一个Object..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/qq_39712188/article/details/84840613)

 2018年12月5日 - 首先需要注意的是在对_JVM内存_调优的时候不能只看操作系统级别_Java_进程所占用的_内存_,这个数值不能准确的反应堆_内存_的真实占用情况,因为GC过后这个值是...

### [细说_JVM内存模型_ - 追梦1819 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/yanfei1819/p/11993464.html)

 2019年12月6日 - 在正式学习 _JVM 内存模型_之前,先注意以下几个是问题:_JVM 内存模型与_ _JAVA 内存模型_不是同一个概念。_JVM 内存模型_是从运行时数据区的结构的角度描述的概念;而 ...

### [深入理解_JAVA内存模型_(PDF版)-Java文档类资源-CSDN下载](https://zshipu.com/t?url=https://download.csdn.net/download/mr_ph/10006263)

 2017年10月3日 - _java 内存模型JVM内存_讲解,堆栈讲解,本机内存。 立即下载 java 内存 上传时间: 2013-06-14 资源大小: 871KB 深入理解_java内存模型_ 本书从重排序、...

### [_Java内存模型及_性能优化及Java垃圾回收 - mine_song的..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/mine_song/article/details/60953669)

 2017年3月9日 - 一、_JVM内存模型_ 首先介绍下_Java_程序具体执行的过程: _Java_源代码文件(._java_后缀..._Java_栈:_Java_栈是_Java_方法执行的_内存模型_,_Java_栈中存放的是一个个的...