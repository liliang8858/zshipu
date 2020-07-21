title: 学习使用 webpack（2）---环境搭建
author: 知识铺
date: 2020-04-16 20:00:33
tags:
---
### 在使用_webpack_前首先需要安装 _Node.js_环境。进入_Node.js_官网下载最新长期维护版本即可

### 1.安装_webpack_

 Sh

```
 npm install webpack webpack -D 
```

这里不推荐全局安装

### 2.构建项目

 Sh

```
npm init -y 
```
在生成的package.json中，添加 “private”: true(私有)， 若项目不作为模块供外部调用则去除”main”: index.js。

Package.json如下

 Json
```
 {
 "name": "webpack_demo",
 "version": "1.0.0",
 "description": "",
 "private": true,
 "scripts": {},
 "keywords": [],
 "author": "Felix Ma",
 "license": "ISC",
 "dependencies": {
 "webpack": "^4.42.1",
 "webpack-cli": "^3.3.11"
 }
} 
```

使用命令

 Sh

```
 npx webpack 
```

可调用项目中安装的webpack