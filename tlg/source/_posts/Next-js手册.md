title: Next.js手册
author: 知识铺
date: 2019-11-29 14:45:06
tags:
---
如果您对Next.js的知识从零到零，或者您过去曾经使用过React，并且希望进一步深入到React生态系统，尤其是服务器端渲染，这对您来说是理想的。

我发现Next.js是创建Web应用程序的绝佳工具，并且在本文结尾，我希望您能像我一样对它感到兴奋。我希望它能帮助您学习Next.js！

[注意：您可以下载本教程的PDF / ePub / Mobi版本，以便离线阅读](https://flaviocopes.com/page/nextjs-handbook/)！



## 介绍

直到您意识到与在客户端呈现所有内容有关的几个问题之前，在由React驱动的现代JavaScript应用程序上进行工作非常出色。

首先，页面需要更长的时间才能被用户看到，因为在加载内容之前，必须加载所有JavaScript，并且您的应用程序需要运行才能确定在页面上显示的内容。

其次，如果您要建立一个公开可用的网站，则存在内容SEO问题。搜索引擎在运行和索引JavaScript应用方面越来越好，但是如果我们可以向他们发送内容而不是让他们弄清楚它，那就更好了。

解决这两个问题的方法是**服务器渲染**，也称为**静态预渲染**。

[Next.js](https://nextjs.org/)是一个React框架，可以通过一种非常简单的方式完成所有这些工作，但不仅限于此。它的创建者宣传它**是React应用程序**的**零配置单命令工具链**。

它提供了一种通用的结构，使您可以轻松构建前端React应用程序，并为您透明地处理服务器端渲染。

## Next.js提供的主要功能

这是Next.js主要功能的详尽列表：

### 热门代码重装

当Next.js检测到任何保存到磁盘的更改时，它将重新加载页面。

### 自动路由

任何URL都映射到文件系统，文件`pages`夹中的文件，并且您不需要任何配置（当然，您有自定义选项）。

### 单个文件组件

使用`styled-jsx`与同一团队完全集成的，可以轻松地将范围限定的样式添加到组件中。

### 服务器渲染

您可以在将HTML发送给客户端之前，在服务器端渲染React组件。

### 生态系统兼容性

Next.js在其余的JavaScript，Node和React生态系统中表现良好。

### 自动代码分割

页面仅使用它们所需的库和JavaScript呈现。Next.js会在几种不同的资源中自动将应用程序分解，而不是生成包含所有应用程序代码的单个JavaScript文件。

加载页面仅加载该特定页面所需的JavaScript。

Next.js通过分析导入的资源来做到这一点。

例如，如果只有一个页面导入Axios库，则该特定页面将在其捆绑包中包含该库。

这样可以确保您的第一个页面加载尽可能快，并且只有将来的页面加载（如果会被触发）才会将所需的JavaScript发送给客户端。

有一个值得注意的例外。如果至少在网站页面的一半中使用了常用导入，则这些导入将移入主要的JavaScript捆绑包中。

### 预取

该`Link`组件用于将不同的页面链接在一起，支持`prefetch`在后台自动预取页面资源（包括由于代码拆分而丢失的代码）的道具。

### 动态组件

您可以动态导入JavaScript模块和React组件。

### 静态出口

使用该`next export`命令，Next.js允许您从应用程序导出完全静态的网站。

### TypeScript支持

Next.js用TypeScript编写，因此具有出色的TypeScript支持。

## Next.js vs盖茨比vs `create-react-app`

Next.js，[Gatsby](https://flaviocopes.com/gatsby/)和[`create-react-app`](https://flaviocopes.com/react-create-react-app/)它们是令人惊奇的工具，可用于增强应用程序的功能。

让我们先说说它们的共同点。他们全都拥有React在幕后，为整个开发经验提供动力。他们还抽象化了[webpack](https://flaviocopes.com/webpack/)以及我们过去在过去曾经手动配置的所有低级内容。

`create-react-app`不能帮助您轻松生成服务器端渲染的应用。它附带的所有内容（SEO，速度...）仅由Next.js和Gatsby之类的工具提供。

**什么时候Next.js比Gatsby更好？**

它们都可以帮助**服务器端呈现**，但是有2种不同的方式。

使用Gatsby的最终结果是没有服务器的静态站点生成器。您生成站点，然后在Netlify或另一个静态托管站点上静态部署生成过程的结果。

Next.js提供了一个后端，服务器端可以呈现对请求的响应，从而允许您创建动态网站，这意味着您将其部署在可以运行Node.js的平台上。

Next.js _也可以_生成一个静态站点，但是我不会说这是其主要用例。

如果我的目标是建立一个静态站点，那么我将很难选择，也许盖茨比拥有一个更好的插件生态系统，其中包括许多特别用于博客的插件。

Gatsby很大程度上也基于[GraphQL](https://flaviocopes.com/graphql/)，根据您的意见和需求，您可能会真正喜欢或不喜欢它。

## 如何安装Next.js？

要安装Next.js，您需要安装Node.js。

确保您具有最新版本的Node。检查`node -v`终端中的运行情况，并将其与[https://nodejs.org/上](https://nodejs.org/)列出的最新LTS版本进行比较。

安装Node.js之后，您将在`npm`命令行中使用该命令。

如果您在此阶段遇到任何麻烦，建议您为我编写以下教程：

*   [如何安装Node.js](https://flaviocopes.com/node-installation/)
*   [如何更新Node.js](https://flaviocopes.com/how-to-update-node/)
*   [npm软件包管理器简介](https://flaviocopes.com/npm/)
*   [Unix Shell教程](https://flaviocopes.com/shells/)
*   [如何使用macOS终端](https://flaviocopes.com/macos-terminal/)
*   [重击壳](https://flaviocopes.com/bash/)

现在，您已经拥有Node，已更新为最新版本，并且`npm`已经设置好了！

我们现在可以选择2条路线：使用`create-next-app`或经典方法，其中涉及手动安装和设置Next应用。

### 使用create-next-app

如果您熟悉[`create-react-app`](https://flaviocopes.com/react-create-react-app/)，`create-next-app`则是一样的-顾名思义，它创建的是Next应用而不是React应用。

我假设您已经安装了Node.js，该版本从5.2版（撰写本文时已经2年多）开始捆绑了[`npx`命令](https://flaviocopes.com/npx/)。这个方便的工具使我们能够下载并执行JavaScript命令，并且我们将像这样使用它：

```
npx create-next-app
```

该命令要求应用程序名称（以及你使用该名称创建一个新的文件夹），然后下载它需要的所有包（`react`，`react-dom`，`next`），设置`package.json`到：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-14-at-16.46.47.png)

您可以通过运行`npm run dev`以下命令立即运行示例应用程序：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-14-at-16.46.32.png)

这是[http：// localhost：3000](http://localhost:3000/)上的结果：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-14-at-16.47.17.png)

这是启动Next.js应用程序的推荐方法，因为它为您提供了结构和示例代码。除了默认的示例应用程序之外，还有更多其他功能。您可以使用选项使用存储在[https://github.com/zeit/next.js/tree/canary/examples](https://github.com/zeit/next.js/tree/canary/examples)中的任何示例`--example`。例如，尝试：

```
npx create-next-app --example blog-starter
```
这也为您提供了一个立即可用的博客实例，并且语法突出显示了：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-14-at-17.13.29.png)
### 手动创建Next.js应用

`create-next-app`如果您想从头开始创建Next应用程序，则可以避免。方法如下：在您喜欢的任何位置（例如在主文件夹中）创建一个空文件夹，然后进入该文件夹：

```
mkdir nextjs
cd nextjs
```

并创建您的第一个Next项目目录：

```
mkdir firstproject
cd firstproject
```

现在使用`npm`命令将其初始化为Node项目：

```
npm init -y
```

该`-y`选项告诉`npm`您使用项目的默认设置，并填充示例`package.json`文件。

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-16.59.21.png)

现在安装Next和React：

```
npm install next react react-dom
```

您的项目文件夹现在应具有2个文件：

*   `package.json`（[参见我的教程](https://flaviocopes.com/package-json/)）
*   `package-lock.json`（[请参阅我关于package-lock的教程](https://flaviocopes.com/package-lock-json/)）

和`node_modules`文件夹。

使用您喜欢的编辑器打开项目文件夹。我最喜欢的编辑器是[VS Code](https://flaviocopes.com/vscode/)。如果您有安装，可以运行`code .`在终端打开编辑器中的当前文件夹（如果该命令不为你工作，看到[这个](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)）

Open `package.json`，现在具有以下内容：

```
{
  "name": "firstproject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies":  {
    "next": "^9.1.2",
    "react": "^16.11.0",
    "react-dom": "^16.11.0"
  }
}
```

并将该`scripts`部分替换为：

```
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

添加Next.js构建命令，我们将很快使用它。

提示：用于`"dev": "next -p 3001",`更改端口并在此示例中在端口3001上运行。

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-17.01.03.png)

现在创建一个`pages`文件夹，并添加一个`index.js`文件。

在这个文件中，让我们创建第一个React组件。

我们将使用它作为默认导出：

```
const Index = () => (
  <div>
    <h1>Home page</h1>
  </div>
)

export default Index
```

现在使用终端，运行`npm run dev`以启动Next开发服务器。

这将使该应用程序在本地主机上的端口3000上可用。

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-11.24.02.png)

在浏览器中打开[http：// localhost：3000](http://localhost:3000/)进行查看。

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-11.24.23.png)
## 查看源代码以确认SSR是否正常运行

现在，让我们检查应用程序是否正常运行。这是一个Next.js应用程序，因此应该在**服务器端呈现**。

这是Next.js的主要卖点之一：如果我们使用Next.js创建一个网站，则该网站页面将呈现在服务器上，该服务器会将HTML传递给浏览器。

这具有3个主要优点：

*   客户端不需要实例化React来渲染，这使网站对您的用户更快。
*   搜索引擎将为页面编制索引，而无需运行客户端JavaScript。Google开始做的事情，但公开承认这是一个较慢的过程（如果您想获得良好的排名，则应该尽可能地帮助Google）。
*   您可以拥有社交媒体元标记，可用于添加预览图像，自定义在Facebook，Twitter等上共享的任何页面的标题和描述。

让我们查看应用程序的源代码。
使用Chrome浏览器，您可以右键单击页面中的任意位置，然后按**查看页面源**。

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-11.33.10.png)

如果您查看页面的源代码，您将`<div><h1>Home page</h1></div>`在HTML中看到该代码段`body`以及一堆JavaScript文件-该应用程序捆绑包。

我们不需要进行任何设置，SSR（服务器端渲染）已经在为我们工作。

React应用程序将在客户端上启动，并且将成为使用客户端渲染推动交互（例如单击链接）的一种方式。但是重新加载页面会从服务器重新加载页面。使用Next.js，浏览器内部的结果应该没有差异-服务器呈现的页面应该看起来完全像客户端呈现的页面。

## 该应用程序捆绑

当查看页面源代码时，我们看到一堆JavaScript文件正在加载：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-11.34.41.png)

让我们开始将代码放入[HTML格式化程序中，](https://htmlformatter.com/)以使其格式更好，以便我们人类可以更好地了解它：

```
<!DOCTYPE html>
<html>

<head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width,m_inimum-scale=1,initial-scale=1" />
    <meta name="next-head-count" content="2" />
    <link rel="preload" href="/_next/static/development/pages/index.js?ts=1572863116051" as="script" />
    <link rel="preload" href="/_next/static/development/pages/_app.js?ts=1572863116051" as="script" />
    <link rel="preload" href="/_next/static/runtime/webpack.js?ts=1572863116051" as="script" />
    <link rel="preload" href="/_next/static/runtime/main.js?ts=1572863116051" as="script" />
</head>

<body>
    <div id="__next">
        <div>
            <h1>Home page</h1></div>
    </div>
    <script src="/_next/static/development/dll/dll_01ec57fc9b90d43b98a8.js?ts=1572863116051"></script>
    <script id="__NEXT_DATA__" type="application/json">{"dataManager":"[]","props":{"pageProps":{}},"page":"/","query":{},"buildId":"development","nextExport":true,"autoExport":true}</script>
    <script async="" data-next-page="/" src="/_next/static/development/pages/index.js?ts=1572863116051"></script>
    <script async="" data-next-page="/_app" src="/_next/static/development/pages/_app.js?ts=1572863116051"></script>
    <script src="/_next/static/runtime/webpack.js?ts=1572863116051" async=""></script>
    <script src="/_next/static/runtime/main.js?ts=1572863116051" async=""></script>
</body>

</html>
```

我们有4个JavaScript文件被声明为预加载到中`head`，使用`rel="preload" as="script"`：

*   `/_next/static/development/pages/index.js` （96个本地代码）
*   `/_next/static/development/pages/_app.js` （5900 LOC）
*   `/_next/static/runtime/webpack.js` （LOC 939）
*   `/_next/static/runtime/main.js` （LOC为12k）

这告诉浏览器在正常渲染流程开始之前尽快开始加载这些文件。没有这些脚本，脚本将被额外加载，这将提高页面加载性能。

然后，将这4个文件`body`与`/_next/static/development/dll/dll_01ec57fc9b90d43b98a8.js`（31k LOC）和一个JSON代码段一起加载到的末尾，该JSON代码段为页面数据设置了一些默认值：

```
<script id="__NEXT_DATA__" type="application/json">
{
  "dataManager": "[]",
  "props": {
    "pageProps":  {}
  },
  "page": "/",
  "query": {},
  "buildId": "development",
  "nextExport": true,
  "autoExport": true
}
</script>
```

加载的4个捆绑包文件已经实现了一项称为代码拆分的功能。该`index.js`文件提供了为路线`index`提供服务的组件所需的代码`/`，如果我们有更多的页面，我们将为每个页面提供更多的包，然后仅在需要时才进行加载-为页面提供更高性能的加载时间。

## 右下角的图标是什么？

您是否在页面右下方看到了一个小图标，看起来像闪电？

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-13.21.42.png)

如果将其悬停，它将显示“ Prerendered Page”：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-13.21.46.png)

该图标（_仅在开发模式下才可见）_告诉您该页面符合自动静态优化的条件，这基本上意味着该页面不依赖于在调用时需要获取的数据，并且可以按以下方式进行预渲染和构建：在构建时（当我们运行时`npm run build`）的静态HTML文件。

接下来可以通过缺少`getInitialProps()`附加到页面组件的方法来确定这一点。

在这种情况下，我们的页面甚至可以更快，因为它将作为HTML文件静态提供，而不是通过生成HTML输出的Node.js服务器提供。

可能会出现在它旁边的另一个有用图标，或者代替它在未呈现页面上显示的是一个动画三角形：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-14-at-14.56.21.png)

这是一个编译指示符，当您保存页面并且Next.js正在编译应用程序之前，此提示会在热代码重新加载开始之前自动显示在应用程序中。

这是一种非常好的方法，可以立即确定应用程序是否已经编译，您可以测试正在处理的应用程序的一部分。

## 安装React Developer Tools

Next.js基于React，所以我们绝对需要安装（如果您尚未安装）一个非常有用的工具是React Developer Tools。

React Developer Tools是可用于[Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)和[Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)的基本工具，可用于检查React应用程序。

现在，React开发人员工具并不特定于Next.js，但是我想介绍它们，因为您可能不是100％熟悉React提供的所有工具。最好花一点时间来调试工具，而不要假设您已经了解它们。

他们提供了一个检查器，该检查器揭示了构建页面的React组件树，对于每个组件，您都可以检查道具，状态，钩子等等。

一旦安装了React Developer Tools，就可以打开常规的浏览器devtools（在Chrome中，右键单击页面，然后单击`Inspect`），您会发现2个新面板：**Components**和**Profiler**。

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-14.26.12.png)

如果将鼠标移到组件上，则会在页面中看到，浏览器将选择该组件渲染的部分。

如果您在树中选择任何组件，则右侧面板将显示**对父组件**的引用以及传递给它的道具：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-14.27.05.png)

您可以通过单击组件名称来轻松导航。

您可以单击“开发人员工具”工具栏中的眼睛图标来检查DOM元素，如果您使用的是第一个图标（带有鼠标图标（通常位于类似的常规DevTools图标下）），则可以将元素悬停在浏览器用户界面以直接选择呈现它的React组件。

您可以使用该`bug`图标将组件数据记录到控制台。

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-14.31.25.png)

这非常棒，因为一旦在其中打印了数据，就可以右键单击任何元素，然后按“存储为全局变量”。例如，在这里，我使用`url`prop进行操作，并且可以使用分配给它的临时变量在控制台中对其进行检查`temp1`：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-14.40.22.png)

使用由Next.js在开发模式下自动加载的**Source Maps**，从Components面板中单击`<>`代码，然后DevTools将切换到Source面板，向我们显示组件源代码：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-14.41.33.png)

如果可能的话，“ **探查器”**选项卡更加出色。它使我们能够在应用程序中**记录交互**，并观察发生了什么。我无法显示一个示例，因为它至少需要2个组件才能创建交互，而现在只有一个。稍后再说。

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-14.42.24.png)

我使用Chrome显示了所有屏幕截图，但是React Developer Tools在Firefox中的工作方式相同：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-14.45.20.png)
## 您可以使用的其他调试技术

除了对构建Next.js应用程序必不可少的React Developer Tools之外，我还要强调两种调试Next.js应用程序的方法。

首先显然是`console.log()`所有[其他控制台API](https://flaviocopes.com/console-api/)工具。Next应用程序的工作方式将使日志语句在浏览器控制台中或在您使用Next启动Next的终端中运行`npm run dev`。

特别是，如果页面是从服务器加载的，则将URL指向服务器时，或者单击刷新按钮/ cmd / ctrl-R，则任何控制台日志记录都会在终端中发生。

通过单击鼠标进行的后续页面转换将使所有控制台记录都发生在浏览器内部。

请记住，如果您对丢失日志感到惊讶。

另一个必不可少的工具就是`debugger`声明。将此语句添加到组件将使浏览器暂停呈现页面：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-15.10.32.png)

真棒，因为现在您可以使用浏览器调试器检查值并一次一行运行您的应用程序。

您还可以使用VS Code调试器来调试服务器端代码。我提到了这项技术和[本教程](https://github.com/Microsoft/vscode-recipes/tree/master/Next-js)来进行设置。

## 在网站上添加第二页

现在我们已经掌握了可用于帮助开发Next.js应用程序的工具，让我们从剩下的第一个应用程序继续：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-13.21.42-1.png)

我想在此网站上添加第二页，即博客。它会送入`/blog`，并且暂时将只包含一个简单的静态页面，就像我们的第一个`index.js`组件一样：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-15.39.40.png)

保存新文件后，`npm run dev`已经运行的进程已经能够呈现页面，而无需重新启动它。

当我们点击URL [http：// localhost：3000 / blog时，](http://localhost:3000/blog)我们将打开新页面：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-15.41.39.png)

这是终端告诉我们的内容：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-15.41.03.png)

现在，URL仅`/blog`取决于文件名及其在`pages`文件夹下的位置。

您可以创建一个`pages/hey/ho`页面，该页面将显示在URL [http：// localhost：3000 / hey / ho上](http://localhost:3000/hey/ho)。

对于URL而言，无所谓的是文件内的组件名称。

尝试浏览页面的源代码，当从服务器加载页面时，它将`/_next/static/development/pages/blog.js`作为加载的包之一列出，而`/_next/static/development/pages/index.js`不像主页中那样。这是因为通过自动代码拆分，我们不需要提供主页的捆绑包。只是用于博客页面的捆绑软件。

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-16.24.53.png)

我们也可以只从导出一个匿名函数`blog.js`：

```
export default () => (
  <div>
    <h1>Blog</h1>
  </div>
)
```

或者，如果您更喜欢非箭头函数语法：

```
export default function() {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  )
}
```
## 链接两个页面

现在我们有2个页面，分别由`index.js`和定义`blog.js`，我们可以介绍链接。

页面内的普通HTML链接是使用`a`标记完成的：

```
<a href="/blog">Blog</a>
```

我们无法在Next.js中做到这一点。

为什么？我们在技术上_可以_，当然，因为这是Web和_在网络上的事情从来没有突破_（这就是为什么我们仍然可以使用`<marquee>`标签，但使用接下来的主要好处之一是，一旦页面加载，转换到其他页面借助客户端渲染，速度非常快。

如果使用普通`a`链接：

```
const Index = () => (
  <div>
    <h1>Home page</h1>
    <a href='/blog'>Blog</a>
  </div>
)

export default Index
```

现在打开**DevTools**，尤其是“ **网络”面板**。第一次加载时，`http://localhost:3000/`我们会加载所有页面包：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-16.26.00.png)

现在，如果您单击“保留日志”按钮（以避免清除“网络”面板），然后单击“博客”链接，将发生以下情况：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-16.27.16.png)

我们再次从服务器获得了所有JavaScript！但是..如果我们已经有了JavaScript，就不需要所有的JavaScript。我们只需要`blog.js`页面捆绑包，这是页面上唯一的新捆绑包。

要解决此问题，我们使用Next提供的名为Link的组件。

我们导入它：

```
import Link from 'next/link'
```

然后我们用它来包装我们的链接，像这样：

```
import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Home page</h1>
    <Link href='/blog'>
      <a>Blog</a>
    </Link>
  </div>
)

export default Index
```

现在，如果您重试我们以前做过的事情，`blog.js`当我们移至博客页面时，您将能够看到仅加载了捆绑软件：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-16.35.18.png)

而且页面加载的速度比以前快，该标签上的浏览器常规微调框甚至都没有出现。如您所见，URL发生了变化。这与浏览器的[History API](https://flaviocopes.com/history-api/)无缝配合。

这是实际的客户端渲染。

如果现在按下返回按钮怎么办？什么都没有加载，因为浏览器仍然具有旧的`index.js`捆绑软件，可以加载`/index`路由。都是自动的！

## 路由器的动态内容

在上一章中，我们看到了如何将主页链接到博客页面。

博客是Next.js的一个很好的用例，我们将在本章中通过添加**博客文章**继续进行探讨。

博客文章具有动态URL。例如，标题为“ Hello World”的帖子可能具有URL `/blog/hello-world`。标题为“我的第二条帖子”的帖子可能具有URL `/blog/my-second-post`。

此内容是动态的，可以从数据库，降价文件或更多内容中获取。

Next.js可以基于**动态URL**提供动态内容。

我们通过使用`[]`语法创建动态页面来创建动态URL 。

怎么样？我们添加一个`pages/blog/[id].js`文件。该文件将处理下的所有动态URL `/blog/`路径，就像那些我们上面提到的：`/blog/hello-world`，`/blog/my-second-post`等等。

在文件名中，`[id]`内部的任何的动态将在内部把方括号方式`id`的参数**查询属性**的的**路由器**。

好的，一次太多了。

什么是**路由器**？

路由器是Next.js提供的库。

我们从导入`next/router`：

```
import { useRouter } from 'next/router'
```

一旦有了`useRouter`，我们将使用以下方法实例化路由器对象：

```
const router = useRouter()
```

一旦有了该路由器对象，就可以从中提取信息。

具体来说，我们可以`[id].js`通过访问来获取文件中URL的动态部分`router.query.id`。

动态部分也可以只是URL的一部分，例如`post-[id].js`。

因此，让我们继续将所有这些内容应用到实践中。

创建文件`pages/blog/[id].js`：

```
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()

  return (
    <>
      <h1>Blog post</h1>
      <p>Post id: {router.query.id}</p>
    </>
  )
}
```

现在，如果您转到`http://localhost:3000/blog/test`路由器，应该会看到以下内容：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-16.41.32.png)

我们可以使用此`id`参数从帖子列表中收集帖子。例如，来自数据库。为了简单起见，我们将`posts.json`在项目根文件夹中添加一个文件：

```
{
  "test": {
    "title": "test post",
    "content": "Hey some post content"
  },
  "second": {
    "title": "second post",
    "content": "Hey this is the second post content"
  }
}
```

现在我们可以导入它并从`id`键中查找帖子：

```
import { useRouter } from 'next/router'
import posts from '../../posts.json'

export default () => {
  const router = useRouter()

  const post = posts[router.query.id]

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}
```

重新加载页面应向我们显示以下结果：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-16.44.07.png)

但这不是！相反，我们在控制台中出现错误，在浏览器中也出现错误：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-18.18.17.png)

为什么？因为在渲染过程中初始化组件时，数据还不存在。在下一课中，我们将了解如何使用getInitialProps将数据提供给组件。

现在，`if (!post) return <p></p>`在返回JSX之前添加一点检查：

```
import { useRouter } from 'next/router'
import posts from '../../posts.json'

export default () => {
  const router = useRouter()

  const post = posts[router.query.id]
  if (!post) return <p></p>

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}
```

现在一切正常。最初，在没有动态`router.query.id`信息的情况下渲染组件。呈现后，Next.js会使用查询值触发更新，并且页面显示正确的信息。

而且，如果您查看源`<p>`代码，则HTML中有一个空标记：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-18.20.58.png)

我们将尽快解决无法实施SSR的问题，这将损害我们的用户，SEO和社交共享的加载时间，正如我们已经讨论的那样。

我们可以通过列出以下帖子中的内容来完善博客示例`pages/blog.js`：

```
import posts from '../posts.json'

const Blog = () => (
  <div>
    <h1>Blog</h1>

    <ul>
      {Object.entries(posts).map((value, index) => {
        return <li key={index}>{value[1].title}</li>
      })}
    </ul>
  </div>
)

export default Blog
```

我们可以将它们链接到个人页面后，通过导入`Link`从`next/link`使用它的职位循环内：

```
import Link from 'next/link'
import posts from '../posts.json'

const Blog = () => (
  <div>
    <h1>Blog</h1>

    <ul>
      {Object.entries(posts).map((value, index) => {
        return (
          <li key={index}>
            <Link href='/blog/[id]' as={'/blog/' + value[0]}>
              <a>{value[1].title}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
)

export default Blog
```
## 预取

前面我曾提到过如何使用`Link`Next.js组件在两个页面之间创建链接，当您使用它时，Next.js **透明地**为我们**处理前端路由**，因此当用户单击链接时，前端会负责显示新页面。网页，而不会触发新的客户端/服务器请求和响应周期，这通常在网页中会发生。

使用时，Next.js还会为您做另一件事`Link`。

只要包含在`<Link>`其中的元素出现在视口中（这意味着它对网站用户可见），只要它是本地链接（在您的网站上），Next.js就会预取它指向的URL，从而使应用程序变得超快给观看者。

此行为仅在**生产模式下**触发（我们将在稍后进行深入讨论），这意味着如果使用来运行该应用程序，则必须停止该应用程序`npm run dev`，使用来编译生产捆绑包，`npm run build`然后使用`npm run start`来运行它   。

使用DevTools中的网络检查器，您会注意到页面加载时折叠上方的所有链接在页面`load`上触发事件后立即开始预提取（在页面完全加载时触发，并在`DOMContentLoaded`事件发生后触发））。

`Link`用户滚动并滚动时，将预取视口中没有的其他任何标签

高速连接（Wifi和3g +连接）上的自动预取是自动的，除非浏览器发送[`Save-Data`HTTP Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data)。

您可以`Link`通过将`prefetch`prop 设置为来退出预取单个实例`false`：

```
<Link href="/a-link" prefetch={false}>
  <a>A link</a>
</Link>
```
## 使用路由器检测活动链接

使用链接时，一个非常重要的功能是确定当前URL，尤其是为活动链接分配一个类，因此我们可以将其样式设置为与其他URL不同。

例如，这在您的网站标题中特别有用。

提供的Next.js默认`Link`组件`next/link`不会自动为我们执行此操作。

我们可以自己创建一个Link组件，然后将其存储`Link.js`在Components文件夹中的文件中，然后导入它而不是default `next/link`。

在此组件中，我们将首先导入React from `react`，Link from `next/link`和`useRouter`钩子from `next/router`。

在组件内部，我们确定当前路径名是否与`href`组件的prop 相匹配，如果是，则将`selected`类附加到子级。

我们最终使用以下方法通过更新后的类返回此子级`React.cloneElement()`：

```
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} selected`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}
```
## 使用 `next/router`

我们已经了解了如何使用Link组件在Next.js应用程序中声明性地处理路由。

在JSX中管理路由确实非常方便，但是有时您需要以编程方式触发路由更改。

在这种情况下，您可以直接访问`next/router`软件包中提供的Next.js路由器，并调用其`push()`方法。

这是访问路由器的示例：

```
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  //...
}
```

一旦通过调用获得了路由器对象`useRouter()`，就可以使用其方法。

这是客户端路由器，因此方法仅应在面向前端的代码中使用。确保这一点的最简单方法是将调用包装在`useEffect()`React钩子中，或包装`componentDidMount()`在React有状态组件中。

您可能最常使用的是`push()`和`prefetch()`。

`push()` 允许我们在前端以编程方式触发URL更改：

```
router.push('/login')
```

`prefetch()`允许我们以编程方式预取URL，当我们没有`Link`自动为我们处理预取代码的标记时，此功能非常有用：

```
router.prefetch('/login')
```

完整示例：

```
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/login')
  })
}
```

您也可以使用路由器侦听[路由更改事件](https://nextjs.org/docs#router-events)。

## 使用getInitialProps将数据馈送到组件

在上一章中，动态生成帖子页面存在一个问题，因为该组件需要预先提供一些数据，并且当我们尝试从JSON文件获取数据时：

```
import { useRouter } from 'next/router'
import posts from '../../posts.json'

export default () => {
  const router = useRouter()

  const post = posts[router.query.id]

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}
```

我们收到此错误：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-18.18.17-1.png)

我们该如何解决？以及如何使SSR用于动态路由？

我们必须使用一个`getInitialProps()`附加到组件的特殊功能为组件提供道具。

为此，首先我们将组件命名为：

```
const Post = () => {
  //...
}

export default Post
```

然后我们添加功能：

```
const Post = () => {
  //...
}

Post.getInitialProps = () => {
  //...
}

export default Post
```

此函数将一个对象作为其参数，其中包含多个属性。特别是，我们现在感兴趣的是获取`query`对象，这是我们之前用于获取帖子ID的对象。

因此，我们可以使用_对象分解_语法来获取它：

```
Post.getInitialProps = ({ query }) => {
  //...
}
```

现在我们可以从该函数返回帖子：

```
Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id]
  }
}
```

我们还可以删除的导入`useRouter`，然后从`props`传递给`Post`组件的属性中获取发布：

```
import posts from '../../posts.json'

const Post = props => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
    </div>
  )
}

Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id]
  }
}

