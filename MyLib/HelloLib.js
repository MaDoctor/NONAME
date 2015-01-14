/**
 * Created by Key on 14.01.2015.
 */
var http=require('http');
module.exports = require("MyLib");
var mylib = require('MyLib')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(mylib.generate());
}).listen(process.env.PORT||6666);
console.log(mylib.generate());

