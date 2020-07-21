---
categories:
- Docker
tags:
- Docker  
keywords: 知识铺,Docker
date: 2019-11-11T22:27:21+08:00
title: Docker 从入门到实践 - Docker 三剑客之 Docker Swarm
author: 知识铺
weight: -1
---

# Docker 三剑客之 Docker Swarm

Docker Swarm 是 Docker 官方三剑客项目之一，提供 Docker 容器集群服务，是 Docker 官方对容器云生态进行支持的核心方案。

使用它，用户可以将多个 Docker 主机封装为单个大型的虚拟 Docker 主机，快速打造一套容器云平台。

注意：Docker 1.12.0+ [Swarm mode](https://docs.docker.com/engine/swarm/) 已经内嵌入 Docker 引擎，成为了 docker 子命令 `docker swarm`，绝大多数用户已经开始使用 `Swarm mode`，Docker 引擎 API 已经删除 Docker Swarm。为避免大家混淆旧的 `Docker Swarm` 与新的 `Swarm mode`，旧的 `Docker Swarm` 内容已经删除，请查看 `Swarm mode` 一节。
