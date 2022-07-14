const express = require('express')

const router = express.Router()

const path = require('path')

const multer = require('multer')

const { v4: uuidv4 } = require('uuid')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, '/uploads/images')
        cb(null, path.join(__dirname, '../uploads/images'))
    },
    filename: function (req, file, cb) {
        // 生成随机名称
        const {extname} = req.body
        delete req.body.extname

        const tmp = uuidv4().replaceAll('-', '')
        cb(null, tmp + extname)
    }
})

const upload = multer({ storage })

const articleHandle = require('../router_handle/article')

// 发布文章路由
router.post('/add', upload.single('cover_img'), articleHandle.addArticle)

// 文章列表路由
router.get('/list', articleHandle.getArticleLlist)

module.exports = router