const router = require('express').Router();
const {
    getAllPost,
    getSinglePost,
    createNewPost,
    updatePost,
    deletePost
} = require('./postController');

//user router-start
//example.com/post - GET
router.get('/', getAllPost);

router.get('/:postID', getSinglePost);

//example.com/post - POST
router.post('/', createNewPost);

router.put('/:postID', updatePost);

router.delete('/:postID', deletePost);
//user router-end
//exports-module
module.exports = router;