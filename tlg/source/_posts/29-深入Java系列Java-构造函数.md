title: 29.深入Java系列Java - 构造函数
author: 知识铺
date: 2020-04-06 19:54:48
tags:
---
 
## Java - 构造函数

* * *

构造函数在创建对象时初始化对象。它与它的类具有相同的名称，在语法上与方法类似。但是，构造函数没有显式返回类型。

通常，您将使用构造函数为类定义的实例变量提供初始值，或执行创建完全形成的对象所需的任何其他启动过程。

所有类都有构造函数，无论您是否定义一个，因为 Java 会自动提供一个默认构造函数，将所有成员变量初始化为零。但是，一旦定义自己的构造函数，将不再使用默认构造函数。

## 语法

以下是构造函数的语法 |
```
class ClassName {
   ClassName() {
   }
}
```
Java 允许两种类型的构造函数，即 |

*   无参数构造函数
*   参数化构造函数

## 无参数构造函数

由于名称指定 Java 的 no 参数构造函数不接受任何参数，因此使用这些构造函数，将使用所有对象的固定值初始化方法的实例变量。

## 例子
```
Public class MyClass {
   Int num;
   MyClass() { num = 100;
   }
}
```
您将调用构造函数来初始化对象，如下所示
```
public class ConsDemo {
   public static void main(String args[]) {
      MyClass t1 = new MyClass();
      MyClass t2 = new MyClass();
      System.out.println(t1.num + " " + t2.num);
   }
}
```
这将产生以下结果
```
100 100
```
## 参数化构造函数

通常，您需要一个接受一个或多个参数的构造函数。参数被添加到构造函数的方式与添加到方法的方式相同，只需在构造函数的名称之后的括号内声明它们。

## 例子

下面是一个使用构造函数的简单示例 |
```
// A simple constructor.
class MyClass {
   int x;

   // Following is the constructor
   MyClass(int i ) { x = i;
   }
}
```
您将调用构造函数来初始化对象，如下所示 |
```
public class ConsDemo {
   public static void main(String args[]) {
      MyClass t1 = new MyClass( 10 );
      MyClass t2 = new MyClass( 20 );
      System.out.println(t1.x + " " + t2.x);
   }
}
```
这将产生以下结果 |
```
10 20
```
