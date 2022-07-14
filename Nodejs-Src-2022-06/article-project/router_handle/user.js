const { cryptPwd } = require('../tools/tools.js')
const db = require('../db/db.js')
const jwt = require('jsonwebtoken')

//  1. 定义注册用户的处理函数
let regUser = (req, res) => {
    // 4. 获取用户名密码信息
    const user = req.body
    console.log(user)
    // 6. 检查用户名是否已占用
    const checkSql = 'select * from t_user where username=?'
    db.query(checkSql, user.username, (err, results) => {
        if (err) return res.send({ status: 1, message: err })
        if (results.length > 0) return res.send({ status: 1, message: '用户名已占用' })
        // 用户名可用
        // 4.1 对密码进行加密
        const pwd = cryptPwd(user.password)
        console.log(pwd)
        // 5. 编写插入sql语句，执行
        const sql = 'insert into t_user(username, password) values(?,?)'
        db.query(sql, [user.username, pwd], (err, results) => {
            if (err) return res.send({ status: 1, message: err })
            if (results.affectedRows != 1) return res.send({ status: 1, message: '注册失败' })
            // 注册成功
            res.send({
                status: 0,
                message: '注册成功'
            })
        })
    })


}


// 3. 定义登录的处理函数
let login = (req, res) => {
    const user = req.body
    // 1) 编写sql语句
    const sql = 'select * from t_user where username=? and password=md5(?)'
    // 2) 执行sql
    db.query(sql, [user.username, user.password], (err, results) => {
        if (err) return res.send({ status: 1, message: err })
        if(results.length === 0) return res.send({status: 1, message: '用户名或密码有误'})
        // 用户名密码都正确
        // 产生令牌
        console.log(results[0].id, results[0].username)
        const token = jwt.sign({id: results[0].id, username: results[0].username}, 'love you', { expiresIn: '2h' })
        console.log(token)
        return res.send({
            status: 0,
            message: '登录成功',
            token: 'bearer ' + token
        })
    })
}


// 2. 导出处理函数
module.exports = {
    regUser,
    login
}