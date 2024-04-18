const Router = require('express')
const { getPostsByUser } = require('../controller/post.controller')
const router = new Router()

const postController = require('../controller/post.controllepost')

router.post('/post' , postController.createPost)
router.get('/post' , postController.getPostsByUsers)
router.get('/post:id' , postController.getPostByUser)
router.put('/post:id' , postrController.updatePostsByUser)
router.delete('/post:id' , postController.deletePostByUser)

module.exports = router