## static
  koa-static
  为什么要配置
  静态资源:图片 html css js
  不会随着服务的运行而改变内容
  assets 资源

## path
path.join 将路径上的各个部分链接起来,处理了各个平台的分割符号
window:\   类unix: /

## formidable
fields 非[type="title"]内容都会到files[type="file"]


## 静态资源服务
 双击打开
 file://  本地文件读取
 服务器
 http://
 <!-- 访问图片的时候发了一个服务请求 -->
 html 里面引入的图片 js css 都会发出一个请求,然后这些都是静态资源,
 所以ulr和服务器磁盘的路径一一对应
 1. index.html 的时候自动打开
 2. 没有 列出所有文件 文件夹 
 用 koa-static 的作用就是在html里面正确引入目录下的资源
 
 处理static目录下的资源映射为请求路径
 /static/1.png 返回1.png的内容
 (koa-statice)
 业内擅长静态资源的服务器:Nginx