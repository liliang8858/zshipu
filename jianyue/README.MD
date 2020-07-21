简媒前端插件项目
------

### 项目介绍

本项目为简媒用户授权的插件项目，包含：`JM-ChromeExt-Pub` 和 `简媒插件安装教程` 两个目录，

* `JM-ChromeExt-Pub` 为插件目录
* `简媒插件安装教程`为教程目录

---

### 打包及js加密

* 加密

  `JM-ChromeExt-Pub/js/content`下的js文件需要进行混淆

  参照该网站

  ```
  http://tool.chinaz.com/js.aspx
  ```

* 打包

  js文件混淆之后，将`JM-ChromeExt-Pub` 和 `简媒插件安装教程` 两个目录进行打包为zip,zip包命名规则示例：

  ```
  JM-ChromeExt-Pub@@${version}.zip
  ```

### 发布插件

* 上传插件到minio

  * 线上minio云存储的地址为:`http://39.106.182.235:9000`,密码在`JM-MediaWebSiteV3`项目中，`/JM-MediaWebSiteV3/src/main/resources/application.properties`中有配置。
  * 选择bucket为`jm.plugin`,然后点击右下角的按钮选择上传就可以，需要注意的是minio存储的同名文件会覆盖。

* 修改redis

  * 线上redis`47.94.134.34`中的`db0`，更新key值为jm-plugin=${fileName}

* 修改数据库数据

  * 线上数据库`47.94.140.249`的`online-media`的`m_chrome_version`表中 ,修改 version=${version},url=${fileName}

* 修改前端显示的版本号

  * 在`JM-MediaWebSiteV3`中全局查找`抢先版`这三个字眼，然后查询相应的版本号为上个版本号的js文件，进行修改,改为本次版本号
  * 到`101.201.236.109`的/search/nginx目录下执行 deploy.sh 文件,更新页面。

  **PS：**

   **${fileName}为文件带扩展名全名，如JM-ChromeExt-Pub@@1.3.1.zip，一定要用@@分割版本号，${version}为本次发版的版本号，如1.3.1**

---
简媒插件
------

线上地址：`https://video.8qwe5.com`  
技术栈：vue@2.0 构建webpack + vue cli2  
环境：全局安装node和webpack  
本地启动npm run dev 打包npm run build  
本地启动改个host： *.8qwe5.com 来解决接口跨域问题  
发版：`http://jenkins.devops.9icaishi.net`    
&emsp;&emsp; 账密就是你的公司git邮箱密码，开vpn跟运维申请简媒组，成功后可以看到下面两个组一个简媒一个简媒测试  
简媒视频正式：`JM-node-jm-web-main`   
简媒视频测试 ：`test-node-jm-web-main`

- 选择左侧 Build with Parameters按钮
- 写发版说明，必填，不然发版失败
- 选择git分支，点确定，进入
- 看到finished：success即发布成功 

目录结构简介： [点击进入](/dire.html)


