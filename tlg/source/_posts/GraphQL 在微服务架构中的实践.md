
title: GraphQL 在微服务架构中的实践
author: 知识铺
date: 2020-06-14 20:54:37
tags:
---
  

在过去的将近半年的时间里，作者一直在使用 GraphQL 这门相对新兴的技术开发 Web 服务，与更早出现的 SOAP 和 REST 相比，GraphQL 其实提供的是一套相对完善的查询语言，而不是类似 REST 的设计规范，所以需要语言的生态提供相应的框架支持，但是由于从它开源至今也只有两三年的时间，所以在使用的过程中，尤其是在微服务架构中实践时确实还会遇到很多问题。

#### GraphQL

简单对象访问协议（SOAP）从今天来看已经是一门非常古老的 Web 服务技术了，虽然很多服务仍然在使用遵循 SOAP 的接口，但是到今天 REST 风格的面向资源的 API 接口已经非常深入人心，也非常的成熟；但是这篇文章要介绍的主角其实是另一门更加复杂、完备的查询语言 GraphQL。

作为 Facebook 在 2015 年推出的查询语言，GraphQL 能够对 API 中的数据提供一套易于理解的完整描述，使得客户端能够更加准确的获得它需要的数据，目前包括 Facebook、Twitter、GitHub 在内的很多公司都已经在生产环境使用 GraphQL 提供 API；其实无论我们是否决定生产环境中使用 GraphQL，它确实是一门值得学习的技术。

#### 类型系统

GraphQL 的强大表达能力主要还是来自于它完备的类型系统，与 REST 不同，它将整个 Web 服务中的全部资源看成一个有连接的图，而不是一个个资源孤岛，在访问任何资源时都可以通过资源之间的连接访问其它的资源。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmcpIPia0XA4LuBpBgPVbk4sLMxdgqYE18MP3rBDBbu7HLrnkpOOBAIEA/640?wx_fmt=png)

如上图所示，当我们访问 User 资源时，就可以通过 GraphQL 中的连接访问当前 User 的 Repo 和 Issue 等资源，我们不再需要通过多个 REST 的接口分别获取这些资源，只需要通过如下所示的查询就能一次性拿到全部的结果：

1.  { user { id

2.  email

3.  username

4.  repos(first: 10) { id

5.  url

6.  name

7.  issues(first: 20) { id

8.  author

9.  title            } } }  }

GraphQL 这种方式能够将原有 RESTful 风格时的多次请求聚合成一次请求，不仅能够减少多次请求带来的延迟，还能够降低服务器压力，加快前端的渲染速度。它的类型系统也非常丰富，除了标量、枚举、列表和对象等类型之外，还支持接口和联合类型等高级特性。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmbd0t3oJQ37qgxVlVoQ6py49zII09JVcyUYDuaicUUDClRibDVdhsOT5Q/640?wx_fmt=png)

为了能够更好的表示非空和空字段，GraphQL 也引入了 Non-Null 等标识代表非空的类型，例如 String! 表示非空的字符串。

<code class="hljs css js-evernote-checked" data-evernote-id="2783">schema { query: Query mutation: Mutation  }</code>

Schema 中绝大多数的类型都是普通的对象类型，但是每一个 Schema 中都有两个特殊类型：query 和 mutation，它们是 GraphQL 中所有查询的入口，在使用时所有查询接口都是 query 的子字段，所有改变服务器资源的请求都应该属于 mutation 类型。

#### 集中式 vs 分散式

GraphQL 以图的形式将整个 Web 服务中的资源展示出来，其实我们可以理解为它将整个 Web 服务以 “SQL” 的方式展示给前端和客户端，服务端的资源最终都被聚合到一张完整的图上，这样客户端可以按照其需求自行调用，类似添加字段的需求其实就不再需要后端多次修改了。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmyR71x7DiaGnqibenBAmYcYMInTnYYpgTQmQNJgxJHia7cHuP49voOKgbQ/640?wx_fmt=png)

与 RESTful 不同，每一个的 GraphQL 服务其实对外只提供了一个用于调用内部接口的端点，所有的请求都访问这个暴露出来的唯一端点。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmplG5bX8tQMAGsqYlibhDV7XlXumVccDEwvmOGokLNfkb1bSpCDaQGuw/640?wx_fmt=png)

GraphQL 实际上将多个 HTTP 请求聚合成了一个请求，它只是将多个 RESTful 请求的资源变成了一个从根资源 Post 访问其他资源的 Comment 和 Author 的图，多个请求变成了一个请求的不同字段，从原有的分散式请求变成了集中式的请求，这种方式非常适合单体服务直接对外提供 GraphQL 服务，能够在数据源和展示层建立一个非常清晰的分离，同时也能够通过一些强大的工具，例如 GraphiQL 直接提供可视化的文档；但是在业务复杂性指数提升的今天，微服务架构成为了解决某些问题时必不可少的解决方案，所以如何在微服务架构中使用 GraphQL 提高前后端之间的沟通效率并降低开发成本成为了一个值得考虑的问题。

#### Relay 标准

如果说 RESTful 其实是客户端与服务端在 HTTP 协议通信时定义的固定标准，那么 Relay 其实也是我们在使用 GraphQL 可以遵循的一套规范。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmOEBU6kSG169nbricLGB4Fic0CK0gK9JEl7kxaficjMTpibJ3SFqSJlPbTg/640?wx_fmt=png)

