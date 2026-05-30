const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  'pedidos_db',
  'admin',
  'admin',
  {
    host: 'postgres',
    dialect: 'postgres'
  }
)

module.exports = sequelize