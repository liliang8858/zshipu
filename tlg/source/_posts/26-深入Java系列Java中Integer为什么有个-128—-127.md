title: 26.深入Java系列Java中Integer为什么有个-128—+127
author: 知识铺
date: 2020-04-06 19:24:48
tags:
---
 

计算机有3种编码方式表示一个数，对于正数而言，原反补都一样。

对于负数，就厉害了：

-1 = 10000001（原）= 11111110（反）= 11111111（补）

人脑可以把符号位特殊处理，但是对于计算机如何处理符号位，在电路设计上就是十分复杂了

1 - 1 = 1 +（-1）这样就计算机就只处理加法就可以了

1-1=1 +（-1）= 0000 0001+1000 0001 = 1000 0010 = -2

所以计算机无法用原码表示

所以出现了反码

1-1=1 + (-1) = 0000 0001（原） + 1000 0001（原）= 0000 0001（反）+ 1111 1110（反）= 1111 1111（反） = 1000 0000（原）= -0

这样就对了，但是-0这个问题没法解决

所以又有了补码

1-1 = 1 + (-1) = 0000 0001（原） + 1000 0001（原） = 0000 0001（补） +1111 1111（补）= 0000 0000（补）=0000 0000（原）

这样-0就不存在，还可以用1000 0000表示-128

应该都知道钟表那个比喻

回拨2小时 = 前拨10小时

回拨4小时 = 前拨8小时

回拨5小时= 前拨7小时

-2与10同余，-4与8同余，-5与7同余

a ≡ a (mod m)

如果a ≡ b (mod m)，c ≡ d (mod m) 那么:

(1)a ± c ≡ b ± d (mod m)

(2)a * c ≡ b * d (mod m)

