
title: Bulma和Buefy框架如何自定义主题？
author: 知识铺
date: 2020-05-24 13:24:53
tags:
---
 如何Bulma和Buefy自定义主题，全局修改css
--------------------------

前端UI框架中，Bulma和基于其开发的Buefy都是非常简单好用的选择，但是在自定义其主题的过程中碰到了一些问题，在此记录解决办法。

本文所有操作都是基于页面直接通过script引入这些框架的开发模式来操作的。

自定义Bulma主题
----------

### 安装Sass

macOS下通过brew进行安装

    brew install sass/sass/sass

### 下载Bulma

[地址](https://github.com/jgthms/bulma/releases/download/0.8.2/bulma-0.8.2.zip)

解压缩之后，放到`mybulma`文件夹中，文件夹结构如下

    $ mybulma tree -L 2
    .
    └── bulma
        ├── CHANGELOG.md
        ├── LICENSE
        ├── README.md
        ├── bulma.sass
        ├── css
        ├── package.json
        └── sass

### 创建Sass文件

创建`sass`文件夹，然后在里面创建`mystyles.scss`文件，文件夹结构如下

    .
    ├── bulma
    │   ├── CHANGELOG.md
    │   ├── LICENSE
    │   ├── README.md
    │   ├── bulma.sass
    │   ├── css
    │   ├── package.json
    │   └── sass
    └── sass
        └── mystyles.scs

在`mystyles.scss`文件内写入

    @charset "utf-8";
    @import "../bulma/bulma.sass";

### 创建测试HTML文件

在`mybulma`文件夹下创建`mypage.html`文件，写入如下内容

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My custom Bulma website</title>
        <link rel="stylesheet" href="css/mystyles.css">
      </head>
      <body>
         <h1 class="title">
            Bulma
          </h1>
    
          <p class="subtitle">
            Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
          </p>
    
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Input">
            </div>
          </div>
    
          <div class="field">
            <p class="control">
              <span class="select">
                <select>
                  <option>Select dropdown</option>
                </select>
              </span>
            </p>
          </div>
    
          <div class="buttons">
            <a class="button is-primary">Primary</a>
            <a class="button is-link">Link</a>
          </div>
      </body>
    </html>

### 生成CSS文件

终端输入命令

    sass --no-source-map sass/mystyles.scss:css/mystyles.css

为了可以实时观察修改情况，也可以输入

    sass --watch --no-source-map sass/mystyles.scss:css/mystyles.css

### 修改`mystyles.scss`文件来自定义主题

修改完成后刷新网页查看效果

    @charset "utf-8";
    
    // Import a Google Font
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,700');
    
    // Set your brand colors
    $purple: #8A4D76;
    $pink: #FA7C91;
    $brown: #757763;
    $beige-light: #D0D1CD;
    $beige-lighter: #EFF0EB;
    
    // Update Bulma's global variables
    $family-sans-serif: "Nunito", sans-serif;
    $grey-dark: $brown;
    $grey-light: $beige-light;
    $primary: $purple;
    $link: $pink;
    $widescreen-enabled: false;
    $fullhd-enabled: false;
    
    // Update some of Bulma's component variables
    $body-background-color: $beige-lighter;
    $control-border-width: 2px;
    $input-border-color: transparent;
    $input-shadow: none;
    
    // Import only what you need from Bulma
    @import "../bulma/sass/utilities/_all.sass";
    @import "../bulma/sass/base/_all.sass";
    @import "../bulma/sass/elements/button.sass";
    @import "../bulma/sass/elements/container.sass";
    @import "../bulma/sass/elements/title.sass";
    @import "../bulma/sass/form/_all.sass";
    @import "../bulma/sass/components/navbar.sass";
    @import "../bulma/sass/layout/hero.sass";
    @import "../bulma/sass/layout/section.sass";

### 下载Buefy源代码

[地址](https://github.com/buefy/buefy/archive/v0.8.18.zip)

解压缩后文件夹结构如下

    .
    ├── buefy
    │   ├── BACKERS.md
    │   ├── ...
    │   ├── src
    │   ├── ...
    ├── bulma
    │   ├── CHANGELOG.md
    │   ├── LICENSE
    │   ├── README.md
    │   ├── bulma.sass
    │   ├── css
    │   ├── package.json
    │   └── sass
    ├── css
    │   └── mystyles.css
    ├── mypage.html
    └── sass
        └── mystyles.scss

### `mypage.html`引入Vue和buefy

修改代码如下

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My custom Bulma website</title>
        <link rel="stylesheet" href="css/mystyles.css" />
      </head>
      <body>
        <h1 class="title">
          Bulma
        </h1>
    
        <p class="subtitle">
          Modern CSS framework based on
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
            >Flexbox</a
          >
        </p>
    
        <div class="field">
          <div class="control">
            <input class="input" type="text" placeholder="Input" />
          </div>
        </div>
    
        <div class="field">
          <p class="control">
            <span class="select">
              <select>
                <option>Select dropdown</option>
              </select>
            </span>
          </p>
        </div>
    
        <div class="buttons">
          <a class="button is-primary">Primary</a>
          <a class="button is-link">Link</a>
        </div>
    
        <div id="app">
          <main class="section">
            <div class="container">
              <b-button type="is-primary">Click Me</b-button>
            </div>
          </main>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script src="https://unpkg.com/buefy/dist/buefy.min.js"></script>
        <script>
          new Vue({
            el: "#app",
          });
        </script>
      </body>
    </html>

### 修改`mystyles.scss`文件

    @charset "utf-8";
    
    // Import a Google Font
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,700');
    
    // Import only what you need from Bulma
    @import "../bulma/sass/utilities/_all.sass";
    
    // Set your brand colors
    $purple: #8A4D76;
    $pink: #FA7C91;
    $brown: #757763;
    $beige-light: #D0D1CD;
    $beige-lighter: #EFF0EB;
    
    // Update Bulma's global variables
    $family-sans-serif: "Nunito", sans-serif;
    $grey-dark: $brown;
    $grey-light: $beige-light;
    $primary: $purple;
    $link: $pink;
    $widescreen-enabled: false;
    $fullhd-enabled: false;
    
    // // Update some of Bulma's component variables
    $body-background-color: $beige-lighter;
    $control-border-width: 2px;
    $input-border-color: transparent;
    $input-shadow: none;
    
    
    
    // Set your colors
    $primary-invert: findColorInvert($primary);
    // Setup $colors to use as bulma classes (e.g. 'is-twitter')
    $colors: (
        "white": ($white, $black),
        "black": ($black, $white),
        "light": ($light, $light-invert),
        "dark": ($dark, $dark-invert),
        "primary": ($primary, $primary-invert),
        "info": ($info, $info-invert),
        "success": ($success, $success-invert),
        "warning": ($warning, $warning-invert),
        "danger": ($danger, $danger-invert),
    );
    
    // Links
    $link: $primary;
    $link-invert: $primary-invert;
    $link-focus-border: $primary;
    
    // Import only what you need from Bulma
    // @import "../bulma/sass/utilities/_all.sass";
    // @import "../bulma/sass/base/_all.sass";
    // @import "../bulma/sass/elements/button.sass";
    // @import "../bulma/sass/elements/container.sass";
    // @import "../bulma/sass/elements/title.sass";
    // @import "../bulma/sass/form/_all.sass";
    // @import "../bulma/sass/components/navbar.sass";
    // @import "../bulma/sass/layout/hero.sass";
    // @import "../bulma/sass/layout/section.sass";
    
    @import "../bulma/bulma.sass";
    
    @import "../buefy/src/scss/buefy.scss";

### 查看页面，可以看到Buefy的按钮也被重新定义了颜色
> 作者：爱写程序的小哥哥
> 链接：https://www.zhihu.com/question/394983567/answer/1224156706
