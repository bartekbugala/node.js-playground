'use strict'
const http = require('http');

const server = http.createServer();
server.on('request', function (request, response) {
    response.write('Hello - response');
    response.end();
});

server.listen(9000);