title: 鉴权中心：Spring Boot v2.1.3 兼容鉴权中心Spring Boot v2.0.2
author: 知识铺
date: 2020-04-03 11:12:12
tags:
---
### 背景
鉴权中心使用的是 Spring Boot v2.0.2
[鉴权中心：Springboot+Springsecurity+Oauth2整合](https://blog.zshipu.com/tlg/2020/04/03/%E9%89%B4%E6%9D%83%E4%B8%AD%E5%BF%83%EF%BC%9ASpringboot-Springsecurity-Oauth2%E6%95%B4%E5%90%88/)


#### 鉴权中心 兼用Spring Boot v2.1.3
鉴权中心 pom
```
<!--排包 -->
<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
			<exclusions>
				<exclusion>
					<artifactId>spring-security-core</artifactId>
					<groupId>org.springframework.security</groupId>
				</exclusion>
			</exclusions>
		</dependency>
<!--排包 -->
<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-starter-oauth2</artifactId>
			<exclusions>
				<exclusion>
					<artifactId>spring-security-core</artifactId>
					<groupId>org.springframework.security</groupId>
				</exclusion>
			</exclusions>
		</dependency>
<!--排包 -->
<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-test</artifactId>
			<scope>test</scope>
			<exclusions>
				<exclusion>
					<artifactId>spring-security-core</artifactId>
					<groupId>org.springframework.security</groupId>
				</exclusion>
			</exclusions>
		</dependency>
<!--添加Spring Boot 2.1.3 spring-security-core -->
<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-core</artifactId>
			<version>5.1.4.RELEASE</version>
			<scope>compile</scope>
</dependency>
        
```

#### 服务资源兼容鉴权中心
添加 spring-security-oauth2-autoconfigure
```
<!--        <dependency>-->
<!--            <groupId>org.springframework.security.oauth</groupId>-->
<!--            <artifactId>spring-security-oauth2</artifactId>-->
<!--            <version>2.1.3.RELEASE</version>-->
<!--        </dependency>-->
        <dependency>
            <groupId>org.springframework.security.oauth.boot</groupId>
            <artifactId>spring-security-oauth2-autoconfigure</artifactId>
            <version>2.0.0.RELEASE</version>
        </dependency>

```



