
title: 用于 Flutter 开发人员的新工具，内置于 Flutter
author: 知识铺
date: 2020-06-25 19:06:02
tags:
---


<font _mstmutation="1" _msthash="33423" _msttexthash="1973064262">发布新版本的 Dart DevTools，我们的工具套件用于对 Dart 和 Flutter 代码进行调试和性能分析。它在Flutter中从零开始重建。此版本添加了一些改进，例如对性能和内存页的更新，以及一个全新的网络页。</font>

<font _mstmutation="1" _msthash="32331" _msttexthash="1345105047">许多人知道 Flutter 的热重新加载功能，允许您在移动应用运行时对其进行更改。但是，热重新加载只是我们为您提供的一套工具之一，可帮助您编写、测试、调试和分析你的应用。</font>

 ![](https://miro.medium.com/max/60/0*VLibsxLD9Wv35Pr8?q=20)

![](https://miro.medium.com/max/1600/0*VLibsxLD9Wv35Pr8)

<noscript>![](https://miro.medium.com/max/3200/0*VLibsxLD9Wv35Pr8)</noscript>

<font _mstmutation="1" _msthash="22854" _msttexthash="2502695780">让我们先花点时间讨论一下为什么我们首先重建了 DevTools。简短的回答是生产力和质量。Flutter 团队了解 Flutter 在构建美观、高性能的 UIs 时带来的生产力优势，我们希望这些好处。这种工作效率不仅使我们能够重建 DevTools，而且在此过程中添加新功能。</font>

<font _mstmutation="1" _msthash="40586" _msttexthash="2276652937">我们选择将 DevTools 作为 Web 应用程序发货，因为我们很容易集成到所有目标平台和 IDEs 的现有工具体验中。以网络为头脑的建设也使我们能够走在客户的立场上;在此过程中，我们了解了（并修复了）一些性能问题，如滚动性能。</font>

<font _mstmutation="1" _msthash="23855" _msttexthash="2858021894">我们还一直在评估作为编译的桌面应用程序运输 DevTools 的好处，到目前为止，结果很有希望。选择 Flutter 的一个主要好处是，选择分发模型是我们在编写代码_后_可以做的事情，而不是我们必须做出的第一个决定。许多客户还告诉我们，这是一个有吸引力的功能，Flutter。</font>

<font _mstmutation="1" _msthash="32968" _msttexthash="1161633746">现在，我们已经讨论了一些关于 DevTools 的近过去和新的未来，让我们深入了解每个 Flutter 开发人员可用的_所有主要_工具的快速概述。因为 DevTools 并不是唯一值得您关注的工具。</font>

# <font _mstmutation="1" _msthash="27651" _msttexthash="13493779">基础知识</font>

<font _mstmutation="1" _msthash="38116" _msttexthash="1589337737">当然，有该工具，它在调试模式下运行你的应用，执行热重新加载，生成APK和IPA，以及更多。该工具以 Dart 编写，并在命令行上运行，因此无论您喜欢哪个操作系统或编辑器，您都可以使用 Flutter。</font>

 ![](https://miro.medium.com/max/60/0*iVa4x2t2lP9ohPN4?q=20)

![](https://miro.medium.com/max/1600/0*iVa4x2t2lP9ohPN4)

<noscript>![](https://miro.medium.com/max/3200/0*iVa4x2t2lP9ohPN4)</noscript>

<font _mstmutation="1" _msthash="27456" _msttexthash="275535845">Dart 分析服务器在各种 IDE 中提供静态分析和智能。这意味着您能够完成代码...</font>

 ![](https://miro.medium.com/max/60/0*JElGgGi_Kf6KM7nx?q=20)

![](https://miro.medium.com/max/1592/0*JElGgGi_Kf6KM7nx)

<noscript>![](https://miro.medium.com/max/3184/0*JElGgGi_Kf6KM7nx)</noscript>

<font _mstmutation="1" _msthash="3440060" _msttexthash="192779574">这恰好是VS代码，但这里的所有示例当然在 Android Studio 中也起作用。</font>

<font _mstmutation="1" _msthash="32357" _msttexthash="129761697">...错误突出显示链接到有关如何[修复它们](https://zshipu.com/t?url=https://dart.dev/tools/diagnostic-messages)的文档...</font>

 ![](https://miro.medium.com/max/60/1*KRIuvikDtgXpHSIgGe9a9Q.png?q=20)

![](https://miro.medium.com/max/2734/1*KRIuvikDtgXpHSIgGe9a9Q.png)

<noscript>![](https://miro.medium.com/max/5468/1*KRIuvikDtgXpHSIgGe9a9Q.png)</noscript>

<font _mstmutation="1" _msthash="3440061" _msttexthash="402765363">对于最常见的静态错误，IEs 链接到错误消息的较长版本，包括示例代码和常见修补程序。</font>

<font _mstmutation="1" _msthash="39429" _msttexthash="30581447">...和聪明的绒毛。</font>

 ![](https://miro.medium.com/max/60/1*VqwAbaGamLPA-v6icQJOVQ.png?q=20)

![](https://miro.medium.com/max/1572/1*VqwAbaGamLPA-v6icQJOVQ.png)

<noscript>![](https://miro.medium.com/max/3144/1*VqwAbaGamLPA-v6icQJOVQ.png)</noscript>

<font _mstmutation="1" _msthash="3440062" _msttexthash="175701981">在这里，分析器检测创建 Sink 但从不关闭 - 可能存在内存泄漏。</font>

<font _mstmutation="1" _msthash="27599" _msttexthash="575125460">分析服务器也可以使用[语言服务器协议](https://zshipu.com/t?url=https://microsoft.github.io/language-server-protocol/)，这意味着使用它的所有开发人员工具（[并且有许多](https://zshipu.com/t?url=https://microsoft.github.io/language-server-protocol/implementors/tools/)）可以很容易地支持它。</font>

# <font _mstmutation="1" _msthash="28132" _msttexthash="16858998">UI 代码帮助器</font>

<font _mstmutation="1" _msthash="33424" _msttexthash="693513860">使用 Flutter，您可以通过创建小部件树在代码中构建 UI。这意味着许多 Dart 代码以嵌套构造函数的形式出现，如下所示：</font>

return MaterialApp(
  title: 'My app',
  home: Scaffold(
    appBar: AppBar(
      title: Text('Welcome'),
    ),
    body: Column(
      ...
    ),
  ),
);

<font _mstmutation="1" _msthash="27573" _msttexthash="274052792">颤动工具使使用这样的代码变得更加容易。UI 指南突出显示要构建的小部件树。</font>

 ![](https://miro.medium.com/max/60/1*iG8tpvV34F3XOXyzLC2U0Q.png?q=20)

![](https://miro.medium.com/max/1078/1*iG8tpvV34F3XOXyzLC2U0Q.png)

<noscript>![](https://miro.medium.com/max/2156/1*iG8tpvV34F3XOXyzLC2U0Q.png)</noscript>

<font _mstmutation="1" _msthash="3440063" _msttexthash="128627096">左侧的行称为 UI 参考线，显式可视化小部件树。</font>

<font _mstmutation="1" _msthash="33930" _msttexthash="110350539">尾随注释可以显示哪个方括号属于哪个小部件。</font>

 ![](https://miro.medium.com/max/60/1*e2q4GYtedlU7b-TKLgnRyg.png?q=20)

![](https://miro.medium.com/max/1172/1*e2q4GYtedlU7b-TKLgnRyg.png)

<noscript>![](https://miro.medium.com/max/2344/1*e2q4GYtedlU7b-TKLgnRyg.png)</noscript>

<font _mstmutation="1" _msthash="3440064" _msttexthash="151469019">此处的注释由 IDE 显示，但实际上不是文件的一部分。</font>

<font _mstmutation="1" _msthash="33956" _msttexthash="248199978">智能重构可帮助您在几个笔画中修改树，例如用新父项包装树的一部分...</font>

 ![](https://miro.medium.com/freeze/max/60/1*sVn-oXHO2jW9sWpxG82njg.gif?q=20)

![](https://miro.medium.com/max/1019/1*sVn-oXHO2jW9sWpxG82njg.gif)

<noscript>![](https://miro.medium.com/max/2038/1*sVn-oXHO2jW9sWpxG82njg.gif)</noscript>

<font _mstmutation="1" _msthash="3440065" _msttexthash="44018923">用大小框包装图标按钮。</font>

<font _mstmutation="1" _msthash="39117" _msttexthash="37560302">...和移动小部件周围。</font>

 ![](https://miro.medium.com/freeze/max/60/1*umZpq9lqGCrOyBJiTPKHsw.gif?q=20)

![](https://miro.medium.com/max/602/1*umZpq9lqGCrOyBJiTPKHsw.gif)

<noscript>![](https://miro.medium.com/max/1204/1*umZpq9lqGCrOyBJiTPKHsw.gif)</noscript>

# <font _mstmutation="1" _msthash="32877" _msttexthash="9968127">开发工具</font>

<font _mstmutation="1" _msthash="33020" _msttexthash="608069930">然后是 DevTools，一套在浏览器中运行的独立工具套件。它们提供了其他遥测和功能，这些遥测和功能在 IDE 中不实用。</font>

 ![](https://miro.medium.com/freeze/max/60/1*hcoGwr98wOif8v6rNJajUw.gif?q=20)

![](https://miro.medium.com/max/973/1*hcoGwr98wOif8v6rNJajUw.gif)

<noscript>![](https://miro.medium.com/max/1946/1*hcoGwr98wOif8v6rNJajUw.gif)</noscript>

<font _mstmutation="1" _msthash="3440066" _msttexthash="70245695">开发人员工具在浏览器窗口中打开。</font>

<font _mstmutation="1" _msthash="35438" _msttexthash="1087635107">我们本周推出的 DevTools 是用"颤动"编写的。（它们以前用飞镖编写，但不使用 Flutter 框架。这是从头开始完全重写，这为改进 UI 和添加全新的功能提供了机会。</font>

 ![](https://miro.medium.com/max/60/1*Z7TXqke4-9T7EaTKgNSTsw.png?q=20)

![](https://miro.medium.com/max/2724/1*Z7TXqke4-9T7EaTKgNSTsw.png)

<noscript>![](https://miro.medium.com/max/5448/1*Z7TXqke4-9T7EaTKgNSTsw.png)</noscript>

<font _mstmutation="1" _msthash="33306" _msttexthash="1155445928">第一个选项卡是["飘飘"检查器](https://zshipu.com/t?url=https://flutter.dev/docs/development/tools/devtools/inspector)，它是一个用于可视化和探索飞溅小部件树的工具。在此处，您可以在正在运行的应用中选择小部件、减慢所有动画速度、查看文本基线等。</font>

<mark class="uw ux ms" _msthash="29159" _msttexthash="2957644768">新功能之一是布局资源管理器，您可以在"详细信息树"旁边的"飘动检查器"选项卡中找到该功能。布局资源管理器允许您检查 Flutter 的灵活布局模型。当您不确定为什么一排小部件看起来不像您预期的那样时，或者为什么您收到"RenderFlex 溢出 42 像素"错误时，这可能是一个救命稻草。</mark>

 ![](https://miro.medium.com/max/60/1*2trBIvd2s8ToANRxsA8FIg.png?q=20)

![](https://miro.medium.com/max/2718/1*2trBIvd2s8ToANRxsA8FIg.png)

<noscript>![](https://miro.medium.com/max/5436/1*2trBIvd2s8ToANRxsA8FIg.png)</noscript>

<font _mstmutation="1" _msthash="44044" _msttexthash="524621292">在"动态检查器"选项卡旁边，您将找到三个专用于性能分析的选项卡：时间轴视图、内存视图和性能视图。</font>

<font _mstmutation="1" _msthash="34021" _msttexthash="693722185">["时间轴"视图](https://zshipu.com/t?url=https://flutter.dev/docs/development/tools/devtools/timeline)现在显示每个帧的生成时间以及火焰图。这样，在上下文中查看有问题的帧时，可以轻松地识别有问题的帧。</font>

 ![](https://miro.medium.com/max/60/1*8AbvqZly0A4dixM5yq6iQg.png?q=20)

![](https://miro.medium.com/max/2724/1*8AbvqZly0A4dixM5yq6iQg.png)

<noscript>![](https://miro.medium.com/max/5448/1*8AbvqZly0A4dixM5yq6iQg.png)</noscript>

<font _mstmutation="1" _msthash="27040" _msttexthash="2353444548">"时间轴"窗格还具有新的"轨道小部件生成"按钮，该按钮将应用中所有小部件的生成时间添加到时间线（牺牲配置文件生成性能为代价 - 这是默认情况下不打开的原因）。当您试图找出哪些小部件，确切地说，在慢帧后面时，这很方便。</font>

<font _mstmutation="1" _msthash="34203" _msttexthash="625500187">通过["内存"视图](https://zshipu.com/t?url=https://flutter.dev/docs/development/tools/devtools/memory)，您可以查看应用在给定时刻如何使用内存。此视图现在显示已分配内存的热图，并允许跟踪平台内存。</font>

 ![](https://miro.medium.com/max/60/1*syZl4n3gicB-CknSTb6X_A.png?q=20)

![](https://miro.medium.com/max/2728/1*syZl4n3gicB-CknSTb6X_A.png)

<noscript>![](https://miro.medium.com/max/5456/1*syZl4n3gicB-CknSTb6X_A.png)</noscript>

<font _mstmutation="1" _msthash="35035" _msttexthash="828938006">[性能视图](https://zshipu.com/t?url=https://flutter.dev/docs/development/tools/devtools/performance)是传统的 CPU 探查器。它允许您记录应用的会话，并查看 CPU 在哪些功能中花费了大部分时间。这通常用于决定将优化工作花费在何处。</font>

 ![](https://miro.medium.com/max/60/1*CE2_scmNy11X1Fl3zj7bGA.png?q=20)

![](https://miro.medium.com/max/2516/1*CE2_scmNy11X1Fl3zj7bGA.png)

<noscript>![](https://miro.medium.com/max/5032/1*CE2_scmNy11X1Fl3zj7bGA.png)</noscript>

<font _mstmutation="1" _msthash="35061" _msttexthash="862527952">DevTools甚至包括它自己的[调试器](https://zshipu.com/t?url=https://flutter.dev/docs/development/tools/devtools/debugger)。如果您不使用 IDE 进行开发，但仍希望添加断点、单步执行代码、查看变量值等，则此功能非常有用。</font>

 ![](https://miro.medium.com/max/60/1*BPb2b4wqKgGsitAaKuShUw.png?q=20)

![](https://miro.medium.com/max/2724/1*BPb2b4wqKgGsitAaKuShUw.png)

<noscript>![](https://miro.medium.com/max/5448/1*BPb2b4wqKgGsitAaKuShUw.png)</noscript>

<font _mstmutation="1" _msthash="28093" _msttexthash="3948454874">下一个选项卡是完全新的。"网络"视图允许您检查网络流量。您猜到了。您可以看到应用自启动以来发出的请求的整个历史记录，以及有关每个请求的详细信息。这样，在尝试调试网络问题时，您不必自行记录这些事件。"网络"选项卡当前显示 HTTP 流量;"网络"选项卡当前显示 HTTP 流量。未来的改进包括显示[一般套接字 I/O 流量](https://zshipu.com/t?url=https://github.com/flutter/devtools/issues/2044)。</font>

 ![](https://miro.medium.com/max/60/1*hdjm79pT22-sAwjQhFYr8A.png?q=20)

![](https://miro.medium.com/max/2726/1*hdjm79pT22-sAwjQhFYr8A.png)

<noscript>![](https://miro.medium.com/max/5452/1*hdjm79pT22-sAwjQhFYr8A.png)</noscript>

<font _mstmutation="1" _msthash="34164" _msttexthash="300993745">现在，您还可以在时间轴视图中查找网络请求，以便在上下文中看到这些请求。</font>

<font _mstmutation="1" _msthash="23556" _msttexthash="1811217746">["日志记录"视图](https://zshipu.com/t?url=https://flutter.dev/docs/development/tools/devtools/logging)显示来自应用和框架的事件。有了它，您可以轻松地筛选消息（例如，您可以指定筛选出垃圾回收器事件，或仅显示帧事件）。在 Dart 中，日志记录消息[可以结构化](https://zshipu.com/t?url=https://api.dart.dev/stable/dart-developer/log.html)，日志记录视图会利用这一点。</font>
```
-gc
```

```
flutter.frame
```


 ![](https://miro.medium.com/max/60/1*s-H2qFeoTWmdEnJOhG39Vw.png?q=20)

![](https://miro.medium.com/max/2714/1*s-H2qFeoTWmdEnJOhG39Vw.png)

<noscript>![](https://miro.medium.com/max/5428/1*s-H2qFeoTWmdEnJOhG39Vw.png)</noscript>

<font _mstmutation="1" _msthash="38883" _msttexthash="121808804">DevTools 适用于移动应用、桌面应用_和_Web 应用。</font>

 ![](https://miro.medium.com/max/60/1*eIyRlQ_O5COR9cGuMubUZw.png?q=20)

![](https://miro.medium.com/max/2968/1*eIyRlQ_O5COR9cGuMubUZw.png)

<noscript>![](https://miro.medium.com/max/5936/1*eIyRlQ_O5COR9cGuMubUZw.png)</noscript>

<font _mstmutation="1" _msthash="22672" _msttexthash="2895331088">将 DevTools 重写为 Flutter 具有许多好处：提高生产率、在客户的鞋子中行走以及自由选择目标平台。我们没有提到的一个好处是：在 Flutter 中重建 DevTools 会邀请社区更轻松地做出贡献。DevTools 总是在[开放中开发](https://zshipu.com/t?url=https://github.com/flutter/devtools/tree/master/packages/devtools_app)，但今天，大多数用户将熟悉其结构（从 ） 中开始。</font>
```
runApp(DevToolsApp(…)
```

```
[lib/main.dart](https://zshipu.com/t?url=https://github.com/flutter/devtools/blob/master/packages/devtools_app/lib/main.dart#L14-L16)
```


 ![](https://miro.medium.com/max/60/0*BHpYeXRNy6du98np?q=20)

![](https://miro.medium.com/max/536/0*BHpYeXRNy6du98np)

<noscript>![](https://miro.medium.com/max/1072/0*BHpYeXRNy6du98np)</noscript>

# <font _mstmutation="1" _msthash="29536" _msttexthash="5618353">总结</font>

<font _mstmutation="1" _msthash="31993" _msttexthash="615331327">工具对于 Flutter 开发人员体验至关重要。我们投入巨资，使之天更美好。但是，我们只能根据您的反馈做到这一点。</font>

<font _mstmutation="1" _msthash="23205" _msttexthash="1026438842">因此，立即升级到最新的 DevTools，并在你的应用中进行测试。 阅读[文档](https://zshipu.com/t?url=https://flutter.dev/docs/development/tools/devtools/overview)以了解所有隐藏的宝石。文件错误，如果你找到他们，或投票给[GitHub上的](https://zshipu.com/t?url=https://github.com/flutter/devtools/issues)新功能。</font>


