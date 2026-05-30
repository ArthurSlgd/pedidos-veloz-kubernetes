const { DataTypes } = require('sequelize')

const sequelize = require('../database/database')

const Pedido = sequelize.define('Pedido', {

  produto: {
    type: DataTypes.STRING,
    allowNull: false
  },

  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = Pedido