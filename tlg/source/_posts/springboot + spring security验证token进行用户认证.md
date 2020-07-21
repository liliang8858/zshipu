
title: springboot + spring security验证token进行用户认证
author: 知识铺
date: 2020-06-09 17:11:25
tags:
---
 ## <a name="t0"></a><a name="t0"></a>核心组件

### <a name="t1"></a><a name="t1"></a>SecurityContextHolder

SecurityContextHolder是spring security最基本的组件。用于存储安全上下文（security context）的信息。当前操作的用户是谁，该用户是否已经被认证，他拥有哪些角色权限等这些都被保存在SecurityContextHolder中。SecurityContextHolder默认是使用ThreadLocal实现的，这样就保证了本线程内所有的方法都可以获得SecurityContext对象。

可以通此方法过来获取当前操作用户信息：

```SecurityContextHolder.getContext().getAuthentication().getPrincipal();``` 

默认返回的对象是UserDetails实例，其中包含了username，password和权限等信息，当然，我们也可以通过实现这个接口自定义我们自己的UserDetails实例，给我们自己的应用使用，以符合需要的业务逻辑。比如下面只对token进行操作就可以吧token作为属性放入UserDetails实现类中。

### <a name="t2"></a><a name="t2"></a>Authentication

Authentication是Spring Security方式的认证主体。

<1> Authentication是spring security包中的接口，直接继承自Principal类，而Principal是位于java.security包中的。可以见得，Authentication在spring security中是最高级别的身份/认证的抽象。
<2> 由这个顶级接口，我们可以得到用户拥有的权限信息列表，密码，用户细节信息，用户身份信息，认证信息。
authentication.getPrincipal()返回了一个Object，我们将Principal强转成了Spring Security中最常用的UserDetails，这在Spring Security中非常常见，接口返回Object，使用instanceof判断类型，强转成对应的具体实现类。接口详细解读如下：

*   getAuthorities()，权限信息列表，默认是GrantedAuthority接口的一些实现类，通常是代表权限信息的一系列字符串。
*   getCredentials()，密码信息，用户输入的密码字符串，在认证过后通常会被移除，用于保障安全。
*   getDetails()，细节信息，web应用中的实现接口通常为 WebAuthenticationDetails，它记录了访问者的ip地址和sessionId的值。
*   getPrincipal()，最重要的身份信息，大部分情况下返回的是UserDetails接口的实现类，也是框架中的常用接口之一。

### <a name="t3"></a><a name="t3"></a>AuthenticationManager

AuthenticationManager（接口）是认证相关的核心接口，也是发起认证的出发点，因为在实际需求中身份认证的方式有多种，一般不使用AuthenticationManager，而是使用AuthenticationManager的实现类ProviderManager ,ProviderManager内部会维护一个List<AuthenticationProvider>列表，存放多种认证方式，实际上这是委托者模式的应用（Delegate）。也就是说，核心的认证入口始终只有一个：AuthenticationManager，不同的认证方式对应不同的AuthenticationProvider。

总结：

SecurityContextHolder：存放身份信息的容器

Authentication：用户信息的抽象

AuthenticationManager：身份认证器

## <a name="t4"></a><a name="t4"></a>认证流程

1、通过过滤器过滤到用户请求的接口，获取身份信息（假如有多个认证方式会配置provider的顺序）

2、一般将身份信息封装到封装成Authentication下的实现类UsernamePasswordAuthenticationToken中

3、通过AuthenticationManager 身份管理器（通过配置找到对应的provider）负责验证这个UsernamePasswordAuthenticationToken

4、认证成功后（认证逻辑一般在service中），AuthenticationManager身份管理器返回一个被填充满了信息的（包括上面提到的权限信息，身份信息，细节信息，但密码通常会被移除）Authentication实例。

5、SecurityContextHolder安全上下文容器将第2步填充了信息的UsernamePasswordAuthenticationToken，通过SecurityContextHolder.getContext().setAuthentication(…)方法，设置到其中来建立安全上下文（security context)。

## <a name="t5"></a><a name="t5"></a>结合springboot实现对token验证

### <a name="t6"></a><a name="t6"></a>1、场景

拦截api/的所有接口进行验证，验证token用户与id用户是否一致，不一致或token过期则没有权限访问

### <a name="t7"></a><a name="t7"></a>2、实现

1、添加security相关依赖：spring-boot-starter-security   spring-security-oauth2

