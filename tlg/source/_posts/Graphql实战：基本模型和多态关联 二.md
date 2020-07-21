
title: Graphql实战：基本模型和多态关联 二
author: 知识铺
date: 2020-07-09 11:59:15
tags:
---
 

# [](https://zshipu.com/t?url=#models)<font _mstmutation="1" _msthash="288782" _msttexthash="4803123">模型</font>

任何论坛的基本单位都是主题。每个主题都围绕一个特定问题。其他用户可以写问题的答案，并评论其他用户的答复。

<font _mstmutation="1" _msthash="276809" _msttexthash="1037200385">马上，很明显，我们将有至少三个基本模型：， 和 。用户可以有多个主题，每个主题可以有许多答复。对于此示例，对主题的每个答复本身可以具有许多答复。</font>
```
User
```

```
Topic
```

```
Reply
```


让我们增加一点复杂性：喜欢。用户可以喜欢他们认为特别有用或有趣的主题或评论。

<font _mstmutation="1" _msthash="277381" _msttexthash="2443022764">就目前情况，我们现在有四种模式，用户、主题、回复和赞。 是一个基础对象，它有许多主题和许多答复，我们将调用注释，以明确。主题可以有很多答复和许多赞。他们还必须有一个标题和内容。回复有内容，可以有很多赞，属于用户和主题或回复。</font>
```
User
```


# [](https://zshipu.com/t?url=#generating-the-new-rails-app)<font _mstmutation="1" _msthash="290277" _msttexthash="25541789">生成rails应用</font>

## [](https://zshipu.com/t?url=#prerequisites)<font _mstmutation="1" _msthash="290849" _msttexthash="9792913">先决条件</font>

