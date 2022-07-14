const db = require('./db.js')

let sno = 'S1023'
let sname = '刘阳阳'
let sadress = '北京'

const sql = 'update t_student_info set sname=?,sadress=? where sno=?'


db.query(sql, [sname,sadress,sname], (err, results) => {
    if(err) return console.log(err)
    console.log(results)
})