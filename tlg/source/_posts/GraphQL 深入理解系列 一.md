
title: GraphQL 深入理解系列 一
author: 知识铺
date: 2020-06-25 11:59:41
tags:
---
 GraphQL 将执行 JSON 对 XML 所做的操作。

GraphQL 解决的 3 个最重要的问题是：

*   需要执行多次往返以获取视图所需的数据：使用 GraphQL，您始终可以通过单个往返服务器获取视图所需的所有初始数据。要对 REST API 执行相同的操作，我们需要引入难以管理和扩展的非结构化参数和条件。
*   客户端依赖于服务器：使用 GraphQL，客户端会使用请求语言：1） 无需服务器硬编码数据的形状或大小，2） 将客户端与服务器分离。这意味着我们可以独立于服务器维护和改进客户端。
*   糟糕的前端开发人员体验：使用 GraphQL，开发人员使用声明性语言表达其用户界面的数据要求。他们表达他们所需要的，而不是如何使它可用。UI 需要的数据与开发人员在 GraphQL 中表达数据描述的方式之间存在紧密关系。

但是，REST API 有什么问题呢？

REST API 的最大问题是多个终结点的性质。

这要求客户端执行多次往返以获取其数据。

REST API 通常是终结点的集合，其中每个终结点表示资源。因此，当客户端需要来自多个资源的数据时，它需要执行多个到 REST API 的往返，以组合所需的数据。

在 REST API 中，没有客户端请求语言。客户端无法控制服务器将返回的数据。没有语言可以做到这一点。更准确地说，客户端可用的语言非常有限。

例如，读取 REST API 终结点可以是：

*   <font _mstmutation="1" _msthash="410930" _msttexthash="110978244">GET - 从该资源获取所有记录的列表，或</font>```/ResouceName```
*   <font _mstmutation="1" _msthash="410931" _msttexthash="65713648">GET - 获取该 ID 标识的单个记录。</font>```/ResourceName/ResourceID```

例如，客户端无法指定要为该资源中的记录选择哪些字段。该信息位于 REST API 服务本身中，REST API 服务将始终返回所有字段，而不管客户端实际需要哪个字段。GraphQL 针对此问题的术语是过度提取不需要的信息。这是客户端和服务器网络和内存资源的浪费。

REST API 的另一个大问题是版本控制。如果需要支持多个版本，这通常意味着新的终结点。这在使用这些终结点时会导致更多问题，并且可能是服务器上代码重复的原因。

上面提到的 REST API 问题是特定于 GraphQL 试图解决的问题。它们当然不是 REST API 的所有问题，我不想进入 REST API 是什么，不是。我主要谈论流行的基于资源的 HTTP 端点 API。这些 API 中的每一个最终都变成了具有常规 REST 终结点的混合 - 出于性能原因制作的自定义临时终结点。这是 GraphQL 提供了更好的替代方案。

GraphQL 如何施展其魔力？

GraphQL 背后有很多概念和设计决策，但最重要的可能是：

*   GraphQL 架构是强类型架构。要创建 GraphQL 架构，我们定义具有类型的字段。这些类型可以是基元类型或自定义类型，并且架构中的其他所有类型都需要一个类型。这种丰富的类型系统允许丰富的功能，如具有内省 API 和可为客户端和服务器构建功能强大的工具。
*   GraphQL 将数据作为图形表示，数据自然是图形。如果需要表示任何数据，正确的结构是图形。GraphQL 运行时允许我们使用与该数据的自然图形形状相匹配的图形 API 来表示数据。
*   GraphQL 具有用于表示数据需求的声明性。GraphQL 为客户端提供了声明性语言，供他们表达其数据需求。这种声明性性质围绕使用 GraphQL 语言创建了一个心理模型，该语言与我们在英语中思考数据需求的方式非常接近，并且与替代方法相比，使用 GraphQL API 容易得多。

最后一个概念是为什么我个人认为GraphQL是一个游戏规则的改变者。

这些都是高层次的概念。让我们来了解一些细节。

为了解决多个往返问题，GraphQL 使响应服务器只是单个终结点。基本上，GraphQL 将自定义终结点的想法提升到极致，只是使整个服务器成为单个自定义终结点，可以回复所有数据问题。

