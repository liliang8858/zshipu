
title: 初学者的 Docker
author: 知识铺
date: 2020-05-31 15:38:34
tags:
---
 每家公司都依赖软件进行创新，软件开发领域最大的创新之一是容器的发明。这些容器已经改变了软件的构建和发货方式。Docker 公司走这条路，为每个人提供集装箱。它让开发人员无忧无虑，因为它惊人的功能。Docker 还通过消除通常用于发生冲突的开发人员和运营团队之间的差距，在企业中采用 DevOps。
今天，我们将介绍 Docker 的一些基础知识等。

## [](https://zshipu.com/t?url=#docker-containers)<font _mstmutation="1" _msthash="288756" _msttexthash="18766306">码头集装箱</font>

现在，我们将查看一个高级概述，了解为什么需要 Docker，以及它可以为您做些什么。让我首先分享我是如何被介绍给Docker的。在以前的项目中，我要求设置一个端到端堆栈，包括各种不同的技术，如使用节点 js 的 Web 服务器，以及像 Redis 这样的消息传递系统以及像 Ansible 这样的业务流程工具等数据库。使用所有这些不同的组件开发此应用程序时，我们有很多问题。首先，要处理的是它们与底层操作系统的兼容性，我们必须确保所有不同的服务都与我们计划使用的操作系统版本兼容。

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--tU2w193i--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/xvh044py3v1uh1qp60sa.png)](https://zshipu.com/t?url=https://res.cloudinary.com/practicaldev/image/fetch/s--tU2w193i--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/xvh044py3v1uh1qp60sa.png)

有时，这些服务的某些版本与操作系统不兼容。我们必须回去寻找另一个与所有这些不同服务兼容的操作系统。其次，我们必须检查服务与库之间的兼容性以及操作系统的依赖项。我们曾出现问题，一个服务需要一个版本的从属库，而另一个服务需要另一个版本。

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--HnoGqM71--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1ao16z2r8cuo8ujfmy21.png)](https://zshipu.com/t?url=https://res.cloudinary.com/practicaldev/image/fetch/s--HnoGqM71--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1ao16z2r8cuo8ujfmy21.png)

应用程序的体系结构随时间而变化，我们不得不升级到这些组件的较新版本或更改数据库等。每次发生某些变化时，我们都必须经历相同的过程来检查这些不同的公司和底层基础架构之间的兼容性。此兼容性矩阵问题通常称为来自地狱的矩阵。

接下来，每次我们有一个新的开发人员，我们发现设置一个新的环境真的很难，新的开发人员必须遵循一大组指令，并运行数百个命令，最终设置他们的环境。他们必须确保他们使用正确的操作系统，即每个组件的正确版本。每个开发人员每次都必须自己设置这一切。我们还有不同的开发测试和生产环境。

一个开发人员可能愿意使用一个操作系统，而另一个开发人员可能使用另一个操作系统。因此，我们不能保证我们正在构建的应用程序在不同的环境中以相同的方式运行。因此，这一切使我们的生活真的很难。
因此，我需要一些可以帮助我们解决兼容性问题的东西，这样可以让我们修改或更改这些组件，而不会影响其他组件，甚至根据需要修改底层操作系统。那次搜索把我落在了Docker身上

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--Opct-hry--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/c3u9w9nj4rzy565ezctl.png)](https://zshipu.com/t?url=https://res.cloudinary.com/practicaldev/image/fetch/s--Opct-hry--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/c3u9w9nj4rzy565ezctl.png)

使用 Docker，我能够在具有其自己的库和自己的依赖项的单独容器中运行每个组件，所有这些组件都位于相同的 VM 和操作系统上，但都在单独的环境或容器中运行。我们只需要构建一次 Docker 配置，并且我们所有的开发人员现在都可以开始使用简单的 Docker 运行命令，而不管他们运行的是什么基础操作系统。他们只需要确保他们的系统上安装了 Docker。

### [](https://zshipu.com/t?url=#so-what-are-containers)<font _mstmutation="1" _msthash="304330" _msttexthash="33446192">那么什么是容器？</font>

容器是完全隔离的环境。就像他们可以有自己的进程或服务，他们自己的网络接口，他们自己的装载就像虚拟机一样，除了他们都共享相同的操作系统内核。我们将稍微看看这意味着什么。但同样重要的是要注意，容器不是新的Docker。

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--XuLc-NGo--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/i4yfo8lcivvntqn546dd.png)](https://zshipu.com/t?url=https://res.cloudinary.com/practicaldev/image/fetch/s--XuLc-NGo--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/i4yfo8lcivvntqn546dd.png)

集装箱已经存在了大约10年。一些不同类型的容器是LXC、LXD、LXCFS等。码头使用 LXC 容器。设置这些容器环境非常困难，因为它们级别非常低。这就是 Docker 提供具有多种强大功能的高级工具，使像我们这样的最终用户能够真正轻松。

### [](https://zshipu.com/t?url=#how-does-docker-work)<font _mstmutation="1" _msthash="305578" _msttexthash="45347835">Docker 是如何工作的？</font>

为了了解 Docker 的工作原理，让我们首先重新审视操作系统的一些基本概念。如果你看看像Ubuntu，Fedora，CentOS等操作系统。它们都由两样东西组成：一个操作系统内核和一组软件。操作系统内核负责与底层硬件交互，而操作系统内核保持不变，在这种情况下，这是 Linux，它上面的软件使这些操作系统与众不同。

该软件可能由不同的用户界面驱动程序、编译器、文件管理器、开发人员工具等组成。因此，您拥有跨所有操作系统共享的通用 Linux 内核和一些自定义软件，这些软件将操作系统彼此区分开来。
我们前面说过 Docker 容器共享底层内核。分享内核实际上意味着什么？假设我们有一个系统，其中安装了 Docker 的 Ubuntu 操作系统。Docker 可以在它上面运行任何版本的操作系统。只要它们都基于同一个内核，在这种情况下，Linux。如果基础操作系统是 Ubuntu Docker，则可以基于另一个发行（如 Debian、Fedora、Susi 或 CentOS）运行容器。每个 Docker 容器只有我们前面刚刚讨论过的附加软件，这使得这些操作系统与众不同。

Docker 利用 Docker 主机的基础内核，该内核适用于上述所有操作系统。因此，什么是操作系统，没有共享相同的内核，这些，窗口。因此，您将无法在带有 Linux 操作系统的 Docker 主机上运行基于 Windows 的容器。为此，您需要在 Windows 服务器上使用 Docker。

你可能会问，那不是个缺点吗？无法在操作系统上运行另一个内核？答案是否定的，
因为与虚拟机管理程序不同，Docker 并不是要在同一硬件上虚拟化和运行不同的操作系统和内核。Docker 的主要目的是对应用程序进行容器化并运送和运行它们。

### [](https://zshipu.com/t?url=#differences-between-virtual-machines-and-containers)<font _mstmutation="1" _msthash="304317" _msttexthash="45143176">虚拟机和容器之间的差异</font>

因此，这让我们认识到虚拟机和容器之间的差异，我们倾向于这样做，尤其是来自虚拟化背景的虚拟机和容器。如您右图，在 Docker 的情况下，我们有底层的硬件基础结构，然后在操作系统上安装操作系统和 Docker。然后，Docker 可以单独管理仅使用库和依赖项运行的容器。

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--QlzclhMf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/6modlz6aj09whss7rozh.png)](https://zshipu.com/t?url=https://res.cloudinary.com/practicaldev/image/fetch/s--QlzclhMf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/6modlz6aj09whss7rozh.png)

对于虚拟机，我们在基础硬件上拥有操作系统，然后是虚拟机（如 ESX）或某种虚拟化的虚拟机，然后是虚拟机。正如您所看到的，每个虚拟机都拥有自己的操作系统。然后是依赖项，然后是应用程序。由于有多个虚拟操作系统和内核在运行，因此此开销导致基础资源的利用率更高。虚拟机还消耗较高的磁盘空间，因为每个 VM 都很重，并且其大小通常为千兆字节，而 Docker 容器是轻量级的，并且它们的大小通常为兆字节。这允许 Docker 容器更快地启动，通常只需几秒钟，而我们知道的虚拟机需要几分钟才能启动，因为它需要启动整个操作系统。

还必须注意，由于在内核等容器之间共享的资源越多，而 VM 彼此完全隔离，因此 Docker 的隔离更少。由于 VM，不要依赖底层操作系统或内核。您可以基于 Linux 或基于 Windows 的基于同一虚拟机管理程序的不同类型的操作系统。而在单个 Docker 主机上是不可能的。因此，这些都是两者之间的一些区别。

那么，它是如何做到的呢？目前有很多容器化版本的应用程序。因此，大多数组织都将其产品容器化，并且已在称为 Docker Hub 或 Docker 存储的公共 Docker 注册表中可用。例如，您可以查找最常见的操作系统、数据库和其他服务和工具的图像。识别所需的映像后，在主机上安装 Docker。启动应用程序堆栈与使用映像名称运行 Docker run 命令一样简单。

在这种情况下，运行 Docker 运行 Ansible 命令将在 Docker 主机上运行 Ansible 的实例。同样，使用 Docker Hub 命令运行 MongoDB Redis 和节点 js 的实例。运行节点 js 时，只需指向主机上代码存储库的位置。如果需要运行 Web 服务的多个实例，只需根据需要添加尽可能多的实例，并在前面配置某种负载均衡器。如果其中一个实例想要失败，只需销毁该实例并启动新实例即可。还有其他解决方案可用于处理此类案件，我们稍后将研究。我们一直在谈论图像和容器。

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--VjSBbmQi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/jeq26pvs2cto6e901ciy.png)](https://zshipu.com/t?url=https://res.cloudinary.com/practicaldev/image/fetch/s--VjSBbmQi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/jeq26pvs2cto6e901ciy.png)

让我们了解两者的区别。映像是一个包或模板，就像您可能在虚拟化世界中处理过的 VM 模板一样。它用于创建一个或多个容器。容器正在运行隔离映像的实例，这些映像具有自己的环境和进程集。
正如我们以前所看到的，很多产品已经多克。如果您找不到要查找的内容，可以自己创建映像并将其推送到 Docker Hub 存储库，使其可供公众使用。

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--H6ULELJD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/0p19k2e6gq9c4why54nn.png)](https://zshipu.com/t?url=https://res.cloudinary.com/practicaldev/image/fetch/s--H6ULELJD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/0p19k2e6gq9c4why54nn.png)

如果你看看它，传统上，开发人员开发了应用程序。然后，他们将其交给 Ops 团队，用于在生产环境中部署和管理它。他们通过提供一组说明来做到这一点，例如有关如何设置主机的信息、要在主机上安装哪些先决条件以及如何配置依赖项等。
由于 Ops 团队没有自行开发应用程序，因此他们很难设置应用程序。当他们出现问题时，他们与开发人员一起解决问题。使用 Docker 时，设置基础结构所涉及的大部分工作现在以 Dockerfile 的形式掌握在开发人员手中。开发人员以前为设置基础结构而构建的指南现在可以轻松地放在 Dockerfile 中，为应用程序创建映像。

此映像现在可以在任何容器平台上运行，并且保证在任何地方以相同的方式运行。因此，Ops 团队现在只需使用映像来部署应用程序。由于映像已在工作，当开发人员生成映像时，并且操作没有修改它，因此在生产中部署映像时，它将继续以相同的方式工作。要了解有关容器的更多，请查看我的其他课程["Docker 绝对初学者](https://zshipu.com/t?url=https://kodekloud.com/p/docker-for-the-absolute-beginner-hands-on)"

#### [](https://zshipu.com/t?url=#watch-the-video-on-docker-for-beginners-full-course-on-youtube)<font _mstmutation="1" _msthash="305513" _msttexthash="164360690">在 YouTube 上观看"[初学者 Docker：完整课程](https://zshipu.com/t?url=https://youtu.be/zJ6WbK9zFpI)"的视频。</font>
