'use strict';

const helpText = require('./lib/getHelp');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {

  let input;
  let instruction;
  do {
    input = process.stdin.read();
    if (input !== null) {
      instruction = input.toString().trim();
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
        case '/help':
        case 'help':
          process.stdout.write(helpText + '\n\n');
          break;
        default:
          process.stderr.write('Wrong instruction!\n\n');
          break;
      }
    }
  } while (input !== null);
});