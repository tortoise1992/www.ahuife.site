/**
 * Created by Administrator on 2017/4/28.
 */
var express=require('express');
var router=express.Router();
router.get('/admin/list',function (req,res,next) {
    res.render('pages/admin')
});
router.get('/admin/movie',function (req,res,next) {
    res.render('pages/list')
});

module.exports=router;