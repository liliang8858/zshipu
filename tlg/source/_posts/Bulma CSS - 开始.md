
title: Bulma CSS - 开始
author: 知识铺
date: 2020-05-24 18:54:52
tags:
---
  

# [Bulma CSS - 开始](https://zshipu.com/t?url=https://www.cnblogs.com/jinbuqi/p/10904028.html)

* * *

### Bulma CSS框架教程

[Bulma CSS – 简介](https://zshipu.com/t?url=https://www.qikegu.com/docs/2507)
[Bulma CSS – 开始](https://zshipu.com/t?url=https://www.qikegu.com/docs/2508)
[Bulma CSS – CSS类](https://zshipu.com/t?url=https://www.qikegu.com/docs/2509)
[Bulma CSS – 模块化](https://zshipu.com/t?url=https://www.qikegu.com/docs/2510)
[Bulma CSS – 响应式](https://zshipu.com/t?url=https://www.qikegu.com/docs/2511)

* * *

有数种方法可以安装Bulma：

1.  使用npm安装Bulma包
2.  使用cdnjs CDN链接到Bulma样式表
3.  从GitHub项目库获得最新的开发版本

#### 1\. 使用npm安装Bulma包

<code class="language-shell hljs">npm install bulma</code> 
#### 2\. 使用cdnjs CDN

[https://cdnjs.com/libraries/bulma](https://zshipu.com/t?url=https://cdnjs.com/libraries/bulma)

#### 3\. 从GitHub项目库下载

[https://github.com/jgthms/bulma/tree/master/css](https://zshipu.com/t?url=https://github.com/jgthms/bulma/tree/master/css)

> #### Font Awesome 字体图标
> 
> 如果想使用图标，可加上Font Awesome 字体图标库：
> 
> <code class="language-html hljs xml"><script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script></code>

### 规范要求

Bulma能正常工作需要把网页设置为支持响应式。

#### 1\. 使用HTML5 doctype

<code class="language-html hljs xml"><!DOCTYPE html></code> 
#### 2\. 添加支持响应式的viewport元标记

<code class="language-html hljs xml"><meta name="viewport" content="width=device-width, initial-scale=1"></code> 
### 起始模板

可以使用下面的模板作为写网页的起始模板：

<code class="language-html hljs xml"><!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>
  </body>
</html></code> 
### Bulma-start

如果习惯使用npm，可以使用Bulma-start。

Bulma-start是一个很小的npm包，包含了使用Bulma开发网站的全部依赖项。

Bulma-start 安装

<code class="language-shell hljs">npm install bulma-start</code> 

或者

<code class="language-shell hljs">yarn add bulma-start</code> 

详情可参考[项目网址](https://zshipu.com/t?url=https://github.com/jgthms/bulma-start)

