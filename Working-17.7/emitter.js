'use strict';
const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();
const fs = require('fs');
const StatMode = require('stat-mode');
const colors = require('colors');

// fs.stat('./cat1.jpeg', function(err, stats) {
//     const statMode = new StatMode(stats);
//     console.log(statMode.toString());
// });

const fileUrl = './text.txt';

emitter.on('read2', function() {
  appendToFile(fileUrl, function() {
    readFile(fileUrl);
  });
});

emitter.on('written1', function() {
  readFile(fileUrl, function() {
    emitter.emit('read2');
  });
});

emitter.on('read1', function() {
    appendToFile(fileUrl);
  // Aby kolejność była zachowana.
  setTimeout(function() {
    emitter.emit('written1');
  }, 50);
});

readFile(fileUrl, function() {
  emitter.emit('read1');
});

/*fs.readFile(fileUrl, 'utf-8', function (err, data) {
    console.log(data);
    emitter.emit('read1');
});*/

function readFile(fileUrl, callback) {
  fs.readFile(fileUrl, 'utf-8', function(err, data) {
    console.log(data.yellow);
    if (typeof callback === 'function') {
      callback();
    }
  });
}

function writeFile(fileUrl) {
    // writeFile zamieniono na appendToFile
  fs.writeFile(fileUrl, '\n Nadpisana Linijka!', function(err) {
    if (err) throw err;
    console.log('Zapisano'.magenta);
  });
}

function appendToFile(fileUrl, callback) {
  fs.appendFile(fileUrl, '\n Dopisana Linijka!', function(err, data) {
    console.log('Nadpisano'.green);
    if (typeof callback === 'function') {
      callback();
    }
  });
}
