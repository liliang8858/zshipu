title: hexo-admin安装使用
author: 知识铺
date: 2019-11-03 13:10:40
tags:
---
知识铺： 致力于打造轻知识点，持续更新每次的知识点较少，阅读不累。不占太多时间，不停地来唤醒记忆深处的知识点。   
hexo-admin是一个很好用hexo管理工具，方便文章的编辑和查看，对插入图片友好。

## 概要

如果自己编辑 MD 文件的话，确实比较麻烦，你可以用一些 MD 的编辑器，但是在管理 MD 文件上还是操作不方便。
这里推荐使用 hexo-admin，而且编辑完之后可以马上看到效果呢。
需要说明的是，hexo-admin 管理是本地用的，就是你需要在本地编辑完之后再上传到 github，而不能直接在线编辑保存，因为 github pages 只支持静态页面的。

## 安装过程

安装过程中可能涉及到一些前提或内容，请参考我的另一篇文章
[Hexo-Github-Pages安装部署](https://albenw.github.io/posts/3454819c/ "Hexo-Github-Pages安装部署")

### 前提

基于版本”hexo”: “^3.7.0”，”hexo-admin”: “^2.3.0”。

### 安装 hexo-admin

cd hexo 目录

| 1 | npm install --save hexo-admin |

启动 hexo

| 1 | hexo s |

然后打开 [http://localhost:4000/admin/](http://localhost:4000/admin/) 就可以看到管理页面。

### 在 hexo-admin 你可以

[![](https://albenw.github.io/images/hexo-admin%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8__0.png)](https://albenw.github.io/images/hexo-admin%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8__0.png)

Pages - 新加 page；
Posts - 新加或删除 post；双击一个 post，你可以编辑，预览，新增修改 tags、categories，选择发布或不发布；
Settings - 一些配置；
Deploy - 可以直接部署到 github。

### 问题

#### minimatch

| 1 | npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue |

当你安装 hexo-admin，执行 npm install –save hexo-admin 时，可能会遇到上面的错误提示，是因为你缺少了一些依赖，执行下面的就好了。

| 1
2 | npm install minimatch@"3.0.2" 
npm update -d |

#### Config value “admin.deployCommand” not found

当你第一次点击 Deploy 按钮时，可能会遇到上述的错误，因为缺少了执行 deploy 的命令，这个问题已经有人提了 issue 并且解决了
[https://github.com/jaredly/hexo-admin/issues/70](https://github.com/jaredly/hexo-admin/issues/70)
还需要注意的是，issue 中的脚本只是 hexo deploy，只是做 deploy 操作，但是一般我们的使用习惯是编辑完之后 deploy，所以是要 deploy 最新的，需要把脚本改为即可

| 1
2
3 | #!/usr/bin/env sh
hexo g
hexo d |

deploy 后你可能看到

| 1
2
3
4 | Std Error
(node:83411) [DEP0061] DeprecationWarning: fs.SyncWriteStream is deprecated.
Warning: Permanently added the RSA host key for IP address '13.229.188.59' to the list of known hosts.
Everything up-to-date |

这不是错误，你可以不用管。说明已经 deploy 成功。

#### 复制图片时的一个小问题

hexo-admin 编辑时支持直接复制图片（截图）到内容，这点是我比较喜欢的。但是有个问题，复制进去后是加载不出来的，会出现图裂的小图标。
[![](https://albenw.github.io/images/hexo-admin%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8__1.png)](https://albenw.github.io/images/hexo-admin%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8__1.png)
这时你只需要点击别的页面，再点回来就可以看到了，就是“刷”一下就好了，最简单的就是点击右上角打勾的按钮，这个按钮的作用是拼写检查，点一下再点回来，就可以看到你刚复制进去的图片了。
[![](https://albenw.github.io/images/hexo-admin%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8__2.png)](https://albenw.github.io/images/hexo-admin%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8__2.png)
这大概是因为 hexo-admin 对图片做了延迟加载，具体可以看看这篇文章说的
[https://htchz.me/2018/03/10/Hexo/](https://htchz.me/2018/03/10/Hexo/)

## 参考资料

[https://www.jianshu.com/p/68e727dda16d](https://www.jianshu.com/p/68e727dda16d)
[https://blog.kinpzz.com/2016/12/31/hexo-admin-backend-management/](https://blog.kinpzz.com/2016/12/31/hexo-admin-backend-management/)
[https://github.com/jaredly/hexo-admin](https://github.com/jaredly/hexo-admin)