const mysql = require('mysql')

// 创建连接池
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'students'
})

module.exports = db