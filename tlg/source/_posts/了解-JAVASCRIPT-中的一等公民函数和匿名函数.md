title: 了解 JAVASCRIPT 中的一等公民函数和匿名函数
author: 知识铺
date: 2020-04-14 22:11:52
tags:
---
## 目录

1.  函数和对象
2.  JavaScript 函数的剖析
3.  语句、表达式和匿名函数
4.  一等功能
5.  结束想法

#### 1\. 函数和对象

你可能会有点惊讶这个副标题。这是因为在**JavaScript 函数中是对象。**
它们实际上是一种特殊的对象，其中具有一些独特的属性。它通常是 JavaScript 中关于在函数和对象之间首先教授的内容的争论主题。我校认为，两者应该同时教授。这是因为在JavaScript中，函数和对象非常交织在一起，在许多方面它们非常相似。
话虽如此，我想在继续函数之前对 JavaScript 中的对象进行快速复习。

##### JavaScript 中的对象

它们只是键值对的集合。


```
{ key: value, key: value, key: value } // a dummy example
 ``` 

对象属性的值可以是 JavaScript 中的任何原始数据类型，例如：字符串、数字、布尔。它甚至可以是另一个对象。在所有这些情况下，它们被称为对象属性。在某些情况下，该值可以是函数。当值是函数称为方法的函数时。
我们可以通过将密钥传递给 JavaScript 中的特殊运算符（即**_成员访问运算符和计算的成员访问运算符_**）来访问对象属性的值。让我们快速看看这个。


```
const dog = {}; // creates an empty dog object
dog.legs = 4; // adds a leg property using member access operator
dog["bark"] = "woaf woaf"; // adds a bark property using computed member access operator
dog.details = {owner: "Tim", name: "Jack"} // adds details property which is another object using the member access operator
dog["run"] = function(){ console.log("running dog") } // adds a method using the computed member access operator 
console.log(dog) // returns 
{
  legs: 4,
  bark: "woaf woaf",
  details: { owner: "Tim", name: "Jack" },
  run: function() { console.log("running dog") }
}
``` 

在上面的示例中，我使用成员访问运算符（这只是点）和计算的成员访问运算符（方形大括号 *）向对象添加属性和方法。两个运算符都查找要添加到对象中的属性，如果他们找不到该属性，他们将在那里创建该属性。

_需要注意和携带的一个关键点是，我们可以很容易地创建狗对象与所有属性在动态。_喜欢这个：


```
const dog = {
  legs: 4,
  bark: "woaf woaf",
  details: { owner: "Tim", name: "Jack" },
  run: function() { console.log("running dog") }
}
console.log(dog) // returns
{
  legs: 4,
  bark: "woaf woaf",
  details: { owner: "Tim", name: "Jack" },
  run: function() { console.log("running dog") }
}
// we still get the same result but this is faster.
``` 

_需要注意和携带的另一个重要事项是，对象在计算机的内存中保存其所有属性和方法的引用（地址）。它知道他们都坐在内存_
中因此，我们可以使用这些相同的运算符访问它们。因此：


```
console.log(dog["legs"]) // returns 4
console.lg(dog["details"] // returns { owner: "Tim", name: "Jack" }
console.log(dog.bark) // returns "woaf woaf"
console.log(dog.run) // return function(){console.log("running dog") }
``` 

#### 2\. JAVASCRIPT 功能的解剖

Javascript 函数是特殊对象。它们具有与其他对象相同的属性，但具有一些额外的属性，使它们成为**_一等对象_**或**_一等的公民_**，因为有些人称之为它。其中两个是：

1.  名称属性
2.  代码属性

函数对象具有名称和代码属性。


```
function ageTeller(age){
    console.log(`my age is ${age}`);
}
console.log(ageTeller.name) //returns ageTeller
console.log(ageTeller.length) // returns length of the function
``` 