与这个单一终结点概念相一起的另一个大概念是使用该自定义单终结点所需的丰富客户端请求语言。如果没有客户端请求语言，单个终结点是无用的。它需要一种语言来处理自定义请求，并响应该自定义请求的数据。

具有客户端请求语言意味着客户端将处于控制之下。

他们可以询问他们到底需要什么，服务器会回复他们到底要什么。这解决了过度提取的问题。

当涉及到版本控制时，GraphQL 对此有一个有趣的介绍。可以一起避免版本控制。基本上，我们可以只添加新字段而不删除旧字段，因为我们有一个图形，并且可以通过添加更多节点灵活地增长图形。因此，我们可以在图形上保留旧 API 的路径，并引入新的路径，而无需将它们标记为新版本。API 刚刚增长。

这对移动客户端尤其重要，因为我们无法控制他们使用的 API 版本。安装后，移动应用可能会继续使用同一旧版本的 API 多年。在 Web 上，很容易控制 API 的版本，因为我们只是推送新代码。对于移动应用来说，这要困难得多。

还没有完全相信？在 GraphQL 和 REST 之间使用实际示例进行一对一比较怎么样？

RESTful API 与图形QL API = 示例

让我们想象一下，我们是负责构建一个闪亮的新用户界面来代表星球大战电影和人物的开发人员。

我们负责构建的第一个 UI 很简单：显示有关单个星球大战人员信息的视图。例如，达斯·维德，以及这个人出演的所有电影。此视图应显示该人的姓名、出生年份、行星名称以及他们出现的所有影片的标题。

As simple as that sounds, we’re actually dealing with 3 different resources here: Person, Planet, and Film. The relationship between these resources is simple and anyone can guess the shape of the data here. A person object belongs to one planet object and it will have one or more films objects.

The JSON data for this UI could be something like:

 *   {

 *   "data": {    "person": {

 *   "name": "Darth Vader",

 *   "birthYear": "41.9BBY",

 *   "planet": {

 *   "name": "Tatooine"

 *   },

 *   "films": [

 *   { "title": "A New Hope" },

 *   { "title": "The Empire Strikes Back" },

 *   { "title": "Return of the Jedi" },

 *   { "title": "Revenge of the Sith" }

 *   ]

 *   }

 *   }

 *   }

假设数据服务为我们提供了数据的这种精确结构，下面是一种用 React.js 表示其视图的一种可能方法：

 *   // The Container Component:

 *   <PersonProfile person={data.person} ></PersonProfile>

 *   // The PersonProfile Component:

 *   Name: {person.name}

 *   Birth Year: {person.birthYear}

 *   Planet: {person.planet.name}

 *   Films: {person.films.map(film => film.title)}

这是一个简单的例子，虽然我们与星球大战的经验可能帮助我们在这里一点点，UI和数据之间的关系是非常明确的。UI 使用了我们想象中的 JSON 数据对象中的所有"键"。

现在，让我们看看如何使用 RESTful API 请求此数据。

我们需要一个人的信息，假设我们知道此人的 ID，则 RESTful API 应公开该信息：

 *   GET - /people/{id}

此请求将向我们提供姓名、出生年份和其他有关此人的信息。一个好的RESTful API也将给我们这个人的星球的ID和一系列ID的所有电影，这个人出现在。

此请求的 JSON 响应可能类似于：

 *   {

 *   "name": "Darth Vader",

 *   "birthYear": "41.9BBY",

 *   "planetId": 1

 *   "filmIds": [1, 2, 3, 6],

 *   *** other information we do not need ***

 *   }

然后，要阅读行星的名称，我们问：

 *   GET - /planets/1

要阅读电影标题，我们要求：

 *   GET - /films/1

 *   GET - /films/2

 *   GET - /films/3

 *   GET - /films/6

一旦我们从服务器收到所有 6 个响应，我们可以将它们组合起来，以满足视图所需的数据。

除了我们必须进行 6 次往返以满足简单 UI 的简单数据需求之外，我们这里的方法也是必不可少的。我们提供了有关如何获取数据以及如何处理数据以使其为视图做好准备的说明。