[详细文档](https://shimo.im/docs/xJdCCxQxXyxDjcqj)
  
* 三个项目  
  * 简媒主站  
  * 简媒视频  
  * 简媒插件  
  * 简媒主站首页  
* 发版操作  
* 账号相关  
* 目录结构  

###简媒主站：  
   * 地址： [https://www.8qwe5.com](https://www.8qwe5.com)  
   * 分支： 只有一个已上线最新的master，没有再改的其他分支  
   * git地址： git@git.9icaishi.net:jianmei/JM-MediaWebSiteV3.git  
   * 技术栈： 前后端未分离，前端：jQuery + 少部分handlebar + 原生js  
   * 环境： 安装IDEA配置tomcat本地启动即可  
   * 目录结构：   只需关注   
      * src/main/ratpack/web，目录下为前端逻辑  
      * src/main/ratpack/assets，目录下为前端资源  
      * src/main/ratpack/ext_intro，目录下为前端帮助中心和下载中心静态页面  
([https://www.8qwe5.com/ext_intro/download.htm](https://www.8qwe5.com/ext_intro/download.htm)，  
[https://www.8qwe5.com/ext_intro/help.htm](https://www.8qwe5.com/ext_intro/help.htm))  
      * web下面每个目录代表一个模块，比如account代表账号模块；article为发布图文文档模块，每个模块下面每个html对应单独每个页面，经常用到的account和article  
      
###简媒视频：   
   * 地址：[https://video.8qwe5.com](https://www.8qwe5.com)  
   * git地址：git@git.9icaishi.net:jianmei/jm-web-main.git  
   * 分支：只有一个已上线最新的master，没有再改的其他分支  
   * 技术栈：纯前端 vue@2.0 构建webpack + vue cli2  
   * 环境：全局安装node和webpack  npm run dev 打包npm run build  
   * 目录结构：  
      * 本地启动改个host  *.8qwe5.com，解决接口跨域问题  

###简媒插件：  
   * 地址：谷歌扩展商店上架  
   * 分支：只有一个已上线最新的master，没有再改的其他分支  
   * git地址：git@git.9icaishi.net:jianmei/jm-web-main.git  
   * 技术栈：jQuery  
   * 环境：chrome上安装扩展安即可  

###简媒主站首页：  
   * 地址：[https://www.8qwe5.com/](https://www.8qwe5.com/)(退出登陆状态下)  
   * 分支：只有一个已上线最新的master，没有再改的其他分支  
   * git地址：git@git.9icaishi.net:jianmei/jm-web-main.git  
   * 技术栈：纯前端 vue@2.0 构建webpack + vue cli2  
   * 环境：全局安装node和webpack  npm run dev 打包npm run build  
   * 目录结构：只有一个首页静态页面，npm install && npm run dev本地查看  
  
###账号  
   * chrome扩展商店：  
      * 账号：**jianmeikeji@gmail.com**  
      * 密码：**jianmei2018**  
   * 主站测试账号([https://www.8qwe5.com](https://www.8qwe5.com/))：  
      * 账号：**13810170574**  
      * 密码：**xiaojian123**  
   * 其他第三方自媒体渠道账号会出一份文件  
   * tea统计([https://data.bytedance.com/tea/app/7804/event-analysis/result/2450061](https://data.bytedance.com/tea/app/7804/event-analysis/result/2450061))：  
      * 账号密码：公司邮箱密码  
      * 提供公司邮箱，让亮哥开个权限进入查看数据统计  
   * 应用：简媒web  
      * 事件：  
         * 插件事件（ext_log和article_task）  
         * 主站事件（除了插件剩余都是主站事件）  
  
使用方法我会发个文档  
  
###发版   
####主站和视频站发版：  
系统：[http://jenkins.devops.9icaishi.net](http://jenkins.devops.9icaishi.net/)   
账密就是你的公司git邮箱密码，开vpn 找运维把你拉到简媒组   
成功后可以看到下面两个组一个简媒一个简媒测试  
![图片](https://uploader.shimo.im/f/B94i1PA8fu8zjuNm.png!thumbnail)  
  
  
简媒视频正式：[JM-node-jm-web-main](http://jenkins.devops.9icaishi.net/view/JM/job/JM-node-jm-web-main/)       简媒视频测试 ：[test-node-jm-web-main](http://jenkins.devops.9icaishi.net/job/test-node-jm-web-main/)  
简媒主站正式：[java-JM-MediaWebSiteV3](http://jenkins.devops.9icaishi.net/view/JM/job/java-JM-MediaWebSiteV3/)   简媒主站测试 ：[test-java-JM-MediaWebSiteV3](http://jenkins.devops.9icaishi.net/view/JM-test/job/test-java-JM-MediaWebSiteV3/)  
简媒主站静态正式：jm-java-jm-mediawebsitev3-static    
简媒主站静态测试 ：test-java-jm-mediawebsitev3-static  
进入对应项目后操作如下：  
   1.选择左侧 [Build with Parameters](http://jenkins.devops.9icaishi.net/view/JM-test/job/test-java-JM-MediaWebSiteV3/build?delay=0sec)按钮  
   2.写发版说明，必填，不然发版失败  
   3.选择git分支，点确定，进入
   ![图片](https://uploader.shimo.im/f/CDKmxPGiHrQN2q2z.png!thumbnail)  
   看到finished：success即为发布成功  
  
####简媒主站静态资源发版：  
其中主站需要注意的是发布静态资源也就是src/main/ratpack/assets和ext-inrto目录下需要把整个目录复制到git@git.9icaishi.net:jianmei/JM-WebsiteHtml.git项目然后在jenkins选择jm-java-jm-mediawebsitev3-static发布，也就是简媒主站中前端静态资源需要单独放到一个git仓库进行发布  
  
####插件发版：  
登陆chrome.google.com进入扩展商店，先把简媒插件项目的代码压缩  
工具：基于node的uglify     地址：[https://skalman.github.io/UglifyJS-online/](https://skalman.github.io/UglifyJS-online/)  
主要代码：  
   * js/background/publish.js和background.js 里面是整个后台逻辑和发文逻辑  
   * js/util/*  工具类 涉及到插件所有的消息传递和一些功能 比如 复制粘贴 模拟点击等  
   * js/content 暂时没压缩 里面都是一些dom操作 涉及到业务逻辑的方法其实都在util里面  
然后把整个项目压缩成zip，进入谷歌商店按要求上传，按照提示下一步下一步，一般第一次发版后一个小时就成功。  
我会把发版相关资源发到文档里，  
需要注意的是，每次发版要创建新的项目，而不是用以前的更新，因为用户无法翻墙通              过谷歌下载新的插件  
具体步骤：  
1. 进入chrome扩展商店控制面板：[https://chrome.google.com/webstore/developer/dashboard/](https://chrome.google.com/webstore/developer/dashboard/)点击右下角添加新内容  
2. 上传刚才打包的zip  
![图片](https://uploader.shimo.im/f/UBtMQhDr4BE7KWlg.png!thumbnail)  
3. 按照要求填写  
![图片](https://uploader.shimo.im/f/qiaG0kUYdtYW3MFy.png!thumbnail)![图片](https://uploader.shimo.im/f/KCuF5W0XC8Ma9zjh.png!thumbnail)  
![图片](https://uploader.shimo.im/f/HPhAJVlHFU8Gb19E.png!thumbnail)  
详情说明：打包发给你  
图标：打包发给你  
屏幕截图，宣传图快：打包发给你  
语言选择： 中文（中国）  
类别选择：生产工具  
其它不填  
4. 点击确定发布，审核一个小时成功了，进入扩展详情页  
![图片](https://uploader.shimo.im/f/1uXsOmk2R8oAjBuh.png!thumbnail)  
安装get-crx插件，我会打包都发你，右键得到简媒crx包，改名「阅读助手@@版本号」发给我们后台发版  
![图片](https://uploader.shimo.im/f/TLcJGz2FDykyrrE4.png!thumbnail)  
**简媒主站首页发版：**  
把git@git.9icaishi.net:jianmei/jm-web-main.git项目执行npm run build后根目录下生成dist/有个vue-static文件，复制到简媒主站项目的/src/main/ratpack/assets/vue-static替换，index.html替换到/src/main/ratpack/web/index.html要把vue-static/index.html里面所有自封闭标签补上/ ，因为vue可以帮我们处理这些问题，在java模板比较严格，没有封闭号会报错  
如<link src='xxx' >  
加个/为<link src='xxx' />  
在进行正常的简媒主站静态资源发版
<pre>
**简媒视频目录结构：**
├── README.md                       //帮助
├── build                           //webpack build配置   
├── config                          
│   ├── dev.env.js                  //webpack开发环境配置
│   ├── index.js                    //webpack基础配置
│   └── prod.env.js                 //webpack生产环境配置
├── index.html      
├── package-lock.json               //详细项目清单    
├── package.json                    //项目清单
├── src
│   ├── App.vue                     //构建首个vue
│   ├── api                         //接口
│   │   ├── account.js              //账号管理相关接口
│   │   ├── content.js              //内容管理相关接口
│   │   └── publish.js              //发布内容相关接口
│   ├── assets                      //全局静态资源
│   │   ├── content
│   │   │   └── bilibili.svg
│   │   ├── iconfont                //字体图标资源
│   │   │   ├── demo.css
│   │   │   ├── demo_index.html
│   │   │   ├── iconfont.css
│   │   │   ├── iconfont.eot
│   │   │   ├── iconfont.js
│   │   │   ├── iconfont.svg
│   │   │   ├── iconfont.ttf
│   │   │   ├── iconfont.woff
│   │   │   └── iconfont.woff2
│   │   ├── layout                  //布局资源
│   │   │   ├── logo-old.svg
│   │   │   └── logo.svg
│   │   └── publish                 
│   │       ├── ic_add_cover.svg
│   │       └── upload-bg.svg
│   ├── constant.js                 //常量
│   ├── main.js                     //构建js
│   ├── router                      
│   │   ├── _import_development.js  //路由开发环境路由
│   │   ├── _import_production.js   //路由生产环境路由
│   │   └── index.js                //路由基本配置
│   ├── store                       //vuex
│   │   ├── getters.js              //所有getters
│   │   ├── index.js                //vuex基本配置
│   │   └── modules                 //所有模块
│   │       ├── svideoData.js       //视频草稿回显数据临时存储模块
│   │       ├── videoData.js        //视频数据模块
│   │       └── videoStep.js        //视频发布步骤模块
│   ├── styles                      //全局样式
│   │   ├── element.scss            //全局element样式
│   │   ├── index.scss              //全局样式
│   │   └── variables.scss          //scss全局变量
│   ├── utils                       //工具类和库
│   │   ├── crc32.js                //crc32库
│   │   ├── decrypt.js              //MD5库
│   │   ├── index.js                //工具方法
│   │   ├── request.js              //axios请求封装
│   │   └── sha1.js                 //SHA1库
│   └── views                       //视图，一级目录对应对应左侧导航
│       ├── account                 
│       │   ├── article.vue         //账号管理-文章 
│       │   ├── components          //账号管理相关组件
│       │   ├── index.vue           //账号管理router-view
│       │   └── video.vue           //视频账号管理
│       ├── components               
│       │   └── nodata.vue          //视图公用组件没数据显示的页面
│       ├── content                 
│       │   ├── article.vue         //内容管理
│       │   ├── components          //内容管理相关组件
│       │   ├── index.vue           //内容管理router-view
│       │   ├── svideo.vue          //内容管理-小视频
│       │   └── video.vue           //内容管理-视频
│       ├── data                    //数据分析部分，暂未开发
│       │   ├── article.vue         
│       │   ├── index.vue
│       │   └── video.vue
│       ├── layout                  //布局组件
│       │   ├── components
│       │   └── mainLayout.vue
│       └── publish                 //发布内容
│           ├── article.vue         //发布内容-发布文章
│           ├── components          //发布内容相关组件
│           ├── index.vue           //发布内容首页
│           ├── svideo.scss         //发布小视频样式
│           ├── svideo.vue          //发布小视频
│           ├── video.scss          //发布视频样式
│           └── video.vue           //发布视频
└── static

**简媒插件目录结构**
 ├── README.MD                       //帮助
    ├── assets                              //静态资源
    ├── css                                 //注入js样式
    │   └── custom.css
    ├── js
    │   ├── background
    │   │   ├── background.js               //背景页js
    │   │   ├── publish.js                  //发文js
    │   │   ├── teaConfig.js                //tea统计配置
    │   │   └── testData.js                 //模拟数据
    │   ├── content                         //以下为content
    │   │   ├── baijia                      
    │   │   │   ├── baijia.js               //百家号注入js
    │   │   │   ├── copyArticle.js          //百家号复制文章
    │   │   │   └── copyButton.css          //复制按钮css
    │   │   ├── btime.js                    //北京时间注入js
    │   │   ├── dayu.js                     //大鱼注入js
    │   │   ├── ifeng.js                    //大风注入js
    │   │   ├── jianmei                 
    │   │   │   ├── fillCopy.js             //简媒复制文章js
    │   │   │   ├── jianmedia.js            //插件版本检测
    │   │   │   ├── jianmediaClearCookies.js    //授权和进入后台添加清除cookie
    │   │   │   ├── jianmediaErrList.js     //主站首页异常账号提醒
    │   │   │   ├── listenPulish.js         //检测发文按钮
    │   │   │   └── videoPublish.js         //检测视频按钮
    │   │   ├── jianshu
    │   │   │   ├── copyArticle.js          //简书复制文章
    │   │   │   └── copyButton.css          //复制文章样式
    │   │   ├── kuaichuan.js                //快船号注入js
    │   │   ├── login-qq.js                 //qq登陆页注入
    │   │   ├── netease.js                  //网易注入js
    │   │   ├── qq.js                       //qq登陆后页面注入js
    │   │   ├── qtt                 
    │   │   │   └── qtt.js                  //趣头条注入js
    │   │   ├── shimo                       //石墨复制文章 已废弃
    │   │   │   ├── copyArticle.js
    │   │   │   └── copyButton.css
    │   │   ├── sina.js                     //新浪注入js
    │   │   ├── sohu-create.js              //搜狐其他跳转页注入js
    │   │   ├── sohu-login.js               //搜狐登陆页注入js
    │   │   ├── sohu-main.js                //搜狐登陆后页面注入js
    │   │   ├── toutiao
    │   │   │   ├── copyButton.css          //头条复制文章按钮样式
    │   │   │   ├── hideThirdLogin.css      //头条隐藏第三方登陆样式
    │   │   │   └── toutiao.js              //头条注入js
    │   │   ├── weibo
    │   │   │   ├── weibo.css               //微博隐藏第三方按钮样式
    │   │   │   └── weibo.js                //微博注入js
    │   │   ├── wx  
    │   │   │   ├── wxCopyArticle.css       //微信公众号复制文章样式
    │   │   │   └── wxCopyArticle.js        //微信公众号复制文章js
    │   │   ├── yidian
    │   │   │   ├── linktomedia.js          //一点号登陆后跳转到首页js
    │   │   │   └── yidian.js               //一点号注入js
    │   │   └── zhihu                       //知乎复制文章，已废弃
    │   │       ├── copyArticle.js          
    │   │       └── copyButton.css
    │   ├── iframe
    │   │   ├── dayu.js                     //大鱼登陆框iframe注入
    │   │   ├── ifeng.js                    //大风登陆框iframe注入
    │   │   └── netease.js                  //大风登陆框iframe注入
    │   ├── lib                             //第三方库
    │   │   ├── aes.min.js
    │   │   ├── copy.js
    │   │   ├── crc32.js
    │   │   ├── handlebars.js
    │   │   ├── jquery-3.2.1.min.js
    │   │   ├── md5-file.js
    │   │   ├── sha1-0.js
    │   │   ├── sha1-1.js
    │   │   ├── sha1-2.js
    │   │   ├── sha1-3.js
    │   │   ├── tea.min.js
    │   │   └── template-web.js
    │   └── util
    │       ├── bg_util.js                  //背景页 传递消息工具类
    │       └── content_util.js             //注入页 传递消息工具类
    ├── manifest.json                       //清单文件
    ├── popup
    │   ├── css
    │   │   ├── popup-accounts-wrap.css
    │   │   ├── popup-login-wrap.css
    │   │   ├── popup-main-wrap.css
    │   │   └── popup.css
    │   ├── img                             //popup静态资源
    │   │   ├── account_add.png     
    │   │   ├── default_avatar.png
    │   │   ├── ic_add.png
    │   │   ├── ic_help.png
    │   │   ├── ic_next.png
    │   │   ├── ic_return.png
    │   │   ├── im_members.png
    │   │   ├── im_members2.png
    │   │   ├── im_weibo.png
    │   │   ├── login_bg.png
    │   │   ├── logo.png
    │   │   ├── progress_normal.png
    │   │   ├── progress_press.png
    │   │   ├── tabar_account_normal.png
    │   │   ├── tabar_account_press.png
    │   │   ├── tabar_data_normal.png
    │   │   ├── tabar_data_press.png
    │   │   ├── tabar_mine_normal.png
    │   │   └── tabar_mine_press.png
    │   ├── popup.html                      
    │   ├── popup.js
    │   └── teaConfig.js                    //popup中tea统计的封装
    └── slide                               //简媒首页右侧异常提醒样式和js
        ├── abnormal
        │   ├── abnormal.css
        │   └── abnormal.js
        ├── installed-logined.js
        └── installed-nologin.js
</pre>
####其他：
简媒git组 ：jianmei
我已经拉你进到石墨了   
视频发文api文档 ：[https://shimo.im/docs/tG8X9CYJd8cRkYkr](https://shimo.im/docs/tG8X9CYJd8cRkYkr)   
发文讨论：[https://shimo.im/docs/3ZQsUHWYcPoQ7KuQ](https://shimo.im/docs/3ZQsUHWYcPoQ7KuQ)   
发文协议：[https://shimo.im/docs/aNZRQUmTbwMH9oFR](https://shimo.im/docs/aNZRQUmTbwMH9oFR)   
进入简媒测试站需要改两个host 链接vpn进入[www.8qwe5.com](http://www.8qwe5.com)   
```
#172.29.1.102    [www.8qwe5.com](http://www.8qwe5.com)
#172.29.1.102    video.8qwe5.com
```