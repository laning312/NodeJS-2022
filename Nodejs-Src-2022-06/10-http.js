/*
1. 地址： http://localhost:5005
   返回:  图书所有分类数据
2. 地址： http://localhost:5005?id=xxx
   返回： 对应id的分类数据
3. 地址： http://localhost:5005?id=xxx&type=detail
   返回： 对应id的分类数据详情
*/

/*
    分析：
        1. 创建服务器实例， 监听5005端口
        2. 服务器给客户端响应：
            1）判断地址是哪一种？
               a. 如果是/(没有查询参数)  -> 响应所有数据
               b. 如果是/?id=xxx (有查询参数)  ->  响应特定数据
*/

let http = require('http')

let fs = require('fs')

// 最终返回的结果
let returnData = {}

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

    // 1. 获取地址
    let url = req.url
    console.log(url)
    if(url === '/') {
        sendAllData(res)
    } else {
        // 把id值解析出来
        let id = url.substring(2).split('=')[1]
        sendDataById(id, res)
    }

}).listen(5005, err=> {
    if(!err) {
        console.log('The server is running on port 5005....')
    }
})


function sendDataById(id, res) {
    fs.readFile('./data/book-category.json', 'utf-8', (err, data) => {
        if(!err) {
           let { result } = JSON.parse(data)
           let [r] = result.filter(e => e.id === id)
           // 返回给客户端数据
           returnData.code = 202
           returnData.result = r
           res.end(JSON.stringify(returnData))
        } else {
            // console.log(err)
            returnData.code = 505
            returnData.msg = '系统故障'
            res.end(JSON.stringify(returnData))
        }
    })
}

function sendAllData(res) {
    fs.readFile('./data/book-category.json', 'utf-8', (err, data) => {
        if(!err) {
            res.end(data)
        } else {
            returnData.code = 506
            returnData.msg = '系统故障'
            res.end(JSON.stringify(returnData))
        }
    })
}