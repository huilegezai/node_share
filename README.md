# nodejs分享
 ## nodejs简介
 **nodejs是javascript的运行环境，基于v8内核**
 1. 09年Ryan Dahl基于google的V8创建了nodejs，从此javascript可以编写后端程序
 2. 这两年nodejs发展的很快，现在稳定版的nodejs是v8.9.3
  ![image](https://github.com/huilegezai/node_share/blob/master/images/WechatIMG44.jpeg)
  ![image](https://github.com/huilegezai/node_share/blob/master/images/WechatIMG45.jpeg)
 3. **参考**
 - https://nodejs.org/en/
 - https://github.com/nodejs/Release#release-schedule
 
 ## 特点
 - 异步I/O
 - 事件与回调函数
 - 单线程
 - 跨平台（libuv）
 1. 异步以及单线程
  node其实不是一种语言，是javascript语言的运行环境，所以javascript前端浏览器的一些API都会有，不过是把javascript运行在服务器端。  
  nodejs的API是异步的，并且是单线程的，单线程可以避免多线程的开销，以及上下文切换时的开销，不会涉及同步状态的问题。
  - 前端涉及异步的地方，典型的是Ajax调用。
  - node异步读取文件
   ```
   var fs  = require('fs');
   
   fs.readFile('./README.md',function (err,file) {
       console.log("读取文件完成");
   });
   
   console.log("发起读取文件");
   ```
   
node readFile.js 先打印"发起读取文件"，后打印"读取文件完成"，执行步骤
    ![image](https://github.com/huilegezai/node_share/blob/master/images/WechatIMG46.jpeg)
    
虽然异步操作性能挺好，但是有时候会出现多嵌套的情况，代码难看，且难于维护。如图，
 ```
 fs.readFile('./README.md',function (err,file) {
        fs.readFile('./README.md',function (err,file) {
               fs.readFile('./README.md',function (err,file) {
                      fs.readFile('./README.md',function (err,file) {
                             console.log("读取文件完成");
                         });
                      console.log("读取文件完成");
                  });
               console.log("读取文件完成");
           });
        console.log("读取文件完成");
    });
 ```
[async](https://github.com/caolan/async)模块可以解决多层嵌套的问题  
**可以参考这个教程**
[https://github.com/huilegezai/async_demo](https://github.com/huilegezai/async_demo)

目前项目中用到的如：
       ![image](https://github.com/huilegezai/node_share/blob/master/images/WechatIMG47.jpeg)


