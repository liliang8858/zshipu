
title: GraphQL架构拼接解释：架构委派
author: 知识铺
date: 2020-06-15 18:36:56
tags:
---
  


架构拼接是 GraphQL 社区中的一个全新的主题。通常，它是指合并和连接多个 GraphQL 架构（或[_架构定义_](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9ibG9nLmdyYXBoLmNvb2wvaG93LWRvLWdyYXBocWwtcmVtb3RlLXNjaGVtYXMtd29yay03MTE4MjM3Yzg5ZDcjMzFiMg==)）以创建单个 GraphQL API 的行为。

![](https://img.colabug.com/noimg.png#aaiMVna.jpg)

架构拼接是一种新的、简便的方法来组合和重用 GraphQL API

架构拼接有两个主要概念：

*   **架构委派**：架构委派的核心思想是将特定解析器的调用转发（_委托_）到另一个解析器。从本质上讲，架构定义的相应字段正在"重新布线"。
*   **架构合并：**架构合并是创建两个（或更多）现有 GraphQL API_的联合_的想法。如果所涉及的架构完全分离，这没有问题-如果没有，则需要有一种方法来解决它们的命名冲突。

请注意，在大多数情况下，委派和合并实际上将一起使用，我们最终将**采用一种混合方法，该方法同时使用这两种方法**。在本系列文章中，我们将单独介绍它们，以确保每个概念都能很好地理解。

### 示例：构建自定义 GitHub API

让我们从基于公共[GitHub GraphQL API](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92NC8=)的示例开始。假设我们想要构建一个小型应用程序，提供有关[Graphcool GitHub 组织](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL2dyYXBoY29vbA==)的信息。

应用所需的 API 应公开以下功能：

*   检索有关 Graphcool 组织的信息（如其_ID、__电子邮件地址_、_头像 URL_或_固定存储库_ )
*   按名称从 Graphcool 组织检索存储库列表
*   检索有关应用本身的简短说明

让我们从[GitHub 的 GraphQL 架构定义](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZ2MtY29kZXNuaXBwZXRzL2E1NGFiMjc5ZjZlYTE4MWYxM2EwMWEyMzJmMWFhOTU4I2ZpbGUtZ2l0aHViLWdyYXBocWwtTDQ1OTg=)中探索类型，了解如何将需求映射到架构的根字段。```[Query](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZ2MtY29kZXNuaXBwZXRzL2E1NGFiMjc5ZjZlYTE4MWYxM2EwMWEyMzJmMWFhOTU4I2ZpbGUtZ2l0aHViLWdyYXBocWwtTDQ1OTg=)```

#### 要求 1：检索有关 Graphcool 组织的信息

第一个功能，检索有关 Graphcool 组织的信息，可以通过使用类型上的根字段来实现：```repositoryOwner``````Query```

我们可以发送以下查询来询问有关 Graphcool 组织的信息：

当我们提供作为字段时，它的工作原理。```"graphcool"``````login``````repositoryOwner```

这里的一个问题是，我们不能以简单的方式要求，因为只是一个没有字段的接口。但是，由于我们知道 Graphcool 组织的具体类型确实如此，因此我们可以在查询中使用[_内联片段_](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cDovL2dyYXBocWwub3JnL2xlYXJuL3F1ZXJpZXMvI2lubGluZS1mcmFnbWVudHM=)来解决此问题：```email``````[RepositoryOwner](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZ2MtY29kZXNuaXBwZXRzL2E1NGFiMjc5ZjZlYTE4MWYxM2EwMWEyMzJmMWFhOTU4I2ZpbGUtZ2l0aHViLWdyYXBocWwtTDYxNjE=)``````email``````[Organization](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZ2MtY29kZXNuaXBwZXRzL2E1NGFiMjc5ZjZlYTE4MWYxM2EwMWEyMzJmMWFhOTU4I2ZpbGUtZ2l0aHViLWdyYXBocWwtTDMwMDU=)```

好的，这样这将起作用，但我们已经触及了一些摩擦点，不允许为了我们的应用而直接使用 GitHub GraphQL API。

理想情况下，我们的 API 只会公开一个根字段，该字段允许直接请求我们想要的信息，而无需在每个查询上提供参数，并让我们直接请求字段：```Organization```

