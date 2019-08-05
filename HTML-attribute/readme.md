## script
- 下载,执行
  1. async
    - html parse 解析 和下载是并行的
    - 下载完就执行,顺序无法控制
  2. defer
    页面已加载后才会运行脚本
    - html parse 解析 和下载是并行的
    - 整个文档加载完成之后,按照script在文档中出现的顺序执行
  3. 没有属性
    - html parse 和 js下载执行都是互斥的
    
## crossorigin
  用于 可以引入跨域资源的标签: img link script
  crossorigin代表要协商跨域
  后端设置 Access-contral-* 就会出错
  - anonymous
    如果使用这个值,会在请求头中加一个origin属性
  - use-credentials
    请求的时候带上cookie等用户信息

    
    如果未设置cros,跨域 js发生了错误,将会向window.onerror提供很少的信息,通过crossorigin属性得到详细的信息