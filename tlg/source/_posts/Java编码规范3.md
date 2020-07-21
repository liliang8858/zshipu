title: Java编码规范3
author: 知识铺
date: 2019-11-22 15:33:06
tags:
---
## API

##### [建议] 多个字符串拼接时用StringBuilder

避免频繁地通过 `+` 进行字符串拼接

**StringBuffer **
 

### 线程


**线程池**
 
##### [建议] 如果程序频繁创建线程，则可以考虑使用线程池


##### [建议] 提倡run方法中使用无限循环的形式，然后使用一个布尔型标识控制循环的停止

## 未整理

##### [建议] 禁止随意使用静态变量

举个不恰当的例子：

```
// good
class Foo {
	
	String name;
	
	void sayHello() {
		System.out.println("My name is" + name);
	}
}

// bad
class Foo {
	
	static String name;
	
	static void sayHello() {
		System.out.println("My name is" + name);
	}
}
```

不可否认的是，很多刚学 java 的新手常常这么做。

##### [建议] 尽可能避免调用本类的getter、setter方法
 
一是为了简洁、二是为了效率

```
// good
class Foo {
	
	String name;
	
	public String getName() {
		return name;
	}

	void sayHello() {
		System.out.println("My name is" + name);
	}
}

// bad
class Foo {
	
	String name;
	
	public String getName() {
		return name;
	}

	void sayHello() {
		System.out.println("My name is" + getName());
	}
}
```
 
##### [建议] 调用本类的属性和方法时一般不加this

为了简洁。

如果和参数冲突，才加 this。

```
// good
class Foo {
	
	String name;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}

// bad
class Foo {
	
	String name;
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
}
```
 
##### [建议] 用静态代替虚拟
 
如果不需要访问某对象的字段，将方法设置为静态，调用会加速15%到20%。这也是一种好的做法，因为你可以从方法声明中看出调用该方法不需要更新此对象的状态。

##### [建议] 常量用 static final 修饰

```
// good
static final String DATABASE_NAME = "foo";

// bad
final String DATABASE_NAME = "foo";
```


## 常见缩写

```
anim // animation
avg // average
bg // background
buf // buffer
ctrl // control
del // delete 
doc // document
err // error
esc // escape
inc // increment
info // infomation
init // initial
ic // icon
img // image
len // length
lib // library
msg // message
pwd // password
pos // position
srv // server
str // string
tmp // temp
```

### lambda表达式

##### [建议] 一般的程序没有用到 lambda 表达式的必要

lambda 表达式可读性低。