2、全局配置类，根据不同需求配置不同的过滤器和provider（代码片段）

 ```1.  @Configuration

2.  @EnableWebSecurity

3.  public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

6.  @Autowired

7.  private RedisTemplate redisTemplate;

9.  @Autowired

10.  private SecurityOrgPeopleMapper securityOrgPeopleMapper;

12.  @Autowired

13.  private ImCheckTokenFactory imCheckTokenFactory;

16.  // oauth2 server

18.  @Override

19.  protected void configure(AuthenticationManagerBuilder auth) {

20.  addProvider(auth);

21.  }

23.  //指定provider

24.  private void addProvider(AuthenticationManagerBuilder auth) {

25.  auth.authenticationProvider(imAuthenticationProvider());  

26.  }

28.  @Override

29.  protected void configure(HttpSecurity http) throws Exception {

30.  // 请求过滤 对api/对所有接口都验证

31.  http

32.  .authorizeRequests()

33.  .antMatchers("/api/**").access("@permissionChecker.hasPermission(authentication,request)")

34.  .anyRequest().authenticated();

36.  registerFilter(http);

37.  }

39.  //指定filter过滤器

40.  private void registerFilter(HttpSecurity http) throws Exception {

41.  http

42.  .addFilterBefore(new ImAuthenticationFilter(authenticationManager()), UsernamePasswordAuthenticationFilter.class); 

43.  }

46.  private ImAuthenticationProvider imAuthenticationProvider() {

47.  return new ImAuthenticationProvider(imCheckTokenFactory, securityOrgPeopleMapper);

48.  }

51.  }``` 

过滤器：

 ```1.  public class ImAuthenticationFilter extends GenericFilterBean {

3.  private AuthenticationManager authenticationManager;

5.  public ImAuthenticationFilter(AuthenticationManager authenticationManager) {

6.  this.authenticationManager = authenticationManager;

7.  }

9.  @Override

10.  public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

12.  // 其他过滤器已经认证通过了

13.  Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

14.  if (authentication != null && authentication.isAuthenticated()) {

15.  chain.doFilter(request, response);

16.  return;

17.  }

18.  HttpServletRequest httpRequest = asHttp(request);

19.  HttpServletResponse httpResponse = asHttp(response);

21.  //获取接口中都用户信息

22.  String userId = obtainUserId(httpRequest);

23.  String token = obtainToken(httpRequest);

24.  String client = obtainClient(httpRequest);

26.  try {

27.  checkToken(token);

28.  imProcessTokenAuthentication(Integer.parseInt(userId), token, client);

29.  chain.doFilter(request, response);

30.  } catch (UserAuthenticationException userAuthenticationException) {

31.  logger.warn(userAuthenticationException.getMessage());

32.  httpResponse.setStatus(userAuthenticationException.getStatus());

33.  } catch (AuthenticationException authenticationException) {

34.  chain.doFilter(request, response);

35.  }

37.  }

39.  private String obtainToken(HttpServletRequest request) {

40.  String tokenParameter = "F-Session";

41.  String token = request.getHeader(tokenParameter);

42.  if (Objects.isNull(token)) {

43.  token = request.getParameter(tokenParameter);

44.  }

45.  return token;

46.  }

48.  private String obtainUserId(HttpServletRequest request) {

49.  String userIdParameter = "userId";

50.  return request.getParameter(userIdParameter);

51.  }

53.  private String obtainClient(HttpServletRequest request) {

54.  String clientParameter = "client";

55.  return request.getParameter(clientParameter);

56.  }

58.  private HttpServletRequest asHttp(ServletRequest request) {

59.  return (HttpServletRequest) request;

60.  }

62.  private HttpServletResponse asHttp(ServletResponse response) {

63.  return (HttpServletResponse) response;

64.  }

66.  private void checkToken(String token) {

67.  if (StringUtils.isEmpty(token)) {

68.  throw new UserAuthenticationException(SecurityHttpServletResponse.TOKEN_INVALID, "authenticate.fail");

69.  }

70.  }

72.  //im//将用户信息封装到ImTokenAuthentication（自定义用户信息类）中

73.  private void imProcessTokenAuthentication(Integer userId, String token, String client) {

75.  Authentication resultOfAuthentication = imTryToAuthenticateWithToken(userId, token, client);

76.  SecurityContextHolder.getContext().setAuthentication(resultOfAuthentication);

77.  }

79.  private Authentication imTryToAuthenticateWithToken(Integer userId, String token, String client) {

80.  ImTokenAuthentication imTokenAuthentication = new ImTokenAuthentication(userId, token, client);

81.  return tryToAuthenticate(imTokenAuthentication);

82.  }

85.  private Authentication tryToAuthenticate(Authentication requestAuthentication) throws AuthenticationException {

86.  //找到配置的authenticationManager实现类provider进行验证返回充满信息的Authentication

87.  Authentication responseAuthentication = authenticationManager.authenticate(requestAuthentication);

88.  if (responseAuthentication == null || !responseAuthentication.isAuthenticated()) {

89.  throw new InternalAuthenticationServiceException("Unable to authenticate for provided credentials");

90.  }

91.  logger.debug("User successfully authenticated");

92.  return responseAuthentication;

93.  }

94.  }``` 

