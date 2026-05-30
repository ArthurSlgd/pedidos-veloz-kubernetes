const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({
    service: 'Pedidos Service'
  })
})

app.listen(3000, () => {
  console.log('Pedidos rodando')
})