'use strict';
const http = require('http');
const server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        response.write('<h1>Hello - response</h1>');
        response.end();    
    }  else {
        response.statusCode = 404;
        response.write('<h1>404: Wrong Path!</h1>');
        response.end
    }

});

server.listen(8080);