#### 要求 2：按名称检索 Graphcool 存储库列表

第二个要求如何，按它们的名称检索 Graphcool 存储库的列表。再次查看类型，这变得有点复杂。API 不允许直接检索存储库列表，而是可以通过使用以下根字段提供 和 存储库来请求单个存储库：```Query``````owner``````name```

下面是相应的查询：

但是，我们_实际上_需要的应用程序（为了避免发出多个请求）是一个根字段，如下所示：

#### 要求 3：检索有关应用本身的简短说明

我们的 API 应该能够返回描述应用的句子，例如 。```This app provides information about the Graphcool GitHub organization```

这当然是一个完全自定义的要求，我们不能满足基于 GitHub API - 但很明显，我们需要实现它自己，可能与一个简单的根字段像这样：```Query```

#### 定义应用程序架构

现在，我们了解 API 所需的功能以及为架构定义的理想类型：```Query```

显然，此架构定义本身是不完整的：它错过了 和 类型的定义。解决此问题的一个简单方法是手动复制和粘贴 GitHub 架构定义中的定义。```[Organization](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZ2MtY29kZXNuaXBwZXRzL2E1NGFiMjc5ZjZlYTE4MWYxM2EwMWEyMzJmMWFhOTU4I2ZpbGUtZ2l0aHViLWdyYXBocWwtTDMwMDU=)``````[Repository](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZ2MtY29kZXNuaXBwZXRzL2E1NGFiMjc5ZjZlYTE4MWYxM2EwMWEyMzJmMWFhOTU4I2ZpbGUtZ2l0aHViLWdyYXBocWwtTDUzNDA=)```

此方法很快就会变得麻烦，因为这些类型定义本身依赖于架构中的其他类型（例如，类型具有类型字段），然后还需要手动复制这些字段。此依赖关系链进入架构的深度没有限制，您甚至可能最终手动复制完整的架构定义。```Repository``````[codeOfconduct](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZ2MtY29kZXNuaXBwZXRzL2E1NGFiMjc5ZjZlYTE4MWYxM2EwMWEyMzJmMWFhOTU4I2ZpbGUtZ2l0aHViLWdyYXBocWwtTDUzNTc=)``````[CodeOfConduct](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZ2MtY29kZXNuaXBwZXRzL2E1NGFiMjc5ZjZlYTE4MWYxM2EwMWEyMzJmMWFhOTU4I2ZpbGUtZ2l0aHViLWdyYXBocWwtTDQyMA==)```

请注意，手动复制类型时，可通过三种方式完成此操作：

*   整个类型复制过来，不添加其他字段
*   复制整个类型并添加其他字段（或重命名现有字段）
*   仅复制类型字段的子集

简单地复制完整类型的第一种方法是最直接的方法。这可以使用 自动使用，如下一节所述。```[graphql-import](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL2dyYXBoY29vbC9ncmFwaHFsLWltcG9ydA==)```

如果将其他字段添加到类型定义或重命名现有字段，则需要确保实现相应的解析器，因为基础 API 当然不能处理解析这些新字段的问题。

最后，您可能决定仅复制类型字段的子集。如果不想公开类型的所有字段（基础架构可能具有不希望在应用程序架构中公开的类型上的字段），则可能是可取的。```password``````User```

#### 导入GraphQL类型定义

该程序包允许您跨不同的文件共享类型定义，从而为您节省该手动工作。可以从另一个 GraphQL 架构定义导入类型，如下所示：```[graphql-import](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL2dyYXBoY29vbC9ncmFwaHFsLWltcG9ydA==)``````.graphql```

在 JavaScript 代码中，您现在可以使用函数，它将为您解析依赖项，确保架构定义完成。```importSchema```

#### 实现 API

有了上面的架构定义，我们才只过了一半。仍然缺少的是架构以_解析器_函数的形式_实现的_实现。

如果您此时感到迷失，请务必阅读本文，其中介绍了 GraphQL 架构的基本机制和内部工作原理。

让我们来思考如何实现这些解析器！第一个版本可以如下所示：

