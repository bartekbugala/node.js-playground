'use strict'

const helpMsg = () => {
  const help = require('./help.json')
  help.toString().trim();
  return help.join('\n')
}

module.exports = helpMsg();

