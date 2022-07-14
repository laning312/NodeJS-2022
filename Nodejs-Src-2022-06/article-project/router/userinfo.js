// 1. 引入express模块
const express = require('express')

// 2. 通过express的Router方法得到路由对象
const router = express.Router()

const userInfoHandle = require('../router_handle/userinfo')

// 个人中心接口一： 获取用户的基本信息
router.get('/userinfo', userInfoHandle.getUserInfo)

// router.post('/updateUserinfo', expressJoi(updateUserInfoSchema), )


router.post('/update/avatar', userInfoHandle.updateAvatar)

// 暴露router
module.exports = router