export default Post
```

现在将没有错误，并且SSR将按预期工作，如您所见，查看视图源：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-18.53.02.png)

`getInitialProps`当我们`Link`像以前一样使用组件导航到新页面时，该功能将在服务器端和客户端执行。

重要的是要注意，`getInitialProps`除了`query`对象之外，它还接收其他上下文属性：

*   `pathname`：`path`URL部分
*   `asPath` -实际路径（包括查询）的字符串显示在浏览器中

在调用的情况下`http://localhost:3000/blog/test`将分别导致：

*   `/blog/[id]`
*   `/blog/test`

对于服务器端渲染，它还将收到：

*   `req`：HTTP请求对象
*   `res`：HTTP响应对象
*   `err`：错误对象

`req``res`如果您已完成任何Node.js编码，将会很熟悉。

## 的CSS

我们如何在Next.js中设置React组件的样式？

我们有很多自由，因为我们可以使用我们喜欢的任何库。

但是Next.js是[`styled-jsx`](https://github.com/zeit/styled-jsx)内置的，因为那是由从事Next.js的同一个人构建的库。

这是一个非常酷的库，为我们提供了范围内的CSS，这对于可维护性非常有用，因为CSS仅会影响所应用的组件。

我认为这是编写CSS的好方法，无需应用其他会增加复杂性的库或预处理器。

要将CSS添加到Next.js中的React组件中，我们将其插入JSX的一个片段中，该片段以

```
<style jsx>{`
```

并以

```
`}</style>
```

在这个怪异的块中，我们编写普通的CSS，就像在`.css`文件中一样：

```
<style jsx>{`
  h1 {
    font-size: 3rem;
  }
`}</style>
```

您可以在JSX内编写它，如下所示：

```
const Index = () => (
  <div>
		<h1>Home page</h1>

		<style jsx>{`
		  h1 {
		    font-size: 3rem;
		  }
		`}</style>
  </div>
)

export default Index
```

在块内部，我们可以使用插值来动态更改值。例如，在这里我们假设一个`size`prop被父组件传递，并在`styled-jsx`块中使用它：

```
const Index = props => (
  <div>
		<h1>Home page</h1>

		<style jsx>{`
		  h1 {
		    font-size: ${props.size}rem;
		  }
		`}</style>
  </div>
)
```

如果要全局应用某些CSS，而不是将其范围限制在组件上，则将`global`关键字添加到`style`标签中：

```
<style jsx global>{`
body {
  margin: 0;
}
`}</style>
```

如果要在Next.js组件中导入外部CSS文件，则必须先安装`@zeit/next-css`：

```
npm install @zeit/next-css
```

然后在项目的根目录中创建一个名为的配置文件，`next.config.js`内容如下：

```
const withCSS = require('@zeit/next-css')
module.exports = withCSS()
```

重新启动Next应用程序后，您现在可以像通常使用JavaScript库或组件一样导入CSS：

```
import '../style.css'
```

您也可以直接使用[`@zeit/next-sass`](https://github.com/zeit/next-plugins/tree/master/packages/next-sass)库导入SASS文件。

## 用自定义标签填充head标签

您可以从任何Next.js页面组件向页面标题添加信息。

在以下情况下方便使用：

*   您要自定义页面标题
*   您想更改一个元标记

你该怎么做？

您可以在每个组件内部导入`Head`组件，`next/head`并将其包含在组件JSX输出中：

```
import Head from 'next/head'

const House = props => (
  <div>
    <Head>
      <title>The page title</title>
    </Head>
    {/* the rest of the JSX */}
  </div>
)

export default House
```

您可以添加任何想要显示在`<head>`页面部分的HTML标记。

安装组件时，Next.js将确保将内部标签`Head`添加到页面标题。与卸载组件相同，Next.js将负责删除这些标记。

## 添加包装器组件

您网站上的所有页面看起来大致相同。有一个chrome窗口，一个公共基础层，您只想更改其中的内容。

有一个导航栏，一个边栏，然后是实际内容。

您如何在Next.js中构建这样的系统？

有两种方法。一种是通过创建[组件](https://flaviocopes.com/react-higher-order-components/)来使用[高阶组件](https://flaviocopes.com/react-higher-order-components/)`components/Layout.js`：

```
export default Page => {
  return () => (
    <div>
      <nav>
        <ul>....</ul>
      </hav>
      <main>
        <Page />
      </main>
    </div>
  )
}
```

在这里，我们可以为标题和/或边栏导入单独的组件，还可以添加所需的所有CSS。

您可以在每个页面中使用它，如下所示：

```
import withLayout from '../components/Layout.js'

const Page = () => <p>Here's a page!</p>

export default withLayout(Page)
```

但是我发现这仅适用于不需要调用`getInitialProps()`页面的简单情况。

为什么？

因为`getInitialProps()`仅在页面组件上被调用。但是，如果我们从页面导出withLayout（）的高阶组件，`Page.getInitialProps()`则不会被调用。`withLayout.getInitialProps()`将。

为了避免不必要地使我们的代码库复杂化，替代方法是使用props：

```
export default props => (
  <div>
    <nav>
      <ul>....</ul>
    </hav>
    <main>
      {props.content}
    </main>
  </div>
)
```

现在在我们的页面中，我们可以这样使用它：

```
import Layout from '../components/Layout.js'

const Page = () => (
  <Layout content={(
    <p>Here's a page!</p>
  )} />
)
```

这种方法使我们可以`getInitialProps()`在页面组件内使用，而唯一的缺点是必须在`content`prop 内部编写组件JSX ：

```
import Layout from '../components/Layout.js'

const Page = () => (
  <Layout content={(
    <p>Here's a page!</p>
  )} />
)

Page.getInitialProps = ({ query }) => {
  //...
}
```
## API路由

除了创建**页面路由**（这意味着将页面作为网页提供给浏览器）之外，Next.js还可创建**API路由**。

这是一个非常有趣的功能，因为这意味着Next.js可用于为Next.js本身存储和检索的数据创建前端，并通过提取请求传输JSON。

API路由位于该`/pages/api/`文件夹下，并映射到`/api`端点。

创建应用程序时，此功能_非常_有用。

在这些路由中，我们编写了Node.js代码（而不是React代码）。这是一个范式转换，您可以从前端移动到后端，但是非常无缝。

假设您有一个`/pages/api/comments.js`文件，其目标是以JSON格式返回博客文章的评论。

假设您有一个存储在`comments.json`文件中的注释列表：

```
[
  {
    "comment": "First"
  },
  {
    "comment": "Nice post"
  }
]
```

这是一个示例代码，它将注释列表返回给客户端：

```
import comments from './comments.json'

export default (req, res) => {
  res.status(200).json(comments)
}
```

它将在`/api/comments`URL 上侦听GET请求，您可以尝试使用浏览器调用它：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-07-at-11.14.42.png)

API路由也可以像页面一样使用**动态路由**，使用`[]`语法来创建动态API路由，例如`/pages/api/comments/[id].js`它将检索特定于帖子ID的注释。

在内部，`[id].js`您可以`id`通过在`req.query`对象内部查找来获取值：

```
import comments from '../comments.json'

export default (req, res) => {
  res.status(200).json({ post: req.query.id, comments })
}
```

在这里您可以看到上面的代码正在运行：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-07-at-11.59.53.png)

在动态网页，你需要导入`useRouter`从`next/router`，然后利用获取路由器对象`const router = useRouter()`，然后我们就可以得到`id`利用价值`router.query.id`。

在服务器端，这很容易，因为查询已附加到请求对象上。

如果您执行POST请求，则所有请求均以相同的方式工作-所有操作均通过该默认导出进行。

要将POST与GET和其他HTTP方法（PUT，DELETE）分开，请查找`req.method`值：

```
export default (req, res) => {
  switch (req.method) {
    case 'GET':
      //...
      break
    case 'POST':
      //...
      break
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}
```

除了`req.query`和`req.method`我们已经看到，我们已经通过引用访问饼干`req.cookies`，在请求主体`req.body`。

在幕后，这些全部由[Micro](https://github.com/zeit/micro)提供支持，[Micro](https://github.com/zeit/micro)是一个支持异步HTTP微服务的库，该库由构建Next.js的同一团队制作。

您可以在我们的API路由中使用任何Micro中间件来添加更多功能。

## 仅在服务器端或客户端运行代码

在页面组件中，通过检查`window`属性，您只能在服务器端或客户端执行代码。

此属性仅存在于浏览器内部，因此您可以检查

```
if (typeof window === 'undefined') {

}
```

并在该块中添加服务器端代码。

同样，您只能通过检查执行客户端代码

```
if (typeof window !== 'undefined') {

}
```

JS技巧：我们在`typeof`这里使用运算符是因为我们无法通过其他方式检测到未定义的值。我们不能这样做，`if (window === undefined)`因为会出现“未定义窗口”运行时错误

Next.js作为构建时的优化，也从捆绑软件中删除了使用这些检查的代码。客户端捆绑包将不包含包装在`if (typeof window === 'undefined') {}`块中的内容。

## 部署生产版本

部署应用程序始终是教程中的最后内容。

在这里，我想尽早介绍它，因为部署Next.js应用程序非常容易，我们现在就可以深入研究它，然后再转到其他更复杂的主题。

请记住，在“如何安装Next.js”一章中，我告诉您将这3行添加到该`package.json` `script`部分：

```
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

`npm run dev`到目前为止，我们一直使用来调用`next`本地安装的命令`node_modules/next/dist/bin/next`。这启动了开发服务器，该服务器向我们提供了**源映射**和**热代码重载**，这是调试时的两个非常有用的功能。

`build`通过运行，可以调用相同的命令来构建传递标记的网站`npm run build`。然后，`start`通过运行，可以使用相同的命令通过该标志来启动生产应用`npm run start`。

这两个命令是我们必须调用以成功在本地部署站点的生产版本的命令。生产版本经过高度优化，并且不附带源地图和诸如热代码重载之类的其他东西，这些东西对我们的最终用户无益。

因此，让我们创建应用程序的生产部署。使用以下命令进行构建：

```
npm run build
```
![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-13.46.31.png)

该命令的输出告诉我们某些路由（`/`并且`/blog`现在已预先`/blog/[id]`呈现为静态HTML，而Node.js后端将提供这些路由）。

然后，您可以运行`npm run start`以在本地启动生产服务器：

```
npm run start
```
![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-13.47.01.png)

访问[http：// localhost：3000](http://localhost:3000/)将向我们展示该应用程序的生产版本。

## 立即部署

在上一章中，我们在本地部署了Next.js应用程序。

我们如何将其部署到真实的Web服务器上，以便其他人可以访问它？

部署Next应用程序最简单的方法之一就是通过[Zeit](https://zeit.co/)创建的**Now**平台，该平台创建了开源项目Next.js。您可以使用Now来部署Node.js应用程序，静态网站等。

现在，使应用程序的部署和分发步骤变得非常，非常简单和快速，并且除了Node.js应用程序外，它们还支持部署Go，PHP，Python和其他语言。

您可以将其视为“云”，因为您并不真正知道应用程序的部署位置，但是您知道将拥有一个可以访问它的URL。

现在可以免费开始使用了免费的免费计划，该计划目前包括100GB托管，每天1000次[无服务器](https://www.freecodecamp.org/serverless/)功能调用，每月1000次构建，每月100GB带宽以及一个[CDN](https://www.freecodecamp.org/cdn/)位置。该[定价页面](https://zeit.co/pricing)帮助，如果你需要更多的获得成本的想法。

开始使用Now的最佳方法是使用官方的Now CLI：

```
npm install -g now
```

命令可用后，运行

```
now login
```

然后该应用会询问您的电子邮件。

如果尚未注册，[请](https://zeit.co/signup)在继续之前在[https://zeit.co/signup](https://zeit.co/signup)上创建一个帐户，然后将电子邮件添加到CLI客户端。

完成此操作后，从Next.js项目根文件夹运行

```
now
```

并且该应用将立即部署到Now云中，并且会为您提供唯一的应用URL：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-14.21.09.png)

运行该`now`程序后，该应用程序将部署到`now.sh`域下的随机URL 。

我们在图像中给出的输出中可以看到3个不同的URL：

*   [https://firstproject-2pv7khwwr.now.sh](https://firstproject-2pv7khwwr.now.sh/)
*   [https://firstproject-sepia-ten.now.sh](https://firstproject-sepia-ten.now.sh/)
*   [https://firstproject.flaviocopes.now.sh](https://firstproject.flaviocopes.now.sh/)

为什么那么多？

第一个是标识部署的URL。每次我们部署应用程序时，此URL都会更改。

您可以通过更改项目代码中的某些内容并`now`再次运行来立即进行测试：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-15.08.11.png)

其他2个URL不会更改。第一个是随机的，第二个是您的项目名称（默认为当前项目文件夹，然后是您的帐户名`now.sh`。

如果您访问该URL，您将看到该应用程序已部署到生产环境。

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-14.21.43.png)

您可以配置“现在”以将网站提供给您自己的自定义域或子域，但是我现在不会对此进行介绍。

该`now.sh`子域是足以让我们的测试目的。

## 分析应用捆绑

Next为我们提供了一种分析生成的代码束的方法。

打开应用程序的package.json文件，然后在脚本部分中添加这3个新命令：

```
"analyze": "cross-env ANALYZE=true next build",
"analyze:server": "cross-env BUNDLE_ANALYZE=server next build",
"analyze:browser": "cross-env BUNDLE_ANALYZE=browser next build"
```

像这样：

```
{
  "name": "firstproject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "analyze": "cross-env ANALYZE=true next build",
    "analyze:server": "cross-env BUNDLE_ANALYZE=server next build",
    "analyze:browser": "cross-env BUNDLE_ANALYZE=browser next build"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "next": "^9.1.2",
    "react": "^16.11.0",
    "react-dom": "^16.11.0"
  }
}
```

然后安装这两个软件包：

```
npm install --dev cross-env @next/bundle-analyzer
```

`next.config.js`在项目根目录中创建一个文件，内容如下：

```
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({})
```

现在运行命令

```
npm run analyze
```
![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-16.12.40.png)

这应该在浏览器中打开2个页面。一种用于客户端捆绑，另一种用于服务器捆绑：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-16.11.14.png)![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-16.11.23.png)

这是非常有用的。您可以检查束中占用最多空间的空间，还可以使用边栏排除束，以更轻松地可视化较小的束：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-16.14.12.png)
## 延迟加载模块

能够以可视方式分析捆绑软件非常有用，因为我们可以非常轻松地优化应用程序。

假设我们需要在博客文章中加载Moment库。跑：

```
npm install moment
```

将其包括在项目中。

现在，让我们模拟一个事实，即我们在两条不同的路线上都需要它：`/blog`和`/blog/[id]`。

我们将其导入`pages/blog/[id].js`：

```
import moment from 'moment'

...

const Post = props => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>Published on {moment().format('dddd D MMMM YYYY')}</p>
      <p>{props.post.content}</p>
    </div>
  )
}
```

我仅以今天的日期为例。

您可以通过运行`npm run analyze`以下命令在博客文章页面捆绑包中包含Moment.js ：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-17.56.14.png)

看到我们现在在中有一个红色条目`/blog/[id]`，这是我们添加Moment.js的路线！

它从〜1kB变为350kB，相当大的一笔。这是因为Moment.js库本身为349kB。

现在，客户端捆绑包可视化向我们显示，更大的捆绑包是第一页，以前很少。其代码的99％是Moment.js。

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-17.55.50.png)

每次加载博客文章时，我们都会将所有这些代码转移到客户端。这不理想。

一种解决方法是寻找一个较小的库，因为Moment.js并不以其轻量级而著称（尤其是开箱即用，包括所有语言环境），但为示例起见，我们必须使用它。

相反，我们可以做的是将所有Moment代码**分成**一个**单独的捆绑包**。

怎么样？而不是在组件级别导入Moment，而是在内部执行异步导入`getInitialProps`，然后计算要发送到组件的值。
请记住，我们不能在返回的对象内返回复杂的`getInitialProps()`对象，因此我们要计算其中的日期：

```
import posts from '../../posts.json'

const Post = props => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>Published on {props.date}</p>
      <p>{props.post.content}</p>
    </div>
  )
}

Post.getInitialProps = async ({ query }) => {
  const moment = (await import('moment')).default()
  return {
    date: moment.format('dddd D MMMM YYYY'),
    post: posts[query.id]
  }
}

export default Post
```

看到`.default()`之后的特别电话`await import`吗？需要在动态导入中引用默认导出（请参阅[https://v8.dev/features/dynamic-import](https://v8.dev/features/dynamic-import)）

现在，如果`npm run analyze`再次运行，我们可以看到：

![](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-18.00.22.png)

我们的`/blog/[id]`包又很小，因为Moment已移至其自己的包文件，并由浏览器单独加载。

## 从这往哪儿走

关于Next.js，还有更多的知识。我没有谈论使用登录，无服务器，管理数据库等等来管理用户会话。

本手册的目的不是要教您所有内容，而是要逐步向您介绍Next.js的所有功能。

我建议的下一步是[仔细](https://nextjs.org/docs)阅读[Next.js官方文档，](https://nextjs.org/docs)以查找有关我没有谈论的所有功能的更多信息，并查看[Next.js插件](https://github.com/zeit/next-plugins)引入的所有其他功能。，其中一些非常了不起。
