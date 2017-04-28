/**
 * Created by Administrator on 2017/4/28.
 */
var express=require('express');
var router=express.Router();
router.get('/movie/:id',function (req,res,next) {
    res.render('pages/detail')
});

module.exports=router;