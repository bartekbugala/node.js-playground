'use strict';
const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();
const fs = require('fs');
const StatMode = require('stat-mode');

// fs.stat('./cat1.jpeg', function(err, stats) {
//     const statMode = new StatMode(stats);
//     console.log(statMode.toString());
// });

const fileUrl = './text.txt';

fs.readFile(fileUrl, 'utf-8', function (err, data) {
    console.log(data);
    fs.writeFile(fileUrl, 'Text to be written in the text.txt file', function (err) {
        if (err) throw err;
        console.log('Zapisano');
        fs.readFile(fileUrl, 'utf-8', function (err, data) {
            console.log(data);   
        });
    });  
});

function readFile(fileUrl) {
    fs.readFile(fileUrl, 'utf-8', function (err, data) {
        console.log(data);   
    });
};

function writeFile(fileUrl) {
    fs.writeFile(fileUrl, 'Text to be written in the text.txt file', function (err) {
        if (err) throw err;
        console.log('Zapisano');
    });
};




