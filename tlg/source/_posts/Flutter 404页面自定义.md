
title: Flutter 404页面自定义
author: 知识铺
date: 2020-06-25 19:22:33
tags:
---
 
<noscript>![](https://miro.medium.com/max/1700/1*eU-430nepv8cz3OYLIycng.png)</noscript>

<font _mstmutation="1" _msthash="29250" _msttexthash="1177131462">Flutter 已经发布了 Web 支持，允许您创建动态网站。Flutter 支持处理可能来自 Web 使用的任何错误，如 404 错误。但是，如何为您的 Flutter 应用程序创建自定义 404 页？</font>

<font _mstmutation="1" _msthash="23946" _msttexthash="218155951">本文介绍如何创建用户导航到不存在的页面时显示的自定义页面。</font>

# <font _mstmutation="1" _msthash="23491" _msttexthash="97018220">如何将客户端重定向到 Flutter 中的自定义 404 页</font>

<font _mstmutation="1" _msthash="28561" _msttexthash="2478892091">浏览互联网时，每个人都遇到"404：页面未发现错误"。Flutter 通过自动将您重定向到初始路由来处理此问题。这通常是应用程序的主页。但是，如果你想有一个花哨的404页面，像[在AirBnb，GitHub，](https://zshipu.com/t?url=https://36bvmt283fg61unuud3h7qua-wpengine.netdna-ssl.com/wp-content/uploads/2013/03/airbnb-404.gif)甚至[Flutter网站](https://zshipu.com/t?url=https://flutter.dev/foo)？ [](https://zshipu.com/t?url=https://mamchenkov.net/wordpress/wp-content/uploads/2013/11/github-404.png)您可以使用 Flutter 轻松执行此操作。</font>

<font _mstmutation="1" _msthash="29913" _msttexthash="790461373">要创建自定义 404 页，应用程序需要使用 、 或小部件。大多数应用程序使用这三个小部件之一;它是创建 Flutter 应用程序时调用的第一个小部件。</font>
```
MaterialApp
```

```
CupertinoApp
```

```
WidgetsApp
```


<font _mstmutation="1" _msthash="28210" _msttexthash="156245427">材料应用配置顶级导航器以按以下顺序搜索路由：</font>

1.  <font _mstmutation="1" _msthash="33124" _msttexthash="112670090">对于路由，将使用属性（如果为非 null）。</font> 
```
/
```

```
[home](https://zshipu.com/t?url=https://api.flutter.dev/flutter/material/MaterialApp/home.html)
```

2.  <font _mstmutation="1" _msthash="38545" _msttexthash="130251511">否则，如果表具有路由的条目，则使用该表。</font>
```
[routes](https://zshipu.com/t?url=https://api.flutter.dev/flutter/material/MaterialApp/routes.html)
```

3.  <font _mstmutation="1" _msthash="38805" _msttexthash="242454550">否则，如果提供，则调用。它应返回 和 未处理的任何有效路由的非 null 值。</font>
```
[onGenerateRoute](https://zshipu.com/t?url=https://api.flutter.dev/flutter/material/MaterialApp/onGenerateRoute.html)
```

```
[home](https://zshipu.com/t?url=https://api.flutter.dev/flutter/material/MaterialApp/home.html)
```

```
[routes](https://zshipu.com/t?url=https://api.flutter.dev/flutter/material/MaterialApp/routes.html)
```

4.  <font _mstmutation="1" _msthash="33046" _msttexthash="76586965">最后，如果所有其他失败都调用。</font>
```
[onUnknownRoute](https://zshipu.com/t?url=https://api.flutter.dev/flutter/material/MaterialApp/onUnknownRoute.html)
```


<font _mstmutation="1" _msthash="32773" _msttexthash="1885247780">如果路由未在这些表中处理，则它使用 属性来处理导航。此回调通常用于错误处理。例如，此函数可能始终生成描述未找到的路由的"未找到"页面。未知路由可能由应用中的错误或外部请求（如来自 Android 意图）产生。</font>
```
[onUnknownRoute](https://zshipu.com/t?url=https://api.flutter.dev/flutter/material/MaterialApp/onUnknownRoute.html)
```


<font _mstmutation="1" _msthash="27638" _msttexthash="451751534">下面的示例代码演示如何为 属性定义匿名函数，该函数采用 .以下代码段显示了定义属性是多么简单：</font>
```
onUnknownRoute
```

```
RouteFactory
```

```
RouteSettings function
```

```
Route
```

```
onUnknownRoute
```


onUnknownRoute: (settings) { return MaterialPageRoute(builder: (_) => PageNotFound());},

<font _mstmutation="1" _msthash="26338" _msttexthash="1129899199">PageNotFound是一个自定义的小部件，创建404页。此页面可能会解释发生的情况，并将用户重定向到主页，但在创建 404 页面时，您可以随心所欲地创作。</font>

# <font _mstmutation="1" _msthash="23777" _msttexthash="10191480">闭幕词</font>

<font _mstmutation="1" _msthash="28587" _msttexthash="790267608">创建 Flutter 应用程序时，处理可能出现的任何问题非常重要。使用 中的 属性，或允许您处理网站中不可避免的"页面未找到"错误。</font>
```
onUnknownRoute
```

```
MaterialApp
```

```
CupertinoApp
```

```
WidgetApp
```


