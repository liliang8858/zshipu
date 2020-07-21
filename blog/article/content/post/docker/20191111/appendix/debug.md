---
categories:
- Docker
tags:
- Docker  
keywords: 知识铺,Docker
date: 2019-11-11T22:27:21+08:00
title: Docker 从入门到实践 - 如何调试 Docker
author: 知识铺
weight: -1
---

# 如何调试 Docker

## 开启 Debug 模式

在 dockerd 配置文件 daemon.json（默认位于 /etc/docker/）中添加

```json
{
  "debug": true
}
```

重启守护进程。

```bash
$ sudo kill -SIGHUP $(pidof dockerd)
```

此时 dockerd 会在日志中输入更多信息供分析。

## 检查内核日志

```bash
$ sudo dmesag |grep dockerd
$ sudo dmesag |grep runc
```

## Docker 不响应时处理

可以杀死 dockerd 进程查看其堆栈调用情况。

```bash
$ sudo kill -SIGUSR1 $(pidof dockerd)
```

## 重置 Docker 本地数据

*注意，本操作会移除所有的 Docker 本地数据，包括镜像和容器等。*

```bash
$ sudo rm -rf /var/lib/docker
```
