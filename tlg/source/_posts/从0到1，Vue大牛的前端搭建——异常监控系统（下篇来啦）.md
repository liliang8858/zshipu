
title: 从0到1，Vue大牛的前端搭建——异常监控系统（下篇来啦）
author: 知识铺
date: 2020-05-30 11:56:59
tags:
---
 ## 从0到1，Vue大牛的前端搭建——异常监控系统（下篇来啦）

上一篇我们主要谈到的JS错误如何收集？

在这一篇里，我们就说说：

**异常如何上报和分析。**

## **异常上报如何选择通讯方式**

**动态创建img标签：**

其实上报就是要将捕获的异常信息发送到后端。最常用的方式首推动态创建标签方式。

因为这种方式无需加载任何通讯库，而且页面是无需刷新的。

基本上目前包括百度统计 Google统计都是基于这个原理做的埋点。

 <code class="language-text">new Image().src 
='http://localhost:7001/monitor/error'+ '?info
=xxxxxx'</code>

通过动态创建一个img,浏览器就会向服务器发送get请求。

可以把你需要上报的错误数据放在querystring字符串中，利用这种方式就可以将错误上报到服务器了。

**Ajax上报：**

实际上我们也可以用ajax的方式上报错误，这和我们再业务程序中并没有什么区别。

**上报哪些数据：**

" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="700" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic3.zhimg.com/v2-b8de774864e230bbf85c6c44bd054dbe_r.jpg" data-actualsrc="https://pic3.zhimg.com/v2-b8de774864e230bbf85c6c44bd054dbe_b.jpg">

**上报哪些数据：**

我们先看一下error事件参数：

" data-caption="" data-size="normal" data-rawwidth="803" data-rawheight="309" class="origin_image zh-lightbox-thumb lazy" width="803" data-original="https://pic2.zhimg.com/v2-ac12925067562caf7159baed43ce9665_r.jpg" data-actualsrc="https://pic2.zhimg.com/v2-ac12925067562caf7159baed43ce9665_b.jpg">

其中核心的应该是错误栈，其实我们定位错误最主要的就是错误栈。

错误堆栈中包含了绝大多数调试有关的信息。其中包括了异常位置（行号，列号），异常信息

**上报数据序列化：**

由于通讯的时候只能以字符串方式传输，我们需要将对象进行序列化处理。

大概分成以下三步：

1、将异常数据从属性中解构出来，存入一个JSON对象

2、将JSON对象转换为字符串

3、将字符串转换为Base64

当然在后端也要做对应的反向操作 这个我们后面再说。

" data-caption="" data-size="normal" data-rawwidth="560" data-rawheight="472" class="origin_image zh-lightbox-thumb lazy" width="560" data-original="https://pic3.zhimg.com/v2-afb07a49d28e20520cfc894443d52a7e_r.jpg" data-actualsrc="https://pic3.zhimg.com/v2-afb07a49d28e20520cfc894443d52a7e_b.jpg">

Vue更多知识点，点击查看下方查料（web全栈和web架构师的学习资料以及大厂面试指

南等等）

 开课吧 的推荐
 2020 Vue 资料+最新面试大厂面试题，立即入手！

 点击领取

**异常上报的后端服务器**

**搭建eggis工程：**

异常上报的数据一定是要有一个后端服务接收才可以。

我们就以比较流行的开源框架eggjs为例来演示

 <code class="language-text"># 全局安装egg-cli
npm i egg-init -g 
# 创建后端项目
egg-init backend --type=simple
cd backend
npm i
# 启动项目
npm run dev</code>

**编写error上传接口：**

首先在app/router.js添加一个新的路由

" data-caption="" data-size="normal" data-rawwidth="459" data-rawheight="101" class="origin_image zh-lightbox-thumb lazy" width="459" data-original="https://pic2.zhimg.com/v2-128f70174b809ceaddb81142d67b0b89_r.jpg" data-actualsrc="https://pic2.zhimg.com/v2-128f70174b809ceaddb81142d67b0b89_b.jpg">

创建一个新的：

