title: 17.深入Java系列java方法区
author: 知识铺
date: 2020-04-05 19:45:17
tags:
---
 

### [_java方法区_详解 - dshf_1的博客 - CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/dshf_1/article/details/87171171)

 2019年2月13日 - _方法区_保存在着被加载过的每一个类的信息;这些信息由类加载器在加载类的时候,从类的源文件中抽取出来;static变量信息也保存在_方法区_中;可以看做是将类...

### [_Java方法区_、栈及堆 - 蜗牛 - CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/u013241673/article/details/78574770)

 2017年11月19日 - 1\. 什么是_方法区_(Method Area)? 《深入理解JVM》书中对_方法区_(Method Area)描述如下: _方法区_(Method Area)与_Java_堆一样,是各个线程共享的内存区域。 2...

### [_Java方法区_ - wangguoning - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/wangguoning/p/6109377.html)

 2016年11月28日 - _Java方法区_ 方法区 在一个jvm实例的内部,类型信息被存储在一个称为方法区的内存逻辑区中。类型信息是由类加载器在类加载时从类文件中提取出来的。类(...

### [_Java_内存管理运行时区域之_方法区_](https://zshipu.com/t?url=https://baijiahao.baidu.com/s?id=1644393576178370124&wfr=spider&for=pc)

 2019年9月11日 - _方法区_(Method Area)同_Java_ 堆,是各个线程共享的内存区域,用于存储虚拟机已经加载的类信息,常量,静态变量,即时编译器编译后的代码等数据。虽然_Java_虚拟机规范把方法...

### [_Java方法区_和永久代 - 鹏鹏进阶 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/chengpeng15/p/9850690.html)

 2018年10月25日 - 在_Java_虚拟机规范中,_方法区_在虚拟机启动的时候创建,虽然_方法区_是堆的逻辑组成部分,但是简单的虚拟机实现可以选择不在_方法区_实现垃圾回收与压缩。这个...

### [一文捋清_Java_虚拟机内存模型 - 码农登陆](https://zshipu.com/t?url=https://baijiahao.baidu.com/s?id=1614171299806688807&wfr=spider&for=pc)

 2018年10月14日 - 程序计数器虚拟机栈本地方法栈_Java_堆_方法区_等部分。程序计数器用于存放下一条运行的指令;虚拟机栈和本地方法栈用于存放函数调用堆栈信息;_Java_堆用于存...

### [_java方法区_存的是什么样的 方法区在堆中吗-IT培训网](https://zshipu.com/t?url=http://www.cnitedu.cn/java/share/20185466.html)

 2018年4月3日 - _Java方法区_存的是什么?方法区在堆中吗?最近一直被方法区里面存着什么东西困扰着,为了解开这个谜题,我查阅了大量资料,总算是解开了心里的那把锁,下面...

### [_Java方法区_和永久代 - 简书](https://zshipu.com/t?url=https://www.jianshu.com/p/66e4e64ff278)

 在_Java_虚拟机规范中,_方法区_在虚拟机启动的时候创建,虽然_方法区_是堆的逻辑组成部分,但是简单的虚拟机实现可以选择不在_方法区_实现垃圾回收与压缩。这个版本的虚拟机规范...

### [_java方法区_有什么 - 云+社区 - 腾讯云](https://zshipu.com/t?url=https://cloud.tencent.com/developer/information/java%E6%96%B9%E6%B3%95%E5%8C%BA%E6%9C%89%E4%BB%80%E4%B9%88)

 _java方法区_和永久代这里只讨论hotspot虚拟机,这也是目前使用的最多的jvm。 sun jdk7 hotspot虚拟机的内存模型如下图所示:? 1、什么是方法区在java虚拟机中,方法...

### [_java方法区__百度文库](https://zshipu.com/t?url=https://wenku.baidu.com/view/a4191853a7c30c22590102020740be1e650ecc08.html)

 2018年10月3日 - _java 方法区_ java 程序运行时, 数据会分区存放, heap、 stack、 method。 类的对象放在 heap(堆)中,所有的类对象都是通过 new 方法创建,创建后,在 sta...

### [_Java方法区_、堆、栈、本地方法区及新生代、老年代、元空间整合...](https://zshipu.com/t?url=https://www.pianshen.com/article/9892283051/)

 预热过程:我们_java_c了一个Demo._java_,这个时候编译器将_java_文件转为Demo.class,...我这就去_方法区_找它去。JVM来到了尚在混沌状态的_方法区_,大喊一声ClassTest方法...

### [(4)_java方法区_](https://zshipu.com/t?url=https://www.bbsmax.com/A/o75NWN2MdW/)

 2015年8月16日 - _java方法区_【名词解析】 --->和java堆一样,方法区是一块所有线程共享的内存区域。 --->保存系统的类信息,比如,类的字段,方法,常量池等。 --->方法区的...

### [关于_java_的_方法区_,为什么叫_方法区_,是否与实际用途相悖? - 知乎](https://zshipu.com/t?url=https://www.zhihu.com/question/23599282?sort=created)

 2017年1月5日 - 在_java_中,栈中存放的是用来保存方法运行时状态的栈帧,存储了局部变量表,操作数栈等,而_方法区_存…

### [_java方法区_中放什么_新网](https://zshipu.com/t?url=http://www.xinnet.com/xinzhi/tags/613730.html)

 2018年6月12日 - _java方法区_中放什么专题详细内容由工具聚合而成,希望能给您带来帮助,帮您了解_java方法区_中放什么相关内容细节

### [_java方法区_ - freedomranch - OSCHINA](https://zshipu.com/t?url=https://my.oschina.net/geeksun/blog/58206?p=1)

 2012年5月21日 - _java_程序运行时,数据会分区存放,heap、stack、method。 类的对象放在heap(堆)中,所有的类对象都是通过new_方法_创建,创建后,在stack(栈)会创建类对象的...

### [【_java_中堆 _方法区_ 栈】-博文推荐-CSDN博客](https://zshipu.com/t?url=https://www.csdn.net/gather_23/NtjaEgwsMjc0LWJsb2cO0O0O.html)

 2019年6月9日 - CSDN提供了精准_java_中堆 _方法区_ 栈信息,主要包含: _java_中堆 _方法区_ 栈信等内容,查询最新最全的_java_中堆 _方法区_ 栈信解决方案,就上CSDN热门排行榜频道.

### [_Java_ 内存之_方法区_和运行时常量池 - 漠然的博客 | mritd Blog](https://zshipu.com/t?url=https://mritd.me/2016/03/22/Java-%E5%86%85%E5%AD%98%E4%B9%8B%E6%96%B9%E6%B3%95%E5%8C%BA%E5%92%8C%E8%BF%90%E8%A1%8C%E6%97%B6%E5%B8%B8%E9%87%8F%E6%B1%A0/)

 _方法区_的作用是存储 _Java_ 类的结构信息,当我们创建对象实例后,对象的类型信息存储在方法堆之中,实例数据存放在堆中;实例数据指的是在 _Java_ 中创建的各种实例对象...

### [_JAVA 方法区_与堆--java7前,java7,java8各不相同 - 算法网](https://zshipu.com/t?url=http://ddrv.cn/a/280873)

 2019年6月20日 - 三种情况: _java_7之前,_方法区_位于永久代(PermGen),永久代和堆相互隔离,永久代的大小在启动JVM时可以设置一个固定值,不可变; _java_7中,存储在永久代的部...

### [详谈_java_ 堆区、_方法区_和栈区 - _java_](https://zshipu.com/t?url=http://www.luyixian.cn/java_show_177123.aspx)

 2019年8月5日 - 下面小编就为大家带来一篇详谈_java_ 堆区、_方法区_和栈区。小编觉得挺不错的,现在就分享给大家,也给大家做个参考。一起跟随小编过来看看吧

### [【JVM】_java方法区_ - 无信不立 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/shangxiaofei/p/4734807.html)

 _java方法区_【名词解析】 --->和java堆一样,方法区是一块所有线程共享的内存区域。 --->保存系统的类信息,比如,类的字段,方法,常量池等。 --->方法区的...

### [_Java_虚拟机--_方法区_(运行时常量池) - DemoTransfer - CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/u013412772/article/details/81051465)

 2018年7月15日 - 文章引用:深入理解_Java_虚拟机一_方法区_描述_方法区_(MethodArea)与_Java_堆一样,是各个线程共享的内存区域,它用于存储已经被虚拟机加载的类信息/常量//静态...

### [_JAVA方法区_ - Double5的博客 - CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/qq_18344305/article/details/84750119)

 2018年12月3日 - _方法区_1)_方法区_是线程共享的2)用以储存已被虚拟机加载的类信息、常量、静态变量、即时编译器编译后的代码等3)_方法区_是堆的一个逻辑部分,但是又称为Non...

