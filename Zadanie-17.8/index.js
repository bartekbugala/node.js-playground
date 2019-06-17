'use strict';
const path = require('path');
const http = require('http');
const fs = require('fs');


const indexFile = './index.html';
const imageFile = './error.jpg';
const server = http.createServer();

server.on('request', function (request, response) {
  
    if (request.method === 'GET' && request.url === '/') {
        responseWithFile(indexFile, request, response);    
    } else {
        responseWithFile(imageFile, request, response);
    }
});

server.listen(8080);

function responseWithFile(file, request, response) {  
    fs.readFile(file, function (err, data) {
        if (err) throw err;
        let ctype;    
        if (path.extname === '.html') {         
            ctype = 'text/html; charset=utf-8';
            response.setHeader('Content-Type', ctype);
            response.write(data);
            response.end();      
        }
        else {    
            ctype = 'Content-Type', 'image/jpeg'
            response.setHeader('Content-Type', ctype);
            response.end(data, 'binary');         
        }
    });
}