const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).send('Olá Mundo!')
})

app.listen(port, (req, res) => {
  console.log(`Exemplo de app rodando em http://localhost:${port}`)
})