### [_Java_里的堆(heap)栈(stack)和_方法区_(method) - 龙v战 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/kkcheng/archive/2011/02/25/1964521.html)

 2011年2月25日 - 当_JAVA_虚拟机执行test1.printName()_方法_时,_JAVA_虚拟机根据局部变量test1持有的引用,定位到堆区中的Sample实例,再根据Sample实例持有的引用,定位到_方法_...

### [_JAVA 方法区_是在堆里面吗 - 诚 - CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/qq_22771739/article/details/86064644)

 2019年1月8日 - 三种情况:1、_java_7之前,_方法区_位于永久代(PermGen),永久代和堆相互隔离,永久代的大小在启动JVM时可以设置一个固定值,不可变;2、_java_7中,static变量从永久代移...

### [_java方法区_究竟存储了什么? - qingtiantianqing的博客 - CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/qingtiantianqing/article/details/51405517)

 2016年5月14日 - 首先要说明的是,此文章转载自http://blog.csdn.net/zzhangxiaoyun/article/details/7518917谢谢作者。另外,这里ps一下,Class对象是存放在堆区的,不是_..._

### [_java方法区_存储了什么?_sunming0129的博客-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/sunming0129/article/details/79672755)

 2018年3月23日 - 例如,假如你有一个_java_.lang.Integer的对象引用,可以激活getClass()得到对应的类引用。 通过类对象的引用,你可以在运行中获得相应类存储在_方法区_中的...

