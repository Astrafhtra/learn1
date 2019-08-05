##  __proto__ 和 prototype区别

只有函数才有prototype
函数的 __proto__ .__proto__ 多次才能得到原型链

## q1: js全局执行上下文为我们创建了全局对象和this关键字
 new实现的原理:
  1. 创建一个空对象,构造函数的this指向这个空对象
  2. 这个新对象被执行[原型]连接
  3. 执行构造函数,将属性和方法添加到this引用的对象上
  4. 如果构造函数中没有返回其他对象,那么返回this,即创建的新对象,否则，返回构造函数返回的对象

## q2: call , apply , bind
  1. b.call(a) 就相当于把b里面的作用域强行指向到a里面去,第一个参数一定都是作用域要去到的地方,其他参数时该作用域里面用到的值
  2. b.apply(a,[1])就相当于把b里面的作用域强行指向到a里面去,第一个参数一定都是作用域要去到的地方,其他参数都要用数组类型
  3. b.call()或者b.apply()此时this的作用域被指向window
  4. c = b.bind(a)  
     c()
     bind方法返回的是一个修改过的函数,所以该用函数该有的姿态去调用,bind方法接收的参数时按照形参的顺序进行的

## q3 浅拷贝和深拷贝
  1. 浅拷贝:浅拷贝是会将对象的每个属性进行依次复制，但是当对象的属性值是引用类型时，实质复制的是其引用，当引用指向的值改变时也会跟着变化。当改变的不是基本类型的时候,不会影响拷贝的数据(当一层的属性为基本数据类型新对象和原对象互不影响,但是如果第一层属性值是复杂数据类型,那么新对象和原对象的属性值其指向的是同一块内存地址)
  2. 深拷贝:深拷贝复制变量值，对于非基本类型的变量，则递归至基本类型变量后，再复制。 深拷贝后的对象与原来的对象是完全隔离的，互不影响，对一个对象的修改并不会影响另一个对象。 
  3. 数组解构:let [x,y] = [1,2] //x=1,y=2
  4. 对象解构:let {foo,bar} = {foo:"aa",bar:"bb"} //foo="aa",bar="bb"
      另(允许给赋值的变量重新命名) let {foo:baz} = {foo:"abc"}//baz="abc"

    2---let obj6 = JSON.parse(JSON.stringify(obj))
    obj.name = '标哥'
    console.log(obj6)//name:'蜗牛'

## q4 闭包
    闭包是指有权限访问一个函数作用域中的变量的函数
      1. 能够访问函数定义时所在的词法作用域(阻止其被回收)
      2. 私有化变量
      3. 模拟块级作用域


## q5 数组去重
```js
  - Set  
    function uniq(arr){
      return [...new Set(arr)]
    }
    console.log(uniq([1,2,3,2,3,5]))

  - indexof
    function uniq(arr){
        let result = []
        for(let i=0;i<arr.length;i++){
          if(result.indexOf(arr[i]) === -1){
            result.push(arr[i])
          }
        }
        return result
      }
      console.log(uniq([1,2,3,2,3,5]))

  - includes 
    function uniq(arr){
        let result = []
        for(let i=0;i<arr.length;i++){
          if(!result.includes(arr[i])){
            result.push(arr[i])
          }
        }
        return result
      }
      console.log(uniq([1,2,3,2,3,5]))

  - map.set
    function uniq(arr){
            let map = new Map()
            let result = new Array()
            for(let i=0;i<arr.length;i++){
              if(map.has(arr[i])){
                // 把arr[i]都map遍历下(key,value),若key为true时候不push进result
                map.set(arr[i],true)
              }else{
                map.set(arr[i],false)
                result.push(arr[i])
              }
            }
            return result
          }
          console.log(uniq([1,2,3,2,3,5]))

  - reduce
    function uniq(arr){
              return arr.reduce((prev,cur)=> prev.includes(cur)? prev : [...prev,cur],[])
            }
            console.log(uniq([1,2,3,2,3,5]))
```