函数的代码属性是一个对象，它保存您编写的函数的所有代码。它不公开访问，并且存储在内部属性**[代码]**中。[换句话说 ecma-international.org，](https://zshipu.com/t?url=http://www.ecma-international.org/ecma-262/5.1/#sec-13.2)
**_您编写的代码不是函数本身，而是函数的代码属性中。函数只是 JavaScript 中的特殊对象_**

##### 两个重要提示：

*   函数的此代码属性是不可访问。_这就是在 JavaScript 中调用或调用函数的方式。_
*   JavaScript 中的函数不一定具有名称。因此，我们可以创建一个函数，而不给它一个名称。在这种情况下，该函数被认为是_匿名_的。


```
const anonymousAgeTeller = (age){
    console.log(`my age is ${age}`);
}
// A function without a name!?

const es6AnonymousAgeTeller = age => console.log(`my age is ${age}`);
// An es6 arrow function without a name!?
``` 

#### 3\. 声明、表达和匿名功能

上述函数没有名称。两者相同，但后者_es6AnonymousAgeTeller，_使用现代JavaScript语法。而这正是我们继续前进将使用的。

有趣的是，我们正在为变量_es6AnonymousAgeTeller_分配一个函数表达式。这是完全有效的JavaScript，它打开了一些非常强大的编码模式的大门。

表达式是返回值的代码单位。


```
2 + 2 // returns 4 because the + operator is a function and it returns a value

3 > 2 // returns true because as above the > operator is a function and it returns a boolean value.
``` 

我们可以在变量中捕获此返回的值。因此


```
const sumOfTwo = 2 + 2
console.log(sumOfTwo) // returns 4
``` 

另一方面，语句是一个确实工作的代码单元。它不返回值。**请注意。**


```
function sumOfTwo () {
   console.log(2 + 2);
}
// a function statement does not return a value.
// A value is only returned when the function is invoked/called
sumOfTwo() // returns 4
``` 

我们不能将语句分配给变量，因为它不返回任何内容。


```
const result = if(3 > 2) {
  return "the result is true"
}
// wrong JavaScript code and should not be done!!!
``` 

但是我们可以这样做， 相反：


```
const sumOfTwo = () => console.log(2 + 2);
console.log(sumOfTwo); // returns 4
``` 

上面我写了一个函数表达式，它是一个没有名称的函数，因为它是一个表达式，它返回该函数的引用（其地址在计算机的内存中，此时不调用函数，因此返回引用），并且存储在变量**_sumOfTwo_**中。我们现在可以使用**_sumOfTwo_**变量调用/调用此函数的代码属性，因为此变量现在包含对内存中函数的引用。因此：


```
console.log(sumOfTwo); // returns 4
 ``` 

**_在 JavaScript 中没有名称的这些类型的函数称为匿名函数。_**

#### 4\. 一等功能

**_匿名函数可以存储在变量、对象或数组中，作为参数传递给函数，甚至可以从函数返回。因此，它们被称为一等函数或一等对象，或者作为 Javascript_**
中某些类公民，**_简而言之，它们可以像使用任何基元 JavaScript 数据类型一样处理和使用_**

这使得 JavaScript 非常强大。下面是支持这一想法的一些示例。


```
function logItem (item) {
    if(typeof item === "function") {
      console.log(item());
    }else {
    console.log(item);
    }
}

console.log(logItem("Lawrence Eagles")) // returns "Lawrence Eagles"
console.log(logItem({name : "Lawrence Eagles", location: "Earth"})) // returns {name : "Lawrence Eagles", location: "Earth"}
console.log(logItem(()=> {
    console.log("I am a first-class citizen in JavaScript!")
})) // returns "I am a first-class citizen in JavaScript!"
``` 

##### 让我们细分上面的函数。

*   函数名称是_logItem，_它采用一个称为_项_的参数
*   我们使用**_运算符的类型_**获取参数的数据类型。**_类型运算符_**返回一个字符串，指示未计算的操作数的类型。


```
typeof item
// this is an expression so it returns a value depending on the data type of item.
``` 

*   我们采用返回的数据类型，并检查它是否等于"函数"


```
typeof item === "function" 
// take note typeof returns it's result as string. so we check if the result is equal to a "function".
// This is another expression and it would return true or false in this case.
``` 

如果_为 true，_我们知道已传递一**_个一等的匿名函数_**，其引用现在将存储在_logItem 函数的参数_中。因此，我们使用_logItem 参数_调用该第一类函数


```
item()
// item is going to hold any argument passed to the function. 
// If a primitive is passed it would hold that primitive but if a function is passed it would hold a reference to the function in memory. 
// So we can invoke the code property of that function using this parameter.
``` 

*   如果数据类型不是函数，我们会将该项目记录到控制台。
```
console.log(item)
```


#### 5\. 结束想法

这种一等函数的概念在JavaScript中开辟了一个全新的编程范式，称为**_函数编程_**。这给JavaScript提供了超能力，并使其成为函数式编程的一种非常好的语言。我确实希望您从这篇文章得到一两件事情，我非常期待您在下面的评论部分添加或问题。
