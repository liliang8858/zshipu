title: Gokit go流行微服务入门
author: 知识铺
date: 2020-04-11 11:39:44
tags:
---
## 快速开始

让我们创建一个最小的 Go 工具包服务。现在，我们将为此使用单个文件。
```
main.go

```


## 您的业务逻辑

您的服务从业务逻辑开始。在 Go 工具包中，我们将服务建模为**接口**。


```

// StringService provides operations on strings.
import "context"

type StringService interface {
	Uppercase(string) (string, error)
	Count(string) int
}


``` 


该接口将具有实现。


```

import (
	"context"
	"errors"
	"strings"
)

type stringService struct{}

func (stringService) Uppercase(s string) (string, error) {
	if s == "" {
		return "", ErrEmpty
	}
	return strings.ToUpper(s), nil
}

func (stringService) Count(s string) int {
	return len(s)
}

// ErrEmpty is returned when input string is empty
var ErrEmpty = errors.New("Empty string")

``` 

## 请求和响应

在 Go 工具包中，主要消息传递模式是 RPC。因此，我们接口中的每个方法都将建模为远程过程调用。对于每种方法，我们定义**请求和响应**结构，分别捕获所有输入和输出参数。


```

type uppercaseRequest struct {
	S string `json:"s"`
}

type uppercaseResponse struct {
	V   string `json:"v"`
	Err string `json:"err,omitempty"` // errors don't JSON-marshal, so we use a string
}

type countRequest struct {
	S string `json:"s"`
}

type countResponse struct {
	V int `json:"v"`
}

``` 

## 节点

Go 工具包通过称为**终结点**的抽象提供其大部分功能。

终结点的定义如下（您不必将其放在代码的任意位置，它由 提供。
```
go-kit


type Endpoint func(ctx context.Context, request interface{}) (response interface{}, err error)

``` 


它表示单个 RPC。也就是说，我们的服务接口中的一种方法。我们将编写简单的适配器，将服务的每个方法转换为终结点。每个适配器采用 StringService，并返回对应于其中一种方法的终结点。


```

import (
	"context"
	"github.com/go-kit/kit/endpoint"
)

func makeUppercaseEndpoint(svc StringService) endpoint.Endpoint {
	return func(_ context.Context, request interface{}) (interface{}, error) {
		req := request.(uppercaseRequest)
		v, err := svc.Uppercase(req.S)
		if err != nil {
			return uppercaseResponse{v, err.Error()}, nil
		}
		return uppercaseResponse{v, ""}, nil
	}
}

func makeCountEndpoint(svc StringService) endpoint.Endpoint {
	return func(_ context.Context, request interface{}) (interface{}, error) {
		req := request.(countRequest)
		v := svc.Count(req.S)
		return countResponse{v}, nil
	}
}

``` 

## 传输

现在，我们需要将您的服务暴露给外部世界，以便可以调用它。您的组织可能已经对服务应该如何相互对话了。也许你使用节俭，或自定义JSON通过HTTP。Go 套件支持开箱即用的许多**传输**。

对于此最小示例服务，让我们在 HTTP 上使用 JSON。Go 套件在包传输/http 中提供了帮助器结构。


```

import (
	"context"
	"encoding/json"
	"log"
	"net/http"

	httptransport "github.com/go-kit/kit/transport/http"
)

func main() {
	svc := stringService{}

	uppercaseHandler := httptransport.NewServer(
		makeUppercaseEndpoint(svc),
		decodeUppercaseRequest,
		encodeResponse,
	)

	countHandler := httptransport.NewServer(
		makeCountEndpoint(svc),
		decodeCountRequest,
		encodeResponse,
	)

	http.Handle("/uppercase", uppercaseHandler)
	http.Handle("/count", countHandler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func decodeUppercaseRequest(_ context.Context, r *http.Request) (interface{}, error) {
	var request uppercaseRequest
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		return nil, err
	}
	return request, nil
}

func decodeCountRequest(_ context.Context, r *http.Request) (interface{}, error) {
	var request countRequest
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		return nil, err
	}
	return request, nil
}

func encodeResponse(_ context.Context, w http.ResponseWriter, response interface{}) error {
	return json.NewEncoder(w).Encode(response)
}

``` 

## 字符串vc1

