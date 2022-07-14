/*
    创建服务器对象，开启5001端口，响应给客户端的数据为 data/book-category.json的文件内容
*/

let http = require('http')

let fs = require('fs')


const PORT = 5001

http.createServer((request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    console.log(request.url)
    console.log('hello')
    // 读文件(发送数据)
    sendData(response)
}).listen(PORT, err => {
    if(!err) {
        console.log(`The server is running on port ${PORT}...`)
    }
})


function sendData(res) {
    fs.readFile('./data/book-category.json', 'utf-8', (err, data) => {
        res.end(data)
    })
}