[同余定理证明过程](https://zshipu.com/t?url=http://baike.baidu.com/view/79282.htm)

(-1) mod 128 = 127

127 mod 128 = 127

2-1 ≡ 2+127 (mod 128)

[原码, 反码, 补码 详解](https://zshipu.com/t?url=https://www.cnblogs.com/zhangziqiu/archive/2011/03/30/ComputerCode.html)

### [_Integer_源码,_为什么_缓存范围在【-_128—+127_】?__Java__伟..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/wang0112233/article/details/78641951)

 2017年11月27日 - _java_内部为了节省内存,_Integer_Cache类中有一个数组缓存了值从-_128_到_127_的_Integer_对象。当我们调用_Integer_.valueOf(int i)的时候,如果i的值时结余-_128_到_127_之间的,...

### [_Java 中integer为什么_范围取值要在-_128_到_+127_? - 知乎](https://zshipu.com/t?url=https://www.zhihu.com/question/309306695/answer/575240142)

 2019年1月16日 - _java中_的_integer_并不是-_128_到_127_。_java中_的int占用4个字节,4*8=32位,去除一个符号位,实际表示数据大小…

### [_Java_ _Integer_ -_128_~_127_ - 最怕一生碌碌无为,还安慰自己..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/ysl19910806/article/details/90748233)

 2019年6月3日 - System.out.println(_Integer_.valueOf("100")==_Integer_.valueOf("100")); /...有0 个人打赏 私信求帮助 _java中_-_128_~_127_数字常量池 阅读数 1802 _java_...

### [_Integer_对象范围(-_128_-_127_)之间_alan_gaohaodong的博客-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/alan_gaohaodong/article/details/80720704)

 2018年6月17日 - 如果超出了范围,会从堆区new一个_Integer_对象来存放值。 其实有上图第二行代码..._Java中_的AutoBoxing (_Integer_对-_128_~_127_之间数值的特殊处理) 阅读数 2...

### [_Java_ _Integer_(-_128_~_127_)值的==和equals比较产生的思考](https://zshipu.com/t?url=https://www.cnblogs.com/csniper/p/5882760.html)

 2016年9月18日 - 1、以上代码第一段和第二段旨在说明:在-_128_~_127_的_Integer_值并且以_Integer_ x = value;的方式赋值的_Integer_值在进行==和equals比较时,都会返回true,因为_..._

### [_Integer_自动转换(-_128_-_127_)问题 - 小程序员成长中... - CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/guanjunhere/article/details/21540515)

 2014年3月19日 - 是通过_Integer_Cache来实现的,_Integer_Cache值的范围是-_128_到_127_(byte)。在这个范围内是直接返回数值,这个数值是放置与_java_内存的栈区的,不需要生成对象...

### [_java_的_Integer_缓存整数介于-_128_到_127_之间_myzksky的专栏-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/myzksky/article/details/80979534)

 2018年7月10日 - 如果声明_Integer_对象的数据,则在-_128_到_127_之间不会生成新的对象,会使用缓存中的..._Java_ _Integer_ -_128_~_127_ 阅读数 1万+ 今天刷到了一道题,_为什么_第一...

### [_Java中Integer_的valueOf方法,-_128_到_127_的整数将被缓存_CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/wangshihui512/article/details/50960720)

 2016年3月23日 - _java_的_Integer_缓存整数介于-_128_到_127_之间 阅读数 358 1、如果声明_Integer_对象的数据,则在-_128_到_127_之间不会生成新的对象,会使用缓存中的对象。2、dou...

### [一道面试题关于_Integer_的缓存范围(-_128_~_127_)所引起的一..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/BeauXie/article/details/53013946)

 2016年11月2日 - 于是自己各种百度、谷歌,其中有一个解释是这样的: JVM会自动维护八种基本类型的常量池,int常量池中初始化-_128_~_127_的范围,所以当为_Integer_ i=_127_时,在...

### [_Java中_的AutoBoxing (_Integer_对-_128_~_127_之间数值的特殊..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/u010256388/article/details/52235796)

 2016年8月17日 - 在_Java中_的,_Integer_和int是可以Autoboxing和boxing的,这里要注意的是:在 int自动装箱成_Integer_的过程中,如果数值是在-_128_~_127_之间的值的话,那么会在在...

### [_integer_的大于_127_与小于_128_使用==比较__Java__水桶妖的博客-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/xicangtian/article/details/81048594)

 2018年7月14日 - _Java_在处理_Integer_时使用了一个缓存,其中缓存了-_128_到_127_之间的数字对应的_Integer_..._为什么_在_Integer中128_不等于_128_? 08-15 阅读数 2530 在_Integer_...

### [_为什么_在_Integer中128_不等于_128_?_w12111w的博客-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/w12111w/article/details/77175735)

 2017年8月15日 - 两个相同大小的int对象_为什么_在值超过-_128_~_127_后就不想等了 12-02 今天遇到..._java中_的_Integer_类型比较_——128_陷阱 阅读数 1077 大多数情况下,容易...

### [_为什么_在_Java中_比较_Integer_Wrappers时_128_=_128_为false,而_127_=_127_](https://zshipu.com/t?url=https://m.imooc.com/wenda/detail/563070)

 _为什么_在_Java中_比较_Integer_Wrappers时_128_=_128_为false,而_127_=_127_为真? class D { public static void main(String args[]) { _Integer_ b2=_128_; _Integer_ b3=_128_;...

### [_为什么127+_1是等于-_128_-CSDN论坛](https://zshipu.com/t?url=https://bbs.csdn.net/topics/390389645)

 2013年3月12日 - _java中_字节型数据范围是-_128_~_127_;_为什么_-_128_-1就会..._Integer_ a= _127_ 与 _Integer_ b = _127_ 引入面试的...因此就能理解_为什么_是-_128_了: int型的_127_在计...

### [_java_ – _为什么_整数类缓存值在-_128_到_127_之间? 相关文章 - 程序园](https://zshipu.com/t?url=http://www.voidcn.com/relative/p-smrmkpwv-bsn.html)

 _Java中Integer_的valueOf方法,-128到127的整数将被缓存 2016-03-23 Java _为什么_8位有符号数的范围为“-_128 — +127_”? 2015-03-03 _为什么_1个字节的取值范围...

### [在_Java中_比较_Integer_包装器时,_为什么128_ == _128_为false但_127_ ==...](https://zshipu.com/t?url=http://codingdict.com/questions/1693)

 2020年2月25日 - 请注意,_Integer_出于性能原因不存在缓存,而是为了符合JLS,第5.1.7节;必须为-_128_至_127_(含)之间的值指定对象标识。_Integer_#valueOf(int)也记录此行为:...

### [_Java中_的AutoBoxing (_Integer_对-_128_~_127_之间数值的特殊处理)](https://zshipu.com/t?url=https://yq.aliyun.com/articles/427128)

 2017年11月27日 - //i1 and i2 is in the range of -_128_~_127_, while i3 and i4 not. _Integer_ i1 = 102; _Integer_ i2 = 102; _Integer_ i3 = 232; _Integer_ i4 ...

### [_Integer_类型中奇怪的"_127_"和"_128_"_对象](https://zshipu.com/t?url=https://www.sohu.com/a/303094966_120051879)

 2019年3月22日 - 不相等原因:装箱时,_java_为了提高效率,_Integer_Cache类中有一个数组将-_128_<=i<=_127_范围之内的数据打包成缓存里的_Integer_对象了,因此不用new,这个区间里...

### [针对_java中Integer_的一些缓存 - - ITeye博客](https://zshipu.com/t?url=http://helloqyq.iteye.com/blog/1328279?utm_source=jiancool)

 2011年12月28日 - public class _Java_Test { public static void main(String[] args){ ...return _Integer_Cache.cache[i _+_ _128_]; else return new _Integer_(i); } ...

### [_java_关于_Integer_设置-_128_到_127_的静态缓存 - 山水花草 - 博客园](https://zshipu.com/t?url=https://www.cnblogs.com/xiehongwei/p/7595520.html)

 2017年9月26日 - valueOf会将常用的值(-_128_ to _127_)cache起来。当i值在这个范围时,会比用构造方法_Integer_(int)效率和空间上更好。分类: _java_se 标签: _java_ _integer_ -_12_...

### [在_Java中为什么_byte是-_127_~_128_的取值范围?_Carlos_Java..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/Carlos0908/article/details/88643357)

 2019年3月18日 - byte为何范围是-_128_~_127_  从我们接触_Java_的时候,就被告知基础类型byte是一...如果声明_Integer_对象的数据,则在-_128_到_127_之间不会生成新的对象,会使用...

### [_Integer_ 生成对象时,介于-_128_~_+127_之间的数据会被存放...-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/u012575573/article/details/22856495)

 2014年4月3日 - _java_的_Integer_缓存整数介于-_128_到_127_之间 阅读数 346 1、如果声明_Integer_对象的数据,则在-_128_到_127_之间不会生成新的对象,会使用缓存中的对象。2、dou...

### [_Integer_ 的-_128_至_127_缓存常量池记录 - 超人的博客_CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/superman4933/article/details/79293112)

 2018年2月8日 - _Integer_ 内部有一_个-128_到_127_的缓存池,但是如果是new出来的,那每一个对象都会...同Stringpool类似的,_Java中_存在整数(_Integer_对象,而非基本类型)pool。...

### [_Java中_的Byte类型的取值范围_为啥_是-_128_到_127__ClawHub的..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/lzm1111/article/details/85239703)

 2018年12月24日 - byte为何范围是-_128_~_127_ 阅读数 6791 byte为何范围是-_128_~_127_  从我们接触_Java_的时候,就被告知基础类型byte是一个字节,占8位,表示的范围是-_128_~_127_...

### [_java_的面试题:缓冲池(-_128_~_127_)_wuxizhi777的专栏-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/wuxizhi777/article/details/51588895)

 2016年6月5日 - _java_的_Integer_缓存整数介于-_128_到_127_之间 阅读数 360 1、如果声明_Integer_对象的数据,则在-_128_到_127_之间不会生成新的对象,会使用缓存中的对象。2、dou...

### [_Integer_源码,_为什么_缓存范围在【-_128—+127_】_tylcheck..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/tylcheck/article/details/83142837)

 2018年10月18日 - _java_内部为了节省内存,_Integer_Cache类中有一个数组缓存了值从-_128_到_127_的_Integer_对象。当我们调用_Integer_.valueOf(int i)的时候,如果i的值时结余-_128_...

### [_Java_ _Integer_(-_128_~_127_)值的==和equals比较产生的思考_CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/chengzhezhijian/article/details/9628251)

 2013年7月30日 - 1、以上代码第一段和第二段旨在说明:在-_128_~_127_的_Integer_值并且以_Integer_ x = value;的方式赋值的_Integer_值在进行==和equals比较时,都会返回true,因为_..._

### [_Java中_的AutoBoxing (_Integer_对-_128_~_127_之间数值的特殊..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/weixin_34216196/article/details/89992735)

 2017年11月27日 - 在_Java中_的,_Integer_和int是可以Autoboxing和boxing的,这里要注意的是: 在 int自动装箱成_Integer_的过程中,如果数值是在-_128_~_127_之间的值的话,那么会在...

### [_Java中_的AutoBoxing (_Integer_对-_128_~_127_之间数值的特殊..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/weixin_33957648/article/details/85068812)

 2010年5月3日 - 在_Java中_的,_Integer_和int是可以Autoboxing和boxing的,这里要注意的是: 在 int自动装箱成_Integer_的过程中,如果数值是在-_128_~_127_之间的值的话,那么会在...

### [_为什么_在_Integer中128_不等于_128___Java__小诸葛的博客-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/LONG_Yi_1994/article/details/86735987)

 2019年2月1日 - 在_Integer中128_ != _128_。 博文 来自: w12111w的博客 _Java_ _Integer_ -_128_~_127_ 阅读数 1万+ 今天刷到了一道题,_为什么_第一个为true,第二个为false。 Syst...

### [_Java中_的AutoBoxing (_Integer_对-_128_~_127_之间数值的特殊..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/weixin_33919941/article/details/91728052)

 2010年5月3日 - 在_Java中_的,_Integer_和int是可以Autoboxing和boxing的,这里要注意的是: 在 int自动装箱成_Integer_的过程中,如果数值是在-_128_~_127_之间的值的话,那么会在...

### [_为什么127+_1是等于-_128_ - weixin_42630877的博客 - CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/weixin_42630877/article/details/82664763)

 2018年9月12日 - byte为何范围是-_128_~_127_  从我们接触_Java_的时候,就被告知基础类型byte是一.../* * 看程序写结果 * * 注意:_Integer_的数据直接赋值,如果在-_128_到_127_之...

### [【_Java_】奇怪的考试题:_128_与_127_对于==(等于号)的不同区..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/hj7jay/article/details/53883739)

 2016年12月26日 - _java_ _Integer_ 超过_127_时,比较判断 博客 u014655105 3621 浏览器打开 奇怪的_Java_题:_为什么128_ == _128_返回为False,而_127_ == _127_会返回为True? 博客 wei...

### [【_Java_】奇怪的考试题:_128_与_127_对于==(等于号)的不同区...-CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/ydonghao2/article/details/81610723)

 2018年8月12日 - 这是非常有趣的地方。如果你查看_Integer_. _Java_ 类,你会找到_Integer_Cache._java_这个内部私有类,它为-_128_到_127_之间的所有整数对象提供缓存。 这个东西为...

### [_java中_byte的范围_为何_是-_128_--_127_而不是-_127_--_127_..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/qq_15037231/article/details/76999345)

 2017年8月9日 - +2^6=_127_;最小的负数,同理,为1 1111111,即-_127_。 到这里应该是许多人不明白的地方,_为什么_负数会到-_128_。这不得不崇拜伟大的印度阿三们。上述的描述会...

### [_Integer_的自动拆箱和自动装箱的陷阱(整型数-_128_到_127_的..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/tanga842428/article/details/52789701)

 2016年10月11日 - _Integer_的自动拆装箱的陷阱(整型数-_128_到_127_的值比较问题): 1、先看下面的例子: [_java_] view plain copy package _integer_demo; public class _Intege_...

### [_Java_整型缓存(-_128_ ~ _127_)__java_,缓存_蒋固金(jiangguji..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/jianggujin/article/details/53740267)

 2016年12月19日 - _java_的_Integer_缓存整数介于-_128_到_127_之间 阅读数 361 1、如果声明_Integer_对象的数据,则在-_128_到_127_之间不会生成新的对象,会使用缓存中的对象。2、dou...

### [关于_Java中Integer_所涉及的缓冲区的理解_zha0zha0zha的..._CSDN博客](https://zshipu.com/t?url=https://blog.csdn.net/zha0zha0zha/article/details/53648760)

 2016年12月14日 - 这个运行结果是符合我们所知道的_java_基本知识的,即new操作的每一个对象的指向堆...但是当声明对象的值在区间[-_128_, _127_]中时,_Integer_的valueOf方法就会return cache...