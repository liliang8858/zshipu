title: macaca doctor之Android证书Not accepted Android SDK license agreements
author: 知识铺
date: 2020-04-09 17:02:16
tags:
---
# 简单介绍

在搭建macaca环境的过程中出现关于Android的"Not accepted Android SDK license agreements：....."问题。

### 解决如下：

#### 1、找到环境变量中"ANDROID_HOME"

使用"which Android"找到目录路径

#### 2、创建license

> mkdir "/Users/april_chou/Library/Android/sdk/licenses"
> 
> echo -e "\n8933bad161af4178b1185d1a37fbf41ea5269c55" > "/Users/april_chou/Library/Android/sdk/licenses/android-sdk-license"
> 
> echo -e "\n84831b9409646a918e30573bab4c9c91346d8abd" > "/Users/april_chou/Library/Android/sdk/licenses/android-sdk-preview-license"