如果你想明白我的意思，你可以自己试试这个。星球大战数据有一个RESTful API当前托管在[http://swapi.co/](https://zshipu.com/t?url=http://swapi.co/ "swapi.co").继续尝试在那里构造我们的数据人员对象。密钥可能略有不同，但 API 终结点将相同。您需要执行 6 次 API 调用。此外，您必须获取视图不需要的信息。

当然，这只是此数据的 RESTful API 的一个实现。可能有更好的实现，这将使此视图更容易实现。例如，如果 API 服务器实现了嵌套资源并理解人与胶片之间的关系，我们可以读取影片数据：

 *   GET - /people/{id}/films

但是，纯 RESTful API 服务器很可能无法实现这一点，我们需要要求后端工程师为我们创建此自定义终结点。这就是扩展 RESTful API 的现实 - 我们只是添加自定义终结点，以有效满足不断增长的客户需求。管理这样的自定义终结点是很困难的。

<font _mstmutation="1" _msthash="258544" _msttexthash="2220180404">现在，让我们来看看 GraphQL 方法。服务器上的 GraphQL 包含自定义终结点的想法，并将其带到极致。服务器将只是单个终结点，通道无关紧要。如果我们通过 HTTP 执行此操作，HTTP 方法肯定也无关紧要。假设我们有一个 GraphQL 终结点在 HTTP 上公开。</font>```/graphql```

由于我们希望在一次往返中请求所需的数据，我们需要一种方法来表达我们对服务器的完整数据需求。我们使用 GraphQL 查询执行此操作：

 *   GET or POST - /graphql?query={...}

GraphQL 查询只是一个字符串，但它必须包含我们需要的所有数据部分。这就是声明性力量的用处。

在英语中，我们是如何声明我们的数据要求：我们需要一个人的名字，出生年份，行星的名字，以及他们所有电影的标题。在 GraphQL 中，这转换为：

 *   {

 *   person(ID: ...) {

 *   name,

 *   birthYear,

 *   planet {

 *   name

 *   },

 *   films {

 *   title

 *   }

 *   }

 *   }

再阅读一次英语表达的要求，并将其与 GraphQL 查询进行比较。它尽可能接近。现在，将此 GraphQL 查询与我们开始的原始 JSON 数据进行比较。GraphQL 查询是 JSON 数据的确切结构，但不包括所有"值"部分。如果我们从问答关系的角度来考虑这个问题，问题就是没有答案部分的答案陈述。

如果答案语句是：

> 离太阳最近的行星是水星。

问题的良好表现是同一陈述，没有答案部分：

> （什么是距离太阳最近的行星？

相同的关系适用于 GraphQL 查询。采取 JSON 响应，删除所有"答案"部分（即值），您最终得到一个GraphQL查询，非常适合表示有关该 JSON 响应的问题。

现在，将 GraphQL 查询与我们为数据定义的声明性 React UI 进行比较。GraphQL 查询中的所有内容都用于 UI，UI 中使用的所有内容都显示在 GraphQL 查询中。

这是GraphQL的伟大心理模型。UI 知道它需要的确切数据，并提取该要求相当容易。提出 GraphQL 查询只是直接从 UI 中提取用作变量的内容。

如果我们反转这个模型，它仍然会保持力量。如果我们有 GraphQLquery，我们确切知道如何在 UI 中使用其响应，因为查询将与响应"结构"相同。我们不需要检查响应来了解如何使用它，也不需要任何关于 API 的文档。都是内置的

星球大战数据有一个图形QL API托管在[https://github.com/graphql/swapi-graphql](https://zshipu.com/t?url=https://github.com/graphql/swapi-graphql "github.com").继续尝试在那里构造我们的数据人员对象。稍后我们将解释一些小差异，但以下是您可以针对此 API 读取视图数据要求的官方查询（以达斯·维德为例）：

 *   {

 *   person(personID: 4) {

 *   name,

 *   birthYear,

 *   homeworld {

 *   name

 *   },

 *   filmConnection {

 *   films {

 *   title

 *   }

 *   }

 *   }

 *   }

此请求为我们提供了非常接近视图使用的响应结构，请记住，我们在一次往返中获取所有这些数据。


