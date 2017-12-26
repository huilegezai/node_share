/**
 * Created by yp-tc-4816 on 2017/12/26.
 */

var fs  = require('fs');

fs.readFile('./README.md',function (err,file) {
    console.log("读取文件完成");
});

console.log("发起读取文件");
//我们会发现：
//先打印"发起读取文件"，后打印"读取文件完成"