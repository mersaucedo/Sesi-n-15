const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Suma: 2+2 = 4');
})

app.listen(port, () => {
  console.log(`Elserver se esta iniciando en http://localhost:${port}`)
})