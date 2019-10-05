'use strict';
const http = require('http');
const fs = require('fs');

const indexFile = './index.html';
const imageFile = './error.jpg';
const server = http.createServer();

server.on('request', function(request, response) {
  if (request.method === 'GET' && request.url === '/s') {
    fs.readFile(indexFile, 'utf-8', function(err, data) {
      if (err) throw err;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(data);
      response.end();
    });
  } else {
    fs.readFile(imageFile, function(err, data) {
      if (err) throw err;
      response.statusCode = 404;
      response.setHeader('Content-Type', 'image/jpeg');  
      response.end(data, 'binary');
    });
  }
  
});

server.listen(8080);