let fs = require('fs')

// 异步写文件 ， 通过回调告知是否成功写入
// 文件不存在会自动创建
fs.writeFile('./emp.txt', '天天向上!', 'utf-8', err => {
    if(!err) {
        console.log('写入成功')
    }else {
        console.log('写入失败')
        console.log(err)
    }
})