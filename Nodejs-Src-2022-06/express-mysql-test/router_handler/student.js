const db = require('../db/db.js')

function getStudentList(req, res) {
    const sql = 'select * from t_student_info'
    db.query(sql, (err, results) => {
        if(err) return res.send({code: 506, error: err})
        res.send({
            code: 206,
            data: results
        })
    })
}

module.exports = {
    getStudentList
}