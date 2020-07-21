
title: GraphQL 入门指南
author: 知识铺
date: 2020-06-19 20:06:53
tags:
---
 

今天最常讨论的术语之一是 API。很多人不知道 API 的确切内容。基本上，API 代表**应用程序编程接口。**顾名下，这是一个界面，人们——开发人员、用户、消费者——可以与之交互。

您可以将 API 视为调酒师。你请酒保喝一杯，他们给你你想要的。简单。那么，为什么这是个问题呢？

自现代网络开始以来，构建 API 并不像听起来那么难。但是，学习和理解 API 是。开发人员组成使用 API 构建某些内容或仅使用数据的用户。因此，您的 API 应该尽可能干净和直观。设计良好的 API 非常容易使用和学习。这也是直观的，在开始设计 API 时要记住这一点。

长期以来，我们一直在使用 REST 来构建 API。随之而来的是一些问题。使用 REST 设计构建 API 时，您将面临一些问题，例如：

1） 您将有很多端点

2） 开发人员将更难学习和了解您的 API

3） 信息获取过度和不足

为了解决这些问题，Facebook 创建了 GraphQL。今天，我认为 GraphQL 是构建 API 的最佳方式。本文将告诉您为什么今天应该开始学习它。

在本文中，您将了解 GraphQL 的工作原理。我将向您展示如何使用 GraphQL 创建设计良好、高效、功能强大的 API。

您可能已经听说过 GraphQL，因为很多人和公司都在使用它。由于 GraphQL 是开源的，其社区已经变得庞大。

现在，是时候开始在实践中学习GraphQL是如何工作的，以及所有关于它的魔力。

## [](https://zshipu.com/t?url=#what-is-graphql)什么是GraphQL？

