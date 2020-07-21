title: ' centos虚拟内存设置'
author: 知识铺
date: 2019-11-12 21:44:11
tags:
---
### centos虚拟内存设置  
1. 查看内存   
```
free -m
```
2. 查看文件系统   
```
df -h
```
#### 增加虚拟内存
1. 开始设置
#if 表示infile，of表示outfile，bs=1024代表增加的模块大小，count=16384000代表16384000个模块，也就是16G空间   
```
dd if=/dev/zero of=/var/swap bs=1024 count=16384000
mkswap /var/swap
mkswap -f /var/swap
swapon /var/swap
```
2. 修改文件
```
vim /etc/fstab
```
添加一行
```
/var/swap swap swap defaults 0 0
```
3. 清除设置
```
swapoff /var/swap
```
删除/etc/fstab文件里上次添加的