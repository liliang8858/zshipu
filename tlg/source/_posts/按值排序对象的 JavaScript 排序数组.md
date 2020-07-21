
title: 按值排序对象的 JavaScript 排序数组
author: 知识铺
date: 2020-05-31 15:32:48
tags:
---
 曾经拥有一组对象，需要根据特定值对其进行排序？
这是一个每个人都会经常遇到的问题，想象一下任何表表的价目表。

## [](https://zshipu.com/t?url=#javascript-sort-array-of-objects-by-value)<font _mstmutation="1" _msthash="288756" _msttexthash="60908341">按值排序对象的 JavaScript 排序数组</font>

<font _mstmutation="1" _msthash="276237" _msttexthash="66073501">让我们从以下对象数组开始：</font>

 <code>var products = [
  {
    color: 'white',
    price: 10,
    name: 'Basic T-shirt'
  },
  {
    color: 'red',
    price: 5,
    name: 'Cheap T-shirt'
  },
  {
    color: 'black',
    price: 50,
    name: 'Exclusive T-shirt'
  }
];</code> 

所以，看到这个列表，我们已经有一个快速的两个选项，我们希望根据颜色和价格排序。

现在，我们如何根据值进行排序？

<font _mstmutation="1" _msthash="277381" _msttexthash="34248604">我们可以使用 操纵器。</font>```sort``````Arrays```

 <code>products.sort((a, b) => (a.color > b.color ? 1 : -1));</code> 

<font _mstmutation="1" _msthash="277953" _msttexthash="894235108">正如您可以看到一个简单明了的函数，它将根据颜色进行排序并替换值，直到它完成。
您可以将此功能视为手动循环，但随后所有功能都为您完成。</font>```if...else```

<font _mstmutation="1" _msthash="290017" _msttexthash="79395134">至于价格，我们可以做以下几点：</font>

 <code>products.sort((a, b) => (a.price > b.price ? 1 : -1));</code> 

## [](https://zshipu.com/t?url=#sorting-on-the-second-parameter)<font _mstmutation="1" _msthash="304057" _msttexthash="40072786">对第二个参数进行排序</font>

<font _mstmutation="1" _msthash="290914" _msttexthash="329686851">因此，假设我们想要对颜色进行排序，但如果颜色相同，则要对价格进行排序。</font>

 <code>var productsPrice = [
  {
    color: 'white',
    price: 10,
    name: 'Basic T-shirt'
  },
  {
    color: 'white',
    price: 5,
    name: 'Cheap T-shirt'
  },
  {
    color: 'black',
    price: 50,
    name: 'Exclusive T-shirt'
  }
];

productsPrice.sort((a, b) =>
  a.color > b.color ? 1 : a.color === b.color ? (a.price > b.price ? 1 : -1) : -1
);</code> 

所以同样的设置，但我们使用回调功能来检查颜色是否相同，然后我们还需要检查价格！

您可以玩以下 Codepen。

在[CodePen](https://zshipu.com/t?url=https://codepen.io)上，由克里斯·邦格斯[（@rebelchris](https://zshipu.com/t?url=https://codepen.io/rebelchris)） 查看按值排列对象的笔[JavaScript 排序数组](https://zshipu.com/t?url=https://codepen.io/rebelchris/pen/wvKVPPJ)。

### [](https://zshipu.com/t?url=#thank-you-for-reading-and-lets-connect)<font _mstmutation="1" _msthash="306202" _msttexthash="80787096">感谢您的阅读，让我们连接！</font>

感谢您阅读我的博客。请随时订阅我的电子邮件通讯，并在[Facebook](https://zshipu.com/t?url=https://www.facebook.com/DailyDevTipsBlog)或[Twitter](https://zshipu.com/t?url=https://twitter.com/DailyDevTips1)上连接
