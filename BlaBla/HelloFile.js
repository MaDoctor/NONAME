/**
 * Created by Key on 14.01.2015.
 */

var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    fs.readFile('HelloWorld.js','utf8',function(err,data){
        res.writeHead(200,{'Content-type':'text/html'});
        if (err)
            res.write('BED JOB');
        else
            res.write(data);
    res.end();
    });
}).listen(process.env.PORT||666)