这种标准的出现能够让不同的工程师开发出较为相似的通信接口，在一些场景下，例如标识对象和分页这种常见的需求，引入设计良好的标准能够降低开发人员之间的沟通成本。

Relay 标准其实为三个与 API 有关的最常见的问题制定了一些规范：

*   提供能够重新获取对象的机制；

*   提供对如何对连接进行分页的描述；

*   标准化 mutation 请求，使它们变得更加可预测；

通过将上述的三个问题规范化，能够极大地增加前后端对于接口制定和对接时的工作效率。

#### 对象标识符

Node 是 Relay 标准中定义的一个接口，所有遵循 Node 接口的类型都应该包含一个 id 字段：

<code class="hljs css js-evernote-checked" data-evernote-id="2787">interface Node { id: ID!  } type Faction : Node { id: ID! name: String ships: ShipConnection  } type Ship : Node { id: ID! name: String  }</code>

Faction 和 Ship 两个类型都拥有唯一标识符 id 字段，我们可以通过该标识符重新从服务端取回对应的对象，Node 接口和字段在默认情况下会假定整个服务中的所有资源的 id 都是不同的，但是很多时候我们都会将类型和 id 绑定到一起，组合后才能一个类型特定的 ID；为了保证 id 的不透明性，返回的 id 往往都是 Base64 编码的字符串，GraphQL 服务器接收到对应 id 时进行解码就可以得到相关的信息。

#### 连接与分页

在一个常见的数据库中，一对多关系是非常常见的，一个 User 可以同时拥有多个 Post 以及多个 Comment，这些资源的数量在理论上不是有穷的，没有办法在同一个请求全部返回，所以要对这部分资源进行分页。

1.  query { viewer { name

2.  email

3.  posts(first: 1) { edge { cursor

4.  node { title} } } }  }

Relay 通过抽象出的『连接模型』为一对多的关系提供了分片和分页的支持，在 Relay 看来，当我们获取某一个 User 对应的多个 Post 时，其实是得到了一个 PostConnection，也就是一个连接：

<code class="hljs perl js-evernote-checked" data-evernote-id="2809">{ "viewer": { "name": "Draveness", "email": "i@draveness.me", "posts": { "edges": [ "cursor": "YXJyYXljb25uZWN0aW9uOjI=", "node": { "title": "Post title", } ] } }  }</code>

在一个 PostConnection 中会存在多个 PostEdge 对象，其中的 cursor 就是我们用来做分页的字段，所有的 cursor 其实都是 Base64 编码的字符串，这能够提醒调用方 cursor 是一个不透明的指针，拿到当前 cursor 后就可以将它作为 after 参数传到下一个查询中：

1.  query { viewer { name

2.  email

3.  posts(first: 1, after: "YXJyYXljb25uZWN0aW9uOjI=") { edge { cursor

4.  node { title} } } }  }

当我们想要知道当前页是否是最后一页时，其实只需要使用每一个连接中的 PageInfo 对象，其中包含了很多与分页相关的信息，一个连接对象中一般都有以下的结构和字段，例如：Edge、PageInfo 以及游标和节点等。

<code class="hljs js-evernote-checked" data-evernote-id="2833">PostConnection  ├── PostEdge  │  ├── cursor │  └── Post  └── PageInfo ├── hasNextPage├── hasPreviousPage├── startCursor└── endCursor</code>

Relay 使用了非常多的功能在连接周围构建抽象，让我们能够更加方便地管理客户端中的游标，整个连接相关的规范其实特别复杂，可以阅读 Relay Cursor Connections Specification 了解更多与连接和游标有关的设计。

#### 可变请求

每一个 Web 服务都可以看做一个大型的复杂状态机，这个状态机对外提供两种不同的接口，一种接口是查询接口，它能够查询状态机的当前状态，而另一种接口是可以改变服务器状态的可变操作，例如 POST、DELETE 等请求。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmibMePsENX8ENiaqYibujcpMsU1pon5NH0NN0qkicZRlCFvemUcjib4TXusA/640?wx_fmt=png)

按照约定，所有的可变请求都应该以动词开头并且它们的输入都以 Input 结尾，与之相对应的，所有的输出都以 Payload 结尾：

<code class="hljs css js-evernote-checked" data-evernote-id="2842">input IntroduceShipInput { factionId: ID! shipName: String! clientMutationId: String!  } type IntroduceShipPayload { faction: Faction ship: Ship clientMutationId: String!  }</code>

除此之外，可变请求还可以通过传入 clientMutationId 保证请求的幂等性。

#### 小结

Facebook 的 Relay 标准其实是一个在 GraphQL 上对于常见领域问题的约定，通过这种约定我们能够减少工程师的沟通成本和项目的维护成本并在多人协作时保证服务对外提供接口的统一。

#### N + 1 问题

在传统的后端服务中，N + 1 查询的问题就非常明显，由于数据库中一对多的关系非常常见，再加上目前大多服务都使用 ORM 取代了数据层，所以在很多时候相关问题都不会暴露出来，只有真正出现性能问题或者慢查询时才会发现。

<code class="hljs sql js-evernote-checked" data-evernote-id="2852">SELECT * FROM users LIMIT 3; SELECT * FROM posts WHERE user_id = 1; SELECT * FROM posts WHERE user_id = 2; SELECT * FROM posts WHERE user_id = 3; SELECT * FROM users LIMIT 3; SELECT * FROM posts WHERE user_id IN (1, 2, 3);</code>

