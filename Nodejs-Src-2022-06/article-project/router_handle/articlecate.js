
const db = require('../db/db')
let getCateList = (req, res) => {
    const sql = 'select id as Id, catename as name, alias, is_delete from t_article_category'

    db.query(sql, (err, results) => {
        if (err) return res.send({ status: 1, message: err })
        res.send({
            status: 0,
            message: '获取文章分类信息成功！',
            data: results
        })
        // if (results.length === 0) return res.send({ status: 1, message: '获取文章分类信息失败' })
    })
}

module.exports = {
    getCateList
}