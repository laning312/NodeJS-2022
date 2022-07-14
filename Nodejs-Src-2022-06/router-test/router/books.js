const express = require('express')

const router = express.Router()   // 1. 获取路由对象

// 2. 将各个路由挂到router对象上
let bookData = [
    {
        no: 11, name: "《javascript权威指南》", author: "David Flanagan", price:
            60
    },
    {
        no: 32, name: "《javascript高级程序设计》", author: "Nicholas C.Zakas",
        price: 90
    },
    {
        no: 44, name: "《三体》", author: "刘慈欣", price: 110
    },
    {
        no: 65, name: "《人类简史》", author: "尤瓦尔·赫拉利", price: 60
    },
    {
        no: 19, name: "《未来简史》", author: "尤瓦尔·赫拉利", price: 68
    },
    {
        no: 46, name: "《超新星纪元》", author: "刘慈欣", price: 80
    }
]

// 接口一
router.get('/', (req, res) => {
    res.send('<h2>hello, everyone!!</h2>')
})


// 接口二  + 接口三
router.get('/books', (req, res) => {
    let { no } = req.query
    if (no === undefined) {  // 说明没有no参数
        res.send({
            code: 206,
            data: bookData
        })
    } else {
        let [result] = bookData.filter(e => e.no == no)
        // console.log(result)
        res.send({
            code: 209,
            data: result
        })
    }
})

// 接口四
router.get('/books/:no', (req, res) => {
    let { no } = req.params
    let [result] = bookData.filter(e => e.no == no)
    res.send({
        code: 209,
        data: result
    })
})


// 3. 将路由对象导出
module.exports = router