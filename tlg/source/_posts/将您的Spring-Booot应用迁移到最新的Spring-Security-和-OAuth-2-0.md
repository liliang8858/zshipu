title: 将您的Spring Booot应用迁移到最新的Spring Security 和 OAuth 2.0
author: 知识铺
date: 2020-03-31 13:35:01
tags:
---
Spring Boot 1.5.x 使 Spring Security 与 OAuth 2.0 集成到应用程序中比以往更加容易。Spring Boot 2.1.x 通过使 OpenID Connect 成为堆栈中的一级公民，将其拨号至 11。

在此帖子中，您从Spring boot 1.5.19 和Spring Security 4.2.x 开始。您将其与奥克塔的 OAuth 服务集成。从那里，您将转到Spring boot 2.1.3 和Spring Security 5.1。您将看到与 Okta 的集成方式变得更加容易。最后，您将 Okta 的Spring boot器与Spring boot 2.1.3 一起使用，以进一步减少代码和配置。

## [OpenID 连接和 OAuth 2.0 的三分钟概述](#three-minute-overview-of-openid-connect-and-oauth-20)

起初，有孤立的网站，没有彼此交谈，这是可悲的。

像 Yelp 这样的网站开始希望访问您在 Google 联系人中的联系信息。因此，Yelp 自然会收集您的 Google 用户名和密码，以便访问您的联系人。你给了叶尔普你的许可，所以这很好，是吗？不！使用您的用户名和密码，Yelp 可以访问您的电子邮件、文档 （Google 中的所有内容），而不仅仅是您的联系人。更糟糕的是，Yelp 不得不以一种可以明文使用的方式存储您的密码，并且没有标准的方式撤销您对 Yelp 访问 Google 帐户的同意。

我们需要一个授权框架，允许您在不放弃密码的情况下授予对某些信息的访问权限。提示奥阿特

三个修订后，我们在OAuth 2.0（有1.0和1.0a之前），一切是正确的与世界。现在，像Yelp （a ） 这样的应用程序可以从像谷歌 （a ） 这样的服务中请求。您 （） 使用您的凭据登录 Google，并将您的凭据交给 Yelp 以访问您的联系人（以及仅您的联系人）。 在手，Yelp 提出 Google 联系人 API （） 的请求，并获得您的联系人。Yelp 永远不会看到您的密码，也永远不会访问任何您同意的以外的任何内容。而且，您可以随时撤回您的同意。`Client Application``Access Token``Authorization Server``Resource Owner``Consent``Access Token``Resource Server`

