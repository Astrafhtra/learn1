## async
async 函数就是 Generator 函数的语法糖

## generator
```js
  function* test(){
      let a = yield 1;
      console.log(a);
      let b = yield 2;
      console.log(b);
      let c = yield 3;
      console.log(c);
      let d = yield 4;
      console.log(d);
    }
    // 惰性的
    var g = test();
    g.next()
```
  通过g.next()一步一步调用,每一步调用执行到yield关键词,通过传参作为上一个yield语句的返回值

  ##babel
  {
    test:/\.js$/,
    use:['babel-loader']
  } 