### [_java方法区_ - 付石头的博客 - CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/u010947534/article/details/89211443)

 2019年4月11日 - 目录_方法区_图例(_方法区_中都保存什么)类型信息类型的常量池(即运行时常量池)字段信息方法信息类变量(即static变量)对类加载器的引用对Class类的引用方...

### [_方法区_(关于_java_虚拟机内存的那些事) - young-youth的..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/youngyouth/article/details/79933612)

 2018年4月13日 - 《深入理解_java_虚拟机》读书扩展作者:淮左白衣写于2018年4月13日21:26:05目录_方法区_图例(_方法区_中都保存什么)类型信息类型的常量池(即运行时常量池)字...

### [_Java方法区__u012501054的博客-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/u012501054/article/details/84503246)

 2018年11月25日 - _方法区_ 在一个jvm实例的内部,类型信息被存储在一个称为_方法区_的内存逻辑区中。类型信息是由类加载器在

### [_java方法区_能清理么_新网移动](https://zshipu.com/t?url=https://m.xinnet.com/mweb/tags/820376.html)

 2018年6月14日 - _java方法区_能清理么专题详细内容由工具聚合而成,希望能给您带来帮助,帮您了解_java方法区_能清理么相关内容细节

### [关于_方法区_的详细介绍-_java_教程-PHP中文网](https://zshipu.com/t?url=https://www.php.cn/java-article-364497.html)

 2017年6月10日 - 下面小编就为大家带来一篇详谈_java_ 堆区、_方法区_和栈区。小编觉得挺不错的,现在就分享给大家,也给大家做个参考。一起跟随小编过来看看吧堆区:只存放类对象,...

### [详谈_java_ 堆区、_方法区_和栈区__java__脚本之家](https://zshipu.com/t?url=https://www.jb51.net/article/114221.htm)

 2017年5月20日 - 下面小编就为大家带来一篇详谈_java_ 堆区、_方法区_和栈区。小编觉得挺不错的,现在就分享给大家,也给大家做个参考。一起跟随小编过来看看吧