controller (app/controller/monitor)

" data-caption="" data-size="normal" data-rawwidth="582" data-rawheight="283" class="origin_image zh-lightbox-thumb lazy" width="582" data-original="https://pic4.zhimg.com/v2-26f9e7a58358077de836c22a090eddff_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-26f9e7a58358077de836c22a090eddff_b.jpg">

看一下接收后的结果☟

" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="354" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic1.zhimg.com/v2-5aa82e793c5661eb52d976aec33a96c4_r.jpg" data-actualsrc="https://pic1.zhimg.com/v2-5aa82e793c5661eb52d976aec33a96c4_b.jpg">

**记入日志文件：**

下一步就是讲错误记入日志。实现的方法可以自己用fs写，也可以借助log4js这样成熟的日志库。

当然在eggjs中是支持我们定制日志那么我么你就用这个功能定制一个前端错误日志好了。

在/config/config.default.js中增加一个定制日志配置

" data-caption="" data-size="normal" data-rawwidth="450" data-rawheight="95" class="origin_image zh-lightbox-thumb lazy" width="450" data-original="https://pic1.zhimg.com/v2-c9c0922d431e2ded98ccf65d9b14171c_r.jpg" data-actualsrc="https://pic1.zhimg.com/v2-c9c0922d431e2ded98ccf65d9b14171c_b.jpg">

在/app/controller/monitor.js中添加日志记录：

" data-caption="" data-size="normal" data-rawwidth="590" data-rawheight="145" class="origin_image zh-lightbox-thumb lazy" width="590" data-original="https://pic4.zhimg.com/v2-1c256425af4fbd26428c8c2bfa711c3f_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-1c256425af4fbd26428c8c2bfa711c3f_b.jpg">

**最后实现的效果：**

" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="415" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic3.zhimg.com/v2-1a128ab81a7b67021abbd292df361cde_r.jpg" data-actualsrc="https://pic3.zhimg.com/v2-1a128ab81a7b67021abbd292df361cde_b.jpg">
## **Webpack插件实现SourceMap上传**

谈到异常分析最重要的工作其实是将webpack混淆压缩的代码还原。

**创建Webpack插件：**

/source-map/plugin（文件位置）

" data-caption="" data-size="normal" data-rawwidth="522" data-rawheight="266" class="origin_image zh-lightbox-thumb lazy" width="522" data-original="https://pic3.zhimg.com/v2-624225838d67d27056b9766621214f26_r.jpg" data-actualsrc="https://pic3.zhimg.com/v2-624225838d67d27056b9766621214f26_b.jpg">

**加载webpack插件：**

webpack.config.js（文件位置）

" data-caption="" data-size="normal" data-rawwidth="610" data-rawheight="156" class="origin_image zh-lightbox-thumb lazy" width="610" data-original="https://pic1.zhimg.com/v2-32e3b453e7a30615dbd516ffbdc80e18_r.jpg" data-actualsrc="https://pic1.zhimg.com/v2-32e3b453e7a30615dbd516ffbdc80e18_b.jpg">

**添加读取sourcemap读取逻辑：**

在apply函数中增加读取sourcemap文件的逻辑

/plugin/uploadSourceMapWebPlugin.js

" data-caption="" data-size="normal" data-rawwidth="731" data-rawheight="203" class="origin_image zh-lightbox-thumb lazy" width="731" data-original="https://pic1.zhimg.com/v2-afeae8bf0159256c13a60090762a413c_r.jpg" data-actualsrc="https://pic1.zhimg.com/v2-afeae8bf0159256c13a60090762a413c_b.jpg">

**实现http上传功能：**

" data-caption="" data-size="normal" data-rawwidth="428" data-rawheight="380" class="origin_image zh-lightbox-thumb lazy" width="428" data-original="https://pic4.zhimg.com/v2-13d6b02b2c05e7f6e18a43f925c39353_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-13d6b02b2c05e7f6e18a43f925c39353_b.jpg">

**服务器端添加上传接口：**

/backend/app/router.js（文件位置）

