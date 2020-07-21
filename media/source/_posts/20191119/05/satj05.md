---
categories:
- 月刊
tags:
- 月刊,技术月刊
keywords: 知识铺,技术月刊
date: 2019-11-19T13:56:17+08:00
title:  技术月刊第 05 期
author: 知识铺
weight: -1
---

# 《技术月刊》第 05 期
>兴趣是最好的老师，**技术月刊** 就是帮你找到兴趣！


## 简介
分享 GitHub 上有趣、入门级的开源项目。



🎉  🎉

## 目录
- [C# 项目](#C-项目)
- [Go 项目](#Go-项目)
- [JavaScript 项目](#JavaScript-项目)
- [PHP 项目](#PHP-项目)
- [Python 项目](#Python-项目)
- [其它](#其它)


### C# 项目
1、[WeiXinMPSDK](https://github.com/JeffreySu/WeiXinMPSDK)：微信公众平台 SDK，支持 .NET Framework 及 .NET Core。已支持微信公众号、企业号、开放平台、微信支付、JSSDK。此项目开源、免费、持续维护。

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>

### Go 项目
2、[gogs](https://github.com/gogits/gogs)：用 Go 写的一款极易搭建的自助 Git 服务，支持所有平台。就像 GitLab 一样的服务，但是 GitLab 是基于 ruby 语言的。另外：完善的中文文档、支持 Go 语言支持的所有平台，包括 Linux、Mac OS X、Windows 以及 ARM 平台。[中文介绍](https://github.com/gogits/gogs/blob/master/README_ZH.md)


<p align="center"><img src='https://sblig.gitee.io/static/satj/05/img/gogs-show-min.png' style="max-width:80%; max-height=80%;"></img></p>

3、[gh-ost](https://github.com/github/gh-ost)：GitHub 开源的在线修改表结构工具。目的是解决一个经常碰到的问题：不断变化的产品需求会不断要求更改 MySQL 表结构。gh-ost 通过一种影响小、可控制、可审计、操作简单而且安全的方式来改变线上表结构。[中文简介](http://www.infoq.com/cn/news/2016/08/GitHub-MySQL-gh-ost?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global)


<p align="center"><img src='https://sblig.gitee.io/static/satj/05/img/gh-ost-general-flow-min.png' style="max-width:80%; max-height=80%;"></img></p>

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>

### JavaScript 项目
4、[share.js](https://github.com/overtrue/share.js)：一键分享到微博、QQ 空间、QQ 好友、微信、腾讯微博、豆瓣等社交网站的 JavaScript 项目。[在线演示](http://overtrue.me/share.js/)


<p align="center"><img src='https://sblig.gitee.io/static/satj/05/img/share-js-show-min.png' style="max-width:80%; max-height=80%;"></img></p>

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>

### PHP 项目
5、[pinyin](https://github.com/overtrue/pinyin)：基于 CC-CEDICT 词典的中文转拼音工具，更准确的支持多音字的汉字转拼音解决方案，示例代码：
```php
use OvertruePinyinPinyin;

$pinyin = new Pinyin();

$pinyin->convert('带着希望去旅行，比到达终点更美好');
// ["dai", "zhe", "xi", "wang", "qu", "lv", "xing", "bi", "dao", "da", "zhong", "dian", "geng", "mei", "hao"]

$pinyin->convert('带着希望去旅行，比到达终点更美好', PINYIN_UNICODE);
// ["dài","zhe","xī","wàng","qù","lǚ","xíng","bǐ","dào","dá","zhōng","diǎn","gèng","měi","hǎo"]

$pinyin->convert('带着希望去旅行，比到达终点更美好', PINYIN_ASCII);
//["dai4","zhe","xi1","wang4","qu4","lv3","xing2","bi3","dao4","da2","zhong1","dian3","geng4","mei3","hao3"]
```

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>

### Python 项目
6、[superset](https://github.com/apache/incubator-superset)：企业级的数据探索、展示平台。功能很强大，可以用来做数据分析、展示。如下图：


<p align="center"><img src='https://sblig.gitee.io/static/satj/05/img/superset-min.png' style="max-width:80%; max-height=80%;"></img></p>

7、[flaskbb](https://github.com/sh4nks/flaskbb)：基于 Flask 框架做的论坛，功能有限，轻量级的论坛应用[在线文档](https://flaskbb.readthedocs.io/en/latest/index.html)，可以在这个项目上进行二次开发，实现更加复杂的功能。[在线预览](https://forums.flaskbb.org)


<p align="center"><img src='https://sblig.gitee.io/static/satj/05/img/flask-bb-show-min.png' style="max-width:80%; max-height=80%;"></img></p>

8、[fuck-login](https://github.com/xchaoinfo/fuck-login)：模拟登录一些知名的网站，为了方便爬取需要登录的网站。**注意**：控制爬虫的爬取频率！

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>

### 其它
9、[bytesize-icons](https://github.com/danklammer/bytesize-icons)：极小、极简的 SVG 图标集合，[在线演示](http://danklammer.com/articles/svg-stroke-ftw/#give-it-a-spin)。


<p align="center"><img src='https://sblig.gitee.io/static/satj/05/img/bytesize-icons-show-min.png' style="max-width:80%; max-height=80%;"></img></p>

10、[gitignore](https://github.com/github/gitignore)：各种 `gitignore` 模版，特别全，应该能找到你需要的。[什么是 gitignore 文件](http://gitbook.liuhui998.com/4_1.html)。

11、[Solve-App-Store-Review-Problem](https://github.com/wg689/Solve-App-Store-Review-Problem)：App Store 审核未通过的解决方案。

12、[security-guide-for-developers](https://github.com/FallibleInc/security-guide-for-developers)：这是一个实际工作中会用到的安全 checklist。作为一个 real world web developer 你应该在实际工作中不断地谨慎使用这套列表，减少安全隐患。[中文翻译版](https://github.com/FallibleInc/security-guide-for-developers/blob/master/README-zh.md)

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>



<p align="center">
    <a href="../../04/satj04">『上一期』</a>  | <a href="../../06/satj06">『下一期』</a>
</p>




