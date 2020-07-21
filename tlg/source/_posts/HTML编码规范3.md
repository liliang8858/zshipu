title: HTML编码规范3
author: 知识铺
date: 2019-11-22 15:36:20
tags:
---
[1 前言](#user-content-1-前言)
 
[2 代码风格](#user-content-2-代码风格)
 
　　[2.1 文件](#user-content-21-文件)

　　[2.2 结构](#user-content-22-结构)
 
　　　　[2.2.1 缩进](#user-content-221-缩进)
 
　　　　[2.2.2 空格](#user-content-222-空格)
 
　　　　[2.2.3 换行](#user-content-223-换行)
 
　　[2.3 命名](#user-content-23-命名)
 
　　[2.4 注释](#user-content-24-注释)
 
[3 语言特性](#user-content-3-语言特性)
 
　　[3.1 DOCTYPE](#user-content-31-DOCTYPE)
 
　　[3.2 元素](#user-content-32-元素)

　　[3.3 属性](#user-content-33-属性)

[4 常见元素](#user-content-4-常见元素)

　　[4.1 html](#user-content-41-html)

　　[4.2 head](#user-content-42-head)

　　[4.3 title](#user-content-43-title)

　　[4.4 meta](#user-content-44-meta)

　　[4.5 link](#user-content-45-link)

　　[4.6 script](#user-content-46-script)

　　[4.7 img](#user-content-47-img)

　　[4.8 table](#user-content-48-table)

[5 其他](#user-content-5-其他)

　　[5.1 代码有效性](#user-content-51-代码有效性)



## 1 前言

无

## 2 代码风格

### 2.1 文件

##### [建议] 用不带 BOM 头的 UTF-8 编码

用没有字节顺序标记的UTF-8编码格式进行编写。

在HTML模板和文件中指定编码 `<meta charset="utf-8"> `. 不需要制定样式表的编码，它默认为UTF-8.

### 2.2 结构

#### 2.2.1 缩进

##### [强制] 每次缩进 4 个空格，不允许使用 2 个空格过 tab 字符


##### [强制] 每个块元素、列表元素或表格元素都独占一行，每个子元素都相对于父元素进行缩进


将块元素、列表元素或表格元素都放在新行。

另外，需要缩进块元素、列表元素或表格元素的子元素。

（如果出现了列表项左右空文本节点问题，可以试着将所有的 li 元素都放在一行。 )

```html
<blockquote>
	<p><em>Space</em>, the final frontier.</p>
</blockquote>

<ul>
	<li>一</li>
	<li>二</li>
	<li>三</li>
</ul>

<table>
	<thead>
		<tr>
			<th>姓名</th>
			<th>年龄</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>张三</td>
			<td>16</td>
		</tr>
	</tbody>
</table>
```

##### [强制] html、head、body 以及 head 和 body 的直接子元素不缩进



#### 2.2.2 空格

##### [强制] 元素属性中的 `=` 左右不能出现空格

```
<!-- good -->
<p class="foo">...</p>

<!-- bad -->
<p class ="foo">...</p>
<p class= "foo">...</p>
<p class = "foo">...</p>
```

#### 2.2.3 换行

##### [建议] 每行代码不超过 120 个字符

考虑到 html 的特殊性，不作强制要求。

### 2.3  注释

##### [建议] 在模块的开始和结束位置添加模块开始/结束注释

这样做是很有必要的，可以使代码结构更加清晰，便于维护，尤其是模块代码很多行的时候。

* 开始注释：`<!-- 模块名 -->`。
* 结束注释：`<!-- /模块名 -->`。
* 模块代码比较少的时候允许只有开始注释！

```html
<!-- 头部 -->
<div class="header">
    <!-- logo -->
    <h1 class="logo"><a href="#">logo</a></h1>
    <!-- /logo -->
    <!-- 导航 -->
    <ul class="menu">
        <li><a href="#">nav1</a></li>
        <li><a href="#">nav2</a></li>
    </ul>
    <!-- /导航 -->
</div>
<!-- /头部 -->
```

## 3 语言特性

### 3.1 DOCTYPE

##### [强制] 使用HTML5标准，且DOCTYPE大写

DOCTYPE 不可省略。

```
<!DOCTYPE html>
```

### 3.2 元素

##### [强制] 元素名必须小写 

```
<!-- good -->
<div></div>

<!-- bad -->
<DIV></DIV>
```

##### [强制] 不要省略可选的结束标签（closing tag）

```
<!-- good -->
<p>这是一段文本</p>

<!-- bad -->
<p>这是一段文本
```

##### [强制] 不要在自闭合元素（Void elements）尾部添加斜线

常见的自闭合元素：
```
<br> <hr> <img> <input> <link> <meta>
```
不太常见的无内容元素：
```
<area> <base> <col> <command> <embed> <keygen>
<param> <source> <track> <wbr>
```

示例：

```
<!-- good -->
<img src="xxx.jpg">

<!-- bad -->
<img src="xxx.jpg" />
```

##### [强制] 标签必须合理地嵌套

* 块元素可以包含内联元素或块元素。
* 内联元素不能包含块元素。
* 几个特殊的块元素只能包含内联元素，不能包含块元素：h1-h6、p、dt、caption、hr。
* 其他规则，如 tbody 必须置于 table 中。

##### [建议] 合理使用语义化标签

合理使用，不滥用。

原因：SEO优化。

##### [建议] 不使用样式有关的元素

如center、u 等等。

##### [建议] 减少不必要的嵌套

```
<!-- good -->
<img class="foo" src="xxx.jpg">

<!-- bad -->
<div class="foo">
    <img src="xxx.jpg">
</div>
```

### 3.3 属性

##### [强制] 属性必须小写

```
<!-- good -->
<img src="xxx.jpg">
<div onclick="foo()"></div>

<!-- bad -->
<img SRC="xxx.jpg">
<div onClick="foo()"></div>
```

##### [建议] 自定义属性以 `data-` 开头
```
<!-- good -->
<img class="post-image" src="default.jpg" data-original="foo.png">

<!-- bad -->
<img class="post-image" src="default.jpg" original-image="foo.png">
```

##### [强制] 属性值必须用双引号包围

不允许使用单引号，不允许不加引号。

```
<!-- good -->
<img src="xxx.jpg">

<!-- bad -->
<img src='xxx.jpg'>
<img src='xxx.jpg>
```


##### [建议] 属性值必须小写（除了文本和 CDATA ）

```
<!-- good -->
<a href="" target="_blank">百度一下</a>

<!-- bad -->
<a href="" target="_BLANK">百度一下</a>
```

##### [建议] 布尔类型的属性不添加属性值 
 
```
<!-- good -->
<input type="text" disabled>
 
<input type="checkbox" checked>
 
<select>
	<option selected>1</option>
</select>

<!-- bad -->
<input type="text" disabled="true">
```

##### [建议] 属性应当按照以下给出的顺序依次排列

1. class
2. id, name
3. data-*
4. src, for, type, href
5. title, alt
6. aria-*, role

依据属性的重要程度来书写。
必须属性写在非必须属性前面。

class 用于标识组件，相当于一个元素的名称，因此应该排在首位。

id 用于标识具体组件，排在第二位。


## 4 常见元素

### 4.1 html

##### [建议] 为 html 元素添加 lang 属性

为文档设置正确的语言。

这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具自动翻译等等。

如果是中文，lang 属性值为 `zh-CN`。
```
<html lang="zh-CN">
```

### 4.2 head

##### [建议] head 元素各子元素按顺序编写

1. meta
2. title
3. link
4. script
5. style

### 4.3 title

##### [强制] title 元素必不可少

标题不可为空。

### 4.4 meta

##### [强制] 使用 `<meta charset="">` 来定义页面编码

页面必须指定编码。

```
<meta charset="utf-8">
```

##### [建议] 启用 IE 兼容模式

IE 支持通过特定的 <meta> 标签来确定绘制当前页面所应该采用的 IE 版本。除非有强烈的特殊需求，否则最好是设置为 edge mode，从而通知 IE 采用其所支持的最新的模式。

```
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

### 4.5 link

##### [强制] 使用 link 引用外部 css 文件时，必须加 `rel="stylesheet"`


```
<!-- good -->
<link rel="stylesheet" href="foo.css">

<!-- bad -->
<link rel="stylesheet" href="foo.css">
```

##### [强制] 使用 link 引用外部 css 文件时，不允许加 `type="text/css"`



HTML5 默认 type 为 `text/css`，所以没必要指定。即便是老浏览器也是支持的。

```
<!-- good -->
<link rel="stylesheet" href="foo.css">

<!-- bad -->
<link rel="stylesheet" type="text/css" href="foo.css">
```

##### [建议] 使用 link 引用外部 css 文件时，`rel="stylesheet"` 写在 href 属性前面

仅仅是为了对齐，看起来美观而已。

```
<!-- good -->
<link rel="stylesheet" href="foo.css">
<link rel="stylesheet" href="long-path/foo.css">

<!-- bad -->
<link href="foo.css" rel="stylesheet">
<link href="long-path/foo.css" rel="stylesheet" >
```

### 4.6 script

##### [强制] 使用script元素引用外部 javascript 文件时，不允许加 `type="text/javascript"` 

HTML5默认 script 元素的 type 为 `text/javascript` 类型，所以没必要指定。即便是老浏览器也是支持的。

```
<!-- good -->
<script src="foo.js"></script>

<!-- bad -->
<script type="text/javascript" src="foo.js"></script>
```

### 4.7 img


### 4.8 table

##### [强制] 除非必要，否则不要使用 `table` 元素来布局

除了显示表格数据外，尽可能避免使用表格来布局。

##### [强制] table 元素必须包含 thead 和 tbody 元素

如果不需要标题，thead 可以不写。

### 语义化元素

#### header

“网页”或“section”的页眉。也就是说header的直接父元素不是body就是section。通常显示网站标题，副标题，logo等信息。

#### footer

“网页”或“section”的页脚。也就是说header的直接父元素不是body就是section。显示版权等信息。

#### nav 

导航栏，网站的导航

## 5 其他

### 5.1 代码有效性

###  HTML代码有效性

##### [建议] 尽量使用有效的HTML代码

比如元素的闭合、必要的元素等等。

编写有效的HTML代码，否则很难达到性能上的提升。

用类似 [W3C HTML validator](http://validator.w3.org/)  这样的工具来进行测试。

HTML代码有效性是重要的质量衡量标准，并可确保HTML代码可以正确使用。

### 兼容性

大胆地使用 html5 语义标签，兼容性问题用 [html5shiv](https://github.com/aFarkas/html5shiv) 解决

### TODO

##### [建议] 用 TODO 标记代办事项和正活动的条目

说明：
只用 TODO 来强调代办事项， 不要用其他的常见格式，例如 @@ 。

附加联系人（用户名或电子邮件列表），用括号括起来，例如 TODO(contact) 。

可在冒号之后附加活动条目说明等，例如 TODO: 活动条目说明 。

```html
{# TODO(cha.jn): 重新置中 #}
<center>Test</center>
<!-- TODO: 删除可选元素 -->
<ul>
  <li>Apples</li>
  <li>Oranges</li>
</ul>
```

###  多媒体后备方案

##### [建议] 为多媒体提供备选内容

对于多媒体，如图像，视频，通过 canvas 读取的动画元素，确保提供备选方案。 对于图像使用有意义的备选文案（ alt ） 对于视频和音频使用有效的副本和文案说明。

提供备选内容是很重要的，原因：给盲人用户以一些提示性的文字，用 @alt 告诉他这图像是关于什么的，给可能没理解视频或音频的内容的用户以提示。

（图像的 alt 属性会产生冗余，如果使用图像只是为了不能立即用CSS而装饰的 ，就不需要用备选文案了，可以写 alt="" 。）


###  关注点分离

##### [建议] 尽可能保持结构（html）、表现（css）和行为（Javascript）分离。


确保文档和模板只包含HTML结构， 把所有表现都放到样式表里，把所有行为都放到脚本里。

此外，尽量使脚本和样式表在文档与模板中有最小接触面积，即减少外链。

具体见后面几条规范。

##### [建议] 尽量避免写在 HTML 标签中写 style 属性


##### [建议] 尽量避免 JavaScript 生成标签

通过 JavaScript 生成的标签让内容变得不易查找、编辑，并且降低性能。

##### [建议] 避免内联到 HTML 的 Javascript 代码

```
<!-- good -->
<a id="myId" href="javascript:;">foo</a>

$("#myId").on("click", handler);

<!-- bad -->
<a href="javascript:;" onclick="handler();">foo</a>
```

### 协议

##### [建议] 嵌入式资源书写省略协议头

省略图像、媒体文件、样式表和脚本等URL协议头部声明 ( http: , https: )。如果不是这两个声明的URL则不省略。

省略协议声明，使URL成相对地址，防止内容混淆问题和导致小文件重复下载。

```html
<!-- 不推荐 -->
<script src="http://www.google.com/js/gweb/analytics/autotrack.js"></script>
<!-- 推荐 -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>

/* 不推荐 */
.example {
  background: url(http://www.google.com/images/example);
}
/* 推荐 */
.example {
  background: url(//www.google.com/images/example);
}
```


### 实体引用

不要用实体引用。
不需要使用类似 &mdash; 、 &rdquo; 和 &#x263a; 等的实体引用, 假定团队之间所用的文件和编辑器是同一编码（UTF-8）。

在HTML文档中具有特殊含义的字符（例如 < 和 & )为例外， 噢对了，还有 “不可见” 字符 （例如no-break空格）。

<!-- 不推荐 -->
欧元货币符号是 `&ldquo;&eur;&rdquo;`。
<!-- 推荐 -->
欧元货币符号是 “€”。
