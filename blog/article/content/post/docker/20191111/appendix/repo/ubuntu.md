---
categories:
- Docker
tags:
- Docker  
keywords: 知识铺,Docker
date: 2019-11-11T22:27:21+08:00
title: Docker 从入门到实践 - 流行的 Linux 发行版
author: 知识铺
weight: -1
---

## [Ubuntu](https://hub.docker.com/_/ubuntu/)

### 基本信息

[Ubuntu](https://en.wikipedia.org/wiki/Ubuntu) 是流行的 Linux 发行版，其自带软件版本往往较新一些。

该仓库位于 `https://hub.docker.com/_/ubuntu/` ，提供了 Ubuntu 从 12.04 ~ 19.04 各个版本的镜像。

### 使用方法

默认会启动一个最小化的 Ubuntu 环境。

```bash
$ docker run --name some-ubuntu -it ubuntu:18.04
root@523c70904d54:/#
```

### Dockerfile

请到 https://github.com/docker-library/docs/tree/master/ubuntu 查看。
