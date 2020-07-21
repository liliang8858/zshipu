
title: SpringCloudAlibaba(三)：使用Nacos作为配置中心
author: 知识铺
date: 2020-07-16 17:34:29
tags:
---
 之前提到了这次从php技术栈迁移到java技术栈要解决的一个问题就是集中化配置管理。

我们为什么会有配置中心的需求?

1.  配置管理变更较为方便
2.  合理控制配置的权限内容

### <a name="t0"></a><a name="t0"></a>Nacos 控制台增加配置文件

1.  进入Nacos管理界面,在【配置管理】-【配置列表】功能页面点击右上角的 + 号。
    ![](https://imgconvert.csdnimg.cn/aHR0cDovL2NhaW5nYW8uYW55ZGF0YS50b3AvYXNzZXRzL2ltZy9zcHJpbmdjbG91ZGFsaWJhYmEvMy9uYWNvc193ZWJfY29uZmlnX2NvbnNvbGUucG5n?x-oss-process=image/format,png)
2.  进入 新建配置 页面，填写要新增的配置内容![](https://img-blog.csdnimg.cn/20200509214305127.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTE1MzIxMDU=,size_16,color_FFFFFF,t_70)
3.  **WARN**:Data ID的默认扩展名为**properties**,如果需要使用yaml格式则需要指明是 **.yaml**
4.  发布配置 配置完成后点击发布,即可在配置列表中看到刚才新增的配置

### <a name="t1"></a><a name="t1"></a>创建Nacos Config客户端

1.  新建项目,由于使用SpringCloudAlibaba直接引用相关依赖 ```xml

com.alibaba.cloud spring-cloud-starter-alibaba-nacos-config org.springframework.boot spring-boot-starter-web

 ```1.  2.  创建应用主类并且实现一个HTTP接口

2.  *   启动类

3.  ```java

4.  @SpringBootApplication

5.  public class NacosConfigApplication {

6.  public static void main(String[] args) {

7.  SpringApplication.run(NacosConfigApplication.class,args);

8.  }

9.  }``` 

*   Controller ```1.  @RefreshScope

    2.  @RestController

    3.  @RequestMapping("/config")

    4.  public class ConfigController {

    5.  @Value("${useLocalCache:false}")

    6.  private boolean useLocalCache;

    8.  @Value("${name}")

    9.  private String name;

    11.  @RequestMapping("/get")

    12.  public boolean get() {

    13.  return useLocalCache;

    14.  }

    16.  @RequestMapping("/name")

    17.  public String name(){

    18.  return name;

    19.  }

    20.  }``` 

    **@RefreshScope**在这里的作用就是让配置内容支持动态刷新，也就是当应用运行中，我们在Nacos控制台修改了配置之后这里也会动态的更新。

1.  项目bootstrap.properties配置服务名称与Nacos地址 ```1.  # 配置中心url

    2.  spring.cloud.nacos.config.server-addr=localhost:8848

    3.  # 配置中心展现的服务名称

    4.  spring.application.name=nacos-config-example

    5.  #配置文件类型[TEXT,JSON,XML,YAML,HTML,Properties]

    6.  spring.cloud.nacos.config.file-extension=properties

    7.  # 配置分组,当前的业务基本选择为某些的GROUP,可以基于业务来划分不同的分组.

    8.  spring.cloud.nacos.config.group=DEFAULT_GROUP

    9.  # 默认选择的配置环境,当前把环境划分为4套, dev[开发环境],test[测试环境],pre[预发环境],prod[生产环境]

    10.  spring.profiles.active=dev``` 

    **WARN** 多环境配置中需要指定Nacos namespace的id，而不是指定namespace的名称

2.  启动应用程序并进行验证
    *   启动应用
        ![](https://img-blog.csdnimg.cn/20200509214405511.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTE1MzIxMDU=,size_16,color_FFFFFF,t_70)
    *   发送请求测试配置是否生效
        ![](https://imgconvert.csdnimg.cn/aHR0cDovL2NhaW5nYW8uYW55ZGF0YS50b3AvYXNzZXRzL2ltZy9zcHJpbmdjbG91ZGFsaWJhYmEvMy9uYWNvc193ZWJfY29uZmlnX3Rlc3QucG5n?x-oss-process=image/format,png)
    *   修改配置进行进行动态刷新
        进入Nacos控制台修改配置信息,name修改为bigData 再次进行测试
        ![](https://imgconvert.csdnimg.cn/aHR0cDovL2NhaW5nYW8uYW55ZGF0YS50b3AvYXNzZXRzL2ltZy9zcHJpbmdjbG91ZGFsaWJhYmEvMy9uYWNvc193ZWJfY29uZmlnX3JlZnJlc2gucG5n?x-oss-process=image/format,png)
        再次发送请求
        ![](https://imgconvert.csdnimg.cn/aHR0cDovL2NhaW5nYW8uYW55ZGF0YS50b3AvYXNzZXRzL2ltZy9zcHJpbmdjbG91ZGFsaWJhYmEvMy9uYWNvc193ZWJfY29uZmlnX3Rlc3RfcmVmcmVzaC5wbmc?x-oss-process=image/format,png)

至此使用Nacos作为配置中心已经完全搞定,并且也实现了多环境的配置。多环境有几种方式实现，但是我依然习惯使用namespace的方式来实现。
**源码:**

 ```1.  github: https://github.com/CainGao/SpringCloudAlibabaExample 

3.  码云:   https://gitee.com/CainGao/SpringCloudAlibabaExample```
