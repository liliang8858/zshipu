
title: GraphQL实战：GraphQL Mutations 五
author: 知识铺
date: 2020-07-09 13:50:49
tags:
---
 上周，我在这篇文章中描述了 GraphQL[的基础知识](https://zshipu.com/t?url=https://dev.to/speratus/graphql-basics-3c0d)。我们介绍了 GraphQL 的基础知识以及用于设置和使用 GraphQL 的基本概念。本周，我报道了我上周留下的一篇关键文章：GraphQLMutations。

 <font _mstmutation="1" _msthash="890708" _msttexthash="392743">#ruby#rails#graphql</font>](https://zshipu.com/t?url=/speratus/graphql-basics-3c0d) 

GraphQL Mutations允许开发人员修改存储在服务器上的数据。

GraphQL 不知道该怎么处理您发送给它的任何数据，因此我们必须具体告诉它，在创建的每个Mutations中应执行哪些操作。

# [](https://zshipu.com/t?url=#creating-mutations)<font _mstmutation="1" _msthash="289380" _msttexthash="10900942">创建Mutations</font>

<font _mstmutation="1" _msthash="277095" _msttexthash="583437725">GraphQL Gem 具有一个方便的生成器，我们可以用它来开始构建我们的Mutations。跳转到项目目录并运行以下命令：</font>

<code>
 rails g graphql:mutation create_topic
rails g graphql:mutation create_reply
rails g graphql:mutation create_like
</code> 

每个命令都会创建一个新的命名Mutations。生成器需要的唯一参数是Mutations的名称。

<font _mstmutation="1" _msthash="277953" _msttexthash="38131080">将以下代码添加到 ：</font>
```
app/graphql/mutations/create_topic.rb
```


<code>
 module Mutations
  class CreateTopic < BaseMutation
    # just like queries, mutations return certain fields
    # in this case, the mutation returns a list of strings which are potential errors
    # and the topic that was created if the creation was successful
    field :errors, [String], null: false
    field :topic, Types::TopicType, null: true

    # mutations also take arguments, very similar to the way queries can take arguments
    argument :user_id, ID, required: true
    argument :title, String, required: true
    argument :content, String, required: true

    # Unlike queries, mutations must have a resolve method to tell
    # GraphQL what to do with the mutation and the arguments it receives.
    def resolve(title:, content:, user_id:)
      # In this case, we will create a new topic.
      topic = Topic.new(title: title, content: content, user_id: user_id)
      if topic.save
        {
          topic: topic,
          errors: []
        }
      else
        {
          topic: nil,
          errors: topic.errors.full_messages
        }
      end
    end
  end
end
</code> 

<font _mstmutation="1" _msthash="290316" _msttexthash="89051209">字段、参数和方法占 GraphQL Mutations的大部分。</font>
```
resolve
```


<font _mstmutation="1" _msthash="290615" _msttexthash="419175185">GraphQL 不知道如何自己处理多态关联，我们将添加一些专门用于解决这些问题的代码：</font>

<code>
 module Mutations
  class CreateReply < BaseMutation
    # As with create_topic, we have fields, arguments and a resolve method
    field :errors, [String], null: false
    field :reply, Types::ReplyType, null: false

    # We need to give the pieces of the polymorphic info that it needs to
    # properly construct the association
    argument :post_id, ID, required: true
    # post_type tells Rails what kind of model to look for.
    argument :post_type, String, required: true

    argument :user_id, ID, required: true
    argument :content, String, required: true

    def resolve(post_id:, user_id:, content:, post_type:)
      # Use the Rails method `constantize` to turn a string into a constant
      # which we know should refer to an ActiveRecord model, allowing us to run
      # the ActiveRecord method `find_by` to get the correct object with that type
      type = post_type.constantize
      post = type.find_by(id: post_id)
      reply = Reply.new(content: content, user_id: user_id, post: post)
      if reply.save
        {
          reply: reply,
          errors: []
        }
      else
        {
          reply: nil,
          errors: reply.errors.full_messages
        }
      end
    end
  end
end
</code> 

### 迷你论坛是一个为一系列博客构建的小型论坛应用程序

# [](https://zshipu.com/t?url=#creating-users-and-login-sessions)<font _mstmutation="1" _msthash="305032" _msttexthash="33837687">创建用户和登录会话</font>

我们需要将用户创建与 GraphQL 分开，以便在访问 GraphQL 终结点之前，可以轻松地要求所有用户登录。

<font _mstmutation="1" _msthash="292409" _msttexthash="158304055">因此，我们需要生成专用于用户创建功能的控制器：</font>

<code>
 rails g controller users create
</code> 

<font _mstmutation="1" _msthash="290303" _msttexthash="67256969">打开新控制器并添加以下内容：</font>

<code>
 # app/controllers/users_controller.rb
class UsersController < ApplicationController

    def create
        user = User.new(user_params)

        if user.save
            render json: user_json(user)
        else
            render json: {
                message: 'Failed to create user',
                errors: user.errors.full_messages
            }
        end
    end

    private

    # Use strong parameters to prevent any unwanted parameters from getting through.
    # The password confirmation field is required to allow BCrypt to properly hash the password.
    def user_params
        params.require(:user).permit(:name, :username, :email, :password, :password_confirmation)
    end

    # Turns a user model object into a hash which can be converted to json. Maybe
    # not necessary in a controller this small, but certainly necessary in a larger project.
    def user_json(user)
        user.as_json(only: [:id, :name, :username, :email])
    end
end
</code> 

# [](https://zshipu.com/t?url=#authenticating-users)<font _mstmutation="1" _msthash="304083" _msttexthash="14098786">验证用户</font>

由于我们使用[JWT 来处理](https://zshipu.com/t?url=https://jwt.io/)用户会话，因此我们需要添加另一个控制器，允许用户通过登录来创建这些会话。

<font _mstmutation="1" _msthash="291499" _msttexthash="129126049">创建新控制器来处理登录会话并添加以下代码：</font>

<code>
 rails g controller sessions create
</code> 

<font _mstmutation="1" _msthash="292097" _msttexthash="41619448">现在编辑新控制器：</font>

<code>
 # app/controllers/sessions_controller.rb
class SessionsController < ApplicationController

    def create
        # find the user by the username included in the parameters
        user = User.find_by(username: session_params[:username])
        # If the user exists, and can be authenticated with the given password, generate a token 
        # for the session and return it.
        if user && user.authenticate(session_params[:password])
            # Generate the token based on the user’s id. Use the value of JWT_SECRET in 
            # the `.env` file.
            token = JWT.encode({user_id: user.id}, ENV['JWT_SECRET'])
            render json: {token: token, user_id: user.id}
        else
            render json: {message: "Incorrect username or password"}
        end
    end

    private

    # Use strong parameters to make sure we only get a username and password.
    def session_params
        params.require(:session).permit(:username, :password)
    end
end
</code> 

<font _mstmutation="1" _msthash="292695" _msttexthash="158945384">为了使用变量，我们需要在根项目目录中创建一个文件。</font>
```
JWT_SECRET   
.env
```


> _为保证
```
JWT_SECRET，
```
请务必将
```
.env
```
添加到项目的
```
.gitignore
```
文件中。确保
```
.env
```
永远不会提交到可公开访问的存储库中。_

<font _mstmutation="1" _msthash="290589" _msttexthash="56055311">创建后，运行以下命令：</font>
```
.env
```


<code>
 rake secret
</code> 

<font _mstmutation="1" _msthash="291187" _msttexthash="92543815">将该命令的输出粘贴到 中的变量中：</font>
```
.env
```


<code>
 JWT_SECRET=<rake output>
</code> 

这样做将确保您有一个加密安全号码，用于编码用户的会话数据。

<font _mstmutation="1" _msthash="292084" _msttexthash="222410318">我们需要添加一个方法，以便端可以检查用户是否经过身份验证。</font>
```
current_user
```

```
ApplicationController
```


<code>
 # app/controllers/application_controller.rb

# This error is used below to specify that a session is not authenticated
class AuthenticationError < StandardError

end

class ApplicationController < ActionController::API
    def current_user
        # Authentication setting the `Access-Token` header to the result of 
        # the create session route
        token = request.headers['Access-Token']
        raise AuthenticationError if token.nil?
        # Decodes the JWT token and returns only the user id from it.
        user_id = JWT.decode(token, ENV['JWT_SECRET'])[0]['user_id']
        @user = User.find_by(id: user_id)
    end
end
</code> 

<font _mstmutation="1" _msthash="292682" _msttexthash="170339377">最后，在 GraphQL 控制器的路由中进行第一个方法调用。</font>
```
current_user
```

```
execute
```


<code>
 # app/controllers/graphql_controller.rb
class GraphqlController < ApplicationController

  def execute
    current_user
    variables = ensure_hash(params[:variables])
    ...
  end
  ...
end
</code> 

完成之后，我们准备测试我们的Mutations。

# [](https://zshipu.com/t?url=#testing-graphql-mutations-with-postman)<font _mstmutation="1" _msthash="304057" _msttexthash="42445728">使用邮递员测试 GraphQL Mutations</font>

<font _mstmutation="1" _msthash="291174" _msttexthash="930244211">要测试我们的Graph qld Mutations，我们需要在我们的数据库中有一个用户。您可以使用导轨控制台直接创建用户，也可以向使用 Postman 的发布请求发送帖子请求。</font>
```
users_controller
```


<font _mstmutation="1" _msthash="291473" _msttexthash="1922924341">创建用户后，我们必须获取访问令牌。启动 rails 开发服务器，使用要登录的用户名和密码向端端的终结点发送后请求。如果所有内容都设置正确，则您应该收到包含令牌的 json 响应。将新令牌作为标头粘贴到邮递员请求中。</font>
```
/sessions
```

```
Access-Token
```


[![Place Access Token here](https://res.cloudinary.com/practicaldev/image/fetch/s--0JKD13sY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/77rqglbmni18fhzr5hy2.png)](https://zshipu.com/t?url=https://res.cloudinary.com/practicaldev/image/fetch/s--0JKD13sY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/77rqglbmni18fhzr5hy2.png)

<font _mstmutation="1" _msthash="292071" _msttexthash="208346424">现在，我们可以再次提交 GraphQL 查询。让我们创建一个新主题：</font>
[![Run the CreateTopic mutation](https://res.cloudinary.com/practicaldev/image/fetch/s--R66DRxv9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/h3o7xb0gcllj8kzuo0ji.png)](https://zshipu.com/t?url=https://res.cloudinary.com/practicaldev/image/fetch/s--R66DRxv9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/h3o7xb0gcllj8kzuo0ji.png)

<font _mstmutation="1" _msthash="292370" _msttexthash="394876573">如您所看到的，要运行Mutations，我们必须使用关键字以及包含所有必需参数的Mutations名称和 json 对象。</font>
```
mutation
```


您也可以使用json对象来保存所有[Sq.QL变量](https://zshipu.com/t?url=https://graphql.org/learn/queries/#variables)，但对于像上面的单个查询来说，将它们放在查询字符串中要容易一些。

<font _mstmutation="1" _msthash="292968" _msttexthash="712948015">我们的后端现在应该名义上是完整的。我们可以登录和运行查询并创建对象。我们尚未实现更新对象或删除它们。尝试自己创建和Mutations。</font>
```
update   
delete
```


