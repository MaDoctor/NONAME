/**
 * Created by Key on 14.01.2015.
 */
var connect=require('connect');
var http=require('http');

http.createServer(connect()
    .use(connect.favicon())
    .use(connect.logger())
    .use(function(req,res)
        {
            res.end('Hello World\n');
        })).listen(666);