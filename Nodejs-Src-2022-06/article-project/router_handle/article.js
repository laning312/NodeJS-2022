const db = require("../db/db")

// 发布文章
let addArticle = (req, res) => {
    // console.log(req.file)
    // console.log(req.body)
    // const {extname} = req.body
    const articleInfo = {
        ...req.body,
        pub_date: new Date().toLocaleString(),
        author_id: req.auth.id,
        is_delete: 0,
        cover_img: '/uploads/images/' + req.file.filename
    }
    const sql = 'insert into t_article set ?'
    db.query(sql, articleInfo, (err, results) => {
        if (err) return res.send({ status: 1, message: err })
        if (results.affectedRows === 0) return res.send({ status: 1, message: '发布文章失败' })
        return res.send({status: 0, message: '发布成功'})
    })
}

// 文章列表
let getArticleLlist = (req, res) => {
    console.log(req.query)
    const {pagenum, pagesize, cate_id, state} = req.query
    const startIndex = (pagenum - 1) * pagesize
   
    let sql = `select ta.id as Id,title,pub_date, state, catename as cate_name 
                from t_article ta , t_article_category tac 
                where ta.cate_id = tac.id and author_id=? `

    // let sql = 'select * from t_article where author_id=? '

    if(cate_id) sql += `and cate_id=${cate_id} `
    if(state) sql += `and state='${state}' `

    sql += 'limit ?,?'

    db.query(sql, [req.auth.id,startIndex, +pagesize], (err, results) => {
        if (err) return res.send({ status: 1, message: err })
        return res.send({
            status: 0,
            message: '获取文章分类列表成功！',
            data: results
        })
    })
}


module.exports = {
    addArticle,
    getArticleLlist
}