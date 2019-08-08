1. https 和 http
- http req(用户 proxy浏览器)传输过程  res(从服务器端返回)
     - 怕我们的内容被别人读取
     - 内容被篡改
     - 过期了就不可以被伪造使用

- GET POST  password日志
- 上网服务供应商,等中间人,HTTP传输不安全

- HTTPS
  - 加密
    对称加密(解密的密码)
    非对称加密(公钥 私钥)
    先非对称,之后都是对称
  签证书

2. 去重
  循两次,内达值，
  要少循,用索引，
  要过滤,是索引
  新排序,前后重

3. 垃圾回收
  - js垃圾回收是自动的
  - 回收内存
    function 局部变量
    跨页面时
  - 可达性 作为评判的依据的
    显而易见,因为一些原因不可被删除
    - 全局变量(不会删除)
    - 当前嵌套调用链上的其他函数的变量和参数,这些值称为根
  - 如果引用域引用链可以从根访问任何其他值,则认为该值可访问
```js
  let user = {
    name:'John'
  }
```
global
  |
Object
name:'John'
user 全局变量  =(引用式赋值)
name 基础属性=>字符串类型的John

user = null;//触发一次垃圾回收
```js
  let user = {
    name:'John'
  }
  let admin = user
```
   global
user   admin
  Object...
user = null;(不会回收user,可达性)