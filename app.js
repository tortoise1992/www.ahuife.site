/**
 * Created by Administrator on 2017/4/28.
 */
var express=require('express');
var app=express();
var ejs = require('ejs');
// // 定义模板引擎，使用swig.renderFile方法解析后缀为html的文件
// var swig=require('swig');
// app.engine('html',swig.renderFile);
// // 设置模板存放目录
// app.set('views','./views');
// app.set('view engine','html');
// // 开发禁止模板缓存
// swig.setDefaults({cache:false});

app.engine('html',ejs.__express);
app.set('views','./views');
app.set('view engine','html');
// 设置静态文件目录
app.use('/',express.static(__dirname+'/public'));

// 配置不同的路由，导入路由文件
var indexRoute=require('./routes/index');
var admins=require('./routes/admin');
var movies=require('./routes/movie')
app.use('/',indexRoute);
app.use('/',admins);
app.use('/',movies);

// 启动服务器，监听3000端口
app.listen(3000,function () {
    console.log('server is runing')
})