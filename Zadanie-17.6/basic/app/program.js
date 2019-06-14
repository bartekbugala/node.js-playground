'use strict';
const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

const osInfo = require('../modules/osInfo');

emitter.on('beforeCommand', function(instruction) {
  console.log('You wrote: ' + instruction + ' trying ot run command.');
});

emitter.on('afterCommand', function() {
  console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
  let input = process.stdin.read();
  if (input !== null) {
    let instruction = input.toString().trim();
    emitter.emit('beforeCommand', instruction);
    switch (instruction) {
      case '/exit':
        process.stdout.write('Quitting app!\n\n');
        process.exit();
        break;
      case '/sys-lang':
        process.stdout.write(process.env.LANG + '\n\n');
        break;
      case '/node-ver':
        process.stdout.write(process.version + '\n\n');
        break;
      case '/getOsInfo':
        osInfo.print();
        break;
      default:
        process.stderr.write('Wrong instruction!\n\n');
        break;
    }
    emitter.emit('afterCommand');
  }
});
