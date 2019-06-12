"use strict";

const help = require("./help.json");

const helpMsg = () => {
  return help.join("\n");
};

module.exports = helpMsg();
