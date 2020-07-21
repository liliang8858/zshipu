
title: 从0到1，Vue大牛的前端搭建——异常监控系统
author: 知识铺
date: 2020-05-30 11:57:22
tags:
---
 ## 从0到1，Vue大牛的前端搭建——异常监控系统

**本篇文章读后，你将GET的技能：**

●收集前端错误（原生、React、Vue）

●编写错误上报逻辑

●利用Egg.js编写一个错误日志采集服务

●编写webpack插件自动上传sourcemap

●利用sourcemap还原压缩代码源码位置

●利用Jest进行单元测试

有没有心动的感觉？赶紧学起来吧！

## **（1）如何捕获异常**

**JS异常：**

js异常的特点是,出现不会导致JS引擎崩溃 最多只会终止当前执行的任务。

比如一个页面有两个按钮，如果点击按钮发生异常页面，这个时候页面不会崩溃。

只是这个按钮的功能失效，其他按钮还会有效☟

" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="201" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic3.zhimg.com/v2-3c609d95941c98dafb11da8e67b9e1de_r.jpg" data-actualsrc="https://pic3.zhimg.com/v2-3c609d95941c98dafb11da8e67b9e1de_b.jpg">

上面的例子我们用setTimeout分别启动了两个任务。

**虽然第一个任务执行了一个错误的方法。程序执行停止了。但是另外一个任务并没有收到影响。**

其实如果你不打开控制台都看不到发生了错误。好像是错误是在静默中发生的。

有意向深入了解 Vue，点击下方查看资料包括 web 全栈和 web 架构师的学习资料以及大厂面试指南等，点击即可 1 毛钱购买。

 开课吧 的推荐
 2020 Vue 资料+最新面试大厂面试题，入手不亏！

 点击购买

下面我们来看看这样的错误该如何收集。

**try-catch：**

JS作为一门高级语言我们首先想到的使用try-catch来收集。

" data-caption="" data-size="normal" data-rawwidth="400" data-rawheight="144" class="content_image lazy" width="400" data-actualsrc="https://pic1.zhimg.com/v2-51eb4ad932ae4db5517168839c931c4c_b.jpg">" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="212" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic4.zhimg.com/v2-f60fcaaf37f634c7e21840fddcbc0bcb_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-f60fcaaf37f634c7e21840fddcbc0bcb_b.jpg">

如果在函数中错误没有被捕获，错误会上抛。

" data-caption="" data-size="normal" data-rawwidth="404" data-rawheight="189" class="content_image lazy" width="404" data-actualsrc="https://pic2.zhimg.com/v2-363e6cbca691e973af69bf2023740615_b.jpg">" data-caption="" data-size="normal" data-rawwidth="1068" data-rawheight="246" class="origin_image zh-lightbox-thumb lazy" width="1068" data-original="https://pic2.zhimg.com/v2-eb1f32f0859ff9b1d7e173440a33ef79_r.jpg" data-actualsrc="https://pic2.zhimg.com/v2-eb1f32f0859ff9b1d7e173440a33ef79_b.jpg">

控制台中打印出的分别是错误信息和错误堆栈。

读到这里大家可能会想那就在最底层做一个错误try-catch不就好了吗。

确实作为一个从java转过来的程序员也是这么想的。

但是理想很丰满，现实很骨感。我们看看下一个例子。

" data-caption="" data-size="normal" data-rawwidth="401" data-rawheight="213" class="content_image lazy" width="401" data-actualsrc="https://pic1.zhimg.com/v2-3009ca23cd31746edc60dfccb214dd58_b.jpg">" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="243" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic1.zhimg.com/v2-ee34d182fd272a2c7416846eda3a3598_r.jpg" data-actualsrc="https://pic1.zhimg.com/v2-ee34d182fd272a2c7416846eda3a3598_b.jpg">

大家注意运行结果，异常并没有被捕获。

这是因为JS的try-catch功能非常有限一遇到异步就不好用了。

那总不能为了收集错误给所有的异步都加一个try-catch吧，太坑爹了。

