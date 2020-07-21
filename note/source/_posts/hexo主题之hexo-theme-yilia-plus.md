title: Hexo + GitHub Pages 搭建博客的教程
author: 知识铺
date: 2019-11-03 12:22:27
tags:
---
知识铺： 致力于打造轻知识点，持续更新每次的知识点较少，阅读不累。不占太多时间，不停地来唤醒记忆深处的知识点。   
**转载[http://www.cnblogs.com/bxm0927/p/6927340.html](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html)** 

**大概流程：**

1\. 搭建 Node.js 环境

2\. 搭建 Git 环境

3\. GitHub 注册和配置

4\. 安装配置 Hexo

5\. 关联 Hexo 与 GitHub Pages

6\. GitHub Pages 地址解析到个人域名

7\. Hexo 的常用操作

8\. 结束语

[搭建 Node.js 环境](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#nodejs)

为什么要搭建 Node.js 环境？ - 因为 Hexo 博客系统是基于 Node.js 编写的

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，可以在非浏览器环境下，解释运行 JS 代码。

在 Node.js 官网：[https://nodejs.org/en/](https://link.jianshu.com?t=https://nodejs.org/en/)下载安装包v6.10.3 LTS

保持默认设置即可，一路Next，安装很快就结束了。

然后打开命令提示符，输入node -v、npm -v，出现版本号则说明 Node.js 环境配置成功，第一步完成！！！

 ![](//upload-images.jianshu.io/upload_images/7643792-098cdf07aa42ce18.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/697/format/webp)

[搭建 Git 环境](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#git)

为什么要搭建 Git 环境？ - 因为需要把本地的网页和文章等提交到 GitHub 上。

Git 是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。

在 Git 官网：[https://git-scm.com/](https://link.jianshu.com?t=https://git-scm.com/)下载安装包Git-2.13.0-64-bit.exe

 ![](//upload-images.jianshu.io/upload_images/7643792-5f030dd5d67cc035.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/500/format/webp)

桌面右键，打开Git Bush Here，输入git --version，出现版本号则说明 Git 环境配置成功，第二步完成！！！

 ![](//upload-images.jianshu.io/upload_images/7643792-69a40a8f03ebb23c.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/921/format/webp)

[GitHub 注册和配置](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#github)

GitHub 是一个代码托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。

Github注册：[https://github.com/](https://link.jianshu.com?t=https://github.com/)

创建仓库：Repository name 使用自己的用户名，仓库名规则：

**注意**：yourname必须是你的用户名。

yourname/yourname.github.io

 ![](//upload-images.jianshu.io/upload_images/7643792-a4aa0f3b6806998f.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/900/format/webp)

访问 yourname.github.io，如果可以正常访问，那么 Github 的配置已经结束了。

到此搭建 Hexo 博客的相关环境配置已经完成，下面开始讲解 Hexo 的相关操作

[安装配置 Hexo](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#hexo)

Hexo 是一个快速、简洁且高效的博客框架，使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

强烈建议你花20分钟区读一读 Hexo 的官方文档：[https://hexo.io/zh-cn/](https://link.jianshu.com?t=https://hexo.io/zh-cn/)

 ![](//upload-images.jianshu.io/upload_images/7643792-ca813efea8ee1a1b.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/908/format/webp)

**使用 npm 安装 Hexo**：在命令行中输入

npm install hexo-cli -g

然后你将会看到下图，可能你会看到一个WARN，但是不用担心，这不会影响你的正常使用。

 ![](//upload-images.jianshu.io/upload_images/7643792-cd2b921e0eec4e7e.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/446/format/webp)

查看Hexo的版本

hexo version

 ![](//upload-images.jianshu.io/upload_images/7643792-54d7284db33fe788.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/595/format/webp)

安装 Hexo 完成后，请执行下列命令来初始化 Hexo，用户名改成你的，Hexo 将会在指定文件夹中新建所需要的文件。

hexo init bxm0927.github.io

cd bxm0927.github.io

npm install

新建完成后，指定文件夹的目录如下：

.

├── .deploy        #需要部署的文件

├── node_modules    #Hexo插件

├── public          #生成的静态网页文件

├── scaffolds      #模板

├── source          #博客正文和其他源文件，404、favicon、CNAME 都应该放在这里

| ├── _drafts      #草稿

| └── _posts        #文章

├── themes          #主题

├── _config.yml    #全局配置文件

└── package.json    #npm 依赖等

**运行本地 Hexo 服务**

hexo server

或者

hexo s

您的网站会在[http://localhost:4000](https://link.jianshu.com?t=http://localhost:4000/)下启动。如果[http://localhost:4000](https://link.jianshu.com?t=http://localhost:4000/)能够正常访问，则说明 Hexo 本地博客已经搭建起来了，只是本地哦，别人看不到的。下面，我们要部署到Github。

 ![](//upload-images.jianshu.io/upload_images/7643792-aa36ff1083e957b9.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/597/format/webp)

**注意1**：执行hexo server提示找不到该指令

解决办法：在Hexo 3.0 后server被单独出来了，需要安装server，安装的命令如下：

sudo npm install hexo-server

或者

npm install hexo -server --save

[关联 Hexo 与 GitHub Pages](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#hexo-github-pages)

我们如何让本地git项目与远程的github建立联系呢？用 SSH keys

**生成SSH keys**

输入你自己的邮箱地址

ssh-keygen -t rsa -C "80583600@qq.com"

在回车中会提示你输入一个密码，这个密码会在你提交项目时使用，如果为空的话提交项目时则不用输入，我们按回车不设置密码。

**添加 SSH Key 到 GitHub**

打开C:\Users\bxm09\.ssh\id_rsa.pub，此文件里面内容为刚才生成的密钥，准确的复制这个文件的内容，粘贴到[https://github.com/settings/ssh](https://link.jianshu.com?t=https://github.com/settings/ssh)的new SSH key中

**测试**

可以输入下面的命令，看看设置是否成功，git@github.com的部分不要修改：

ssh -T git@github.com

如果是下面的反馈：

The authenticity of host ‘github.com (207.97.227.239)’ can’t be established.

RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.

Are you sure you want to continue connecting (yes/no)?

不要紧张，输入yes就好，然后会看到：

Hi aierui! You've successfully authenticated, but GitHub does not provide shell access.

**配置Git个人信息**

现在你已经可以通过 SSH 链接到 GitHub 了，还有一些个人信息需要完善的。

Git 会根据用户的名字和邮箱来记录提交。GitHub 也是用这些信息来做权限的处理，输入下面的代码进行个人信息的设置，把名称和邮箱替换成你自己的。

git config --global user.name "bxm0927"

git config --global user.email "80583600@qq.com"

**配置 Deployment**

在_config.yml文件中，找到Deployment，然后按照如下修改，用户名改成你的：

需要注意的是：冒号后面记得空一格！

# Deployment

## Docs: https://hexo.io/docs/deployment.html

deploy:

type: git

repo: git@github.com:bxm0927/bxm0927.github.io.git

branch: master

**本地文件提交到 GitHub Pages**

// 删除旧的 public 文件

hexo clean

// 生成新的 public 文件

hexo generate

或者

hexo g

// 开始部署

hexo deploye

或者

hexo d

在浏览器中输入[https://bxm0927.github.io](https://link.jianshu.com?t=https://bxm0927.github.io/)（用户名改成你的）看到了 Hexo 与 GitHub Pages 已经成功关联了，哇哇哇哇哇哇，开心死你了，不要忘了回来给我点赞哟 ~

**注意1**：若上面操作失败，则需要提前安装一个扩展：

npm install hexo-deployer-git --save

**注意2**：如果在执行hexo d后,出现error deployer not found:github的错误（如下），则是因为没有设置好 public key 所致，重新详细设置即可。

Permission denied (publickey).

fatal: Could not read from remote repository.

Please make sure you have the correct access rights

and the repository exists.

**注意3**：怎么避免 .md 文件被解析？

Hexo原理就是hexo在执行hexo generate时会在本地先把博客生成的一套静态站点放到public文件夹中，在执行hexo deploy时将其复制到.deploy文件夹中。Github的版本库通常建议同时附上README.md说明文件，但是hexo默认情况下会把所有md文件解析成html文件，所以即使你在线生成了 README. md，它也会在你下一次部署时被删去。怎么解决呢？

在执行hexo deploy前把在本地写好的README.md文件复制到.deploy文件夹中，再去执行hexo deploy。

[GitHub Pages 地址解析到个人域名](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#github-pages)

Github Pages 是面向用户、组织和项目开放的公共静态页面搭建托管服 务，站点可以被免费托管在 Github 上，你可以选择使用 Github Pages 默 认提供的域名 github.io 或者自定义域名来发布站点。

看着博客的域名是二级域名，总有一种寄人篱下的感觉，为了让这个小窝看起来更加正式，我在阿里云上买了一个域名，打算将博客绑定自己的域名。

进行该绑定过程，其实就是一个重定向的过程。

在 GitHub 仓库的根目录下建立一个CNAME的文本文件(注意：没有扩展名)，文件里面只能输入一个你的域名，不能加http://

www.lovebxm.com

注意：CNAME 一定是在你 Github 项目的 master 根目录下

进入[阿里云域名解析地](https://link.jianshu.com?t=https://dc.aliyun.com/tcparse/dns.htm)址，添加解析：

记录类型选择CNAME

主机记录填www

解析线路选择默认

记录值填yourname.github.io

TTL值为10分钟

再添加一个解析，记录类型A

主机记录填www

解析线路选择默认

记录值填你GitHub 的ip地址（在cmd中ping：）

ping bxm0927.github.com

 ![](//upload-images.jianshu.io/upload_images/7643792-6e1f8982bf8b3182.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/767/format/webp)

点击保存，等 1 分钟，访问下你自己的域名，一切就ok了。

域名绑定成功，域名解析成功，因此你在浏览中输入[www.lovebxm.com](https://link.jianshu.com?t=http://www.lovebxm.com/)，或 lovebxm.com 就可以访问到博客了，输入 bxm0927.github.io 会重定向到[www.lovebxm.com](https://link.jianshu.com?t=http://www.lovebxm.com/)。过程：www 的方式，会先解析成[http://xxxx.github.io](https://link.jianshu.com?t=http://xxxx.github.io/)，然后根据 CNAME 再变成 www

**注意**：CNAME文件在下次hexo deploy的时候就消失了，需要重新创建，这样就很繁琐

方法一：每次hexo d之后，就去 GitHub 仓库根目录新建 CNAME文件

方法二：在hexo g之后，hexo d之前，把CNAME文件复制到 “\public" 目录下面，里面写入你要绑定的域名。

方法三（推荐）：将需要上传至github的内容放在source文件夹，例如CNAME、favicon.ico、images等，这样在 hexo d 之后就不会被删除了。

方法四：通过安装插件实现永久保留

$ npm install hexo-generator-cname --save

之后在_config.yml中添加一条

plugins:

- hexo-generator-cname

需要注意的是：如果是在github上建立的CNAME文件，需要先clone到本地，然后安装插件，在deploy上去即可。CNAME只允许一个域名地址。

**注意1**：每次生成的 CNAME 都是 yoursite.com 怎么解决？

修改 _config.yml

url: http://www.lovebxm.com

root: /

permalink: :year/:month/:day/:title/

permalink_defaults:

[Hexo 的常用操作](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#hexo_1)

[发表一篇文章](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#_1)

hexo new "文章标题"

D:\GitHub\Hexo\test>hexo new "文章标题"

INFO  Created: D:\GitHub\Hexo\test\source\_posts\文章标题.md

在本地博客文件夹source\_posts文件夹下看到我们新建的 markdown 文件。

当然，我们也可以手动添加Markdown文件在source->_deploy文件夹下，其效果同样可以媲美hexo new

文章编辑好之后，运行生成、部署命令：

hexo clean

hexo g

hexo d

当然你也可以执行下面的命令，相当于上面两条命令的效果

hexo clean

hexo d -g

[新建一个自定义页面](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#_2)

hexo new page folder

[文章如何添加多个标签](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#_3)

有两种多标签格式

tags: [a, b, c]

或

tags:

- a

- b

- c

[显示部分文章内容](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#_4)

如果在博客文章列表中，不想全文显示，可以增加, 后面的内容就不会显示在列表。

[更改主题](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#_5)

官方主题库：[https://hexo.io/themes/](https://link.jianshu.com?t=https://hexo.io/themes/)

Hexo主题非常，推荐使用Next为主题，请阅读 Next 的官方文档（[http://theme-next.iissnan.com/](https://link.jianshu.com?t=http://theme-next.iissnan.com/)），5 分钟快速安装。

再提示一点，大家可以hexo主题修改一步就hexo s看下变化，初次接触对参数不清楚。只有hexo s后在可以在本地浏览到效果，Ctrl+C 停止服务器。

[添加插件](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#_6)

添加 sitemap 和 feed 插件

切换到你本地的 hexo 目 CIA ，在命令行窗口，输入以下命令

npm install hexo-generator-feed -save

npm install hexo-generator-sitemap -save

修改_config.yml，增加以下内容

# Extensions

Plugins:

- hexo-generator-feed

- hexo-generator-sitemap

#Feed Atom

feed:

type: atom

path: atom.xml

limit: 20

#sitemap

sitemap:

path: sitemap.xml

再执行以下命令，部署服务端

hexo d -g

配完之后，就可以访问[https://bxm0927.github.io/atom.xml](https://link.jianshu.com?t=https://bxm0927.github.io/atom.xml)和[https://bxm0927.github.io/sitemap.xml](https://link.jianshu.com?t=https://bxm0927.github.io/sitemap.xml)，发现这两个文件已经成功生成了。

[添加 404 页面](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#404)

GitHub Pages 自定义404页面非常容易，直接在根目录下创建自己的404.html就可以。但是自定义404页面仅对绑定顶级域名的项目才起作用，GitHub默认分配的二级域名是不起作用的，使用hexo server在本机调试也是不起作用的。

 ![](//upload-images.jianshu.io/upload_images/7643792-3f00253127be7f92.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/667/format/webp)

其实，404页面可以做更多有意义的事，来做个404公益项目吧。

推荐使用腾讯公益404[http://www.qq.com/404/](https://link.jianshu.com?t=http://www.qq.com/404/)：

src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js"

charset="utf-8"

homePageUrl="http://www.lovebxm.com/"

homePageName="回到我的主页">

复制上面代码，贴粘到目录下新建的404.html即可！

[多PC同步管理博客](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#pc)

很多人可能家里一台笔记本，公司一个台式机，想两个同时管理博客，同时达到备份的博客主题、文章、配置的目的。下面就介绍一下用github来备份博客并同步博客。

A电脑备份博客内容到github

配置.gitignore文件。进入博客目录文件夹下，找到此文件，用sublime text 打开，在最后增加两行内容/.deploy_git和/public

初始化仓库。

在博客根目录下，在git bash下依次执行git init和git remote add origin 为远程仓库地址。

同步到远程仓库。

gitbash下依次执行以下命令

git add . #添加目录下所有文件

git commit -m "更新说明" #提交并添加更新说明

git push -u origin master #推送更新到远程仓库

B电脑拉下远程仓库文件

在B电脑上同样先安装好node、git、ssh、hexo，然后建好hexo文件夹，安装好插件，（然后选做：将备份到远程仓库的文件及文件夹删除），然后执行以下命令：

git init

git remote add origin

git fetch --all

git reset --hard origin/master

发布博客后同步

在B电脑发布完博客之后，记得将博客备份同步到远程仓库

执行以下命令：

git add .

#可以用git master 查看更改内容

git commit -m "更新信息"

git push -u origin master  #以后每次提交可以直接git push

平时同步管理

每次想写博客时，先执行：git pull进行同步更新。发布完文章后同样按照上面的 发布博客后同步 同步到远程仓库。

[中文乱码](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#_7)

在 md 文件中写中文内容，发布出来后为乱码，原因是 md 的编码不对，将 md 文件另存为UTF-8编码的文件即可解决问题。

[结束语](https://link.jianshu.com?t=http://www.cnblogs.com/bxm0927/p/6927340.html#_8)

建站的系统有很多，如：

-[Hexo + GitHub Pages](https://link.jianshu.com?t=https://hexo.io/zh-cn/)

-[Jekyll + GitHub Pages](https://link.jianshu.com?t=http://jekyll.com.cn/)

-[WordPress + 服务器 + 域名](https://link.jianshu.com?t=https://cn.wordpress.org/)

-[DeDeCMS + 服务器 + 域名](https://link.jianshu.com?t=http://www.dedecms.com/)

- …

使用 Hexo + GitHub Pages 建站，有优点也有缺点：

- GitHub Pages 不支持数据库管理，所以你只能做静态页面的博客，不能像其他博客（如 WordPress）那样通过数据库管理自己的博客内容。

- 但是，GitHub Pages 无需购置服务器，免服务器费的同时还能做负载均衡，github pages有300M免费空间。

- 个人博客真的有必要用数据库吗？答案是否定的。博客静态化，评论记录使用第三方的[网易云跟帖](https://link.jianshu.com?t=https://gentie.163.com/info.html)就可以了。静态的博客更有利于搜索引擎蜘蛛爬取，轻量化的感觉真的很好。

- 通过 Hexo 你可以轻松地使用 Markdown 编写文章，非常符合我的口味。Markdown 真的是专门针对程序员开发的语言啊，现在感觉没有 Markdown什么都不想写。什么富文本编辑器，什么word，太麻烦了！而且样式都好丑！效率太低！

推荐几个很好用的在线 Markdown 编辑器：

- 作业部落：[https://www.zybuluo.com/mdeditor](https://link.jianshu.com?t=https://www.zybuluo.com/mdeditor)

- 马克飞象：[https://maxiang.io](https://link.jianshu.com?t=https://maxiang.io/)

推荐图床：

-[极简图床 + chrome 插件 + 七牛空间](https://link.jianshu.com?t=https://jiantuku.com/#/)，七牛云储存提供10G的免费空间,以及每月10G的流量，存放个人博客外链图片最好不过了，七牛云储存还有各种图形处理功能、缩略图、视频存放速度也给力。