const db = require('../db/db')
// 获取当前登录用户的个人信息
let getUserInfo = (req, res) => {
    // 得到当前登录用户的部分信息（如id）
    console.log(req.auth)
    const sql = 'select * from t_user where id=?'
    db.query(sql, req.auth.id, (err, results) => {
        if (err) return res.send({ status: 1, message: err })
        if (results.length === 0) return res.send({ status: 1, message: '获取用户信息失败' })
        delete results[0].password
        return res.send({
            status: 0, 
            message: '获取用户基本信息成功',
            data: results[0]
        })
    })
}

// 设置头像
let updateAvatar = (req, res) => {
    const { id } = req.auth
    const { avatar } = req.body
    const sql = 'update t_user set headpic=? where id=?'
    db.query(sql, [avatar, id], (err, results) => {
        if (err) return res.send({ status: 1, message: err })
        if (results.affectedRows === 0) return res.send({ status: 1, message: '更新头像失败' })
        return res.send({ status: 0, message: '更新头像成功' })
    })
}

module.exports = {
    getUserInfo,
    updateAvatar
}