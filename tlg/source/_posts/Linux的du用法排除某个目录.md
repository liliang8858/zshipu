
title: Linux的du用法排除某个目录
author: 知识铺
date: 2020-06-17 16:47:00
tags:
---
 *   例如我想得到根目录下所有目录或文件的占用空间大小，并且想要排除名字中包含 proc 的文件或目录，可以使用如下命令

```du -sh /* --exclude="proc"
或使用 模糊匹配 都行
du -sh /* --exclude="*proc*"``` 

*   1
*   2
*   3

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190415101755609.png)

*   扩展内容，想要排除多个文件或文件夹，且只想看到空间大于 G 的结果

```du -sh /* \
--exclude="proc" \
--exclude="cgroup" \
--exclude="selinux" \
--exclude="*bin" \
--exclude="lib*" \
--exclude="etc" \
--exclude="sys" \
--exclude="boot" \
--exclude="data*" | grep G``` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7
*   8
*   9
*   10

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190415101836497.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FieXNsbGw=,size_16,color_FFFFFF,t_70)
