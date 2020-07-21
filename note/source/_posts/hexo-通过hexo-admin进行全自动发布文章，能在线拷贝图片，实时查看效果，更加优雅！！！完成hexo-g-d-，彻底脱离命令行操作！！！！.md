title: hexo 通过hexo-admin进行全自动发布文章，能在线拷贝图片，实时查看效果，更加优雅！！！完成hexo g -d ，彻底脱离命令行操作！！！！
author: 知识铺
tags:
  - hexo
categories: []
date: 2019-11-03 13:22:00
---

知识铺： 致力于打造轻知识点，持续更新每次的知识点较少，阅读不累。不占太多时间，不停地来唤醒记忆深处的知识点。  
源码：https://github.com/dataiyangu/dataiyangu.github.io

首先因为有的图片外链是不能查看的比如我们的csdn，这个时候需要先执行npm命令下载插件，再下载图片在复制到某个文件夹，再进行引用，真的是好麻烦，但是自从有了hexo-admin，妈妈再也不用担心我了，直接用qq截图或者复制某个图片，commad（control）+v到我们的hexo-admin即可，会自动下载，并引用～idea编辑器也不错但是不能实现拷贝图片的功能～

hexo-admin官网
https://jaredforsyth.com/hexo-admin/

npm install --save hexo-admin
hexo server -d
open http://localhost:4000/admin/
hexo根目录配置文件

admin:

username: zoro

password_hash:be121740bf988b2225a313fa1f107ca1 //用户名密码不喜欢的可以不设置，这里通过bcrypt hash

secret: hey hexo deploy//用以cookies安全；

Command: './admin_script/hexo-generate.sh' # expire: 60*1

这里的command对应于界面中的deploy按钮，在下面写上脚本，可以一键生成html页面，并提交到托管的地址，这就是hexo admin的核心思想！
commad后续操作：

在根目录新建admin_script，文件夹，进入执行：

touch hexo-generate.sh;
vim hexo-generate.sh;
在里面加入

#!/usr/bin/env sh
hexo clean
hexo g -d
//想加什么命令都可以，一键完成。
最后，修改权限

chmod +x hexo-generate.sh
登录界面

主页中的按钮：

还有一个publish按钮，点击的话会出现在blog相应的文件夹中，unpublish的话就会在文件夹中消失！！！！！！

Post：博客文章列表，包括已经发布的和还在草稿箱等待宠幸的；
Pages：就是诸如标签云之类的页面管理；
About：关于admin插件的说明
hexo-gen：这个原来是Deploy，被我修改了，关键节点；
Settings:配置；
注意：
(node:10338) [DEP0061] DeprecationWarning: fs.SyncWriteStream is deprecated.
hexo clean的时候会多一条警告，如上图，对程序不会有影响，原因是node.js版本的问题，对某些语句不支持，不是强迫症的可以不用管，强迫症的可以通过hexo --debug，对错误追踪，然后 mpn uninstall xxxx  --save卸载掉。   

————————————————   
版权声明：本文为CSDN博主「Leesin Dong」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/dataiyangu/article/details/83066586