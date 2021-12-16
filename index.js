const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'ddbb0e8bfaa84bb3921110805c7bb126',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`server is running from the law on ${port}`))