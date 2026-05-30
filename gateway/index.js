const express = require('express')
const axios = require('axios')

const app = express()

app.get('/', (req, res) => {
  res.send('Gateway funcionando')
})

app.get('/pedidos', async (req, res) => {

  try {

    const response = await axios.get(
      'http://pedidos:3000'
    )

    res.json(response.data)

  } catch (error) {

    res.status(500).json({
      erro: 'Erro ao conectar no pedidos-service'
    })
  }
})

app.listen(3000, () => {
  console.log('Gateway rodando')
})