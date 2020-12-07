const express = require('express')
const app = express()
const PORT = 12345

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))