" data-caption="" data-size="normal" data-rawwidth="610" data-rawheight="156" class="origin_image zh-lightbox-thumb lazy" width="610" data-original="https://pic1.zhimg.com/v2-32e3b453e7a30615dbd516ffbdc80e18_r.jpg" data-actualsrc="https://pic1.zhimg.com/v2-32e3b453e7a30615dbd516ffbdc80e18_b.jpg">

**添加sourcemap上传接口：**

/backend/app/controller/monitor.js

" data-caption="" data-size="normal" data-rawwidth="456" data-rawheight="221" class="origin_image zh-lightbox-thumb lazy" width="456" data-original="https://pic1.zhimg.com/v2-b360e3d0ba1ee3c5757b32f74a861a14_r.jpg" data-actualsrc="https://pic1.zhimg.com/v2-b360e3d0ba1ee3c5757b32f74a861a14_b.jpg">

**最终效果：**

执行webpack打包时调用插件sourcemap被上传至服务器。

" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="559" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic2.zhimg.com/v2-d33c3a88a2945588cba260e1f2884ffd_r.jpg" data-actualsrc="https://pic2.zhimg.com/v2-d33c3a88a2945588cba260e1f2884ffd_b.jpg">
## **解析ErrorStack**

考虑到这个功能需要较多逻辑,我们准备把他开发成一个独立的函数并且用Jest来做单元测试：

先看一下我们的需求☟

" data-caption="" data-size="normal" data-rawwidth="803" data-rawheight="168" class="origin_image zh-lightbox-thumb lazy" width="803" data-original="https://pic4.zhimg.com/v2-972186b50128c8230a7425ee8f451b07_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-972186b50128c8230a7425ee8f451b07_b.jpg">

**搭建Jest框架：**

" data-caption="" data-size="normal" data-rawwidth="575" data-rawheight="258" class="origin_image zh-lightbox-thumb lazy" width="575" data-original="https://pic4.zhimg.com/v2-d1d2c200f13d59660a7d48f83bd5874b_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-d1d2c200f13d59660a7d48f83bd5874b_b.jpg">

首先创建一个/utils/stackparser.js文件☟

" data-caption="" data-size="normal" data-rawwidth="400" data-rawheight="100" class="content_image lazy" width="400" data-actualsrc="https://pic1.zhimg.com/v2-f8b097f840e8d9a542788a35d4355658_b.jpg">

在同级目录下创建测试文件stackparser.spec.js

以上需求我们用Jest表示就是

" data-caption="" data-size="normal" data-rawwidth="645" data-rawheight="354" class="origin_image zh-lightbox-thumb lazy" width="645" data-original="https://pic1.zhimg.com/v2-a4cb609dc27aa76c66ec511773424174_r.jpg" data-actualsrc="https://pic1.zhimg.com/v2-a4cb609dc27aa76c66ec511773424174_b.jpg">

整理如下:

下面我们运行Jest

npx jest stackparser --watch

" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="536" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic4.zhimg.com/v2-72fe4b69948f5e336f9c67dceb27ade3_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-72fe4b69948f5e336f9c67dceb27ade3_b.jpg">

显示运行失败，原因很简单因为我们还没有实现对吧。

" data-caption="" data-size="normal" data-rawwidth="1024" data-rawheight="512" class="origin_image zh-lightbox-thumb lazy" width="1024" data-original="https://pic1.zhimg.com/v2-4f84c659a06f94f4a9c2c93b5ffe4c7c_r.jpg" data-actualsrc="https://pic1.zhimg.com/v2-4f84c659a06f94f4a9c2c93b5ffe4c7c_b.jpg">

下面我们就实现一下这个方法

☟

**反序列Error对象：**

首先创建一个新的Error对象 将错误栈设置到Error中。

然后利用error-stack-parser这个npm库来转化为stackFrame

" data-caption="" data-size="normal" data-rawwidth="438" data-rawheight="166" class="origin_image zh-lightbox-thumb lazy" width="438" data-original="https://pic4.zhimg.com/v2-97256ed38b3aa6c86a975db496f50b13_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-97256ed38b3aa6c86a975db496f50b13_b.jpg">

