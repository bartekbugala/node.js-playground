'use strict'
const help = require('./help.json')

const helpMsg = () => {
  help.toString().trim();
  return help.join('\n')
}

module.exports = helpMsg();