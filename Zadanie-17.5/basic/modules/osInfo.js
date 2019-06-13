'use strict';
const os = require('os');
const colors = require('colors');
let formatTime = require('./formatTime');

function getOsInfo() {
  let type = os.type();
  let release = os.release();
  let cpu = os.cpus()[0].model;
  let userInfo = os.userInfo();
  let uptime = os.uptime();
  if (type === 'Darwin') {
    type = 'OSX';
  } else if (type === 'Windows_NT') {
    type = 'Windows';
  }
  console.log('System: '.green, type);
  console.log('Release: '.yellow, release);
  console.log('CPU model:'.blue, cpu);
  console.log('User name:'.white, userInfo.username);
  console.log('Home dir:'.cyan, userInfo.homedir);
  console.log('Uptime: ~'.magenta, formatTime(uptime));
  console.log('User name: '.red, userInfo.username);
  console.log('Home dir: '.gray, userInfo.homedir);
}

exports.print = getOsInfo;