[**GraphQL**](https://zshipu.com/t?url=https://graphql.org)是 Facebook 开发的开源查询语言。它为我们提供了一种更有效的方法来设计、创建和使用我们的 API。基本上，它是REST的替代品。

GraphQL 有很多功能，例如：

1.  编写所需的数据，并准确获取所需的数据。不再像我们习惯的 REST 那样**过度提取信息**。

2.  它为我们提供了一**个终结点**，没有更多的版本2或版本3为相同的API。

3.  GraphQL 是**强类型**，因此可以在执行之前验证 GraphQL 类型系统中的查询。它帮助我们构建更强大的 API。

这是 GraphQL 的基本介绍 - 为什么它如此强大，为什么它现在越来越受欢迎。如果你想了解更多关于它，我建议你去[GraphQL网站](https://zshipu.com/t?url=https://graphql.org/)，并检查出来。

## [](https://zshipu.com/t?url=#getting-started)开始

本文的主要目标是学习如何设置 GraphQL 服务器，因此我们目前不会深入探讨这一点。目标是了解 GraphQL 在实践中是如何工作的，因此我们将使用称为 ☄️ [Graphpack](https://zshipu.com/t?url=https://github.com/glennreyes/graphpack)的零配置 GraphQL 服务器。

为了开始我们的项目，我们将创建一个新文件夹，您可以随心所欲地命名它。我要命名它：
```
graphql-server
```


打开终端并键入：


```

 mkdir graphql-server

```


现在，您应该在机器中安装或安装。如果您不知道这些是什么，并且是 JavaScript 编程语言的包管理器。对于 Node.js，默认包管理器为 。
```
npm
```

```
yarn
```




在创建的文件夹中键入以下命令：


```

 npm init -y

```


或者，如果您使用 ：
```
yarn
```



```

 yarn init

```


将为你创建一个文件，并且您安装的所有依赖项和命令都将在那里。
```
package.json
```


因此，现在，我们将安装我们将使用**的唯一依赖项**。

☄️[图形包](https://zshipu.com/t?url=https://github.com/glennreyes/graphpack)允许您创建**具有零配置的**GraphQL 服务器。由于我们刚刚开始使用 GraphQL，这将帮助我们继续前进并学习更多，而不必担心服务器配置。

在终端中，在根文件夹中，安装它像这样：


```

 npm install --save-dev graphpack

```


或者，如果您使用 ，则应如下所示：
```
yarn
```



```

 yarn add --dev graphpack

```


安装_Graphpack_后，转到文件中的脚本，并将以下代码放在其中：
```
package.json
```



```

 "scripts": {
    "dev": "graphpack",
    "build": "graphpack build"
 }

```


我们将创建一个名为 的文件夹，它将是我们整个服务器中唯一的文件夹。
```
src
```


在文件夹内创建一个名为 "之后"的文件夹，我们将仅创建三个文件。
```
src
```


在我们的文件夹中创建一个名为 的文件。在此第一个文件中，放置以下代码：   

src   

schema.graphql   




```

 type Query {    
    hello: String    
}

```


在此文件中将是我们的整个 GraphQL 架构。如果你不知道它是什么，我稍后会解释——别担心。
```
schema.graphql
```


现在，在我们的文件夹中，创建第二个文件。调用它，并在此第二个文件中放置以下代码：   

src   

resolvers.js




```

 import { users } from "./db";

const resolvers = {    
    Query: {    
        hello: () => "Hello World!"    
    }    
};

export default resolvers;

```


此文件将是我们提供将 GraphQL 操作转换为数据的说明的方式。
```
resolvers.js
```


最后，在_src_文件夹中创建第三个文件。调用此，并在此第三个文件中放置以下代码：   

db.js   




```

 export let users = [    
    { id: 1, name: "John Doe", email: "john@gmail.com", age: 22 },    
    { id: 2, name: "Jane Doe", email: "jane@gmail.com", age: 23 }    
];

```


在本教程中，我们不使用真实数据库。因此，此文件将模拟数据库，只是为了学习目的。    
db.js   


现在，我们的文件夹应该如下所示：   

src




```

 src
  |--db.js
  |--resolvers.js
  |--schema.graphql

```


现在，如果您运行该命令，或者，如果您使用的 是 ，则应在终端中看到此输出：
```
npm run dev
```

```
yarn
```

```
yarn dev
```


[![](https://res.cloudinary.com/practicaldev/image/fetch/s--5vvAFZtb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2096/1%2AFKJYY9qqg4PLBvziWPlhVg.png)](https://zshipu.com/t?url=https://res.cloudinary.com/practicaldev/image/fetch/s--5vvAFZtb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2096/1%2AFKJYY9qqg4PLBvziWPlhVg.png)

您现在可以转到 。这意味着我们已经准备好开始编写 GraphQL 中的第一个查询、突变和订阅。
```
localhost:4000
```


您将看到 GraphQL 游乐场，这是一款功能强大的 GraphQL IDE，用于更好的开发工作流。如果您想了解有关 GraphQL 游乐场的更多信息，[请单击此处](https://zshipu.com/t?url=https://www.prisma.io/blog/introducing-graphql-playground-f1e0a018f05d/)。

## [](https://zshipu.com/t?url=#schema)模式

GraphQL 有它自己的语言类型，用于编写架构。这是一种称为**架构定义语言 （SDL）**的人类可读架构语法。无论您使用何种技术，SDL 都将相同 ， 您可以将其用于所需的任何语言或框架。

这种架构语言非常有用，因为它很容易理解 API 将具有哪些类型。你可以理解它，只是看对了它。

## [](https://zshipu.com/t?url=#types)类型

类型是 GraphQL 最重要的特征之一。类型是表示 API 外观的自定义对象。例如，如果要构建社交媒体应用程序，您的 API 应具有帖子、用户、赞、组等类型。

类型具有字段，这些字段返回特定类型的数据。例如，我们将创建一个用户类型，我们应该有一些名称、电子邮件和年龄字段。类型字段可以是任何内容，并且始终返回数据类型为 Int、Float、字符串、布尔、ID、对象类型列表或自定义对象类型。

因此，现在编写我们的第一个类型，转到您的文件，并将已经存在的类型查询替换为以下内容：
```
schema.graphql
```



```

 type User {    
    id: ID!    
    name: String!    
    email: String!    
    age: Int    
}

```


每个用户都有一个 ID，所以我们给它一个 ID 类型。用户也将有一个名称和电子邮件，所以我们给它一个字符串类型，和一个年龄，我们给了一个Int类型。很简单，对吧？

但是，那些呢！在每行的末尾？感叹号表示字段**是不可空的**，这意味着每个字段都必须返回每个查询中的一些数据。我们将在 User 类型中具有的唯一**空**字段是年龄。

在 GraphQL 中，您将处理三个主要概念：

1.  **查询**- 从服务器获取数据的方式。

2.  **突变**- 修改服务器上的数据并恢复更新数据（创建、更新、删除）的方式。

3.  **订阅**- 保持与服务器的实时连接的方式。

我要向你解释所有。让我们从查询开始。

## [](https://zshipu.com/t?url=#queries)查询

为了简单解释这一点，GraphQL 中的查询是获取数据的方式。在 GraphQL 中查询最美丽的事情之一是，您只是要获得所需的确切数据。没有更多，没有更少。这在我们的 API 中产生了巨大的积极影响 - 不再像使用 REST API 那样过度获取或获取不足的信息。

我们将在 GraphQL 中创建第一个类型查询。我们所有的查询都将在此类类型内结束。因此，首先，我们将转到我们并编写一个名为 Query 的新类型：
```
schema.graphql
```



```

 type Query {    
    users: [User!]!    
}

```


很简单：用户查询**将返回给我们一个或多个用户的数组**。它不返回 null，因为我们放入**！**， 这意味着它是一个不可空的查询。它应该总是返回的东西。

但是，我们也可以返回特定的用户。为此，我们将创建一个名为"用户"的新查询。在我们的查询类型中，放置以下代码：


```

 user(id: ID!): User!

```


现在，我们的查询类型应如下所示：


```

 type Query {    
    users: [User!]!    
    user(id: ID!): User!    
}

```


如您所见，在 GraphQL 中查询时，我们还可以传递参数。在这种情况下，要查询特定用户，我们将传递其 ID。

但是，您可能想知道：GraphQL 如何知道数据从何处获取？这就是为什么我们应该有一个文件。该文件告诉 GraphQL 如何以及从何处获取数据。

resolvers.js



首先，转到我们的文件并导入我们刚刚创建的文件。您的文件应如下所示：

resolvers.js

db.js



```

 import { users } from "./db";

const resolvers = {    
    Query: {    
        hello: () => "Hello World!"    
    }    
};

export default resolvers;

```


现在，我们将创建第一个查询。转到您的文件并替换 hello 函数。现在，查询类型应如下所示：

resolvers.js




```

 import { users } from "./db";

const resolvers = {    
    Query: {    
        user: (parent, { id }, context, info) => {    
        return users.find(user => user.id == id);    
        },    
        users: (parent, args, context, info) => {    
            return users;    
        }    
    }    
};

export default resolvers;

```


现在，要解释它是如何工作的：

每个查询解析器有四个参数。在用户函数中，我们将将 ID 作为参数传递，然后返回与传递的 ID 匹配的特定用户。很简单

在用户函数中，我们只需返回已存在的用户数组。它总是会回到我们所有的用户。

现在，我们将测试我们的查询是否正常工作。转到并放入以下代码：   

localhost:4000




```

 query {    
    users {    
        id    
        name    
        email    
        age    
    }    
}

```


它应该返回到我们所有的用户。

或者，如果要返回特定用户：


```

 query {    
    user(id: 1) {    
        id    
        name    
        email    
        age    
    }    
}

```


现在，我们将开始学习**突变**，这是GraphQL中最重要的特征之一。

## [](https://zshipu.com/t?url=#mutations)突变

在 GraphQL 中，突变是修改服务器上的数据并恢复更新数据的方式。您可以像 REST 的 CUD（创建、更新、删除）一样思考。

我们将在 GraphQL 中创建我们的第一个类型突变，并且我们所有的突变都将在这种类型的类型中结束。所以，首先，去我们的，并写一个新的类型称为突变：

schema.graphql




```

 type Mutation {    
    createUser(id: ID!, name: String!, email: String!, age: Int): User!    
    updateUser(id: ID!, name: String, email: String, age: Int): User!    
    deleteUser(id: ID!): User!    
}

```


正如您所看到的，我们将有三个突变：

**创建用户**：我们应该传递 ID、姓名、电子邮件和年龄。它应该将新用户返回给我们。

**更新用户**：我们应该传递一个ID，以及一个新的名称，电子邮件，或年龄。它应该将新用户返回给我们。

**删除用户**：我们应该传递一个ID。它应该将删除的用户退还给我们。

现在，转到我们的文件和查询对象**下方**，创建一个新的突变对象，如下所示：

resolvers.js




```

 Mutation: {    
    createUser: (parent, { id, name, email, age }, context, info) => {    
        const newUser = { id, name, email, age };    
        users.push(newUser);    
        return newUser;    
},   
    updateUser: (parent, { id, name, email, age }, context, info) => {    
        let newUser = users.find(user => user.id == id);    
        newUser.name = name;    
        newUser.email = email;    
        newUser.age = age;

        return newUser;
    },    
    deleteUser: (parent, { id }, context, info) => {    
        const userIndex = users.findIndex(user => user.id == id);

        if (userIndex === -1) throw new Error("User not found.");

        const deletedUsers = users.splice(userIndex, 1);

        return deletedUsers[0];     
    }    
}

```


现在，我们的文件应该如下所示：

resolvers.js




```

 import { users } from "./db";

const resolvers = {    
    Query: {        
        user: (parent, { id }, context, info) => {      
            return users.find(user => user.id == id);       
        },      
        users: (parent, args, context, info) => {       
            return users;       
        }       
    },    
    Mutation: {    
        createUser: (parent, { id, name, email, age }, context, info) => {    
            const newUser = { id, name, email, age };    
            users.push(newUser);    
            return newUser;    
    },   
        updateUser: (parent, { id, name, email, age }, context, info) => {    
            let newUser = users.find(user => user.id == id);    
            newUser.name = name;    
            newUser.email = email;    
            newUser.age = age;

            return newUser;
        },    
        deleteUser: (parent, { id }, context, info) => {    
            const userIndex = users.findIndex(user => user.id === id);

            if (userIndex === -1) throw new Error("User not found.");

            const deletedUsers = users.splice(userIndex, 1);

            return deletedUsers[0];         
        }    
    }    
};

export default resolvers;

```


现在，我们将测试我们的突变是否正常。转到并放入以下代码：
```
localhost:4000
```



```

 mutation {    
    createUser(id: 3, name: "Robert", email: "robert@gmail.com", age: 21) {    
        id    
        name    
        email    
        age    
    }    
}

```


它应将新用户返回给您。如果你想尝试制造新的突变，我建议你自己尝试一下！尝试删除您创建的同一用户，以查看其是否正常工作。

最后，我们将开始了解**订阅**，以及为什么它们如此强大。

## [](https://zshipu.com/t?url=#subscriptions)订阅

正如我以前说过的，订阅是您与服务器保持实时连接的方式。这意味着，每当服务器中发生事件，并且每当调用该事件时，服务器都会向客户端发送相应的数据。

通过使用订阅，可以使应用更新到不同用户之间的最新更改。

[![](https://res.cloudinary.com/practicaldev/image/fetch/s--5ZxE4cuA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2000/1%2ANaIPy126r9Ie5NwjS3g-rg.png)](https://zshipu.com/t?url=https://res.cloudinary.com/practicaldev/image/fetch/s--5ZxE4cuA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2000/1%2ANaIPy126r9Ie5NwjS3g-rg.png)

基本订阅如下所示：


```

 subscription {    
    users {    
        id    
        name    
        email    
        age    
    }    
}

```


你会说它非常类似于查询，是的。但它的工作方式不同。

在服务器中更新某些内容时，服务器将运行订阅中指定的 GraphQL 查询，并将新更新的结果发送到客户端。

我们不会在本文中使用订阅，但如果您想阅读有关订阅的更多信息，[请单击此处](https://zshipu.com/t?url=https://hackernoon.com/from-zero-to-graphql-subscriptions-416b9e0284f3)。

## [](https://zshipu.com/t?url=#conclusion)结论

正如您所看到的，GraphQL 是一项非常强大的新技术。它为我们提供了构建更好且设计良好的 API 的真正能力。这就是为什么我建议你现在开始学习它。对我来说，它最终将取代REST。



