# fe是前端
#server是后端

## 跨域
  浏览器的安全策略
  同源策略
## CORS
  规定了一组http的头部字段作用是:允许哪些网站通过浏览器有访问的权限

  1. access-X
  2. cookie
  3. 浏览器会先以OPTIONS请求方法发起一个预检(preflight) 请求,获取一下允不允许当前的域请求,服务器允许之后才会发起正式的请求

## 代理
1. nginx

反向代理:
        http://localhost:9999/api/
        http://localhost:8888/api/
不知道请求的是哪个服务器

正向代理:
  google
  A->proxy->google.com
  B->proxy->google.com

## iframe + postMessage
1. 前端页面通过iframe 引入一个后端目录下的html
    iframe 不受同源策略限制
2. postMessage 用于在两个窗口之间传递数据
3. 前端页面通过postMessage向后端目录下面的html传递接口需要的请求参数
4. 后端页面通过postMessage向前端页面传递接口结果


## iframe + window.name
  iframe共享window.name
  没有postMessage只能借助中间的页面通知前端页面(window.parent.callback(window.name))

## jsonp
  1. 定义一个回调
  2. 将回调函数的名字告诉后端 后端会返回
    ```js
    回调(res)
    ```
  3. script 标签 加载过后执行返回的内容

  写一个jsonp的函数,以promise的方式调用
  json(url)
  .then(res=>{

  })

  4. 缺点:只能发起GET请求

  
