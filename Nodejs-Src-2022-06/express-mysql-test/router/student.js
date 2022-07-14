const express = require('express')

const router = express.Router()

const studentHandler = require('../router_handler/student.js')

router.get('/list', studentHandler.getStudentList)
   

module.exports = router