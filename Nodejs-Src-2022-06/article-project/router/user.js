// 1. 引入express模块
const express = require('express')

// 2. 通过express的Router方法得到路由对象
const router = express.Router()


// 4. 引入user对应的处理函数模块
const userHandle = require('../router_handle/user')
// 5. 导入express-joi中间件
const expressJoi = require('@escook/express-joi')
// 6. 导入所需的schema
const {regLoginUserSchema} = require('../schema/user')
// 3. 配置路由项
// 3.1 注册接口
router.post('/reg', expressJoi(regLoginUserSchema), userHandle.regUser)  // 4.1 将对应的位置换成引入的处理函数

// 3.2 登录接口
router.post('/login',expressJoi(regLoginUserSchema), userHandle.login)  // 4.2 将对应的位置换成引入的处理函数

// 暴露router
module.exports = router