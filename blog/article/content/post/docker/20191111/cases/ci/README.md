---
categories:
- Docker
tags:
- Docker  
keywords: 知识铺,Docker
date: 2019-11-11T22:27:21+08:00
title: Docker 从入门到实践 - CI/CD
author: 知识铺
weight: -1
---

# CI/CD

**持续集成(Continuous integration)** 是一种软件开发实践，每次集成都通过自动化的构建（包括编译，发布，自动化测试）来验证，从而尽早地发现集成错误。

**持续部署(continuous deployment)** 是通过自动化的构建、测试和部署循环来快速交付高质量的产品。

与 `Jenkins` 不同的是，基于 Docker 的 CI/CD 每一步都运行在 Docker 容器中，所以理论上支持所有的编程语言。
