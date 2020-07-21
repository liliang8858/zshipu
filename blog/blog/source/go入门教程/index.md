title: go入门教程
date: 2019-10-16 20:38:53
---
# [](https://blog.zshipu.com/2019/10/15/golang/20191015/directory/ "目录")目录

*   [前言](https://blog.zshipu.com/2019/10/15/golang/20191015/preface/)

## [](#第一部分：学习-Go-语言 "第一部分：学习 Go 语言")第一部分：学习 Go 语言

*   第1章：Go 语言的起源，发展与普及

    *   1.1 [起源与发展](https://blog.zshipu.com/2019/10/15/golang/20191015/01.1/)
    *   1.2 [语言的主要特性与发展的环境和影响因素](https://blog.zshipu.com/2019/10/15/golang/20191015/01.2/)

*   第2章：安装与运行环境

    *   2.1 [平台与架构](https://blog.zshipu.com/2019/10/15/golang/20191015/02.1/)
    *   2.2 [Go 环境变量](https://blog.zshipu.com/2019/10/15/golang/20191015/02.2/)
    *   2.3 [在 Linux 上安装 Go](https://blog.zshipu.com/2019/10/15/golang/20191015/02.3/)
    *   2.4 [在 Mac OS X 上安装 Go](https://blog.zshipu.com/2019/10/15/golang/20191015/02.4/)
    *   2.5 [在 Windows 上安装 Go](https://blog.zshipu.com/2019/10/15/golang/20191015/02.5/)
    *   2.6 [安装目录清单](https://blog.zshipu.com/2019/10/15/golang/20191015/02.6/)
    *   2.7 [Go 运行时（runtime）](https://blog.zshipu.com/2019/10/15/golang/20191015/02.7/)
    *   2.8 [Go 解释器](https://blog.zshipu.com/2019/10/15/golang/20191015/02.8/)

*   第3章：[编辑器、集成开发环境与其它工具](https://blog.zshipu.com/2019/10/15/golang/20191015/03.0/)

    *   3.1 [Go 开发环境的基本要求](https://blog.zshipu.com/2019/10/15/golang/20191015/03.1/)
    *   3.2 [编辑器和集成开发环境](https://blog.zshipu.com/2019/10/15/golang/20191015/03.2/)
    *   3.3 [调试器](https://blog.zshipu.com/2019/10/15/golang/20191015/03.3/)
    *   3.4 [构建并运行 Go 程序](https://blog.zshipu.com/2019/10/15/golang/20191015/03.4/)
    *   3.5 [格式化代码](https://blog.zshipu.com/2019/10/15/golang/20191015/03.5/)
    *   3.6 [生成代码文档](https://blog.zshipu.com/2019/10/15/golang/20191015/03.6/)
    *   3.7 [其它工具](https://blog.zshipu.com/2019/10/15/golang/20191015/03.7/)
    *   3.8 [Go 性能说明](https://blog.zshipu.com/2019/10/15/golang/20191015/03.8/)
    *   3.9 [与其它语言进行交互](https://blog.zshipu.com/2019/10/15/golang/20191015/03.9/)

## [](#第二部分：语言的核心结构与技术 "第二部分：语言的核心结构与技术")第二部分：语言的核心结构与技术

*   第4章：基本结构和基本数据类型

    *   4.1 [文件名、关键字与标识符](https://blog.zshipu.com/2019/10/15/golang/20191015/04.1/)
    *   4.2 [Go 程序的基本结构和要素](https://blog.zshipu.com/2019/10/15/golang/20191015/04.2/)
    *   4.3 [常量](https://blog.zshipu.com/2019/10/15/golang/20191015/04.3/)
    *   4.4 [变量](https://blog.zshipu.com/2019/10/15/golang/20191015/04.4/)
    *   4.5 [基本类型和运算符](https://blog.zshipu.com/2019/10/15/golang/20191015/04.5/)
    *   4.6 [字符串](https://blog.zshipu.com/2019/10/15/golang/20191015/04.6/)
    *   4.7 [strings 和 strconv 包](https://blog.zshipu.com/2019/10/15/golang/20191015/04.7/)
    *   4.8 [时间和日期](https://blog.zshipu.com/2019/10/15/golang/20191015/04.8/)
    *   4.9 [指针](https://blog.zshipu.com/2019/10/15/golang/20191015/04.9/)

*   第5章：[控制结构](https://blog.zshipu.com/2019/10/15/golang/20191015/05.0/)

    *   5.1 [if-else 结构](https://blog.zshipu.com/2019/10/15/golang/20191015/05.1/)
    *   5.2 [测试多返回值函数的错误](https://blog.zshipu.com/2019/10/15/golang/20191015/05.2/)
    *   5.3 [switch 结构](https://blog.zshipu.com/2019/10/15/golang/20191015/05.3/)
    *   5.4 [for 结构](https://blog.zshipu.com/2019/10/15/golang/20191015/05.4/)
    *   5.5 [Break 与 continue](https://blog.zshipu.com/2019/10/15/golang/20191015/05.5/)
    *   5.6 [标签与 goto](https://blog.zshipu.com/2019/10/15/golang/20191015/05.6/)

*   第6章：[函数（function）](https://blog.zshipu.com/2019/10/15/golang/20191015/06.0/)

    *   6.1 [介绍](https://blog.zshipu.com/2019/10/15/golang/20191015/06.1/)
    *   6.2 [函数参数与返回值](https://blog.zshipu.com/2019/10/15/golang/20191015/06.2/)
    *   6.3 [传递变长参数](https://blog.zshipu.com/2019/10/15/golang/20191015/06.3/)
    *   6.4 [defer 和追踪](https://blog.zshipu.com/2019/10/15/golang/20191015/06.4/)
    *   6.5 [内置函数](https://blog.zshipu.com/2019/10/15/golang/20191015/06.5/)
    *   6.6 [递归函数](https://blog.zshipu.com/2019/10/15/golang/20191015/06.6/)
    *   6.7 [将函数作为参数](https://blog.zshipu.com/2019/10/15/golang/20191015/06.7/)
    *   6.8 [闭包](https://blog.zshipu.com/2019/10/15/golang/20191015/06.8/)
    *   6.9 [应用闭包：将函数作为返回值](https://blog.zshipu.com/2019/10/15/golang/20191015/06.9/)
    *   6.10 [使用闭包调试](https://blog.zshipu.com/2019/10/15/golang/20191015/06.10/)
    *   6.11 [计算函数执行时间](https://blog.zshipu.com/2019/10/15/golang/20191015/06.11/)
    *   6.12 [通过内存缓存来提升性能](https://blog.zshipu.com/2019/10/15/golang/20191015/06.12/)

*   第7章：[数组与切片](https://blog.zshipu.com/2019/10/15/golang/20191015/07.0/)

    *   7.1 [声明和初始化](https://blog.zshipu.com/2019/10/15/golang/20191015/07.1/)
    *   7.2 [切片](https://blog.zshipu.com/2019/10/15/golang/20191015/07.2/)
    *   7.3 [For-range 结构](https://blog.zshipu.com/2019/10/15/golang/20191015/07.3/)
    *   7.4 [切片重组（reslice）](https://blog.zshipu.com/2019/10/15/golang/20191015/07.4/)
    *   7.5 [切片的复制与追加](https://blog.zshipu.com/2019/10/15/golang/20191015/07.5/)
    *   7.6 [字符串、数组和切片的应用](https://blog.zshipu.com/2019/10/15/golang/20191015/07.6/)

*   第8章：[Map](https://blog.zshipu.com/2019/10/15/golang/20191015/08.0/)

    *   8.1 [声明、初始化和 make](https://blog.zshipu.com/2019/10/15/golang/20191015/08.1/)
    *   8.2 [测试键值对是否存在及删除元素](https://blog.zshipu.com/2019/10/15/golang/20191015/08.2/)
    *   8.3 [for-range 的配套用法](https://blog.zshipu.com/2019/10/15/golang/20191015/08.3/)
    *   8.4 [map 类型的切片](https://blog.zshipu.com/2019/10/15/golang/20191015/08.4/)
    *   8.5 [map 的排序](https://blog.zshipu.com/2019/10/15/golang/20191015/08.5/)
    *   8.6 [将 map 的键值对调](https://blog.zshipu.com/2019/10/15/golang/20191015/08.6/)

*   第9章：[包（package）](https://blog.zshipu.com/2019/10/15/golang/20191015/09.0/)

    *   9.1 [标准库概述](https://blog.zshipu.com/2019/10/15/golang/20191015/09.1/)
    *   9.2 [regexp 包](https://blog.zshipu.com/2019/10/15/golang/20191015/09.2/)
    *   9.3 [锁和 sync 包](https://blog.zshipu.com/2019/10/15/golang/20191015/09.3/)
    *   9.4 [精密计算和 big 包](https://blog.zshipu.com/2019/10/15/golang/20191015/09.4/)
    *   9.5 [自定义包和可见性](https://blog.zshipu.com/2019/10/15/golang/20191015/09.5/)
    *   9.6 [为自定义包使用 godoc](https://blog.zshipu.com/2019/10/15/golang/20191015/09.6/)
    *   9.7 [使用 go install 安装自定义包](https://blog.zshipu.com/2019/10/15/golang/20191015/09.7/)
    *   9.8 [自定义包的目录结构、go install 和 go test](https://blog.zshipu.com/2019/10/15/golang/20191015/09.8/)
    *   9.9 [通过 Git 打包和安装](https://blog.zshipu.com/2019/10/15/golang/20191015/09.9/)
    *   9.10 [Go 的外部包和项目](https://blog.zshipu.com/2019/10/15/golang/20191015/09.10/)
    *   9.11 [在 Go 程序中使用外部库](https://blog.zshipu.com/2019/10/15/golang/20191015/09.11/)

*   第10章：[结构（struct）与方法（method）](https://blog.zshipu.com/2019/10/15/golang/20191015/10.0/)

    *   10.1 [结构体定义](https://blog.zshipu.com/2019/10/15/golang/20191015/10.1/)
    *   10.2 [使用工厂方法创建结构体实例](https://blog.zshipu.com/2019/10/15/golang/20191015/10.2/)
    *   10.3 [使用自定义包中的结构体](https://blog.zshipu.com/2019/10/15/golang/20191015/10.3/)
    *   10.4 [带标签的结构体](https://blog.zshipu.com/2019/10/15/golang/20191015/10.4/)
    *   10.5 [匿名字段和内嵌结构体](https://blog.zshipu.com/2019/10/15/golang/20191015/10.5/)
    *   10.6 [方法](https://blog.zshipu.com/2019/10/15/golang/20191015/10.6/)
    *   10.7 [类型的 String() 方法和格式化描述符](https://blog.zshipu.com/2019/10/15/golang/20191015/10.7/)
    *   10.8 [垃圾回收和 SetFinalizer](https://blog.zshipu.com/2019/10/15/golang/20191015/10.8/)

*   第11章：[接口（interface）与反射（reflection）](https://blog.zshipu.com/2019/10/15/golang/20191015/11.0/)

    *   11.1 [接口是什么](https://blog.zshipu.com/2019/10/15/golang/20191015/11.1/)
    *   11.2 [接口嵌套接口](https://blog.zshipu.com/2019/10/15/golang/20191015/11.2/)
    *   11.3 [类型断言：如何检测和转换接口变量的类型](https://blog.zshipu.com/2019/10/15/golang/20191015/11.3/)
    *   11.4 [类型判断：type-switch](https://blog.zshipu.com/2019/10/15/golang/20191015/11.4/)
    *   11.5 [测试一个值是否实现了某个接口](https://blog.zshipu.com/2019/10/15/golang/20191015/11.5/)
    *   11.6 [使用方法集与接口](https://blog.zshipu.com/2019/10/15/golang/20191015/11.6/)
    *   11.7 [第一个例子：使用 Sorter 接口排序](https://blog.zshipu.com/2019/10/15/golang/20191015/11.7/)
    *   11.8 [第二个例子：读和写](https://blog.zshipu.com/2019/10/15/golang/20191015/11.8/)
    *   11.9 [空接口](https://blog.zshipu.com/2019/10/15/golang/20191015/11.9/)
    *   11.10 [反射包](https://blog.zshipu.com/2019/10/15/golang/20191015/11.10/)
    *   11.11 [Printf 和反射](https://blog.zshipu.com/2019/10/15/golang/20191015/11.11/)
    *   11.12 [接口与动态类型](https://blog.zshipu.com/2019/10/15/golang/20191015/11.12/)
    *   11.13 [总结：Go 中的面向对象](https://blog.zshipu.com/2019/10/15/golang/20191015/11.13/)
    *   11.14 [结构体、集合和高阶函数](https://blog.zshipu.com/2019/10/15/golang/20191015/11.14/)

## [](#第三部分：Go-高级编程 "第三部分：Go 高级编程")第三部分：Go 高级编程

*   第12章：[读写数据](https://blog.zshipu.com/2019/10/15/golang/20191015/12.0/)

    *   12.1 [读取用户的输入](https://blog.zshipu.com/2019/10/15/golang/20191015/12.1/)
    *   12.2 [文件读写](https://blog.zshipu.com/2019/10/15/golang/20191015/12.2/)
    *   12.3 [文件拷贝](https://blog.zshipu.com/2019/10/15/golang/20191015/12.3/)
    *   12.4 [从命令行读取参数](https://blog.zshipu.com/2019/10/15/golang/20191015/12.4/)
    *   12.5 [用 buffer 读取文件](https://blog.zshipu.com/2019/10/15/golang/20191015/12.5/)
    *   12.6 [用切片读写文件](https://blog.zshipu.com/2019/10/15/golang/20191015/12.6/)
    *   12.7 [用 defer 关闭文件](https://blog.zshipu.com/2019/10/15/golang/20191015/12.7/)
    *   12.8 [使用接口的实际例子：fmt.Fprintf](https://blog.zshipu.com/2019/10/15/golang/20191015/12.8/)
    *   12.9 [格式化 JSON 数据](https://blog.zshipu.com/2019/10/15/golang/20191015/12.9/)
    *   12.10 [XML 数据格式](https://blog.zshipu.com/2019/10/15/golang/20191015/12.10/)
    *   12.11 [用 Gob 传输数据](https://blog.zshipu.com/2019/10/15/golang/20191015/12.11/)
    *   12.12 [Go 中的密码学](https://blog.zshipu.com/2019/10/15/golang/20191015/12.12/)

*   第13章：[错误处理与测试](https://blog.zshipu.com/2019/10/15/golang/20191015/13.0/)

    *   13.1 [错误处理](https://blog.zshipu.com/2019/10/15/golang/20191015/13.1/)
    *   13.2 [运行时异常和 panic](https://blog.zshipu.com/2019/10/15/golang/20191015/13.2/)
    *   13.3 [从 panic 中恢复（Recover）](https://blog.zshipu.com/2019/10/15/golang/20191015/13.3/)
    *   13.4 [自定义包中的错误处理和 panicking](https://blog.zshipu.com/2019/10/15/golang/20191015/13.4/)
    *   13.5 [一种用闭包处理错误的模式](https://blog.zshipu.com/2019/10/15/golang/20191015/13.5/)
    *   13.6 [启动外部命令和程序](https://blog.zshipu.com/2019/10/15/golang/20191015/13.6/)
    *   13.7 [Go 中的单元测试和基准测试](https://blog.zshipu.com/2019/10/15/golang/20191015/13.7/)
    *   13.8 [测试的具体例子](https://blog.zshipu.com/2019/10/15/golang/20191015/13.8/)
    *   13.9 [用（测试数据）表驱动测试](https://blog.zshipu.com/2019/10/15/golang/20191015/13.9/)
    *   13.10 [性能调试：分析并优化 Go 程序](https://blog.zshipu.com/2019/10/15/golang/20191015/13.10/)

*   第14章：[协程（goroutine）与通道（channel）](https://blog.zshipu.com/2019/10/15/golang/20191015/14.0/)

    *   14.1 [并发、并行和协程](https://blog.zshipu.com/2019/10/15/golang/20191015/14.1/)
    *   14.2 [使用通道进行协程间通信](https://blog.zshipu.com/2019/10/15/golang/20191015/14.2/)
    *   14.3 [协程同步：关闭通道-对阻塞的通道进行测试](https://blog.zshipu.com/2019/10/15/golang/20191015/14.3/)
    *   14.4 [使用 select 切换协程](https://blog.zshipu.com/2019/10/15/golang/20191015/14.4/)
    *   14.5 [通道，超时和计时器（Ticker）](https://blog.zshipu.com/2019/10/15/golang/20191015/14.5/)
    *   14.6 [协程和恢复（recover）](https://blog.zshipu.com/2019/10/15/golang/20191015/14.6/)
    *   14.7 [新旧模型对比：任务和worker](https://blog.zshipu.com/2019/10/15/golang/20191015/14.7/)
    *   14.8 [惰性生成器的实现](https://blog.zshipu.com/2019/10/15/golang/20191015/14.8/)
    *   14.9 [实现 Futures 模式](https://blog.zshipu.com/2019/10/15/golang/20191015/14.9/)
    *   14.10 [复用](https://blog.zshipu.com/2019/10/15/golang/20191015/14.10/)
    *   14.11 [限制同时处理的请求数](https://blog.zshipu.com/2019/10/15/golang/20191015/14.11/)
    *   14.12 [链式协程](https://blog.zshipu.com/2019/10/15/golang/20191015/14.12/)
    *   14.13 [在多核心上并行计算](https://blog.zshipu.com/2019/10/15/golang/20191015/14.13/)
    *   14.14 [并行化大量数据的计算](https://blog.zshipu.com/2019/10/15/golang/20191015/14.14/)
    *   14.15 [漏桶算法](https://blog.zshipu.com/2019/10/15/golang/20191015/14.15/)
    *   14.16 [对Go协程进行基准测试](https://blog.zshipu.com/2019/10/15/golang/20191015/14.16/)
    *   14.17 [使用通道并发访问对象](https://blog.zshipu.com/2019/10/15/golang/20191015/14.17/)

*   第15章：[网络、模版与网页应用](https://blog.zshipu.com/2019/10/15/golang/20191015/15.0/)

    *   15.1 [tcp服务器](https://blog.zshipu.com/2019/10/15/golang/20191015/15.1/)
    *   15.2 [一个简单的web服务器](https://blog.zshipu.com/2019/10/15/golang/20191015/15.2/)
    *   15.3 [访问并读取页面数据](https://blog.zshipu.com/2019/10/15/golang/20191015/15.3/)
    *   15.4 [写一个简单的网页应用](https://blog.zshipu.com/2019/10/15/golang/20191015/15.4/)
    *   15.5 [确保网页应用健壮](https://blog.zshipu.com/2019/10/15/golang/20191015/15.5/)
    *   15.6 [用模板编写网页应用](https://blog.zshipu.com/2019/10/15/golang/20191015/15.6/)
    *   15.7 [探索 template 包](https://blog.zshipu.com/2019/10/15/golang/20191015/15.7/)
    *   15.8 [精巧的多功能网页服务器](https://blog.zshipu.com/2019/10/15/golang/20191015/15.8/)
    *   15.9 [用 rpc 实现远程过程调用](https://blog.zshipu.com/2019/10/15/golang/20191015/15.9/)
    *   15.10 [基于网络的通道 netchan](https://blog.zshipu.com/2019/10/15/golang/20191015/15.10/)
    *   15.11 [与 websocket 通信](https://blog.zshipu.com/2019/10/15/golang/20191015/15.11/)
    *   15.12 [用 smtp 发送邮件](https://blog.zshipu.com/2019/10/15/golang/20191015/15.12/)

## [](#第四部分：实际应用 "第四部分：实际应用")第四部分：实际应用

第16章：[常见的陷阱与错误](https://blog.zshipu.com/2019/10/15/golang/20191015/16.0/)

*   16.1 [误用短声明导致变量覆盖](https://blog.zshipu.com/2019/10/15/golang/20191015/16.1/)
*   16.2 [误用字符串](https://blog.zshipu.com/2019/10/15/golang/20191015/16.2/)
*   16.3 [发生错误时使用defer关闭一个文件](https://blog.zshipu.com/2019/10/15/golang/20191015/16.3/)
*   16.4 [何时使用new()和make()](https://blog.zshipu.com/2019/10/15/golang/20191015/16.4/)
*   16.5 [不需要将一个指向切片的指针传递给函数](https://blog.zshipu.com/2019/10/15/golang/20191015/16.5/)
*   16.6 [使用指针指向接口类型](https://blog.zshipu.com/2019/10/15/golang/20191015/16.6/)
*   16.7 [使用值类型时误用指针](https://blog.zshipu.com/2019/10/15/golang/20191015/16.7/)
*   16.8 [误用协程和通道](https://blog.zshipu.com/2019/10/15/golang/20191015/16.8/)
*   16.9 [闭包和协程的使用](https://blog.zshipu.com/2019/10/15/golang/20191015/16.9/)
*   16.10 [糟糕的错误处理](https://blog.zshipu.com/2019/10/15/golang/20191015/16.10/)

第17章：[模式](https://blog.zshipu.com/2019/10/15/golang/20191015/17.0/)

*   17.1 [逗号ok模式](https://blog.zshipu.com/2019/10/15/golang/20191015/17.1/)
*   17.2 [defer 模式](https://blog.zshipu.com/2019/10/15/golang/20191015/17.2/)
*   17.3 [可见性模式](https://blog.zshipu.com/2019/10/15/golang/20191015/17.3/)
*   17.4 [运算符模式和接口](https://blog.zshipu.com/2019/10/15/golang/20191015/17.4/)

第18章：[出于性能考虑的实用代码片段](https://blog.zshipu.com/2019/10/15/golang/20191015/18.0/)

*   18.1 [字符串](https://blog.zshipu.com/2019/10/15/golang/20191015/18.1/)
*   18.2 [数组和切片](https://blog.zshipu.com/2019/10/15/golang/20191015/18.2/)
*   18.3 [映射](https://blog.zshipu.com/2019/10/15/golang/20191015/18.3/)
*   18.4 [结构体](https://blog.zshipu.com/2019/10/15/golang/20191015/18.4/)
*   18.5 [接口](https://blog.zshipu.com/2019/10/15/golang/20191015/18.5/)
*   18.6 [函数](https://blog.zshipu.com/2019/10/15/golang/20191015/18.6/)
*   18.7 [文件](https://blog.zshipu.com/2019/10/15/golang/20191015/18.7/)
*   18.8 [协程（goroutine）与通道（channel）](https://blog.zshipu.com/2019/10/15/golang/20191015/18.8/)
*   18.9 [网络和网页应用](https://blog.zshipu.com/2019/10/15/golang/20191015/18.9/)
*   18.10 [其他](https://blog.zshipu.com/2019/10/15/golang/20191015/18.10/)
*   18.11 [出于性能考虑的最佳实践和建议](https://blog.zshipu.com/2019/10/15/golang/20191015/18.11/)
