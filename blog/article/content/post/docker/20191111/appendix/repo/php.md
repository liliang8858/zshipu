---
categories:
- Docker
tags:
- Docker  
keywords: 知识铺,Docker
date: 2019-11-11T22:27:21+08:00
title: Docker 从入门到实践 - 可嵌入到 HTML 中，尤其适合 web 开发
author: 知识铺
weight: -1
---

## [PHP](https://hub.docker.com/_/php/)

### 基本信息

[PHP](https://en.wikipedia.org/wiki/php)（Hypertext Preprocessor 超文本预处理器的字母缩写）是一种被广泛应用的开放源代码的多用途脚本语言，它可嵌入到 HTML 中，尤其适合 web 开发。

该仓库位于 `https://hub.docker.com/_/php/` ，提供了 PHP 5.x ~ 7.x 各个版本的镜像。

### 使用方法

下面的命令将运行一个已有的 PHP 脚本。

```bash
$ docker run -it --rm -v "$PWD":/app -w /app php:alpine php your-script.php
```

### Dockerfile

请到 https://github.com/docker-library/docs/tree/master/php 查看。