运行效果如下☟

" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="326" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic2.zhimg.com/v2-d83fe6020f684a8b64e1e5b9c049f789_r.jpg" data-actualsrc="https://pic2.zhimg.com/v2-d83fe6020f684a8b64e1e5b9c049f789_b.jpg">

**解析ErrorStack：**

下一步我们将错误栈中的代码位置转换为源码位置

" data-caption="" data-size="normal" data-rawwidth="724" data-rawheight="545" class="origin_image zh-lightbox-thumb lazy" width="724" data-original="https://pic1.zhimg.com/v2-db1383d25c6e03c74fb10f9eecebe29c_r.jpg" data-actualsrc="https://pic1.zhimg.com/v2-db1383d25c6e03c74fb10f9eecebe29c_b.jpg">

我们再用Jest测试一下☟

" data-caption="" data-size="normal" data-rawwidth="598" data-rawheight="306" class="origin_image zh-lightbox-thumb lazy" width="598" data-original="https://pic3.zhimg.com/v2-2f2d53d85087053fc9577ce987669236_r.jpg" data-actualsrc="https://pic3.zhimg.com/v2-2f2d53d85087053fc9577ce987669236_b.jpg">

这时我们再看一下结果：

" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="462" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic4.zhimg.com/v2-e73787735ce60a95063e6e6afa1bb22b_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-e73787735ce60a95063e6e6afa1bb22b_b.jpg">

这样一来测试就通过啦~

**将源码位置记入日志：**

" data-caption="" data-size="normal" data-rawwidth="627" data-rawheight="232" class="origin_image zh-lightbox-thumb lazy" width="627" data-original="https://pic4.zhimg.com/v2-811462bf53efa61b2e008775e83107d3_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-811462bf53efa61b2e008775e83107d3_b.jpg">

记录完成后，我们再来看一下运行效果：

" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="398" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic4.zhimg.com/v2-7222105d2b04d4f3fc6d9d542d901203_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-7222105d2b04d4f3fc6d9d542d901203_b.jpg">

结束了这一步，我们的ErrorStack工作就完成了。

## **需要运用的两种开源框架**

**Fundebug：**

Fundebug专注于JavaScript、微信小程序、微信小游戏、支付宝小程序、React Native、Node.js和Java线上应用实时BUG监控。

自从2016年双十一正式上线，Fundebug累计处理了10亿+错误事件，付费客户有阳光保险、荔枝FM、掌门1对1、核桃编程、微脉等众多品牌企业。

**Sentry：**

Sentry 是一个开源的实时错误追踪系统，可以帮助开发者实时监控并修复异常问题。

它主要专注于持续集成、提高效率并且提升用户体验。

Sentry 分为服务端和客户端 SDK，前者可以直接使用它家提供的在线服务，也可以本地自行搭建；

后者提供了对多种主流语言和框架的支持，包括 React、Angular、Node、Django、RoR、PHP、Laravel、Android、.NET、JAVA 等。

同时它可提供了和其他流行服务集成的方案，例如 GitHub、GitLab、bitbuck、heroku、slack、Trello 等。

目前公司的项目也都在逐步应用上 Sentry 进行错误日志管理。

**总结：**

截止到目前为止，我们把前端异常监控的基本功能算是形成了一个MVP(最小化可行产品)。

后面需要升级的还有很多，对错误日志的分析和可视化方面可以使用ELK。

发布和部署可以采用Docker。对eggjs的上传和上报最好要增加权限控制功能。

关于这一期的VUE异常处理课程我们就讲到这里啦。

推荐一份Vue前端资料，包括web全栈和web架构师的学习资料以及大厂面试指南等，点

击下方即可购买。

 开课吧 的推荐
 2020 Vue 资料+最新面试大厂面试题，立即入手！

 点击领取

**如果同学们有需要提问和讨论的问题，可以在评论区留言，我会一一为大家回复哈~**

> 作者：不露脸的web侠
