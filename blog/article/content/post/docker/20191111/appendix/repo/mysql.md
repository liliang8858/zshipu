---
categories:
- Docker
tags:
- Docker  
keywords: 知识铺,Docker
date: 2019-11-11T22:27:21+08:00
title: Docker 从入门到实践 - 开源的关系数据库实现
author: 知识铺
weight: -1
---

## [MySQL](https://hub.docker.com/_/mysql/)

### 基本信息

[MySQL](https://en.wikipedia.org/wiki/MySQL) 是开源的关系数据库实现。

该仓库位于 `https://hub.docker.com/_/mysql/` ，提供了 MySQL 5.5 ~ 8.x 各个版本的镜像。

### 使用方法

默认会在 `3306` 端口启动数据库。

```bash
$ docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=mysecretpassword -d mysql
```

之后就可以使用其它应用来连接到该容器。

```bash
$ docker run --name some-app --link some-mysql:mysql -d application-that-uses-mysql
```

或者通过 `mysql` 命令行连接。

```bash
$ docker run -it --rm \
    --link some-mysql:mysql \
    mysql \
    sh -c 'exec mysql -h"$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD"'
```

### Dockerfile

请到 https://github.com/docker-library/docs/tree/master/mysql 查看