GraphQL 作为一种更灵活的 API 服务提供方式，相比于传统的 Web 服务更容易出现上述问题，类似的问题在出现时也可能更加严重，所以我们更需要避免 N + 1 问题的发生。

数据库层面的 N + 1 查询我们可以通过减少 SQL 查询的次数来解决，一般我们会将多个 = 查询转换成 IN 查询；但是 GraphQL 中的 N + 1 问题就有些复杂了，尤其是当资源需要通过 RPC 请求从其他微服务中获取时，更不能通过简单的改变 SQL 查询来解决。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmaJ2uAMbAicrT1fZSVWd9S3HuCwE3kfgPRIHrib9kQ61cOLJnbdIKm4gw/640?wx_fmt=png)

在处理 N + 1 问题之前，我们要真正了解如何解决这一类问题的核心逻辑，也就是将多次查询变成一次查询，将多次操作变成一次操作，这样能够减少由于多次请求增加的额外开销 —— 网络延迟、请求解析等；GraphQL 使用了 DataLoader 从业务层面解决了 N + 1 问题，其核心逻辑就是整个多个请求，通过批量请求的方式解决问题。

#### 微服务架构

微服务架构在当下已经成为了遇到业务异常复杂、团队人数增加以及高并发等需求或者问题时会使用的常见解决方案，当微服务架构遇到 GraphQL 时就会出现很多理论上的碰撞，会出现非常多的使用方法和解决方案。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmbWYW9WdX0ZCWVXDARKxOXQ96bHX9XKeuZe1jx47KkUJh0ehCdM46hA/640?wx_fmt=png)

在这一节中，我们将介绍在微服务架构中使用 GraphQL 会遇到哪些常见的问题，对于这些问题有哪些解决方案需要权衡，同时也会分析 GraphQL 的设计理念在融入微服务架构中应该注意什么。

当我们在微服务架构中融入 GraphQL 的标准时，会遇到三个核心问题，这些问题其实主要是从单体服务迁移到微服务架构这种分布式系统时引入的一系列技术难点，这些技术难点以及选择之间的折衷是在微服务中实践 GraphQL 的关键。

#### Schema 设计

GraphQL 独特的 Schema 设计其实为整个服务的架构带来了非常多的变数，如何设计以及暴露对外的接口决定了我们内部应该如何实现用户的认证与鉴权以及路由层的设计。

从总体来看，微服务架构暴露的 GraphQL 接口应该只有两种；一种接口是分散式的，每一个微服务对外暴露不同的端点，分别对外界提供服务。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmsUI0n8GhwTEicRjNFFARNNb5gkI5RibRfJxKQreHIibBQqsPQT4bk0MLg/640?wx_fmt=png)

在这种情况下，流量的路由是根据用户请求的不同服务进行分发的，也就是我们会有以下的一些 GraphQL API 服务：

<code class="hljs ruby js-evernote-checked" data-evernote-id="2858">http://draveness.me/posts/api/graphql http://draveness.me/comments/api/graphql http://draveness.me/subscriptions/api/graphql</code>

我们可以看到当前博客服务总共由内容、评论以及订阅三个不同的服务来提供，在这时其实并没有充分利用 GraphQL 服务的好处，当客户端或前端同时需要多个服务的资源时，需要分别请求不同服务上的资源，并不能通过一次 HTTP 请求满足全部的需求。

另一种方式其实提供了一种集中式的接口，所有的微服务对外共同暴露一个端点，在这时流量的路由就不是根据请求的 URL 了，而是根据请求中不同的字段进行路由。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdm2NuPxKvzabM2jJ4ic4qxsfZFAAaCwQQGzTMzXIuxh6ntTiaHw6OYKE1w/640?wx_fmt=png)

这种路由的方式并不能够通过传统的 nginx 来做，因为在 nginx 看来整个请求其实只有一个 URL 以及一些参数，我们只有解析请求参数中的查询才能知道客户端到底访问了哪些资源。

<code class="hljs java js-evernote-checked" data-evernote-id="2861">http://draveness.me/api/graphql</code>

请求的解析其实是对一颗树的解析，这部分解析其实是包含业务逻辑的，在这里我们需要知道的是，这种 Schema 设计下的请求是按照 field 进行路由的，GraphQL 其实帮助我们完成了解析查询树的过程，我们只需要对相应字段实现特定的 Resolver 处理返回的逻辑就可以了。

然而在多个微服务提供 Schema 时，我们需要通过一种机制将多个服务的 Schema 整合起来，这种整合 Schema 的思路最重要的就是需要解决服务之间的重复资源和冲突字段问题，如果多个服务需要同时提供同一个类型的基础资源，例如：User 可以从多种资源间接访问到。

1.  { post(id: 1) { user { id

2.  email    } id

3.  title

4.  content  }

作为微服务的开发者或者提供方来讲，不同的微服务之间的关系是平等的，我们需要一个更高级别或者更面向业务的服务对提供整合 Schema 的功能，确保服务之间的字段与资源类型不会发生冲突。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmp18XteibswCFAplqcWvdY0VrDC5ZP0icjA8Mic7FmLcJFK2STvSTtXW4Q/640?wx_fmt=png)
#### 前缀

