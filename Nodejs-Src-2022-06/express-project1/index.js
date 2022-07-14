// 1. 引入express模块 （这个模块暴露出来一个方法）
const express = require('express')
// 2. 调用express方法，得到实例对象
const app = express()

// 解析客户端post请求时提交的application/x-www-form-urlencoded类型的数据
app.use(express.urlencoded({ extended: true })) 

// 4. 设置get请求
app.get('/', (req, res) => {
    res.send('hello express!!')
})

// http://localhost:8080/list?page=2
app.get('/list', (req, res) => {
    // res.send('这是列表数据')
    console.log(req.query)  // url地址后?后面的内容是查询参数，通过query可以取到，并且已经变成对象形式
    res.send({
        data: [
            {id: 101, name: 'aaa'},
            {id: 102, name: 'bbb'}
        ]
    })
})

// url动态参数 示例 http://localhost:8080/detail/9 此时，9会赋给id，最终以键值对的形式存入params中
// {id: 9}
app.get('/detail/:id', (req, res) => {
    console.log(req.params)   // 
    res.send('这是某个商品的详情')
})


// post请求
app.post('/', (req, res) => {
    console.log(req.body)  // 获取post请求体里的内容（注意前面要设置中间件处理数据）
    res.send('这是post请求的返回数据')
})


// 3. 监听某个端口
app.listen(8080, err => {
    if(!err) {
        console.log('the server is running on port 8080....')
    }
})