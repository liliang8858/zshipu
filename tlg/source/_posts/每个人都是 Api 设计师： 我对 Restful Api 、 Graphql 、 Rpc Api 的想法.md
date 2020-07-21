
title: 每个人都是 Api 设计师： 我对 Restful Api 、 Graphql 、 Rpc Api 的想法
author: 知识铺
date: 2020-07-02 11:43:59
tags:
---
 
现在，让我们来谈谈 API 的设计方式。我将提出几点，欢迎大家讨论。

## 1\. 明确界定的规范是成功的一半以上。

通常，规范是习惯标准。如果每个人都遵守这些标准，自然通信的成本将大大降低。例如，我们都希望学习 Ali 的规范，并定义我们业务中的多个域模型：VO、BO、DO、DTO。其中，DO（数据对象）一个对应于数据库表结构，并通过DAO层向上传输数据源对象。DTO（数据传输对象）是一个远程调用对象，是RPC服务提供的域模型。对于 BO（业务对象），它是在业务逻辑层中封装业务逻辑的对象。通常，它是聚合多个数据源的复合对象。然后，VO（视图对象）通常是请求处理层传输的对象，它通常是通过S春框架转换后转换的JSON对象。

![Everyone is an API designer: My thoughts on RESTful API, GraphQL, RPC API](https://imgs.developpaper.com/imgs/438748724-5cdd8ff164e0d_articlex.png "Everyone is an API designer: My thoughts on RESTful API, GraphQL, RPC API")

事实上，如果 DO、BO、DTO 和 VO 的域模型在 Ali 的复杂业务中没有明确区分，其内部代码很容易被混淆。内部RPC在服务层的基础上增加了管理层，实现了内部标准化。但是，如果是单个域，没有太多的外部依赖关系，则不要设计它如此复杂，除非您期望它变得庞大而复杂。在这方面，特别重要的是根据当地情况调整设计过程。

规范的另一个示例是 RESTful API。在 REST 体系结构样式中，每个 URI 表示一个资源。因此，URI 是每个资源地址的唯一资源定位器。所谓的资源实际上是一个信息实体。它可以是一段文本、文件、图片、歌曲或服务器上的服务。RESTful API 通过 GET、POST、PUT、PATCH、删除等指定服务器端资源的操作。

<code>[GET]/users# Query User Information List
[GET]/users/1001_View a user's information
[POST]/users# New User Information
[PUT]/users/1001 # Update user information (all fields)
[PATCH]/users/1001 # Update user information (partial fields)
[DELETE]/users/1001 # Delete user information</code>

事实上，RESTful API 的实现分为四个级别。0 级 Web API 服务仅使用 HTTP 作为传输手段。1 级 Web API 服务引入了资源的概念。每个资源都有一个相应的标识符和表达式。2 级 Web API 服务使用不同的 HTTP 方法来执行不同的操作，并使用 HTTP 状态代码来表示不同的结果。3 级 Web API 服务使用 HATEOAS。链接信息包含在资源的表达式中。客户端可以发现可以基于链接执行的操作。通常，伪 RESTful API 是根据第一级和第二级进行设计的。例如，我们在 Web API 中使用各种动词，例如，在真实意义上，RESTful API 需要满足第三级或以上。如果我们遵守这组规范，我们很可能设计一个易于理解的 API。```get_menu``````save_menu```

请注意，我们已经取得了超过一半的成功与明确的规范。如果这套标准是行业标准，那么我们可以大胆实践，不用担心别人不会用，只要把行业标准留给他学好。例如，在Java生态系统中，春天已经变得非常重要，如果一个新来者不了解春天，那它就有点让人不知所措了。但是，很多时候由于业务约束和公司技术，我们可以使用基于第一和第二层次的伪再创新API设计，但它不一定是落后的，不好的，只要在团队内部形成规范，降低每个人的学习成本。很多时候，我们试图改变团队的习惯，学习一个新的规范，和好处（投入产出比）非常小，这是不值得的。

总之，定义明确的规范的目的是降低学习成本，使 API 尽可能具有可访问性。当然，还有其他方法可以设计易于理解的 API，例如我们定义的 API 的名称易于理解，并且 API 的实现尽可能笼统。

## 二、探讨API接口的兼容性

API 接口正在不断发展。因此，我们需要在一定程度上适应变化。在 RESTful API 中，API 接口应与以前的版本尽可能兼容。但是，在实际的业务开发方案中，随着业务需求的不断迭代，现有的 API 接口无法支持对旧版本的改编。此时，如果强制升级服务器的 API 接口，则客户端的旧功能将失败。事实上，Web 端部署在服务器上，因此可以轻松地升级以适应服务器端的新 API 接口。但是，其他客户端（如 Android、IOS、PC 等）正在用户计算机上运行。因此，当前产品很难适应新服务器端的 API 接口，从而导致功能故障。在这种情况下，用户必须升级。一级产品不能正确使用，直到最新版本。要解决此版本不兼容问题，设计 RESTful API 的一个实用方法就是使用版本号。通常，我们会将版本号保留在 URL 中，并同时与多个版本兼容。

<code>[GET]/v1/users/{user_id}//version V1 API interface for querying user list API interface for querying user list in [GET]/v2/users/{user_id}//version V2</code>

现在，在不更改版本 v1 的查询用户列表的 API 接口的情况下，我们可以添加版本 V2 的查询用户列表的 API 接口，以满足新的业务需求。此时，客户端产品的新功能将请求新服务器的 API 接口地址。尽管服务器将同时与多个版本兼容，但同时维护太多版本对服务器来说是一个很大的负担，因为服务器必须维护多组代码。在这种情况下，通常的做法不是维护所有兼容版本，而是只维护最新的兼容版本，如最新的三个兼容版本。一段时间后，当绝大多数用户升级到较新版本时，放弃一些较旧的 API 接口版本的较少使用的服务器端，并要求使用非常旧版本的产品的用户强制升级。请注意，"在不更改版本 v1 的情况下查询用户列表的 API 接口"主要是指客户端的调用方似乎未更改该接口。事实上，如果业务变化太大，服务端开发人员需要使用旧版本的 API 接口的适配器模式将请求调整到新的 API 接口。

有趣的是，GraphQL 提供了不同的想法。为了解决服务 API 接炸和将多个 HTTP 请求聚合到一个请求中的问题， GraphQL 建议只公开一个服务 API 接口，并在单个请求中进行多个查询。GraphQL 定义了我们可以在前端更灵活地调用的 API 接口。例如，我们可以选择和加载需要根据不同业务呈现的字段。因此，前端可以按需获取服务器提供的字段的完整数量。GraphQL 可以通过基于这些类型添加新类型和新字段来添加新函数，而不会导致兼容性问题。

![Everyone is an API designer: My thoughts on RESTful API, GraphQL, RPC API](https://imgs.developpaper.com/imgs/2868274689-5cdd8ff0d30a8_articlex.png "Everyone is an API designer: My thoughts on RESTful API, GraphQL, RPC API")

此外，在使用RPC API的过程中，需要特别注意兼容性问题，双方库不能依赖父级，此外，本地开发可以使用SSYPN，而在线环境是被禁止的，以避免更改，导致版本不兼容的问题。我们需要为每个接口定义版本号，以确保版本可以在后续不兼容的情况下升级。例如，Dubbo 建议第三个版本号通常表示兼容性升级，并且只需要更改不兼容的服务版本。

在规范方面，我们可以查看 k8s 和 github，其中 k8s 使用 RESTful API，GitHub 使用 GraphQL。

*   https://kubernetes.io/docs/reference/generated/kubernetes-[api](https://zshipu.com/t?url=https://developpaper.com/tag/api/ "View all posts in api")/v1.10/
*   https://developer.github.com/v4/

## 3\. 提供清晰的思维模式

所谓的思维模型，我的理解是对于问题域抽象模型，对域模型的功能有统一的认识，对问题建立一个现实的映射，并划定模型的边界，而域模型的价值之一是统一思想，明确界限。假设您没有明确的思维模型，那么对 API 没有统一的理解，那么下图中很可能存在真正的问题。
![Everyone is an API designer: My thoughts on RESTful API, GraphQL, RPC API](https://imgs.developpaper.com/imgs/2251786824-5cdd8ff13fe6b_articlex.png "Everyone is an API designer: My thoughts on RESTful API, GraphQL, RPC API")

## 4\. 抽象地屏蔽业务实施

我认为好的 API 接口是抽象的，因此我们需要尽可能多地屏蔽业务实现。因此，问题出现了。我们如何理解抽象？在这方面，我们可以考虑java[的设计](https://zshipu.com/t?url=https://developpaper.com/tag/java/ "View all posts in java")。Sql。司机。这里，爪哇。Sql。驱动程序是一个规范的界面，而 com. mysql。Jdbc。驱动程序
它是 mysql-连接器-java-xxx.jar 的此规范的实现接口。因此，切换到 Oracle 的成本非常低。

一般来说，我们将通过 API 提供服务。在这里，提供服务的 API 接口的逻辑是固定的，换句话说，它是通用的。但是，当我们遇到具有类似业务逻辑的方案时，也就是说，核心骨干逻辑是相同的，细节的实现略有不同，那么我们应该去哪里呢？很多时候，我们选择为不同的业务方提供多个 API 接口。事实上，我们可以通过SPI扩展点实现更优雅。什么是斯皮？SPI 的完整英文名称是 Serivce 提供程序接口，它是服务提供商接口。它是一种动态发现机制，可以在程序执行过程中动态地发现扩展点的实现类。因此，当调用 API 时，它会动态加载和调用 SPI 的特定实现。

此时，您是否关联模板方法模式？模板方法模式的核心思想是定义骨架并传递实现。换句话说，它通过定义流程的框架将某些步骤的实现推迟到子类。事实上，在微服务落地过程中，这一理念也为我们提供了很好的理论基础。

![Everyone is an API designer: My thoughts on RESTful API, GraphQL, RPC API](https://imgs.developpaper.com/imgs/953117909-5cdd8ff0d4b30_articlex.png "Everyone is an API designer: My thoughts on RESTful API, GraphQL, RPC API")

现在，让我们来看看一个案例：电子商务业务方案中未交付的商品只退还。这是电力业务中很常见的情况，用户在下订单付款后可能会申请退款。此时，由于没有退货，只有用户需要申请退款并填写退款理由，然后让卖家审核退款。然后，由于不同平台上的退款原因可能不同，我们可以考虑使用SPI扩展点来实现。

![Everyone is an API designer: My thoughts on RESTful API, GraphQL, RPC API](https://imgs.developpaper.com/imgs/1966226806-5cdd8ff0d1d6e_articlex.png "Everyone is an API designer: My thoughts on RESTful API, GraphQL, RPC API")

此外，我们经常使用工厂方法+策略模式来屏蔽外部复杂性。例如，如果我们公开 API 接口 getTask（int 操作），那么我们可以按工厂方法创建实例，并按策略方法定义不同的实现。

<code>@Component
public class TaskManager {

    private static final Logger logger = LoggerFactory.getLogger(TaskManager.class);

    private static TaskManager instance;

    public MapInteger, ITask> taskMap = new HashMap<Integer, ITask>();

    public static TaskManager getInstance() {
        return instance;
    }

    public ITask getTask(int operation) {
        return taskMap.get(operation);
    }

    /**
     * Initialization process
     */
    @PostConstruct
    private void init() { logger.info("init task manager"); instance = new TaskManager();
        // Task of chatting news instance.taskMap.put(EventEnum.CHAT_REQ.getValue(), new ChatTask());
        // Group Chat Message Task instance.taskMap.put(EventEnum.GROUP_CHAT_REQ.getValue(), new GroupChatTask());
        // Heart beat task instance.taskMap.put(EventEnum.HEART_BEAT_REQ.getValue(), new HeatBeatTask());

    }
}</code>

保护内部复杂性的另一个设计是外观接口，它封装和集成了多个服务的接口，并为客户端提供了一个简单的调用接口供使用。此设计的优点是客户端不再需要知道这么多的服务接口，而只需要调用外观接口。但是，缺点是显而易见的，即它增加了服务器的业务复杂性，接口性能不高，可重复性不高。因此，根据当地情况，尽可能保证单一的责任，并在客户"乐高"组装。如果有SEO优化产品，需要包括像百度这样的搜索引擎。当第一个屏幕打开时，服务器可以呈现 HTML，以便搜索引擎可以包含它。如果它不在第一个屏幕上，服务器可以调用 RESTful API 接口来呈现页面。

此外，随着微服务的普及，我们的服务也越来越多，许多较小的服务都有更多的跨服务电话。因此，微服务体系结构使此问题更加常见。为了解决这个问题，我们可以考虑引入一个"聚合服务"，这是一个复合服务，可以合并来自多个微服务的数据。此设计的优点是，某些信息通过"聚合服务"集成，然后返回给调用方。请注意，聚合服务也可以有自己的缓存和数据库。事实上，聚合服务的想法无处不在，例如无服务器体系结构。实际上，我们可以使用 AWS Lambda 作为无服务器服务背后的计算引擎，而 AWS Lambda 是一个功能即服务 （FaaS） 计算服务。我们直接编写在云中运行的功能。然后，此函数可以组装用于服务聚合的现有功能。

![Everyone is an API designer: My thoughts on RESTful API, GraphQL, RPC API](https://imgs.developpaper.com/imgs/1325307613-5cdd8ff0cd8c5_articlex.png "Everyone is an API designer: My thoughts on RESTful API, GraphQL, RPC API")

当然，有很多好的设计，我将继续补充和探索他们在公共数字。

## 5\. 考虑其背后的性能

我们需要考虑由包含的各种字段组合导致的数据库的性能问题。有时，我们可能会公开太多外部组合的字段，从而导致数据库中没有相应索引的完整表扫描。事实上，这在查询方案中尤其常见。因此，我们只能提供具有外部调用索引的字段的组合，或者在以下情况下，调用方需要填写任务 Id 和 caseId，以确保数据库中索引的合理使用，进一步保证服务提供商的服务性能。

<code>ResultVoid> agree(Long taskId, Long caseId, Configger configger);</code>

同时，对于报表操作、批处理操作和冷数据查询等 API，应考虑异步功能。

此外，尽管 GraphQL 解决了将多个 HTTP 请求聚合到一个请求中的问题，但架构以按层分析的方式递归地检索所有数据。例如，可以执行一次的分页查询的统计总数已演变为数据库的 N + 1 查询。此外，不正确的写作会导致性能不佳的问题，因此我们需要特别注意设计过程。

## 6\. 异常响应和错误机制

对于 RPC API 是引发异常还是错误代码，业界争论不下。《阿里巴巴Java开发手册》建议，对于跨应用程序RPC调用，应优先考虑成功（）方法、错误代码和错误短消息。在 RPC 方法返回模式下使用 Result 模式的原因：1） 使用引发异常返回模式，如果调用方未捕获它，将发生运行时错误。2）如果你不添加堆栈信息，只是新的自定义异常，添加自己对错误消息的理解，对于调用方解决问题不会有太大帮助。如果添加堆栈信息，数据序列化和传输的性能损失也是频繁调用错误的问题。当然，我也支持这个论点的从业者。

<code>public ResultXxxDTO> getXxx(String param) {
    try {
        // ...
        return Result.create(xxxDTO);
    } catch (BizException e) { log.error("...", e);
        return Result.createErrorResult(e.getErrorCode(), e.getErrorInfo(), true);
    }
}</code>

在 Web API 设计过程中，我们将使用控制器建议来统一包装错误消息。在微服务的复杂链调用中，跟踪和定位问题比单个体系结构更难。因此，应特别注意设计。更好的解决方案是当 RESTful API 接口中有非 2xx HTTP 错误代码响应时使用全局异常结构响应信息。代码字段用于表示某些类型的错误的错误代码，并且前缀"{biz_name\/'应添加到微服务中，以查找错误发生在哪个业务系统上。让我们看看用户中心的接口没有访问资源的权限并发生错误的情况。我们的业务系统可以通过自动生成 UUID 值的 request_id字段来响应"UC/AUTH_DENIED"，并获取有关日志系统中错误的详细信息。

<code>HTTP/1.1 400 Bad Request
Content-Type: application/json {
   "code": "INVALID_ARGUMENT",
   "message": "{error message}",
   "cause": "{cause message}",
   "request_id": "01234567-89ab-cdef-0123-456789abcdef",
   "host_id": "{server identity}",
   "server_time": "2014-01-01T12:00:00Z"
}</code>
## 7\. 考虑 API 的通用性

幂等机制的核心是确保资源的唯一性，例如客户端重复提交或服务器重复重读只产生一个结果。付款方案、退款方案、涉及金额的交易不能出现多次扣减等问题。事实上，查询接口用于获取资源，因为它只查询数据，不会影响资源的更改，因此无论调用接口多少次，资源都不会改变，因此它是幂等的。新接口不是幂等的，因为如果多次调用，它将更改资源。因此，当重复提交发生时，我们需要幂等处理。那么，如何保证幂等机制呢？事实上，我们有许多实现。其中一个解决方案是创建唯一的索引。在数据库中为需要限制的资源字段创建唯一索引可防止插入重复数据。但是，对于子数据库和子表，唯一的索引不是那么好。此时，我们可以先查询数据库，然后确定受限资源字段中是否有重复，然后在没有重复时插入。请注意，为了避免并发场景，我们可以通过锁定机制（如悲观锁和乐观锁）保证数据的唯一性。在这里，分布式锁定是一个常用的解决方案，它通常是一个悲观的锁实现。然而，许多人往往认为悲观锁、乐观锁和分布式锁是幂等解决方案，这是不正确的。此外，我们还可以引入一个状态机，通过它可以执行状态约束和状态跳转，以确保同一业务的进程执行，从而实现数据幂等。事实上，并非所有接口都需要幂等。换句话说，是否可以考虑一个幂等机制，以确保资源的唯一性。例如，行为日志不能考虑幂等性。当然，另一种设计方案是，接口不考虑幂等机制，而是确保在实现业务时通过业务级别，例如允许多个数据副本，但在处理业务时获取用于处理的最新版本。