如何解决冲突资源从目前来看有两种不同的方式，一种是为多个服务提供的资源添加命名空间，一般来说就是前缀，在合并 Schema 时，通过添加前缀能够避免不同服务出现重复字段造成冲突的可能。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmTJY8pGylPSxBPib7fFo8dYoMvnajp6r4UwzcibT3Xjg8ianbIicauXf9zw/640?wx_fmt=png)

SourceGraph 在实践 GraphQL 时其实就使用了这种增加前缀的方式，这种方式的实现成本比较低，能够快速解决微服务中 Schema 冲突的问题，读者可以阅读 GraphQL at massive scale: GraphQL as the glue in a microservice architecture 一文了解这种做法的实现细节；这种增加前缀解决冲突的方式优点就是开发成本非常低，但是它将多个服务的资源看做孤岛，没有办法将多个不同服务中的资源关系串联起来，这对于中心化设计的 GraphQL 来说其实会造成一定体验上的丢失。

#### 粘合

除了增加前缀这种在工程上开发成本非常低的方法之外，GraphQL 官方提供了一种名为 Schema Stitching 的方案，能够将不同服务的 GraphQL Schema 粘合起来并对外暴露统一的接口，这种方式能够将多个服务中的不同资源粘合起来，能够充分利用 GraphQL 的优势。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmZOTx7cBM04ficrjzfQXpf95vFUB6FTMe62qqTU4TCCibl8vLWMSw5ryw/640?wx_fmt=png)

为了打通不同服务之间资源的壁垒、建立合理并且完善的 GraphQL API，我们其实需要付出一些额外的工作，也就是在上层完成对公共资源的处理；当对整个 Schema 进行合并时，如果遇到公共资源，就会选用特定的 Resolver 进行解析，这些解析器的逻辑是在 Schema Stitching 时指定的。

1.  const linkTypeDefs = `
     extend type User {

2.  chirps: [Chirp]

3.  }

4.  `;

我们需要在服务层上的业务层对服务之间的公共资源进行定义，并为这些公共资源建立新的 Resolver，当 GraphQL 解析当公共资源时，就会调用我们在合并 Schema 时传入的 Resolver 进行解析和处理。

<code class="hljs go js-evernote-checked" data-evernote-id="2869">const mergedSchema = mergeSchemas({ schemas: [ chirpSchema, authorSchema, linkTypeDefs, ], resolvers: { User: { chirps: { fragment: `... on User { id }`, resolve(user, args, context, info) { return info.mergeInfo.delegateToSchema({ schema: chirpSchema, operation: 'query', fieldName: 'chirpsByAuthorId', args: { authorId: user.id, }, context, info, }); }, }, }, },  });</code>

在整个 Schema Stitching 的过程中，最重要的方法其实就是 mergeSchemas，它总共接受三个参数，需要粘合的 Schema 数组、多个 Resolver 以及类型出现冲突时的回调：

<code class="hljs vbscript js-evernote-checked" data-evernote-id="2895">mergeSchemas({ schemas: Array<string | GraphQLSchema | Array<GraphQLNamedType>>; resolvers?: Array<IResolvers> | IResolvers; onTypeConflict?: ( left: GraphQLNamedType, right: GraphQLNamedType, info?: { left: { schema?: GraphQLSchema; }; right: { schema?: GraphQLSchema; }; }, ) => GraphQLNamedType;  })</code>

Schema Stitching 其实是解决多服务共同对外暴露 Schema 时比较好的方法，这种粘合 Schema 的方法其实是 GraphQL 官方推荐的做法，同时它们也为使用者提供了 JavaScript 的工具，但是它需要我们在合并 Schema 的地方手动对不同 Schema 之间的公共资源以及冲突类型进行处理，还要定义一些用于解析公共类型的 Resolver；除此之外，目前 GraphQL 的 Schema Stitching 功能对于除 JavaScript 之外的语言并没有官方的支持，作为一个承载了服务发现以及流量路由等功能的重要组件，稳定是非常重要的，所以应该慎重考虑是否应该自研用于 Schema Stitching 组件。

#### 组合

除了上述的两种方式能够解决对外暴露单一 GraphQL 的问题之外，我们也可以使用非常传统的 RPC 方式组合多个微服务的功能，对外提供统一的 GraphQL 接口：

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmTtawJ3oALa6vFgwCiachAW4so55MQopOUd7Rj833u3329Lm5dibwzf5g/640?wx_fmt=png)

当我们使用 RPC 的方式解决微服务架构下 GraphQL Schema 的问题时，内部的所有服务组件其实与其他微服务架构中的服务没有太多区别，它们都会对外提供 RPC 接口，只是我们通过另一种方式 GraphQL 整合了多个微服务中的资源。

使用 RPC 解决微服务中的问题其实是一个比较通用同时也是比较稳定的解决方案，GraphQL 作为一种中心化的接口提供方式，通过 RPC 调用其他服务的接口并进行合并和整合其实也是一个比较合理的事情；在这种架构下，我们其实可以在提供 GraphQL 接口的情况下，也让各个微服务直接或者通过其他业务组件对外暴露 RESTful 接口，提供更多的接入方式。

虽然 RPC 的使用能为我们的服务提供更多的灵活性，同时也能够将 GraphQL 相关的功能拆分到单独的服务中，但是这样给我们带来了一些额外的工作量，它需要工程师手动拼接各个服务的接口并对外提供 GraphQL 服务，在遇到业务需求变更时也可能会导致多个服务的修改和更新。

#### 小结

