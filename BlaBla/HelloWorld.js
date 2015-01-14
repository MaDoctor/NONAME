/**
 * Created by Key on 14.01.2015.
 */

var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.end('<b>Hello, world!</b>');
}).listen(process.env.PORT||666)