### [_java_中堆、栈和_方法区_的理解-CSDN问答](https://zshipu.com/t?url=https://ask.csdn.net/questions/663419)

 2017年10月18日 - 百度上的答案太多,说的都比较抽象,请假大神们给我举例说明下 我自己的理解: 堆:存放对象、数组 栈:存放基础数据类型的对象和自定义对象的引用(不是对...

### [怎么让jvm中的_方法区_直接爆满_技术交流_牛客网](https://zshipu.com/t?url=https://www.nowcoder.com/discuss/158712?type=0&order=0&pos=7&page=1)

 2019年3月6日 - 阿里巴巴菜鸟网络社招内推-_java_工程师 全部> 大家都在关注 校招日程表 笔试..._方法区_已经被取消了,在jdk8的时候。 发表于 2019-03-06 14:05:20回复(...

### [jvm的内存原理(_方法区_和常量池)???-CSDN论坛](https://zshipu.com/t?url=https://bbs.csdn.net/topics/390554824?list=297346)

 _java方法区_详解 方法区 保存在着被加载过的每一个类的信息;这些信息由类加载器在加载类的时候,从类的源文件中抽取出来;static变量信息也保存在方法区中; 可以看...

### [_java_虚拟机_方法区_内存模型 - _Java_ 技术驿站-_Java_ 技术驿站](https://zshipu.com/t?url=http://cmsblogs.com/?p=13721)

 2019年12月10日 - 版权归原创作者所有,任何形式的转载请联系博主:daming_90:_Java_ 技术驿站 » _java_虚拟机_方法区_内存模型标签:_javaJava_ Core_Java_ 内存模型_Java_ 源码...

### [_java_的方法有什么__java方法区_有什么_java方法里有方法 - 云+社区...](https://zshipu.com/t?url=https://cloud.tencent.com/developer/information/java%E7%9A%84%E6%96%B9%E6%B3%95%E6%9C%89%E4%BB%80%E4%B9%88)

 _java_的_方法_有什么 _Java_是一门面向对象编程语言,不仅吸收了C++语言的各种优点,还摒弃了C++里难以理解的多继承、指针等概念,因此_Java_语言具有功能强大和简单易用两个特...

### [_Java 方法区_中存放哪些东西?JVM 如何控制方法区的大小以及内存...](https://zshipu.com/t?url=https://www.dazhuanlan.com/2019/11/08/5dc4afe3b5e67/)

 2019年11月8日 - 通过配置 PermGenspace可以控制_方法区_的大小 StackOverflowError 异常:如果线程的方法嵌套调用层次太多(如递归调用),随着 _Java_ 栈中帧的逐渐增多,最终...

### [_java_中栈、堆、_方法区_的区别是什么?有图解的话就更好了_慕课问答](https://zshipu.com/t?url=https://www.imooc.com/qadetail/191636?lastmedia=1)

 2016年12月28日 - _java_源代码 经过编译 成 .class 文件时,都在通过 jvm 运行。 栈、堆、_方法区_是内存不同区域, 1、栈 :是放类中的局部变量的; 2、堆:是放对象属性的; 3...

### [【_Java_】栈区、堆区和_方法区_的解析 - 记录笔记 - SegmentFault 思否](https://zshipu.com/t?url=https://segmentfault.com/a/1190000019618270?utm_source=tag-newest)

 2019年11月11日 - 栈区描述的是_方法_执行的内存模型。每个_方法_在执行时都会创建一个栈帧(存放存储局部变量、操作数栈、动态链接、_方法_出口等)

### [_Java_中堆区 | 栈区 | _方法区_-布布扣-bubuko.com](https://zshipu.com/t?url=http://www.bubuko.com/infodetail-3093299.html)

 2019年6月15日 - 在_方法_体内定义的(局部变量)一些基本类型的变量和对象的引用变量都是在_方法_的栈内存中分配的。当在一段_方法_块中定义一个变量时,_Java_ 就会在栈中为该...

### [_java_类变量的在_方法区_中分配的内存地址存在哪? - ITeye问答](https://zshipu.com/t?url=https://www.iteye.com/problems/79847)

 2012年3月8日 - 在装载阶段会在堆区创建一个_java_.lang.Class的对象指向作为_方法区_类对象的入口,testStaticInt 存储在_方法区_,它的应用存储在堆区中对应的Class对象中。...

### [_JAVA_里的_方法区_可以理解为类信息表吗?-CSDN论坛](https://zshipu.com/t?url=https://bbs.csdn.net/topics/390954149)

 2014年12月15日 - 在《JVM 之(1)运行时数据区》提到,虚拟机栈是描述_Java方法_执行的内存模型:每个方法在执行的同时都会创建一个栈帧(Stack Frame)用于存储局部变量表、操...

### [JVM学习笔记-_方法区_示例与常量池解析 - chunguo.wang - ITeye博客](https://zshipu.com/t?url=https://wwangcg.iteye.com/blog/1381572)

 2013年8月16日 - JVM学习笔记-方法区示例与常量池解析(Method Area Use And Constant Pool Resolution) 博客分类: jvm_java方法区_ As an example of how the Java Virtu...

### [_Java方法区_是什么 - 红黑联盟](https://zshipu.com/t?url=https://www.2cto.com/tag/javafangfaqushishime.html)

 _Java方法区_是什么:java里截取字符串的方法有substring和substr,它俩的区别和各自的用法具体是什么

### [百度贴吧__方法区_](https://zshipu.com/t?url=http://tieba.baidu.com/f?kw=%E6%96%B9%E6%B3%95%E5%8C%BA+)

 2017年3月15日 - 静态方法是在类加载时加入到类_方法区_,非静态方法是在创建实例时加入到对象区的,所以没有创建对象,类加载时是找不到对象_方法区_的方法的。... 贴吧:_java_...

### [_java_堆,栈,_方法区_ - 简书](https://zshipu.com/t?url=https://www.jianshu.com/p/467b7d51163d)

 栈区: 每个线程包含一个栈区,栈中只保存_方法_中(不包括对象的成员变量)的基础数据类型和自定义对象的引用(不是对象),对象都存放在堆区中每个栈中的数据(原始...

### [深入讲解_Java_虚拟机系列之_方法区_.doc](https://zshipu.com/t?url=https://max.book118.com/html/2017/0329/97642450.shtm)

 2017年4月8日 - 深入讲解_Java_虚拟机系列之_方法区_.doc,深入讲解_Java_虚拟机系列之_方法区_ 作者:张文道 目录 .1介绍 3 2._方法区_结构 3 3._方法区_概念图 4 1.介绍 _方法区_就...

### [深入讲解_Java_虚拟机系列之_方法区_-_Java_文档类资源-CSDN下载](https://zshipu.com/t?url=https://download.csdn.net/download/zhangwendao/5012955)

 2013年1月20日 - 深入讲解_Java_虚拟机系列之_方法区_ 评分 深入讲解_Java_虚拟机系列之_方法区_ _Java_虚拟机 所需积分/C币:4 上传时间:2013-01-20 资源大小:61KB ...

### [_Java_内存区域总结(堆、栈、_方法区_等) | 码农网](https://zshipu.com/t?url=https://www.codercto.com/a/46173.html)

 2018年12月5日 - 虽然JVM规范把_方法区_描述为堆的一个逻辑部分, 但是它却又一个别名叫做 Non-Heap(非堆) , 目的应该是与 _Java_ 堆区分开来. _方法区_ 和 永久代(Permanent...

### [_Java_的_方法区_和本地_方法区_有何不同?什么是Native Method?_百度知道](https://zshipu.com/t?url=https://zhidao.baidu.com/question/502642819216780044.html)

 2020年2月1日 - _Java_的_方法区_和本地_方法区_有何不同?什么是Native Method?  我来答 分享 ...native method的存在并不会对其他类调用这些本地方法产生任何影响,实际...

### [【上海校区】细说_java_内存区域划分(堆,栈,_方法区_)-黑马程序员技术...](https://zshipu.com/t?url=http://bbs.itheima.com/thread-425683-1-1.html)

 2018年10月25日 - _java_虚拟机在执行_java_程序的过程中会把它所管理的内存划分成若干个不同的数据区域。这些区域各有用途,以及创建和销毁的时间。有 ...

### [什么是堆?什么是_方法区_?JVM内存模型中堆与_方法区_的介绍-_java_教程...](https://zshipu.com/t?url=https://www.php.cn/java-article-410259.html)

 2018年9月15日 - _java_.lang.OutOfMemoryError: _Java_ heap space 二、_方法区_(Method Area) 2.1.什么是_方法区_ _方法区_,也称非堆(Non-Heap),又是一个被线程共享的内存区域。其中...

### [_Java_ 8 是否没有_方法区_的概念和提法了?-CSDN论坛](https://zshipu.com/t?url=https://bbs.csdn.net/topics/392004208?page=1)

 2016年8月15日 - 前段时间看一本书,好像说_Java_ 8没有_方法区_的概念和提法了,想详细了解这方面的描述和内存分配,谁了解的或有这方法资料的? 十分感谢 ...

### [_JAVA_虚拟机中_方法区_存储哪些内容? 爱问知识人](https://zshipu.com/t?url=https://iask.sina.com.cn/b/iQSZbCAyx95X.html)

 _JAVA_虚拟机中_方法区_存储哪些内容?:_java_虚拟机_方法区方法区_与传统语言中的编译后代码或是Unix进程中的正文段类似?

### [_java_-_Java_的内存模型之_方法区_——CSDN问答频道](https://zshipu.com/t?url=https://ask.csdn.net/questions/192626)

 2015年7月7日 - 这两天看_Java_的内存模型,越看越迷糊,到底_Java_文件里的_方法区_是如何存储的,又是如何管理的呢?