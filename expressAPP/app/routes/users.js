var express = require('express');
var router = express.Router();

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
module.exports = router;





