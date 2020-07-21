title: 在 JAVASCRIPT 中揭开声明倒置的神秘面纱
author: 知识铺
date: 2020-04-14 22:24:33
tags:
---
## 内容表：

1.  在 JavaScript 世界中，回调和普遍的误解
2.  JavaScript 如何在胡德下工作
3.  提升的真正概念
4.  起重的危险
5.  结束想法

####  1\. 声明倒置和JAVASCRIPT世界中的普遍误解

##### 什么是在 Javascript 中声明倒置？

作为 JavaScript 开发人员，您真正了解升升非常重要，这不仅是因为它让您更好地了解语言，还因为它可以轻松地在面试部分赚取或花费您一分。

**_请注意：我会打字相当快，因为我只能一次倒出一个按键的想法，JavaScript似乎是一个相当长的单词打字。所以，请允许我使用JS的地方，我认为适合。感谢您的理解_**

##### 首先调用

```
logName() // calls function
console.log(coderName); // logs coderName to the console

var coderName = "Lawrence Eagles"; // declares the coderName variable
function logName () { // declares the logName function
    console.log("Brendan Eich")
}

```

乍一看，您肯定会相信这个定义（_相反，提升是 JavaScript 将声明移动到顶部的默认行为。）_是正确的。
然而，让我们通过消化这些示例来揭开这一点，以揭开提升的神秘面纱。
代码结果如下：

```
logName() // returns Brendan Eich 
console.log(coderName); // returns undefined
```

理解这一点的关键是记录变量的结果。函数调用最肯定地像向上移动一样。
在这种情况下，处理的代码将是：

```
var coderName = "Lawrence Eagles"; // declares the coderName variable
function logName () { // declares the logName function
    console.log("Brendan Eich")
}
logName() // calls function
console.log(coderName); // logs coderName to the console
```

但是，如果是这种情况，结果应该是：

```
// logName() returns Brendan Eich
 ```

```
// console.log(coderName) returns Lawrence Eagles (not undefined)
 ```

为了了解这里发生的情况，我们需要了解 JavaScript 如何真正工作。

#### 2\. JAVASCRIPT 如何在引擎盖下工作

我们从上面的小捏造示例中确立了一个事实，即如果变量和函数确实被 JS 引擎移动到_顶部_，那么结果应该是：

```
// logName() returns Brendan Eich
 ```

```
// console.log(coderName) returns Lawrence Eagles
 ```

而不是

```
logName() // returns Brendan Eich
console.log(coderName); // returns undefined
```

您可能在线对此行为有一个花哨的解释，但事情是这样的，代码的提升版本的行为不像变量移动到_顶部_，而是就好像它是在没有值的情况下声明的一样。
因此，它的行为就像代码是：

```
var coderName; // declares the coderName variable without a value
function logName () { // declares the logName function
    console.log("Brendan Eich")
}
logName() // calls function
console.log(coderName); // logs coderName to the console
```

在这里，我们确实得到了一个与代码的提升版本一致的结果。

```
logName() // returns Brendan Eich
console.log(coderName); // returns undefined
```

#####  引擎盖下的JavaScript。

当 JS 引擎处理代码时，它会创建称为执行上下文的内容。这是围绕当前正在运行的代码的包装。它由全局变量、**此**对象（_您可能知道它为此关键字_）以及该执行上下文的变量环境组成。
我们不会深入地进入执行环境，但我们会充分地讨论它，因为这里埋藏的宝藏。

创建执行上下文涉及两个过程，即：

1.  创建阶段：在此期间，变量和函数将添加到内存中。在这里，JS 引擎逐行执行代码，将所有变量添加到内存**中，但它尚未分配它们值**，而对于函数，它们被添加到整个内存中。这是整个函数（名称和代码块）在此阶段添加到内存。

2.  第二阶段是执行阶段：在此阶段将值分配给变量并调用函数。因此，即使您用值初始化变量，该值也处于第二阶段。在第一阶段，该值不会分配给变量。它被添加到内存中，并初始化了_未定义的_。

#### 3\. 提升的真正概念

如果您尚未看到它，则整个误解的发生是因为执行上下文的第一个（创建）阶段。在函数最终执行之前，它们已在执行上下文的创建阶段内存中，因此 Javascript 引擎知道该函数的全部位置位于内存中。**它没有移动到顶部。**
因此：

```
logName()
function logName () { // declares the logName function
    console.log("Brendan Eich")
}
```

```
// returns Brendan Eich
 ```

工作正常，就像函数声明移动到顶部一样。但事实并非如此。在执行上下文的创建阶段，整个函数已添加到内存中。因此，在执行阶段，JS 引擎已经知道函数位于内存中并调用它的位置。

##### 变量呢？

过程是相同的，但实现有点不同。与上面提到的变量在执行上下文的创建阶段也添加到内存中，但没有为其分配任何值。在 javascript 中，当变量声明没有值时，JS 引擎会自动向其添加未定义的占位符值。
这解释了为什么：

```
console.log(coderName); // logs coderName to the console
var coderName = "Lawrence Eagles"; // declares the coderName variable
```

和

```
var coderName; // declares the coderName variable without a value
console.log(coderName); // logs coderName to the console
```

具有相同的结果：**未定义**

##### JavaScript 中未定义

未定义是 JavaScript 中的原始类型，就像字符串、布尔和数字一样。这意味着您尚未显式为该变量分配任何值。[进一步你读在MDN](https://zshipu.com/t?url=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
**注意这不是一个错误**
**注意它不是空**[阅读关于空在这里](https://zshipu.com/t?url=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
我们可以使这一点更清晰，通过运行

```
console.log(coderName)
 ```

不声明变量。这是没有以下任何代码。

```
var coderName;
var coderName = "Lawrence Eagles"
```

这将引发错误。

```
console.log(coderName) // returns VM275:1 Uncaught ReferenceError: coderName is not defined
 ```

请注意，这与未定义不同。这是一个错误，告诉您正在尝试记录未在任何地方定义的变量。JavaScript解释器说我在内存中根本不看到这个变量。
但是，在提升变量的情况下，变量在内存中，但由于在执行上下文的创建阶段，它被置于此阶段，JS 引擎会为它分配一个称为未定义的值。
**正是整个过程被许多人感到困惑和误解，他们认为JS引擎实际上会将它们的变量或函数声明移到顶部。**

#### 4\. 提升的危险

声明倒置提供了虚假的安全性。许多开发人员认为 JS 引擎会将其功能和变量声明向上移动，从而有意识地编写错误代码。但实际上，JavaScript引擎不这样做，我们现在可以清楚地看到，JavaScript引擎只是根据我们的代码是如何实现的。这可能非常危险，因为当一个实际值是预料之中时，人们可能会变得**未定义**，这可能是一个非常讨厌的错误，很难跟踪，我相信在完成调试时，你不会喜欢图片。
_：三思而后行，编写一次代码，为自己节省调试压力_

##### 现代Javascript和回调

从es6和上面有新的方法来声明JavaScript中的变量，这使得语言现在更安全，因为**让**和**const（**_在Javascript中声明变量的新方法_）不支持提升。

```
console.log(coderName); // logs coderName to the console
let coderName = "Lawrence Eagles"; // declares the coderName variable
// returns VM269:1 Uncaught ReferenceError: coderName is not defined
```

和

```
console.log(coderName); // logs coderName to the console
const coderName = "Lawrence Eagles"; // declares the coderName variable
// returns VM397:1 Uncaught ReferenceError: Cannot access 'coderName' before initialization
```

不会工作。他们都犯了错误。因此，我们鼓励您编写良好的代码。
