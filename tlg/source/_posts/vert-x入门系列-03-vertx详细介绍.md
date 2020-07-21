title: 'vert x入门系列: 03 vertx详细介绍'
author: 知识铺
date: 2020-04-08 22:32:45
tags:
---
## **1\. 概述**

在本文中，我们将讨论[Vert.x，](https://zshipu.com/t?url=http://vertx.io/)介绍其核心概念，并使用它创建一个简单的 RESTfull Web 服务。

我们将首先介绍有关工具包的基本概念，慢慢前进到 HTTP 服务器，然后构建 RESTfull 服务。

## **2\. 关于顶点**

**Vert.x 是 Eclipse 开发人员的开源、反应式和多面体软件开发工具包**。

反应式编程是一种编程范例，与异步流相关联，这些异步流响应任何更改或事件。

同样，Vert.x 使用事件总线，与应用程序的不同部分通信，并在事件可用时异步传递给处理程序。

**我们称之为多面体，因为它支持多个 JVM 和非 JVM 语言，如 Java、Groovy、Ruby、Python 和 JavaScript。**

## **3\. 设置**

要使用 Vert.x，我们需要添加 Maven 依赖项：

```
 <dependency>

 <groupId>io.vertx</groupId>

 <artifactId>vertx-core</artifactId>

 <version>3.4.1</version>

 </dependency>
```

可[在此处](https://zshipu.com/t?url=https://search.maven.org/classic/#search%7Cga%7C1%7Cg%3A%22io.vertx%22%20a%3A%22vertx-core%22)找到依赖项的最新版本。

## **3\. 韦尔蒂克斯**

Verticles 是 Vert.x 引擎执行的代码段。该工具包为我们提供了许多抽象的格威乐类，可以根据需要扩展和实现。

作为多面体，可以用任何支持的语言编写紫光片。应用程序通常由在同一 Vert.x 实例中运行的多个 verticles 组成，并使用事件总线的事件相互通信。

要在 JAVA 中创建一个维特，类必须实现_io.vertx.core.Verticle_接口或其任何子类。

## **4\. 事件总线**

它是任何Vert.x应用的神经系统。

反应性，在收到消息或事件之前，它们一直处于休眠状态。通过活动总线相互通信。消息可以是从字符串到复杂对象的任何内容。

消息处理是理想的异步处理，消息排队到事件总线，并将控制权返回到发送方。后来，它去排队听的道。使用_"未来"_和_"回调_"方法发送响应。

## **5\. 简单的顶点应用程序**

**让我们创建一个简单的应用程序与verticle，并使用_顶点_实例部署它**。为了创建我们的韵味，我们将扩展

为了创建我们的 verticle，我们将扩展_io.vertx.core.AbstractVerticle_类并重写_start（）_方法：
```

 public class HelloVerticle extends AbstractVerticle {

 @Override

 public void start(Future<Void> future) {

 LOGGER.info("Welcome to Vertx");

 }

 }

```
在部署 verticle 时，_顶点_实例将调用_start（）_方法。该方法采用_io.vertx.core.Future_作为参数，可用于发现该凉道异步部署的状态。

现在，让我们部署这些功能：
```

 public static void main(String[] args) {

 Vertx vertx = Vertx.vertx();

 vertx.deployVerticle(new HelloVerticle());

 }

```

同样，我们可以重写_AbstractVerticle_类中的_stop（）_方法，该方法将在关闭 verticle 时调用：
```

 @Override

 public void stop() {

 LOGGER.info("Shutting down application");

 }
```

## **6\. HTTP 服务器**

现在，让我们使用 verticle 启动 HTTP 服务器：
```
 @Override

 public void start(Future<Void> future) {

 vertx.createHttpServer()

 .requestHandler(r -> r.response().end("Welcome to Vert.x Intro");

 })

 .listen(config().getInteger("http.port", 9090),

 result -> {

 if (result.succeeded()) {

 future.complete();

 } else {

 future.fail(result.cause());

 }

 });

 }

```

我们已经重写了_start（）_方法来创建一个 HTTP 服务器，并将请求处理程序附加到它。每次服务器收到请求时都会调用_请求Handler（）_方法。

最后，服务器绑定到端口，如果出现任何错误，无论连接或服务器启动是否成功_，AsyncResult<HttpServer>_处理程序都传递给_listen（）_方法。

请注意_：config.getInteger（）_方法正在读取从外部_conf.json_文件加载的 HTTP 端口配置的值。

让我们测试我们的服务器：
```
 @Test

 public void whenReceivedResponse_thenSuccess(TestContext testContext) {

 Async async = testContext.async();

 vertx.createHttpClient()

 .getNow(port, "localhost", "/", response -> {

 response.handler(responseBody -> {

 testContext.assertTrue(responseBody.toString().contains("Hello"));

 async.complete();

 });

 });

 }

```

对于测试，让我们使用顶点单元和 JUnit：
```
 <dependency>

 <groupId>io.vertx</groupId>

 <artifactId>vertx-unit</artifactId>

 <version>3.4.1</version>

 <scope>test</scope>

 </dependency>

```

我们可以[在这里](https://zshipu.com/t?url=https://search.maven.org/classic/#search%7Cga%7C1%7Cg%3A%22io.vertx%22%20a%3A%22vertx-unit%22)得到最新版本。

在单元测试的_setup（）_方法中，在_顶点_实例中部署 verticle：
```

 @Before

 public void setup(TestContext testContext) {

 vertx = Vertx.vertx();

 vertx.deployVerticle(SimpleServerVerticle.class.getName(),

 testContext.asyncAssertSuccess());

 }

```

同样，在_@AfterClass拆解（）_方法中闭合_了顶点_实例：
```
 @After

 public void tearDown(TestContext testContext) {

 vertx.close(testContext.asyncAssertSuccess());

 }

```

请注意_，@BeforeClass setup（）_方法采用_TestContext_参数。这有助于控制和测试测试的异步行为。例如，威风部署是异步的，因此基本上，除非部署正确，否则我们无法测试任何内容。

我们有第二个参数到_部署Verticle（）_方法_，testContext.异步断言成功（）。__T_他用于了解服务器部署正确或发生任何故障。它等待_将来。_如果失败，它将通过测试。

## **7\. RESTful 网络服务**

我们已经创建了一个 HTTP 服务器，现在让我们使用它来托管 RESTfull Web 服务。为此，我们需要另一个称为**vertx-web 的**Vert.x 模块。这为**顶点核心**之上的 Web 开发提供了许多附加功能。

让我们将依赖项添加到_pom.xml：_
```

 <dependency>

 <groupId>io.vertx</groupId>

 <artifactId>vertx-web</artifactId>

 <version>3.4.1</version>

 </dependency>

```

我们可以[在这里](https://zshipu.com/t?url=https://search.maven.org/classic/#search%7Cga%7C1%7Cg%3A%22io.vertx%22%20a%3A%22vertx-web%22)找到最新版本。

### **7.1._路由器_和_路由_**

让我们_为_Web 服务创建路由器。此路由器将采取 GET 方法的简单路由，处理程序方法_get Artilces（）_：
```

 Router router = Router.router(vertx);

 router.get("/api/baeldung/articles/article/:id")

 .handler(this::getArticles);

```

_get她（）_方法是一种返回新_文章_对象的简单方法：
```

 private void getArticles(RoutingContext routingContext) {

 String articleId = routingContext.request()

 .getParam("id");

 Article article = new Article(articleId,

 "This is an intro to vertx", "baeldung", "01-02-2017", 1578);

 routingContext.response()

 .putHeader("content-type", "application/json")

 .setStatusCode(200)

 .end(Json.encodePrettily(article));

 }

```

_路由器_在收到请求时，会查找匹配路由，并进一步传递请求。具有与其关联的处理程序方法的_路由_对请求执行总和。

在我们的案例中，处理程序调用_getA（）_方法。它将_路由上下文_对象作为参数接收。派生路径参数_ID，_并使用它创建_一个文章_对象。

在方法的最后一部分中，让我们调用_路由上下文_对象上的_响应（）_方法，并放置标头，设置 HTTP 响应代码，并使用 JSON 编码_的文章_对象结束响应。

### **7.2\. 将_路由器_添加到服务器**

现在，让我们将上一节中创建的_路由器_添加到 HTTP 服务器：
```

 vertx.createHttpServer()

 .requestHandler(router::accept)

 .listen(config().getInteger("http.port", 8080),

 result -> {

 if (result.succeeded()) {

 future.complete();

 } else {

 future.fail(result.cause());

 }

 });

```

请注意，我们已经向服务器添加了_请求处理程序（路由器：：接受）。 _这指示服务器在收到任何请求时调用_路由器_对象的_accept（）。_

现在，让我们测试我们的 Web 服务：
```
 @Test

 public void givenId_whenReceivedArticle_thenSuccess(TestContext testContext) {

 Async async = testContext.async();

 vertx.createHttpClient()

 .getNow(8080, "localhost", "/api/baeldung/articles/article/12345",

 response -> {

 response.handler(responseBody -> {

 testContext.assertTrue(

 responseBody.toString().contains("\"id\" : \"12345\""));

 async.complete();

 });

 });

 }

```

## **8\. 包装顶点应用程序**

要将应用程序打包为可部署的 Java 存档 （.jar），我们使用 Maven Shade 插件_和执行_标记中的配置：
```

 <configuration>

 <transformers>

 <transformer

 implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">

 <manifestEntries>

 <Main-Class>io.vertx.core.Starter</Main-Class>

 <Main-Verticle>com.baeldung.SimpleServerVerticle</Main-Verticle>

 </manifestEntries>

 </transformer>

 </transformers>

 <artifactSet />

 <outputFile>

 ${project.build.directory}/${project.artifactId}-${project.version}-app.jar

 </outputFile>

 </configuration>
```
 

在_清单条目_中_，Main-Verticle_指示应用程序的起点，_主类_是 Vert.x 类，它创建_顶点_实例并部署_主 Verticle。_

## **9\. 结论**

在本介绍性文章中，我们讨论了 Vert.x 工具包及其基本概念。了解如何创建和 HTTP 服务器，使用 Vert.x 和 RESTFull Web 服务，并演示如何使用_顶点单元_对其进行测试。

最后将应用程序打包为可执行的 jar。

代码段的完整实现可在[GitHub 上完成](https://zshipu.com/t?url=https://github.com/eugenp/tutorials/tree/master/vertx)。