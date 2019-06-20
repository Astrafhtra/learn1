'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'goods',
    {
      id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      name:{
        type:Sequelize.STRING,
        allowNUll:false
      },
      shop_id:{
        type:Sequelize.INTEGER,
        allowNUll:false
      },
      thumb_url:Sequelize.STRING,
      created_at:Sequelize.DATE,
      updated_at:Sequelize.DATE
    }
  ),

  down:queryInterface=>queryInterface.dropTable("goods")
};