<font _mstmutation="1" _msthash="290017" _msttexthash="508912573">在生成新的rails应用之前，我们需要确保安装了 PostgreSQL。在 Mac 或 Linux 上， 您可以安装[它与自制](https://zshipu.com/t?url=https://brew.sh/)这样的：</font>

 <code>brew install postgresql</code> 

<font _mstmutation="1" _msthash="290615" _msttexthash="121563429">在 Mac 上，您可以使用以下命令启动后灰色：</font>

 <code>brew services start postgresql</code> 

不幸的是，Homebrew 不支持 linux 上的自制服务，因此您将无法使用上述命令在 linux 上启动 PostgreSQL。相反，您必须创建系统服务。有关[我实现](https://zshipu.com/t?url=https://gist.github.com/speratus/b2b65f647629ec088e4ae244a42edcf1#file-postgres-service)PostgreSQL 系统服务，请参阅此链接。

## [](https://zshipu.com/t?url=#building-the-backend)<font _mstmutation="1" _msthash="304993" _msttexthash="11548992">构建后端</font>

<font _mstmutation="1" _msthash="291811" _msttexthash="123605430">导航到新应用将目录并运行以下命令的目录：</font>

 <code>rails new miniforum --api -d  postgresql --skip-bundle</code> 

<font _mstmutation="1" _msthash="292409" _msttexthash="910932620">这将创建一个新的精简下轨应用程序使用 PostgreSQL 作为其数据库引擎。暂时跳过，因为我们将立即更新 Gemfile，无论如何都需要运行捆绑安装。</font>
```
bundle install
```


<font _mstmutation="1" _msthash="292708" _msttexthash="210369653">命令完成后，导航到新的应用目录，打开 Gemfile 并添加以下行：</font>

 <code># Uncomment the line with BCrypt
gem 'bcrypt'
gem 'jwt'
gem 'dotenv-rails'
gem 'graphql'</code> 

<font _mstmutation="1" _msthash="290602" _msttexthash="1161489680">现在，我们已经指定了额外的依赖项，请继续并运行 。
一旦捆绑程序完成依赖项的安装，我们将需要将 GraphQL Gem 安装到我们的应用程序中。运行以下命令以做到这一点：</font>

```

bundle install

```


 <code>rails g graphql:install</code> 

我们尚未使用 GraphQL，但现在安装它将意味着我们稍后将准备好使用它进行开发。

<font _mstmutation="1" _msthash="291499" _msttexthash="50595155">我们将从生成模型开始：</font>
```
User
```


 <code>rails g model User email username name password_digest</code> 

<font _mstmutation="1" _msthash="292097" _msttexthash="832156741">默认情况下，我们将所有这些属性都作为字符串保存，因为 BCrypt 要求将密码摘要存储为字符串。BCrypt 要求调用数据库中的密码字段才能使用宏。</font>
```
password_digest
```

```
has_secure_password
```


<font _mstmutation="1" _msthash="292396" _msttexthash="62944882">接下来，我们将生成模型：</font>
```
Topic
```


 <code>rails g model Topic title content:text user:belongs_to</code> 

在主题中，我们希望内容是文本类型，因为文本类型旨在保存比普通字符串更长的数据。

<font _mstmutation="1" _msthash="290589" _msttexthash="45592794">接下来，生成模型：</font>
```
Reply
```


 <code>rails g model Reply content:text user:references post:references{polymorphic}</code> 

<font _mstmutation="1" _msthash="291187" _msttexthash="3355492075">由于答复可以属于主题，也可以属于另一个答复，因此我们希望确保我们建立了多态关系。从本质上讲，多态关联允许同一关联引用多种不同的模型。在我们的案例中，由于有两个模型的回复可以属于 （ 或 ），我们需要一个多态关联来表示此行为。我强烈[推荐这篇文章](https://zshipu.com/t?url=https://launchschool.com/blog/understanding-polymorphic-associations-in-rails)有关多态性关联的详细信息。</font>
```
Topic
```

```
Reply
```


在构建多态关联时，字段的名称应是一个抽象，表示将关联的所有不同类型的模型。在我们的案例中，我们调用表示主题/回复关联字段的字段为"帖子"，因为主题和回复都是各种帖子。

<font _mstmutation="1" _msthash="291785" _msttexthash="74269962">最后，使用以下命令生成模型：</font>
```
Like
```


 <code>rails g model Like user:references post:references{polymorphic}</code> 

<font _mstmutation="1" _msthash="292383" _msttexthash="468020384">同样，与模型一样，like 可以属于主题或答复，因此我们设置了与上面设置的相同种类的多态关联。</font>
```
Reply
```


<font _mstmutation="1" _msthash="292682" _msttexthash="256743383">现在，我们已经生成了所有模型，我们需要创建数据库并迁移模型：</font>

 <code>rake db:create
rake db:migrate</code> 

<font _mstmutation="1" _msthash="293280" _msttexthash="784489589">我使用而不是仅仅因为使用削减了一点点代码，rails必须运行，以找出要完成什么任务。Rake 直接到达任务，因此应该运行得更快一点。</font>
```
rake db:migrate
```

```
rails db:migrate
```

```
rake
```


# [](https://zshipu.com/t?url=#adding-associations-and-validations)<font _mstmutation="1" _msthash="304057" _msttexthash="26785629">添加关联和验证</font>

为了建立好我们的协会，我们还有一些工作要做。

## [](https://zshipu.com/t?url=#user-model)<font _mstmutation="1" _msthash="304954" _msttexthash="11436347">用户模型</font>

<font _mstmutation="1" _msthash="291772" _msttexthash="43867876">向模型添加以下代码：</font>

```

User

```


 <code># app/models/user.rb
class User < ApplicationRecord
    has_secure_password
    has_many :topics
    has_many :comments, class_name: "Reply"
    has_many :likes

    validates :email, :name, :username, :password, presence: true
    validates :username, :email, uniqueness: true
    validates :username, format: {with: /\w/, message: "only alphanumeric characters allowed"}
    validates :email, format: {with: /[\w\.\+]+@\w+(?:\.\w+)+/, message: "must be a valid email address"}
end</code> 

<font _mstmutation="1" _msthash="292370" _msttexthash="591463821">请注意，在第二行中，这是对用户在其他帖子上的评论的引用。参数告诉活动记录，查找注释属性的类实际上是类</font>

```

has_many :comments

```


```

class_name: “Reply”

```


```

Reply

```


<font _mstmutation="1" _msthash="292669" _msttexthash="1955275413">验证可确保每个用户都有电子邮件、姓名、用户名和密码。用户名和电子邮件必须是唯一的。第三个验证行使用正则表达式来验证用户名是否为字母数字。最后，最后一行使用正则表达式来验证电子邮件地址大致遵循 的格式。</font>
```
hello@world.com
```


如果您需要正则表达式的帮助，请查看此正则表达式[测试器以及](https://zshipu.com/t?url=https://regex101.com/)[此有关](https://zshipu.com/t?url=https://dev.to/chrisachard/intro-to-regex-for-web-developers-2fj4)JavaScript 正则表达式的优秀文章（这些正则表达式大多延续到 Ruby 正则表达式）。

## [](https://zshipu.com/t?url=#topic-model)<font _mstmutation="1" _msthash="306826" _msttexthash="11977316">主题模型</font>

<font _mstmutation="1" _msthash="293566" _msttexthash="62159318">接下来向模型添加以下代码：</font>

```

Topic

```


 <code># app/models/topic.rb
class Topic < ApplicationRecord
    belongs_to :user
    has_many :replies, as: :post
    has_many :likes, as: :post

    validates :title, :content, :user, presence: true
end</code> 

<font _mstmutation="1" _msthash="291460" _msttexthash="1299485083">请注意 和 。这些行设置主题和回复之间的关联。活动记录知道在答复表中查找主题的 ID 以查找所有关联的对象，但由于关联是多态的，因此活动记录将无法在表中找到正确的字段。</font>

```

has_many :replies, as: :post
has_many :likes, as: :post
:topic_id

```


<font _mstmutation="1" _msthash="291759" _msttexthash="851130631">参数告诉"活动记录"在答复表中查找，但要查找字段而不是字段。以这种方式设置模型意味着我们将能够以正常方式访问主题的回复和赞列表。</font>

```

as: :post
:post_id
:topic_id

```


## [](https://zshipu.com/t?url=#reply-model)<font _mstmutation="1" _msthash="305565" _msttexthash="10486749">回复模型</font>

<font _mstmutation="1" _msthash="292357" _msttexthash="95123405">对于模型，我们需要做类似的事情：</font>

```

Reply

```


 <code># app/models/reply.rb
class Reply < ApplicationRecord
    belongs_to :user
    belongs_to :post, polymorphic: true
    has_many :replies, as: :post

    validates :content, :user, :post, presence: true
end</code> 

<font _mstmutation="1" _msthash="292955" _msttexthash="1634516598">请注意，这里除了多态"答复"字段外，我们还有行。这告诉活动记录数据库中的发布字段应该是多态的。如果没有参数，Active Record 将尝试查找名为"帖子"的表，并引发错误，因为我们没有定义此类表。</font>

```

belongs_to :post, polymorphic: true

```


```

polymorphic: true

```


## [](https://zshipu.com/t?url=#like-model)<font _mstmutation="1" _msthash="306813" _msttexthash="10938863">喜欢模型</font>

<font _mstmutation="1" _msthash="293553" _msttexthash="111744581">最后，对于模型，我们需要添加的是：</font>

```

Like

```


 <code># app/models/like.rb
class Like < ApplicationRecord
    belongs_to :user
    belongs_to :post, polymorphic: true

    validates :user, :post, presence: true
end</code> 

<font _mstmutation="1" _msthash="291447" _msttexthash="231283234">同样，我们有参数，但除此之外，这是我们数据库中最简单的模型。</font>

```

polymorphic: true

```


一切都很好去这个职位。我希望你，这是有启发性地获得后端设置的基础知识。多态关联一开始可能难以理解，但它们为数据库关联增加了更多的功能。

该系列这一部分的整个代码可以在这里[找到](https://zshipu.com/t?url=https://github.com/speratus/miniforum/tree/part1-basic-models)。
