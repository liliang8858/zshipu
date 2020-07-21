---
categories:
- Docker
tags:
- Docker  
keywords: 知识铺,Docker
date: 2019-11-11T22:27:21+08:00
title: Docker 从入门到实践 - 开源的高效的 Web 服务器
author: 知识铺
weight: -1
---

## [Nginx](https://hub.docker.com/_/nginx/)

### 基本信息

[Nginx](https://en.wikipedia.org/wiki/Nginx) 是开源的高效的 Web 服务器实现，支持 HTTP、HTTPS、SMTP、POP3、IMAP 等协议。

该仓库位于 `https://hub.docker.com/_/nginx/` ，提供了 Nginx 1.0 ~ 1.17.x 各个版本的镜像。

### 使用方法

下面的命令将作为一个静态页面服务器启动。

```bash
$ docker run --name some-nginx -v /some/content:/usr/share/nginx/html:ro -d nginx
```

用户也可以不使用这种映射方式，通过利用 Dockerfile 来直接将静态页面内容放到镜像中，内容为

```bash
FROM nginx
COPY static-html-directory /usr/share/nginx/html
```

之后生成新的镜像，并启动一个容器。

```bash
$ docker build -t some-content-nginx .
$ docker run --name some-nginx -d some-content-nginx
```

开放端口，并映射到本地的 `8080` 端口。

```bash
$ docker run --name some-nginx -d -p 8080:80 some-content-nginx
```

Nginx的默认配置文件路径为 `/etc/nginx/nginx.conf`，可以通过映射它来使用本地的配置文件，例如

```bash
$ docker run -d \
    --name some-nginx \
    -v /some/nginx.conf:/etc/nginx/nginx.conf:ro \
    nginx
```

### Dockerfile

请到 https://github.com/docker-library/docs/tree/master/nginx 查看。
