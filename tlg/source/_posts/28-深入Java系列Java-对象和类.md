title: 28.深入Java系列Java - 对象和类
author: 知识铺
date: 2020-04-06 19:50:43
tags:
---
 
## Java - 对象和类

Java 是面向对象的语言。作为具有面向对象功能的语言，Java 支持以下基本概念 |

*   多 态 性
*   继承
*   封装
*   抽象
*   类
*   对象
*   实例
*   方法
*   消息传递

在本章中，我们将介绍概念 - 类和对象。

*   **对象**= 对象具有状态和行为。示例：狗有状态 - 颜色，名称，品种以及行为 - 摇尾巴，吠叫，吃。对象是类的实例。

*   **类**– 类可以定义为描述其类型对象支持的行为/状态的模板/蓝图。

## Java 中的对象

现在让我们深入探讨什么是对象。如果我们考虑现实世界，我们可以发现我们周围的许多物体，汽车，狗，人类等。所有这些对象都有一个状态和行为。

如果我们考虑一只狗，那么它的状态是 - 名称，品种，颜色，和行为是 - 吠叫，摇尾巴，运行。

如果将软件对象与实际对象进行比较，它们具有非常相似的特征。

软件对象也具有状态和行为。软件对象的状态存储在字段中，行为通过方法显示。

因此，在软件开发中，方法对对象的内部状态进行操作，对象到对象的通信是通过方法完成的。

## Java 中的类

类是创建单个对象的蓝图。

下面是类的示例。

### 例子
```
public class Dog {
   String breed;
   int age;
   String color;

   void barking() {
   }

   void hungry() {
   }

   void sleeping() {
   }
}
```
类可以包含以下任何变量类型。

*   **局部变量**= 在方法、构造函数或块内定义的变量称为局部变量。变量将在方法中声明和初始化，并且变量将在方法完成后销毁。

*   **实例变量**= 实例变量是类中的变量，但在任何方法之外。当实例化类时，这些变量将初始化。可以从该特定类的任何方法、构造函数或块内部访问实例变量。

*   **类变量**= 类变量是使用静态关键字在类中声明的变量，在任何方法之外。

类可以具有任意数量的方法来访问各种方法的值。在上面的例子中，吠叫（）、饥饿和睡觉是方法。

以下是在研究 Java 语言类时需要讨论的一些重要主题。

## 构造 函数

讨论类时，最重要的子主题之一是构造函数。每个类都有一个构造函数。如果我们不显式为类编写构造函数，Java 编译器将为该类生成默认构造函数。

每次创建新对象时，将至少调用一个构造函数。构造函数的主要规则是它们应具有与类相同的名称。类可以有多个构造函数。

下面是构造函数的示例 |

### 例子
```
public class Puppy {
   public Puppy() {
   }

   public Puppy(String name) {
      // This constructor has one parameter, _name_.
   }
}
```


**注意**= 我们有两种不同类型的构造函数。我们将在后续章节中详细讨论构造函数。

## 创建对象

如前所述，类提供对象的蓝图。因此，基本上，对象是从类创建的。在 Java 中，新关键字用于创建新对象。

从类创建对象时有三个步骤 |

*   **声明**= 具有具有对象类型的变量名称的变量声明。

*   **实例化**– 使用"新"关键字创建对象。

*   **初始化**– "new"关键字后跟对构造函数的调用。此调用初始化新对象。

下面是创建对象的示例 |

