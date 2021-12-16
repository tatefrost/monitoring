const express = require('express')
const path = require('path')

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'd3633689735143c9820ab160c667aead',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
  rollbar.info('html file served successfully')
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`server is running from the law on ${port}`))