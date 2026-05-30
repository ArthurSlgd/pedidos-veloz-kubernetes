const amqp = require('amqplib')

async function enviarPedido(pedido) {

  try {

    const connection = await amqp.connect(
      'amqp://rabbitmq'
    )

    const channel = await connection.createChannel()

    const queue = 'pedidos'

    await channel.assertQueue(queue)

    channel.sendToQueue(
      queue,
      Buffer.from(JSON.stringify(pedido))
    )

    console.log('Pedido enviado para fila')

  } catch (error) {

    console.log(error)
  }
}

module.exports = enviarPedido