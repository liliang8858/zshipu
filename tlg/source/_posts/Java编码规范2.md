title: Java编码规范2
author: 知识铺
date: 2019-11-22 15:11:53
tags:
---
 [TOC]

[1 前言](#user-content-1-前言)
 
[2 代码风格](#user-content-2-代码风格)
 
　　[2.1 文件](#user-content-21-文件)

　　[2.2 结构](#user-content-22-结构)
 
　　　　[2.2.1 缩进](#user-content-221-缩进)
 
　　　　[2.2.2 空格](#user-content-222-空格)
 
　　　　[2.2.3 空行](#user-content-223-空行)
 
　　　　[2.2.4 换行](#user-content-224-换行)
 
　　[2.3 命名](#user-content-22-命名)
 
　　[2.4 注释](#user-content-23-注释)
 
[3 语言特性](#user-content-3-语言特性)
 
　　[3.1 条件表达式](#user-content-31-条件表达式)
 
　　[3.2 自增自减](#user-content-32-自增自减)

　　[3.3 位运算符](#user-content-32-位运算符)
 
[4 待办事项](#user-content-4-待办事项)

[5 最佳实践](#user-content-5-最佳实践)



## 1 前言

Java编程必须遵守[通用编程规范](https://blog.zshipu.com/tlg/2019/11/22/%E9%80%9A%E7%94%A8%E7%BC%96%E7%A0%81%E8%A7%84%E8%8C%83/)和本编程规范。

## 2 代码风格

### 2.1 文件

#### [建议] 源文件编码格式为UTF-8。

### 2.2 结构

### 2.3 命名

#### 2.3.2 特殊转义序列

源文件结构
一个源文件包含(按顺序地)：

许可证或版权信息(如有需要)
package语句
import语句
一个顶级类(只有一个)
以上每个部分之间用一个空行隔开。

### 3.2 package语句

##### [强制] package语句不换行

### 3.3 import语句

##### [强制] import 语句不要使用通配符

```
// good
import java.util.Date;
import java.util.Map;

// bad
import java.util.*;
```

##### [强制] import语句不换行

每个import语句独立成行。

##### [建议] import语句按照一定的规则分组

import语句分为以下几组，按照这个顺序，每组由一个空行分隔：

所有的静态导入独立成组  
com.google imports(仅当这个源文件是在com.google包下)   
第三方的包。每个顶级包为一组，字典序。例如：android, com, junit, org, sun  
java imports  
javax imports  
组内不空行，按字典序排列。  

### 3.4 类声明

3.4.1 只有一个顶级类声明

每个顶级类都在一个与它同名的源文件中(当然，还包含.java后缀)。

例外：package-info.java，该文件中可没有package-info类。

##### [建议] 每个类应该以某种逻辑去排序它的成员

新的方法不能总是习惯性地添加到类的结尾

推荐按照访问权限的大小分别排列属性和方法：
* public 数据成员
* protected 数据成员
* 包级别(没有访问修饰符的，默认为friendly) 数据成员
* private 数据成员
* 构造函数
* public 方法
* protected 方法
* private 方法
* 包级别方法

##### [强制] 构造函数必须写在所有方法的前面

##### [强制] 重载方法必须写在一起

一个类的多个构造函数，或是多个同名方法，这些函数/方法应该按顺序出现在一起，中间不要放进其它函数/方法。



### 4.7 用小括号来限定组：推荐

除非作者和reviewer都认为去掉小括号也不会使代码被误解，或是去掉小括号能让代码更易于阅读，否则我们不应该去掉小括号。 我们没有理由假设读者能记住整个Java运算符优先级表。




### 注解

##### [建议] 一个注解独占一行。位于方法的前面，Javadoc（如果有的话）的后面。

```
@Override
@Nullable
public String getNameIfPresent() { ... }
```

##### [建议] 单个注解可以和签名的第一行出现在同一行

```
@Override public int hashCode() { ... }
```

##### [建议] 应用于字段的注解紧随文档块出现，应用于字段的多个注解允许与字段出现在同一行。例如：
``` 
@Partial @Mock DataLoader loader;
```

### 2.3 命名

#### 5.1 对所有标识符都通用的规则

##### [强制] 标识符只能使用ASCII字母和数字

具体命名参照通用编程规范，这里不再赘述。

严格来说，遵守本规范的Java代码中，标识符只有三种形式：
UpperCamelCase、lowerCamelCase 和 CONSTANT_CASE。

除了常量外，所有标识符只由字母和数字组成。

##### [建议] 不使用特殊前缀或后缀

```
// good
int count;
String name;

// bad
int iCount; // 常用 i 来表示整形
String sName; // 常用 s 来表示字符串
String nName; // 常用 m 来表示 数据成员
```

TODO 这条建议是否应该改成强制？

```
// good?
Button btnClose; // 关闭按钮
```

#### 包命名规范

##### [强制] 包名全部小写，连续的单词只是简单地连接起来，不使用下划线

```
// good
com.google.util.imagetool

// bad
com.google.util.imageTool
com.google.util.image_tool
```

##### [强制] 包名采用反域名命名规则，至少四级

一、二级包名通常是域名的反写，因为域名不会重复。

如果有域名则采用域名的反写：

```
chenjianhang.com => com.chenjianhang
abc.net => net.abc
```

如果没有域名：

一级包名为域名后缀，如com、net、cn、me等。
公司的项目通常是com，个人的项目可以选择me，团队的项目可以采用team，其他的也可以。

二级包名是公司、组织、机构、团队或者个人的名称。


三级包名是项目名。

四级包名为模块名或层级名。

```
com.baidu.tieba.view

com.sina.weibo.xxx
```

### 2.4 注释

#### Javadoc

### 7.1 格式

##### [强制] Javadoc 格式必须正确

只允许下面这两种形式

当整个 Javadoc 块能容纳于一行，且没有 Javadoc 标记 `@XXX` 时，可以使用单行形式。

```
/**
 * 这是一个多行的 Javadoc 注释
 * 这是一个多行的 Javadoc 注释
 */
public void foo() { ... }

/** 这是一个单行的 Javadoc 注释 */
```



7.1.2 段落

空行(即，只包含最左侧星号的行)会出现在段落之间和Javadoc标记(@XXX)之前(如果有的话)。 除了第一个段落，每个段落第一个单词前都有标签<p>，并且它和第一个单词间没有空格。

7.1.3 Javadoc标记

标准的Javadoc标记按以下顺序出现：@param, @return, @throws, @deprecated, 前面这4种标记如果出现，描述都不能为空。 当描述无法在一行中容纳，连续行需要至少再缩进4个空格。

7.2 摘要片段

每个类或成员的Javadoc以一个简短的摘要片段开始。这个片段是非常重要的，在某些情况下，它是唯一出现的文本，比如在类和方法索引中。

这只是一个小片段，可以是一个名词短语或动词短语，但不是一个完整的句子。它不会以A {@code Foo} is a...或This method returns...开头, 它也不会是一个完整的祈使句，如Save the record...。然而，由于开头大写及被加了标点，它看起来就像是个完整的句子。

Tip：一个常见的错误是把简单的Javadoc写成/** @return the customer ID */，这是不正确的。它应该写成/** Returns the customer ID. */。

### 需要 Javadoc 的情况

##### [强制] 除了文档后面讲到的几个例外，每个 public 类及它的每个 public 和 protected 成员处必须使用 Javadoc

##### [建议] getter 和 setter 方法，如果没必要，可以不写 Javadoc注释

```
// bad
/** 返回学生数量 */
public int getStudentCount() {
    return studentCount;
}
```

当然，如果方法名中有比较偏僻的英文词汇，或者有一些相关信息是需要读者了解的， Javadoc 注释不应该省略

```
/** 返回符合规范的名称 */
public String getCanonicalName() {

}
```

##### [建议] 单元测试类中的测试方法很多时候不需要文档说明


##### [建议] 如果一个方法重载了超类中的方法，那么Javadoc并非必需的

##### [建议] 对于包外不可见的类、方法和数据成员，如有需要，也是要使用Javadoc的


## 2 语言特性

### 条件表达式

##### [强制] 如果条件表达式是一个 boolean 类型的变量，禁止与 true 或 false 比较


```
boolean isOk = true;
    
// good    
if (isOk) {
    
} 

// good
if (!isOk) {
            
}

// bad
if (isOk == true) {
            
}

if (isOk == false) {
            
}
```

### 自增自减

##### [强制] 如果仅仅是自增或者自减，使用自增/自减表达式：

```
// good
i++;
i--;

// bad
i = i + 1;
i = i - 1;
```

##### [强制] 禁止自增表达式和其他运算符混合用

```
// bad
i = i++; // Java 和 C 执行结果是不一样的

if (c++ = d++) {
    ...
}
```
##### [强制] 禁止使用难以理解、容易混淆的表达式

```
// good
a = b + c;
d = a + r;

// bad
d = (a = b + c) + r; 
```

```
if ((a == b) && (c == d)) // good
if (a == b && c == d)     // 不反对

```

### 位运算符

##### [建议] 除非是对性能要求极高，否则不允许使用位运算符来代替除法

```
// good
i /= 4;

// bad
i = i >> 2;
``` 

### 返回语句

```
// good
return booleanExpression;

// bad
if (booleanExpression) {
    return true;
} else {
    return false;
}
```

### 条件运算符

##### [建议] 如果条件运算符 `?` 前面有二元运算符，条件表达式应该用括号扩起来

```
// good
i = (x >= 0) ? x : -x;

// bad
i = x >=0 ? x : -x;
```

##### [建议] 使用条件表达式增强代码的可读性

```
// good
return (condition ? x : y);

// bad
if (condition) {
    return x;
}
return y;
```

```
// god
i = (x >= 0) ? x : -x;

// bad
if (x >= 0) {
    i = x;
} else {
    i = -x;
}
```

### switch语句

##### [强制] switch 语句内的语句组必须正确的终止

所有 case 语句和 default 语句必须满足三条规范之一：
1. 语句通过break、continue、return 或抛出异常来终止。如示例的 `case 3`。
2. 语句通过一条注释来说明程序将继续执行到下一个语句组。如示例的 `case 2`。
3. 语句希望继续执行到下一个语句组，并且语句内不需要执行任何代码，此时语句内不允许任何空行。如示例的 `case 1`。

```
switch (input) {
    case 1: // 注意case 1 与 case 2 之间不能有空行
    case 2:
        prepareOneOrTwo();
        // 不用break
    case 3:
        handleOneTwoOrThree();
        break;
    default:
        handleLargeNumber(input);
        break;
}
```

##### [强制] switch 语句必须包含 default 语句，并且写在所有 case 语句的后面

即使 default 语句什么代码也不包含，你也必须这么做

### 数组

##### [建议] 数组初始化可写成块状结构

```
new int[] { 0, 1, 2, 3 };

new int[] {
  0, 1, 2, 3
};
 
new int[] {
  0,
  1,
  2,
  3
};
 
new int[] {
  0, 1,
  2, 3
};
 
new int[]
    {0, 1, 2, 3};
```

##### [强制] 非C语言风格的数组声明

中括号是类型的一部分。

```
// good
String[] args;

// bad
String args[];
```

### 类


##### [建议] 类和成员的修饰符应该按顺序出现

推荐的顺序：

public protected private abstract static final transient volatile synchronized native strictfp


####  枚举类

枚举常量间用逗号隔开，换行可选。

没有方法和文档的枚举类可写成数组初始化的格式：

private enum Suit { CLUBS, HEARTS, SPADES, DIAMONDS }
由于枚举类也是一个类，因此所有适用于其它类的格式规则也适用于枚举类。

## 3 待办事项

##### [强制] TODO 前后保持一个空格

类似的还有 XXX 和 FIXME。

```
// good
// TODO 这是一句必要的说明

// bad
//TODO 这是一句必要的说明
```

##### [强制] 模块编码完成后，删除系统生成的 TODO

```
// bad
// TODO Auto-generated method stub
```

##### [建议] 合理地使用待办事项标记

* TODO：代码还未编写。一般会说明需要添加什么功能。
* XXX：功能已实现，有待改进或优化。一般会说明要改进的地方。
* FIXME：代码有错误，不能正常工作，需要修改。一般会说明如何修正。

```
// TODO 这里需要添加XXX功能

// XXX 建议这里使用的排序改成冒泡排序，效率更高

// FIXME 当用户没有输入时，这里有bug，需加个判断
```

## 4 编程实践

##### [强制] 只要是合法的，就把@Override注解给用上


##### [强制] 捕获的异常必须处理

常见的处理方式就是打印日志。

如果它被认为是不可能的，则把它当作一个AssertionError重新抛出。

如果它确实是不需要在catch块中做任何响应，需要做注释加以说明。

```
try {
    int i = Integer.parseInt(response);
    return handleNumericResponse(i);
} catch (NumberFormatException ok) {
    // it's not numeric; that's fine, just continue
}
return handleTextResponse(response);
```

例外：在测试中，如果一个捕获的异常被命名为expected，则它可以被不加注释地忽略。下面是一种非常常见的情形，用以确保所测试的方法会抛出一个期望中的异常， 因此在这里就没有必要加注释。

```
try {
  emptyStack.pop();
  fail();
} catch (NoSuchElementException expected) {
}
```

##### [强制] 静态成员必须使用类进行调用

```
class Foo {
    public static void foo() {
    }
}

// good
Foo.foo();

// bad
new Foo().foo();
```

##### [强制] 禁止重载Object.finalize

如果你觉得非要重载Object.finalize不可，请先仔细阅读和理解《Effective Java》 第7条：“Avoid Finalizers”，然后不要使用它。

## 编译器相关

### 警告

##### [建议] 认真对待代码中的警告，并尽可能处理掉


##### [强制] 过时的方法和类应当不再使用，用新的方法替换

@Deprecated

