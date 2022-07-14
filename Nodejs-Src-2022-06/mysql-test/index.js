const mysql = require('mysql')

// 创建连接池
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'students'
})

// selectData()
// insertDdata()

const stuData = {   // 从客户端过来的数据
    sno: 'S2588',
    sname: '李娟',
    sphone: '45673344345',
    sadress: '上海',
    sdesc: ''
}
insertDdata2(stuData)



const updateStuData = {
    sno: 'S2345',
    sphone: '88888888888'
}

// updateData(updateStuData)

function updateData({sno, sphone}) {
    const sql = 'update t_student_info set sphone=? where sno=?'
    pool.query(sql, [sphone, sno], (err, results) => {
        if(err) return console.log(err)
        console.log(results)
    })
}




function insertDdata2({sno, sname, sphone, sadress, sdesc}) {
    // const sql = "insert into t_student_info values (null, 'S1023', '刘阳', '12345678974', '河南郑州', '')"
    const sql = 'insert into t_student_info values (null, ?, ?, ?, ?, ?)'
    pool.query(sql, [sno, sname, sphone, sadress, sdesc], (err, results) => {
        if(err) return console.log(err)
        console.log(results)
    })
}

function insertDdata() {
    const sql = "insert into t_student_info values (null, 'S1023', '刘阳', '12345678974', '河南郑州', '')"
    pool.query(sql, (err, results) => {
        if(err) return console.log(err)
        console.log(results)
    })
}

function selectData() {
    // 查询t_student_info表的所有数据
    const sql = 'select * from t_student_info'

    // 执行Sql
    pool.query(sql, (err, results) => {
        if (!err) {
            console.log(results)
        } else {
            console.log(err)
        }
    })
}

