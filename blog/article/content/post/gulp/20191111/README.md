---
categories:
- gulp
tags:
- gulp  
keywords: 知识铺,gulp
date: 2019-11-11T21:01:32+08:00
title: Gulp 入门指南 -gulp 入门指南
author: 知识铺
weight: -1
---

gulp 入门指南
===========

gulp 是基于 node 实现 Web 前端自动化开发的工具，利用它能够极大的提高开发效率。

在 Web 前端开发工作中有很多“重复工作”，比如压缩CSS/JS文件。而这些工作都是有规律的。找到这些规律，并编写 gulp 配置代码,让 gulp 自动执行这些“重复工作”。



**因为 Node 的全局包安装都是在C盘，所有请在C盘使用 gulp 以方便熟悉 gulp **

> 相关教程：[webpack-book](https://github.com/nimojs/webpack-book)

## 目录

- [安装 Node 和 gulp](https://blog.zshipu.com/article/post/gulp/20191111/chapter1/)
- [使用 gulp 压缩 JS](https://blog.zshipu.com/article/post/gulp/20191111/chapter2/)
- [使用 gulp 压缩 CSS](https://blog.zshipu.com/article/post/gulp/20191111/chapter3/)
- [使用 gulp 压缩图片](https://blog.zshipu.com/article/post/gulp/20191111/chapter4/)
- [使用 gulp 编译 LESS](https://blog.zshipu.com/article/post/gulp/20191111/chapter5/)
- [使用 gulp 编译 Sass](https://blog.zshipu.com/article/post/gulp/20191111/chapter5/)
- [使用 gulp 构建一个项目](https://blog.zshipu.com/article/post/gulp/20191111/chapter7/)




将规律转换为 gulp 代码
-------------------

现有目录结构如下：

```
└── js/
    └── a.js
```

### 规律

1. 找到 js/目录下的所有 .js 文件
2. 压缩这些 js 文件
3. 将压缩后的代码另存在 dist/js/ 目录下

### 编写 gulp 代码

```js
// 压缩 JavaScript 文件
gulp.task('script', function() {
    // 1. 找到
    gulp.src('js/*.js')
    // 2. 压缩
        .pipe(uglify())
    // 3. 另存
        .pipe(gulp.dest('dist/js'));
});
```

### 代码执行结果

代码执行后文件结构

```
└── js/
│   └── a.js
└── dist/
    └── js/
        └── a.js
```

a.js 压缩前
```
function demo (msg) {
    alert('--------\r\n' + msg + '\r\n--------')
}

demo('Hi')
```
a.js 压缩后
```
function demo(n){alert("--------\r\n"+n+"\r\n--------")}demo("Hi");
```

此时 `dist/js` 目录下的 `.js` 文件都是压缩后的版本。

你还可以监控 `js/` 目录下的 js 文件，当某个文件被修改时，自动压缩修改文件。启动 gulp 后就可以让它帮助你自动构建 Web 项目。

-----------------

gulp 还可以做很多事，例如：

1. 压缩CSS
2. 压缩图片
3. 编译Sass/LESS
4. 编译CoffeeScript
5. markdown 转换为 html

[开始阅读：安装 Node 和 gulp](https://blog.zshipu.com/article/post/gulp/20191111/chapter1/)
