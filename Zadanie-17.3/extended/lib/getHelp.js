'use strict'

module.exports = () => {
  const help = require('./help.json')
  return help.join('\n')
}