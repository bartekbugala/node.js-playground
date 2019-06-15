'use strict';
const fs = require('fs');

const startDir = './startFolder/';
const endDir = './endFolder/';

fs.readdir(startDir, function (err, files) {
    if (err) throw err;
    Object.keys(files).forEach(key => {
        fs.readFile(startDir + files[key], 'utf-8', function (err, data) {
            if (err) throw err;
            fs.writeFile(endDir + files[key], data, function (err) {
                if (err) throw err;
            })
        });
    });
});