从使用前缀、粘合到使用 RPC 组合各个微服务提供的接口，对外暴露的 Schema 其实是一个由点到面逐渐聚合的过程，同时实现的复杂度也会逐步上升。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmVdN3Ru7VtJtoGcGpj6uVia2WUsjdhswvFWx7FJHSibw11pibyntgDmoOA/640?wx_fmt=png)

在这三种方式中，作者并不推荐使用前缀的方式隔离多个微服务提供的接口，这种做法并没有充分利用 GraphQL 的好处，不如使用 RESTful 将多个服务的接口直接解耦，使用 GraphQL 反而是有一些滥用的感觉。

除了使用前缀的做法之外，无论是粘合还是组合都能够提供一个完整的 GraphQL 接口，它们两者都需要在直接对接用户的 GraphQL 服务中对各个微服务提供的接口进行整合，当我们使用 Schema Stitching 时，其实对后面的服务提出了更多的要求 —— 开发微服务的工程师需要掌握 GraphQL Schema 的设计与开发方法，与此同时，各个微服务之间的类型也可能出现冲突，需要在上层进行解决，不过这也减少了一些最前面的 GraphQL 服务的工作量。

在最后，使用组合方式就意味着整个架构中的 GraphQL 服务需要通过组合 RPC 的方式处理与 GraphQL 相关的全部逻辑，相当于把 GraphQL 相关的全部逻辑都抽离到了最前面。

经过几次架构的重构之后，在微服务架构中，作者更倾向于使用 RPC 组合各个微服务功能的方式提供 GraphQL 接口，虽然这样带来了更多的工作量，但是却能拥有更好的灵活性，也不需要其他微服务的开发者了解 GraphQL 相关的设计规范以及约定，让各个服务的职责更加清晰与可控。

#### 认证与授权

在一个常见的 Web 服务中，如何处理用户的认证以及鉴权是一个比较关键的问题，因为我们需要了解在使用 GraphQL 的服务中我们是如何进行用户的认证与授权的。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmGXjBcl2FIEOsJnTq0LeMzC4pibqm6jFjPsvDoiaSsI6VmhwHwcINn2SA/640?wx_fmt=png)

如果我们决定 Web 服务作为一个整体对外暴露的是 GraphQL 的接口，那么在很大程度上，Schema 设计的方式决定了认证与授权应该如何组织；作为一篇介绍 GraphQL 在微服务架构中实践的文章，我们也自然会介绍在不同 Schema 设计下，用户的认证与授权方式应该如何去做。

上一节中总共提到了三种不同的 Schema 设计方式，分别是：前缀、粘合和组合，这些设计方式在最后都会给出一个如下所示的架构图：

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmW0CsibDfM4ibX8UicYDkqicibzwARjN85Lwrk6V1u7LfESz0hWSNxaGdjeQ/640?wx_fmt=png)

使用 GraphQL 的所有结构最终都会由一个中心化的服务对外接受来自客户端的 GraphQL 请求，哪怕它仅仅是一个代理，当我们有了这张 GraphQL 服务的架构图，如何对用户的认证与授权进行设计就变得非常清晰了。

#### 认证

首先，用户的认证在多个服务中分别实现是大不合理的，如果需要在多个服务中处理用户认证相关的逻辑，相当于将一个服务的职责同时分给了多个服务，这些服务需要共享用户认证相关的表，users、sessions 等等，所以在整个 Web 服务中，由一个服务来处理用户认证相关的逻辑是比较合适的。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmQmRzXB38pqNsG8SaMTKYUSfUKkHyiaDQuQSwH7yozBlPIg8IXKjZn0g/640?wx_fmt=png)

这个服务既可以是作为网关代理的 GraphQL 服务本身，也可以是一个独立的用户认证服务，在每次用户请求时都会通过 RPC 或者其他方式调用该服务提供的接口对用户进行认证，用户的授权功能与认证就有一些不同了。

#### 授权

我们可以选择在 GraphQL 服务中增加授权的功能，也可以选择在各个微服务中判断当前用户是否对某一资源有权限进行操作，这其实是集中式跟分布式之间的权衡，两种方式都有各自的好处，前者将鉴权的权利留给了各个微服务，让它们进行自治，根据其业务需要判断请求者是否可以访问后者修改资源，而后者其实把整个鉴权的过程解耦了，内部的微服务无条件的信任来自 GraphQL 服务的请求并提供所有的服务。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmvLI4r09tSn9u0F6luuBuapia54ica68pB5EvfqpGDu9hkWPCNLdxVOag/640?wx_fmt=png)

上面的设计其实都是在我们只需要对外提供一个 GraphQL 端点时进行的，当业务需要同时提供 B 端、C 端或者管理后台的接口时，设计可能就完全不同了。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmFFwSSicJicUPMAzPx2BEIfloPsGpQpt6owibnHYrl6Picw12E5qdPhQH0Q/640?wx_fmt=png)

在这时，如果我们将鉴权的工作分给多个内部的微服务，每个服务都需要对不同的 GraphQL 服务（或者 Web 服务）提供不同的接口，然后分别进行鉴权；但是将鉴权的工作交给 GraphQL 服务就是一种比较好的方式了，内部的微服务不需要关心调用者是否有权限访问该资源，鉴权都由最外层的业务服务来处理，实现了比较好的解耦。

当然，完全的信任其他服务的调用其实是一个比较危险的事情，对于一些重要的业务或者请求调用可以通过外部的风控系统进行二次检查判断当前请求方调用的合法性。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdm1XpOrwYEm04X30eYp6S4DEQdxriaA8NWoyIP7ppZnVzKO9telXAG5Tw/640?wx_fmt=png)