解析器是微不足道的，我们可以返回一个描述我们的应用程序的简单字符串。但是，如何处理我们实际需要从 GitHub GraphQL API 返回信息的那些和那里的信息？```info``````graphcool``````graphcoolRepositories```

在此处实现此项的天真方法是查看参数以检索传入查询_的选择集_，然后从头开始构造另一个具有相同选择集的 GraphQL 查询并将其发送到 GitHub API。为 GitHub GraphQL API 创建[_远程架构_](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9ibG9nLmdyYXBoLmNvb2wvaG93LWRvLWdyYXBocWwtcmVtb3RlLXNjaGVtYXMtd29yay03MTE4MjM3Yzg5ZDc=)甚至可以促进这一点，但总体而言，过程仍是一个相当冗长且繁琐的过程。```info```

这正是_架构委派_发挥作用的地方！我们之前看到 GitHub 的架构公开了两个根字段，这两个根字段（在某种程度上）满足我们的需求：和 。我们现在可以利用它来保存创建一个全新的查询的工作，而不是_转发_传入的查询。```repositoryOwner``````repository```

#### 委派到其他架构

因此，我们不是试图构造一个全新的查询，而是简单地将传入_查询委托给另_一个架构。我们将用于的 API 称为 。提供。```[delegateToSchema](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL2Fwb2xsb2dyYXBocWwvZ3JhcGhxbC10b29scy9ibG9iL21hc3Rlci9zcmMvc3RpdGNoaW5nL2RlbGVnYXRlVG9TY2hlbWEudHMjTDMx)``````[graphql-tools](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9ncmFwaHFsLXRvb2xzLw==)```

```delegateToSchema```接收七个参数（按以下顺序排列）：

1.  ```schema```：可执行实例（这是我们想要将执行委托给_的目标架构_）```[GraphQLSchema](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cDovL2dyYXBocWwub3JnL2dyYXBocWwtanMvdHlwZS8jZ3JhcGhxbHNjaGVtYQ==)```
2.  ```fragmentReplacements```：包含内联片段的对象（这是针对本文中不会讨论的更高级的案例）
3.  ```operation```： 具有三个值 （、 或 ） 之一的字符串，指示要委派给哪个根类型```"query"``````"mutation"``````"subscription"```
4.  ```fieldName```：我们要委派给的根字段的名称
5.  ```args```：我们委派给的根字段的输入参数
6.  ```context```：通过目标的解析器链传递的上下文对象```schema```
7.  ```info```：包含有关要委派的查询的信息的对象

为了让我们使用此方法，我们首先需要一个表示 GitHub GraphQL API 的可执行实例。我们可以从 获取它使用 。```GraphQLSchema``````[makeRemoteExecutableSchema](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9ibG9nLmdyYXBoLmNvb2wvaG93LWRvLWdyYXBocWwtcmVtb3RlLXNjaGVtYXMtd29yay03MTE4MjM3Yzg5ZDc=)``````graphql-tools```

请注意，GitHub 的 GraphQL API 需要身份验证，因此您需要身份验证[令牌](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL3NldHRpbmdzL3Rva2Vucw==)才能实现此工作。您可以按照[本指南](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92NC9ndWlkZXMvZm9ybWluZy1jYWxscy8jYXV0aGVudGljYXRpbmctd2l0aC1ncmFwaHFs)获取本指南。

为了为 GitHub API 创建远程架构，我们需要两件事：

*   其_架构定义_（以实例的形式）```GraphQLSchema```
*   知道如何从中获取数据```[HttpLink](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL2Fwb2xsb2dyYXBocWwvYXBvbGxvLWxpbmsvdHJlZS9tYXN0ZXIvcGFja2FnZXMvYXBvbGxvLWxpbmstaHR0cA==)```

我们可以使用以下代码来实现此目的：

```[GitHubLink](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL25pa29sYXNidXJrL2dpdGh1Yi1zY2hlbWEtZGVsZWdhdGlvbi9ibG9iL21hc3Rlci9zcmMvR2l0SHViTGluay5qcw==)```只是一个简单的包装顶部，提供了一些方便围绕创建所需的Link组件。```HttpLink```

