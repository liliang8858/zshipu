---
categories:
- 月刊
tags:
- 月刊,技术月刊
keywords: 知识铺,技术月刊
date: 2019-11-19T13:56:17+08:00
title:  技术月刊第 02 期
author: 知识铺
weight: -1
---

# 《技术月刊》第 02 期
>兴趣是最好的老师，**技术月刊** 就是帮你找到兴趣！


## 简介
分享 GitHub 上有趣、入门级的开源项目。



🎉  🎉

## 目录
- [CSS 项目](#CSS-项目)
- [JavaScript 项目](#JavaScript-项目)
- [Python 项目](#Python-项目)
- [其它](#其它)


### CSS 项目
1、[github-markdown-css](https://github.com/sindresorhus/github-markdown-css)：仿 GitHub 的 Markdown 的样式，就是使用了这个 CSS 后，Markdown 展示效果和 GitHub 的大致一样。[示例](https://sindresorhus.com/github-markdown-css/)

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>

### JavaScript 项目
2、[listen1](https://github.com/listen1/listen1_desktop)：Listen 1 让你用一个网页就能听到多个网站的在线音乐，支持各种平台。如图：


<p align="center"><img src='https://sblig.gitee.io/static/satj/02/img/listen1-min.png' style="max-width:80%; max-height=80%;"></img></p>

3、[jquery-weui](https://github.com/lihongxun945/jquery-weui)：可能是最好用 WeUI 版本，展示效果如下：


<p align="center"><img src='https://sblig.gitee.io/static/satj/02/img/jquery-weui-min.png' style="max-width:80%; max-height=80%;"></img></p>

4、[ant-motion](https://github.com/ant-motion/ant-motion)：阿里开源的项目，一套 React 框架动效解决方案，可以帮助开发者，更容易的在项目中使用动效。同时可以方便快捷地制作一个公司的介绍页，[在线演示](https://motion.ant.design/)

5、[wechat-h5-boilerplate](https://github.com/panteng/wechat-h5-boilerplate)：为腾讯微信优化的 HTML5 动效模板，帮助你快速构建全屏滚动型 HTML5 页面，[示例](https://panteng.github.io/wechat-h5-boilerplate/)

6、[waitForImages](https://github.com/alexanderdickson/waitForImages)：背景加载完事件，示例代码：
```html
<script type="text/javascript" src="http://catmull.uk/downloads/bg-loaded/bg-loaded.js"></script>
<script type="text/javascript">
   $('body').bgLoaded({
      afterLoaded : function() {
         alert('Background image done loading');
      }
   });
</script>
```

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>

### Python 项目
7、[luokr.com](https://github.com/alvan/luokr.com)：Python Tornado 写的开源网站——螺壳网，[访问](http://luokr.com/)，如图：


<p align="center"><img src='https://sblig.gitee.io/static/satj/02/img/luokr-com.png' style="max-width:80%; max-height=80%;"></img></p>

8、[ssbc](https://github.com/78/ssbc)：Python Django 写的种子搜索网站——手撕包菜，如图：


<p align="center"><img src='https://sblig.gitee.io/static/satj/02/img/ssbc.png' style="max-width:80%; max-height=80%;"></img></p>

9、[python-gems](https://github.com/RealHacker/python-gems)：有趣的 Pyhton 代码片段集合

10、[algorithm](https://github.com/qiwsir/algorithm)：老齐的 Python 算法教程

11、[python-goose](https://github.com/grangier/python-goose)：Goose 用于文章提取器，提取中文内容的示例代码：
```python
>>> from goose import Goose
>>> from goose.text import StopWordsChinese
>>> url  = 'http://www.bbc.co.uk/zhongwen/simp/chinese_news/2012/12/121210_hongkong_politics.shtml'
>>> g = Goose({'stopwords_class': StopWordsChinese})
>>> article = g.extract(url=url)
>>> print article.cleaned_text[:150]
香港行政长官梁振英在各方压力下就其大宅的违章建筑（僭建）问题到立法会接受质询，并向香港民众道歉。

梁振英在星期二（12月10日）的答问大会开始之际在其演说中道歉，但强调他在违章建筑问题上没有隐瞒的意图和动机。

一些亲北京阵营议员欢迎梁振英道歉，且认为应能获得香港民众接受，但这些议员也质问梁振英有
```

12、[mincss](https://github.com/peterbe/mincss)：Python 写的用来找到 CSS 中没有用到的代码片段，并删除。适用于：想要做一个页面，但是不会写 CSS 人。示例代码如下：
```python
#coding:utf-8
#!/usr/bin/env python
from __future__ import print_function
import sys, os
sys.path.insert(0, os.path.abspath('.'))
from mincss.processor import Processor

# 这里改成想要参考的页面
URL = 'http://localhost:9000/page.html'

def run():
    p = Processor()
    p.process(URL)

    # 输出INlink的css的简化前和简化后的css代码
    print("INLINES ".ljust(79, '-'))
    for each in p.inlines:
        print("On line %s" % each.line)
        print('- ' * 40)
        print("BEFORE")
        print(each.before)
        print('- ' * 40)
        print("AFTER:")
        print(each.after)

    # 输出link引用的css的简化前和简化后的css代码
    print("LINKS ".ljust(79, '-'))
    for each in p.links:
        print("On href %s" % each.href)
        print('- ' * 40)
        print("BEFORE")
        print(each.before)
        print('- ' * 40)
        print("AFTER:")
        print(each.after)

if __name__ == '__main__':
    run()
```

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>

### 其它
13、[leetcode-solutions](https://github.com/RealHacker/leetcode-solutions)：Leetcode OJ 的 Python 算法实现

<p align="center"><a href="#目录">🔙 返回目录 🔙</a></p><br>



<p align="center">
    <a href="../../01/satj01">『上一期』</a>  | <a href="../../03/satj03">『下一期』</a>
</p>




