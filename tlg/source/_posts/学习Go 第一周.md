
title: 学习Go 第一周
author: 知识铺
date: 2020-07-04 11:24:14
tags:
---
 
这是一个博客系列的开始，我每周发布一次。当我学会使用 Go 编程语言时， 我将写我的经验和发现。我正在学习使用一些媒体形式：视频、书籍和讲座。本周， 我将讨论我学到了什么， 完成了托德 · 麦克劳德课程的 25[个视频](https://zshipu.com/t?url=https://twitter.com/todd_mcleod?lang=en)片段。

## [](https://zshipu.com/t?url=#why-go)<font _mstmutation="1" _msthash="289055" _msttexthash="24093537">为什么要去？</font>

除了我对编程和计算机科学的热情，我会完全诚实 - 我没有令人信服的答案， 这一个。以下是我最初感兴趣的原因：

*   由 Google 创建并大量使用
*   <font _mstmutation="1" _msthash="443092" _msttexthash="30243512">我听说它_非常有效_</font>
*   科技行业的需求相当旺盛
*   它被许多公司使用
*   社区保持创新，参与

## [](https://zshipu.com/t?url=#history)<font _mstmutation="1" _msthash="289952" _msttexthash="4180722">历史</font>

去， 或_戈朗_是由罗布派克， 罗伯特格里塞默和肯汤普森在 2009 年创建。那些名字对你意义可能并不大;然而，他们都为软件开发行业贡献了大量。

Rob Pike - 核心 Unix 团队成员，并创建了 UTF-8 编码方案

罗伯特·格里塞默 - 与编程语言的创造者、帕斯卡的创造者尼克劳斯·沃斯密切合作

Ken Thompson - 设计和实现了原始的 Unix 系统，并帮助发明了 C 编程语言

它是编译的、并发的、垃圾回收的和静态的。

## [](https://zshipu.com/t?url=#why-should-you-care)<font _mstmutation="1" _msthash="304057" _msttexthash="32684535">你为什么要在乎？</font>

问得好我发现托德 · 麦克劳德说的很有见地：

*   高效编译
*   高效执行
*   易于编程

又短又甜。效率与轻松搭配？很好交易

在学习 Go 的第一周， 我已经可以谈谈它是多么令人愉快。我很高兴能深入到更多。

## [](https://zshipu.com/t?url=#what-can-you-use-go-for)<font _mstmutation="1" _msthash="305617" _msttexthash="31816356">你能用 Go 做什么？</font>

我发现，Go可用于很多不同的应用程序，其中一些包括：

*   命令行工具
*   密码
*   图像处理
*   Http / UDP / TCP
*   <font _mstmutation="1" _msthash="466050" _msttexthash="82671758">[并发](https://zshipu.com/t?url=https://en.wikipedia.org/wiki/Concurrency_(computer_science))（兴奋地了解更多关于这个！</font>

## [](https://zshipu.com/t?url=#type-is-king)<font _mstmutation="1" _msthash="303732" _msttexthash="15416011">类型是国王</font>

Go 是[一种静态类型](https://zshipu.com/t?url=https://en.wikipedia.org/wiki/Type_system#Static_type_checking)语言 - 类型很重要，在此之前，我主要使用 Javascript，一种动态类型语言。诚实时间：_我很少_从类型上考虑;但是，我知道使用静态类型语言会使_我_成为一个更好的开发人员。

## [](https://zshipu.com/t?url=#thinking-idiomatically)<font _mstmutation="1" _msthash="304356" _msttexthash="13212953">思维成语</font>

在上这门课之前，我不可能告诉你"习惯"是什么意思。我听到 "习惯去" 这句话， 我惊慌失措的一刻 — — 我脑子里在吗？听起来太聪明了_习语_来自"习_语"_这个词，这个词就不那么吓人了：

> id - i - om
> 
> 用法确立为具有个别词中不可理解的一组词

从本质上讲，"习惯性去"是一种约定的风格和方法，用被创作者_祝福_的语言写作。

## [](https://zshipu.com/t?url=#smaller-things-to-build-bigger-things)<font _mstmutation="1" _msthash="305604" _msttexthash="58964256">更小的东西来制造更大的事物</font>

Go 应用程序由包组成。我习惯于从文件及其各自的文件夹的角度考虑应用程序。相比之下， 去更干净， 被剥下来。

<font _mstmutation="1" _msthash="292695" _msttexthash="1048557341">我接触过的第一批"Go"是传统的"你好世界"节目。我知道有时很容易认为这些例子 "太琐碎"， 但是， 我觉得它们很有帮助。你跑步前必须走路，对吗？</font>

 

```

package main

import (
    "fmt"
)

func main() {
    fmt.Println("Hello world")
}

```


<font _mstmutation="1" _msthash="290589" _msttexthash="1357974592">很简单吧？让我来引导你了解一下发生了什么。首先，每个_Go 应用程序都必须_有一个包。这些通常在应用程序中的文件中找到。很多包，包括 ，都是从所谓的 Go ，它们轻量级和快速。</font>
```
main

main.go

ROOT

fmt

Standard Library
```


<font _mstmutation="1" _msthash="290888" _msttexthash="578998381">所有 Go_应用程序的入口_点是函数。这是运行应用程序的所有代码的地方。执行代码后，此函数完成，程序即完成。</font>
```
main
```


## [](https://zshipu.com/t?url=#thinking-in-terms-of-packages)<font _mstmutation="1" _msthash="304655" _msttexthash="25024155">从包的角度思考</font>

Go 是专为在创建应用程序时_考虑_包而设计的。包非常简单的是包含功能的源文件。Unix显然对 Go 的创作有很大的影响，正因为如此，他们有着相同的理念——_更小的东西来制造更大的事物_。

小，简洁，咬大小。

### [](https://zshipu.com/t?url=#variables)<font _mstmutation="1" _msthash="305864" _msttexthash="5835232">变量</font>

Go 有一些很酷的内置行为与变量。我最喜欢的是：你不能_声明一个变量，不能使用它_。这回回到 Go 性能的校长和目标之一.通过强制使用所有声明，有助于保持内存效率。

<font _mstmutation="1" _msthash="292682" _msttexthash="215742930">变量的另一个很酷的功能是能够"扔掉"返回值。可以这样进行：</font>

 

```

package main

import (
    "fmt"
)

func main() {
    id, _ := ReturnId()
}

```


<font _mstmutation="1" _msthash="293280" _msttexthash="558275445">在函数内部，我预期从函数接收 2 个返回值;但是，在这种情况下，我只关心 的值。通过使用我"扔掉"第二个返回值。</font>
```
main

ReturnId

id

_
```


### [](https://zshipu.com/t?url=#short-declaration-operator)<font _mstmutation="1" _msthash="304603" _msttexthash="22446918">短声明运算符</font>

到目前为止，我已经了解了在 Go 中声明变量的两种常见方法，尽管它们非常相似，但显著的区别是它们_的范围_。

__短期声明运算符__


```
:=
```
<font _mstmutation="1" _msthash="291772" _msttexthash="106934269"><----声明运算符（看起来像妖精）</font>

<font _mstmutation="1" _msthash="292071" _msttexthash="1043708900">在编写 Go 程序时，这种声明变量的方法似乎是最常见的。我相信一个主要原因是它在。使变量与正在执行的工作保持接近，可降低变量的副作用或更改的风险。</font>
```
function scope
```


*   必须声明在函数体内部
*   无法使用类型声明

## [](https://zshipu.com/t?url=#the-var-keyword)<font _mstmutation="1" _msthash="306202" _msttexthash="11853712">var 关键字</font>

<font _mstmutation="1" _msthash="292968" _msttexthash="300143571">声明变量的另一种常见方式是使用 关键字。关于关键字差异的一些注意事项是：</font>
```
var

var
```


*   可以在函数体外部声明
*   <font _mstmutation="1" _msthash="465504" _msttexthash="62538918">可以使用类型 （、等） 声明</font>
```
int
string
map
```


重申一点：最好尽可能使用简短的声明运算符。

## [](https://zshipu.com/t?url=#types)<font _mstmutation="1" _msthash="304629" _msttexthash="5230641">类型</font>

我还没有在 Go 中深入类型， 但我知道这些类型：

*   原始数据类型：布尔、数字（浮动、int 等）和字符串
*   复合数据类型：数组、结构、指针、函数、接口、切片、地图和通道

## [](https://zshipu.com/t?url=#zero-value)<font _mstmutation="1" _msthash="305565" _msttexthash="5652946">零值</font>

<font _mstmutation="1" _msthash="292357" _msttexthash="889849597">关于使用 关键字，我学到的一个很酷的事情是，当您声明一个没有初始值的变量时，Go 编译器会自动分配所谓的 。以下是常见数据类型的零值：</font>
```
var zero value


var y string
// ""
var z int
// 0
var z bool
// false

// nil for pointers, functions, interfaces,
// slices, channels, maps

```


## [](https://zshipu.com/t?url=#creating-your-own-types)<font _mstmutation="1" _msthash="306501" _msttexthash="29296345">创建您自己的类型</font>

<font _mstmutation="1" _msthash="293254" _msttexthash="604376890">除了在 Typescript 中使用接口之外，我在创建自己的类型方面也没有太多的经验。我发现 Go 让这一切变得非常简单。</font>

 

```

package main

import (
    "fmt"
)

var a int = 42

type midichlorian int

var b midichlorian

func main() {
    fmt.Print.ln(a)
    // 42
    fmt.Printf("%T\n", a)
    // int

    b = 43
    fmt.Print.ln(b)
    // 43
    fmt.Printf("%T\n", b)
    // main.midichlorian
}

```


<font _mstmutation="1" _msthash="293852" _msttexthash="1158651156">如上所示，我声明一个变量，名称为 类型 。接下来，我使用 关键字定义具有 名称 的新类型。这里需要注意的是，虽然我声明了一种称为 的新类型，但它的基础_类型_是 。</font>
```
a int type int midichlorian midichlorian int
```


## [](https://zshipu.com/t?url=#convert-not-cast)<font _mstmutation="1" _msthash="304928" _msttexthash="28173119">"转换"而不是"强制"</font>

<font _mstmutation="1" _msthash="291746" _msttexthash="1783728830">只有由于 Go 的强、静态类型的精神， 转换值将是一个完全深思熟虑的行动， 这才有意义。在 JavaScript 中，这称为_类型转换_，并不完全可靠。Go 采用另一种方法_-_转换值的类型，不_强制转换类型_。我将演示下面。</font>

 

```

package main

import (
    "fmt"
)

var a int = 42

type midichlorian int

var b midichlorian

func main() {
    a = 42
    fmt.Println(a)
    // 42
    fmt.Printf("%T\n", a)
    // int

    b = 43
    fmt.Println(b)
    // 43
    fmt.Printf("%T\n", b)
    // main.midichlorian

    // CONVERSION <<<<<<
    a = int(b)
    fmt.Println(a)
    // 43
    fmt.Printf("%T\n", a)
    // int
}

```


<font _mstmutation="1" _msthash="292344" _msttexthash="942907121">如您所见，我们将变量与 类型 的值一起声明。然后，使用变量上的转换函数的返回值重新分配变量。很酷吧？使用 Go 时，您使用的类型没有不确定性。</font>
```
b 43 midichlorian a int() b
```


## [](https://zshipu.com/t?url=#in-summary)<font _mstmutation="1" _msthash="306176" _msttexthash="4326257">总之</font>


