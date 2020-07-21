---
categories:
- Docker
tags:
- Docker  
keywords: 知识铺,Docker
date: 2019-11-11T22:27:21+08:00
title: Docker 从入门到实践 - 使用 buildx 构建多种系统架构支持的 Docker 镜像
author: 知识铺
weight: -1
---

# 使用 buildx 构建多种系统架构支持的 Docker 镜像

在之前的版本中构建多种系统架构支持的 Docker 镜像，要想使用统一的名字必须使用 [`$ docker manifest`](manifest.md) 命令。

在 Docker 19.03+ 版本中可以使用 `$ docker buildx build` 命令使用 `BuildKit` 构建镜像。

该命令支持 `--platform` 参数可以同时构建支持多种系统架构的 Docker 镜像，大大简化了构建步骤。

## 设置环境变量

`buildx` 命令属于实验特性，必须设置环境变量以使用该命令。

Linux/macOS

```bash
$ export DOCKER_CLI_EXPERIMENTAL=enabled
```

Windows

```bash
$ set $env:DOCKER_CLI_EXPERIMENTAL=enabled
```

## 新建 `builder` 实例

Docker for Linux 不支持构建 `arm` 架构镜像，我们可以运行一个新的容器让其支持该特性，Docker 桌面版无需进行此项设置。

```bash
$ docker run --rm --privileged docker/binfmt:820fdd95a9972a5308930a2bdfb8573dd4447ad3
```

由于 Docker 默认的 `builder` 实例不支持同时指定多个 `--platform`，我们必须首先创建一个新的 `builder` 实例。

```bash
$ docker buildx create --name mybuilder

$ docker buildx use mybuilder
```

## 构建镜像

新建 Dockerfile 文件。

```docker
FROM --platform=$TARGETPLATFORM alpine

RUN uname -a > /os.txt

CMD cat /os.txt
```

使用 `$ docker buildx build` 命令构建镜像，注意将 `myusername` 替换为自己的 Docker Hub 用户名。

`--push` 参数表示将构建好的镜像推送到 Docker 仓库。

```bash
$ docker buildx build --platform linux/arm,linux/arm64,linux/amd64 -t myusername/hello . --push

# 查看镜像信息
$ docker buildx imagetools inspect myusername/hello
```

在不同架构运行该镜像，可以得到该架构的信息。

```bash
# arm
$ docker run -it --rm myusername/hello
Linux buildkitsandbox 4.9.125-linuxkit #1 SMP Fri Sep 7 08:20:28 UTC 2018 armv7l Linux

# arm64
$ docker run -it --rm myusername/hello
Linux buildkitsandbox 4.9.125-linuxkit #1 SMP Fri Sep 7 08:20:28 UTC 2018 aarch64 Linux

# amd64
$ docker run -it --rm myusername/hello
Linux buildkitsandbox 4.9.125-linuxkit #1 SMP Fri Sep 7 08:20:28 UTC 2018 x86_64 Linux
```