真棒，我们现在有一个可执行版本的GitHubGraphQL API，我们可以委托在我们的解析器！：塔达：让我们首先实现解析器：```graphcool```

我们传递函数预期的七个参数。总体而言，没有意外：是 GitHub GraphQL API 的远程可执行架构。在那里，我们希望将我们自己的查询的执行委托给 GitHub API 的查询。由于该字段需要一个参数，因此我们将其作为值提供。最后，我们只是通过解析器链传递 和 对象。```delegateToSchema``````schema``````graphcool``````repositoryOwner``````login``````"graphcool"``````info``````context```

解析器可以以类似的方式接近，但它有点棘手。与以前的实现不同的是，GitHub 架构定义中我们和原始字段的类型与以前不相上下。我们现在需要返回一个存储库数组，而不是单个存储库数组。```graphcoolRepositories``````graphcoolRepositories: [Repository!]!``````repository: Repository```

因此，我们继续使用，以确保我们可以同时委派多个查询，并将其执行结果捆绑到一系列承诺中：```Promise.all```

就是这样！现在，我们已经为自定义 GraphQL API 实现了所有三个解析器。虽然第一个 （for ） 微不足道，只是返回一个自定义字符串，并且使用_架构委派_将查询的执行转发到基础 GitHub API。```info``````graphcool``````graphcoolRepositories```

如果要查看此代码的工作示例，请查看此[存储库](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL25pa29sYXNidXJrL2dpdGh1Yi1zY2hlbWEtZGVsZWdhdGlvbg==)。

### 使用Graphql工具的架构委派

在上面在 GitHub 上构建自定义 GraphQL API 的示例中，我们看到了如何从编写样板代码以进行查询执行中节省我们。我们可以使用 提供的 API 将查询的执行委托给 的另一个（可执行的）实例，而不是从头开始构造新查询，并使用 或使用 一些其他 HTTP 工具将其发送过来。方便地，此实例可以创建为远程架构。```[delegateToSchema](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL2Fwb2xsb2dyYXBocWwvZ3JhcGhxbC10b29scy9ibG9iL21hc3Rlci9zcmMvc3RpdGNoaW5nL2RlbGVnYXRlVG9TY2hlbWEudHM=)``````fetch``````[graphql-request](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL2dyYXBoY29vbC9ncmFwaHFsLXJlcXVlc3Q=)``````graphql-tools``````GraphQLSchema```

在高级别上，只需充当[GraphQL.js](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cDovL2dyYXBocWwub3JnL2dyYXBocWwtanM=)函数的"代理"。这意味着，在引擎盖下，它将根据作为参数传递的信息重新组合 GraphQL 查询（或突变）。构造查询后，它所做的只是[使用架构和查询调用](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL2Fwb2xsb2dyYXBocWwvZ3JhcGhxbC10b29scy9ibG9iL21hc3Rlci9zcmMvc3RpdGNoaW5nL2RlbGVnYXRlVG9TY2hlbWEudHMjTDg0)。```delegateToSchema``````[execute](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cDovL2dyYXBocWwub3JnL2dyYXBocWwtanMvZXhlY3V0aW9uLyNleGVjdXRl)``````[execute](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL2Fwb2xsb2dyYXBocWwvZ3JhcGhxbC10b29scy9ibG9iL21hc3Rlci9zcmMvc3RpdGNoaW5nL2RlbGVnYXRlVG9TY2hlbWEudHMjTDg0)```

因此，架构委派不一定要求目标架构是远程架构，也可以使用本地架构来完成。在这方面，架构委派是一个非常灵活的工具 — 您甚至可能希望_在同_一架构中委派。这基本上是从 中采用的方法，其中多个架构首先合并到单个架构中，然后解析器重新布线。```[mergeSchemas](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9ncmFwaHFsLXRvb2xzL3NjaGVtYS1zdGl0Y2hpbmcuaHRtbCNtZXJnZVNjaGVtYXM=)``````graphql-tools```

从本质上讲，架构委派是能够轻松地将查询转发到现有的 GraphQL API。

### 架构绑定：重用 GraphQL API 的简便方法

具备我们新获得的架构委派知识，我们可以引入一个新概念，它只不过是架构委托之上的一个薄的便利层，称为_架构绑定_。

