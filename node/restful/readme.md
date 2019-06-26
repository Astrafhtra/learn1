- json 格式是标准的数据交换
- 前后端开发,/api json格式来交流
- 全栈 fullstack

- restful 一切皆资源 暴露资源
- 设计良好的URL
  /posts
  /posts/:id
  /comments
  /comments/:id
  /posts/:id/comments


  HTTP动词
  GET 查询
  加一条评论 增加一个资源
  POST 新增  /comments
  DELETE 动词 /posts
  PUT 修改(UPDATE) 把全新的所有内容,去替换旧的内容
  PATCH 修改  只需要传递要更改的属性

  - RESTFUL 考点
    以为一切皆资源,URL是唯一定位资源的符号,
    它有一定的设计原则
    HTTP动词是Web资源的状态转换动词

操作    SQL方法    HTTP动词
CREATE  INSERT    POST
READ    SELECT    GET
UPDATE  UPDATE    PUT/PATCH
DELETE  DELETE    DELETE