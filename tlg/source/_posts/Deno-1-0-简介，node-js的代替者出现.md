title: Deno 1.0 简介，node.js的代替者出现
author: 知识铺
date: 2020-05-19 08:55:46
tags:
---
 

## 简介
动态语言是有用的工具。脚本化允许用户快速、简洁地将复杂的系统结合在一起，表达想法，而不必担心内存管理或构建系统等细节。近年来，使用 Rust 和 Go 等编程语言使得生成复杂的本机代码变得更加容易;这些项目是计算机基础设施中非常重要的发展。但是，我们声称，拥有一个强大的脚本环境，可以解决广泛的问题域，这仍然很重要。

JavaScript 是使用最广泛的动态语言，使用 Web 浏览器在每台设备上运行。大量的程序员精通JavaScript，并投入了大量精力来优化其执行。通过ECMA国际等标准组织，语言得到了认真和不断的改进。我们相信JavaScript是动态语言工具的自然选择;无论是在浏览器环境中还是作为独立进程。

我们在这方面的最初事业，Node.js，被证明是一个非常成功的软件平台。人们发现它对于构建 Web 开发工具、构建独立 Web 服务器以及无数其他用例非常有用。然而，Node是在2009年设计的，当时JavaScript是一种完全不同的语言。出于必要，Node不得不发明后来被标准组织采用的概念，并以不同的方式添加到语言中。在演示[中，在 Node 中设计错误](https://zshipu.com/t?url=https://www.youtube.com/watch?v=M3BM9TB-8yA)，对此进行了更详细的讨论。由于 Node 拥有大量用户，因此系统发展起来非常困难且缓慢。

随着 JavaScript 语言的不断变化，以及 TypeScript 等新增加功能，构建 Node 项目可能会成为一项艰巨的任务，包括管理构建系统和其他重手工具，从而远离动态语言脚本的乐趣。此外，链接到外部库的机制基本上通过 NPM 存储库集中，这与 Web 的理想不一致。

我们认为 JavaScript 和周围的软件基础架构的格局已经变化到足以简化。我们寻求一个有趣和高效的脚本环境，可用于各种任务。

## [命令行脚本的 Web 浏览器](https://zshipu.com/t?url=https://deno.land/v1#a-web-browser-for-command-line-scripts)

Deno 是在 Web 浏览器之外执行 JavaScript 和 TypeScript 的新运行时。

Deno 尝试提供一个独立的工具，用于快速编写复杂功能的脚本。Deno 是（并且将永远）单个可执行文件。与 Web 浏览器一样，它知道如何获取外部代码。在 Deno 中，单个文件可以定义任意复杂的行为，而无需任何其他工具。

```

 import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

 for await (const req of serve({ port: 8000 })) {

 req.respond({ body: "Hello World\n" });

 }
```

此处将完整的 HTTP 服务器模块作为依赖项添加到一行中。没有额外的配置文件，没有安装做事先，只是**```deno运行示例.```**

与浏览器一样，默认情况下在安全沙盒中执行代码。脚本无法访问硬盘、打开网络连接或在未经许可的情况下进行任何其他潜在的恶意操作。浏览器提供用于访问摄像机和麦克风的 API，但用户必须首先授予权限。Deno 在终端中提供类似的行为。除非提供了命令行标志，否则上述示例将失败。```--allow-net```

Deno 小心不要偏离标准化的浏览器 JavaScript API。当然，并不是每个浏览器 API 都与 Deno 相关，但 Deno 所处的位置并不偏离标准。

## [头等舱类型脚本支持](https://zshipu.com/t?url=https://deno.land/v1#first-class-typescript-support)

我们希望 Deno 适用于广泛的问题域：从小型单行脚本到复杂的服务器端业务逻辑。随着程序变得越来越复杂，进行某种形式的类型检查变得越来越重要。TypeScript 是 JavaScript 语言的扩展，允许用户有选择地提供类型信息。

Deno 支持 TypeScript，无需其他工具。运行时的设计考虑到了 TypeScript。该命令为 Deno 提供的所有内容提供类型声明。Deno 的标准模块都用 TypeScript 编写。```deno types```

## [承诺一路向下](https://zshipu.com/t?url=https://deno.land/v1#promises-all-the-way-down)

节点是在 JavaScript 具有承诺或异步/等待的概念之前设计的。节点与承诺的对应项是事件发射器，重要的 API 以它为基础，即套接字和 HTTP。抛开异步/等待的人体工程学优势，EventEmitter 模式的背压问题。例如，以 TCP 套接字为例。套接字在收到传入数据包时将发出"数据"事件。这些"数据"回调将不受限制地发出，使进程充满事件。由于 Node 继续接收新的数据事件，因此基础 TCP 套接字没有适当的回压，因此远程发送方不知道服务器已过载并继续发送数据。为了缓解此问题，添加了一个方法。这可以解决问题，但它需要额外的代码;并且由于泛洪问题仅在进程非常繁忙时出现，因此许多 Node 程序可能会充斥着数据。结果是尾部延迟错误的系统。```pause()```

在 Deno 中，套接字仍然是异步的，但接收新数据需要用户显式 。无需额外的暂停语义即可正确构造接收套接字。这不是 TCP 套接字所独有的。系统的最低绑定层从根本上与承诺相关联 - 我们将这些绑定称为"ops"。Deno 中以某种形式进行的所有回调都源于承诺。```read()```

Rust 有自己的承诺式抽象，称为期货。通过"op"抽象，Deno 可以轻松地将基于 Rust 的未来 API 绑定到 JavaScript 承诺中。

## [锈蚀 API](https://zshipu.com/t?url=https://deno.land/v1#rust-apis)

我们提供的主要组件是 Deno 命令行接口 （CLI）。CLI 是当今版本 1.0。但 Deno 不是一个整体程序，而是设计为 Rust 板条箱的集合，允许在不同层进行集成。

[deno_core](https://zshipu.com/t?url=https://crates.io/crates/deno_core)箱是Deno的一个非常裸露的骨头版本。它对 TypeScript 和[Tokio](https://zshipu.com/t?url=https://tokio.rs/)没有依赖项。它只是提供我们的运营和资源基础结构。也就是说，它提供了一种有组织的方式将 Rust 期货绑定到 JavaScript 承诺。当然，CLI 完全建立在deno_core之上。

[rusty_v8](https://zshipu.com/t?url=https://crates.io/crates/rusty_v8)箱为 V8 C++ API 提供高质量的 Rust 绑定。API 尝试尽可能紧密地匹配原始C++ API。它是零成本绑定 - Rust 中公开的对象正是您在C++中操作的对象。（例如，以前对 Rust V8 绑定的尝试强制使用持久句柄。该条箱提供在 Github 操作 CI 中构建的二进制文件，但它也允许用户从头开始编译 V8 并调整其许多生成配置。所有 V8 源代码都分布在箱内。最后rusty_v8尝试成为安全接口。还不是100%安全，但我们越来越近了。能够以安全的方式与 V8 这样的复杂 VM 进行交互，这相当惊人，并且使我们能够在 Deno 本身中发现许多困难的错误。

## [稳定性](https://zshipu.com/t?url=https://deno.land/v1#stability)

我们承诺在 Deno 中保持稳定的 API。Deno 有很多接口和组件，因此，对"稳定"的含义保持透明非常重要。我们发明的与操作系统交互的 JavaScript API 都位于"Deno"命名空间（例如 ）。这些已经仔细研究，我们不会对它们作出不兼容的倒退。```Deno.open()```

所有尚未准备好稳定功能的功能都隐藏在命令行标志后面。你可以[在这里](https://zshipu.com/t?url=https://doc.deno.land/https/raw.githubusercontent.com/denoland/deno/master/cli/js/lib.deno.unstable.d.ts)看到不稳定的接口的文档。在后续版本中，其中一些 API 也将稳定下来。```--unstable```

在全局命名空间中，您将找到各种其他对象（例如。 和 。我们非常努力地保持这些接口与浏览器中的接口相同;但如果我们发现无意不兼容，我们将发布更正。浏览器标准定义了这些接口，而不是我们。我们发出的任何更正都是错误修复，而不是接口更改。如果与浏览器标准 API 不兼容，则在主要发布之前可能会更正该不兼容。```setTimeout()``````fetch()```

Deno 还有许多 Rust API，即deno_core和rusty_v8箱。这些 API 均未处于 1.0。我们将继续对他们进行迭代。

## [限制](https://zshipu.com/t?url=https://deno.land/v1#limitations)

请务必了解 Deno 不是节点的分叉 - 这是一个全新的实现。Deno 开发仅两年，而 Node 已经开发了十多年。鉴于对 Deno 的兴趣，我们预计它将继续发展和成熟。

对于某些应用程序，Deno 可能是今天不错的选择，对于其他应用程序来说，Deno 可能不是。这取决于要求。我们希望在考虑使用 Deno 时，对这些限制保持透明，帮助人们做出明智的决策。

### [兼容性](https://zshipu.com/t?url=https://deno.land/v1#compatibility)

不幸的是，许多用户会发现与现有的JavaScript工具缺乏兼容性令人沮丧。Deno 通常与节点 （NPM） 包不兼容。正在[https://deno.land/std/node/](https://zshipu.com/t?url=https://deno.land/std/node/)构建一个新生的兼容性层，但它还远远不完整。

尽管 Deno 采用了简化模块系统的强硬方法，但最终 Deno 和 Node 是具有类似目标的非常相似的系统。随着时间的推移，我们预计 Deno 能够运行越来越多的节点程序开箱即用。

### [HTTP 服务器性能](https://zshipu.com/t?url=https://deno.land/v1#http-server-performance)

[我们不断跟踪 Deno 的 HTTP 服务器的性能](https://zshipu.com/t?url=https://deno.land/benchmarks)。hello world Deno HTTP 服务器每秒执行大约 25k 个请求，最大延迟为 1.3 毫秒。类似的 Node 程序每秒执行 34k 请求，最大延迟在 2 到 300 毫秒之间相当不稳定。

Deno 的 HTTP 服务器在 TypeScript 中实现，位于本机 TCP 套接字之上。Node 的 HTTP 服务器以 C 编写，并作为高级绑定公开到 JavaScript。我们抵制了向 Deno 添加本机 HTTP 服务器绑定的冲动，因为我们希望优化 TCP 套接字层层，更一般地优化操作接口。

Deno 是一个合适的异步服务器，对于大多数目的来说，每秒 25k 请求已经足够了。（如果不是，则 JavaScript 可能不是最佳选择。此外，我们预计 Deno 通常会表现出更好的尾部延迟，因为承诺无处不在（上文讨论）。话虽如此，我们确实相信系统中还有更多的性能胜利，我们希望在未来的版本中实现这一点。

### [TSC 瓶颈](https://zshipu.com/t?url=https://deno.land/v1#tsc-bottleneck)

内部 Deno 使用 Microsoft 的 TypeScript 编译器来检查类型并生成 JavaScript。与 V8 解析 JavaScript 所需的时间相比，它非常缓慢。在项目的早期，我们曾希望"V8 快照"能在这里提供显著的改进。快照确实有帮助，但它仍然令人不满意地慢。我们当然认为，在现有 TypeScript 编译器的基础上，可以在此处进行改进，但我们很清楚，最终需要在 Rust 中实现类型检查。这将是一项艰巨的任务，不会很快发生;但它将在开发人员经历的关键路径中提供数量级的性能改进。TSC 必须移植到 Rust。如果您有兴趣在此问题上进行协作，请与我们联系。

### [插件/扩展](https://zshipu.com/t?url=https://deno.land/v1#plugins--extensions)

我们有一个新兴的插件系统，用于使用自定义操作扩展 Deno 运行时。但是，此接口仍在开发中，并已标记为不稳定。因此，访问 Deno 提供的本机系统是比较困难的。

### [确认](https://zshipu.com/t?url=https://deno.land/v1#acknowledgements)

非常感谢[许多贡献者](https://zshipu.com/t?url=https://github.com/denoland/deno/graphs/contributors)，他们帮助使此版本成为可能。特别是[：@kitsonk](https://zshipu.com/t?url=https://github.com/kitsonk)谁在系统的许多部分，包括（但不限于）TypeScript编译器主机，deno_typescript，deno捆绑包，deno安装，deno类型，流实现。[@kevinkassimo](https://zshipu.com/t?url=https://github.com/kevinkassimo)在整个项目历史中贡献了无数的错误修复。他的贡献包括计时器系统，TTY集成，是支持。Deno.makeTempFile， Deno.kill， Deno.hostname， Deno.realPath， std/节点的要求， 窗口.queueMircotask， 和REPL历史.他还创建了徽标。[@kt3k](https://zshipu.com/t?url=https://github.com/kt3k)实现了连续基准系统（该系统几乎在所有主要重构中都有作用）、信号处理程序、权限 API 和许多关键错误修复。[@nayeemrmn](https://zshipu.com/t?url=https://github.com/nayeemrmn)在 Deno 的许多部分提供错误修复，最显著的是，他极大地改进了堆栈跟踪和错误报告，并且对稳定 1.0 的 API 提供了有力的帮助。[@justjavac](https://zshipu.com/t?url=https://github.com/justjavac)贡献了许多小而关键的修复，使 deno API 与 Web 标准保持一致，最著名的是他写了 VS Code deno 插件。[@zekth](https://zshipu.com/t?url=https://github.com/zekth)贡献了很多模块的藏匿，其中包括std/编码/csv，std/编码/汤姆，std/http/cookies，以及许多其他的错误修复。[@axetroy](https://zshipu.com/t?url=https://github.com/axetroy)帮助处理与漂亮相关的所有事项，提供了许多错误修复，并维护了 VS Code 插件。[@afinch7](https://zshipu.com/t?url=https://github.com/afinch7)实现了插件系统。[@keroxp](https://zshipu.com/t?url=https://github.com/keroxp)实现了 Websocket 服务器，并提供了许多错误修复。[@cknight](https://zshipu.com/t?url=https://github.com/cknight)提供了大量的文档和 std/节点多填充。[@lucacasonato](https://zshipu.com/t?url=https://github.com/lucacasonato)几乎建立了整个deno.land网站。[@hashrock](https://zshipu.com/t?url=https://github.com/hashrock)做了很多惊人的艺术作品，如doc.deno.land上的加载页和这个页面顶部可爱的图像！
