/**
 * Created by Key on 14.01.2015.
 */
var connect=require('connect');
var http=require('http');

var app = connect()
    .use(connect.favicon())
    .use(connect.logger())
    .use(function(req,res){
        res.end('Hello World\n');
    });

    http.createServer(app).listen(666);