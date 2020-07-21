
title: GraphQL 作为微服务的 API 网关
author: 知识铺
date: 2020-06-14 21:10:27
tags:
---
  

[GraphQL](https://zshipu.com/t?url=http://graphql.org/)早在2015年就向公众发布，就像一只在圈养中饲养的动物一样，它在野外的第一步是胆怯的，基本上被忽视了。然而，到目前为止，它已经获得了一些重大的轰动，而且有充分的理由：它解决了标准 REST API 体系结构中固有的一些最棘手的问题。

具体来说，GraphQL 允许您在不进行版本控制的情况下自然地发展 API，它提供了可行的文档，避免了过度和不足提取的问题，并且它提供了一种通过单个请求聚合来自多个源的数据的便捷方法。一旦您通过非常规的方法和欺骗性的"类似 JSON"语法（这来自那些带给我们 React 及其"类似 HTML"语法的人），您可以开始欣赏其功能和灵活性。

如何在 API 网关中利用 GraphQL？它似乎是一个完美的解决方案，用于与多个微服务交互，每个微服务都专用于单个资源类型。好消息是，_您可以在_API 网关中使用 GraphQL，并且它可以与标准 REST 路由并驾齐驱。所以在某些情况下，你可以有你的蛋糕，也吃它。

[推文""GraphQL 可能是与多个微服务交互的完美解决方案"]

## GraphQL in a Nutshell

在进入网关代码之前，让我们先回顾一下 GraphQL 的横向。与 REST 应用程序不同，GraphQL 实现依赖于单个终结点。所有 GraphQL 都使用查询向该终结点请求将数据（_始终_发布，永远不会获取）到该终结点，该查询描述正在请求哪些资源和字段。

GraphQL 将读取操作区分为"查询"，将操作区分为"突变"。为了支持查询，GraphQL 实现将定义一个根查询对象，该对象枚举所有可供查询的资源类型（以及它们的字段和数据类型）。您可以将其视为定义表和列的数据库架构。

为了支持突变，GraphQL 实现将定义一个根突变对象，该对象枚举所有可用的突变及其属性。突变可以被认为是行动，_例如_，或。即使在单个语言或框架中，对于这些 GraphQL 组件应存在的位置也没有标准结构，但这些关键元素必须存在于任何 GraphQL 实现中的某处。```createUser``````updateOrder```

## 同时使用GraphQL 和 REST 端点

仅仅因为我们的 API 网关定义了 GraphQL 终结点，并不意味着我们也不能有其他终结点！完全可以在相同的应用程序中定义传统的 REST 路由。

由于我们希望避免在网关中复制代码，尤其是向微服务发出请求的代码，因此我们必须选择由哪种方法负责。我们可以剖析 GraphQL 查询并将其转换为相应的 REST 请求，也可以将 REST 请求转换为其 GraphQL 等效项。

事实证明，后者更简单，所以我们建议的诀窍是：将对REST路由的请求转换为GraphQL。不需要复制与微服务交互的代码，因为 REST 路由只是充当 GraphQL 的转换层。

## 在代码中

现在我们已经描述了我们的攻击计划，让我们来看看一些代码！演示这些示例的[存储库](https://zshipu.com/t?url=https://github.com/fireproofsocks/graphql-example)在[Github](https://zshipu.com/t?url=https://github.com/fireproofsocks/graphql-example)上可用

这是一个Node.js应用程序使用流行的[快速框架](https://zshipu.com/t?url=http://expressjs.com/)。您应该能够按照 README 中的说明克隆和安装应用程序。

从命令行运行应启动应用程序并开始侦听端口 4000。将浏览器指向查看 GraphQL 终结点。右侧将显示任何已注册的资源类型及其字段，因此您可以马上查看 GraphQL 如何提供一些可行的文档。```yarn run start``````http://localhost:4000/graphql```

我们可以运行示例查询来按其 ID 查找单个用户：

```
{ users(_id: 3){ name }
}
```
The result should be:
```
{
  "data": {
    "users": [
      {
        "name": "Tammy"
      }
    ]
  }
}
```

处理此代码位于 内部，它围绕对象旋转。这就是响应的结构并提供可行的文档的原因。```src/users.js``````GraphQLObjectType```

## REST 等效项

接下来，让我们来看看如何支持获取相同数据的 REST 终结点。查找单个用户记录的传统路由将遵循 的模式。查看 内部，看看它是如何注册路由的：```/users/:userId``````index.js```

```
const users = require('./src/rest/user');
// ... app.use('/users', users);
```

这是相当标准的快速路由的东西。让我们看一下该文件，看看它是如何将请求转换为 GraphQL 的。```src/rest/user.js```

```
const app = require('express');
const router = app.Router();
import rootSchema from '../app';
import {graphql} from 'graphql'
const query = (q, vars) => {
    return graphql(rootSchema, q, null, null, vars)
}
// Transform response to JSON API format
// (if desired)
const transform = (result) => {
    const user = result.data.users[0];
    return { data: { type: 'user', id: user._id, attributes: { name: user.name }
        }
    }
}
// REST request to get a user router.get('/:userId', (req, res) => {
    // Convert the request into a GraphQL query string query("query{users(_id:" + req.params.userId + "){_id, name}}")
        .then(result => {
            const transformed = transform(result) res.send(transformed)
        })
        .catch(err => { res.sendStatus(500)
        })
})
module.exports = router;
```

这真的是魔法发生的地方。路由的已注册回调将收集查询字符串并将其传递给 GraphQL：

```
query("query{users(_id:" + req.params.userId + "){_id, name}}")
```

查询字符串映射出该"类似 JSON"语法中的查询对象 - 是的，它似乎是多余的，但有一个根查询节点，它包裹我们在交互式 GraphQL 页上使用的查询部分。

此方法可能会提醒您以前，在 ORM 之前，您必须手动组装查询字符串。在将请求参数放入查询字符串之前对其进行筛选可能更合适，但由于它由 GraphQL 解释，因此可能是安全的 — 如果字符串无效，GraphQL 会简单地阻塞。

此输出中包括一个变压器功能，该函数将默认 GraphQL 响应转换为[JSON API](https://zshipu.com/t?url=http://jsonapi.org/)格式，但这可能是您希望保留的内容，也可能不是您希望保留的内容。

您应该能够通过请求[http://localhost:4000/users/2](https://zshipu.com/t?url=http://localhost:4000/users/2)等 URL 并获取响应（如：

```
{
    "data": {
        "type": "user",
        "id": "2",
        "attributes": {
            "name": "João"
        }
    }
}
```
## 微服务的请求

更复杂的示例涉及使用web请求实际触及微服务。这可以通过请求某天的励志名言来实现 [http://quotes.rest/qod.json?category=inspire](https://zshipu.com/t?url=http://quotes.rest/qod.json?category=inspire).

为了为这个数据添加GraphQL支持，我们需要做三件事:

1.  修改根查询对象 ```src/app.js```
2.  中定义引用资源类型 .```src/quote.js```
3.  定义一个将从远程API中获取数据的服务```src/services/quote.js```

### 修改根查询

首先，我们需要将资源类型添加到内部的GraphQL根查询对象

inside :```src/app.js```


```
// src/app.js
import {
    GraphQLObjectType,
    GraphQLSchema,
} from 'graphql/type';
import userQuery from './users';
import agendaQuery from './agenda-interface';
import quoteQuery from './quote';
const query = new GraphQLObjectType({ name: 'RootQueryType', fields: { users: userQuery, agenda: agendaQuery, quote: quoteQuery },
});
export default new GraphQLSchema({ query,
});
```
### 定义查询类型

引号查询对象在 中定义 - 这几乎与用于用户查询的结构完全相同，但它引用一个服务类，其作业将是与远程微服务交互。```src/quote.js```

```
// src/quote.js
import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString
} from 'graphql/type';
import { getQuote } from './services/quote'
export const QuoteType = new GraphQLObjectType({ name: 'Quote', description: 'Quote of the day from API service', fields: () => ({ id: { type: GraphQLString, description: 'Quote id',
        }, quote: { type: new GraphQLNonNull(GraphQLString), description: 'The text of the quote',
        }, author: { type: GraphQLString, description: 'The person to whom the quote is attributed',
        }, date: { type: GraphQLString, description: 'Date in YYYY-MM-DD format',
        }
    })
});
export default { type: QuoteType, resolve: getQuote }
```

这完全取决于函数，我们接下来将讨论该函数。```getQuote()```

### 定义用于检索远程数据的服务

函数在 中定义：```getQuote()``````src/services/quote.js```

```
// src/services/quote.js
/**
 * This is where the app calls the microservice responsible for the "Quote" resource type.
 */
import fetch from 'universal-fetch'
export const getQuote = () => {
        const url = 'http://quotes.rest/qod.json?category=inspire'
        return fetch(url)
            .then(response => {
                return response.json()
            })
            .then(json => {
                return transform(json)
            })
            .catch(err => { console.trace(err)
            })
    }
// Transform the raw microservice output into
// fields/types defined by the GraphQL type
const transform = (json) => {
    const
        { contents } = json,
        { quotes } = contents, quote = quotes[0]
    return { id: quote.id, quote: quote.quote, author: quote.author, date: quote.date }
}
```

此处的方法将微服务使用的任何格式转换为 GraphQL 为此资源类型定义的格式。如果需要将字段添加到响应中，必须将它们添加到 中的对象。```transform``````QuoteType``````src/quote.js```

完成这些部件后，您应该能够使用 GraphQL 进行查询：

```

{ quote{ quote, author }
}

```
### 添加 REST 支持

与以前一样，路由在文件中注册：```index.js```


```
const quotes = require('./src/rest/quote');
// ... app.use('/quote', quotes);
```

REST 请求充当 GraphQL 语法的转换器。

```
// src/rest/quote.js
const app = require('express');
const router = app.Router();
import rootSchema from '../app';
import {graphql} from 'graphql'
const query = (q, vars) => {
    return graphql(rootSchema, q, null, null, vars)
}
// Transform response to JSON API format
const transform = (result) => {
    const quote = result.data.quote;
    return { data: { type: 'quote', id: quote.id, attributes: { quote: quote.quote, author: quote.author, date: quote.date }
        }
    }
}
// REST request to get a quote router.get('/', (req, res) => {
    // Convert the request into a GraphQL query string query("query{quote{id, quote, author, date}}")
        .then(result => {
            const transformed = transform(result) res.send(transformed)
        })
        .catch(err => { res.sendStatus(500)
        })
})
module.exports = router;
```


完成后，REST 终结点在[http://localhost:4000/quote](https://zshipu.com/t?url=http://localhost:4000/quote)可用。

> 请注意，报价服务每小时有 10 个请求的限制，因此只能适度使用演示。

## 优点

现在，您已经了解如何将 API 网关既具有 GraphQL 实现，又支持标准 REST 路由，因此优势应该显而易见：

*   你可以有你的API蛋糕，也吃它。图形QL还是REST？两者！
*   您可以利用 GraphQL 的内置优势，从多个服务聚合数据。

## 缺点

这种方法的大多数缺点通常与 GraphQL 有关。在填充 API 网关的角色时，GraphQL 最大的问题是它在_单个_终结点上运行。

API 网关通常_为每个路由_定义授权规则、限制速率和缓存时间。但是，由于 GraphQL 仅使用一个终结点，因此几乎不可能为任何内容定义特定于路由的规则。因此，您可能需要在单独的层中，甚至微服务本身中写入授权、限制和缓存逻辑。

这会产生自己的臭代码混乱，因为解决方案最终将削弱我们期望从网关获得的一些最基本的功能。

如果您的 API 未公开使用，则您不会进行无限数量的查询变体，因此，使用允许客户端请求任何可能的资源和字段组合的 GraphQL 解释器可以说是超量计算。长期以来，支持少数具有已知响应属性的用例在很多设置中效果很好，因此可能不需要重新发明该特定车轮。

尝试同时使用 GraphQL 和 REST 的另一个缺点是文档：无法保证 REST 终结点具有任何文档，更不用说与 GraphQL 查询对象保持同步的文档，因此，如果您选择在 API 网关中同时支持 GraphQL 和 REST，则可能会邀请一些不一致和忙碌工作。

## 总结

我在这里介绍的解决方案对一些人来说可能是一个有趣的分心，或者它可能是一个可行的解决方案，这取决于您的需求。尽管可以在单个应用程序中将 GraphQL 和 REST API 共存，但更困难的问题是这种组合是否可行。

与围绕微服务和 API 网关的大多数问题一样，没有简单的正确和错误答案，只有权衡，只有您才能决定哪些解决方案最适合您的需求。

[通过@fireproofsocks"将"GraphQL 作为微服务的 API 网关"推文"

### 与朋友分享这个帖子！

### _相关内容_

 [![An Introduction to GraphQL via the GitHub API](https://i1.wp.com/blog.codeship.com/wp-content/uploads/2017/03/scopes.png?resize=350%2C200&ssl=1)](https://zshipu.com/t?url=https://rollout.io/blog/an-introduction-to-graphql-via-the-github-api/ "An Introduction to GraphQL via the GitHub API

RESTful, JSON-delivering APIs are today's default choice when building an API. However, there's a new API kid on the block that's generating considerable attention: GraphQL. GraphQL is an entirely new way to consume and build APIs. Done right, you can build wonderfully tight integrations that aren't possible with REST APIs.…")
#### [通过 GitHub API 对 GraphQL 的简介](https://zshipu.com/t?url=https://rollout.io/blog/an-introduction-to-graphql-via-the-github-api/ "An Introduction to GraphQL via the GitHub API

RESTful, JSON-delivering APIs are today's default choice when building an API. However, there's a new API kid on the block that's generating considerable attention: GraphQL. GraphQL is an entirely new way to consume and build APIs. Done right, you can build wonderfully tight integrations that aren't possible with REST APIs.…")

RESTful, JSON-delivering APIs are today's default choice when building an API. However, there's a new API kid on the block that's generating considerable attention: GraphQL. GraphQL is an entirely new way to consume and build APIs. Done right, you can build wonderfully tight integrations that aren't possible with REST APIs.…

三月 8， 2017

在"发展"

#### [API 网关和微服务的设计模式](https://zshipu.com/t?url=https://rollout.io/blog/design-patterns-in-api-gateways-and-microservices/ "Design Patterns in API Gateways and Microservices

For all the buzz about microservices and API gateways, finding specifics can prove surprisingly difficult. I am reminded of the cartoon by Sidney Harris where the first step of a complex mathematical formula is presented, then a miracle occurs, and the sudden appearance of the glorious solution prompts an observer…")

对于关于微服务和 API 网关的所有热议，查找细节可能证明极其困难。我想起了西德尼·哈里斯的漫画，其中提出了复杂数学公式的第一步，然后奇迹发生，而光荣解决方案的突然出现促使观察者...

十月 26， 2017

在"发展"

#### [如何在 Rails 中实现图形QL API](https://zshipu.com/t?url=https://rollout.io/blog/how-to-implement-a-graphql-api-in-rails/ "How to Implement a GraphQL API in Rails

GraphQL came out of Facebook a number of years ago as a way to solve a few different issues that typical RESTful APIs are prone to. One of those was the issue of under- or over-fetching data. Under-fetching is when the client has to make multiple roundtrips to the server…")

GraphQL在几年前从Facebook上出来，作为解决一些典型的RESTful API容易出现的不同问题的方法。其中之一是数据提取不足或过度提取的问题。正在获取不足是客户端必须多次往返服务器...

