title: 18.深入Java系列java方法区内存溢出分析
author: 知识铺
date: 2020-04-05 19:46:36
tags:
---
 

### [关于_方法区内存溢出_! - 张-晓 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/zxCoding/p/5232806.html)

 2016年3月1日 - 关于_方法区内存溢出_!方法区与_java_堆一样,是各个线程共享的内存区域,它用于存储已被虚拟机加载的 类信息,常量,静态变量,即时编译器编译后的代码等数据...

### [_java_ _内存溢出_(_方法区_溢出)_iteye_171的博客-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/iteye_171/article/details/82375797)

 2012年7月26日 - package jvm;import _java_.lang.reflect.Method;import... jvm_内存溢出_JVM管理的几个内存区域分为:_方法区_:用于存储_JAVA_类信息、常量、静态变量。这个区...

### [_java内存溢出_的解决思路 - kszsa - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/dyh004/p/8296958.html)

 2018年1月16日 - _内存溢出_是指应用系统中存在无法回收的内存或使用的内存过多,最终使得程序运行要...在运行时的内存区域有5个部分,Method Area(_方法区_),_Java_ stack(_jav_...

### [_Java_常见的几种_内存溢出_及解决_方法_-百度经验](https://zshipu.com/t?url=https://jingyan.baidu.com/article/f3ad7d0f19d07709c3345b9a.html)

 2017年3月26日 - _Java_常见的几种_内存溢出_及解决_方法_【情况一】:_java_.lang.OutOfMemoryError:_Java_heapspace:这种是_java_堆内存不够,一个原因是真不够(如递归的层数太多等...

### [_java_堆、栈、_方法区内存溢出__zhanghc_kedamaomao的博客-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/zhanghc_kedamaomao/article/details/84829752)

 2016年12月6日 - 1._java_堆_内存溢出_ _java_堆用于存储对象,只要不断的创建对象,并且保证GC Roots到对象... 1._java_堆_内存溢出_ _java_堆用于存储对象,只要不断的创建对象,并且...

### [_java_ _内存溢出_ 栈溢出的原因与排查_方法_ - oswebgod...-开源中国社区](https://zshipu.com/t?url=https://my.oschina.net/u/2401092/blog/1621850)

 2018年2月13日 - 下面从以下几个方面来配合代码实战演示_内存溢出_及如何定位: _Java_堆内存异常 _Java_栈内存异常 _方法区内存_异常 _Java_堆内存异常 /** VM Args: //这两个参...

### [_java_ _内存溢出_(_方法区_溢出) - - ITeye博客](https://zshipu.com/t?url=http://gsdhaiji-cai.iteye.com/blog/1607276)

 2012年7月26日 - import _java_.lang.reflect.Method; import net.sf.cglib.proxy.Enhancer; import...使用字节码技术,来增加类,jvm保证_方法区_可以动态加载这些类到_内_...

### [_Java_ _内存_区域与_内存溢出_ - 深入理解 _Java_ 虚拟机 - 极客学院Wiki](https://zshipu.com/t?url=https://wiki.jikexueyuan.com/project/java-vm/storage.html)

 2018年11月28日 - 另外,该内存区域是唯一一个在 _Java_ 虚拟机规范中么有规定任何 OOM(_内存溢出_:..._方法区_也是各个线程共享的内存区域,它用于存储已经被虚拟机加载的类信息、常量、...

### [_Java内存_区域与_内存溢出_异常_ITPUB博客](https://zshipu.com/t?url=http://blog.itpub.net/31553506/viewspace-2215099/)

 2018年9月28日 - 前言 本文是对«深入理解_Java_虚拟机»第二章以及其他博客的阅读总结 重点是需要去理解各区域存储的是什么, 以此从底层理解对象的创建与引用等过程; 同...

### [_Java内存_区域和_内存溢出_异常(1) - 人生何处不相逢 - ITeye博客](https://zshipu.com/t?url=http://boyseegirl.iteye.com/blog/1681429)

 2017年8月4日 - 1.首先_java_的运行时存储区域大致分为:_java_堆,虚拟机栈,本地方法栈,_方法区_,程序计数器这几个区域,下面对这几块区域的存储信息和可能抛出的异常� ...

### [JVM_内存_区域介绍以及_内存溢出_示例 - 简书](https://zshipu.com/t?url=https://www.jianshu.com/p/345f99884a99)

 2016年11月20日 - 在JVM的管控下,_Java_程序员不再需要管理内存的分配与释放,这和在C和C++的世界是完全不一样的。所以,在JVM的帮助下,_Java_程序员很少会关注内存泄露和_内存_...

### [_Java内存_区域及_内存溢出_ - 大骨浓汤 - SegmentFault 思否](https://zshipu.com/t?url=https://segmentfault.com/a/1190000014892486)

 2018年5月16日 - 堆_溢出_ _Java_堆用于存储对象实例,只要不断地创建对象,并且保证GC Roots到对象之间...通常为操作系统限制总_内存_-最大堆容量(Xmx)-最大_方法区_容量(MaxPer...

### [_Java内存_管理运行时区域之_方法区_](https://zshipu.com/t?url=https://baijiahao.baidu.com/s?id=1644393576178370124&wfr=spider&for=pc)

 2019年9月11日 - _方法区_(Method Area)同_Java_ 堆,是各个线程共享的_内存_区域,用于存储虚拟机已经加载的类信息,常量,静态变量,即时编译器编译后的代码等数据。虽然_Java_虚拟机规范把方法...

### [_JAVA_语言-jvm之虚拟机栈和本地_方法_栈_溢出_,_方法区_和运行时常量池...](https://zshipu.com/t?url=http://java.zhizuobiao.com/java-19010900055/)

 2019年1月9日 - 本文主要向大家介绍了_JAVA_语言-jvm之虚拟机栈和本地方法栈溢出,_方法区_和运行时常量池溢出,本机直接_内存溢出_讲解,通过具体的内容向大家展示,希望对大家学习_JAVA_语言...

### [JVM之_Java内存_区域及_内存溢出_异常 程序运行时数据区域..._新浪博客](https://zshipu.com/t?url=http://blog.sina.com.cn/s/blog_700154a90102w9gd.html)

 2015年12月29日 - 一、_Java_虚拟机在执行_Java_程序的过程中会把它所管理的内存划分为若干个不同的数据...使用永久代来实现_方法区_,并不好,因为这样更容易遇到_内存溢出_问题(...

### [_Java内存_区域与_内存溢出_异常 - crawler - ITeye博客](https://zshipu.com/t?url=http://crawler.iteye.com/blog/1669762)

 之前根据平时的积累总结了篇博文“_Java内存_管理”,都是来自于平时的理解和积累,抽周末休息之余,翻阅了《深入理解_Java_虚拟机》第二章“_Java内存区_ ...

### [《JVM笔记》之一:_Java内存_区域与_内存溢出_异常 - 野猪林 - ITeye...](https://zshipu.com/t?url=https://yidao620c.iteye.com/blog/1938886)

 2014年5月7日 - 当_方法区_无法满足内存分配需求时,将抛出OutOfMemoryError。 运行时常量池: Runtime...注:出现_Java_堆_内存溢出_时,异常堆栈信息 _java_.lang.OutOfMemoryEr...

### [_Java 方法区_中存放哪些东西?JVM 如何控制方法区的大小以及_内存_...](https://zshipu.com/t?url=https://www.dazhuanlan.com/2019/11/08/5dc4afe3b5e67/)

 2019年11月8日 - _内存溢出_解决方法:减少用于程序中 class 的数量。尽量较少的使用静态变量。修改 -XX:MaxPermSize,调大,随着-XX:MaxPermSize 参数值的增大,_Java 方法区_...

### [_Java内存_区域与_内存溢出_异常_Linux编程_Linux公社-Linux系统门户...](https://zshipu.com/t?url=https://www.linuxidc.com/Linux/2016-01/127056.htm)

 2016年1月4日 - _方法区_的内存回收目标主要针对常量池的回收和对类型的卸载,当_方法区_无法满足内存..._Java内存_管理与_内存溢出_异常 (10/18/2017 07:42:40) 本文评论 查看...

### [_Java方法区_和运行时常量池_内存溢出_出现的原因,现象,以..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/qq_41901915/article/details/103526172)

 2019年12月13日 - _Java_ 永久代是非堆_内存_的组成部分,用来存放类名、访问修饰符、常量池、字段描述、方法描述等,因运行时常量池是_方法区_的一部分,所以这里也包含运行时常...

### [_JAVA内存_区域与_内存溢出_异常 - 简单爱_wxg - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/wxgblogs/p/5634246.html)

 2016年7月1日 - _Java_虚拟机在执行_Java_程序的过程中把它所管理的内存划分为若干个不同的数据区域...来实现_方法区_,现在看来并不是一个好 主意,因为这样更容易遇到_内存溢出_问题(...

### [jvm _内存溢出_ - _方法区_及运行时常量池溢出_木村的博客-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/a303549861/article/details/88716260)

 2019年3月21日 - jvm _内存溢出_ - _方法区_及运行时常量池_溢出Java_ 永久代是非堆内存的组成部分,用来存放类名、访

### [_Java_ _内存_区域与_内存溢出_异常 - 张宗星 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/zhangzongxing01/p/5536255.html)

 2016年5月27日 - 运行时常量池是_方法区_的一部分。Class文件中存在:类的版本、字段、方法、接口等...· 深入理解_java_虚拟机(一)---_java内存_区域以及_内存溢出_异常· 【深...

### [_java方法区_和运行时常量池直接_内存溢出__weixin_2987926..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/weixin_29879269/article/details/89880109)

 2019年5月6日 - 常量池:String.intern()是一个Native方法,他的作用是如果常量池中已经包含一个等于... jvm _内存溢出_ - _方法区_及运行时常量池_溢出Java_ 永久代是非堆内...

### [_Java_常见的几种_内存溢出_及解决方案 - 平凡希 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/xiaoxi/p/7406903.html)

 2017年9月4日 - 1.JVM Heap(堆)_溢出_:_java_.lang.OutOfMemoryError: _Java_ heap space JVM在...当需要存储类信息而_方法区_的_内存_占用又已经达到-XX:MaxPermSize设置的最大...

### [_Java内存_区域与_内存溢出_异常(jdk 6,7,8) - tlk20071 - CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/tlk20071/article/details/77841841)

 2017年9月4日 - 而在_Java_8中,已经彻底没有了永久代,将_方法区_直接放在一个与堆不相连的本地_内存_区域,这个区域叫元空间。 实战OutOfMemoryError异常 2.1_Java_堆_溢出_ _Java_...

### [JVM总结-_内存_监视手段及各区域_内存溢出_解决 - xuqu_vol..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/xuqu_volition/article/details/53786096)

 2016年12月21日 - 引言本文仅关注一些常见的虚拟机内存监视手段,以及JVM运行时数据区各个部分_内存溢出_的发生和对应的解决方案,总体来说属于概括性总结,涉及相对不是很深...

### [【JVM】 _java内存_区域与_内存溢出_异常 - Elsa_CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/binggetong/article/details/80211900)

 2018年5月7日 - _java内存_区域与_内存溢出_异常 阅读数 2443 _java_虚拟机的基本结构类加载子系统类加载子系统负责从文件系统或者网络中加载Class信息,加载的类信息存放于一块称为_方法区_...

### [_Java内存_区域和_内存溢出_异常 - 菜菜菜鸡 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/superlsj/p/11668262.html)

 2019年10月13日 - 在周志明老师的书中是这么讲解的:虽然_Java_虚拟机“规范”把_方法区_描述为堆的一...本案例使用递归的方式让主线程的栈中存储大量的实例方法,导致_内存溢_...

### [_方法区内存溢出_测试 - cuseronline的专栏 - CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/cuser_online/article/details/6835520)

 2011年9月29日 - package com.jfans;import _java_.util.ArrayList;import _java_.util.List;/* * 如果要向运行时常量池(位于_方法区_Method Area)中添加内容,最简单的做法是...

### [_Java_---(_内存_区域 与 _内存溢出_异常) - _Unique_](https://zshipu.com/t?url=https://blog.csdn.net/WZL995/article/details/86511233)

 2019年1月22日 - _Java内存_区域与_内存溢出_异常运行时数据区域程序计数器(线程私有)_Java_虚拟机栈本地方法栈_Java_堆_方法区_运行时数据区域 线程私有区域:程序计数器,_Java_虚...

### [_Java内存溢出_的几种情况 - lima - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/lin-xuan/p/5271354.html)

 2016年3月13日 - 本文通过几段代码模拟实际的_内存溢出_异常。..._Java_堆用于存储对象,只要不断的创建对象,并保证GC ...下面一段代码借助CGLib使_方法区_出现_内存溢出_异常。...

### [_java内存溢出_的解决思路 - kszsa - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/dyh004/p/8296958.html1)

 2018年1月16日 - _内存溢出_是指应用系统中存在无法回收的内存或使用的内存过多,最终使得程序运行要...在运行时的内存区域有5个部分,Method Area(_方法区_),_Java_ stack(_jav_...

### [_Java内存溢出_异常实例源码堆_方法区_虚拟机栈 | 红颜丽人](https://zshipu.com/t?url=http://www.hongyanliren.com/2014m07/9363.html)

 2014年7月2日 - _Java内存溢出_异常实例源码堆_方法区_虚拟机栈 _Java内存溢出_异常实例源码堆_方法区_虚拟机栈,JVM内存几个重要区域:堆,_方法区_,虚拟机栈,本地方法栈,程序计数...

### [_java_栈_内存溢出_怎么产生? - 知乎](https://zshipu.com/t?url=https://www.zhihu.com/question/28637033)

 2015年3月10日 - _java_栈_内存溢出_场景是什么,怎么验证?堆_内存溢出_和stackoverflow就不说啦。说的是outOfMemory补充下我谈…

### [JVM中的_内存溢出_详解 - 云+社区 - 腾讯云](https://zshipu.com/t?url=https://cloud.tencent.com/developer/article/1426421)

 2019年5月15日 - _Java_中使用直接_内存_最多的就是NIO。 如何解决? 使用-XX:MaxDirectMemorySize属性指定直接_内存_的大小 _方法区溢出_ _java_.lang.OutOfMemoryError: PermGen...

### [《深入理解_Java_虚拟机》读书笔记:第二章_Java内存_区域与_内存溢出_异常](https://zshipu.com/t?url=http://cmsblogs.com/?p=16688)

 2019年12月22日 - _Java_虚拟机在执行_Java_程序的过程中会把它所管理的_内存_划分为若干个不同的数据区域:_方法区_、虚拟机栈、本地方法栈、堆、程序计数器 程序计数器(Program...

### [_方法区_和运行时常量池_内存溢出_异常_昆明达内官网](https://zshipu.com/t?url=http://km.tedu.cn/news/183641.html)

 2016年11月30日 - 昆明IT培训的老师知道,_方法区_的作用是存储_Java_类的结构信息,当我们创建对象实例后,对象的类型信息存储在_方法区_之中,实例数据存放在堆中

### [_JAVA内存_区域与_内存溢出_异常_百度文库](https://zshipu.com/t?url=https://wenku.baidu.com/view/8aa04b2f77c66137ee06eff9aef8941ea76e4b22.html)

 评分:3.5/5 9页

 2016年12月12日 - _JAVA_ 内存区域与_内存溢出_异常转自 http://mynotes.iteye.com/blog/1207772 1...运行时常量池(Runtime Constant Pool)是_方法区_的一部分,Class 文件中除...

### [_java_se基础强化-JVM_内存_结构 14__方法区内存溢出_-教育-高..._爱奇艺](https://zshipu.com/t?url=https://www.iqiyi.com/v_19rwiwpf9c.html)

 _java_se基础强化-JVM内存结构 14__方法区内存溢出_是教育类高清视频,于2020-01-08上映,视频画面清晰,播放流畅,内容质量高。视频主要内容:主页获取全集教程...

### [深入理解_Java_虚拟机——_Java内存_区域与_内存溢出_异常.xmind-iteye](https://zshipu.com/t?url=https://www.iteye.com/resource/lmlzww-12302250)

 深入理解_Java_虚拟机——_Java内存_区域与_内存溢出_异常.xmind 评分: 这是自己读《深入理解_Java_虚拟机》时候用XMind建立的思维导图,目的是为了能够帮助自己整理、...

### [深入理解JVM虚拟机——JVM_内存_区域(运行时数据区) - 知乎](https://zshipu.com/t?url=https://zhuanlan.zhihu.com/p/92952024)

 2019年11月21日 - 用jdk1.6运行后会报错,永久代这个区域_内存溢出_会报: Exception in thread “main...而在_Java_8中,已经彻底没有了永久代,将_方法区_直接放在一个与堆不相连的本地...

### [代码清单2-5 借助CGLib使得_方法区_出现_内存溢出_异常 中的例子...](https://zshipu.com/t?url=https://book.douban.com/subject/6522893/discussion/44896903/)

 2012年3月18日 - "标题:"代码清单2-5 借助CGLib使得_方法区_出现_内存溢出_异常 中的例子console里没有打印出错误 我的环境: Mac系统,Eclipse Helios _java_ version "1.6.0_...

### [_Java内存_区域与_内存溢出_异常 - 简书](https://zshipu.com/t?url=https://www.jianshu.com/p/1a0fd4244829)

 _Java_虚拟机五块_内存区_ 1、_方法区_(线程共享) 用于存储已被虚拟机加载的类信息、常量、静态变量、即时编译器编译后的代码等数据。虚拟机规范把_方法区_描述为堆的一...

### [[总结]-第二章 _Java内存_区域与_内存溢出_异常 - GMar...-开源中国社区](https://zshipu.com/t?url=https://my.oschina.net/gmarshal/blog/1931193)

 2018年8月21日 - [总结]-第二章 _Java内存_区域与_内存溢出_异常 一、知识点 1、虚拟机运行时数据区 _方法区_:运行时常量池(JDK1.7被移出) 堆:存放对象实例或数组、新生代和...

### [_Java_堆_内存溢出_ - 『编程语言区』 - 吾爱破解 - LCG - LSG |安卓...](https://zshipu.com/t?url=https://www.52pojie.cn/thread-538288-1-1.html)

 2016年9月18日 - 最近在研究_Java_虚拟机,下面演示个_Java_堆_内存溢出_的实例,_Java_堆内存用于存储对象实例,只有不断的创建对象并且保证GC Roots到对象之间有可达路径来避免...

### [_java内存溢出_问题(工作中常用、面试中常问的一个知识点)](https://zshipu.com/t?url=https://baijiahao.baidu.com/s?id=1652605740506103750&wfr=spider&for=pc)

 2019年12月11日 - _内存溢出_是指应用系统中存在无法回收的内存或使用的内存过多,最终使得程序运行要...(3)_java_堆和_方法区_:_java_堆区主要存放对象实例和数组等,_方法区_保存类信息、常量...

### [_java_有垃圾回收机制,为什么还会出现_内存溢出_-黑马程序员技术交流...](https://zshipu.com/t?url=http://bbs.itheima.com/thread-116974-1-1.html)

 2014年5月7日 - _java_有垃圾回收机制,为什么还会出现_内存溢出_ © 曾欢欢 中级黑马 / 2014-5-7...system类里面有一个gc()_方法_,运行垃圾回收器,调用这个_方法_垃圾回收器不...

### [JVM:_内存_监视手段及各区域_内存溢出_解决 - _java_7__java_7..._红黑联盟](https://zshipu.com/t?url=https://www.2cto.com/kf/201702/500450.html)

 2017年2月27日 - JVM:内存监视手段及各区域_内存溢出_解决,本文仅关注一些常见的虚拟机内存监视手段,以及JVM运行时数据区各个部分_内存溢出_的发生和对应的解决方案,总体来...

### [什么是堆?什么是_方法区_?JVM_内存_模型中堆与_方法区_的介绍-_java_教程...](https://zshipu.com/t?url=https://www.php.cn/java-article-410259.html)

 2018年9月15日 - JVM_内存_模型中堆与_方法区_的介绍,有一定的参考价值,有需要的朋友可以参考一下,...* _java_堆_溢出_demo * JVM参数:-Xms20m -Xmx20m -XX:+HeapDumpOnOutOfMemory...

### [_java内存_区域与_内存溢出_异常_百度文库](https://zshipu.com/t?url=https://wenku.baidu.com/view/3f528109a7c30c22590102020740be1e650ecc06.html)

 评分:3/5 2页

 2017年1月4日 - ? 使用句柄访问对象: _Java_堆中会划出一块_内存_作为句柄池, reference中存储的是 对象的句柄地址,句柄中包含了对象实例数据(_Java_堆中)与对象类型数据 (_..._

### [_Java_虚拟机笔记-_内存区_与_内存溢出_ - 一个年轻hacker的世界...](https://zshipu.com/t?url=https://segmentfault.com/a/1190000003991359)

 2015年11月13日 - _方法区_和_Java_堆一样,也是各个线程共享的_内存_区域,它用于存储已经被虚拟机加载的类信息,常量,静态变量,即时编译器编译后的代码等数据。一般也称作为“...

### [_方法区_和运行时常量池_溢出_ - 简书](https://zshipu.com/t?url=https://www.jianshu.com/p/8d0e4ecc9bc7)

 2017年12月13日 - 对于这个区域的测试,基本思路是运行时产生大量的类去填满_方法区_,知道_溢出_。虽然...笔者尝试在_java_ 1.8下运行发现,一直没有报错信息出现,直到电脑_内存_...

### [JVM-_Java内存_区域与_内存溢出_异常 - haidao1992的个...-开源中国社区](https://zshipu.com/t?url=https://my.oschina.net/u/3088173/blog/1510097)

 2017年8月14日 - 根据_Java_虚拟机规范的规定,当_方法区_无法满足_内存_分配需求时,将抛出OutOfMemoryError异常。 运行时常量池 是_方法区_的一部分。Class文件中除了有类的版...

### [_java_栈、堆、常量池、_方法区_-云海天教程](https://zshipu.com/t?url=https://www.yht7.com/news/34091)

 2020年3月28日 - 栈(stack):主要保存基本类型(或者叫内置类型)(char、byte、short、int、long、float、double、boolean)和对象的引用,数据可以共享,速度仅次于寄存器(...

### [深入理解 _Java_ 虚拟机学习(一) -- _java_ 内存区域与_内存溢出_异常](https://zshipu.com/t?url=https://www.jianshu.com/p/4ffc61740c38)

 2017年9月28日 -   _Java_ 虚拟机规范对_方法区_的限制非常宽松,除了和 _Java_ 堆一样不需要连续的_内存_和可以选择固定大小或者可扩展外,还可以选择不实现垃圾收集。这区域...