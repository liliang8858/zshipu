
title: Graphql实战：自动执行后端测试 三
author: 知识铺
date: 2020-07-09 13:22:30
tags:
---
 
# [](https://zshipu.com/t?url=#why-automate-tests)<font _mstmutation="1" _msthash="288483" _msttexthash="42875820">为什么要自动测试？</font>

自动测试最简单和最明显的原因是它使开发人员能够保证他们的代码在某些级别上工作，而不必打开 Web 浏览器并手动执行应用程序。

自动测试有助于确保应用程序的所有部分按预期工作并按设计协同工作，从而确保代码质量的基线级别。手动测试应用程序是无可替代的，但如果您想知道是否正确设置了关联，自动测试可以节省打开导轨控制台和手动设置环境的麻烦。

在大多数情况下，一套自动化测试可以在比人类手动运行更少的时间内完成更多的测试，从而在初始开发阶段节省时间，并能够在代码出现问题之前检测损坏的代码。最后，自动测试通过帮助开发人员在可能的失败点缩小范围来简化调试过程，使开发人员能够发现其代码库的哪些部分功能正常，哪些部分不能正常工作。

# [](https://zshipu.com/t?url=#principles-for-writing-good-tests)<font _mstmutation="1" _msthash="289679" _msttexthash="34725145">编写良好测试的原则</font>

尽管测试对于维护高质量代码至关重要，但存在代码测试的事实并不能证明代码是好的。

编写良好测试的第一步是编写可测试的代码。可测试代码是可预测的代码。设计方法和函数，以给定相同输入的方式工作，它们将始终返回相同的输出。

在设计方法或函数时，尝试使用纯函数以实现最大的可预测性。纯函数是给定相同输入时，始终返回相同的输出且无副作用的函数。例如，如果每次 x = 6 的输出为 12，f/x） 是纯函数。另一方面，如果 f（x） 在返回 12 之前向文件写入内容，则它有副作用，而不是纯粹的函数。

纯函数是理想的，但它们并不总是可行的。识别纯函数何时可以使用纯函数，何时可以使用纯函数， 何时可以使用纯函数。

可测试代码最重要的属性是，它通常是可预测的。函数的可预测最基本的方式是，它返回一个已知输出，假设所有输入都是已知的。

# [](https://zshipu.com/t?url=#writing-rails-tests)<font _mstmutation="1" _msthash="303784" _msttexthash="22246055">编写导轨测试</font>

Ruby on Rails 使用称为 Minitest 的框架内置测试集成功能。我决定坚持使用此项目的 Minitest 而不是 RSpec 来减少依赖关系和所需的配置量，尽管使用 RSpec 编写测试是一个类似的过程。

Rails 在生成模型时生成起始文件，因此，如果您遵循上周的文章，则应该已设置项目结构以编写测试。

# [](https://zshipu.com/t?url=#fixtures)<font _mstmutation="1" _msthash="304720" _msttexthash="4247451">夹具</font>

夹具是使用 Minitest 编写自动化测试的关键部分。夹具允许开发人员访问存储在测试数据库中的模型。

