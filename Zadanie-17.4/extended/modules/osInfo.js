"use strict";
const os = require("os");
let formatTime = require("./formatTime");

function getOsInfo() {
  let type = os.type();
  if (type === "Darwin") {
    type = "OSX";
  } else if (type === "Windows_NT") {
    type = "Windows";
  }

  let uptime = os.uptime();
  let userInfo = os.userInfo();

  let osInfo = {
    System: type,
    Release: os.release,
    CPU: os.cpus()[0].model,
    "User name:": userInfo.username,
    "Home dir:": userInfo.homedir,
    "Uptime: ~": formatTime(uptime),
    "Home dir: ": userInfo.homedir
  };
  logFromObject(osInfo);
}

function logFromObject(obj) {
  Object.keys(obj).forEach(key => {
    let value = obj[key];
    console.log(key, value);
  });
  console.log("\n");
}

exports.print = getOsInfo;