自定义authentication（一般继承UsernamePasswordAuthenticationToken，此项目是在前任的项目基础上写的）

 ```1.  public class ImTokenAuthentication extends TokenAuthenticationToken {

3.  private Integer userId;

4.  private String client;

6.  public ImTokenAuthentication(Integer userId, String token, String client) {

7.  super(token);

8.  this.userId = userId;

9.  this.client = client;

10.  }

12.  public ImTokenAuthentication(Integer userId, String token, String client, SecurityUserDetails details) {

13.  super(token);

14.  this.userId = userId;

15.  this.client = client;

16.  setDetails(details);

17.  }

19.  public Integer getUserId() {

20.  return userId;

21.  }

23.  public String getClient() {

24.  return client;

25.  }

26.  }``` 

provider

 ```1.  public class ImAuthenticationProvider implements AuthenticationProvider {

3.  private SecurityOrgPeopleMapper securityOrgPeopleMapper;//根据项目需求注入

5.  private ImCheckTokenFactory imCheckTokenFactory;//根据项目需求注入

7.  public ImAuthenticationProvider(ImCheckTokenFactory imCheckTokenFactory, SecurityOrgPeopleMapper securityOrgPeopleMapper) {

8.  this.securityOrgPeopleMapper = securityOrgPeopleMapper;

9.  this.imCheckTokenFactory = imCheckTokenFactory;

10.  }

13.  @Override

14.  public Authentication authenticate(Authentication authentication) throws AuthenticationException {

15.  //自定义的装载用户信息的类

16.  ImTokenAuthentication imTokenAuthentication = (ImTokenAuthentication) authentication;

17.  //获取在过滤器中放入authentication的用户信息

18.  String token = authentication.getPrincipal().toString();

19.  Integer userId = Integer.parseInt(imTokenAuthentication.getUserId().toString());

20.  String client = imTokenAuthentication.getClient();

22.  //获取验证token所在的sevice

23.  ImCheckTokenService imCheckTokenService = imCheckTokenFactory.getService(client);

25.  if (Objects.isNull(imCheckTokenService)) {

26.  authentication.setAuthenticated(false);

27.  throw new UserAuthenticationException(SecurityHttpServletResponse.TOKEN_INVALID, "authenticate.fail");

28.  }

29.  //验证token逻辑

30.  Object object = imCheckTokenService.checkToken(userId, token);

31.  if (Objects.isNull(object)) {

32.  throw new BadCredentialsException("");

33.  }

35.  OrgPeople orgPeople = securityOrgPeopleMapper.getPeopleBySystemUserId(userId);

37.  imTokenAuthentication.setDetails(new SecurityUserDetails((Account) ；

38.  //在servcice中验证不通过就已经抛出异常了，此处正常运行则设置验证通过

39.  authentication.setAuthenticated(true);

40.  return authentication;

41.  }

43.  @Override

44.  public boolean supports(Class<?> authentication) {

45.  return (ImTokenAuthentication.class.isAssignableFrom(authentication));

46.  }

47.  }``` 
### <a name="t8"></a><a name="t8"></a>参考：

[spring security架构](https://zshipu.com/t?url=http://www.importnew.com/26712.html)

[https://www.cnblogs.com/shiyu404/p/6530894.html](https://zshipu.com/t?url=https://www.cnblogs.com/shiyu404/p/6530894.html)

[https://blog.csdn.net/ro_wsy/article/details/44341547](https://zshipu.com/t?url=https://blog.csdn.net/ro_wsy/article/details/44341547)

[官方文档](https://zshipu.com/t?url=https://docs.spring.io/spring-security/site/docs/4.2.2.RELEASE/reference/htmlsingle/)
