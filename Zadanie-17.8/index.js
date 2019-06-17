'use strict';
const EventEmitter = require('events');
const emitter = new EventEmitter();
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
   // fs.readFile(imageFile, undefined, function(err, data) {
   //   if (err) throw err;
      response.setHeader('Content-Type', 'image/jpeg');
      response.end( returnDataFromFile(imageFile), 'binary');
   // });
  }
});

server.listen(8080);

function returnDataFromFile(file) {
    let fileData;
    fs.readFile(file, undefined, function(err, data) {
        if (err) throw err;
        fileData = data;
        emitter.emit('dataReady');
});
emitter.on('dataReady', function() {
    return fileData;
})
}