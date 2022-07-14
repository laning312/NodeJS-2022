let http = require('http')

let data = ''
let f = true
let r = {}
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    req.on('data', trunk => {
        // console.log(data)
        data += trunk
    })

    req.on('end', () => {
        console.log(data)
        // 写入文件中
        if (f) {
            r.code = 209
            r.msg = 'ok'
        } else {
            r.code = 509
            r.msg = 'error'
        }
        res.end(JSON.stringify(r))
    })
})
    .listen(9000)