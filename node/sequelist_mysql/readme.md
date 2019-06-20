 yarn add mysql2 sequelist sequelist-cli
 ./node_modules/.bin/sequelize init

  mysql -hlocalhost -uroot -p 进入mysql

  


 - sequelize 数据库脚手架
    mysql2 数据库驱动 
    sequelize orm 工具  table -> object
    对底层的sql API 化 model
    sequelize-cli 命令行工具

  - config 
  ./node_modules/.bin/sequelize init
  ./node_modules/.bin/sequelize db:creat
  ./node_modules/.bin/sequelize migration:create --name create-shops-table创建表或修改表
  ./node_modules/.bin/sequelize db:migrate 执行迁移
  ./node_modules/.bin/sequelize db:migrate:undo 回退创表前
  ./node_modules/.bin/sequelize seed:create --name init-shops 初始化
  ./node_modules/.bin/sequelize db:seed:all 创建信息
