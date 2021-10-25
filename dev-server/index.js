// Test server

const express = require('express')
const app = express()
const history = require('connect-history-api-fallback')

app.use(express.static(`${__dirname}/public`))

app.use(express.json())
app.use(history())

app.use((req, res, next) => {
  console.log(req.path)
  next()
})

app.post('/assess_candidate', (req, res) => {
  console.log(req.body)
  res.json({})
})

app.post('/skills', (req, res) => {
  res.sendFile(`${__dirname}/public/test.json`)
})

app.listen(8080, () => {
  console.log('Server start at 8080')
})