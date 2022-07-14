// 1. 引入mysql模块
const mysql = require('mysql')
// 2. 创建连接
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'mydb01'
})

// 3. 导出db对象
module.exports = db