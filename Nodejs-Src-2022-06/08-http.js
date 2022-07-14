// 1.引入内置的http模块
let http = require('http')


let result = {
    code: 200,
    msg: '好好学习'
}

// 2. 调用http模块的createServer方法，创建服务器对象
let app = http.createServer((request, response) => {
    // 设置响应格式并解决中文乱码问题
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    // 通过response对象给客户端响应
    response.end(JSON.stringify(result))  
})

// 3. 调用服务器对象的listen方法，开启某个端口
app.listen(4000, err => {
    if(!err) {
        console.log('The server is running on port 4000....')
    }
})