'use strict';
const os = require('os');
let formatTime = require('./formatTime');

function getOsInfo() {
    let type = os.type();
    let release = os.release();
    let cpu = os.cpus()[0].model;
    let userInfo = os.userInfo();
    let uptime = os.uptime();
    uptime = 125;
    if (type === 'Darwin') {
      type = 'OSX';
    } else if (type === 'Windows_NT') {
      type = 'Windows';
    }
    console.log('System: ', type);
    console.log('Release: ', release);
    console.log('CPU model:', cpu);
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
    console.log('Uptime: ~', formatTime(uptime));
    console.log('User name: ', userInfo.username);
    console.log('Home dir: ', userInfo.homedir);
  }

  exports.print = getOsInfo;