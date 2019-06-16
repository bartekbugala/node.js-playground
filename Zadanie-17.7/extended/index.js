'use strict';
const EventEmitter = require('events');
const emitter = new EventEmitter();

const fs = require('fs');

const startDir = './startFolder/';
const endDir = './endFolder/';

createDirIfNone(endDir, function(err) {
  if (err) {
    console.log('Error - Something wrong with the script!');
    console.log(err);
  }
  else {
    emitter.emit('endDirExist');
  }
});

emitter.on('endDirExist', function() {
  fs.readdir(startDir, function(err, files) {
    if (err) throw err;
    Object.keys(files).forEach(key => {
      fs.readFile(startDir + files[key], 'utf-8', function(err, data) {
        if (err) throw err;
        fs.writeFile(endDir + files[key], data, function(err) {
          if (err) throw err;
        });
      });
    });
  });
})

function createDirIfNone(dirPath, callback) {
  fs.stat(dirPath, function(err, stats) {
    if (err && err.code === 'ENOENT') {
      fs.mkdir(dirPath, callback);
    } else {
      callback(err);
    }
  });
}
