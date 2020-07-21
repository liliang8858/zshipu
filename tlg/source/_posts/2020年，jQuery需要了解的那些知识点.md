
title: 2020年，jQuery需要了解的那些知识点
author: 知识铺
date: 2020-05-24 18:50:59
tags:
---
  jQuery作为一个DOM选择、事件绑定、AJAX的工具库来说，依旧还是极其优秀的存在，你甚至可以把jQuery理解为一个浏览器的标准库（实际上也是事实标准）。UI库方面可以使用LayUI（兼容移动端）。需要在前端渲染HTML模板和进行VM视图模型数据绑定时，可以用跟jQuery亲和性更好的JSrender和JSviews：

 <code class="language-text">核心就是下面两句,剩下的就是写模板.
$("#输出位置").html( $.templates("#模板位置").render(json) ); // JSrender 渲染模板
$.templates("#模板位置").link("#输出位置", json); // JSviews 数据绑定
<script id="模板位置" type="text/x-jsrender"><!--写模板--></script></code>

至于SEO，首先需要明确的是，GET类型的读操作才需要SEO，而大多数POST类型的写操作，不需要SEO。

后端采用MVC分层，严格区分视图层，视图层只有模板和注入的数据（控制器中渲染视图render($template, $data)）。然后把视图层（如module/article/views/index.html.php这个template）交给前端开发者来编写，前端只需要熟悉PHP模板的写法（主要就是在<?php?>中用PHP写一些foreach循环和if else判断）和数据的调用（可以把注入到模板的数据$data理解为接口返回的数据）即可，这样界面完全由前端编写。对于POST类型提交的AJAX表单（不需要SEO，比如添加/编辑/删除等写操作），后端返回JSON，前端需要在浏览器里渲染HTML时可以使用jQuery模板库JSrender（它的模板也由前端开发者写在视图层中）。这样就实现了MVC的核心思想，彻底分离了界面和逻辑，同时不影响SEO和前后端分工。前端更加专注于UI和交互，不需要关注路由等其他层的逻辑。 > 作者：eechen > 链接：https://www.zhihu.com/question/365278222/answer/1144530972