其实你想想异步任务其实也不是由代码形式上的上层调用的就比如本例中的settimeout。

大家想想eventloop就明白啦，其实这些一步函数都是就好比一群没娘的孩子出了错误找不到家大人。

当然我也想过一些黑魔法来处理这个问题比如代理执行或者用过的异步方法。

算了还是还是再看看吧。

## **（2）异常任务捕获**

**window.onerror:**

window.onerror 最大的好处就是可以同步任务还是异步任务都可捕获。

" data-caption="" data-size="normal" data-rawwidth="401" data-rawheight="187" class="content_image lazy" width="401" data-actualsrc="https://pic4.zhimg.com/v2-24bed8baa980bec00959fe02855f2d77_b.jpg">" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="642" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic3.zhimg.com/v2-1a4bb9c84271b5b25b242ea463b3d89e_r.jpg" data-actualsrc="https://pic3.zhimg.com/v2-1a4bb9c84271b5b25b242ea463b3d89e_b.jpg">

onerror返回值

onerror还有一个问题大家要注意 如果返回返回true 就不会被上抛了。

不然控制台中还会看到错误日志。

监听error事件:

文件中的位置☟

window.addEventListener('error',() => {}）

其实onerror固然好但是还是有一类异常无法捕获。这就是网络异常的错误。

比如下面的例子。

 <code class="language-text"><img src="./xxxxx.png"></code>

试想一下我们如果页面上要显示的图片突然不显示了，而我们浑然不知那就是麻烦了。

addEventListener就是☟

" data-caption="" data-size="normal" data-rawwidth="402" data-rawheight="128" class="content_image lazy" width="402" data-actualsrc="https://pic4.zhimg.com/v2-dcde4d67a39d808a95ec2cf3d6837563_b.jpg">

运行结果如下☟

" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="579" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic2.zhimg.com/v2-dfd4f570225685b4ff0d45b59c60af49_r.jpg" data-actualsrc="https://pic2.zhimg.com/v2-dfd4f570225685b4ff0d45b59c60af49_b.jpg">

**Promise异常捕获：**

Promise的出现主要是为了让我们解决回调地域问题。基本是我们程序开发的标配了。

虽然我们提倡使用es7 async/await语法来写。

但是不排除很多祖传代码还是存在Promise写法。

 <code class="language-text">new Promise((resolve, reject) => {
  abcxxx()
});</code>

这种情况无论是onerror还是监听错误事件都是无法捕获的。

" data-caption="" data-size="normal" data-rawwidth="401" data-rawheight="119" class="content_image lazy" width="401" data-actualsrc="https://pic3.zhimg.com/v2-bb38e70990a048e6daefd6f83e60a0f2_b.jpg">

除非每个Promise都添加一个catch方法。

但显然，我们不能这样做。

 <code class="language-text">window.addEventListener("unhandledrejection", e => {
 console.log('unhandledrejection',e)
});</code>

" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="809" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic4.zhimg.com/v2-86c91b28e3e98d398cd111059a539053_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-86c91b28e3e98d398cd111059a539053_b.jpg">

我们可以考虑将unhandledrejection事件捕获错误抛出交由错误事件统一处理就可以了。

" data-caption="" data-size="normal" data-rawwidth="464" data-rawheight="58" class="origin_image zh-lightbox-thumb lazy" width="464" data-original="https://pic4.zhimg.com/v2-095d67f6d6f509372148f50f03ad138f_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-095d67f6d6f509372148f50f03ad138f_b.png">

**async/await异常捕获：**

" data-caption="" data-size="normal" data-rawwidth="406" data-rawheight="160" class="content_image lazy" width="406" data-actualsrc="https://pic3.zhimg.com/v2-40721f7dcef91b6583c9a553a77692e6_b.jpg">

实际上async/await语法本质还是Promise语法。

区别就是async方法可以被上层的try/catch捕获。

" data-caption="" data-size="normal" data-rawwidth="1072" data-rawheight="206" class="origin_image zh-lightbox-thumb lazy" width="1072" data-original="https://pic4.zhimg.com/v2-202ea279c17b8bff96079be9b3810363_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-202ea279c17b8bff96079be9b3810363_b.jpg">

如果不去捕获的话就会和Promise一样，需要用unhandledrejection事件捕获。

这样的话我们只需要在全局增加unhandlerejection就好了。

" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="547" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic2.zhimg.com/v2-76208837a31c285e2edcc0695fda0641_r.jpg" data-actualsrc="https://pic2.zhimg.com/v2-76208837a31c285e2edcc0695fda0641_b.jpg">

**小结：**

" data-caption="" data-size="normal" data-rawwidth="803" data-rawheight="194" class="origin_image zh-lightbox-thumb lazy" width="803" data-original="https://pic4.zhimg.com/v2-42c036f0328fb65eb3336fb5501b5fbb_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-42c036f0328fb65eb3336fb5501b5fbb_b.jpg">

实际上我们可以将unhandledrejection事件抛出的异常再次抛出就可以统一通过error事件进行处理了。

最终用代码表示如下：

" data-caption="" data-size="normal" data-rawwidth="421" data-rawheight="141" class="origin_image zh-lightbox-thumb lazy" width="421" data-original="https://pic4.zhimg.com/v2-abcb7cdcbe9b20a82f85ce1bc0d2f2f3_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-abcb7cdcbe9b20a82f85ce1bc0d2f2f3_b.jpg">

想更深入了解 Vue ，来 1 毛钱带走前端资料，包括 web 全栈和 web 架构师的学习资料以及大厂面试指南等，点击即可购买。

 开课吧 的推荐
 2020 Vue 资料+最新面试大厂面试题，入手不亏！

 点击购买

## **（3）前端工程化**

**Webpack工程化：**

现在是前端工程化的时代,工程化导出的代码一般都是被压缩混淆后的。

比如：

 <code class="language-text">setTimeout(() => {
    xxx(1223)
}, 1000)</code>

" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="211" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic2.zhimg.com/v2-c3d782d2032237beaa2d48c68c633691_r.jpg" data-actualsrc="https://pic2.zhimg.com/v2-c3d782d2032237beaa2d48c68c633691_b.jpg">

出错的代码指向被压缩后的JS文件，而JS文件长下图这个样子。

" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="538" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic1.zhimg.com/v2-2faf801967fa4b332ac2913d1fdd7230_r.jpg" data-actualsrc="https://pic1.zhimg.com/v2-2faf801967fa4b332ac2913d1fdd7230_b.jpg">

如果想将错误和原有的代码关联起来，那就需要sourcemap文件的帮忙了。

**sourceMap是什么？**

简单说，sourceMap就是一个文件，里面储存着位置信息。

仔细点说，这个文件里保存的，是转换后代码的位置，和对应的转换前的位置。

那么如何利用sourceMap对还原异常代码发生的位置这个问题，我们到异常分析这个章节再讲。

## **（4）VUE创建工程**

利用vue-cli工具直接创建一个项目。

" data-caption="" data-size="normal" data-rawwidth="402" data-rawheight="156" class="content_image lazy" width="402" data-actualsrc="https://pic1.zhimg.com/v2-4c139c35f19d7081d0c686370146677c_b.jpg">

为了测试的需要我们暂时关闭eslint 这里面还是建议大家全程打开eslint。

在vue.config.js进行配置

" data-caption="" data-size="normal" data-rawwidth="400" data-rawheight="159" class="content_image lazy" width="400" data-actualsrc="https://pic4.zhimg.com/v2-b4565492dc4f22c5fc96ca97e4bcc617_b.jpg">

我们故意在（文件位置☟）

src/components/HelloWorld.vue

" data-caption="" data-size="normal" data-rawwidth="401" data-rawheight="306" class="content_image lazy" width="401" data-actualsrc="https://pic3.zhimg.com/v2-bfb5e58e71842af9349958f3eaf4a09e_b.jpg">

这个时候 错误会在控制台中被打印出来,但是错误事件并没有监听到。

" data-caption="" data-size="normal" data-rawwidth="1074" data-rawheight="560" class="origin_image zh-lightbox-thumb lazy" width="1074" data-original="https://pic2.zhimg.com/v2-dd07b60c535c7926772a5a2655040561_r.jpg" data-actualsrc="https://pic2.zhimg.com/v2-dd07b60c535c7926772a5a2655040561_b.jpg">

**handleError：**

为了对Vue发生的异常进行统一的上报，需要利用vue提供的handleError句柄。

一旦Vue发生异常都会调用这个方法。

我们在src/main.js

" data-caption="" data-size="normal" data-rawwidth="447" data-rawheight="55" class="origin_image zh-lightbox-thumb lazy" width="447" data-original="https://pic1.zhimg.com/v2-7704644c5b12b7114531809d5ebf7770_r.jpg" data-actualsrc="https://pic1.zhimg.com/v2-7704644c5b12b7114531809d5ebf7770_b.png">" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="531" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic3.zhimg.com/v2-268cfccd057a38248c873ff9c4fd4a3a_r.jpg" data-actualsrc="https://pic3.zhimg.com/v2-268cfccd057a38248c873ff9c4fd4a3a_b.jpg">

**React：**

npx create-react-app react-sample

cd react-sample

yarn start

我们l用useEffect hooks 制造一个错误：

" data-caption="" data-size="normal" data-rawwidth="402" data-rawheight="275" class="content_image lazy" width="402" data-actualsrc="https://pic1.zhimg.com/v2-a58566e129b9e03f2bef7941925cc49c_b.jpg">

并且在src/index.js中增加错误事件监听逻辑：

 <code class="language-text">window.addEventListener('error', args => {
    console.log('error', error)
})</code>

但是从运行结果看虽然输出了错误日志但是还是服务捕获。

" data-caption="" data-size="normal" data-rawwidth="1060" data-rawheight="488" class="origin_image zh-lightbox-thumb lazy" width="1060" data-original="https://pic1.zhimg.com/v2-e5a572825df118a6444194ae2c506e54_r.jpg" data-actualsrc="https://pic1.zhimg.com/v2-e5a572825df118a6444194ae2c506e54_b.jpg">
## **（5）Error Boundary 标签**

错误边界仅可以捕获其子组件的错误。

错误边界无法捕获其自身的错误。

如果一个错误边界无法渲染错误信息，则错误会向上冒泡至最接近的错误边界。

这也类似于 JavaScript 中 catch {} 的工作机制。

创建ErrorBoundary组件

" data-caption="" data-size="normal" data-rawwidth="476" data-rawheight="235" class="origin_image zh-lightbox-thumb lazy" width="476" data-original="https://pic2.zhimg.com/v2-789d41b2f1068569f70388bc6dcb0655_r.jpg" data-actualsrc="https://pic2.zhimg.com/v2-789d41b2f1068569f70388bc6dcb0655_b.jpg">

在src/index.js中包裹App标签☟

" data-caption="" data-size="normal" data-rawwidth="401" data-rawheight="114" class="content_image lazy" width="401" data-actualsrc="https://pic4.zhimg.com/v2-52d556688681a17b90127876ac7c580f_b.jpg">

最终运行的结果：

" data-caption="" data-size="normal" data-rawwidth="1080" data-rawheight="579" class="origin_image zh-lightbox-thumb lazy" width="1080" data-original="https://pic4.zhimg.com/v2-8f9aa3b565509c8b90e148e297c812d7_r.jpg" data-actualsrc="https://pic4.zhimg.com/v2-8f9aa3b565509c8b90e148e297c812d7_b.jpg">

关于Ajax的异常上报、搭建eggis工程、深度解析Error Staack等等操作，我正在拼命制作中，感兴趣的朋友记得关注我，产出后我会第一时间发出来~

以上，希望能够帮助到各位。

有意向深入了解 Vue，点击下方查看资料包括 web 全栈和 web 架构师的学习资料以及大厂面试指南等，点击即可 1 毛钱购买。

 开课吧 的推荐
 2020 Vue 资料+最新面试大厂面试题，入手不亏！

 点击购买

> 作者：不露脸的web侠