> 如何实现一个完备并且有效的风控系统并不是这篇文章想要主要介绍的内容，读者可以寻找相关的资料了解风控系统的原理以及模型。

#### 小结

认证与授权的设计本来是系统中一件比较灵活的事情，无论我们是否在微服务架构中使用 GraphQL 作为对外的接口，将这部分逻辑交由直接对外暴露的服务是一种比较好的选择，因为直接对外暴露的服务中掌握了更多与当前请求有关的上下文，能够更容易地对来源用户以及其权限进行认证，而重要或者高危的业务操作可以通过额外增加风控服务管理风险，或者在路由层对 RPC 的调用方通过白名单进行限制，这样能够将不同的功能解耦，减少多个服务之间的重复工作。

#### 路由设计

作为微服务中非常重要的一部分，如何处理路由层的设计也是一个比较关键的问题；但是与认证与鉴权相似的是，Schema 的设计最终其实就决定了请求的路由如何去做。

GraphQL Schema Stitching 其实已经是一套包含路由系统的 GraphQL 在微服务架构的解决方案了，它能够在网关服务器 Resolve 请求时，通过 HTTP 协议将对应请求的片段交由其他微服务进行处理，整个过程不需要手动介入，只有在类型出现冲突时会执行相应的回调。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmgiaOQkia6BWOgk6ajYmMZXlQlib0FDu1awBEDo3riaUdCdzmcSQic41w6Pg/640?wx_fmt=png)

而组合的方式其实就相当于要手动实现 Schema Stitching 中转发请求的工作了，我们需要在对外暴露的 GraphQL 服务中实现相应字段的解析器调用其他服务提供的 HTTP 或者 RPC 接口取到相应的数据。

在 GraphQL 中的路由设计其实与传统微服务架构中的路由设计差不多，只是 GraphQL 提供了 Stitching 的相关工具用来粘合不同服务中的 Schema 并提供转发服务，我们可以选择使用这种粘合的方式，也可以选择在 Resolver 中通过 HTTP 或者 RPC 的方式来自获取用户请求的资源。

#### 架构的演进

从今年年初选择使用 GraphQL 作为服务对外暴露的 API 到现在大概有半年的事件，服务的架构也在不断演进和改变，在这个过程中确实经历了非常多的问题，也一次一次地对现有的服务架构进行调整，整个演进的过程其实可以分为三个阶段，从使用 RPC 组合的方式到 Schema Stitching 最后再回到使用 RPC。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmshLxI23picVUMGZEAbzgAbRraLyHEFqQAkFDHqDk7Z62T6EEjyEZdqw/640?wx_fmt=png)

虽然在整个架构演进的过程中，最开始和最终选择的技术方案虽然都是使用 RPC 进行通信，但是在实现的细节上却有着很多的不同以及差异，这也是我们在业务变得逐渐复杂的过程发现的。

#### 中心化 Schema 与 RPC

当整个项目刚刚开始启动时，其实就已经决定了使用微服务架构进行开发，但是由于当时选择使用的技术栈是 Elixir + Phoenx，所以很多基础设施并不完善，例如 gRPC 以及 Protobuf 就没有官方版本的 Elixir 实现，虽然有一些开源项目作者完成的项目，但是都并不稳定，所以最终决定了在 RabbitMQ 上简单实现了一个基于消息队列的 RPC 框架，并通过组合的方式对外提供 GraphQL 的接口。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmDubMcem1PRvnaGhTExBgM75VT4850gd6S9Qy3gwBia47R2vN8L2ibjpw/640?wx_fmt=png)

RabbitMQ 在微服务架构中承担了消息总线的功能，所有的 RPC 请求其实都被转换成了消息队列中的消息，服务在调用 RPC 时会向 RabbitMQ 对应的队列投递一条消息并持续监听消息的回调，等待其他服务的响应。

这种做法的好处就是 RabbitMQ 中的队列承担了『服务发现』的职能，通过队列的方式将请求方与服务方解耦，对 RPC 请求进行路由，所以下游的消费者（服务方）可以水平扩展，但是这种方式其实也可以由负载均衡来实现，虽然负载均衡由于并不清楚服务方的负载，所以在转发请求时的效果可能没有服务方作为消费者主动拉的效率高。

最关键的问题是，手搓的 RPC 框架作为基础服务如果没有经过充分的测试以及生产环境的考验是不成熟的，而且作为语言无关的一种调用方式，我们可能需要为很多语言同时实现 RPC 框架，这其实就带来了非常高的人力、测试和维护成本，现在来看不是一个非常可取的方法。

如果我们抛开语言不谈，在一个比较成熟的语言中使用 RPC 的方式进行通信，确实能降低很多开发和维护的成本，但是也有另外一个比较大的代价，当业务并不稳定需要经常变更时，内部服务会经常为对外暴露的 RPC 接口添加额外的字段，而这也会要求最前面的 GraphQL 服务做额外的工作：

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmrhmKiaRxs9VZukfZ9XQjARdjX5DYIIjN5pia8zxnmrbib3FffpVchYt1A/640?wx_fmt=png)

每一次服务的修改都会导致三个相关服务或仓库进行更新，这虽然是在微服务架构中是一件比较正常合理的事情，但是在项目的早期阶段这会导致非常多额外的工作量，这也是我们进行第一次架构迁移的主要原因。

