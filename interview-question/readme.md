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

## q6 防抖节流函数原理