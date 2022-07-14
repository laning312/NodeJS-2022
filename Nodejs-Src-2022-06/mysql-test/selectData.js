const db = require('./db.js')

// select01()
// select02()
// select03()
select04()

function select01() {
    let x = '李'
    const sql = 'select * from t_student_info where sname like ?'
    db.query(sql, `${x}%`, (err, results) => {
        if(err) return console.log(err)
        console.log(results)
    })

}

function select02() {
    let x = '郑州'
    const sql = 'select * from t_student_info where sadress like ?'
    db.query(sql, `%${x}%`, (err, results) => {
        if(err) return console.log(err)
        console.log(results)
    })
}

function select03() {
    // 第2页数据（每页5条）
    let page = 2
    let pageSize = 3
    let startIndex = (page - 1) * pageSize
    const sql = 'select * from t_student_info limit ?,?'
    db.query(sql, [startIndex, pageSize], (err, results) => {
        if(err) return console.log(err)
        console.log(results)
    })
}

function select04() {
    // 符合条件的第几页
    let x = '湖北'
    let page = 2
    let pageSize = 2
    let startIndex = (page - 1) * pageSize
    const sql = 'select * from t_student_info where sadress like ? limit ?,?'
    db.query(sql, [`%${x}%`, startIndex, pageSize], (err, results) => {
        if(err) return console.log(err)
        console.log(results)
    })
}