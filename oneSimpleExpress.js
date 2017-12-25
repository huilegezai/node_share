/**
 * Created by yp-tc-4816 on 2017/12/25.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World! 易宝支付');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

//打开浏览器输入 http://localhost:3000/ 查看效果，所以的URL都会返回"Hello World!易宝支付"