在这个同意和授权的新世界里，只有一件事缺失：身份。提示打开 ID 连接。OIDC 是 OAuth 2.0 之上的一个薄层，它引入了一种新的令牌类型：标识令牌。在这些以[JWT](https://developer.okta.com/docs/api/resources/oidc#access-token)格式加密签名的令牌中编码，是有关经过身份验证的用户的信息。这开启了互操作性和单一登录水平的新水平的大门。

OAuth（以及扩展 OIDC）使用许多已定义的来管理 和 之间的交互。在这篇文章中，您将专注于 。此流旨在从您的浏览器中启动，如下所示：`Flows``Client App``Authorization Server``Resource Server``Authorization Code Flow`

1.  Yelp 希望访问您的联系人。它显示一个按钮来链接您的谷歌联系人。
2.  单击该按钮时，您将被重定向到 Google，您使用用户名和密码登录（如果您尚未登录）。
3.  Google 会显示一个屏幕，告诉您 Yelp 希望以只读访问您的联系人。
4.  一旦您同意，Google 会通过您的浏览器重定向回 Yelp，并带有临时代码（称为授权代码）
5.  使用此代码，Yelp 联系 Google 进行访问令牌交易
6.  Google 验证代码，如果所有签出，则向 Yelp 发出功能有限的访问令牌（仅读访问您的联系人）
7.  然后，Yelp 向 Google 联系人 API 提供访问令牌
8.  Google 联系人 API 验证令牌，如果请求与令牌标识的功能匹配，则将您的联系人列表返回 Yelp

## [OAuth 2.0 和SpringBoot](#oauth-20-and-spring-boot)

[Spring](https://spring.io/)已是第17个年头。Spring及其包含的许多项目（如Spring Security）是浩大的。

公平地说，位于Spring及其众多项目的发动机是配置。Spring Boot 将"约定超过配置"的概念带到了 Spring 的世界，以便您可以快速启动和运行生产就绪应用程序。它通过有意见的自动配置系统（如果需要，可以覆盖该系统）来达到这个要求。

[Spring Security](https://spring.io/projects/spring-security)在Spring中正式化和身份验证和授权方法。

OAuth 和 OIDC 非常适合Spring Security构建，在最新版本的 Spring Boot（本文撰写时为[2.1.3](https://spring.io/projects/spring-boot)版）和Spring Security版（截至本文撰写时为[5.1.4](https://docs.spring.io/spring-security/site/docs/5.1.4.RELEASE/reference/htmlsingle/)版）中，这些标准现在是一流的公民。

如果您一直在使用 Spring Boot 1.5.x 进行 OAuth 和 OIDC，则需要做一些迁移工作才能进入 Spring Boot 2.1.x 的新世界，但这是值得的。

在迁移路径中穿行的示例代码中，您将与 Okta 的 OAuth 和 OIDC 服务集成。但是，您可以按照本指南联系任何符合 OAuth 和 OIDC 的提供商。

## [配置打开 ID 连接](#configure-openid-connect)

Okta 可为您的应用程序配置 OIDC 和 OAuth 2.0。所有你需要做的是提供一些基本的信息，Okta做所有的重担。是OaaS！（Auth 作为服务）。

获取 Okta 设置与 OIDC 和 OAuth 2.0 在[代码](https://github.com/oktadeveloper/okta-spring-boot-oauth2-migration-example)中找到的Spring boot示例。只需执行此配置一次，才能在 3 个代码示例中使用。

首先，先[https://developer.okta.com/signup/，为自己](https://developer.okta.com/signup/)创建一个免费的开发者Okta组织。按照说明激活您的组织。

### [在奥克塔创建 OIDC 应用程序](#create-an-oidc-application-in-okta)

从 Okta 管理员 UI 菜单中单击`Applications`

![知识铺-pasted-253.png](https:\/\/blog.zshipu.com/tlg/images/pasted-253.png)
单击并单击该选项。`Add Application``Web`

![知识铺-pasted-254.png](https:\/\/blog.zshipu.com/tlg/images/pasted-254.png)

点击。输入 应用的 。添加另一个登录重定向 Uri： 。保留所有其他默认值。`Next``Name``Login Redirect URIs``http://localhost:8080/login/oauth2/code/okta``http://localhost:8080/login`

![知识铺-pasted-255.png](https:\/\/blog.zshipu.com/tlg/images/pasted-255.png)

注： 您添加两个不同的登录重定向 uris 来支持 Spring Boot 的不同版本。在 2.1.x 版本中，您将使用：`http://localhost:8080/login/oauth2/code/okta`

点击。向下滚动并捕获 和 值。`Done``Client ID``Client Secret`



![知识铺-pasted-256.png](https:\/\/blog.zshipu.com/tlg/images/pasted-256.png)

就是这样！四个步骤。还不算太糟

## [玩Spring boot打开 ID 连接和 OAuth 2.0 游戏](#play-the-spring-boot-openid-connect-and-oauth-20-game)

[代码示例](https://github.com/oktadeveloper/okta-spring-boot-oauth2-migration-example)分为 3 个 maven 模块： 和 。这些是完全封闭的示例，它们之间没有父关系。他们做每个都有正确的版本，为该示例。这使得文件比必要的更详细，但它使它可以运行完全独立的 和每个版本的 每个版本。您甚至可以为每个版本使用不同的 JVM 版本。`oauth2-demo-1.5``oauth2-demo-2.1``okta-oauth2-demo-2.1``spring-boot-starter-parent``pom.xml``Client Application``Resource Server`


每个版本的示例代码都有四个主文件

1.  `pom.xml`- 标识依赖项
2.  `application.yml`- OIDC 和 OAuth 所需的配置
3.  `DemoApplication.java`- 客户端应用程序
4.  `DemoResourceServer.java`- 资源服务器

在每种情况下，我都设定了最小化依赖项、配置和注释以完成工作的目标。此外，应用程序代码、控制器代码和配置代码被人为地包含在单个文件中。这是为了保持这个例子清楚和简洁。在真实应用程序中，您将这些顾虑分离到他们自己的类中。

当您启动 时，它将在**http://localhost:8080**上收听。当您启动 时，它将在**http://localhost:8081**上收听。`DemoApplication``ResourceServer`

默认情况下，Spring Security 可保护所有路径（无论您是否使用 OIDC 和 OAuth）。当您第一次导航到**http://localhost:8080/**时，您将重定向到 Okta 进行身份验证。然后，您将被重定向回，您将在浏览器中看到您的全名。`DemoApplication`

接下来，如果导航到**http://localhost:8080/api**，则 将对上面进行身份验证时设置 的 api 调用 。这一切都是在幕后完成的。在浏览器中，您将看到一个响应，指示您能够访问受保护的资源。而且，为了达到良好程度，您可以尝试直接导航到**http://localhost:8081/api**。您应该看到该请求失败，因为没有访问令牌。`Client Application``Resource Server``Access Token`

查看代码的每个版本之间的差异。

## [钻研Spring boot资源服务器代码](#delving-the-spring-boot-resource-server-code)

在每个示例中，资源服务器代码几乎相同：

```
 @RestController
@SpringBootApplication
public class OAuth2DemoResourceServer_1_5 {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(OAuth2DemoResourceServer_1_5.class);
        app.setDefaultProperties(Collections.singletonMap("server.port", "8081"));
        app.run(args);
    }

    @GetMapping("/api")
    String api() {
        return "Made it to protected api on resource server!";
    }
}
``` 

单独查看此代码 （没有依赖项和配置的上下文） 您可能倾向于认为它只是一个普通的旧 REST 控制器。但是，由于这些依赖关系和配置，它连接到 OAuth 框架。

代码中的一大区别是，对于 Spring Boot 1.5.x 版本，您需要在类中包含注释。在 Spring Boot 2.1.x 版本中，您不需要该注释。`@EnableResourceServer`

其余差异在依赖项和配置上，将在下面介绍。

## [使用Spring boot 1.5.x、Spring安全 4.2.x 和 OAuth 2.0](#using-spring-boot-15x-spring-security-42x-and-oauth-20)

这个版本的Spring和Spring Security做了很长的路，使工作与OAuth 2.0文明。你在下面看到，没有太多。它在新版本中变得更好！

### [资源服务器依赖项和配置](#resource-server-dependencies-and-configuration)

查看资源服务器的文件：`pom.xml`

 ```
 <dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.security.oauth</groupId>
        <artifactId>spring-security-oauth2</artifactId>
    </dependency>
</dependencies>
``` 

如您所见，Spring Security 4.2.x 具有 OAuth2 支持作为辅助依赖项。

查看配置文件：`application.yml`

 ```
 security:
  oauth2:
    client:
      clientId: {okta client id}
      clientSecret: {okta client secret}
    resource:
      tokenInfoUri: https://{yourOktaDomain}.okta.com/oauth2/default/v1/introspect
``` 

只需要 a 和 。`clientId``clientSecret``tokenInfoUri`

Okta 使用 JWT 进行访问令牌。这意味着_您可以在本地_验证 JWT 是 （a） 获取与用于签名的私钥匹配的公钥，以及 （b） 从 JWT 的有效负载中解析值（例如，当它过期时）。

但是，对于 Spring Boot 1.5，这需要额外的配置和其他代码。因此，为了保持一切尽可能简单，此版本的资源服务器使用 [inspect]（https：//auth.net/2/令牌内省/）请求。但是，此选择的影响是，资源服务器每次收到请求时都会对 Okta 进行 API 调用，以便 Okta 验证访问令牌。

在其他示例中，您将看到 JWT 处理是内置的，更易于配置和管理。此外，值得注意的是，早期版本的OktaSpring boot器包括支持验证和分析JWT访问令牌，所以如果你必须使用Spring boot1.5.x，看看[OktaSpring boot器的](https://github.com/okta/okta-spring-boot/tree/okta-spring-boot-parent-0.6.1)匹配版本。

### [客户端应用程序依赖项、配置和代码](#client-application-dependencies-configuration-and-code)

客户端应用程序具有与资源服务器相同的三个依赖项： 和 。`spring-boot-starter-security``spring-boot-starter-web``spring-security-oauth2`

下面是文件：`application.yml`

 ```
 security:
  oauth2:
    client:
      clientId: {okta client id}
      clientSecret: {okta client secret}
      accessTokenUri: https://{yourOktaDomain}.okta.com/oauth2/default/v1/token
      userAuthorizationUri: https://{yourOktaDomain}.okta.com/oauth2/default/v1/authorize
      clientAuthenticationScheme: form
      scope: openid profile email
    resource:
      userInfoUri: https://{yourOktaDomain}.okta.com/oauth2/default/v1/userinfo
      server: http://localhost:8081
``` 

在这里，您显式配置 OAuth 授权代码流中所需的每个组件。客户端应用程序将重定向以启动授权服务器 （Okta） 的流。一旦 Okta 重定向临时授权代码，客户端应用程序将使用 该值与授权服务器交换授权代码以访问令牌。与授权服务器的这两种交互都需要 和 。用于获取有关经过身份验证的用户的信息，并且需要访问令牌。`userAuthorizationUri``accessTokenUri``clientId``clientSecret``userInfoUri`

的值是客户端应用程序用于标识访问资源服务器的位置的自定义属性。它的完整配置坐标是： 。`server``security.oauth2.resource.server`

查看客户端应用程序代码：

 ```
 @EnableOAuth2Sso
@RestController
@SpringBootApplication
public class OAuth2DemoApplication_1_5 {

    @Value("#{ @environment['security.oauth2.resource.server'] }")
    private String resourceServerUrl;

    private OAuth2ProtectedResourceDetails resource;

    public OAuth2DemoApplication_1_5(OAuth2ProtectedResourceDetails resource) {
        this.resource = resource;
    }

    public static void main(String[] args) {
        SpringApplication.run(OAuth2DemoApplication_1_5.class, args);
    }

    @GetMapping("/")
    String home(OAuth2Authentication authentication) {

        return "Hello " + authentication.getName();
    }

    @GetMapping("/api")
    String api(OAuth2Authentication authentication) {
        return tokenRelayTemplate(authentication)
            .getForObject(resourceServerUrl + "/api", String.class);
    }

    private OAuth2RestTemplate tokenRelayTemplate(OAuth2Authentication authentication) {
        OAuth2AuthenticationDetails details = 
            (OAuth2AuthenticationDetails) authentication.getDetails();
        OAuth2ClientContext context = new DefaultOAuth2ClientContext(
            new DefaultOAuth2AccessToken(details.getTokenValue())
        );

        return new OAuth2RestTemplate(resource, context);
    }
}
``` 

注释是挂钩到此类中的库所必需的。`@EnableOAuth2Sso``spring-security-oauth2`

根映射方法 - 以对象作为其参数。显示全名。当您访问此路径时，Spring Security 将自动启动授权代码流。`@GetMapping("/")``OAuth2Authentication``getName()`

为了使客户端应用程序对资源服务器进行 API 调用，可以使用 。这是一种通常进行 RESTful API 调用的机制，在这种情况下，您可以使用实例传递作为授权代码流一部分自动（和内部）设置的访问令牌。更详细地看一下。`RestTemplate``OAuth2RestTemplate`

该方法的内脏是好和紧凑：`api``return tokenRelayTemplate(authentication).getForObject(resourceServerUrl + "/api", String.class);`

将对象传递到私有方法的调用中，然后从那里，它只是一个标准方法调用，url 指向资源服务器的 api 终结点 （http://localhost:8081/api）。`OAuth2Authentication``tokenRelayTemplate``RestTemplate.getForObject`

重担在方法中完成。将方法调用 （返回 ） 转换为 。这是此代码中的第一个"ding" - 需要强制转换方法调用结果。`tokenRelayTemplate``authentication.getDetails()``Object``OAuth2AuthenticationDetails`

获得对象后，可以使用其方法获取原始访问令牌（在 Okta 的情况下，这将是 JWT）。这使我们能够完成 OAuth2RestTemplate 的创建，并且当发出资源服务器的请求时，访问令牌现在将自动在 HTTP 授权标头中发送。`OAuth2AuthenticationDetails``getTokenValue()`

## [使用Spring boot 2.1.x、Spring安全 5.1.x 和 OAuth 2.0](#using-spring-boot-21x-spring-security-51x-and-oauth-20)

有了这个版本的Spring boot和Spring Security，OAuth 2.0 和 OpenID Connect 作为一流的公民被带入折叠。这将更改依赖项、配置和代码 - 所有功能都更好。

### [资源服务器依赖项和配置](#resource-server-dependencies-and-configuration-1)

下面是文件：`pom.xml`

 ```
 <dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
``` 

再次你有3个依赖项，但这次你摆脱了直接的Spring Securityauth2引用，而是使用正式的Spring boot器： 。这为我们提供了所有明智的默认值和其他启动器的自动配置。`spring-boot-starter-oauth2-resource-server`

接下来是配置文件：`application.yml`

 ```
 spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          jwk-set-uri: https://{yourOktaDomain}.okta.com/oauth2/default/v1/keys
``` 

嗯，这是一股清新的空气！所有资源服务器需求都是 （JWT 密钥集） 终结点。此终结点返回资源服务器用于验证访问令牌的加密签名的一组公钥。`jwks`

从较小的配置文件的角度来看，这不仅仅是一个好处。使用完全相同的代码（减去注释），您可以从本地验证访问令牌中获益，从而减轻了对授权服务器进行其他 Introspect 调用的需求。我们的资源服务器将抓取公钥一次，然后在本地验证传入访问令牌 - 非常高效。`@EnableResourceServer`

### [客户端应用程序依赖项、配置和代码](#client-application-dependencies-configuration-and-code-1)

下面是客户端应用程序的文件：`pom.xml`

 ```
 <dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-oauth2-client</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-webflux</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
``` 

这一次，除了和Spring boot器启动器，你有启动器。这为我们提供了客户端应用程序的所有合理的默认值和自动配置。这种新方法还减少了必须引入项目的代码量。您有一个单独的资源服务器启动器，以及客户端应用程序的单独启动器。`spring-boot-starter-security``spring-boot-starter-web``spring-boot-starter-oauth2-client`

最后一个依赖项 是 您将用来对资源服务器进行 api 调用而不是使用 。下面将介绍更多内容。`spring-boot-starter-webflux``RestTemplate`

接下来，`application.yml`

 ```
 spring:
  security:
    oauth2:
      client:
        provider:
          okta:
            issuer-uri: https://{yourOktaDomain}.okta.com/oauth2/default
        registration:
          okta:
            client-id: {okta client id}
            client-secret: {okta client secret}
      resource:
        server: http://localhost:8081
``` 

在这种情况下，您只需要 和 。OAuth 集成将使用已知的终结点自动检索授权服务器的授权和令牌终结点。您可以通过浏览到：`client-id``client-secret``issuer-uri`

`https://{yourOktaDomain}.okta.com/oauth2/default/.well-known/oauth-authorization-server`

您将返回一个 json 文档，该文档包含 Okta 授权服务器的所有配置信息，包括指向 JWT 密钥集 uri 的链接。

您还可以在坐标处对资源服务器进行自定义配置： 。`spring.security.oauth2.resource.server`

请注意，该配置中嵌入了该配置。您现在可以在代码中用作命名提供程序。接下来看看。`okta``spring.security.oauth2.client.provider.okta.issuer-uri``okta`

下面是客户端应用程序：

 ```
 @RestController
@SpringBootApplication
public class OAuth2DemoApplication_2_1 {

    @Value("#{ @environment['spring.security.oauth2.resource.server'] }")
    private String resourceServerUrl;

    private WebClient webClient;

    public OAuth2DemoApplication_2_1(WebClient webClient) {
        this.webClient = webClient;
    }

    public static void main(String[] args) {
        SpringApplication.run(OAuth2DemoApplication_2_1.class, args);
    }

    @GetMapping("/")
    String home(@AuthenticationPrincipal OidcUser user) {
        return "Hello " + user.getFullName();
    }

    @GetMapping("/api")
    String api() {
        return this.webClient
            .get()
            .uri(this.resourceServerUrl + "/api")
            .retrieve()
            .bodyToMono(String.class)
            .block();
    }

    @Configuration
    public static class OktaWebClientConfig {

        @Bean
        WebClient webClient(
            ClientRegistrationRepository clientRegistrations, 
            OAuth2AuthorizedClientRepository authorizedClients
        ) {
            ServletOAuth2AuthorizedClientExchangeFilterFunction oauth2 =
                new ServletOAuth2AuthorizedClientExchangeFilterFunction(
                  clientRegistrations, authorizedClients
                );
            oauth2.setDefaultOAuth2AuthorizedClient(true);
            oauth2.setDefaultClientRegistrationId("okta");
            return WebClient.builder()
                .apply(oauth2.oauth2Configuration())
                .build();
        }
    }
}
``` 

您不再需要注释。OAuth2 和 OIDC 现在是Spring和Spring Security生态系统中的一流公民。`@EnableOAuth2Sso`

查看根映射。这将启动授权代码流。这一次，您可以注入一个对象，该对象填充了作为此流的一部分从 ID 令牌获得的所有信息。用于返回经过身份验证的用户的全名。`OidcUser``OidcUser.getFullName()`

通过构造函数依赖项注入，您可以访问对象。Spring 的新指南一般是使用而不是和最新版本的Spring boot和Spring Security遵循此。 由于依赖项，在范围内。该方法使用应用程序.yml 的文件（http://localhost:8081/api）。这看起来像对终结点的普通 HTTP GET 方法请求。但是，在授权代码流期间获取的访问令牌作为此请求的一部分一起发送，这是资源服务器的要求。`WebClient``WebClient``RestTemplate``WebClient``spring-boot-starter-webflux``api``WebClient object to make an api call to the Resource Server as configured in the`

要理解这背后的机制，可以检查将 公开为 的嵌入式类。`@Configuration``WebClient``Bean`

由于通常用于[反应](https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html)性应用程序上下文，因此您需要一些胶水，使其在传统的 Servlet 方法的上下文中工作，这就是此示例的组织方式。`WebClient`

为此创建对象。而且，由于可以配置任意数量的客户端应用程序，因此将默认值设置为命名配置：（以前在文件中显示）。`ServletOAuth2AuthorizedClientExchangeFilterFunction``okta``application.yml`

使用 生成器[模式](https://dzone.com/articles/creational-design-patterns-builder-pattern)方法应用设置的对象并返回该对象。此对象被注入到客户端应用程序，并确保在进行 api 调用时，访问令牌包含在授权标头中。`WebClient``ServletOAuth2AuthorizedClientExchangeFilterFunction``WebClient`

## [Spring boot 2.1.x 和奥克塔Spring boot器](#spring-boot-21x-and-the-okta-spring-boot-starter)

我们的最后一次迭代是合并奥克塔Spring boot器。到目前为止，通用Spring boot 1.5.x 和Spring boot 2.1.x 示例都可以配置为任何 OAuth 2.0 / OIDC 提供程序。Okta 已经创建了自己的Spring boot器，该启动器列[在https://start.spring.io，](https://start.spring.io)并可轻松集成到您的应用程序中。

与前面的每个示例一样，请查看此示例的依赖项、配置和代码。

### [资源服务器依赖项和配置](#resource-server-dependencies-and-configuration-2)

下面是资源服务器的文件：`pom.xml`

 ```
 <dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>com.okta.spring</groupId>
        <artifactId>okta-spring-boot-starter</artifactId>
        <version>1.1.0</version>
    </dependency>
</dependencies>
``` 

您属于 2 个依赖项，同时使资源服务器的代码完全相同。

看看：`application.yml`

 ```
 okta:
  oauth2:
    clientId: {okta client id}
    clientSecret: {okta client secret}
    issuer: https://{yourOktaDomain}.okta.com/oauth2/default
    audience: http://localhost:8081
``` 

现在，您拥有了一种易于阅读的相对平面配置。为了增加安全性，您只需要 与资源服务器的基本 URL 匹配的值。除了验证 JWT 访问令牌的加密签名外，它还将确保在有效负载中编码的受众值与文件中的配置值匹配。`clientId``clientSecret``issuer``audience``audience``application.yml`

### [客户端应用程序依赖项、配置和代码](#client-application-dependencies-configuration-and-code-2)

以下是文件中客户端应用程序的依赖项：`pom.xml`

 ```
 <dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-webflux</artifactId>
    </dependency>
    <dependency>
        <groupId>com.okta.spring</groupId>
        <artifactId>okta-spring-boot-starter</artifactId>
        <version>1.1.0</version>
    </dependency>
</dependencies>
``` 

您有与资源服务器相同的 2 个依赖项，以便客户端应用程序可以使用该对象发出 api 请求。`spring-boot-starter-webflux``WebClient`

该文件与资源服务器完全相同。现在，您已经实现了资源服务器和客户端应用程序的配置的完整奇偶校验。您还可以在客户端应用程序中重用该值。借助 Spring Boot 的环境变量支持，您可以在此处将其纳入范围：`application.yml``okta.oauth2.audience`

 ```
 @Value("#{ @environment['okta.oauth2.audience'] }")
private String resourceServerUrl;
``` 

客户端应用程序代码的其余部分与 Spring Boot 2.1.x 示例相同（没有 Okta 启动器支持）。

下面是使用对象使资源服务器 api 请求的代码：`WebClient`

 ```
 return this.webClient
    .get()
    .uri(this.resourceServerUrl + "/api")
    .retrieve()
    .bodyToMono(String.class)
    .block();
``` 

（注意参考）`this.resourceServerUrl`

## [通过Spring boot、Spring Security、OpenID 连接和 OAuth 2.0 进入未来](#into-the-future-with-spring-bootspring-security-openid-connect-and-oauth-20)

此帖子的代码可以在[GitHub Okta 开发人员](https://github.com/oktadeveloper/okta-spring-boot-oauth2-migration-example)存储库中找到。

请按照这些链接了解有关[OIDC、OAuth](https://developer.okta.com/blog/2017/07/25/oidc-primer-part-1) [2.0、JWT](https://developer.okta.com/blog/2018/04/10/oauth-authorization-code-grant-type)和各种[流](https://aaronparecki.com/oauth-2-simplified/#authorization)的更多信息。

Spring Boot 和 Spring Security 对 OpenID 连接和 OAuth 2.0 的一流支持增加了与提供商（如 Okta）的互操作性，具有最少的依赖关系、最少的配置和最少的代码。

[https://start.spring.io](https://start.spring.io)是您使用最新版本创建 Spring Boot 应用的朋友，该应用具有您需要的依赖项，包括 Okta 的"Spring boot器启动器"。