<font _mstmutation="1" _msthash="292110" _msttexthash="2479196707">要编写夹具，只需为要添加的模型打开适当的夹具，并使用[YAML](https://zshipu.com/t?url=https://en.wikipedia.org/wiki/YAML)格式添加新夹具。夹具可以在 中找到。每个固件都有一个名称，后跟在模型架构中声明的属性列表。每个属性都是键值对，键是属性的名称，对的值是属性的值。在 YAML 中，键值对由冒号分隔。</font>
```
tests/fixtures/<modelname>.yml
```


<font _mstmutation="1" _msthash="292409" _msttexthash="2107707134">在测试中，固件被赋予一个与模型名称对应的方法。使用夹具库提供的方法访问模型夹具。若要获取特定的夹具，请将夹具的名称作为符号传递，以便获取名为"demo"的用户固件，您需要编写类似 ： 。我们需要各种装置进行测试。</font>
```
User users  user = users(:demo)
```


# [](https://zshipu.com/t?url=#writing-the-tests)<font _mstmutation="1" _msthash="305968" _msttexthash="13060203">编写测试</font>

让我们通过编写测试来开始编写测试，以确认我们的验证和关联设置正确。我不会详细说明我写的所有测试，因为有很多，但如果你有兴趣，你可以在这里[找到他们所有](https://zshipu.com/t?url=https://github.com/speratus/miniforum/tree/part2-testing/test)。

<font _mstmutation="1" _msthash="290602" _msttexthash="141360154">第一个测试将确保有效对象如预期的那样保存：</font>

 <code># test/models/user_test.rb
test "Saves valid objects" do
    user = User.new(
      username: "jon",
      name: "Jon doe",
      email: "hello@world.com",
      password: "nobody knows"
    )

    assert_equal true, user.save
end</code> 

<font _mstmutation="1" _msthash="291200" _msttexthash="5571204470">在顶部，测试线声明一个新的测试，并给它一个识别说明。测试中最重要的行是行。断言相等意味着如果第二个参数不等于第一个参数，测试套件将失败。的第一个参数是断言的预期结果，第二个参数是正在测试的结果。在我们的案例中，我们希望返回 true，因为这意味着已成功保存新的用户对象。如果新用户无效，则返回 false。Minitest 内置了多种断言。他们是什么，他们做什么可以在这里[找到](https://zshipu.com/t?url=https://docs.ruby-lang.org/en/2.1.0/MiniTest/Assertions.html)。</font>
```
assert_equal assert_equal user.save user.save
```


编写测试以编写测试时，这是一个好主意，在编写通过的测试之前，您知道该测试会失败，从而确保您知道新的测试用例会测试您打算测试的测试。首先编写失败的测试可以查看代码正在运行。测试驱动开发中的常见做法是在实际编写代码之前编写测试。这证明测试工作正常，而且代码在测试通过后也有效。我没有时间深入测试驱动开发，但快速的 Google 搜索会很快为您提供有用的文章，详细说明为什么以及如何进行测试驱动开发。

<font _mstmutation="1" _msthash="291798" _msttexthash="74895093">编写测试后，请运行测试：</font>

 <code>rake</code> 

# [](https://zshipu.com/t?url=#setting-up-travis-ci)<font _mstmutation="1" _msthash="305643" _msttexthash="28509858">设置特拉维斯 · 西</font>

Travis 是一个持续集成/持续部署服务，与 GitHub 紧密集成。持续集成是将应用程序中的本地更改与主存储库持续组合的过程。在添加新更改时持续运行测试，使开发人员能够捕获代码中的中断，然后再成为严重问题。

设置 Travis 会导致每次提交时运行测试，如果出现任何失败，则提供实时更新。

Travis 有一个免费的开源选项，开发人员可以使用他们的 GitHub 注册。

<font _mstmutation="1" _msthash="290888" _msttexthash="1696572956">登录后，单击"我的存储库"选项卡旁边的加号按钮，然后查找论坛应用的存储库。选择它，然后单击激活，使 Travis 跟踪它。
但是，为了让 Travis 对存储库执行任何准备，我们需要在根项目目录中设置一个。</font>
```
.travis.yml
```


<font _mstmutation="1" _msthash="291187" _msttexthash="118218100">在我们的案例中，它应该看起来像这样：</font>

 <code>language: ruby
rvm:
  - 2.7

# Everything after this point is necessary for Travis to work with Postgres

services:
  - postgresql

before_script:
  - psql -c 'create database travis_ci_test;' -U postgres</code> 

<font _mstmutation="1" _msthash="291785" _msttexthash="472157426">由于我们使用 Postgres 作为数据库引擎，因此我们必须更改文件以告诉 Rails 要使用哪个用户进行测试。</font>
```
database.yml
```


<font _mstmutation="1" _msthash="292084" _msttexthash="77656267">打开测试部分并更改为以下内容：</font>
```
config/database.yml
```


 <code># config/database.yml
Test:
  <<: *default
  database: travis_ci_test
  adapter: postgresql</code> 

这应该是设置特拉维斯需要的一切！

# [](https://zshipu.com/t?url=#failed-tests)<font _mstmutation="1" _msthash="306254" _msttexthash="18141656">失败的测试</font>

<font _mstmutation="1" _msthash="293280" _msttexthash="282290528">如果您查看用户模型的测试，[您](https://zshipu.com/t?url=https://github.com/speratus/miniforum/blob/part2-testing/test/models/user_test.rb)会看到我写了测试以确保格式验证有效：</font>

 <code>test "will not save a user with an invalid username" do
    user = User.new(
      username: 'jon++++. cool',
      name: 'jon doe',
      email: 'hello@world.com',
      password: 'nobody knows'
    )
    assert_equal false, user.save
  end

  test "will not save a user with an invalid email address" do
    user = User.new(
      username: 'jon',
      name: 'jon doe',
      email: 'hello@world@universe.co',
      password: 'nobody knows'
    )
    assert_equal false, user.save
  end</code> 

在这里，我确保所有数据都有效，但我要测试的属性除外，以消除另一个属性导致其失败的可能性。如果您只是复制并粘贴这些测试，然后运行该套件，您会发现这两个测试失败。换句话说，通过运行测试，我们能够确定这些属性的验证不能正常工作：它们验证了它们不应该验证的东西！

<font _mstmutation="1" _msthash="291473" _msttexthash="1343196855">在进行了一些挖掘之后，我发现这些测试失败的原因是，如果正则表达式与属性中的任意位置匹配，则验证将认为该属性有效，并且这两个属性的一部分将匹配，而不是整个属性。</font>
```
format
```


为了解决这个问题，我写了自定义验证，你可以在这里[找到](https://zshipu.com/t?url=https://github.com/speratus/miniforum/blob/part2-testing/app/models/user.rb)。

