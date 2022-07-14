// 1.引入内置的http模块
let http = require('http')

// 2. 调用http模块的createServer方法，创建服务器对象
let app = http.createServer((request, response) => {
    // 通过response对象给客户端响应
    response.end('hello world!!')   // 将'hello world!'响应给客户端，并结束本次响应
})

// 3. 调用服务器对象的listen方法，开启某个端口
app.listen(4000, err => {
    if(!err) {
        console.log('The server is running on port 4000....')
    }
})