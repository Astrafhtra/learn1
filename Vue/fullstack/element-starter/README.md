大前端全栈开发思路

在前端vue项目目录下新建一个server用来做MVC

前后端分离

后端负责提供/api 在server目录下
前端: src/
后端负责API 服务


1. 后端在3000端口，未来等着ngnix 80=>3000
  /api API服务 ,等着前端调用 /  vue打包好的dist目录 index.html readFile返回

2. 前端在8080端口 vue-router vuex axios
3. 前后端连接 api 数据=> vue组件的data 
4. 跨域 (前端面试最重要的问题)
    domain域名
    端口,cross domain
    前端不允许 安全问题
    前端考虑 页面上显示的安全
  - 前端 
    book.douban.com
    www.douban.com
    subdomain;domain;port 都一样
    js同源机制,相同的源是值得依赖的
    前后端 8080:3000 跨域
    不跨，fectch('/api/user/login) 404
    3000 /api/ proxy代理
    /api/ 匹配
    target:http//localhost:3000/api,
    changeOrigin:true
    发出去的请求也不跨

