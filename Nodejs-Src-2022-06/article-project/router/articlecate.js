
// 1. 引入express模块
const express = require('express')

// 2. 通过express的Router方法得到路由对象
const router = express.Router()

const articlecateHandle = require('../router_handle/articlecate')

router.get('/cates', articlecateHandle.getCateList)

module.exports = router