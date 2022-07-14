let fs = require('fs')

// 同步读文件 ，通过返回值接收数据
try {
    let result = fs.readFileSync('./usr.txt', 'utf-8')
    console.log(result)
} catch (e) {
    // console.log(e)
    console.log('读文件失败')
}