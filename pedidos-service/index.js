const express = require('express')

const sequelize = require('./src/database/database')

const Pedido = require('./src/models/pedido')

const enviarPedido = require('./src/rabbitmq/producer')

const app = express()

app.use(express.json())

sequelize.sync()
  .then(() => {
    console.log('Banco conectado')
  })
  .catch((error) => {
    console.log(error)
  })

app.get('/', async (req, res) => {

  const pedidos = await Pedido.findAll()

  res.json(pedidos)
})

app.post('/pedido', async (req, res) => {

  const pedido = await Pedido.create({
    produto: req.body.produto,
    quantidade: req.body.quantidade
  })

  await enviarPedido(pedido)

  res.json(pedido)
})

app.listen(3000, () => {
  console.log('Pedidos service rodando')
})