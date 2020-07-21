
title: git pull报错：error: RPC failed; curl 56 OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 10054
author: 知识铺
date: 2020-06-29 09:31:22
tags:
---
 错误信息
```
1.  error: RPC failed; curl 56 OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 10054

2.  fatal: the remote end hung up unexpectedly

3.  fatal: protocol error: bad pack header
``` 

在百度上搜了一堆都没有解决，都是一些相同的答案，比如：

git config --global http.postBuffer 524288000

git config  --global   http.sslVerify "false"

但是，都行不通，最后去google找到了答案，并解决了问题：
```git config --global pack.windowMemory "100m"```
```git config --global pack.SizeLimit "100m" ```
```git config --global pack.threads "1"```
```git config --global pack.window "0"```
