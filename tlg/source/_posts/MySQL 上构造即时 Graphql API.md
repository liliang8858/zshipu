
title: MySQL 上构造即时 Graphql API
author: 知识铺
date: 2020-06-12 13:44:34
tags:
---
  

在本指南中，我将介绍如何在几分钟内使用[空间云](https://zshipu.com/t?url=https://github.com/spaceuptech/space-cloud)轻松为 MySQL 设置 GraphQL API 层。

此处要注意的关键字是**即时**的。这意味着您不必自己编写 GraphQL 后端。听起来像个魔法，对吗？让我在一分钟内给你解释一下。

## 目录

*   [MySQL 和 GraphQL 简介](https://zshipu.com/t?url=#mysql-and-graphql-intro)
*   [什么是空间云？](https://zshipu.com/t?url=#what-is-space-cloud)
*   [如果我不使用 MySQL 怎么办？](https://zshipu.com/t?url=#what-if-i-don-t-use-mysql)
*   [开始使用 GraphQL 和 MySQL](https://zshipu.com/t?url=#getting-started-with-graphql-and-mysql)
*   [设置](https://zshipu.com/t?url=#setup)
*   [创建 MySQL 架构](https://zshipu.com/t?url=#creating-mysql-schema)
*   [在空间云上运行 GraphQL 查询](https://zshipu.com/t?url=#running-graphql-queries-on-space-cloud)
*   [结论](https://zshipu.com/t?url=#conclusion)

## MySQL 和 GraphQL 简介

[MySQL](https://zshipu.com/t?url=https://www.mysql.com/)是最受欢迎的 SQL 数据库之一，[仅次于 Oracle](https://zshipu.com/t?url=https://db-engines.com/en/ranking)。易于设置和学习 MySQL 使其成为大多数 Web 项目的热门选择。如果您是需要强大的数据库管理工具但预算之内的组织，那么 MySQL 可能是您的理想选择。

另一方面，GraphQL 是 API 的查询语言，逐渐取代 REST。它允许您精确描述数据需求，并为您提供所需的确切数据，解决提取下的旧数据以及过度提取问题。如果你是新到GraphQL，并希望了解更多关于它，看看它的[官方网站](https://zshipu.com/t?url=https://graphql.org)。

但是，要利用这些出色的优势，您需要通过[编写解析器](https://zshipu.com/t?url=https://graphql.org/learn/execution/)在后端设置 GraphQL API。必须编写 GraphQL 服务器会增加其采用的摩擦。虽然许多工具可帮助您自动生成 Postgres 的 GraphQL API，但使用 MySQL 的图形数量并不多。这就是空间云进入图片的地方，它**为您的MySQL提供GraphQL API，而无需编写后端**。因此，让我们看看空间云是什么。

## 什么是空间云？

为了简单化，

<q>Space Cloud 是一个开源 Web 服务器，可在您选择的数据库上提供即时 GraphQL 和 REST API。</q>

关于空间云最酷的部分是所有的 API 都是实时的。您可以选择_订阅_数据库中的更改。此功能在制作实时应用时非常有用。

由于 Space Cloud 中还内置了一个强大的安全模块，因此可以直接从前端使用这些 API。因此，在大多数用例中，只需使用空间云 API 制作角或 React 应用程序，就应该是您编写的唯一代码！

为了表示你的支持❤️， ️*你可以[给它一个明星在Github。](https://zshipu.com/t?url=https://github.com/spaceuptech/space-cloud)

## 如果我不使用 MySQL 怎么办？

空间云为蒙戈DB、Postgres 和 MySQL（及其兼容数据库）提供开箱即用的 GraphQL API。如果您使用除 MySQL 之外的任何其他数据库，则这些指南可以帮助您入门：

*   [开始使用 Postgres](https://zshipu.com/t?url=https://blog.spaceuptech.com/posts/getting-started-with-graphql-and-postgres/)
*   [开始使用蒙戈DB](https://zshipu.com/t?url=https://blog.spaceuptech.com/posts/getting-started-with-graphql-and-mongo/)

酷，这足以记录历史和功能。让我们直接潜入它！

## 开始使用 GraphQL 和 MySQL

在本指南中，我们将在 MySQL 上构建一个简单的博客应用程序，该应用程序具有作者和帖子。

每个作者可以有多个帖子，而一个帖子只能属于一个作者。请注意，这是一对**多关系**。

> **注：**如果你被困在某个地方，别担心。你总是可以在我们的[不和频道](https://zshipu.com/t?url=https://discord.gg/RkGjW93)上平我一声。

## 设置

我们使用[Docker Compose](https://zshipu.com/t?url=https://docs.docker.com/compose/)为我们运行空间云和 MySQL。

### 第 1 步：获取 Docker 组合文件

[空间技术/空间云/安装清单](https://zshipu.com/t?url=https://github.com/spaceuptech/space-cloud/tree/master/install-manifests)回购包含在任何地方部署空间云所需的所有安装清单。从那里获取 Docker 组合文件：

 <code class="language-bash hljs" data-lang="bash">wget https://raw.githubusercontent.com/spaceuptech/space-cloud/master/install-manifests/quick-start/docker-compose/mysql/docker-compose.yaml</code>

您应该能够看到包含以下内容的文件：```docker-compose.yaml```

 <code class="language-yaml hljs" data-lang="yaml">version: '3.6'
services:
  mysql:
    image: mysql
    restart: always
  space-cloud:
    image: spaceuptech/space-cloud
    ports:
 - "4122:4122"
 - "4126:4126"
    depends_on:
 - "mysql"
    restart: always
    environment:
      ## The DEV environment lets you use Mission Control (Admin UI) without login
      ## Change the dev mode to false if you want a login to your Mission Control UI
      DEV: "true"
      ## Uncomment next lines to change the login credentials of Mission Control UI
      # ADMIN_USER: "admin"
      # ADMIN_PASS: "123"
      # ADMIN_SECRET: "some-secret" # This is the JWT secret used for login authentication in Mission Control</code>

### 第 2 步：运行空间云和 MySQL

 <code class="language-bash hljs" data-lang="bash">docker-compose up -d</code>

检查容器是否正在运行：

 <code class="language-bash hljs" data-lang="bash">docker ps</code>

### 第 3 步：配置空间云

如果执行到空间云的 Docker 容器中，则可以在主目录中看到空间云生成的文件。```config.yaml```

空间云需要这个配置文件来运行。配置文件用于加载各种信息，例如要使用的数据库、其连接字符串和安全规则。

空间云有自己的任务控制（管理员 UI）来快速配置所有这些。

**开放式任务控制：**

前往http://localhost:4122/mission-control打开任务控制。

> **注：**如果您不在本地运行空间云的地址，请替换为该地址。```localhost```

**创建项目：**

单击按钮可打开以下屏幕：```Create a Project```

![](../images/create-project.png)

给您的项目。```name```

按按按钮以创建项目。```Create Project```

**将数据库添加到项目**

创建项目后，下一步是向项目添加数据库：

![](../images/add-database.png)

选择作为数据库并复制粘贴以下连接字符串：```MySQL```

 <code class="language-html hljs xml" data-lang="html">root:my-secret-pw@tcp(mysql:3306)/</code>

按键。如果连接成功，您将获得成功连接的通知。```Add database```

## 创建 MySQL 架构

空间云为您提供了一个整洁的**GraphQL SDL**来描述 MySQL 表的架构，如下所示：

 <code class="language-graphql" data-lang="graphql">type author {
  id: ID! @primary
  name: String!
}</code>

空间云根据架构在 MySQL 中自动创建名为作者的表。因此，**无需处理 SQL 语句**来创建表。

最好的部分是空间云提供的架构SDL本质上是**声明性的**。

这意味着空间云总是试图通过只进行所需的更改来完成您提供的架构。例如，假设您向架构添加了一个字段，如下所示：

 <code class="language-graphql" data-lang="graphql">type author {
  id: ID! @primary
  name: String!
  description: String
}</code>

> **注：**空间云不会再创建整个表，因为它已经在那里。相反，它只是使用 语句添加列。空间云中的这种能力使我们能够专注于我们的应用程序，而不是数据库。```ALTER TABLE```

### 创建作者表

前往该部分。```Database```

单击部分中的按钮以打开以下窗体：```Add a table``````Database```

![](../images/create-table-mysql.png)

将表名称命名为 。```author```

**复制粘贴以下架构并点击保存**：

 <code class="language-graphql" data-lang="graphql">type author {
  id: ID! @primary
  name: String!
  posts: [post] @link(table: "post", from: "id", to: "author_id")
}</code>

此架构创建具有 ID 和名称字段的表作者。该类型只不过是自动生成的唯一 ID，而指令告诉空间云将字段作为表的主键。在[空间云中签出数据建模](https://zshipu.com/t?url=https://docs.spaceuptech.com/essentials/data-modelling/)以了解更多信息。```ID``````@primary``````id```

> **注：**该字段不是表中的物理字段。它只是一个虚拟字段，链接到表，使 GraphQL 查询和突变从前端更简单。我们将在下面详细介绍它。```posts``````author``````post```

### 创建过帐表

再次单击部分中的按钮。```Add``````Database```

将表名称命名为 。```post```

复制粘贴以下架构并点击保存：

 <code class="language-graphql" data-lang="graphql">type post {
  id: ID! @primary
  title: String!
  author_id: ID @foreign(table: "author", field: "id")
}</code>

请注意该指令。它在作者表上创建一个外键，以保持关系的完整性。了解更多关于[空间云建模关系的](https://zshipu.com/t?url=https://docs.spaceuptech.com/essentials/data-modelling/relations/)```@foreign```

伟大！我们创建了本指南所需的所有表。它使用自动生成的 GraphQL API 与 MySQL 一起玩的时间。

## 在空间云上运行 GraphQL 查询

任务控制具有嵌入式 GraphiQL IDE，它允许我们触发查询，而无需构建前端。

前往该部分。```Explorer```

![](../images/graphiql-explorer.png)

让我们从创建一些作者和帖子开始，这翻译为在 MySQL 中插入一些记录。

### 插入数据

将数据插入 MySQL 非常简单，只需为我们触发 GraphQL 查询即可。因此，让我们尝试插入一些作者连同他们的帖子。下面是一个 GraphQL 查询，它帮助我们做到这一点。请尝试在 GraphiQL 编辑器中运行此 GraphQL 查询：

 <code class="language-graphql" data-lang="graphql">mutation {
 insert_author(
   docs: [
    { 
      id: "1", 
      name: "Dan",
      posts: [
        { id: "1", title: "Introducing Hooks" },
        { id: "2", title: "React vs Vue" }
      ]
    },
    { 
      id: "2", 
      name: "Ryan",
      posts: [
        { id: "3", title: "Context API" },
        { id: "4", title: "React + Redux" }
      ]
    }
  ]
 ) @mysql {
   status
 }
}</code>

成功插入时，您应该能够看到状态，因为这意味着您已成功将文档插入 MySQL 中。```200```

参数只不过是要插入表中的记录数组。```docs```

如果您还记得，我们提到了表中字段的指令以及参数 - 。空间云使用此信息将帖子数组正确插入到表中。它还根据我们提到的外键自动插入该字段。```@link``````posts``````author``````table: "post"``````post``````post.author_id```

> **注：**即使我们将字段留空，空间云也会自动生成一个唯一的随机字符串作为 id。```id```

如果您注意到，我们在上述查询中使用了指令。对于 MongoDB 或 Postgres，将其更改为或分别更改为或。就这个！```@mysql``````@mongo``````@postgres```

### 使用筛选器查询数据

插入作者及其帖子后，让我们尝试查询特定作者的帖子。它只不过是一个筛选操作。

请尝试在 GraphiQL 编辑器中运行以下查询：

 <code class="language-graphql" data-lang="graphql">query {
 post (
   where: {author_id: "1"}
 ) @mysql {
   id
   title
 }
}</code>

正如您所看到的，我们只有属于author_id1的帖子。请查看本指南，了解[筛选选项的完整列表](https://zshipu.com/t?url=https://docs.spaceuptech.com/essentials/queries/filtering)。

### 更新数据

更新需要两个信息 - 筛选要更新的文档的子句和至少一个更新运算符。```where```

假设您要更新 MySQL 中特定作者的名称。下面是一个 GraphQL 查询， 执行它：

 <code class="language-graphql" data-lang="graphql">mutation {
 update_author (
   where: { id: "2"},
   set: {name: "Ryan Florence"}
 ) @mysql {
   status
 }
}</code>

您还可以执行各种操作，如递增、递减、乘法。请查看本指南，了解[更新操作的完整列表](https://zshipu.com/t?url=https://docs.spaceuptech.com/essentials/mutations/update)。

### 获取嵌套/关系数据

现在出现了有趣的部分，即从 MySQL 获取关系数据，作为前端的嵌套 JSON。

假设我们要显示作者列表以及他们的帖子标题。您可以通过空间云的简单 GraphQL 查询从 MySQL 轻松查询此类关系数据。请尝试运行以下 GraphQL 查询：

 <code class="language-graphql" data-lang="graphql">query {
 author @mysql {
   id
   name
   posts {
     title
   }
 }
}</code>

响应应如下所示：

 <code class="language-graphql" data-lang="graphql">{
  "author": [
    {
      "id": "1",
      "name": "Dan",
      "posts": [
        {
          "title": "Introducing Hooks"
        },
        {
          "title": "React vs Vue"
        }
      ]
    },
    {
      "id": "2",
      "name": "Ryan Florence",
      "posts": [
        {
          "title": "Context API"
        },
        {
          "title": "React + Redux"
        }
      ]
    }
  ]
}</code>

上面使用的查询在 条件 - 的和表之间的后端执行联接操作。此条件由指令的参数 （、 、 ） 派生，我们前面提到过。你可以[从这里](https://zshipu.com/t?url=../essentials/data-modelling/types-and-directives/#link-directive)阅读更多关于指令。```author``````post``````author.id == post.author_id``````table``````from``````to``````@link``````@link```

## 结论

在 MySQL 顶部设置 GraphQL 层并不难。只需将空间云指向 MySQL 实例，即可在应用程序中使用 GraphQL。

作为一种优势，GraphQL 开辟了大量新的可能性，如执行联接，使已经流行的 MySQL 更易于使用。我们对此非常兴奋，并且将加倍降低我们的 GraphQL 支持更加稳健。

MySQL 的声明性架构使我们能够将更多精力放在应用程序上，而不是数据库上。

然而，未来似乎是惊人的。能够与 MySQL 和其他 NoSQL 数据库进行[跨数据库联接](https://zshipu.com/t?url=https://docs.spaceuptech.com/essentials/queries/joins/)，这意味着我们可以构建企业级应用，利用两全其美的优势。

显示你的支持❤️[给它一个明星在Github。](https://zshipu.com/t?url=https://github.com/spaceuptech/space-cloud)
