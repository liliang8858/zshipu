title: Hexo搭建个人博客
author: 知识铺
tags:
  - hexo
  - 个人博客
categories:
  - hexo
date: 2019-11-03 12:56:00
---
知识铺： 致力于打造轻知识点，持续更新每次的知识点较少，阅读不累。不占太多时间，不停地来唤醒记忆深处的知识点。
## Hexo

Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。
hexo官网： [http://hexo.io](https://links.jianshu.com/go?to=http%3A%2F%2Fhexo.io)
github: [https://github.com/hexojs/hexo](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fhexojs%2Fhexo)

### hexo优势

由于github pages存放的都是静态文件，hexo所做的就是将md文件都放在本地，每次写完文章后调用写好的命令来批量完成相关页面的生成，然后再将有改动的页面提交到github。
hexo具有以下特点：

> *   超快速度：Node.js 所带来的超快生成速度，让上百个页面在几秒内瞬间完成渲染
> *   支持 Markdown：Hexo 支持 GitHub Flavored Markdown 的所有功能，甚至可以整合 Octopress 的大多数插件
> *   一键部署：只需一条指令即可部署到 GitHub Pages, Heroku 或其他网站。
> *   丰富的插件：Hexo 拥有强大的插件系统，安装插件可以让 Hexo 支持 Jade, CoffeeScript

### 安装hexo

安装 Hexo 相当简单。然而在安装前，您必须检查电脑中是否已安装下列应用程序：

*   [Node.js](https://links.jianshu.com/go?to=http%3A%2F%2Fnodejs.org%2F) (Node.js 版本需不低于 8.6，建议使用 Node.js 10.0 及以上版本)
*   [Git](https://links.jianshu.com/go?to=http%3A%2F%2Fgit-scm.com%2F)

如果您的电脑中已经安装上述必备程序，那么恭喜您！接下来只需要使用 npm 即可完成 Hexo 的安装。

`npm install hexo-cli -g
hexo init 
npm install
hexo s` 

如果您的电脑中尚未安装所需要的程序，请根据hexo官网安装指示完成安装:[https://hexo.io/zh-cn/docs/](https://links.jianshu.com/go?to=https%3A%2F%2Fhexo.io%2Fzh-cn%2Fdocs%2F)。

### hexo指令

配置好之后，hexo就可以使用了，常用的hexo命令可访问[hexo指令](https://links.jianshu.com/go?to=https%3A%2F%2Fhexo.io%2Fzh-cn%2Fdocs%2Fcommands.html)。

`hexo new "postName" #新建文章
hexo new page "pageName" #新建页面
hexo generate #生成静态页面至public目录
hexo server #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
hexo deploy #部署到GitHub
hexo help  # 查看帮助
hexo version  #查看Hexo的版本` 

缩写形式：

`hexo n == hexo new
hexo g == hexo generate
hexo s == hexo server
hexo d == hexo deploy` 

组合命令

`hexo s -g #生成并本地预览
hexo d -g #生成并上传` 
## Github

GitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名GitHub。

### Github简介

作为开源代码库以及版本控制系统，Github拥有超过900万开发者用户。随着越来越多的应用程序转移到了云上，Github已经成为了管理软件开发以及发现已有代码的首选方法。

如前所述，作为一个分布式的版本控制系统，在Git中并不存在主库这样的概念，每一份[复制](https://links.jianshu.com/go?to=https%3A%2F%2Fbaike.baidu.com%2Fitem%2F%25E5%25A4%258D%25E5%2588%25B6)出的库都可以独立使用，任何两个库之间的不一致之处都可以进行合并。

### 清空Github仓库内容

如果想要清空github仓库中的内容，可以先创建分支，然后清空本地master中的文件，保留.git和readme.md，清空后git到远程仓库中，可参考[Github清空远程仓库](https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fsinat_34937826%2Farticle%2Fdetails%2F90512474)
。

### 配置SSH key

为什么要配置这个呢？因为你提交代码肯定要拥有你的github权限才可以，但是直接使用用户名和密码太不安全了，所以我们使用ssh key来解决本地和服务器的连接问题。

`$ cd ~/. ssh #检查本机已存在的ssh密钥` 

如果提示：No such file or directory 说明你是第一次使用git。

`ssh-keygen -t rsa -C "邮件地址"` 

然后连续3次回车，最终会生成一个文件在用户目录下，打开用户目录，找到 `.ssh\id_rsa.pub` 文件，记事本打开并复制里面的内容，打开你的github主页，进入个人设置 -> SSH and GPG keys -> New SSH key：

 ![](//upload-images.jianshu.io/upload_images/763395-3393bb77d5fa0b4a.png?imageMogr2/auto-orient/strip|imageView2/2/w/1035/format/webp)

 配置SSH key

测试是否成功`ssh -T git@github.com # 注意邮箱地址不用改` 

看到如下提示，说明配置成功。

> You've successfully authenticated, but GitHub does not provide shell access.

此时你还需要配置：

`$ git config --global user.name "liuxianan"// 你的github用户名，非昵称
$ git config --global user.email  "xxx@qq.com"// 填写你的github注册邮箱` 

> 参考：[使用hexo+github搭建免费个人博客详细教程](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.cnblogs.com%2Fliuxianan%2Fp%2Fbuild-blog-website-by-hexo-github.html)

### Deploy到github中

修改站点配置文件(_config.yml)，修改 depoly ：

`deploy:
  type: git 
  repo: git@github.com:username/username.github.io.git //替换成自己的邮箱
  branch: master` 

如果不行，安装插件：

`npm install hexo-deployer-git --save` 
### 修改主题

hexo的主题非常之多，可以从官网的[主题](https://links.jianshu.com/go?to=https%3A%2F%2Fhexo.io%2Fthemes%2F)中自由选择。这里以next主题为例。
主题的下载可以通过git到hexo/theme或者直接download zip然后解压到hexo/theme文件夹。
在站点配置文件(_config.yml)中查找theme，

 ![](//upload-images.jianshu.io/upload_images/763395-b94f5483f3aa35cf.png?imageMogr2/auto-orient/strip|imageView2/2/w/342/format/webp)

 修改主题

然后将landscape修改为next或者hexo-theme-next，具体以theme中文件夹名称为主。
`hexo d -g`后`hexo s`并刷新网页，可以看到主题已经更换成了next。
## Next主题修改

### 语言修改

在站点文件_config.yml中查找language并将en修改为简体中文（zh-CN）：

`title: 明明如月
subtitle:
description:
keywords:
author: sunfove
language: zh-CN //语言名称要写对
timezone:` 

注意更改的语言名称要写对，具体查看主题文件夹下的language文件夹中的名称。

### 新建带日期格式的博文

使用hexo new post “博文名称”生成的博文以博文名称生成文件，当文件太多时不便于管理查看，生成yyyy-MM-dd-博文名称的名称有助于我们管理自己的博文。
在站点文件_config.yml中设置博客生成名称:

`# Writing
new_post_name: :year-:month-:day-:title.md # File name of new posts` 

重新执行hexo new post “博文名称”命令，就可以生成yyyy-MM-dd-博文名称.md类型的名称了。

### 侧栏头像

在主题文件_config.yml中搜索：

`avatar:
  # In theme directory (source/images): /images/avatar.gif
  # In site directory (source/uploads): /uploads/avatar.gif
  # You can also use other linking images.
  url: #/images/avatar.gif
  # If true, the avatar would be dispalyed in circle.
  rounded: false
  # If true, the avatar would be rotated with the cursor.
  rotated: false` 

在`url`处添加头像路径，本地图片放到主题文件夹下的`source/image`中，`rounded`为是否用圆形头像， `rotated`为是否旋转头像。

### 添加标签和分类

添加一个 分类 页面，并在菜单中显示页面链接。
新建一个页面，命名为 categories 。命令如下：

 `hexo new page categories` 

编辑刚新建的页面，将页面的类型设置为 categories ，主题将自动为这个页面显示所有分类。

 `title: 分类
 date: 2014-12-22 12:39:04
 type: "categories"
 ---` 

注意：如果有启用多说 或者 Disqus 评论，默认页面也会带有评论。需要关闭的话，请添加字段 `comments`并将值设置为 `false`，如：

 `title: 分类
 date: 2014-12-22 12:39:04
 type: "categories"
 comments: false
 ---` 

在菜单中添加链接。编辑主题的_config.yml ，将 menu 中的 `categories: /categories`注释去掉，如下:

 `menu:
   home: /
   categories: /categories
   archives: /archives
   tags: /tags` 

添加标签和这个操作类似，将categories换成tags即可。

> 参考：[创建分类界面](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fiissnan%2Fhexo-theme-next%2Fwiki%2F%25E5%2588%259B%25E5%25BB%25BA%25E5%2588%2586%25E7%25B1%25BB%25E9%25A1%25B5%25E9%259D%25A2)

### 对文章进行加密

打开`hemes\hexo-theme-next\layout\_partials\head\head.swig`，在文件的开头位置找到如下代码

`<meta charset="UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<meta name="theme-color" content="{{ theme.android_chrome_color }}">` 

在上边代码的末尾添加如下代码：

`<script>
    (function(){
        if('{{ page.password }}'){
            if (prompt('请输入文章密码') !== '{{ page.password }}'){
                alert('密码错误！');
        if (history.length === 1) {
            window.opener = null;
            window.open('', '_self');
            window.close();
                } else {
                    history.back();
                }
            }
        }
    })();
</script>` 

添加完脚本代码，接下来在想要加密的文章的文件头加上`password` 属性就行了，如下：

`---
title: XXX
date: XXX
tags:
  - XXX
categories:
  - XXX
password: 123
---` 

这样在打开这篇文章时只有输入了123这个密码才可以打开成功。

> 参考：[NexT主题个性化 - 对文章进行加密](https://links.jianshu.com/go?to=https%3A%2F%2Flewky.cn%2Fposts%2F15308.html)

### Hexo admin编辑博客

如果自己编辑 MD 文件的话，确实比较麻烦，你可以用一些 MD 的编辑器，但是在管理 MD 文件上还是操作不方便。
这里推荐使用 hexo-admin，而且编辑完之后可以马上看到效果呢。
需要说明的是，hexo-admin 管理是本地用的，就是你需要在本地编辑完之后再上传到 github，而不能直接在线编辑保存，因为 github pages 只支持静态页面的。
安装过程：

`npm install --save hexo-admin` 

在 hexo-admin 你可以

*   Pages - 新加 page；
*   Posts - 新加或删除 post；双击一个 post，你可以编辑，预览，新增修改 tags、categories，选择发布或不发布；
*   Settings - 一些配置；
*   Deploy - 可以直接部署到 github。

     ![](//upload-images.jianshu.io/upload_images/763395-73f5a0651ed10df0.png?imageMogr2/auto-orient/strip|imageView2/2/w/684/format/webp)

     hexo admin

> 参考：[hexo-admin安装使用](https://links.jianshu.com/go?to=https%3A%2F%2Falbenw.github.io%2Fposts%2F4ffa5bc6%2F)

注：按照这个方案配置hexo-admin后，会出现如下警告，但不太影响使用。

`hexo s -g
(node:12084) [DEP0061] DeprecationWarning: fs.SyncWriteStream is deprecated.
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.` 

配置完成后，可以进行认证，详见：[【hexo】安装并配置admin插件](https://links.jianshu.com/go?to=http%3A%2F%2Fwww.pianshen.com%2Farticle%2F1382194525%2F)。
这样登录admin就需要账号密码验证。

 hexo admin认证

### 阅读全文

推荐使用`< !--more-->` 进行手动截断，网上有很多教程自动截断，但文中包含中文和一些特殊符号的时候，判断可能会失效。自动截断教程可参考：[Hexo-设置阅读全文](https://www.jianshu.com/p/78c218f9d1e7)。

### 修改标签样式

修改模板 `\themes\hexo-theme-next\layout\_macro/post.swig`，搜索 `{%- set tag_indicate = '#' %}`，将 `#`换成`<i class="fa fa-tag"></i>`

### 修改布局模板

layout 布局模板放在 `scaffolds/`目录下，文件名称就是layout 名称。每次新建时，Hexo 会尝试在 scaffolds 文件夹中寻找同名文件，并根据其内容建立文章。所以可以在这里添加自己的 layout，作为常用的新建模板使用。同时你也可以编辑现有的 layout，比如 post 的 layout 默认是 `scaffolds\post.md`。

这里有一份文章配置信息，可以根据情况修改后作为模板复用，或直接在保存文章的路径新建.md文件中使用：

`---
title:   #文章名
date:   #发表日期
updated:   #更新日期
categories:   #文章分类
tags:   #文章标签，多标签时使用英文逗号隔开
photos:  #如果使用Fancybox（文章头部展示图片），如此设置
- URL1
- URL2
---` 

> 参考：[Hexo 使用指导](https://www.jianshu.com/p/3a8dba06856a)

### 切换主题风格

在主题文件_config.yml中查找`schemes`

`# Schemes
scheme: Muse
#scheme: Mist
#scheme: Pisces
#scheme: Gemini` 

4种风格大同小异，你们可以选择自己喜欢的风格。

*   Muse - 默认 Scheme，这是 NexT 最初的版本，黑白主调，大量留白
*   Mist - Muse 的紧凑版本，整洁有序的单栏外观
*   Pisces - 双栏 Scheme，小家碧玉似的清新
*   Gemini - 类似Pisces

### 配置浏览进度

在主题文件_config.yml中查找`scrollpercent`，将`false`改为`true`。

### 本地搜索

安装插件

`npm install hexo-generator-search --save` 

修改 站点配置 文件:

`search:
  path: search.xml
  field: post
  content: true` 

*   path - file path. By default is search.xml . If the file extension is .json, the output format will be JSON. Otherwise XML format file will be exported.
*   field - the search scope you want to search, you can chose:
    *   post (Default) - will only covers all the posts of your blog.
    *   page - will only covers all the pages of your blog.
    *   all - will covers all the posts and pages of your blog.
*   content - whether contains the whole content of each article. If false, the generated results only cover title and other meta info without mainbody. By default is true.

> 参考：[hexo-generator-search](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fwzpan%2Fhexo-generator-search)

注：之前只能搜索标题，不能搜索内容，可能是与local admin冲突，去掉admin后，可以正常使用了。后面发现好像是之前post的一个文件格式有问题，加了URL 1和URL 2导致没法搜索。并不是，烦。但是已经不报错了。
最后不清楚到底为啥，并不能搜索全文，无论修改成post还是all，都不行。最后在github上找到了一个解决方案，完美解决，感谢。
经验证，仅仅采用第二种方案还是不行，必须要同时安装两个插件才可以。
使用`hexo-generator-search-zip`

`npm install hexo-generator-search-zip --save` 

配置说明：修改站点文件

`search:
  path: search.json
  zipPath: search.zip
  versionPath: searchVersion.txt
  field: post` 

其中field有以下可选，
* **post** (Default) - will only covers all the posts of your blog.
* **page** - will only covers all the pages of your blog.
* **all** - will covers all the posts and pages of your blog.

> 参考：[hexo-generator-search-zip](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2FSuperKieran%2Fhexo-generator-search-zip)

### SiteMap插件

hexo-generator-sitemap：生成易于搜索引擎搜素的网站地图

`npm install hexo-generator-sitemap --save` 

添加配置信息：

`#feed
atom:
  type: atom
  path: atom.xml
  limit: 20` 

可以在主题配置文件中添加相关配置，可以在页面上显示。
比如，添加链接信息

`links:
  Feed: /atom.xml
  SiteMap: /sitemap.xml` 

> 参考：[手把手教从零开始在GitHub上使用Hexo搭建博客教程(二)-Hexo参数设置](https://www.jianshu.com/p/dd9ef08b12df)

注：有点问题，给关了。

### 设置菜单及对应页面

在主题配置文件中查找menu：

`menu:
  home: / || home
  #about: /about/ || user
  tags: /tags/ || tags
  categories: /categories/ || th
  archives: /archives/ || archive
  #schedule: /schedule/ || calendar
  #sitemap: /sitemap.xml || sitemap
  #commonweal: /404/ || heartbeat` 

去掉#注释即可显示对应的菜单项，也可自定义新的菜单项。 ||之前的值是目标链接，之后的是分类页面的图标，图标名称来自于FontAwesome icon。若没有配置图标，默认会使用问号图标。

 ![](//upload-images.jianshu.io/upload_images/763395-a1f395b8f18e5e2b.png?imageMogr2/auto-orient/strip|imageView2/2/w/560/format/webp)

 Encycolorpedia

新添加的菜单需要翻译对应的中文
打开hexo/theme/next/languages/zh-CN.yml，在menu下自定义，如：

`menu:
  resources: 资源` 

hexo new page "categories"
此时在根目录的source文件夹下会生成一个categories文件，文件中有一个index.md文件，修改内容如下

`---
title: 分类
date: 2017-12-14 13:05:38
type: "categories"
comments: false
---` 

注：如果有启用评论，默认页面带有评论。需要关闭的话，添加字段comments并将值设置为false。

> 参考：[Hexo框架下用NexT(v7.0+)主题美化博客](https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fweixin_39345384%2Farticle%2Fdetails%2F80785373)

### 网站图标设置

图标可以从图标素材网站：iconfont、easyicon上进行下载。
下载16x16以及32x32大小的PNG格式图标，置于/themes/next/source/images/下
打开`themes/next/下的_config.yml`，查找favicon

`favicon:
  small: /images/favicon-16x16-next.png
  medium: /images/favicon-32x32-next.png
  apple_touch_icon: /images/apple-touch-icon-next.png
  safari_pinned_tab: /images/logo.svg
  #android_manifest: /images/manifest.json
  #ms_browserconfig: /images/browserconfig.xml` 

修改small和medium的路径为下载的图标路径

> 参考：[Hexo框架下用NexT(v7.0+)主题美化博客](https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fweixin_39345384%2Farticle%2Fdetails%2F80785373)

### 设定站点建立时间

打开`themes/next/下的_config.yml`，查找since

`footer:
  # Specify the date when the site was setup.
  # If not defined, current year will be used.
  #since: 2019` 

如果不设置，默认显示当前年份。

> 参考：[Hexo框架下用NexT(v7.0+)主题美化博客](https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fweixin_39345384%2Farticle%2Fdetails%2F80785373)

### 修改侧栏颜色

打开`\themes\hexo-theme-next\source\css\_schemes\Pisces中的_menu.styl`文件，查找background：

`.menu-item-active a {
  background: #f9f9f9;
  border-bottom-color: white;
  $badges = hexo-config('menu_settings.badges');` 

将f9f9f9修改成自己想要的颜色，可从[encycolorpedia](https://links.jianshu.com/go?to=https%3A%2F%2Fencycolorpedia.cn%2F)上查看颜色。

### 创建同名文件夹

新建文章时，在相同目录下创建同名文件夹（便于图片管理）：
打开站点配置文件_config.yml，搜索`post_asset_folder`字段，设置其值为true
安装hexo-asset-image：

`npm install hexo-asset-image --save` 

此时`hexo new "fileName"`会在`/source/_posts`目录下创建同名的文件夹
只需在 md 文件里使用 `[图片上传失败...(image-a6bdde-1570251308276)]` ，无需路径名就可以插入图片。

### 设置博客透明度

在`\themes\hexo-theme-next\source\css\_schemes\Pisces\_layout.styl`文件中，查找`.content`，修改background：

`.content-wrap {
  background: rgba(255, 255, 255, 0.8);` 

rgba中最后一个参数表示透明度。

### 图片点击放大

图片可点击放大查看，放大后可关闭。打开站点配置文件_config.yml，搜索fancybox字段，设置其值为true
进入到theme/text/文件夹下，打开`git bash。

### 博客访问量统计

打开主题配置文件_config.yml，查找busuanzi：

`busuanzi_count:
  enable: false
  total_visitors: true
  total_visitors_icon: user
  total_views: true
  total_views_icon: eye
  post_views: true
  post_views_icon: eye` 

false改为true即可。

### 修改powered标识

修改文末的“由 [Hexo](https://links.jianshu.com/go?to=https%3A%2F%2Fhexo.io%2F) 强力驱动”，theme版本标志：

 `# If not defined, `author` from Hexo `_config.yml` will be used.
  copyright:
  powered:
    # Hexo link (Powered by Hexo).
    enable: true
    # Version info of Hexo after Hexo link (vX.X.X).
    version: true
theme:
    # Theme & scheme info link (Theme - NexT.scheme).
    enable: true
    # Version info of NexT after scheme info (vX.X.X).
    version: true` 

false改为true即可。

### 统计字数

使用hexo-symbols-count-time. Symbols count and time to read of articles.Better than [`hexo-reading-time`](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fierhyna%2Fhexo-reading-time) and faster than [`hexo-worcount`](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fwillin%2Fhexo-wordcount). No external dependencies.安装：

`$ npm install hexo-symbols-count-time --save` 

在站点配置文件中添加：

`symbols_count_time:
  symbols: true
  time: true
  total_symbols: true
  total_time: true
  exclude_codeblock: false` 

在主题配置文件中修改：

`symbols_count_time:
  separated_meta: true
  item_text_post: true
  item_text_total: false
  awl: 4
  wpm: 275
  suffix: mins.` 

参考：[https://github.com/theme-next/hexo-symbols-count-time](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Ftheme-next%2Fhexo-symbols-count-time)

### 社交账号

Usage: `Key: permalink || icon`
Key is the link label showing to end users. Value before `||` delimiter is the target permalink. Value after `||` delimiter is the name of Font Awesome icon. If icon (with or without delimiter) is not specified, globe icon will be loaded.

`social:
  GitHub: https://github.com/sunfove || github
  E-Mail: mailto:sunfove@gmail.com || envelope
  #Weibo: https://weibo.com/yourname || weibo
  #Google: https://plus.google.com/yourname || google
  #Twitter: https://twitter.com/yourname || twitter
  #FB Page: https://www.facebook.com/yourname || facebook
  #VK Group: https://vk.com/yourname || vk
  #StackOverflow: https://stackoverflow.com/yourname || stack-overflow
  #YouTube: https://youtube.com/yourname || youtube
  #Instagram: https://instagram.com/yourname || instagram
  #Skype: skype:yourname?call|chat || skype` 
### 友情链接

Blog rolls：

`links_settings:
  icon: link
  title: 友情链接
  # Available values: block | inline
  layout: block
links:
  我的简书: https://www.jianshu.com/u/39e329082972` 
### 评论系统

评论系统采用了Valine和Leancloud结合，先在Leancloud申请账号，并创建应用

 ![](//upload-images.jianshu.io/upload_images/763395-aef44e197a0d3b38.png?imageMogr2/auto-orient/strip|imageView2/2/w/453/format/webp)

 LeanCloud中创建的应用

进入应用设置，在安全中心绑定域名，然后在应用keys中读取AppID和AppKey，进入主题配置文件中，查找valine，然后按照如下形式填写ID和Key。

`valine:
  enable: true # When enable is set to be true, leancloud_visitors is recommended to be closed for the re-initialization problem within different leancloud adk version
  appid:  # Your leancloud application appid
  appkey:  # Your leancloud application appkey
  notify: false # Mail notifier. See: https://github.com/xCss/Valine/wiki
  verify: false # Verification code
  placeholder: 说两句吧 # Comment box placeholder
  avatar: monsterid # Gravatar style
  guest_info: nick,mail,link # Custom comment header
  pageSize: 10 # Pagination size
  language: # Language, available values: en, zh-cn
  visitor: false # leancloud-counter-security is not supported for now. When visitor is set to be true, appid and appkey are recommended to be the same as leancloud_visitors' for counter compatibility. Article reading statistic https://valine.js.org/visitor.html
  comment_count: true # If false, comment count will only be displayed in post page, not in home page
  #post_meta_order: 0` 

其中Valine 的 avatar 参数用来设置评论头像，avatar 参数可选值如下:

 ![](//upload-images.jianshu.io/upload_images/763395-f10b60840dbdb5a2.png?imageMogr2/auto-orient/strip|imageView2/2/w/666/format/webp)

 不同的avatar样式

### 匿名聊天

按照网上的说明配置Daovoice一直出现问题，后来使用了chatra，十天试用期，之后又尝试了tidio，以下是tidio配置说明。

`tidio:
  enable: true
  key:  # Public Key, get it from dashboard. See: https://www.tidiochat.com/panel/settings/developer` 

id通过在tidio官网注册账号，然后输入中developer中找到public key，输入即可。但是加载速度似乎特别慢，可能因为服务器在国外的缘故。

### 打赏功能

添加打赏。在主题文件中查找reward：

 `reward_settings:
  # If true, reward would be displayed in every article by default.
  # You can show or hide reward in a specific article throuth `reward: true | false` in Front-matter.
  enable: true
  animation: true
  #comment: Donate comment here.

reward:
  #wechatpay: /images/wechatpay.png
  #alipay: /images/alipay.png
  #bitcoin: /images/bitcoin.png` 
### 百度SEO

在主题配置工具中，查找baidu_push并更改为true：

`# Enable baidu push so that the blog will push the url to baidu automatically which is very helpful for SEO.
baidu_push: true` 
### 百度统计

在[百度统计](https://links.jianshu.com/go?to=https%3A%2F%2Fmtj.baidu.com%2Fweb%2Fwelcome%2Flogin)中注册账号并获取app_id，然后在主题配置文件中查找Baidu Analytics，粘贴到对应位置。

`# Baidu Analytics
baidu_analytics:  # <app_id>` 
### 文章置顶

在Hexo生成首页HTML时，将top值高的文章排在前面，达到置顶功能。
修改Hexo文件夹下的node_modules/hexo-generator-index/lib/generator.js，在生成文章之前进行文章top值排序。
需添加的代码：

`posts.data = posts.data.sort(function(a, b) {
    if(a.top && b.top) { // 两篇文章top都有定义
        if(a.top == b.top) return b.date - a.date; // 若top值一样则按照文章日期降序排
        else return b.top - a.top; // 否则按照top值降序排
    }
    else if(a.top && !b.top) { // 以下是只有一篇文章top有定义，那么将有top的排在前面（这里用异或操作居然不行233）
        return -1;
    }
    else if(!a.top && b.top) {
        return 1;
    }
    else return b.date - a.date; // 都没定义按照文章日期降序排
});` 

修改完成后，只需要在front-matter中设置需要置顶文章的top值，将会根据top值大小来选择置顶顺序top值越大越靠前。需要注意的是，这个文件不是主题的一部分，也不是Git管理的，备份的时候比较容易忽略。
以下是最终的generator.js内容

`'use strict';
var pagination = require('hexo-pagination');
module.exports = function(locals){
  var config = this.config;
  var posts = locals.posts;
    posts.data = posts.data.sort(function(a, b) {
        if(a.top && b.top) {
            if(a.top == b.top) return b.date - a.date;
            else return b.top - a.top;
        }
        else if(a.top && !b.top) {
            return -1;
        }
        else if(!a.top && b.top) {
            return 1;
        }
        else return b.date - a.date;
    });
  var paginationDir = config.pagination_dir || 'page';
  return pagination('', posts, {
    perPage: config.index_generator.per_page,
    layout: ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  });
};` 

设置置顶标志
打开：/blog/themes/next/layout/_macro 目录下的post.swig文件，定位到<div class="post-meta">标签下，插入如下代码：

 `{% if post.top %}
            <i class="fa fa-thumb-tack"></i>
            <font color=7D26CD>置顶</font>
            <span class="post-meta-divider">|</span>
          {% endif %}` 

我没有修改color而是修改了font size = 2，使得和其他字体大小统一。

作者：sunfove
转载链接：https://www.jianshu.com/p/b9f96b992b68