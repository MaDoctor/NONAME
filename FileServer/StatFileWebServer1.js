/**
 * Created by Key on 14.01.2015.
 */
var http=require('http'),
    path=require('path'),
    fs=require('fs'),
    mime=require('mime'),
    base='f:/WebstormProjects/NONAME/FileServer/html/index.html';

http.createServer(function(req,res){
    pathname=base+req.url;
    console.log(pathname);

    fs.stat(pathname,function(err,stats){
        "use strict";
        if(err){
            res.writeHead(404);
            res.write('Bed request 404\n');
            res.end();
        }else if(stats.isFile()){
            var type = mime.lookup(pathname);
            console.log(type);
            res.setHeader('Content-Type',type);

            res.statusCode=200;

            var file=fs.createReadStream(pathname);
            file.on("open",function(){
                file.pipe(res);
            })
            file.on("error", function (err) {
                console.log(err);
            })
        }else{
            res.writeHead(403);
            res.write('Directory access is forbidden');
            res.end();
        }
    })
}).listen(6666);

console.log('NOMORE');