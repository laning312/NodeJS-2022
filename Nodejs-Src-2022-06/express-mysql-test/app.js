const express = require('express')

const app = express()

const studentRouter = require('./router/student')

app.use(studentRouter)

app.listen(9999)

console.log('......')