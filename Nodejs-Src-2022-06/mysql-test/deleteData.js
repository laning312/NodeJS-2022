const db = require('./db.js')

let sno = 'S2345'
const sql = 'delete from t_student_info where sno=?'


db.query(sql, sno, (err, results) => {
    if(err) return console.log(err)
    console.log(results)
})