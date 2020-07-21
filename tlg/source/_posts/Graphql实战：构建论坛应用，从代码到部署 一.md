
title: Graphql实战：构建论坛应用，从代码到部署 一
author: 知识铺
date: 2020-07-09 11:48:06
tags:
---
 
# [](https://zshipu.com/t?url=#the-stack)<font _mstmutation="1" _msthash="289380" _msttexthash="4820322">堆栈</font>

以下是我计划使用的堆栈的一些详细信息。

## [](https://zshipu.com/t?url=#backend)<font _mstmutation="1" _msthash="290251" _msttexthash="4192890">后台</font>

*   <font _mstmutation="1" _msthash="443625" _msttexthash="17818931">[PostgreSQL](https://zshipu.com/t?url=https://www.postgresql.org/)数据库</font>
*   [postgresql](https://zshipu.com/t?url=https://rubyonrails.org/)
*   <font _mstmutation="1" _msthash="444353" _msttexthash="114552763">[GraphQL（](https://zshipu.com/t?url=https://graphql.org/)以节省前端和后端的时间）</font>

## [](https://zshipu.com/t?url=#frontend)<font _mstmutation="1" _msthash="290849" _msttexthash="5190263">前端</font>

*   [nodejs](https://zshipu.com/t?url=https://nodejs.org/)
*   <font _mstmutation="1" _msthash="462111" _msttexthash="76986728">[react](https://zshipu.com/t?url=https://reactjs.org/)（使用创建react应用程序）</font>
*   <font _mstmutation="1" _msthash="462488" _msttexthash="65990834">[Redux](https://zshipu.com/t?url=https://redux.js.org/) （也许反应钩代替）</font>
*   <font _mstmutation="1" _msthash="462865" _msttexthash="397687485">[Bulma](https://zshipu.com/t?url=https://bulma.io/)通过[rbx](https://zshipu.com/t?url=https://github.com/dfee/rbx) （我绝对不是世界上最好的前端开发人员， 我发现 Bulma 易于使用和自定义）</font>

## [](https://zshipu.com/t?url=#testing-and-continuous-integration)<font _mstmutation="1" _msthash="303745" _msttexthash="27006538">测试和持续集成</font>

*   <font _mstmutation="1" _msthash="462358" _msttexthash="26892229">[后端](https://zshipu.com/t?url=https://github.com/seattlerb/minitest)的迷你测试</font>
*   <font _mstmutation="1" _msthash="462735" _msttexthash="17094428">[前端](https://zshipu.com/t?url=https://jestjs.io/)的玩笑</font>
*   <font _mstmutation="1" _msthash="463112" _msttexthash="35449583">[持续集成 CI](https://zshipu.com/t?url=https://travis-ci.org/)持续集成</font>

## [](https://zshipu.com/t?url=#deployment)<font _mstmutation="1" _msthash="304369" _msttexthash="6768840">部署</font>

*   [docker](https://zshipu.com/t?url=https://www.docker.com/)
*   各种[亚马逊网络服务](https://zshipu.com/t?url=https://aws.amazon.com/)（可能是EC2，但可能是弹性豆茎，AWS放大或法盖特，如果EC2证明太难使用）。

## [](https://zshipu.com/t?url=#development-environment)<font _mstmutation="1" _msthash="304993" _msttexthash="10855273">开发环境</font>

我将使用 Ubuntu 20.04 作为我的开发环境，但是一切都应该在 Mac 上工作得很好。不幸的是，Ruby 在 Rails 和 Docker 上似乎只有部分 Windows 支持，因此 Windows 用户将不得不使用用于 Linux 的 Windows 子系统的 Ubuntu 发行版。

我将使用可视化工作室代码作为我的编辑器。

# [](https://zshipu.com/t?url=#road-map)<font _mstmutation="1" _msthash="305656" _msttexthash="9286563">路线图</font>

以下是我希望在此系列中介绍的简要概述：

1.  后端
    a. 域建模和生成
    模型 b. 编写模型测试， 并集成
    持续集成 Ci c. Graphql 介绍， 编写类型和突变我们的模型

2.  前端
    a. 线框和组件层次结构
    b. 编写测试和构建基本
    组件 c. 添加
    Graphql 查询 d. 将所有内容捆绑在一起

3.  部署
    a. 为前端和后端 b.
    配置亚马逊服务创建 Docker 容器


