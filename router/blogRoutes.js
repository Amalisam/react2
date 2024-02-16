const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')



router.route('/getblogs').get(blogController.getBlogs)
router.route('/postblogs').post(blogController.postBlogs)





module.exports = router