#### 公共GraphQL API 的绑定

架构绑定的核心思想是提供一种使现有 GraphQL API 可重用的简单方法，以便其他开发人员现在可以通过 NPM 将其项目拉入其中。这允许一种全新的方法来构建 GraphQL"网关"，其中非常容易组合多个 GraphQL API 的功能。

使用 GitHub API 的专用绑定，我们现在可以从上面简化示例。现在，此部分不是手动创建远程可执行架构，而是由包完成。以下是完整实现在删除以前委托给 GitHub API 所需的所有初始设置代码的位置：```[graphql-binding-github](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL2dyYXBoY29vbC9ncmFwaHFsLWJpbmRpbmctZ2l0aHVi)```

我们不是自己创建远程架构，而是实例化从导入的类并使用其函数。然后，它将在引擎盖下实际执行请求。```[GitHub](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL2dyYXBoY29vbC9ncmFwaHFsLWJpbmRpbmctZ2l0aHViL2Jsb2IvbWFzdGVyL3NyYy9pbmRleC50cyNMMjA=)``````graphql-binding-github``````delegate``````delegateToSchema```

公共 GraphQL API 的架构绑定可以在开发人员之间共享。旁边还有一个绑定可用于 Yelp GraphQL API：由[Devan Beitel](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly90d2l0dGVyLmNvbS9kZXZhbmJlaXRlbA==)```[graphql-binding-github](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly93d3cuZ29vZ2xlLmRlL3NlYXJjaD9xPWdyYXBocWwtZ2l0aHViLWJpbmRpbmcmYW1wO29xPWdyYXBocWwtZ2l0aHViLWJpbmRpbmcmYW1wO2Fxcz1jaHJvbWUuLjY5aTU3LjQ4NTlqMGoxJmFtcDtzb3VyY2VpZD1jaHJvbWUmYW1wO2llPVVURi04)``````[graphql-binding-yelp](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL0RldmFuQi9ncmFwaHFsLWJpbmRpbmcteWVscA==)```

#### 自动生成的委托函数

这些类型的架构绑定的 API 甚至可以改进到_自动生成_委托函数的级别。绑定可以公开以相应的根字段命名的函数：，而不是编写以下内容。```github.delegate('query', 'repository', ... )``````github.query.repository( ... )```

当这些委托函数在生成步骤中生成，并且基于强类型语言（如 TypeScript 或 Flow），此方法甚至会为与其他 GraphQL API 交互提供编译时类型安全性！

要了解此方法的外观，请查看允许轻松为 Graphcool 服务生成架构绑定的存储库，并使用上述自动生成委托函数的方法。```[graphcool-binding](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL2dyYXBoY29vbC9ncmFwaGNvb2wtYmluZGluZw==)```

### 总结

这是我们系列"理解GraphQL架构拼接"的第二篇文章。在第一篇文章中，我们做了一些基础工作，并了解了远程（可执行）架构，这些架构是大多数架构拼接方案的基础。

在本文中，我们主要通过基于[GitHub GraphQL API（](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92NC8=)该示例的代码[可在此处](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL25pa29sYXNidXJrL2dpdGh1Yi1zY2hlbWEtZGVsZWdhdGlvbg==)提供）来讨论_架构委派_的概念。架构委派是一种机制，用于将解析器函数的执行转发（_委托_）到不同（或甚至相同）的 GraphQL 架构中的另一个解析器。它的关键好处是，我们不必从头开始构造一个全新的查询，而是可以重用和转发传入查询的（部分）。

使用架构委派作为基础时，可以创建专用 NPM 包，以便轻松共享现有 GraphQL API 的可重用_架构绑定_。要了解这些外观，可以签出[GitHub API 的绑定](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL2dyYXBoY29vbC9ncmFwaHFsLWJpbmRpbmctZ2l0aHVi)，以及允许轻松为任何 Graphcool 服务生成绑定的绑定。```[graphcool-binding](https://zshipu.com/t?url=https://www.colabug.com/goto/aHR0cHM6Ly9naXRodWIuY29tL2dyYXBoY29vbC9ncmFwaGNvb2wtYmluZGluZw==)```


