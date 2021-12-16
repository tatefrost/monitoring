const express = require('express')
const path = require('path')

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'd3633689735143c9820ab160c667aead',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

let students = []

const app = express()
app.use(express.json())


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
  rollbar.info('html file served successfully')
})

app.post('/api/student', (req, res) => {
  let {name} = req.body
  name = name.trim()
  
  students.push(name)
  
  rollbar.log('Student added successfully', {author: 'Tate', type: 'manual'})
  
  res.status(200).send(students)
})
app.use(rollbar.errorHandler())

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`server is running from the law on ${port}`))