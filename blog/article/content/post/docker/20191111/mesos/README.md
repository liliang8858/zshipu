---
categories:
- Docker
tags:
- Docker  
keywords: 知识铺,Docker
date: 2019-11-11T22:27:21+08:00
title: Docker 从入门到实践 - Mesos - 优秀的集群资源调度平台
author: 知识铺
weight: -1
---

# Mesos - 优秀的集群资源调度平台
Mesos 项目是源自 UC Berkeley 的对集群资源进行抽象和管理的开源项目，类似于操作系统内核，用户可以使用它很容易地实现分布式应用的自动化调度。

同时，Mesos 自身也很好地结合和主持了 Docker 等相关容器技术，基于 Mesos 已有的大量应用框架，可以实现用户应用的快速上线。

本章将介绍 Mesos 项目的安装、使用、配置以及核心的原理知识。