#### 去中心化管理的 Schema

这里的去中心化其实并不是指 GraphQL 对外暴露多个端点，而是指 GraphQL 不同 field 的开发过程去中心化，为了解决中心化的 Schema 加上 RPC 带来的开发效率问题并且实践 GraphQL 官方提供的 Schema Stitching 解决方案，我们决定将 Schema 的管理去中心化，由各个微服务对外直接暴露 GraphQL 请求，同时将多个服务的 Schema 进行合并，以此来解决开发的效率问题。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmKEJhzx7s9P9iaaXA1LLkrbicOL1tAhZVRxNfN4tzqbeJgfNvrTer9edQ/640?wx_fmt=png)

使用 Schema Stitching 的方式能够将多个服务中不同的 GraphQL Schema 粘合成一个更大的 Schema，这种架构下最关键的组件就是用于 Schema 粘合的工具，在上面已经说到，除了 Javascript 之外的其他语言并没有官方的工具支持，也没有在生产环境中大规模使用，同时因为我们使用的也是一个比较小众的语言 Elixir，所以更不存在一个可以拆箱即用的工具了。

经过评估之后，我们决定在 GraphQL Elixir 实现 Absinthe 上进行一层包装，并对客户端的请求进行语法与语义的解析，将字段对应的树包装成子查询发送给下游的服务，最终再由最前面的 GraphQL 服务组合起来：

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmPa81JefcV98ZuNiaesq87KkvyZ9dicibeFD1BLibCoM3WZ8PicU1rdVZz1g/640?wx_fmt=png)

GraphQL 前端服务总共包含两个核心组件，分别是 GraphQL Stitcher 和 Dispatcher，其中前者负责向各个 GraphQL 服务请求 IntrospectionQuery 并将获得的所有 Schema 粘合成一颗巨大的树；当客户端进行请求时，Graphql Dispatcher 会通过语法解析当前的请求，并将其中不同的字段以及子字段转换成树后转发给对应的服务。

在实现 GraphQL Stitcher 的过程中，需要格外注意不同服务之间类型冲突的情况，我们在实现的过程中并没有支持类型冲突以及跨服务资源的问题，而是采用了覆盖的方式，这其实有很大的问题，内部的 GraphQL 服务其实并不知道整个 Schema 中有哪些类型是已经被使用的，所以经常会造成服务之间的类型冲突，我们只有在发现时手动增加前缀来解决冲突。

> 增加前缀是一个比较容易的解决冲突的办法，但是却并不是特别的优雅，使用这种方式的主要原因是，我们发现了由于权限系统的设计缺陷 —— 在引入 B 端用户时无法优雅的实现鉴权，所以选择使用一种比较简单的办法临时解决类型冲突的问题。

在开发各种内部服务时，我们通过 scope 的方式对用户是否有权限读写资源做了限制，内部服务在执行操作前会先检查请求的用户是否能够读写该资源，然后开始处理真正的业务逻辑，也就是说用户鉴权是发生在所有的内部服务中的。

当我们对外暴露的 GraphQL 服务仅仅是面向 C 端用户的时候，使用 scope 并且让内部服务进行鉴权其实能够满足 C 端对于接口的需求，但是当我们需要同时为 B 端用户提供 GraphQL 或者 RESTful 接口时，这种鉴权方式其实就非常尴尬了。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmRvFu5TEUoLj06YSqNpQe5VaE17ic0ibUCv1eN4AO05RnrOCdsxbRqICw/640?wx_fmt=png)

在微服务架构中，由于各个服务之间的数据库是隔离的，对于一条数据库记录来说，很多内部服务都只能知道当前记录属于哪个用户或者那些用户，所以对于 scope 来说传递资源、读写请求加上来源用户就能够让处理请求的服务判断当前的来源用户是否有权限访问该条记录。

这种结论基于我们做的一条假设 —— 微服务收到的所有请求其实都要求读写来源用户拥有的资源，所以在引入 B 端用户时就遇到了比较大的困难，我们采用的临时解决方案就是在当前用户的 scope 中添加一些额外的信息并在内部服务中添加新的接口满足 B 端查询的需要，但是由于 B 端对于资源的查询要求可能非常多样，当我们需要为不同的查询接口进行不同的权限限制，并且在 B 端用户也不能访问全部用户的资源时，scope 的方式就很难表现这种复杂的鉴权需求。

在这种 Schema 管理去中心化的架构中，我们遇到了两个比较重要的问题：

*   用于 Schema Stitching 的组件对于 Elixir 语言并没有官方或者大型开源项目的支持，手搓的组件在承载较大的服务负载时会有很大的压力，同时功能也有非常多不完善的地方；

*   在内部服务对于整个请求没有太多上下文的情况下，一旦遇到复杂的鉴权需求时，将鉴权交给内部服务的的设计方式会导致服务之间的耦合增加 —— 微服务之间需要不断传递请求的上下文用于鉴权，同时也增加了开发的成本；

#### 服务网格与 RPC

使用去中心化管理的 Schema 虽然在一定程度上减少了开发的工作，但是在这种架构下我们也遇到了两个不能接受的问题，为了解决这些问题，我们准备对当前的技术架构做出以下的修改，让各个服务能够更加灵活的通信： 

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmLeYMvbhs53qpDl6caJssFQCVyTyj4qukKibmcJVz9blAIC1lia0ibncsw/640?wx_fmt=png)

