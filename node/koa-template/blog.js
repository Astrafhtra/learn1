const Koa = require('koa');
// 支持哪些模板引擎
const views = require('koa-views');
const path = require('path');
// 方便区分不同的路径
const ejs = require('ejs');
// 处理请求数据
const koaBody = require('koa-body');

// const router = new Router();
const app = new Koa();
const router = require('./router')

// 往 ctx 上面加东西
app.use(koaBody());
app.use(
  views(path.join(__dirname,'./views'),{
    extension: 'ejs'
  })
)
//  /user 个人主页面
//  /posts 文章详情
// router.get('/user',);
// router.get('/posts',);
// app.use(async (ctx)=>{
//   //区分 页面
//   // console.log(ctx.path);
//   if(ctx.path === '/user'){
//     await ctx.render('user',{user});
//   }else if(ctx.path === '/posts'){
//     const {id} = ctx.query;
//     const post = postsDetail.find(postItem => postItem.id == id);
//     await ctx.render('post',{post});
//   }else{
//     ctx.body = `无法处理该请求`;
//   }
// })

app.use(router.routes())
   .use(router.allowedMethods())

app.listen(8080,()=>{
  console.log('server is running 8080')
})