到目前为止，完整的服务是[stringsvc1。](https://zshipu.com/t?url=https://github.com/go-kit/kit/blob/master/examples/stringsvc1)



```

$ go get github.com/go-kit/kit/examples/stringsvc1
$ stringsvc1

``` 


```

$ curl -XPOST -d'{"s":"hello, world"}' localhost:8080/uppercase
{"v":"HELLO, WORLD"}
$ curl -XPOST -d'{"s":"hello, world"}' localhost:8080/count
{"v":12}

``` 

# 中间件

如果没有彻底的日志记录和检测，任何服务都无法被视为生产就绪。

## 关切事项的分离

将标注图的每一层分离到单个文件中，使 go-kit 项目在增加服务终结点数量时更易于阅读。我们的第一个示例[stringsvc1](https://zshipu.com/t?url=https://github.com/go-kit/kit/blob/master/examples/stringsvc1)在单个主文件中包含所有这些层。在增加更复杂的内容之前，让我们将代码分离到以下文件中，并将所有剩余的代码保留在 main.go 中。

将**服务**放入服务.go 文件中，包含以下功能和类型。



```

type StringService
type stringService
func Uppercase
func Count
var ErrEmpty

``` 


将**传输**放入具有以下函数和类型的文件中。
```
transport.go

```




```

func makeUppercaseEndpoint
func makeCountEndpoint
func decodeUppercaseRequest
func decodeCountRequest
func encodeResponse
type uppercaseRequest
type uppercaseResponse
type countRequest
type countResponse

``` 

## 传输日志记录

任何需要记录的组件都应将记录器视为依赖项，与数据库连接相同。因此，我们在 中构造我们的记录器，并将其传递给需要它的组件。我们从不使用全局范围的记录器。
```
func main

```


我们可以将记录器直接传递到我们的 stringService 实现中，但有更好的方法。让我们使用**中间件**，也称为装饰器。中间件是获取终结点并返回终结点的函数。


```

type Middleware func(Endpoint) Endpoint

``` 


> 请注意，中间件类型由 go-kit 为您提供。

在这两者之间，它可以做任何事情。下面您可以看到如何实现基本日志记录中间件（您无需在任何地方复制/粘贴此代码）：


```

func loggingMiddleware(logger log.Logger) Middleware {
	return func(next endpoint.Endpoint) endpoint.Endpoint {
		return func(ctx context.Context, request interface{}) (interface{}, error) {
			logger.Log("msg", "calling endpoint")
			defer logger.Log("msg", "called endpoint")
			return next(ctx, request)
		}
	}
}

``` 


使用[go-kit 日志](https://zshipu.com/t?url=https://gokit.io/faq/#logging-mdash-why-is-package-log-so-different)包并删除标准库[日志](https://zshipu.com/t?url=https://golang.org/pkg/log/)。您需要从文件底部删除。

log.Fatal
```
main.go

import (
 "github.com/go-kit/kit/log"
)

``` 


并将其连接到我们的每个处理程序中。请注意，下一个代码部分_不会_编译，直到您遵循**应用程序日志记录**部分，该部分定义日志记录中间件。


```

logger := log.NewLogfmtLogger(os.Stderr)

svc := stringService{}

var uppercase endpoint.Endpoint
uppercase = makeUppercaseEndpoint(svc)
uppercase = loggingMiddleware(log.With(logger, "method", "uppercase"))(uppercase)

var count endpoint.Endpoint
count = makeCountEndpoint(svc)
count = loggingMiddleware(log.With(logger, "method", "count"))(count)

uppercaseHandler := httptransport.NewServer(
	uppercase,
	// ...
)

countHandler := httptransport.NewServer(
	count,
	// ...
)

``` 


事实证明，这种技术对于不仅仅是日志记录非常有用。许多 Go 工具包组件都作为端点中间件实现。

## 应用程序日志记录

但是，如果我们想要登录应用程序域，如传入的参数，该怎么办？事实证明，我们可以为我们的服务定义一个中间件，并获得同样好和可组合的效果。由于我们的 StringService 被定义为接口，因此我们只需要制作一种新类型，以包装现有的 StringService 并执行额外的日志记录职责。


```

type loggingMiddleware struct {
	logger log.Logger
	next   StringService
}

func (mw loggingMiddleware) Uppercase(s string) (output string, err error) {
	defer func(begin time.Time) {
		mw.logger.Log(
			"method", "uppercase",
			"input", s,
			"output", output,
			"err", err,
			"took", time.Since(begin),
		)
	}(time.Now())

	output, err = mw.next.Uppercase(s)
	return
}

func (mw loggingMiddleware) Count(s string) (n int) {
	defer func(begin time.Time) {
		mw.logger.Log(
			"method", "count",
			"input", s,
			"n", n,
			"took", time.Since(begin),
		)
	}(time.Now())

	n = mw.next.Count(s)
	return
}

``` 


And wire it in.


```

import (
	"os"

	"github.com/go-kit/kit/log"
	httptransport "github.com/go-kit/kit/transport/http"
)

func main() {
	logger := log.NewLogfmtLogger(os.Stderr)

	var svc StringService
	svc = stringService{}
	svc = loggingMiddleware{logger, svc}

	// ...

	uppercaseHandler := httptransport.NewServer(
		makeUppercaseEndpoint(svc),
		// ...
	)

	countHandler := httptransport.NewServer(
		makeCountEndpoint(svc),
		// ...
	)
}

``` 


使用端点中间件解决传输域问题，如电路中断和速率限制。将服务中间件用于业务领域问题，如日志记录和检测。说到仪器...

## 应用仪器

在 Go 工具包中，检测意味着使用**包指标**记录有关服务运行时行为的统计信息。计算处理的作业数、记录请求完成后的持续时间以及跟踪在飞行中操作的数量都将被视为检测。

我们可以使用与用于日志记录相同的中间件模式。


```

type instrumentingMiddleware struct {
	requestCount   metrics.Counter
	requestLatency metrics.Histogram
	countResult    metrics.Histogram
	next           StringService
}

func (mw instrumentingMiddleware) Uppercase(s string) (output string, err error) {
	defer func(begin time.Time) {
		lvs := []string{"method", "uppercase", "error", fmt.Sprint(err != nil)}
		mw.requestCount.With(lvs...).Add(1)
		mw.requestLatency.With(lvs...).Observe(time.Since(begin).Seconds())
	}(time.Now())

	output, err = mw.next.Uppercase(s)
	return
}

func (mw instrumentingMiddleware) Count(s string) (n int) {
	defer func(begin time.Time) {
		lvs := []string{"method", "count", "error", "false"}
		mw.requestCount.With(lvs...).Add(1)
		mw.requestLatency.With(lvs...).Observe(time.Since(begin).Seconds())
		mw.countResult.Observe(float64(n))
	}(time.Now())

	n = mw.next.Count(s)
	return
}

``` 


并连接到我们的服务。


```

import (
	stdprometheus "github.com/prometheus/client_golang/prometheus"
	kitprometheus "github.com/go-kit/kit/metrics/prometheus"
	"github.com/go-kit/kit/metrics"
)

func main() {
	logger := log.NewLogfmtLogger(os.Stderr)

	fieldKeys := []string{"method", "error"}
	requestCount := kitprometheus.NewCounterFrom(stdprometheus.CounterOpts{
		Namespace: "my_group",
		Subsystem: "string_service",
		Name:      "request_count",
		Help:      "Number of requests received.",
	}, fieldKeys)
	requestLatency := kitprometheus.NewSummaryFrom(stdprometheus.SummaryOpts{
		Namespace: "my_group",
		Subsystem: "string_service",
		Name:      "request_latency_microseconds",
		Help:      "Total duration of requests in microseconds.",
	}, fieldKeys)
	countResult := kitprometheus.NewSummaryFrom(stdprometheus.SummaryOpts{
		Namespace: "my_group",
		Subsystem: "string_service",
		Name:      "count_result",
		Help:      "The result of each count method.",
	}, []string{}) // no fields here

	var svc StringService
	svc = stringService{}
	svc = loggingMiddleware{logger, svc}
	svc = instrumentingMiddleware{requestCount, requestLatency, countResult, svc}

	uppercaseHandler := httptransport.NewServer(
		makeUppercaseEndpoint(svc),
		decodeUppercaseRequest,
		encodeResponse,
	)

	countHandler := httptransport.NewServer(
		makeCountEndpoint(svc),
		decodeCountRequest,
		encodeResponse,
	)

	http.Handle("/uppercase", uppercaseHandler)
	http.Handle("/count", countHandler)
	http.Handle("/metrics", promhttp.Handler())
	logger.Log("msg", "HTTP", "addr", ":8080")
	logger.Log("err", http.ListenAndServe(":8080", nil))
}

``` 

## 字符串vc2

The complete service so far is [stringsvc2](https://zshipu.com/t?url=https://github.com/go-kit/kit/blob/master/examples/stringsvc2).



```

$ go get github.com/go-kit/kit/examples/stringsvc2
$ stringsvc2
msg=HTTP addr=:8080

``` 


```

$ curl -XPOST -d'{"s":"hello, world"}' localhost:8080/uppercase
{"v":"HELLO, WORLD"}
$ curl -XPOST -d'{"s":"hello, world"}' localhost:8080/count
{"v":12}

``` 


```

method=uppercase input="hello, world" output="HELLO, WORLD" err=null took=2.455µs
method=count input="hello, world" n=12 took=743ns

``` 

# Calling other services

It’s rare that a service exists in a vacuum. Often, you need to call other services. **This is where Go kit shines**. We provide transport middlewares to solve many of the problems that come up.

Let’s say that we want to have our string service call out to a _different_ string service to satisfy the Uppercase method. In effect, proxying the request to another service. Let’s implement the proxying middleware as a ServiceMiddleware, same as a logging or instrumenting middleware.


```

// proxymw implements StringService, forwarding Uppercase requests to the
// provided endpoint, and serving all other (i.e. Count) requests via the
// next StringService.
type proxymw struct {
	next      StringService     // Serve most requests via this service...
	uppercase endpoint.Endpoint // ...except Uppercase, which gets served by this endpoint
}

``` 

## 客户端终结点

我们有完全相同的终结点，我们已经知道，但我们会使用它调用，而不是服务，一个请求。以这种方式使用时，我们称之为_客户端_终结点。为了调用客户端终结点，我们只需执行一些简单的转换。


```

func (mw proxymw) Uppercase(s string) (string, error) {
	response, err := mw.uppercase(uppercaseRequest{S: s})
	if err != nil {
		return "", err
	}
	resp := response.(uppercaseResponse)
	if resp.Err != "" {
		return resp.V, errors.New(resp.Err)
	}
	return resp.V, nil
}

``` 


现在，为了构造这些代理中间件之一，我们将代理 URL 字符串转换为终结点。如果我们假设 JSON 通过 HTTP，我们可以在传输/http 包中使用帮助程序。


```

import (
	httptransport "github.com/go-kit/kit/transport/http"
)

func proxyingMiddleware(proxyURL string) ServiceMiddleware {
	return func(next StringService) StringService {
		return proxymw{next, makeUppercaseProxy(proxyURL)}
	}
}

func makeUppercaseProxy(proxyURL string) endpoint.Endpoint {
	return httptransport.NewClient(
		"GET",
		mustParseURL(proxyURL),
		encodeUppercaseRequest,
		decodeUppercaseResponse,
	).Endpoint()
}

``` 

## 服务发现和负载平衡

如果我们只有一个远程服务，这很好。但在现实中，我们可能有许多可用的服务实例。我们希望通过一些服务发现机制来发现它们，并将我们的负载分散到所有这些机制中。如果其中任何一个实例开始表现不佳，我们希望处理这一点，而不会影响我们服务的可靠性。

Go 工具包为不同的服务发现系统提供适配器，以获取最新实例集，这些实例作为单个终结点公开。这些适配器称为订阅者。


```

type Subscriber interface {
	Endpoints() ([]endpoint.Endpoint, error)
}

``` 


在内部，订阅者使用提供的工厂函数将每个发现的实例字符串（通常是主机：端口）转换为可用的终结点。


```

type Factory func(instance string) (endpoint.Endpoint, error)

``` 


到目前为止，我们的工厂功能，使上文代理，只是直接调用URL。但是，将一些安全中间件（如断路器和限速器）放入工厂也很重要。


```

var e endpoint.Endpoint
e = makeUppercaseProxy(instance)
e = circuitbreaker.Gobreaker(gobreaker.NewCircuitBreaker(gobreaker.Settings{}))(e)
e = kitratelimit.NewTokenBucketLimiter(jujuratelimit.NewBucketWithRate(float64(maxQPS), int64(maxQPS)))(e)

``` 


现在，我们有一组终结点，我们需要选择一个。负载均衡器包装订阅者，并从多个中选择一个终结点。Go 套件提供了几个基本的负载均衡器，如果您想要更高级的启发式方法，则很容易编写您自己的设备。


```

type Balancer interface {
	Endpoint() (endpoint.Endpoint, error)
}

``` 


现在，我们有能力根据一些启发式选择端点。我们可以用它来向使用者提供单个、逻辑的、可靠的终结点。重试策略将包装负载均衡器，并返回可用的终结点。重试策略将重试失败的请求，直到达到最大尝试或超时。


```

func Retry(max int, timeout time.Duration, lb Balancer) endpoint.Endpoint

``` 


让我们电汇我们最后的代理中间件。为简单起见，我们假设用户将指定多个带有标志的逗号分隔实例终结点。


```

func proxyingMiddleware(instances string, logger log.Logger) ServiceMiddleware {
	// If instances is empty, don't proxy.
	if instances == "" {
		logger.Log("proxy_to", "none")
		return func(next StringService) StringService { return next }
	}

	// Set some parameters for our client.
	var (
		qps         = 100                    // beyond which we will return an error
		maxAttempts = 3                      // per request, before giving up
		maxTime     = 250 * time.Millisecond // wallclock time, before giving up
	)

	// Otherwise, construct an endpoint for each instance in the list, and add
	// it to a fixed set of endpoints. In a real service, rather than doing this
	// by hand, you'd probably use package sd's support for your service
	// discovery system.
	var (
		instanceList = split(instances)
		subscriber   sd.FixedSubscriber
	)
	logger.Log("proxy_to", fmt.Sprint(instanceList))
	for _, instance := range instanceList {
		var e endpoint.Endpoint
		e = makeUppercaseProxy(instance)
		e = circuitbreaker.Gobreaker(gobreaker.NewCircuitBreaker(gobreaker.Settings{}))(e)
		e = kitratelimit.NewTokenBucketLimiter(jujuratelimit.NewBucketWithRate(float64(qps), int64(qps)))(e)
		subscriber = append(subscriber, e)
	}

	// Now, build a single, retrying, load-balancing endpoint out of all of
	// those individual endpoints.
	balancer := lb.NewRoundRobin(subscriber)
	retry := lb.Retry(maxAttempts, maxTime, balancer)

	// And finally, return the ServiceMiddleware, implemented by proxymw.
	return func(next StringService) StringService {
		return proxymw{next, retry}
	}
}

``` 

## 字符串vc3

The complete service so far is [stringsvc3](https://zshipu.com/t?url=https://github.com/go-kit/kit/blob/master/examples/stringsvc3).



```

$ go get github.com/go-kit/kit/examples/stringsvc3
$ stringsvc3 -listen=:8001 &
listen=:8001 caller=proxying.go:25 proxy_to=none
listen=:8001 caller=main.go:72 msg=HTTP addr=:8001
$ stringsvc3 -listen=:8002 &
listen=:8002 caller=proxying.go:25 proxy_to=none
listen=:8002 caller=main.go:72 msg=HTTP addr=:8002
$ stringsvc3 -listen=:8003 &
listen=:8003 caller=proxying.go:25 proxy_to=none
listen=:8003 caller=main.go:72 msg=HTTP addr=:8003
$ stringsvc3 -listen=:8080 -proxy=localhost:8001,localhost:8002,localhost:8003
listen=:8080 caller=proxying.go:29 proxy_to="[localhost:8001 localhost:8002 localhost:8003]"
listen=:8080 caller=main.go:72 msg=HTTP addr=:8080

``` 


```

$ for s in foo bar baz ; do curl -d"{\"s\":\"$s\"}" localhost:8080/uppercase ; done
{"v":"FOO"}
{"v":"BAR"}
{"v":"BAZ"}

``` 


```

listen=:8001 caller=logging.go:28 method=uppercase input=foo output=FOO err=null took=5.168µs
listen=:8080 caller=logging.go:28 method=uppercase input=foo output=FOO err=null took=4.39012ms
listen=:8002 caller=logging.go:28 method=uppercase input=bar output=BAR err=null took=5.445µs
listen=:8080 caller=logging.go:28 method=uppercase input=bar output=BAR err=null took=2.04831ms
listen=:8003 caller=logging.go:28 method=uppercase input=baz output=BAZ err=null took=3.285µs
listen=:8080 caller=logging.go:28 method=uppercase input=baz output=BAZ err=null took=1.388155ms

``` 

# 高级主题

## 线程上下文

上下文对象用于在单个请求的范围内跨概念边界传递信息。在我们的示例中，我们还没有通过业务逻辑来线程化上下文。但这几乎总是一个好主意。它允许您在业务逻辑和中间件之间传递请求范围的信息，对于更复杂的任务（如粒度分布式跟踪注释）是必需的。

具体来说，这意味着您的业务逻辑接口将看起来像


```

type MyService interface {
	Foo(context.Context, string, int) (string, error)
	Bar(context.Context, string) error
	Baz(context.Context) (int, error)
}

``` 

## 分布式跟踪

一旦基础结构增长到超过特定规模，通过多个服务跟踪请求就变得非常重要，因此您可以识别和排除热点。有关详细信息，请参阅[包跟踪](https://zshipu.com/t?url=https://github.com/go-kit/kit/blob/master/tracing)。

## 创建客户端包

可以使用 Go 工具包为服务创建客户端包，以便从其他 Go 程序更轻松地使用服务。实际上，客户端包将提供服务接口的实现，该服务接口使用特定传输调用远程服务实例。有关示例，请参阅[添加vc/cmd/addcli](https://zshipu.com/t?url=https://github.com/go-kit/kit/blob/master/examples/addsvc/cmd/addcli)或[包配置文件/客户端](https://zshipu.com/t?url=https://github.com/go-kit/kit/blob/master/examples/profilesvc/client)。