### 例子
 [现场演示](https://zshipu.com/t?url=http://tpcg.io/gQv0gO)
```
public class Puppy {
   public Puppy(String name) {
      // This constructor has one parameter, _name_.
      System.out.println("Passed Name is :" + name );
   }

   public static void main(String []args) {
      // Following statement would create an object myPuppy
      Puppy myPuppy = new Puppy( "tommy" );
   }
}
```
如果我们编译并运行上述程序，那么它将产生以下结果 |

### 输出
```
Passed Name is :tommy
```
## 访问实例变量和方法

实例变量和方法通过创建的对象进行访问。要访问实例变量，下面是完全限定的路径 |
```
/* First create an object */
ObjectReference = new Constructor();

/* Now call a variable as follows */
ObjectReference.variableName;

/* Now you can call a class method as follows */
ObjectReference.MethodName();
```
### 例子

此示例说明如何访问类的实例变量和方法。

 [现场演示](https://zshipu.com/t?url=http://tpcg.io/VnuprO)
```
public class Puppy {
   int puppyAge;

   public Puppy(String name) {
      // This constructor has one parameter, _name_.
      System.out.println("Name chosen is :" + name );
   }

   public void setAge( int age ) { puppyAge = age;
   }

   public int getAge( ) {
      System.out.println("Puppy's age is :" + puppyAge );
      return puppyAge;
   }

   public static void main(String []args) {
      /* Object creation */
      Puppy myPuppy = new Puppy( "tommy" );

      /* Call class method to set puppy's age */ myPuppy.setAge( 2 );

      /* Call another class method to get puppy's age */ myPuppy.getAge( );

      /* You can access instance variable as follows as well */
      System.out.println("Variable Value :" + myPuppy.puppyAge );
   }
}
```
如果我们编译并运行上述程序，那么它将产生以下结果 |

### 输出
```
Name chosen is :tommy
Puppy's age is :2
Variable Value :2
```
## 源文件声明规则

作为本节的最后一部分，现在让我们来看看源文件声明规则。在源文件中声明类、_导入_语句和_包_语句时，这些规则至关重要。

*   每个源文件只能有一个公共类。

*   源文件可以有多个非公共类。

*   公共类名称应该是源文件的名称，并且应在末尾由**.java**追加。例如：类名称是_公共类"员工]"，_则源文件应为 Employ.java。

*   如果类在包中定义，则包语句应该是源文件中的第一个语句。

*   如果存在导入语句，则必须在包语句和类声明之间写入它们。如果没有包语句，则导入语句应该是源文件中的第一行。

*   导入和包语句将意味着源文件中存在的所有类。无法将不同的导入和/或包语句声明给源文件中的不同类。

类具有多个访问级别，并且有不同类型的类;抽象类、最终类等。我们将在访问修改器章节中解释所有这些。

除了上述类类型外，Java 还有一些称为内部类和匿名类的特殊类。

## Java 包

简单地说，它是对类和接口进行分类的一种方式。在 Java 中开发应用程序时，将编写数百个类和接口，因此对这些类进行分类是必须的，而且使生活更加轻松。

## 导入语句

在 Java 中，如果提供了完全限定的名称（包括包和类名称），则编译器可以轻松地查找源代码或类。导入语句是为编译器提供查找该特定类的正确位置的一种方式。

例如，以下行将要求编译器加载目录java_installation/java/io 中提供的所有类 |
```
import java.io.*;
```
## 简单案例研究

对于我们的案例研究，我们将创建两个类。他们是员工和员工测试。

首先打开记事本并添加以下代码。请记住，这是"员工"类，该类是公共类。现在，用名称"员工.java"保存此源文件。

员工类有四个实例变量 - 名称、年龄、名称和工资。类有一个显式定义的构造函数，它采用一个参数。

### 例子
```
import java.io.*;
public class Employee {

   String name;
   int age;
   String designation;
   double salary;

   // This is the constructor of the class Employee
   public Employee(String name) {
      this.name = name;
   }

   // Assign the age of the Employee  to the variable age.
   public void empAge(int empAge) { age = empAge;
   }

   /* Assign the designation to the variable designation.*/
   public void empDesignation(String empDesig) { designation = empDesig;
   }

   /* Assign the salary to the variable	salary.*/
   public void empSalary(double empSalary) { salary = empSalary;
   }

   /* Print the Employee details */
   public void printEmployee() {
      System.out.println("Name:"+ name );
      System.out.println("Age:" + age );
      System.out.println("Designation:" + designation );
      System.out.println("Salary:" + salary);
   }
}
```
如本教程前面提到的，处理从主方法开始。因此，为了运行此员工类，应该有一个主要的方法，并且应该创建对象。我们将为这些任务创建一个单独的类。

下面是_"员工测试"_类，该类创建类 Employ 的两个实例，并调用每个对象的方法为每个变量分配值。

将以下代码保存在员工Test.java文件中。
```
import java.io.*;
public class EmployeeTest {

   public static void main(String args[]) {
      /* Create two objects using constructor */
      Employee empOne = new Employee("James Smith");
      Employee empTwo = new Employee("Mary Anne");

      // Invoking methods for each object created empOne.empAge(26); empOne.empDesignation("Senior Software Engineer"); empOne.empSalary(1000); empOne.printEmployee(); empTwo.empAge(21); empTwo.empDesignation("Software Engineer"); empTwo.empSalary(500); empTwo.printEmployee();
   }
}
```
现在，编译两个类，然后运行_"员工测试"_以查看结果，如下所示 |

### 输出
```
C:\> javac Employee.java
C:\> javac EmployeeTest.java
C:\> java EmployeeTest
Name:James Smith
Age:26
Designation:Senior Software Engineer
Salary:1000.0
Name:Mary Anne
Age:21
Designation:Software Engineer
Salary:500.0
```


