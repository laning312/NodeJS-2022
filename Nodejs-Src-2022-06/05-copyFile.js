let fs = require('fs')

fs.readFile('./emp.txt', 'utf-8', (err, data) => {
    if(!err) {    // 正确读取
        writeFile(data)
    } else {
        console.log(err)
    }
})


function writeFile(data) {
    fs.writeFile('./emp_copy.txt', data, 'utf-8', err => {
        if(!err) {
            console.log('复制成功')
        } else {
            console.log(err)
        }
    })
}