## q6 防抖节流函数原理


## q7 __proto__ 和 prototype关联
      __proto__是每一个实例都有的属性,可以访问[prototype]属性,实例的__proto__与其构造函数的prototype指向的是同一个对象

## q8 parseInt(string,radix)
    string
      要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用  ToString 抽象操作)。字符串开头的空白符将会被忽略。
    radix
      一个介于2和36之间的整数(数学系统的基础)，表示上述字符串的基数。比如参数"10"表示使用我们通常使用的十进制数值系统。始终指定此参数可以消除阅读该代码时的困惑并且保证转换结果可预测。当未指定基数时，不同的实现会产生不同的结果，通常将值默认为10。
    parseInt('2') 默认十进制 输出 2
    parseInt('2'，1) 输出NaN
    parseInt('4'，3) 输出NaN
    parseInt('4'，4) 输出NaN
    parseInt('4'，5) 输出5
    进制数不能小于2 小于2都是NaN
    如果传入的字符串里面的每位的最大数字大于或等于进制数，也会输出NaN

## q9事件委托
    点击哪个li显示哪个的内容

## q12 GET 和 POST请求在缓存区别
  get请求url限制长度,get请求有缓存
  1. get请求类似于查找的过程,用户获取数据,可以不用每次都与数据连接,所有可以使用缓存
  2. post不同,post一般做的是修改和删除数据的工作,所以必须与数据库交互,所以不能使用缓存
  因此get请求更适合于请求缓存
  POST:加密传输
  GET:
## q12 url长度限制
  http协议并没有限制url的长度,是浏览器或者web浏览器做的长度限制,并且只针对get请求作的限制
  IE : 2803 btye
  Firefox:65536
  Chrome:8182
  Safari:80000
  Opera:190000
## q12前端事件流(index.html-demo)
  addEventListener第三个参数控制事件为冒泡还是捕获
  默认为false是冒泡(从内到外),为true是捕获(从外到内)
  IE只支持事件冒泡
  在DOM标准的事件模型中,事件流包括下面几个阶段:
    1. 事件捕获阶段
    2. 处于目标阶段
    3. 事件冒泡阶段
## q12图片的懒加载和预加载
  预加载:提前加载图片,当用户需要查看图片时可直接从本地缓存中渲染
  懒加载:最为服务器的前端优化,减少请求或延迟请求(懒加载对服务器有一定的缓解压力作用,预加载则会增加服务器的压力)

## q12 js中的各种位置
  clientHeight:表示可视区域的高度,不包含border和滚动条
  offsetHeight:表示可视区域的高度,包含border和滚动条
  scrollHeight:表示所有区域的高度,包含因为滚动被隐藏的部分
  clientTop:表示边框border的厚度,在未指定的情况下一般为0
  scrollTop:滚动被隐藏的高度
## q13 js拖拽功能的实现
  1. onmousedown
  2. onmousemove
  3. onmouseup
  4. 控制开关

## q16类的创建和继承


## q17 click在ios手机上有300ms的延迟,原因和解决方法
  1. <meta name="viewport" content="width=device-width, initial-scale=1.0">
    initial-scale=no 关闭点击缩放功能
  2. FastClick,其原理是检测到touchend事件后,立刻发出模拟click事件,并把浏览器300ms之后真实发出的事件阻断

## q18 Cookie,sessionStorage,localStorage
  1. Cookie 数据始终在同源的http请求中携带(即使不需要),即cookie在浏览器和服务器之间来回传递,而sessionStorage和localStorage不会自动把数据发给服务器,仅在本地保存,cookie还有(path)概念,可以限制cookie只属于某个路径下,存储大小只有4k左右
  2. sessionStorage:仅在当前浏览器窗口关闭前有效,不能长久保存
  3. localStorage:在所有的同源窗口都是共享的,cookie也是在所有同源窗口共享的,localStorage大小在5M左右
