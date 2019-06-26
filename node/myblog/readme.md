- req.query queryString?a=1
- req.params /:name
- req.body body-parser 中间件

- 路由的提升
  express.Router


- render 传值 
 使用一个模板 ejs

- views 
  app.set 路径 模板引擎设置
  <% code %> 运行js代码
  <%=name %>  显示转义后的html
  <%-code %>  输出html

- models 存放操作数据库的文件
- public 存放静态文件
- routes 存放路由文件
- 存放模板文件
- index.js 入口文件
- controllers 控制器



- 开发业务中间件 
  - express Web框架
  - express-session session中间件
  - connect-mongo 将session存于mongodb
  - connect-flash 页面通知中间件 基于session实现
  - ejs 模板
  - express-formidable 接收表单及文件上传的中间件
  - config-lite 读取配置文件
  - marked Markdown解析
  - moment 时间格式化
  - mongolass mongodb 驱动
  - objectid-to-timestamp 根据ObjectId生成时间
  - sha1 加密
  - winston 日志
  - express-winston