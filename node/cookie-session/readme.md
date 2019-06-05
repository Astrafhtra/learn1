## why

  无状态

## cookie
  本地存储
  怎么来的？
  1. js document.cookie 可读 可写
  2. 服务端 通过Set-Cookie 响应头设置 cookie

  内容:
  value:
  name:
  path: cookie 在哪个路径下生效

  /                /所有路径
  /user            /user user以及user下面的
  /user/abc        /user/abc  user/abc 以及下面的

  domain:

  httpOnly:true/false 如果设置为true,就不能通过js获取cookie的值

  作用范围:
  domain + path
  在什么域名什么路径下面生效 cookie 会发送给 服务端的
  而且:http 传输报文的大小
  放在Cookie请求头里面发送
  secure:安全 只会在https协议下传输


  用途:
  状态管理,   t 
  用户个性化设置  f

## session
会话
靠后台自己实现的
很多个用户产生很多个session


userId
sessionId的时候 通过自己sessionId 查询自己的状态
cookie:sessionID=id