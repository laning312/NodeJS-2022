// 1. 引入内置的fs模块,并保存成变量fs  （fs  -  file system）
let fs = require('fs')

// 2. 调用fs模块的readFile方法进行读文件  
// 异步读文件 ， 通过回调接收数据
// 读取的文件必须事先存在，而且路径必须正确
fs.readFile('./user.txt', 'utf-8', (err, data) => {
    if(!err) {
        console.log(data)
    }else {
        console.log(err)
    }
})