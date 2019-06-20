'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'shops',
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
      thumb_url:Sequelize.STRING,
      created_at:Sequelize.DATE,
      updated_at:Sequelize.DATE
    }
  ),

  down:queryInterface=>queryInterface.dropTable("shops")
};
