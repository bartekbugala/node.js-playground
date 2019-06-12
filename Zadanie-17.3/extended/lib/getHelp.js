'use strict';

const help = require('./help.json')
help.toString().trim();

const helpMsg = () => {
  return help.join('\n')
}

module.exports = helpMsg();