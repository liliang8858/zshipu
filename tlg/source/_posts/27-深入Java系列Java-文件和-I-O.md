title: 27.深入Java系列Java - 文件和 I/O
author: 知识铺
date: 2020-04-06 19:46:11
tags:
---
 
# Java - 文件和 I/O

* * *

java.io包包含在 Java 中执行输入和输出 （I/O） 可能需要的几乎所有类。所有这些流表示输入源和输出目标。java.io包中的流支持许多数据，如基元、对象、本地化字符等。

## 流

流可以定义为一系列数据。有两种类型的流 |

*   **输入流**– 输入流用于从源读取数据。

*   **OutPutStream** – 输出流用于将数据写入目标。

![Streams](https://www.tutorialspoint.com/java/images/streams.png)

Java 为与文件和网络相关的 I/O 提供了强大但灵活的支持，但本教程涵盖了与流和 I/O 相关的非常基本的功能。我们将看到最常用的示例一个接一个 |

### 字节流

Java 字节流用于执行 8 位字节的输入和输出。虽然有许多与字节流相关的类，但最常用的类是，**文件输入流**和**文件输出流**。下面是一个示例，它利用这两个类将输入文件复制到输出文件中 |

**例子**
```
import java.io.*;
public class CopyFile {

   public static void main(String args[]) throws IOException {  
      FileInputStream in = null;
      FileOutputStream out = null;

      try {
         in = new FileInputStream("input.txt");
         out = new FileOutputStream("output.txt");

         int c;
         while ((c = in.read()) != -1) {
            out.write(c);
         }
      }finally {
         if (in != null) {
            in.close();
         }
         if (out != null) {
            out.close();
         }
      }
   }
}
```
现在，让我们有一个文件**输入.txt**与以下内容 |
```
This is test for copy file.
```
作为下一步，编译上述程序并执行它，这将导致创建输出.txt 文件，其内容与输入.txt 中的内容相同。因此，让我们把上述代码放在CopyFile.java文件中，并做以下操作 ：
```
$javac CopyFile.java
$java CopyFile
```
### 字符流

Java**字节**流用于执行 8 位字节的输入和输出，而 Java**字符**流用于为 16 位单码执行输入和输出。虽然有许多与字符流相关的类，但最常用的类是**FileReader**和**FileWriter**。虽然内部文件阅读器使用 FileInputStream，文件编写器使用文件输出流，但这里的主要区别是 FileReader 一次读取两个字节，FileWriter 一次写入两个字节。

我们可以重写上述示例，这利用这两个类将输入文件（具有单码字符）复制到输出文件中 |

**例子**
```
import java.io.*;
public class CopyFile {

   public static void main(String args[]) throws IOException {
      FileReader in = null;
      FileWriter out = null;

      try {
         in = new FileReader("input.txt");
         out = new FileWriter("output.txt");

         int c;
         while ((c = in.read()) != -1) {
            out.write(c);
         }
      }finally {
         if (in != null) {
            in.close();
         }
         if (out != null) {
            out.close();
         }
      }
   }
}
```
现在，让我们有一个文件**输入.txt**与以下内容 |
```
This is test for copy file.
```
作为下一步，编译上述程序并执行它，这将导致创建输出.txt 文件，其内容与输入.txt 中的内容相同。因此，让我们把上述代码放在CopyFile.java文件中，并做以下操作 ：
```
$javac CopyFile.java
$java CopyFile
```
## 标准流

所有编程语言都支持标准 I/O，用户可以从键盘获取输入，然后在计算机屏幕上生成输出。如果您了解 C 或C++编程语言，则必须了解 STDIN、STDOUT 和 STDERR 三种标准设备。同样，Java 提供了以下三个标准流 |

*   **标准输入**– 这用于将数据馈送到用户的程序，通常键盘用作标准输入流，并表示为**System.in**。

*   **标准输出**– 这用于输出用户程序生成的数据，通常计算机屏幕用于标准输出流，并表示为**System。**

*   **标准错误**– 这用于输出用户程序生成的错误数据，通常计算机屏幕用于标准错误流，并表示为**System.err。**

下面是一个简单的程序，它创建**InputStreamReader**来读取标准输入流，直到用户键入"q" |

**例子**

 [现场演示](https://zshipu.com/t?url=http://tpcg.io/lVH2u1)
```
import java.io.*;
public class ReadConsole {

   public static void main(String args[]) throws IOException {
      InputStreamReader cin = null;

      try { cin = new InputStreamReader(System.in);
         System.out.println("Enter characters, 'q' to quit.");
         char c;
         do { c = (char) cin.read();
            System.out.print(c);
         } while(c != 'q');
      }finally {
         if (cin != null) { cin.close();
         }
      }
   }
}
```
让我们将上述代码保存在 ReadConsole.java 文件中，并尝试编译和执行它，如以下程序所示。此程序继续读取和输出相同的字符，直到我们按"q" |
```
$javac ReadConsole.java
$java ReadConsole
Enter characters, 'q' to quit.
1
1
e
e
q
q
```
## 读取和写入文件

如前所述，流可以定义为一系列数据。**输入流**用于从源读取数据，**输出流**用于将数据写入目标。

下面是处理输入和输出流的类层次结构。

![Files IO](https://www.tutorialspoint.com/java/images/file_io.jpg)

两个重要的流是**文件输入流**和**文件输出流**，这将在本教程中讨论。

### 文件输入流

此流用于从文件中读取数据。可以使用关键字**new**创建对象，并且可以使用多种类型的构造函数。

以下构造函数将文件名作为字符串来创建用于读取文件的输入流对象 |
```
InputStream f = new FileInputStream("C:/java/hello");
```
以下构造函数采用文件对象来创建用于读取文件的输入流对象。首先，我们使用 File（） 方法创建一个文件对象，如下所示 ：
```
File f = new File("C:/java/hello");
InputStream f = new FileInputStream(f);
```
一旦您手头有_InputStream_对象，则有一个帮助器方法的列表，可用于读取以流或对流执行其他操作。

| Sr.No | 方法和描述 |
| 1 | 

**公共空隙关闭（） 引发 IOException ***

此方法关闭文件输出流。释放与该文件关联的任何系统资源。引发 IO 异常。

 |
| 2 | 

**受保护的空位定稿（）引发 IO 例外 |**

此方法清理到该文件的连接。确保在不再引用此流时调用此文件输出流的关闭方法。引发 IO 异常。

 |
| 3 | 

**公共 int 读取 （int r） 引发 IOException***

此方法从输入流读取指定的数据字节。返回 int. 返回数据的下一个字节，如果是文件结尾，则返回 -1。

 |
| 4 | 

**公共 int 读取 （字节 = r） 引发 IOException***

此方法从输入流读取 r.长度字节到数组中。返回读取的字节总数。如果是文件结尾，则将返回 -1。

 |
| 5 | 

**公共 int 可用 （） 引发 IOException***

提供可以从此文件输入流读取的字节数。返回 int。

 |


## 文件输出流

文件输出流用于创建文件并将数据写入其中。流将在打开文件以进行输出之前创建一个文件（如果该文件不存在）。

下面是两个构造函数，可用于创建文件输出流对象。

以下构造函数将文件名作为字符串来创建输入流对象来写入文件 |
```
OutputStream f = new FileOutputStream("C:/java/hello") 
```
后续构造函数采用文件对象来创建输出流对象来写入文件。首先，我们使用 File（） 方法创建文件对象，如下所示 ：
```
File f = new File("C:/java/hello");
OutputStream f = new FileOutputStream(f);
```
一旦拥有_了 OutputStream_对象，则有一个帮助程序方法的列表，可用于写入流或在流上执行其他操作。

| Sr.No | 方法和描述 |
| 1 | 

**公共空隙关闭（） 引发 IOException ***

此方法关闭文件输出流。释放与该文件关联的任何系统资源。引发 IO 异常。

 |
| 2 | 

**受保护的空位定稿（）引发 IO 例外 |**

此方法清理到该文件的连接。确保在不再引用此流时调用此文件输出流的关闭方法。引发 IO 异常。

 |
| 3 | 

**公共空写（int w）引发 IOException***

此方法将指定的字节写入输出流。

 |
| 4 | 

**公共空写（字节= w）**

将带长字节从上述字节数组写入输出流。

 |


**例子**

下面是演示输入流和输出流的示例 |
```
import java.io.*;
public class fileStreamTest {

   public static void main(String args[]) {

      try {
         byte bWrite [] = {11,21,3,40,5};
         OutputStream os = new FileOutputStream("test.txt");
         for(int x = 0; x < bWrite.length ; x++) { os.write( bWrite[x] );   // writes the bytes
         } os.close();

         InputStream is = new FileInputStream("test.txt");
         int size = is.available();

         for(int i = 0; i < size; i++) {
            System.out.print((char)is.read() + "  ");
         }
         is.close();
      } catch (IOException e) {
         System.out.print("Exception");
      }	
   }
}
```
上述代码将创建文件 test.txt，并将以二进制格式写入给定数字。在防稳的屏幕上的输出也是如此。

## 文件导航和 I/O

我们还将经历其他几个类，以便了解文件导航和 I/O 的基础知识。

## Java 中的目录

目录是一个文件，它可以包含其他文件和目录的列表。您可以使用**File**对象创建目录，以列出目录中可用的文件。有关完整详细信息，请查看可以调用 File 对象的所有方法以及与目录相关的方法的列表。

### 创建目录

有两种有用的**文件**实用程序方法，可用于创建目录 |

*   **mkdir（ 方法**创建一个目录，在成功时返回 true，在失败时返回 false。失败指示 File 对象中指定的路径已存在，或者无法创建目录，因为整个路径尚不存在。

*   **mkdirs（）**方法同时创建目录和目录的所有父目录。

以下示例创建"/tmp/用户/java/bin"目录 |

**例子**
```
import java.io.File;
public class CreateDir {

   public static void main(String args[]) {
      String dirname = "/tmp/user/java/bin";
      File d = new File(dirname);

      // Create directory now. d.mkdirs();
   }
}
```
编译并执行上述代码以创建"/tmp/用户/java/bin"。

**注意**– Java 根据约定自动处理 UNIX 和 Windows 上的路径分隔符。如果在 Java 的 Windows 版本上使用前斜杠 （/），则路径仍将正确解析。

## 列出目录

您可以使用**File**对象提供**的列表（ ）**方法列出目录中可用的所有文件和目录，如下所示 ：

**例子**
```
import java.io.File;
public class ReadDir {

   public static void main(String[] args) {
      File file = null;
      String[] paths;

      try {      
         // create new file object file = new File("/tmp");

         // array of files and directory paths = file.list();

         // for each name in the path array
         for(String path:paths) {
            // prints filename and directory name
            System.out.println(path);
         }
      } catch (Exception e) {
         // if any error occurs e.printStackTrace();
      }
   }
}
```
这将根据**/tmp**目录中可用的目录和文件生成以下结果 |

**输出**

test1.txt
test2.txt
ReadDir.java
ReadDir.class