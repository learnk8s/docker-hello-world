const express = require('express')
const app = express()
const Redis = require('ioredis')

const VERSION = '2.0.0'

const redis = new Redis()

redis.on('error', () => {})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/version', (req, res) => {
  res.send(VERSION)
})

app.get('/healthz', (req, res) => {
  if (redis.status === 'ready') {
    res.sendStatus(200)
  } else {
    res.sendStatus(500)
  }
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
