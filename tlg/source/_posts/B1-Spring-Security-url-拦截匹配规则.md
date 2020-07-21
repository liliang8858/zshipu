title: Spring Security url 拦截匹配规则
author: 知识铺
date: 2020-04-15 08:56:15
tags:
---
Spring Security 可以为 url 设置各种访问规则，比如：

 http.authorizeRequests().antMatchers("/api/**").denyAll();    //拒绝访问

http.authorizeRequests().antMatchers("/api/**").authenticated();    //需认证通过

http.authorizeRequests().antMatchers("/api/**").permitAll();    //无条件允许访问

但是遇到下面这些情况，SpringSecurity会如何处理呢？

1、一个url可以匹配多个规则：如 /api/bbb/ccc  这个url ，既可以匹配 /** ，又可以匹配 /api/**，最终会匹配哪条规则呢？

2、存在相同url 的匹配规则，如上面例子中 "/api/**" 一共有三条规则，一个denyAll，一个authenticated，一个permitAll ，最终会匹配哪条规则呢？

让我们深入代码弄清楚这些问题【**版本 SpringSecurity 5.0.7**】：

每注册一个规则  antMatchers("/api/**").xxx()  时，

SpringSecurity会把这个规则按注册先后顺序放到一个**ArrayList<UrlMapping>**中，先注册的规则放前面，后注册的放后面。

然后将这个 ArrayList<UrlMapping> 进行处理（ AbstractConfigAttributeRequestMatcherRegistry.createRequestMap 方法）。

处理的规则是这样： 按顺序遍历这个ArrayList，以 url的RequestMatcher 为 key ，以 denyAll，authenticated 等 为值， put 进一个 **LinkedHashMap**。

**这个 LinkedHashMap 就是最终的 规则集合。**

此时，有访问请求Web服务器，

Web服务器从request中取出访问的url。

通过之前得到的那个 **LinkedHashMap** 去 对 url 进行权限判断，第一个能匹配上这个url的规则，就是最终会执行的规则。（DefaultFilterInvocationSecurityMetadataSource.getAttributes 方法）

**上面的内容可能看起来有点晕，简单说就是：**

1、注册的规则 按先后顺序放到一个List， 然后又用Map去掉完全相同的 url匹配规则。这个Map 就是最终的规则存放处。

2、当有访问到来时，则根据访问的url 循环这个 Map 进行匹配，能匹配上的第一个规则就是 最终执行的规则。

然后回到我们上面提出的两个问题：

1、一个url可以匹配多个规则：如 /api/bbb/ccc  这个url ，既可以匹配 /** ，又可以匹配 /api/**，最终会匹配哪条规则呢？

- 解答：按你注册规则的顺序，第一条能匹配上的，就是最终会执行的规则。

延伸：注册规则的时候一定要注意顺序，如果 /** 第一个注册，则后面的任何规则都不会被匹配了，永远执行 /** 的这个规则。

2、存在相同url 的匹配规则，如上面例子中 "/api/**" 一共有三条规则，一个denyAll，一个authenticated，一个permitAll ，最终会匹配哪条规则呢？

- 解答：在 ArrayList 转 LinkedHashMap 时，相同的url 的匹配规则中 后面的会冲掉 前面的， 所以，最终执行的规则会是最后注册的那条。