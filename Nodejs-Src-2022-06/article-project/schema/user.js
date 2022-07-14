const Joi = require('joi')

// 定义登录和注册时的规则（两个一样）
const username =  Joi.string().pattern(/^[a-zA-Z0-9\u4e00-\u9fa5]{2,10}$/).required()
const password = Joi.string().min(3).max(6).required()
const regLoginUserSchema = {
    body: {
        username,
        password
    }
}

// 定义更新用户的规则
const id = Joi.number().integer()
const email = Joi.string().email().required()
const updateUserInfoSchema = {
    body: {
        id,
        nickname: username,
        email
    }
}

// 导出规则 
module.exports = {
    regLoginUserSchema,
    updateUserInfoSchema
}


