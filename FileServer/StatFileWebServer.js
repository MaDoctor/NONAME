/**
 * Created by Key on 14.01.2015.
 */
var http=require('http'),
    path=require('path'),
    fs=require('fs'),
    base='f:/WebstormProjects/NONAME/FileServer/html/index.html';

http.createServer(function(req,res){
    pathname=base+req.url;
    console.log(pathname);

    path.exists(pathname,function(exists){
        if(!exists){
            res.writeHead(404);
            res.write('Bed request 404\n');
            res.end();
        }else{
            res.setHeader('Content-Type','text/html');

            res.statusCode=200;

            var file = fs.createReadStream(pathname);
            file.on("open",function(){
                file.pipe(res);
            });
            file.on("error",function(err){
                console.log(err);
            });
        }
    });
}).listen(666);

console.log('NOMORE');