最新的架构设计中，我们使用 linkerd 来处理服务之间的通信，所有的内部服务不在独立对来源请求进行鉴权，它们只负责对外提供 RPC 接口，在这里使用 gRPC 和 Protobuf 对不同服务的接口进行管理，所有的鉴权都发生在最外层的 Web 服务中，面向 C 端用户的 GraphQL 服务以及面向 B 端用户的 Web 服务，分别会对来源的请求进行鉴权，通过鉴权后再向对应服务发起 RPC 请求，请求的路由和流量的转发都由 linkerd 完成。

> linkerd 是服务网格（Service Mesh）技术的一个实现，它是一个开源的网络代理，能够在不改变现有服务的基础上为服务提供服务发现、管理、监控等功能，我们在这篇文章中并不会展开介绍服务网格这门技术，有兴趣的读者可以查找相关的资料。

由于面向 B 端用户可能涉及到较多的查询请求，并且这些请求非常复杂，我们可以选择使用从库的方式同步其他服务的数据，在服务内部实现相应的查询功能，当然也可以使用数据中心或者仓库的方式将数据处理后提供给面向 B 端用户的外部服务。

![640?wx_fmt=png](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MevhBdsuY1lFQvrLxicjpCjkdmmNCcJ0icPQjFdjPuVcTwm5RU5uBeSIbTRMMpBBJ2Ft2e2Gglpiad3nUQ/640?wx_fmt=png)

这种服务组织方式其实更像是对第一版架构的修改，通过引入 linkerd 解决服务发现、路由以及治理的问题，将一些微服务通用的基础设施交给相对成熟的开源项目负责，而鉴权逻辑被上移到了几个直接对外暴露的 Web 服务中，内部的服务不再承担鉴权的工作，虽然在这时依然会存在一次服务接口的改动，会导致多处进行修改的问题，但是从现在来看这是为了保持服务的灵活带来的代价。

#### 总结

从刚开始使用 GraphQL 到现在已经过去了将近半年的时间，在微服务中实践 GraphQL 的过程中，我们发现了微服务与 GraphQL 之间设计思路冲突的地方，也就是去中心化与中心化。

作为一门中心化的查询语言，GraphQL 在最佳实践中应该只对外暴露一个端点，这个端点会包含当前 Web 服务应该提供的全部资源，并把它们合理的连接成图，但是微服务架构恰恰是相反的思路，它的初衷就是将大服务拆分成独立部署的服务，所以在最后对架构进行设计时，我们分离了这两部分的逻辑，使用微服务架构对服务进行拆分，通过 GraphQL 对微服务接口进行组合并完成鉴权功能，同时满足了两种不同设计的需求。

在架构演进的过程中，我们遇到了很多设计不合理的地方，也因为没有预见到业务扩展带来需求改动，由此导致架构上无法优雅地实现新的需求；最后选择使用服务网格（Service Mesh）的方式对现有的架构进行重构，也是因为微服务治理相关的事情应该由统一的中间层来做，自己重新实现服务治理相关的逻辑成本也非常高，使用服务网格已经与 GraphQL 没有太多的联系了，GraphQL 服务也只是作为一个对外暴露的端点组合内部服务提供的接口，我们也可以将接口换成 RESTful 或者其他形式，这对于整体的架构设计没有太多的影响；回过头来看，当项目刚刚启动时不应该将 GraphQL 接口摆在一个特别重要的位置上，划分服务之间的边界并进行合理的解耦才是影响比较深远的事情。

到最后，我们会发现在微服务架构中，GraphQL 其实只是整个链路中的一环，或许官方提供的一些工具与微服务中的一些问题有关，但是从整个架构来看对外是否使用 GraphQL 其实不是特别的重要，将服务之间的职责进行解耦并对外提供合理的接口才是最关键的，只要架构上的设计合理，我们可以随时引入一个 GraphQL 服务来组合其他服务的功能，其优点在于：

*   将多个网络请求合并成一个，减少前后端之间的网络请求次数，加快前端页面的渲染；

*   提供了体验非常好的调试工具 GraphiQL，并可以通过代码生成文档，节约文档的维护成本和沟通成本；

不得不说 GraphQL 作为一门新兴的技术有着非常多的优点，很多公司都在尝试使用 GraphQL 对外提供 API，虽然目前来说这门技术不算特别成熟，但是却也有巨大的潜力。

#### Reference

*   Web 服务编程，REST 与 SOAP

*   GraphQL Relay

*   GraphQL Server Specification

*   Relay Cursor Connections Specification

*   Solving the N+1 Problem for GraphQL through Batching – Shopify Engineering

*   How Facebook organizes their GraphQL code

*   How to structure GraphQL server code

*   GraphQL as an API Gateway to Microservices

*   GraphQL at massive scale: GraphQL as the glue in a microservice architecture

*   GrAMPS Documentation

*   Using GraphQL with Microservices in Go

*   Linkerd

这篇文章中，首先会简单介绍 GraphQL 是什么，它能够解决的问题；在这之后，我们会重点分析 GraphQL 在微服务架构中的使用以及在实践过程中遇到的棘手问题，在最后作者将给出心中合理的 GraphQL 微服务架构的设计，希望能为同样在微服务架构中使用 GraphQL 的工程师提供一定的帮助，至于给出的建议是否能够满足读者在特定业务场景下的需求就需要读者自行判断了。
