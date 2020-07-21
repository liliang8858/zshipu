title: Vue手册：Vue.js的完整介绍
author: 知识铺
date: 2019-11-29 13:34:21
tags:
---
Vue是一种非常流行的JavaScript前端框架，正在经历巨大的增长。

它很简单，很小（〜24KB），并且性能很高。感觉与所有其他JavaScript前端框架和视图库不同。让我们找出原因。

### 首先，什么是JavaScript前端框架？

如果不确定什么是JavaScript框架，那么Vue是一个完美的初体验。

JavaScript框架可帮助我们创建现代应用程序。现代JavaScript应用程序主要在Web上使用，但也为许多桌面和移动应用程序提供支持。

直到2000年代初，浏览器才拥有现在所没有的功能。它们的功能要弱得多，并且在它们内部构建复杂的应用程序在性能上并不可行。人们甚至都没有想到过这种工具。

当Google推出浏览器中运行的两个应用程序[Google Maps](https://www.google.com/maps)和[GMail时](https://www.google.com/gmail)，一切都发生了变化。[Ajax](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)使异步网络请求成为可能。随着时间的流逝，开发人员开始在Web平台之上进行构建，而工程师在该平台本身上进行工作-浏览器，Web标准，浏览器API和JavaScript语言。

像[jQuery](https://jquery.com/)和[Mootools](https://mootools.net/)这样的库是第一个基于JavaScript的大型项目，并在一段时间内大受欢迎。他们基本上提供了一个更好的API与浏览器进行交互，并提供了各种浏览器之间的错误和不一致的解决方法。

诸如[Backbone](http://backbonejs.org/)，[Ember](https://www.emberjs.com/)，[Knockout](http://knockoutjs.com/)和[AngularJS之](https://angularjs.org/)类的框架是现代JavaScript框架的第一波潮流。

第二波是当前波，其主要参与者是[React](https://reactjs.org/)，[Angular](https://angular.io/)和[Vue](https://vuejs.org/)。

请注意，jQuery，Ember和我提到的其他项目仍在大量使用，积极维护和数百万个网站依赖它们。

也就是说，技术和工具不断发展，作为JavaScript开发人员，您现在可能需要了解React，Angular或Vue，而不是那些较旧的框架。

框架抽象了与浏览器和DOM的交互。我们不是在DOM中通过引用元素来操作元素，而是在更高的级别上以[声明方式](https://en.wikipedia.org/wiki/Declarative_programming)定义它们并与之交互。

使用框架就像使用[C编程语言](https://en.wikipedia.org/wiki/C_(programming_language))而不是使用[汇编语言](https://en.wikipedia.org/wiki/Assembly_language)编写系统程序一样。就像使用计算机来编写文档而不是使用打字机一样。这就像拥有自动驾驶汽车，而不是自己驾驶汽车。

好吧，不是很远，但是您知道了。您不必使用由浏览器提供的低级API来操纵元素，而是使用非常聪明的人构建的工具来使我们的生活更轻松，这些工具可以构建非常复杂的系统来编写应用程序。

### Vue的受欢迎程度

Vue.js的受欢迎程度如何？

Vue有：

*   2016年在GitHub上获得7,600星
*   2017年在GitHub上有36,700星

截至2018年6月，它在GitHub上拥有超过100,000个星星。

它的[npm](https://www.npmjs.com/)下载数量每天都在增长，现在每周大约有350,000次下载。

鉴于这些数字，我会说Vue非常受欢迎。

相对而言，它的GitHub星星数量与几年前诞生的React大致相同。

当然，数字并不是万能的。我对Vue的印象是开发人员**喜欢**它。

Vue兴起的关键时刻是在Laravel生态系统中的采用，Laravel生态系统是一种非常流行的PHP Web应用程序框架。但是从那以后，它已经在许多其他开发社区中广泛传播。

#### 为什么开发人员喜欢Vue

首先，Vue被称为渐进框架。

这意味着它可以适应开发人员的需求。其他框架则需要开发人员或团队的全面支持，并且由于它们需要某些特定的约定集，因此常常希望您重写现有的应用程序。Vue从一个简单的`script`标签开始就很高兴地落在您的应用程序内部，它可以随着您的需求而增长，从3行扩展到管理整个视图层。

您不需要了解[webpack](https://webpack.js.org/)，[Babel](https://babeljs.io/)，npm或任何有关Vue入门的知识。但是，当您准备就绪时，Vue使您可以轻松依赖它们。

这是一个很大的卖点，尤其是在当前的JavaScript前端框架和库生态系统中，这些生态系统倾向于疏远新手和经验丰富的开发人员，他们迷失在可能性和选择的海洋中。

Vue.js可能是最容易接近的前端框架。有人称Vue为**新的jQuery**，因为它很容易通过script标签进入应用程序，并从那里逐渐获得空间。自从jQuery在过去几年中统治了Web以来，它一直是一种赞美，现在它仍然在大量站点上发挥作用。

Vue的构建是通过选择Angular，React和Knockout等框架的最佳思想，并挑选这些框架的最佳选择来完成的。通过排除一些不太出色的产品，它开始成为“最佳”产品，并从那里发展起来。

#### Vue.js在框架环境中的什么位置？

在谈论Web开发时，会议室中的两个大象是React和Angular。Vue如何相对于这两个流行的大型框架定位自己？

Vue由Evan You在Google上使用AngularJS（Angular 1.0）应用程序创建时创建。它是出于创建更多高性能应用程序的需要而诞生的。Vue选择了一些Angular模板语法，但删除了Angular所需的，自以为是的复杂堆栈，并使其表现出色。

新的Angular（Angular 2.0）也解决了许多AngularJS问题，但是方式却截然不同。它还需要[TypeScript的支持](https://www.typescriptlang.org/)，并非所有开发人员都喜欢使用（或想学习）。

那React呢？Vue从React获得了很多好主意，最重要的是虚拟DOM。但是Vue通过某种自动依赖管理来实现它。这跟踪状态更改影响哪些组件，以便在状态属性更改时仅重新呈现那些组件。

另一方面，在React中，当影响组件的一部分状态发生变化时，组件将被重新渲染。默认情况下，其所有子级也会重新渲染。为避免这种情况，您需要使用`shouldComponentUpdate`每个组件的方法并确定是否应重新渲染该组件。在易用性和开箱即用的性能方面，这给Vue带来了一些优势。

与React的一大不同是[JSX](https://reactjs.org/docs/introducing-jsx.html)。尽管您可以在Vue中使用JSX，但它不是一种流行的方法，而是使用了[模板系统](https://vuejs.org/v2/guide/syntax.html)。任何HTML文件都是有效的Vue模板。JSX与HTML截然不同，它为团队中的人员提供了学习曲线，他们可能只需要使用应用程序的HTML部分，例如设计师。

Vue模板与[Moustache](http://mustache.github.io/)和[Handlebars](https://handlebarsjs.com/)非常相似（尽管它们在灵活性方面有所不同）。因此，对于已经使用Angular和Ember等框架的开发人员来说，它们更加熟悉。

官方状态管理库[Vuex](https://vuex.vuejs.org/)遵循Flux架构，其概念在某种程度上类似于[Redux](https://redux.js.org/)。再次，这是关于Vue的积极事情的一部分，Vue在React中看到了这种良好模式，并将其借用于其生态系统。尽管可以将Redux与Vue结合使用，但Vuex是专门为Vue及其内部功能量身定制的。

Vue非常灵活，但是核心团队维护着两个对任何Web应用都非常重要的软件包（例如路由和状态管理），这一事实使得它比React更加零碎。例如：`vue-router`和`vuex`是Vue成功的关键。

您无需选择或担心您将来选择的库是否将要维护，并会跟上框架更新的步伐。由于它们是官方的，因此它们是其利基市场的规范性去库（但您当然可以选择使用喜欢的库）。

与React和Angular相比，使Vue处于不同的类别的一件事是，Vue是一个**独立**项目：它没有像Facebook或Google这样的大型公司的支持。

相反，它得到了社区的完全支持，该社区通过捐赠和赞助者促进发展。这可以确保Vue的路线图不受单个公司议程的驱动。

### 您的第一个Vue应用

如果您从未创建过Vue.js应用程序，那么我将指导您完成创建应用程序的任务，以便您了解其工作方式。

#### 第一个例子

首先，我将介绍使用Vue的最基本示例。

您创建一个HTML文件，其中包含：

```
<html>
  <body>
    <div id="example">
      <p>{.{ hello }}</p>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script>
        new Vue({
            el: '#example',
            data: { hello: 'Hello World!' }
        })
    </script>
  </body>
</html>
```

然后在浏览器中打开它。这是您的第一个Vue应用！该页面应显示“ Hello World！”消息。

我将脚本标签放在正文的末尾，以便在加载DOM之后按顺序执行它们。

该代码的作用是实例化一个新的Vue应用程序，该应用程序链接到该`#example`元素作为其模板。通常是使用CSS选择器定义的，但您也可以传入`HTMLElement`。

然后，它将模板与`data`对象相关联。这是一个特殊的对象，用于承载我们希望Vue呈现的数据。

在模板中，特殊`{.{ }}`标记表示这是动态模板的一部分，应在Vue应用程序数据中查找其内容。

您可以在[CodePen](https://codepen.io/flaviocopes/pen/YLoLOp)上看到此示例。

CodePen与使用纯HTML文件有点不同，您需要对其进行配置以指向Pen设置中的Vue库位置：

![](https://cdn-media-1.freecodecamp.org/images/Qa8s2ayB3DhhE3dRKv4SFowGd8xHDvEeSlL4)
#### 第二个示例：Vue CLI默认应用

让我们稍微升级一下游戏。我们将要构建的下一个应用程序已经完成，它是Vue CLI的默认应用程序。

什么是Vue CLI？它是一个命令行实用程序，通过安装适当的示例应用程序来为您架设一个应用程序框架，从而有助于加快开发速度。

有两种方法可以获取此应用程序：

**在本地使用Vue CLI**

首先是在计算机上安装Vue CLI并运行以下命令：

```
vue create <enter the app name>
```

**使用CodeSandbox**

一个简单的方法（无需安装任何软件）是转到[CodeSandbox](https://codesandbox.io/s/vue)。该链接将打开Vue CLI默认应用程序。

CodeSandbox是一个很棒的代码编辑器，可让您在云中构建应用程序。您可以使用任何npm软件包，并且可以轻松地与[Zeit Now](https://zeit.co/now)集成以实现轻松部署，并可以与[GitHub](https://github.com/)集成以管理版本控制。

无论您是选择在本地使用Vue CLI还是通过CodeSandbox，我们都将详细检查该Vue应用程序。

### 文件结构

在旁边`package.json`，其中包含配置，这些是初始项目结构中包含的文件：

*   `index.html`
*   `src/App.vue`
*   `src/main.js`
*   `src/assets/logo.png`
*   `src/components/HelloWorld.vue`

#### `index.html`

该`index.html`文件是主应用程序文件。

在主体中，它仅包含一个简单元素：`<div id="app">`</ div>。这是我们将用于附加到DOM的Vue应用程序的元素。

```
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>CodeSandbox Vue</title>
</head>

<body>
  <div id="app"></div>
  <!-- built files will be auto injected -->
</body>

</html>
```
#### `src/main.js`

这是驱动我们的应用程序的主要JavaScript文件。

我们首先从中导入Vue库和App组件`App.vue`。

我们设置`productionTip`为`false`，以避免Vue在控制台中输出“您处于开发模式”提示。

接下来，我们通过将Vue实例分配给在中`#app`定义的标识的DOM元素来创建Vue实例，`index.html`并告诉它使用App组件。

```


import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```
#### `src/App.vue`

`App.vue`是单个文件组件。它包含三个代码块：HTML，CSS和JavaScript。

乍一看似乎很奇怪，但是“单个文件组件”是一种创建独立组件的好方法，这些组件可以在单个文件中包含所有需要的组件。

我们具有标记，将要与之交互的JavaScript以及应用于该标记的样式，可以对其范围进行限制。在这种情况下，它没有作用域，只是输出了像常规CSS一样应用到页面的CSS。

有趣的部分在于`script`标签。

我们从`components/HelloWorld.vue`文件中导入一个组件，我们将在后面描述。

该组件将在我们的组件中引用。这是一个依赖关系。我们将输出此代码

```
<div id="app">
  <img width="25%" src="./assets/logo.png">
  <HelloWorld/>
</div>
```

从该组件中，您将看到该`HelloWorld`组件。Vue会自动将该组件插入此占位符。

```
<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
#### `src/components/HelloWorld.vue`

这是`HelloWorld`组件，它包含在App组件中。

该组件输出一组链接以及一条消息。

还记得上面我们讨论过App.vue中的CSS，但没有作用域吗？该`HelloWorld`组件的作用域为CSS。

您可以通过查看`style`标签轻松地确定它。如果具有`scoped`属性，则其作用域为：`<style scop`ed>

这意味着生成的CSS将通过Vue透明应用的类来唯一地定位组件。您无需为此担心，并且知道CSS不会**泄漏**到页面的其他部分。

组件输出的消息存储在`data`Vue实例的属性中，并在模板中输出`{.{ msg }}`。

`data`可以使用自己的名称直接在模板中访问存储在其中的任何内容。我们不必说`data.msg`了`msg`。

```
<template>
  <div class="hello">
    <h1>{.{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
```
#### 运行应用

CodeSandbox具有很酷的预览功能。您可以运行该应用程序并编辑源代码中的任何内容，以使其立即反映在预览中。

![](https://cdn-media-1.freecodecamp.org/images/ZWfaVoQWEm4HzD0RNcS2osp8NpIPz-G5Vq5P)
### Vue CLI

CodeSandbox非常适合在线编码和工作，而无需在本地设置Vue。在本地工作的一种好方法是设置Vue CLI（命令行界面）。让我们进一步了解它。

在上一个示例中，我介绍了一个基于Vue CLI的示例项目。Vue CLI到底是什么，它如何适合Vue生态系统？另外，我们如何在本地设置基于Vue CLI的项目？让我们找出答案！

**注意：**从版本2到版本3，现在正在对CLI进行大量修改。虽然尚不稳定，但我将介绍版本3，因为它是对版本2的巨大改进，并且有很大的不同。

#### 安装

Vue CLI是一个命令行实用程序，您可以使用npm在全球范围内安装它：

```
npm install -g @vue/cli
```

或使用纱线：

```
yarn global add @vue/cli
```

完成后，您可以调用该`vue`命令。

![](https://cdn-media-1.freecodecamp.org/images/F1uuQW81iw1WZNOiUn0xnLOagFi637vPDUfd)
#### Vue CLI提供了什么？

CLI对于快速Vue.js开发至关重要。

它的主要目标是确保所需的所有工具都可以正常工作，执行所需的工作，并抽象出单独使用每种工具所需的所有细节。

它可以执行初始项目设置和脚手架。

这是一个灵活的工具。使用CLI创建项目后，您可以进行配置调整，而不必**退出**应用程序（就像使用一样`create-react-app`）。

从中弹出时，`create-react-app`可以更新和调整所需的内容，但不能依赖所提供的出色功能`create-react-app`。

您可以配置任何内容，但仍然可以轻松升级。

创建和配置应用程序后，它充当基于Webpack的运行时依赖工具。

与CLI的第一次接触是在创建新的Vue项目时。

#### 如何使用CLI创建新的Vue项目

使用CLI要做的第一件事是创建一个Vue应用程序：

```
vue create example
```

最酷的是，这是一个交互式过程。您需要选择一个预设。默认情况下，有一个预设可提供Babel和[ESLint](https://eslint.org/)集成：

![](https://cdn-media-1.freecodecamp.org/images/FL4mTLZqzhKkAYL2FB507Tx1Hkdtnl0y5cgu)

我将按向下箭头⬇️并手动选择所需的功能：

![](https://cdn-media-1.freecodecamp.org/images/mkF3jMMCGluqmQ3hX3bGbCxhfXcwvWVNjWLi)

按`space`启用您需要的其中一项，然后按`enter`继续。由于选择`Linter / Formatter`，因此Vue CLI会提示我进行配置。我选择了，`ESLint + Prettier`因为这是我最喜欢的设置：

![](https://cdn-media-1.freecodecamp.org/images/bYwN2mfgTuJNxiiHBSNjnJQADZQvFR0TErhK)

接下来的事情是选择如何应用棉绒。我选择`Lint on save`。

![](https://cdn-media-1.freecodecamp.org/images/dcQmjoykCaJG7pevG5Yc-6A43eVYUkCbTxn7)

接下来：测试。Vue CLI让我在两种最受欢迎​​的单元测试解决方案之间进行选择：[Mocha + Chai](https://mochajs.org/)和[Jest](https://jestjs.io/)。

![](https://cdn-media-1.freecodecamp.org/images/lIdwYkOgcllnAJRVZOoKIxZ49ikNFoQjYtSV)

Vue CLI询问我将所有配置放在何处：在`package.json`文件或专用配置文件中，每个工具一个。我选择了后者。

![](https://cdn-media-1.freecodecamp.org/images/dN4W4ZALKh7Xz1D8ac7ebXpGdTPVGpzdujcc)

接下来，Vue CLI询问我是否要保存这些预设，并允许我下次使用Vue CLI创建新应用时选择它们。这是一个非常方便的功能，因为根据我的喜好进行快速设置可以减轻复杂性：

![](https://cdn-media-1.freecodecamp.org/images/X6rbmBloyRnQbdwrFQwtYeChdqxzQRpOJYfl)

然后，Vue CLI询问我是否更喜欢使用[Yarn](https://yarnpkg.com/lang/en/)或NPM：

![](https://cdn-media-1.freecodecamp.org/images/vbEmq0oYaGFjDtjL9D2QaUZ6t5omf0fjZTJM)

这是它问我的最后一件事，然后继续下载依赖项并创建Vue应用程序：

![](https://cdn-media-1.freecodecamp.org/images/Q52LD-RGQm9dHXMyWikiI5fMyESB7vRJqe1h)
#### 如何启动新创建的Vue CLI应用程序

Vue CLI已为我们创建了该应用程序，我们可以进入该`example`文件夹并运行`yarn serve`以在开发模式下启动我们的第一个应用程序：

![](https://cdn-media-1.freecodecamp.org/images/iegqNiWWJaunJi-KFTV93EKuODc4njdfLRuf)

入门示例应用程序源包含一些文件，包括`package.json`：

![](https://cdn-media-1.freecodecamp.org/images/FuI7nmJ2NAtesloTZrh3eJL-aa0ceCCr68wQ)

这是定义所有CLI命令的地方，其中包括`yarn serve`我们刚才使用的。其他命令是

*   `yarn build`，开始生产构建
*   `yarn lint`，运行lint
*   `yarn test:unit`，运行单元测试

我将在单独的教程中描述由Vue CLI生成的示例应用程序。

#### Git仓库

注意`master`VS Code左下角的单词吗？这是因为Vue CLI自动创建存储库并进行第一次提交。这样我们就可以跳进去，进行更改，然后我们知道更改了什么：

![](https://cdn-media-1.freecodecamp.org/images/4IHrGo6U-xkz4aeVXf3S06AYzIk0lAZJ6t6y)

这很酷。您投入了多少次并进行了更改，才意识到，当您要提交结果时，您没有提交初始状态？

#### 从命令行使用预设

您可以跳过交互式面板，并指示Vue CLI使用特定的预设：

```
vue create -p favourite example-2
```
#### 预设存储在哪里

预设存储在`.vuejs`主目录中的文件中。创建第一个“收藏夹”预设后，这是我的：

```
{
  "useTaobaoRegistry": false,
  "packageManager": "yarn",
  "presets": {
    "favourite": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-eslint": {
          "config": "prettier",
          "lintOn": [
            "save"
          ]
        },
        "@vue/cli-plugin-unit-jest": {}
      },
      "router": true,
      "vuex": true
    }
  }
}
```
#### 外挂程式

从阅读配置可以看到，预设基本上是插件的集合，带有一些可选配置。

创建项目后，您可以使用来添加更多插件`vue add`：

```
vue add @vue/cli-plugin-babel
```

所有这些插件均以可用的最新版本使用。您可以通过传递version属性来强制Vue CLI使用特定版本：

```
"@vue/cli-plugin-eslint": {
  "version": "^3.0.0"
}
```

如果新版本具有重大更改或错误，并且您需要稍等片刻才能使用它，这将很有用。

#### 远程存储预设

通过创建包含`preset.json`文件的存储库，可以将预设存储在GitHub（或其他服务）中，该文件包含单个预设配置。

从以上摘录中，我制作了一个包含以下配置的示例[预设](https://github.com/flaviocopes/vue-cli-preset/blob/master/preset.json)：

```
{  "useConfigFiles": true,  "plugins": {    "@vue/cli-plugin-babel": {},    "@vue/cli-plugin-eslint": {      "config": "prettier",      "lintOn": [        "save"      ]    },    "@vue/cli-plugin-unit-jest": {}  },  "router": true,  "vuex": true}
```

可以使用以下命令来引导新应用程序：

```
vue create --preset flaviocopes/vue-cli-preset example3
```
### Vue CLI的另一种用法：快速原型制作

到现在为止，我已经解释了如何使用Vue CLI从头开始创建所有项目。但是对于真正快速的原型制作，您可以创建一个非常简单的Vue应用程序（甚至是一个包含在单个.vue文件中的应用程序）并提供该服务，而不必下载`node_modules`文件夹中的所有依赖项。

怎么样？首先安装`cli-service-global`全局软件包：

```
npm install -g @vue/cli-service-global
```
```
//or
```
```
yarn global add @vue/cli-service-global
```

创建一个app.vue文件：

```
<template>    <div>        <h2>Hello world!</h2>        <marquee>Heyyy</marquee>    </div></template>
```

然后运行

```
vue serve app.vue
```
![](https://cdn-media-1.freecodecamp.org/images/pp3QTRAMwLtOnkhazBRgRrjYKnMEbnm1CbWL)独立应用

您还可以提供由JavaScript和HTML文件组成的更有条理的项目。默认情况下，Vue CLI使用Vue CLI `main.js / index.js `作为其入口点，并且您可以`package.json`设置和任何工具配置。`vue serve`会捡起来。

由于这使用了全局依赖关系，因此除了演示或快速测试之外，它不是最佳方法。

运行`vue build`将准备在中部署项目`dist/`，并将生成所有相应的代码（也用于供应商依赖性）。

#### Webpack

在内部，Vue CLI使用Webpack，但是配置是抽象的，我们甚至在文件夹中都看不到配置文件。您仍然可以通过以下方式访问它`vue inspect`：

![](https://cdn-media-1.freecodecamp.org/images/dGT6I8Uq75505tD1Xj8wR-h7rO9ZvRby80cH)
### Vue开发工具

首次尝试使用Vue时，如果打开浏览器开发人员工具，则会发现以下消息：“下载Vue Devtools扩展以获得更好的开发体验：[https](https://github.com/vuejs/vue-devtools) : [//github.com/vuejs/vue-devtools](https://github.com/vuejs/vue-devtools) ”

![](https://cdn-media-1.freecodecamp.org/images/J-LJE-u3DphYF8pOpMnkCX9KoNz3fGp4OPea)提示安装Vue devtools

这是一个友好的提醒，请安装Vue Devtools Extension。那是什么？任何流行的框架都有其自己的devtools扩展名，该扩展名通常会向浏览器开发人员工具添加一个新面板，该面板比浏览器默认提供的工具更加专业。在这种情况下，面板将使我们检查Vue应用程序并与之交互。

构建Vue应用程序时，此工具将为您提供惊人的帮助。开发人员工具只能在处于开发模式时检查Vue应用程序。这样可以确保没有人可以使用它们与您的生产应用程序进行交互，并且可以使Vue的性能更高，因为它不必关心开发工具。

让我们安装它！

有3种安装Vue Dev Tools的方法：

*   在Chrome上
*   在Firefox上
*   作为独立的应用程序

自定义扩展不支持Safari，Edge和其他浏览器，但是使用独立应用程序，您可以调试在任何浏览器中运行的Vue.js应用程序。

#### 在Chrome上安装

转到Google Chrome [商店中的](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)此页面，然后单击`**Add to Chrome**`。

![](https://cdn-media-1.freecodecamp.org/images/uh0CFZPRsdnKFOY-OWWvQCN3UVcnh-0KXpfh)

完成安装过程：

![](https://cdn-media-1.freecodecamp.org/images/hAQZpBESrlkCeLeLJpzeiPdJs12mmFHLRq9s)

Vue.js devtools图标显示在工具栏中。如果页面没有正在运行的Vue.js实例，则该页面显示为灰色。

![](https://cdn-media-1.freecodecamp.org/images/TaZntVatyBmsqqKsMjbGKn5nIuJikKLOJJyt)

如果检测到Vue.js，则图标具有Vue徽标的颜色。

![](https://cdn-media-1.freecodecamp.org/images/xPbOBNuLCdCE28QiFevAcqFb06Oqk8tB31Zy)

图标什么也不做只是告诉我们，有**是**一个Vue.js实例。要使用devtools，我们必须使用“查看→开发人员→开发人员工具”打开“开发人员工具”面板，或者`Cmd-Alt-i`

![](https://cdn-media-1.freecodecamp.org/images/td1gw01JZxVxAkHLGg9FKzIHz8UFhMhvr3gG)
#### 在Firefox上安装

您可以在Mozilla附加组件[商店中](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)找到Firefox开发工具扩展。

![](https://cdn-media-1.freecodecamp.org/images/y-G2Zcw62ZrkjMOe6ottwLy-z6onBxnZzOXm)

单击“添加到Firefox”，将安装扩展名。与Chrome一样，工具栏中会显示灰色图标

![](https://cdn-media-1.freecodecamp.org/images/LQCCB8c2g0OsUmJZ20fYJBPbampJudlIPocv)

当您访问正在运行Vue实例的站点时，它将变为绿色，并且当我们打开开发工具时，我们将看到一个“ Vue”面板：

![](https://cdn-media-1.freecodecamp.org/images/jFYMTGNEhrkxzzC6Grdb7zgXrnHrwuR-0AiI)
#### 安装独立应用

或者，您可以使用DevTools独立应用程序。

只需使用以下命令安装它：

```
npm install -g @vue/devtools
```
```
//or
```
```
yarn global add @vue/devtools
```

并通过调用来运行它：

```
vue-devtools
```

这将打开独立的基于电子的应用程序。

现在，粘贴显示给您的脚本标签

```
<script src="http://localhost:8098"></script>
```

在项目`index.html`文件中，然后等待应用程序重新加载。它将自动连接到应用程序。

![](https://cdn-media-1.freecodecamp.org/images/ANnfWmlscUkP0RN9Pn-hSABLCOxzMJYvtuqw)
#### 如何使用开发人员工具

如前所述，可以通过在浏览器中打开开发人员工具并移至Vue面板来激活Vue DevTools。

另一个选项是右键单击页面中的任何元素，然后选择“检查Vue组件”：

![](https://cdn-media-1.freecodecamp.org/images/r4URIzj-Mm92WTnnl9iXMK18f8cIwmyICQ0m)

打开Vue DevTools面板后，我们可以导航组件树。当我们从左侧的列表中选择一个组件时，右侧面板将显示其持有的道具和数据：

![](https://cdn-media-1.freecodecamp.org/images/h55RK1azzd7gjON36Da9HdY-tpu8cuVMBs-3)

在顶部有四个按钮：

*   **组件**（当前面板），其中列出了当前页面中运行的所有组件实例。Vue可以同时运行多个实例。例如，它可以使用单独的轻型应用程序管理购物车小部件和幻灯片。
*   **在Vuex**中，您可以检查通过Vuex管理的状态。
*   **事件**显示所有发出的事件。
*   **刷新将**重新加载devtools面板。

注意`= $vm0`组件旁边的小文本吗？这是使用控制台检查组件的便捷方法。按下“ esc”键将在devtools底部显示控制台，您可以键入`$vm0`以访问Vue组件：

![](https://cdn-media-1.freecodecamp.org/images/9fi396qPj8ajABDLnAoB77AkjDtLEJu-2okG)

检查组件并与之交互非常酷，而不必在代码中将它们分配给全局变量。

#### 过滤组件

开始输入组件名称，组件树将过滤出不匹配的组件。

![](https://cdn-media-1.freecodecamp.org/images/IdqSWwFMpvHVN125f7uIxue0Xp0ic-HJmBzX)
#### 在页面中选择一个组件

点击`**Select component in the page**`按钮。

![](https://cdn-media-1.freecodecamp.org/images/RE969Y8eHdDn1rqHvj2OGfnEqthwHMVy37A-)在页面中选择组件

您可以用鼠标悬停在页面上的任何组件上，单击它，然后它将在devtools中打开。

#### 格式化组件名称

您可以选择在camelCase中显示组件或使用破折号。

#### 筛选检查的数据

在右侧面板上，您可以输入任何单词来过滤与之不匹配的属性。

#### 检查DOM

单击“检查DOM”按钮，将其带到DevTools Elements检查器中，该DOM元素由组件生成：

![](https://cdn-media-1.freecodecamp.org/images/YKTlyULN-MDOAg3R1KPA3tI27IqX5Q9ckIH4)检查DOM
#### 在编辑器中打开

任何用户组件（不是框架级组件）都有一个按钮，可在默认编辑器中将其打开。非常便利。

### 设置VS Code以与Vue一起使用

[Visual Studio Code](https://code.visualstudio.com/)是目前世界上最常用的代码编辑器之一。像许多软件产品一样，编辑器有一个循环。一旦[TextMate](https://macromates.com/)成为开发人员的最爱，那么它就是[Sublime Text](https://www.sublimetext.com/)，现在是VS Code。

受欢迎的有趣之处在于，人们花了很多时间来为他们可以想象的一切构建插件。

一个这样的插件是一个很棒的工具，可以帮助我们Vue.js开发人员。

#### 威图

它叫做Vetur，非常受欢迎（下载量超过300万），您可以[在Visual Studio Marketplace上](https://marketplace.visualstudio.com/items?itemName=octref.vetur)找到它。

![](https://cdn-media-1.freecodecamp.org/images/OOfHNunbiMBxokJsrmdrvWixSoDmaDdPRzxK)
#### 安装Vetur

单击“安装”按钮将在VS Code中触发安装面板：

![](https://cdn-media-1.freecodecamp.org/images/hskNZD-byUAunDSOjCdPXPMIb9v3rBPSlOvf)

您也可以简单地在VS Code中打开扩展，然后搜索“ vetur”：

![](https://cdn-media-1.freecodecamp.org/images/xbOVISLaIuAgHHvD4gKVFb0Lg9R1f5R5Jowk)

此扩展程序提供什么？

#### 语法高亮

Vetur为所有Vue源代码文件提供语法高亮显示。

如果没有Vetur，`.vue`VS Code将以这种方式显示文件：

![](https://cdn-media-1.freecodecamp.org/images/JTZ9KScP0WTtr-4cCvjvQJKkGwlA4EW9KIf3)

安装了Vetur时：

![](https://cdn-media-1.freecodecamp.org/images/c5wC-aTwknyXUSjqq9gbr-EqFbSDXSewix-N)

VS Code能够从其扩展名识别文件中包含的代码类型。

使用单个文件组件，您可以在同一文件中混合使用不同类型的代码，从CSS到JavaScript到HTML。

默认情况下，VS Code无法识别这种情况，而Vetur为您使用的每种代码提供语法高亮显示。

Vetur支持以下方面的支持：

*   HTML
*   CSS
*   JavaScript
*   Pug
*   Haml
*   SCSS
*   PostCSS
*   Sass
*   Stylus
*   TypeScript

#### 片段

与语法突出显示一样，由于VS Code无法确定`.vue`文件一部分中包含的代码种类，因此无法提供我们都喜欢的代码段。代码片段是我们可以添加到文件中的代码片段，由专用插件提供。

Vetur使VS Code能够在单个文件组件中使用您喜欢的代码段。

#### 智能感知

Vetur还为每种不同的语言启用了[IntelliSense](https://code.visualstudio.com/docs/editor/intellisense)，并具有自动完成功能：

![](https://cdn-media-1.freecodecamp.org/images/3KtNeQR4W8HVg-JVT0kmu33sL79xlWIT0KtY)
#### 脚手架

除了启用自定义片段外，Vetur还提供了自己的片段集。每个人都使用自己的语言创建一个特定的标签（模板，脚本或样式）：

*   `scaffold`
*   `template with html`
*   `template with pug`
*   `script with JavaScript`
*   `script with TypeScript`
*   `style with CSS`
*   `style with CSS (scoped)`
*   `style with scss`
*   `style with scss (scoped)`
*   `style with less`
*   `style with less (scoped)`
*   `style with sass`
*   `style with sass (scoped)`
*   `style with postcss`
*   `style with postcss (scoped)`
*   `style with stylus`
*   `style with stylus (scoped)`

如果输入`scaffold`，您将获得单个文件组件的入门包：

```
<template>
```
```
</template>
```
```
<script>export default {
```
```
}</script>
```
```
<style>
```
```
</style>
```

其他的是特定的，并创建单个代码块。

**注意：**上面列表中的（作用域）意味着它仅适用于当前组件。

#### Emmet

默认情况下，[Emmet](https://emmet.io/)是流行的HTML / CSS缩写引擎。您可以键入Emmet的缩写之一，然后按`tab`VS Code将自动将其扩展为等效的HTML：

![](https://cdn-media-1.freecodecamp.org/images/R7Q4k9hsI0yzBe-xaVIMxdBMukjQWzzIw-FG)
#### 整理和错误检查

Vetur通过[VS Code ESLint插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)与ESLint集成。

![](https://cdn-media-1.freecodecamp.org/images/j1mnYvPYhNPWM00V0lDdxCwb5ZidBzG0Djtn)![](https://cdn-media-1.freecodecamp.org/images/5Z2hR9l8ARVe3uucCT4iPzTsDZRuEh0gZSs8)
#### 代码格式化

Vetur与`"editor.formatOnSave"`VS Code设置结合使用，为代码格式化提供自动支持，以在保存时格式化整个文件。

您可以通过在VS Code设置中将设置为`vetur.format.defaultFormatter.XXXXX`来选择禁用某些特定语言的自动格式`none`设置。要更改这些设置之一，只需开始搜索字符串，然后在右侧面板的用户设置中覆盖所需的内容即可。

支持的大多数语言都使用[Prettier](https://prettier.io/)进行自动格式化，该工具已成为行业标准。它使用您的Prettier配置来确定您的首选项。

### 介绍Vue组件

组件是接口的单个​​独立单元。他们可以具有自己的状态，标记和样式。

#### 如何使用组件

Vue组件可以通过四种主要方式进行定义。让我们谈谈代码。

第一个是：

```
new Vue({  /* options */})
```

第二个是：

```
Vue.component('component-name', {  /* options */})
```

第三是通过使用本地组件。这些是只能由特定组件访问的组件，而在其他地方则不可用（非常适合封装）。

第四个在`.vue`文件中，也称为“单个文件组件”。

让我们详细介绍前三种方式。

在构建不是单页应用程序（SPA）的应用程序时，使用`new Vue()`或是`Vue.component()`使用Vue的标准方法。相反，当您仅在某些页面中使用Vue.js（例如在联系表单或购物车中）时，就使用此方法。也许在所有页面中都使用了Vue，但是服务器正在渲染布局，然后您将HTML提供给客户端，然后客户端将加载您构建的Vue应用程序。

在SPA中，是由Vue构建HTML的，使用单文件组件更为方便，因此更为常见。

您可以通过将Vue安装在DOM元素上来实例化Vue。如果您有`<div id="app">`</ div>标签，则将使用：

```
new Vue({ el: '#app' })
```

使用初始化的组件`new Vue`没有相应的标签名称，因此通常是主要的容器组件。

使用初始化应用程序中使用的其他组件`Vue.component()`。这样的组件允许您定义一个标记-您可以使用该标记在应用程序中多次嵌入该组件-并在`template`属性中指定该组件的输出：

```
<div id="app">  <user-name name="Flavio"></user-name></div>
```
```
Vue.component('user-name', {  props: ['name'],  template: '<p>Hi {.{ name }}</p>'})
```
```
new Vue({  el: '#app'})
```

[在JSFiddle上查看](https://jsfiddle.net/flaviocopes/nvgedhq4/)

我们在做什么？我们正在上初始化一个Vue根组件`#app`，在其中，我们使用Vue组件`user-name`，它向用户抽象了问候语。

该组件接受一个prop，这是我们用来将数据向下传递给子组件的属性。

在`Vue.component()`调用中，我们将其`user-name`作为第一个参数传递。这为组件命名。您可以在此处以两种方式输入名称。第一个是我们使用的那个，叫做kebab-case。第二个称为PascalCase，类似于camelCase，但首字母大写：

```
Vue.component('UserName', {  /* ... */})
```

Vue的自动创建从内部的别名`user-name`来`UserName`，反之亦然，所以你可以使用任何你喜欢的。通常最好`UserName`在JavaScript和`user-name`模板中使用。

#### 本地组件

使用创建的任何组件`Vue.component()`都是全局注册的。您无需将其分配给变量或将其传递以在模板中重复使用。

您可以通过将定义组件对象的对象分配给变量来在本地封装组件：

```
const Sidebar = {  template: '<aside>Sidebar</aside>'}
```

然后使用该`components`属性使其在另一个组件内可用：

```
new Vue({  el: '#app',  components: {    Sidebar  }})
```

您可以在同一文件中编写组件，但是一种很好的方法是使用JavaScript模块：

```
import Sidebar from './Sidebar'
```
```
export default {  el: '#app',  components: {    Sidebar  }}
```
#### 重用组件

子组件可以添加多次。每个单独的实例都独立于其他实例：

```
<div id="app">  <user-name name="Flavio"></user-name>  <user-name name="Roger"></user-name>  <user-name name="Syd"></user-name></div>
```
```
Vue.component('user-name', {  props: ['name'],  template: '<p>Hi {.{ name }}</p>'})
```
```
new Vue({  el: '#app'})
```

[在JSFiddle上查看](https://jsfiddle.net/flaviocopes/3kebv908/)

#### 组件的组成部分

到目前为止，我们已经看到了一个组件如何接受`el`，`props`并且`template`性能。

*   `el`仅在使用初始化的根组件中使用`new Vue({})`，并标识组件将安装在其上的DOM元素。
*   `props` 列出了我们可以传递给子组件的所有属性
*   `template` 我们可以在其中设置组件模板，该模板将负责定义组件生成的输出。

组件接受其他属性：

*   `data` 组件本地状态
*   `methods`：组成方法
*   `computed`：与组件关联的计算属性
*   `watch`：组件观察者

### 单个文件组件

可以在JavaScript文件（`.js`）中声明Vue组件，如下所示：

```
Vue.component('component-name', {  /* options */})
```

或者：

```
new Vue({  /* options */})
```

或者可以在`.vue`文件中指定。

该`.vue`文件非常酷，因为它允许您定义：

*   JavaScript logic
*   HTML code template
*   CSS styling

全部都在一个文件中。因此，它的名称为“单个文件组件”。

这是一个例子：

```
<template>  <p>{.{ hello }}</p></template>
```
```
<script>export default {  data() {    return {      hello: 'Hello World!'    }  }}</script>
```
```
<style scoped>  p {    color: blue;  }</style>
```

由于使用了Webpack，所有这些都是可能的。Vue CLI使得此操作非常容易，并且开箱即用。`.vue`如果没有Webpack设置，则无法使用这些文件，因此，它们非常不适合仅在页面上使用Vue而又不是完整的单页面应用程序（SPA）的应用程序。

由于单个文件组件依赖Webpack，因此我们免费获得了使用现代Web功能的功能。

您可以使用SCSS或Stylus定义CSS，可以使用Pug构建模板，而要做的就是向Vue声明要使用哪种语言预处理器。

支持的预处理器列表包括

*   TypeScript
*   SCSS
*   Sass
*   Less
*   PostCSS
*   Pug

无论使用Babel集成的目标浏览器是什么，我们都可以使用现代JavaScript（ES6-7-8），并且ES模块也是如此，因此我们可以使用`import/export`语句。

我们可以使用CSS模块来定义CSS范围。

说到对CSS进行范围界定，通过使用ed>标签，单个文件组件使编写不会**泄漏**到其他组件的CSS绝对容易`<style scop`。

如果省略`scoped`，则定义的CSS将是全局的。但是添加`scoped`标签后，Vue会自动向组件添加特定于您的应用程序的特定类，因此可以确保CSS不会泄漏到其他组件。

也许您的JavaScript非常庞大，因为您需要注意一些逻辑。如果要为JavaScript使用单独的文件怎么办？

您可以使用`src`属性将其外部化：

```
<template>  <p>{.{ hello }}</p></template><script src="./hello.js"></script>
```

这也适用于您的CSS：

```
<template>  <p>{.{ hello }}</p></template><script src="./hello.js"></script><style src="./hello.css"></style>
```

注意我如何使用

```
export default {  data() {    return {      hello: 'Hello World!'    }  }}
```

在组件的JavaScript中设置数据。

您将看到的其他常见方式是：

```
export default {  data: function() {    return {      name: 'Flavio'    }  }}
```

以上等同于我们之前所做的工作。

要么：

```
export default {  data: () => {    return {      name: 'Flavio'    }  }}
```

这是不同的，因为它使用箭头功能。箭头函数很好，直到我们需要访问组件方法为止。如果我们需要使用，这是一个问题`this`，并且使用箭头功能未将此类属性绑定到组件。因此，必须使用**常规**函数而不是箭头函数。

您可能还会看到：

```
module.exports = {  data: () => {    return {      name: 'Flavio'    }  }}
```

这使用[CommonJS](http://requirejs.org/docs/commonjs.html)语法，并且也可以正常工作。但是我建议使用ES模块语法，因为这是JavaScript标准。

### Vue模板

Vue.js使用的模板语言是HTML的超集。

任何HTML都是有效的Vue.js模板。除此之外，Vue.js还提供了两个强大的功能：插值和指令。

这是有效的Vue.js模板：

```
<span>Hello!</span>
```

可以将该模板放入显式声明的Vue组件中：

```
new Vue({  template: '<span>Hello!</span>'})
```

或者可以将其放入单个文件组件中：

```
<template>  <span>Hello!</span></template>
```

第一个示例非常基础。下一步是使其输出部分组件状态，例如名称。

这可以使用插值来完成。首先，我们向组件添加一些数据：

```
new Vue({  
  data: {    
    name: 'Flavio'  
  },  
  template: '<span>Hello!</span>'
})
```

然后我们可以使用双括号语法将其添加到模板中：

```
new Vue({  data: {    name: 'Flavio'  },  template: '<span>Hello {.{name}}!</span>'})
```

这里一件有趣的事。看看我们是怎么`name`代替的`this.data.name`？

这是因为Vue.js进行了一些内部绑定，并允许模板像使用本地属性一样使用该属性。很方便。

在单个文件组件中，将是：

```
<template>  <span>Hello {.{name}}!</span></template>
```
```
<script>export default {  data() {    return {      name: 'Flavio'    }  }}</script>
```

我在导出中使用了常规函数。为什么不使用箭头功能？

这是因为在这种情况下，`data`我们可能需要访问组件实例中的方法，并且如果`this`未绑定到组件，则无法执行该操作，因此无法使用箭头功能。

请注意，我们可以使用箭头功能，但是如果我使用，则需要记住切换到常规功能`this`。我认为最好安全一点。

现在，回到插值。

`{.{ name }}` 应该使您想起Mustache / Handlebars模板插值，但这只是视觉上的提醒。

尽管在那些模板引擎中它们是“哑巴”，但在Vue中，您可以做更多的事情，并且更加灵活。

您可以在插值中使用任何JavaScript表达式，但仅限于一个表达式：

```
{.{ name.reverse() }}
```
```
{.{ name === 'Flavio' ? 'Flavio' : 'stranger' }}
```

Vue提供对模板中某些全局对象的访问，包括Math和Date，因此您可以使用它们：

```
{.{ Math.sqrt(16) * Math.random() }}
```

最好避免向模板添加复杂的逻辑，但是Vue允许这样做的事实为我们提供了更大的灵活性，尤其是在尝试时。

我们可以先尝试将表达式放入模板中，然后再将其移动到计算的属性或方法中。

任何插值中包含的值将在其依赖的任何数据属性发生更改时进行更新。

您可以通过使用`v-once`指令来避免这种反应。

结果总是转义的，因此输出中不能包含HTML。

如果需要HTML片段，则需要使用`v-html`指令。

### 使用CSS样式化组件

将CSS添加到Vue.js组件的最简单选择是使用`style`标签，就像在HTML中一样：

```
<template>  <p style="text-decoration: underline">Hi!</p></template>
```
```
<script>export default {  data() {    return {      decoration: 'underline'    }  }}</script>
```

这是尽可能静态的。如果要`underline`在组件数据中定义怎么办？您可以按照以下方法进行操作：

```
<template>  <p :style="{'text-decoration': decoration}">Hi!</p></template>
```
```
<script>export default {  data() {    return {      decoration: 'underline'    }  }}</script>
```

`:style`是的简写`v-bind:style`。在本教程中，我将使用此速记。

注意我们必须如何`text-decoration`用引号引起来。这是因为破折号不是有效的JavaScript标识符的一部分。

您可以使用Vue.js启用的特殊camelCase语法并将其重写为`textDecoration`：

```
<template>  <p :style="{textDecoration: decoration}">Hi!</p></template>
```

除了`style`可以将对象绑定到之外，您还可以引用计算属性：

```
<template>  <p :style="styling">Hi!</p></template>
```
```
<script>export default {  data() {    return {      textDecoration: 'underline',      textWeight: 'bold'    }  },  computed: {    styling: function() {      return {        textDecoration: this.textDecoration,        textWeight: this.textWeight      }    }  }}</script>
```

Vue组件生成纯HTML，因此您可以选择向每个元素添加一个类，并添加具有样式设置其属性的相应CSS选择器：

```
<template>  <p class="underline">Hi!</p></template>
```
```
<style>.underline { text-decoration: underline; }</style>
```

您可以像这样使用SCSS：

```
<template>  <p class="underline">Hi!</p></template>
```
```
<style lang="scss">body {  .underline { text-decoration: underline; }}</style>
```

您可以像上面的示例一样对类进行硬编码。或者，您可以将类绑定到组件属性，以使其具有动态性，并且仅在data属性为true时才应用于该类：

```
<template>  <p :class="{underline: isUnderlined}">Hi!</p></template>
```
```
<script>export default {  data() {    return {      isUnderlined: true    }  }}</script>
```
```
<style>.underline { text-decoration: underline; }</style>
```

`<p :class="{text: isText}">H`您可以直接绑定一个字符串，而不是像我们对i！那样将对象绑定到类！</ p>，它将引用一个数据属性：

```
<template>  <p :class="paragraphClass">Hi!</p></template>
```
```
<script>export default {  data() {    return {      paragraphClass: 'underline'    }  }}</script>
```
```
<style>.underline { text-decoration: underline; }</style>
```

您可以分配多个类，`paragraphClass`在这种情况下，可以添加两个类，也可以使用数组：

```
<template>  <p :class="[decoration, weight]">Hi!</p></template>
```
```
<script>export default {  data() {    return {      decoration: 'underline',      weight: 'weight',    }  }}</script>
```
```
<style>.underline { text-decoration: underline; }.weight { font-weight: bold; }</style>
```

使用类绑定中内联的对象可以完成相同的操作：

```
<template>  <p :class="{underline: isUnderlined, weight: isBold}">Hi!</p></template>
```
```
<script>export default {  data() {    return {      isUnderlined: true,      isBold: true    }  }}</script>
```
```
<style>.underline { text-decoration: underline; }.weight { font-weight: bold; }</style>
```

您可以结合以下两个语句：

```
<template>  <p :class="[decoration, {weight: isBold}]">Hi!</p></template>
```
```
<script>export default {  data() {    return {      decoration: 'underline',      isBold: true    }  }}</script>
```
```
<style>.underline { text-decoration: underline; }.weight { font-weight: bold; }</style>
```

您还可以使用返回对象的计算属性，当您将多个CSS类添加到同一元素时，该属性最有效：

```
<template>  <p :class="paragraphClasses">Hi!</p></template>
```
```
<script>export default {  data() {    return {      isUnderlined: true,      isBold: true    }  },  computed: {    paragraphClasses: function() {      return {        underlined: this.isUnderlined,        bold: this.isBold      }    }  }}</script>
```
```
<style>.underlined { text-decoration: underline; }.bold { font-weight: bold; }</style>
```

请注意，在计算属性中，您需要使用来引用组件数据`this.[propertyName]`，而在模板数据中，属性可以方便地放置为第一级属性。

Vue将处理任何未像第一个示例中那样进行硬编码的CSS，Vue会为我们自动为CSS加上前缀。这使我们可以编写干净的CSS，同时仍可以针对较旧的浏览器（这仍然意味着Vue支持的浏览器，因此是IE9 +）。

### 指令

我们在Vue.js模板和插值中看到了如何将数据嵌入Vue模板。

本节说明Vue.js在模板中提供的另一种技术：指令。

指令基本上类似于添加在模板内部的HTML属性。它们都以开头`v-`，以表示这是Vue的特殊属性。

让我们详细了解每个Vue指令。

#### `v-text`

代替使用插值，可以使用`v-text`指令。它执行相同的工作：

```
<span v-text="name"></span>
```
#### `v-once`

您知道如何`{.{ name }}`绑定到`name`组件数据的属性。

每当`name`您的组件数据发生更改时，Vue都会更新浏览器中表示的值。

除非使用`v-once`伪指令，否则伪指令基本上类似于HTML属性：

```
<span v-once>{.{ name }}</span>
```
#### `v-html`

使用插值打印数据属性时，将转义HTML。这是Vue自动防御XSS攻击的一种好方法。

但是，在某些情况下，您想输出HTML并让浏览器解释它。您可以使用`v-html`指令：

```
<span v-html="someHtml"></span>
```
#### `v-bind`

插值仅适用于标签内容。您不能在属性上使用它。

属性必须使用`v-bind`：

```
<a v-bind:href="url">{.{ linkText }}</a>
```

`v-bind` 非常普遍，以至于它有一个简写语法：

```
<a v-bind:href="url">{.{ linkText }}</a><a :href="url">{.{ linkText }}</a>
```
#### 双向绑定使用 `v-model`    

例如 `v-model` ，让我们绑定一个表单输入元素，并在用户更改字段内容时使它更改Vue数据属性

```
<input v-model="message" placeholder="Enter a message"><p>Message is: {.{ message }}</p>
```
```
<select v-model="selected">  <option disabled value="">Choose a fruit</option>  <option>Apple</option>  <option>Banana</option>  <option>Strawberry</option></select><span>Fruit chosen: {.{ selected }}</span>
```
#### 使用表达式

您可以在指令内使用任何JavaScript表达式：

```
<span v-text="'Hi, ' + name + '!'"></span>
```
```
<a v-bind:href="'https://' + domain + path">{.{ linkText }}</a>
```

指令中使用的任何变量都引用相应的data属性。

#### 有条件的

在指令内部，您可以使用三元运算符执行条件检查，因为这是一个表达式：

```
<span v-text="name == Flavio ? 'Hi Flavio!' : 'Hi' + name + '!'"></span>
```

有专门的指令，让您执行更为有组织的条件句：`v-if`，`v-else`和`v-else-if`。

```
<p v-if="shouldShowThis">Hey!</p>
```

`shouldShowThis` 是包含在组件数据中的布尔值。

#### 循环

`v-for`允许您呈现项目列表。结合使用`v-bind`可以设置列表中每个项目的属性。

您可以迭代一个简单的值数组：

```
<template>  <ul>    <li v-for="item in items">{.{ item }}</li>  </ul></template>
```
```
<script>export default {  data() {    return {      items: ['car', 'bike', 'dog']    }  }}</script>
```

或在一组对象上：

```
<template>  <div>    <!-- using interpolation -->    <ul>      <li v-for="todo in todos">{.{ todo.title }}</li>    </ul>    <!-- using v-text -->    <ul>      <li v-for="todo in todos" v-text="todo.title"></li>    </ul>  </div></template>
```
```
<script>export default {  data() {    return {      todos: [        { id: 1, title: 'Do something' },        { id: 2, title: 'Do something else' }      ]    }  }}</script>
```

`v-for` 可以使用以下方式为您提供索引：

```
<li v-for="(todo, index) in todos"></li>
```
#### 大事记

`v-on`允许您侦听DOM事件，并在事件发生时触发方法。在这里，我们监听点击事件：

```
<template>  <a v-on:click="handleClick">Click me!</a></template>
```
```
<script>export default {  methods: {    handleClick: function() {      alert('test')    }  }}</script>
```

您可以将参数传递给任何事件：

```
<template>  <a v-on:click="handleClick('test')">Click me!</a></template>
```
```
<script>export default {  methods: {    handleClick: function(value) {      alert(value)    }  }}</script>
```

少量的JavaScript（单个表达式）可以直接放入模板中：

```
<template>  <a v-on:click="counter = counter + 1">{.{counter}}</a></template>
```
```
<script>export default {  data: function() {    return {      counter: 0    }  }}</script>
```

`click`只是一种事件。一个常见的事件是`submit`，您可以使用绑定该事件`v-on:submit`。

`v-on`非常普遍，以至于它有一个简写语法`@`：

```
<a v-on:click="handleClick">Click me!</a><a @click="handleClick">Click me!</a>
```
#### 显示或隐藏

如果Vue实例的特定属性评估为true，则可以选择仅在DOM中显示元素，方法是`v-show`：

```
<p v-show="isTrue">Something</p>
```

元素仍插入DOM中，但`display: none`如果不满足条件则设置为。

#### 事件指令修饰符

Vue提供了一些可选的事件修饰符，您可以将它们与结合使用`v-on`，这些修饰符会自动使事件执行某些操作，而无需在事件处理程序中对其进行显式编码。

一个很好的例子是`.prevent`，它会自动调用`preventDefault()`该事件。

在这种情况下，该表单不会导致页面被重新加载，这是默认行为：

```
<form v-on:submit.prevent="formSubmitted"></form>
```

其它调节剂包括`.stop`，`.capture`，`.self`，`.once`，`.passive`和他们[详细的官方文档描述](https://vuejs.org/v2/guide/events.html#Event-Modifiers)。

#### 自定义指令

Vue默认指令已经可以完成很多工作，但是如果需要，您可以随时添加新的自定义指令。

如果您有兴趣了解更多信息，请阅读[此处](https://vuejs.org/v2/guide/custom-directive.html)。

### 方法

#### 什么是Vue.js方法？

Vue方法是与Vue实例关联的函数。

方法在`methods`属性内定义：

```
new Vue({  methods: {    handleClick: function() {      alert('test')    }  }})
```

或对于单个文件组件：

```
<script>export default {  methods: {    handleClick: function() {      alert('test')    }  }}</script>
```

当您需要执行操作并将`v-on`指令附加到元素上以处理事件时，方法特别有用。像这样，`handleClick`当元素被点击时调用：

```
<template>  <a @click="handleClick">Click me!</a></template>
```
#### 将参数传递给Vue.js方法

方法可以接受参数。

在这种情况下，您只需在模板中传递参数：

```
<template>  <a @click="handleClick('something')">Click me!</a></template>
```
```
new Vue({  methods: {    handleClick: function(text) {      alert(text)    }  }})
```

或对于单个文件组件：

```
<script>export default {  methods: {    handleClick: function(text) {      alert(text)    }  }}</script>
```
#### 如何从方法访问数据

您可以使用以下命令访问Vue组件的任何数据属性`this.propertyName`：

```
<template>  <a @click="handleClick()">Click me!</a></template>
```
```
<script>export default {  data() {    return {      name: 'Flavio'    }  },  methods: {    handleClick: function() {      console.log(this.name)    }  }}</script>
```

我们不必使用`this.data.name`，只是`this.name`。Vue确实为我们提供了透明的绑定。使用`this.data.name`将引发错误。

如您在**事件**描述中之前所看到的，方法与事件紧密关联，因为它们被用作事件处理程序。每次事件发生时，都会调用该方法。

### 观察者

监视程序是Vue.js的一项特殊功能，它使您可以监视组件状态的一个属性，并在该属性值更改时运行一个函数。

这是一个例子。我们有一个显示名称的组件，并允许您通过单击按钮进行更改：

```
<template>  <p>My name is {.{name}}</p>  <button @click="changeName()">Change my name!</button></template>
```
```
<script>export default {  data() {    return {      name: 'Flavio'    }  },  methods: {    changeName: function() {      this.name = 'Flavius'    }  }}</script>
```

名称更改后，我们想做一些事情，例如打印控制台日志。

我们可以通过在`watch`对象上添加一个名为data属性的属性来实现此目的：

```
<script>export default {  data() {    return {      name: 'Flavio'    }  },  methods: {    changeName: function() {      this.name = 'Flavius'    }  },  watch: {    name: function() {      console.log(this.name)    }  }}</script>
```

分配给的功能`watch.name`可以选择接受2个参数。首先是新的属性值。第二个是旧的属性值：

```
<script>export default {  /* ... */  watch: {    name: function(newValue, oldValue) {      console.log(newValue, oldValue)    }  }}</script>
```

无法像使用计算属性一样从模板中查找观察者。

### 计算属性

#### 什么是计算属性

在Vue.js中，您可以使用括号输出任何数据值：

```
<template>  <p>{.{ count }}</p></template>
```
```
<script>export default {  data() {    return {      count: 1    }  }}</script>
```

此属性可以托管一些小的计算。例如：

```
<template>  {.{ count * 10 }}</template>
```

但是您只能使用一个JavaScript **表达式**。

除此技术限制外，您还需要考虑模板应仅与向用户显示数据有关，而不应执行逻辑计算。

若要执行多个操作而不是单个表达式，并具有更多的声明性模板，请使用计算属性。

计算属性是在`computed`Vue组件的属性中定义的：

```
<script>export default {  computed: {
``` ```
}}</script>
```
#### 计算属性的示例

这是一个使用计算属性`count`计算输出的示例。

注意：

1.  我不必打电话`{.{ count() }}`。Vue.js自动调用该函数
2.  我使用常规函数（而不是箭头函数）来定义`count`计算所得的属性，因为我需要能够通过来访问组件实例`this`。

```
<template>  <p>{.{ count }}</p></template>
```
```
<script>export default {  data() {    return {      items: [1, 2, 3]    }  },  computed: {    count: function() {      return 'The count is ' + this.items.length * 10    }  }}</script>
```
#### 计算属性与方法

如果您已经了解Vue方法，您可能会想知道有什么区别。

首先，必须调用方法，而不仅仅是引用方法，因此您需要执行以下操作：

```
<template>  <p>{.{ count() }}</p></template>
```
```
<script>export default {  data() {    return {      items: [1, 2, 3]    }  },  methods: {    count: function() {      return 'The count is ' + this.items.length * 10    }  }}</script>
```

但是主要区别在于，已计算的属性已缓存。

`count`计算属性的结果在内部缓存，直到`items`数据属性更改。

**重要：**仅当反应性源更新时，才会更新计算属性。常规JavaScript方法不是被动的，因此一个常见的示例是使用`Date.now()`：

```
<template>  <p>{.{ now }}</p></template>
```
```
<script>export default {  computed: {    now: function () {      return Date.now()    }  }}</script>
```

它只会渲染一次，即使重新渲染组件也不会更新。当Vue组件退出并重新初始化时，它仅在页面刷新时更新。

在这种情况下，一种方法更适合您的需求。

### 方法与观察者与计算属性

既然您知道方法，观察者和计算属性，那么您可能想知道什么时候应该使用一种方法。

这是这个问题的细分。

#### 何时使用方法

*   对DOM中发生的某些事件做出反应
*   当组件中发生某些事情时调用函数。
    您可以从计算的属性或观察程序中调用方法。

#### 何时使用计算属性

*   您需要从现有数据源中组合新数据
*   您有一个在模板中使用的变量，该变量是根据一个或多个数据属性构建的
*   您希望将复杂的嵌套属性名称简化为更易读和易于使用的名称（但是在原始属性更改时进行更新）
*   您需要从模板中引用一个值。在这种情况下，最好创建一个计算属性，因为它已缓存。
*   您需要聆听多个数据属性的更改

#### 何时使用观察者

*   您想在数据属性更改时进行监听，并执行一些操作
*   您想听听道具价值的变化
*   您只需要听一个特定的属性（您不能同时观看多个属性）
*   您要监视一个数据属性，直到达到某个特定值，然后再执行某些操作

### 道具：将数据传递给子组件

道具是组件可以从包含它们的组件（父组件）接受数据的方式。

当组件需要一个或多个道具时，必须在其`props`属性中定义它们：

```
Vue.component('user-name', {  props: ['name'],  template: '<p>Hi {.{ name }}</p>'})
```

或者，在Vue单个文件组件中：

```
<template>  <p>{.{ name }}</p></template>
```
```
<script>export default {  props: ['name']}</script>
```
#### 接受多个道具

您可以通过简单地将它们附加到数组来获得多个props：

```
Vue.component('user-name', {  props: ['firstName', 'lastName'],  template: '<p>Hi {.{ firstName }} {.{ lastName }}</p>'})
```
#### 设置道具类型

您可以使用对象而不是数组，使用属性名称作为每个属性的键，并使用类型作为值来非常简单地指定道具的类型：

```
Vue.component('user-name', {  props: {    firstName: String,    lastName: String  },  template: '<p>Hi {.{ firstName }} {.{ lastName }}</p>'})
```

您可以使用的有效类型是：

*   String
*   Number
*   Boolean
*   Array
*   Object
*   Date
*   Function
*   Symbol

当类型不匹配时，Vue会在控制台中以警告方式警告您（处于开发模式）。

道具类型可以更清晰地表达。

您可以允许多种不同的值类型：

```
props: {  firstName: [String, Number]}
```
#### 将道具设置为强制性

您可以要求道具是强制性的：

```
props: {  firstName: {    type: String,    required: true  }}
```
#### 设置道具的默认值

您可以指定一个默认值：

```
props: {  firstName: {    type: String,    default: 'Unknown person'  }}
```

对于对象：

```
props: {  name: {    type: Object,    default: {      firstName: 'Unknown',      lastName: ''    }  }}
```

`default` 也可以是返回适当值的函数，而不是实际值。

您甚至可以构建一个自定义验证器，该验证器对复杂数据很酷：

```
props: {  name: {    validator: name => {      return name === 'Flavio'     }  }}
```
#### 将道具传递到组件

您使用语法将prop传递给组件

```
<ComponentName color="white" />
```

如果您传递的是静态值。

如果它是数据属性，则使用

```
<template>  <ComponentName :color=color /></template>
```
```
<script>...export default {  //...  data: function() {    return {      color: 'white'    }  },  //...}</script>
```

您可以在prop值内使用三元运算符来检查真实条件并传递依赖于该条件的值：

```
<template>  <ComponentName :colored="color == 'white' ? true : false" /></template>
```
```
<script>...export default {  //...  data: function() {    return {      color: 'white'    }  },  //...}</script>
```
### 在Vue中处理事件

#### 什么是Vue.js事件？

Vue.js允许我们通过使用`v-on`元素上的指令来拦截任何DOM事件。

如果我们想在此元素中发生点击事件时采取措施：

```
<template>  <a>Click me!</a></template>
```

我们添加一条`v-on`指令：

```
<template>  <a v-on:click="handleClick">Click me!</a></template>
```

Vue还为此提供了一种非常方便的替代语法：

```
<template>  <a @click="handleClick">Click me!</a></template>
```

您可以选择是否使用括号。`@click="handleClick"`等同于`@click="handleClick()"`。

`handleClick` 是附加到组件的方法：

```
<script>export default {  methods: {    handleClick: function(event) {      console.log(event)    }  }}</script>
```

您需要在这里知道的是，您可以通过事件传递参数：`@click="handleClick(param)"`它们将在方法内部接收。

#### 访问原始事件对象

在许多情况下，您将要对事件对象执行操作或在其中查找某些属性。您如何访问它？

使用特殊`$event`指令：

```
<template>  <a @click="handleClick($event)">Click me!</a></template>
```
```
<script>export default {  methods: {    handleClick: function(event) {      console.log(event)    }  }}</script>
```

并且如果您已经传递了变量：

```
<template>  <a @click="handleClick('something', $event)">Click me!</a></template>
```
```
<script>export default {  methods: {    handleClick: function(text, event) {      console.log(text)      console.log(event)    }  }}</script>
```

从那里可以调用`event.preventDefault()`，但是有一个更好的方法：事件修饰符。

#### 事件修饰符

告诉Vue为您处理事情，而不是弄乱方法中的DOM“事物”：

*   `@click.prevent` 呼叫 `event.preventDefault()`
*   `@click.stop` 呼叫 `event.stopPropagation()`
*   `@click.passive`利用[addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters)的[被动选项](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters)
*   `@click.capture` 使用事件捕获而不是事件冒泡
*   `@click.self` 确保click事件没有从子事件中冒出，而是直接发生在该元素上
*   `@click.once` 事件只会被触发一次

所有这些选项可以通过在一个修饰符之后附加一个修饰符来组合。

有关传播，冒泡和捕获的更多信息，请参阅我的[JavaScript事件指南](https://flaviocopes.com/javascript-events)。

### 使用广告位注入内容

组件可以选择完全定义其内容，例如在这种情况下：

```
Vue.component('user-name', {  props: ['name'],  template: '<p>Hi {.{ name }}</p>'})
```

或者，它也可以让父组件通过使用插槽将任何种类的内容注入其中。

什么是插槽？

您可以通过将`<slot>&`lt; / slot>放在组件模板中来定义它：

```
Vue.component('user-information', {  template: '<div class="user-information"><slot></slot></div>'})
```

使用此组件时，在开始和结束标记之间添加的所有内容都将添加到广告位占位符内：

```
<user-information>  <h2>Hi!</h2>  <user-name name="Flavio"></user-information>
```

如果将任何内容放在`<slot>&`lt; / slot>标记旁边，这将作为默认内容，以防万一。

复杂的组件布局可能需要更好的方式来组织内容。

输入**命名的插槽**。

使用命名插槽，可以将插槽的各个部分分配到组件模板布局中的特定位置，并且可以`slot`对任何标签使用属性，以将内容分配给该插槽。

模板标签之外的所有内容都会添加到main中`slot`。

为了方便起见，`page`在此示例中，我使用单个文件组件：

```
<template>  <div>    <main>      <slot></slot>    </main>    <sidebar>      <slot name="sidebar"></slot>    </sidebar>  </div></template>
```
```
<page>  <ul slot="sidebar">    <li>Home</li>    <li>Contact</li>  </ul>
``` ```
<h2>Page title</h2>  <p>Page content</p></page>
```
### 筛选器，模板的帮手

过滤器是Vue组件提供的功能，可让您将格式设置和转换应用于模板动态数据的任何部分。

它们不会更改组件的数据或其他任何内容，而只会影响输出。

假设您正在打印名称：

```
<template>  <p>Hi {.{ name }}!</p></template>
```
```
<script>export default {  data() {    return {      name: 'Flavio'    }  }}</script>
```

如果要检查`name`实际上是否包含一个值，如果不打印，则该怎么办，以便我们的模板将打印“嗨，那里！”？

输入过滤器：

```
<template>  <p>Hi {.{ name | fallback }}!</p></template>
```
```
<script>export default {  data() {    return {      name: 'Flavio'    }  },  filters: {    fallback: function(name) {      return name ? name : 'there'    }  }}</script>
```

请注意，应用过滤器的语法为`| filterName`。如果您熟悉Unix，那就是Unix管道运算符，用于将操作的输出作为输入传递给下一个操作。

`filters`组件的属性是一个对象。单个过滤器是一个接受一个值并返回另一个值的函数。

返回的值是Vue.js模板中实际打印的值。

过滤器当然可以访问组件数据和方法。

过滤器的好用例是什么？

*   转换字符串，例如大写或将其小写
*   格式化价格

在上方，您看到了一个简单的过滤器示例：`{.{ name | fallback }}`。

通过重复管道语法，可以链接过滤器：

```
{.{ name | fallback | capitalize }}
```

首先应用`fallback`过滤器，然后应用过滤`capitalize`器（我们没有定义，但尝试创建一个！）。

高级过滤器还可以使用常规函数参数语法接受参数：

```
<template>  <p>Hello {.{ name | prepend('Dr.') }}</p></template>
```
```
<script>export default {  data() {    return {      name: 'House'    }  },  filters: {    prepend: (name, prefix) => {      return `${prefix} ${name}`    }  }}</script>
```

如果将参数传递给过滤器，则传递给过滤器函数的第一个参数始终是模板插值中的项（`name`在这种情况下），然后是传递的显式参数。

您可以通过使用逗号分隔多个参数来使用它们。

注意，我使用了箭头功能。通常，我们避免在方法和计算属性中使用箭头函数，因为它们几乎总是引用`this`来访问组件数据。但是在这种情况下，过滤器不需要访问，`this`而是通过参数接收它需要的所有数据，并且我们可以安全地使用更简单的箭头函数语法。

[这个包](https://www.npmjs.com/package/vue2-filters)有很多预先制成的过滤器，为您的模板，其中包括直接使用`capitalize`，`uppercase`，`lowercase`，`placeholder`，`truncate`，`currency`，`pluralize`等等。

### 组件之间的通讯

Vue中的组件可以通过各种方式进行通信。

#### 使用道具

第一种方法是使用道具。

父级通过在组件声明中添加参数来“传递”数据：

```
<template>  <div>    <Car color="green" />  </div></template>
```
```
<script>import Car from './components/Car'
```
```
export default {  name: 'App',  components: {    Car  }}</script>
```

道具是单向的：从父母到孩子。每当父母更改道具时，新值就会发送给孩子并重新渲染。

反之则不成立，您永远都不应在子组件内部变异道具。

#### 使用事件从孩子与父母沟通

通过事件，您可以从孩子到父母进行交流：

```
<script>export default {  name: 'Car',  methods: {    handleClick: function() {      this.$emit('clickedSomething')    }  }}</script>
```

`v-on`当组件在其模板中包含组件时，父级可以使用指令截获此消息：

```
<template>  <div>    <Car v-on:clickedSomething="handleClickInParent" />    <!-- or -->    <Car @clickedSomething="handleClickInParent" />  </div></template>
```
```
<script>export default {  name: 'App',  methods: {    handleClickInParent: function() {      //...    }  }}</script>
```

您当然可以传递参数：

```
<script>export default {  name: 'Car',  methods: {    handleClick: function() {      this.$emit('clickedSomething', param1, param2)    }  }}</script>
```

并从父级检索它们：

```
<template>  <div>    <Car v-on:clickedSomething="handleClickInParent" />    <!-- or -->    <Car @clickedSomething="handleClickInParent" />  </div></template>
```
```
<script>export default {  name: 'App',  methods: {    handleClickInParent: function(param1, param2) {      //...    }  }}</script>
```
#### 使用事件总线在任何组件之间进行通信

使用事件，您不仅限于儿童与父母之间的关系。您可以使用所谓的事件总线。

上面我们曾经`this.$emit`在组件实例上发出一个事件。

相反，我们可以做的是在更易于访问的组件上发出事件。

`this.$root`根组件，通常用于此目的。

您还可以创建专用于此作业的Vue组件，然后将其导入所需的位置。

```
<script>export default {  name: 'Car',  methods: {    handleClick: function() {      this.$root.$emit('clickedSomething')    }  }}</script>
```

任何其他组件都可以侦听此事件。您可以在`mounted`回调中执行此操作：

```
<script>export default {  name: 'App',  mounted() {    this.$root.$on('clickedSomething', () => {      //...    })  }}</script>
```

这就是Vue开箱即用的功能。

当您超出此范围时，可以查看Vuex或其他第三部分库。

### 使用Vuex管理状态

Vuex是Vue.js的官方状态管理库。

它的工作是在应用程序的各个组件之间共享数据。

开箱即用的Vue.js中的组件可以使用

*   道具，将状态从父级传递到子级组件
*   事件，以从子级更改父组件的状态，或将根组件用作事件总线

有时候事情变得比这些简单的选项所允许的更为复杂。

在这种情况下，一个好的选择是将状态集中在一个存储中。这就是Vuex所做的。

#### 为什么要使用Vuex？

Vuex不是您可以在Vue中使用的唯一状态管理选项（您也可以使用[Redux](https://medium.com/@quincylarson/17a99705b8e1)），但是它的主要优点是它是官方的，并且与Vue.js的集成才使它发光。

使用React，您将不得不选择众多可用库中的一种，因为该生态系统庞大且没有实际标准。最近，Redux是最受欢迎的选择，[MobX](https://mobx.js.org/getting-started.html)在人气方面[紧随](https://mobx.js.org/getting-started.html)其后。有了Vue，我想说的就是，除了Vuex之外，您无需四处寻找其他东西，尤其是在入门时。

Vuex从React生态系统中借鉴了许多想法，因为这是Redux流行的Flux模式。

如果您已经了解Flux或Redux，那么Vuex将非常熟悉。如果您不这样做，那就没问题-我将彻底解释每个概念。

Vue应用程序中的组件可以具有自己的状态。例如，一个输入框将在本地存储输入到其中的数据。这非常好，即使使用Vuex，组件也可以具有局部状态。

您知道开始进行大量工作来传递状态时需要Vuex之类的东西。

在这种情况下，Vuex为状态提供了一个中央存储库，您可以通过请求状态来对状态进行更改。

依赖于状态的特定部分的每个组件都将使用商店中的getter来访问它，以确保在状态发生变化时立即对其进行更新。

使用Vuex会给应用程序带来一些复杂性，因为需要以某种方式进行设置才能正常工作。但是，如果这有助于解决过于复杂的杂乱无章的道具传递和事件系统（如果变得过于复杂，则可能会变成意大利面条），那么这是一个不错的选择。

#### 开始吧

在此示例中，我从Vue CLI应用程序开始。通过直接将Vuex加载到脚本标签中，也可以使用它。但是，由于Vuex更适合大型应用程序，因此您很有可能会在结构化的应用程序上使用它，例如可以通过Vue CLI快速启动的应用程序。

我使用的示例将放在CodeSandbox中，它是一项很棒的服务，具有准备就绪的Vue CLI [示例](https://codesandbox.io/s/vue)。我建议使用它来玩耍。

![](https://cdn-media-1.freecodecamp.org/images/hoB1Mu8Q1Py50t5Es5EKze26BsJOApMhEWVh)

到达之后，单击“添加依赖项”按钮，输入“ vuex”，然后单击它。

现在，Vuex将列在项目依赖项中。

要在本地安装Vuex，您可以简单地运行`npm install vuex`或`yarn add vuex`在项目文件夹中。

#### 创建Vuex商店

现在，我们准备创建Vuex商店。

该文件可以放在任何地方。通常建议将其放入`src/store/store.js`文件中，因此我们将这样做。

在此文件中，我们初始化Vuex并告诉Vue使用它：

```  
import Vue from 'vue'import Vuex from 'vuex'
```   

```
Vue.use(Vuex)
```

```
export const store = new Vuex.Store({})
```
![](https://cdn-media-1.freecodecamp.org/images/p2kPCCKdhaHsHfXd4Nti975YVgvKMnbHbMRd)

我们导出使用`Vuex.Store()`API 创建的Vuex存储对象。

#### 商店的用例

现在我们有了一个框架，让我们提出一个关于Vuex的好用例的想法，以便我介绍它的概念。

例如，我有两个同级组件，一个带有一个输入字段，另一个打印该输入字段的内容。

当输入字段更改时，我还要更改第二个组件中的内容。非常简单，但这将为我们完成工作。

#### 介绍我们需要的新组件

我删除HelloWorld组件，并添加一个Form组件和一个Display组件。

```
<template>  <div>    <label for="flavor">Favorite ice cream flavor?</label>    <input name="flavor">  </div></template>
```
```
<template>  <div>    <p>You chose ???</p>  </div></template>
```
#### 将这些组件添加到应用程序

我们将它们添加到`App.vue`代码中，而不是HelloWorld组件中：

```
<template>  <div id="app">    <Form/>    <Display/>  </div></template>
```
```
<script>import Form from './components/Form'import Display from './components/Display'
```
```
export default {  name: 'App',  components: {    Form,    Display  }}</script>
```
#### 将状态添加到商店

因此，有了这个，我们回到store.js文件。我们向名为的商店添加了一个属性，该属性`state`是一个包含该`flavor`属性的对象。最初是一个空字符串。

```
import Vue from 'vue'import Vuex from 'vuex'
```
```
Vue.use(Vuex)
```
```
export const store = new Vuex.Store({  state: {    flavor: ''  }})
```

当用户在输入字段中键入内容时，我们将对其进行更新。

#### 添加突变

除非使用突变，否则无法操纵状态。我们设置了一个突变，该突变将在`Form`组件内部用于通知商店状态应该更改。

```
import Vue from 'vue'import Vuex from 'vuex'
```
```
Vue.use(Vuex)
```
```
export const store = new Vuex.Store({  state: {    flavor: ''  },  mutations: {    change(state, flavor) {      state.flavor = flavor    }  }})
```
#### 添加获取器以引用状态属性

设置好之后，我们需要添加一种查看状态的方法。我们使用吸气剂。我们为该`flavor`属性设置了一个吸气剂：

```
import Vue from 'vue'import Vuex from 'vuex'
```
```
Vue.use(Vuex)
```
```
export const store = new Vuex.Store({  state: {    flavor: ''  },  mutations: {    change(state, flavor) {      state.flavor = flavor    }  },  getters: {    flavor: state => state.flavor  }})
```

注意`getters`对象如何。`flavor`是此对象的属性，该对象接受状态作为参数，并返回`flavor`状态的属性。

#### 将Vuex商店添加到应用程序

现在该商店已准备就绪，可以使用。我们回到应用程序代码，在main.js文件中，我们需要导入状态并将其在我们的Vue应用程序中可用。

我们增加

```
import { store } from './store/store'
```

并将其添加到Vue应用程序中：

```
new Vue({  el: '#app',  store,  components: { App },  template: '<App/>'})
```

一旦添加它，由于这是主要的Vue组件，因此`store`每个Vue组件中的变量都将指向Vuex存储。

#### 使用提交更新用户操作的状态

让我们在用户键入内容时更新状态。

我们通过使用`store.commit()`API来实现。

但是首先，让我们创建一个在输入内容更改时调用的方法。我们使用`@input`而不是`@change`因为后者仅在焦点移离输入框时触发，而`@input`每次按键时都会调用。

```
<template>  <div>    <label for="flavor">Favorite ice cream flavor?</label>    <input @input="changed" name="flavor">  </div></template>
```
```
<script>export default {  methods: {    changed: function(event) {      alert(event.target.value)    }  }}</script>
```

现在我们有了风味的价值，我们使用Vuex API：

```
<script>export default {  methods: {    changed: function(event) {      this.$store.commit('change', event.target.value)    }  }}</script>
```

看看我们如何使用来引用商店`this.$store`？这是由于`store`在主Vue组件初始化中包含了该对象。

该`commit()`方法接受一个突变名称（我们`change`在Vuex存储中使用了）和一个有效负载，这些负载将作为其回调函数的第二个参数传递给该突变。

#### 使用吸气剂打印状态值

现在，我们需要通过使用在Display模板中引用此值的getter `$store.getters.flavor`。`this`可以删除，因为我们在模板中，并且`this`是隐式的。

```
<template>  <div>    <p>You chose {.{ $store.getters.flavor }}</p>  </div></template>
```

完整的有效源代码可[在此处获得](https://codesandbox.io/s/zq7k7nkzkm)。

这个难题中仍然缺少许多概念：

*   行动
*   模组
*   帮手
*   外挂程式

但是现在您有了基本知识，可以在官方文档中阅读它们。

### 使用Vue路由器处理URL

在JavaScript Web应用程序中，路由器是将当前显示的视图与浏览器地址栏内容同步的部分。

换句话说，这是使您在单击页面中的某些内容时更改URL的部分，并有助于在您单击特定的URL时显示正确的视图。

传统上，Web是围绕URL构建的。当您点击某个URL时，将显示一个特定页面。

随着在浏览器中运行的应用程序的引入并改变了用户的外观，许多应用程序中断了这种交互，因此您必须使用浏览器的History API手动更新URL。

当您需要将URL同步到应用程序中的视图时，需要一个路由器。这是非常普遍的需求，现在所有主要的现代框架都允许您管理路由。

Vue路由器库是用于Vue.js应用程序的方式。Vue不强制使用此库。您可以使用任何所需的通用路由库，也可以创建自己的History API集成，但是使用Vue Router的好处是它是官方的。

这意味着它由维护Vue的同一个人维护，因此您将在框架中获得更一致的集成，并保证无论将来如何，它始终是兼容的。

#### 安装

Vue Router可以通过名为npm的软件包通过npm获得`vue-router`。

如果通过脚本标签使用Vue，则可以使用

```
<script src="https://unpkg.com/vue-router"></script>
```

[UNPKG](https://unpkg.com/#/)是一个非常方便的工具，它可以通过简单的链接在浏览器中提供每个npm软件包。

如果使用Vue CLI，请使用以下命令进行安装：

```
npm install vue-router
```

`vue-router`使用脚本标签或通过Vue CLI 安装并使其可用后，现在可以将其导入应用程序中。

您在之后导入它`vue`，然后调用`Vue.use(VueRouter)`将其**安装**在应用程序中：

```
import Vue from 'vue'import VueRouter from 'vue-router'
```
```
Vue.use(VueRouter)
```

调用`Vue.use()`传递路由器对象后，在应用程序的任何组件中您都可以访问以下对象：

*   `this.$router` 是路由器对象
*   `this.$route` 是当前路线对象

#### 路由器对象

`this.$router`当Vue路由器安装在根Vue组件中时，可以使用任何组件访问该路由器对象，这些对象具有许多不错的功能。

我们可以使用以下方法使应用导航到新路线

*   `this.$router.push()`
*   `this.$router.replace()`
*   `this.$router.go()`

这类似于`pushState`，`replaceState`和`go`历史API的方法。

*   `push()` 用于转到新路线，将新项目添加到浏览器历史记录中
*   `replace()` 是相同的，只是它不会将新状态推向历史记录

用法样本：

```
this.$router.push('about') //named route, see laterthis.$router.push({ path: 'about' })this.$router.push({ path: 'post', query: { post_slug: 'hello-world' } }) //using query parameters (post?post_slug=hello-world)this.$router.replace({ path: 'about' })
```

`go()` 来回移动，接受可以在历史记录中返回的正数或负数：

```
this.$router.go(-1) //go back 1 stepthis.$router.go(1) //go forward 1 step
```
#### 定义路线

在此示例中，我正在使用Vue单个文件组件。

在模板中，我使用了一个`nav`标签，该标签包含三个`router-link`组件，分别具有标签Home，Login和About。URL通过`to`属性分配。

`router-view`Vue路由器将在该组件中放置与当前URL匹配的内容。

```
<template>  <div id="app">    <nav>      <router-link to="/">Home</router-link>      <router-link to="/login">Login</router-link>      <router-link to="/about">About</router-link>    </nav>    <router-view></router-view>  </div></template>
```

一个`router-link`组件显示的`a`默认标签（你可以改变）。每次更改路线时，通过单击链接或更改URL，都会将一个`router-link-active`类添加到引用活动路线的元素中，以设置其样式。

在JavaScript部分，我们首先包括并安装路由器，然后定义三个路由组件。

我们将它们传递给`router`对象的初始化，然后将此对象传递给Vue根实例。

这是代码：

```
<script>import Vue from 'vue'import VueRouter from 'vue-router'
```
```
Vue.use(Router)
```
```
const Home  = {  template: '<div>Home</div>'}
```
```
const Login = {  template: '<div>Login</div>'}
```
```
const About = {  template: '<div>About</div>'}
```
```
const router = new VueRouter({  routes: [    { path: '/', component: Home },    { path: '/login', component: Login },    { path: '/about', component: About }  ]})
```
```
new Vue({  router}).$mount('#app')</script>
```

通常，在Vue应用程序中，您可以使用以下方法实例化并挂载根应用程序：

```
new Vue({  render: h => h(App)}).$mount('#app')
```

使用Vue路由器时，您不会传递`render`属性，而是使用`router`。

上例中使用的语法：

```
new Vue({  router}).$mount('#app')
```

是以下内容的简写：

```
new Vue({  router: router}).$mount('#app')
```

在示例中看到，我们将`routes`数组传递给`VueRouter`构造函数。此数组中的每个路由都有`path`和`component`参数。

如果您也通过了`name`参数，那么您将具有命名路线。

#### 使用命名的路由将参数传递到路由器的推入和替换方法

还记得我们以前如何使用Router对象推送新状态吗？

```
this.$router.push({ path: 'about' })
```

使用命名路由，我们可以将参数传递给新路由：

```
this.$router.push({ name: 'post', params: { post_slug: 'hello-world' } })
```

同样适用于`replace()`：

```
this.$router.replace({ name: 'post', params: { post_slug: 'hello-world' } })
```
#### 当用户点击一个 `router-link?`

该应用程序将呈现与传递给链接的URL匹配的路由组件。

实例化处理URL的新路由组件，并调用其防护措施，旧的路由组件将被销毁。

#### 路线守卫

既然我们提到了守卫，让我们对其进行介绍。

您可以将它们视为生命周期挂钩或中间件。这些是在应用程序执行期间的特定时间调用的函数。您可以加入并更改路由的执行，重定向或简单地取消请求。

您可以通过向路由器的`beforeEach()`and `afterEach()`属性添加回调来获得全局保护。

*   `beforeEach()` 在确认导航之前调用
*   `beforeResolve()`在`beforeEach()`执行并调用所有组件`beforeRouterEnter`和`beforeRouteUpdate`防护时但在确认导航之前调用。最后检查。
*   `afterEach()` 导航确认后调用

“导航已确认”是什么意思？我们将在一秒钟内看到它。同时，将其视为“应用程序可以走那条路”。

用法是：

```
this.$router.beforeEach((to, from, next) => {  // ...})
```
```
this.$router.afterEach((to, from) => {  // ...})
```

`to`并`from`代表我们往返的路线对象。

`beforeEach`有一个附加参数`next`，如果我们调用`false`作为参数，它将阻止导航并导致其不确定。

就像在Node中间件中一样，如果您熟悉的话，`next()`应始终调用它，否则执行将被卡住。

单路径组件还具有防护装置：

*   `beforeRouteEnter(from, to, next)` 在确认当前路线之前调用
*   `beforeRouteUpdate(from, to, next)`当路由更改但管理它的组件仍然相同时调用（使用动态路由，请参见`next`）
*   `beforeRouteLeave(from, to, next)` 当我们离开这里时被称为

我们提到了导航。要确定是否确认导航到路线，Vue Router会执行一些检查：

*   它会`beforeRouteLeave`在当前组件中发出警戒
*   它称呼路由器`beforeEach()`守卫
*   它调用`beforeRouteUpdate()`需要重用的任何组件（如果存在）
*   它`beforeEnter()`在路由对象上调用了守卫（我没有提到它，但是您可以[在这里查看](https://router.vuejs.org/guide/advanced/navigation-guards.html#per-route-guard)）
*   它调用了`beforeRouterEnter()`我们应该输入的组件
*   它称呼路由器`beforeResolve()`守卫
*   如果一切正常，导航已确认！
*   它称呼路由器`afterEach()`守卫

您可以使用路由的具体卫士（`beforeRouteEnter`和`beforeRouteUpdate`动态路由的情况下）的生命周期挂钩，这样你就可以开始进行数据抓取，例如请求。

#### 动态路由

以上示出了例如基于该URL不同的看法，处理`/`，`/login`和`/about`路由。

一个非常普遍的需求是处理动态路由，例如将所有帖子都放在之下`/post/`，每个帖子都带有一个名字。

*   `/post/first`
*   `/post/another-post`
*   `/post/hello-world`

您可以使用动态细分来实现。

这些是静态段：

```
const router = new VueRouter({  routes: [    { path: '/', component: Home },    { path: '/login', component: Login },    { path: '/about', component: About }  ]})
```

我们添加了一个动态细分来处理博客文章：

```
const router = new VueRouter({  routes: [    { path: '/', component: Home },    { path: '/post/:post_slug', component: Post },    { path: '/login', component: Login },    { path: '/about', component: About }  ]})
```

注意`:post_slug`语法。这意味着您可以使用任何字符串，并将其映射到`post_slug`占位符。

您不仅限于这种语法。Vue依靠[此库](https://github.com/pillarjs/path-to-regexp)来解析动态路由，并且您可以使用正则表达式疯狂。

现在，在“发布路线”组件内部，我们可以使用引用该路线`$route`，并使用`$route.params.post_slug`：

```
const Post = {  template: '<div>Post: {.{ $route.params.post_slug }}</div>'}
```

我们可以使用此参数从后端加载内容。

在相同的URL中，您可以具有任意数量的动态细分：

`/post/:author/:post_slug`

还记得我们谈论用户导航到新路线时会发生什么情况吗？

在动态路线的情况下，发生的情况有些不同。

为了提高Vue的效率，它可以重用当前实例，而不是销毁当前路由组件并重新实例化它。

发生这种情况时，Vue会调用`beforeRouteUpdate`生命周期事件。

在那里您可以执行所需的任何操作：

```
const Post = {  template: '<div>Post: {.{ $route.params.post_slug }}</div>'  beforeRouteUpdate(to, from, next) {    console.log(`Updating slug from ${from} to ${to}`)    next() //make sure you always call next()  }}
```
#### 使用道具

在示例中，我曾经`$route.params.*`访问过路线数​​据。组件不应与路由器紧密耦合，而可以使用道具：

```
const Post = {  props: ['post_slug'],  template: '<div>Post: {.{ post_slug }}</div>'}
```
```
const router = new VueRouter({  routes: [    { path: '/post/:post_slug', component: Post, props: true }  ]})
```

请注意`props: true`传递给route对象以启用此功能。

#### 嵌套路线

在我提到之前，您可以在同一URL中具有任意数量的动态细分，例如：

`/post/:author/:post_slug`

因此，假设我们有一个Author组件负责第一个动态段：

```
<template>  <div id="app">    <router-view></router-view>  </div></template>
```
```
<script>import Vue from 'vue'import VueRouter from 'vue-router'
```
```
Vue.use(Router)
```
```
const Author  = {  template: '<div>Author: {.{ $route.params.author}}</div>'}
```
```
const router = new VueRouter({  routes: [    { path: '/post/:author', component: Author }  ]})
```
```
new Vue({  router}).$mount('#app')</script>
```

我们可以`router-view`在Author模板中插入另一个组件实例：

```
const Author  = {  template: '<div>Author: {.{ $route.params.author}}<router-view></router-view></div>'}
```

我们添加Post组件：

```
const Post = {  template: '<div>Post: {.{ $route.params.post_slug }}</div>'}
```

然后，我们将内部动态路由注入`VueRouter`配置中：

```
const router = new VueRouter({  routes: [{    path: '/post/:author',    component: Author,    children: [      path: ':post_slug',      component: Post    ]  }]})
```