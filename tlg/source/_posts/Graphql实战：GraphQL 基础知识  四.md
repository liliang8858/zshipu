
title: Graphql实战：GraphQL 基础知识  四
author: 知识铺
date: 2020-07-09 13:38:27
tags:
---
 GraphQL是Facebook最初于[2012年开发的一种相对较新的查询语言](https://zshipu.com/t?url=https://foundation.graphql.org/)。GraphQL 的主要目标是减少 API 查询返回的不必要的数据量。

GraphQL 允许开发人员在单个查询中检索关联的对象。另一方面，REST API 将需要对相同数据进行多个查询。

编写 GraphQL 查询需要比 REST 查询更多的学习曲线，但一旦学习，GraphQL 就很容易理解。

我已决定将原计划为一篇文章的一篇文章分成两篇文章，因为我认为在较小的区块中处理所有内容会更容易。

# [](https://zshipu.com/t?url=#graphql-basics)<font _mstmutation="1" _msthash="289380" _msttexthash="24307790">GraphQL 基础知识</font>

在使用 GraphQL 开始编写代码之前，了解一下它在后台的工作方式至关重要。

GraphQL（如 REST）可以在任何编程语言中实现，并且已经有许多[语言的库](https://zshipu.com/t?url=https://graphql.org/code/)来帮助启动新用户。本[系列的第 2](https://zshipu.com/t?url=https://dev.to/speratus/basic-models-and-polymorphic-associations-223o)部分，我们安装了 GraphQL 的 ruby 实现

GraphQL的主要特点之一是它的类型[系统](https://zshipu.com/t?url=https://graphql.org/learn/schema/#type-system)。对于没有 CS 学位的我们这些类型，本质上是类型名称表示的数据类型的描述。

例如：公共类型是整数类型。整数类型只允许其实例包含正整数或负整数。另一种常见类型是字符串类型。字符串允许字符串实例中包含的任何字符序列。有关哪些数据类型及其使用方式的更多详细信息，请查看维基百[科关于数据类型的文章](https://zshipu.com/t?url=https://en.wikipedia.org/wiki/Data_type)。

GraphQL 有两种基本类型：用于生成查询的对象类型和表示具体数据的标量类型。随着我们的进展，这两种不同类型的用途应该变得更加清晰。

# [](https://zshipu.com/t?url=#scalar-types)<font _mstmutation="1" _msthash="303472" _msttexthash="12947298">标量类型</font>

<font _mstmutation="1" _msthash="290615" _msttexthash="550436354">GraphQL 有五种内置标量类型。稍后开始构建对象类型时，我们将使用这五种类型。五个内置类型是：、、和 。</font>
```
String   
Int   
Float   
Boolean   
ID
```



```
String
```
<font _mstmutation="1" _msthash="290914" _msttexthash="948504427">s 表示任何类型的字符串数据，s 表示正数和负整数，s 表示任何正数或负实数，包括小数点，s 表示真值或假值，s 表示基础数据库系统中对象的 ID。</font>
```
Int   
Float   
Boolean   
ID
```


# [](https://zshipu.com/t?url=#object-types)<font _mstmutation="1" _msthash="304408" _msttexthash="12521912">对象类型</font>

对象类型主要是开发人员定义的，由五个标量类型的任意组合以及其他对象类型组成。

对象类型是我们将关注的重点，因为我们在接近尾声时构建的对象类型将允许我们使用 GraphQL 查询后端。从本质上讲，我们将简单地将第 2 部分中定义的模型转换为 GraphQL 类型。

# [](https://zshipu.com/t?url=#graphql-queries)<font _mstmutation="1" _msthash="305344" _msttexthash="13975130">GraphQL查询</font>

<font _mstmutation="1" _msthash="292409" _msttexthash="270709231">查询是 GraphQL 的粘合剂，它将前端绑定到后端。查看基本的 GraphQL 查询：</font>

<code>
 query {
    users {
        id
        name
        username
    }
}</code> 

<font _mstmutation="1" _msthash="290303" _msttexthash="57506228">以下是查询部分的细目：</font>
[![GraphQL Query breakdown](https://res.cloudinary.com/practicaldev/image/fetch/s--ei_iZWAT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/bkx4cuvzh4k2uuxd5c16.png)](https://zshipu.com/t?url=https://res.cloudinary.com/practicaldev/image/fetch/s--ei_iZWAT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/bkx4cuvzh4k2uuxd5c16.png)

<font _mstmutation="1" _msthash="290602" _msttexthash="293661433">假设我们想要获得该用户创建的所有主题的标题，我们只需添加以下内容：</font>

<code>
 query {
    users {
        id
        name
        username
        topics {
            title
        }
    }
}</code> 

此查询的结果将包括每个用户创建的主题的所有标题。编写 GraphQL 查询时，请记住，所有查询的对象都必须在某些时候解析为标量类型。

# [](https://zshipu.com/t?url=#building-our-graphql-schema)<font _mstmutation="1" _msthash="304707" _msttexthash="28417584">构建我们的 GraphQL 架构</font>

GraphQL gem 提供了一堆有用的生成器，可帮助我们快速构建对象类型。

<font _mstmutation="1" _msthash="292097" _msttexthash="81925116">在项目的根目录中运行以下命令：</font>

<code>
 rails g graphql:object User username:String name:String email:String id:ID comments:[Reply] likes:[Like] topics:[Topic]</code> 

<font _mstmutation="1" _msthash="292695" _msttexthash="1693127956">参数是新 GraphQL 类型的名称。其他每个参数都遵循格式。因此，意味着添加一个名为用户名的字段，该字段具有字符串类型。这些字段映射到模型中具有相同名称的属性。字段（如告诉 graphql）有三件事：</font>
```
User   
<field_name>:<field_type>   
username:String   
comments:[Reply]
```


1.  <font _mstmutation="1" _msthash="463281" _msttexthash="24031904">制作名为 的字段。</font>
```
comments
```

2.  使新字段成为列表。类型周围的括号告诉 GraphQL 使用数组。
3.  <font _mstmutation="1" _msthash="464035" _msttexthash="79494571">对于列表的类型，请使用 该类型。</font>
```
Reply
```


<font _mstmutation="1" _msthash="290589" _msttexthash="228546903">我们尚未制作类型，因此请继续运行以下命令以完成构建基类型：</font>
```
Reply
```


<code>
 rails g graphql:object Topic title:String content:String id:ID user:User likes:[Like] replies:[Reply]
rails g graphql:object Like user:User post:Post id:ID
rails g graphql:object Reply content:String id:ID user:User post:Post</code> 

<font _mstmutation="1" _msthash="291187" _msttexthash="830637015">为了支持我们在第 2 部分中设置的多态关联，我们需要创建联合类型 Post。联合类型是一种可以表示几种不同类型之一的类型。运行以下命令：</font>

<code>
 rails g graphql:union Post Reply Topic</code> 

<font _mstmutation="1" _msthash="291785" _msttexthash="205944271">联合类型生成器似乎有一个错误，因此可能需要更改一点：</font>
```
post_type
```


<code>
 # app/graphql/types/post_type.rb
module Types
  class PostType < Types::BaseUnion
    # Instead of the following line of code you may see:
    # possible_types [Types::ReplyType, Types::TopicType]
    # If you do, this is a bug. Remove the brackets to fix it.
    possible_types Types::ReplyType, Types::TopicType
  end
end</code> 

<font _mstmutation="1" _msthash="292383" _msttexthash="463721856">现在，我们已经生成了所有基类型，我们需要使它们可查询。打开 ，删除默认值并添加以下代码：</font>
```
query_type.rb   
test_field
```


<code>

 # app/graphql/types/query_type.rb
module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :users, [Types::UserType], null: false, description: 'Returns all the users'

    def users
      User.all
    end

    field :topics, [Types::TopicType], null: false, description: 'Returns all the topics'

    def topics
      Topic.all
    end

    field :topic, Types::TopicType, null: true do
      argument :id, ID, required: true
    end

    def topic(id:)
      Topic.find_by(id: id)
    end

    field :user, Types::UserType, null: true do
      argument :id, ID, required: true
    end

    def user(id:)
      User.find_by(id: id)
    end
  end
end</code> 

<font _mstmutation="1" _msthash="292981" _msttexthash="2456105457">此处的快捷方式与生成的快捷方式非常相似。第一个参数（例如）是字段的名称，第二个参数是字段的类型，第三个参数确定返回值是否可以为空，最后一个参数是字段的描述。行声明该字段需要一个参数，我们将在本系列稍后将更详细地介绍该参数。</font>
```
field :users argument
```


# [](https://zshipu.com/t?url=#running-test-queries)<font _mstmutation="1" _msthash="306566" _msttexthash="34263203">正在运行测试查询</font>

如果您想测试我们新的 GraphQL 端，可以使用[GraphiQL 或](https://zshipu.com/t?url=https://www.electronjs.org/apps/graphiql) [Postman 来测试](https://zshipu.com/t?url=https://www.postman.com/)。

GraphQL 是一个非常强大的库，可以大大减少 API 开发时间。与 REST API，GraphQL 需要多一些工作来理解，但我发现这种奖励非常值得付出努力。感谢您的阅读！

与往常一样，代码在[GitHub 存储库中可用](https://zshipu.com/t?url=https://github.com/speratus/miniforum/tree/part3-graphql-1)
