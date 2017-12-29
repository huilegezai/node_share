var express = require('express');
var router = express.Router();
var User = require("../models/user.js");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/vue', function(req, res, next) {
    res.send({
        datavue: "欢迎来到易宝支付",
        action: "我是辉仔"
    });
});

router.get('/duyuan', function(req, res, next) {
    res.render('duyuanDemo', { title: 'duyuan' });
});

router.get('/duyuandata', function(req, res, next) {
    res.send(
        [{
            name: 'duyuan',
            age: 27,
            sex: 'Male'
        },
        {
        name: '辉仔',
            age: 26,
            sex: 'Male'
        },
        {
        name: 'Tracy',
            age: 22,
            sex: 'Female'
        },
        {
        name: 'Chris',
            age: 36,
            sex: 'Male'
         }]
    );
});


/**
 * mongodb操作
 */

//插入数据
router.get('/insertData/:name/:age/:sex', function(req, res, next) {

    console.log("插入数据");
    var user = new User({
        name : req.params.name,                 //用户名
        age:   req.params.age,                  //年龄
        sex:   req.params.sex                   //性别
    });
    //插入数据
    user.save(function (err, res) {
        if (err) {
            console.log("插入数据失败:" + err);
        }
        else {
            console.log("插入数据成功:" + res);
        }
    });

    res.render('vue', { title: '查询数据成功' });
});

//查询数据
router.get('/getData', function(req, res, next) {

    //插入数据
    User.find({},function (err, user) {
        if (err) {
            console.log("查询数据失败:" + err);
        }
        else {
            console.log("查询数据成功:" + user);
        }

        console.log("huilegezai")
        res.send(user);
    });

});

//删除数据
router.get('/deleteData', function(req, res, next) {

    console.log("删除数据");

    var wherestr = {'name' : 'huizai'};

    User.remove(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
    res.render('vue', { title: '删除数据成功' });
});

module.exports = router;





