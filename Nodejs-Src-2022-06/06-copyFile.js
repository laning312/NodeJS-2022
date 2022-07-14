let fs = require('fs')

fs.readFile('./logo.jpg', (err, data) => {
    if(!err) {    // 正确读取
        writeFile(data)
        // console.log(data)
    } else {
        console.log(err)
    }
})


function writeFile(data) {
    fs.writeFile('./logo2.jpg', data, err => {
        if(!err) {
            console.log('复制成功')
        } else {
            console.log(err)
        }
    })
}