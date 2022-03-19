const express = require('express');
const boardroute = require('./board/board')
const router = express.Router();

router.use('/board', boardroute)
router.route('/')
    .delete(function(req, res, next){
        res.send("hello")
    })
//router.use('/user')

module.exports = router;