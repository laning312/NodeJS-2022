// 1. 引入express模块
const express = require('express')

// 2. 调用express函数得到app对象
const app = express()

// 跨域解决
const cors = require('cors')
app.use(cors())

// 6. 设置body中数据的接收
app.use(express.urlencoded({ extended: true }))

// 7. 引入express-jwt对路由进行鉴权
const { expressjwt: jwt } = require("express-jwt");
app.use(jwt({
    secret: 'love you',
    algorithms: ['HS256'],
}).unless({ path: [/^\/api\//, /^\/images\//] }))

// 配置静态资源（图片等）的访问 
// 第一个参数表示客户端访问时的路径
app.use('/images/', express.static('uploads/images/'))

// 4. 引入userRouter路由
const userRouter = require('./router/user')
// 8. 引入userinfoRouter路由
const userinfoRouter = require('./router/userinfo')
const articlecateRouter = require('./router/articlecate')
const articleRouter = require('./router/article')
// 5. 注册userRouter路由并配置前缀
app.use('/api', userRouter)
app.use('/my', userinfoRouter)
app.use('/my/article', articlecateRouter)
app.use('/my/article', articleRouter)


// 6. 配置错误中间件
const Joi = require('joi')
app.use((err, req, res, next) => {
    // 6.1 Joi 参数校验失败
    if (err instanceof Joi.ValidationError) {
        return res.send({
            status: 1,
            message: err.message
        })
    }

    if (err.name === "UnauthorizedError")
        return res.send({
            status: 1,
            message: '您无权访问'
        })
    // 6.2 未知错误
    res.send({
        status: 1,
        message: err.message
    })
})

// 3. 监听端口
app.listen(3008)

console.log('......')