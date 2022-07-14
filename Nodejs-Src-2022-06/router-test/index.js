const express = require('express')
const cors = require('cors')   // 引入跨域支持模块
const app = express()
const router = require('./router/books.js')  // 4. 引入自定义的路由模块

// 使用cors
app.use(cors())
// 5. 注册路由
// app.use(router)
// 注册路由的同时加前缀
app.use('/api', router)

app.listen(8888, err => {
    if (!err) {
        console.log('......')
    }
})