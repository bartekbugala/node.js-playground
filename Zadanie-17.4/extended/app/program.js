"use strict";
const osInfo = require("../modules/osInfo");
const helpText = require("../lib/getHelp");
const test = require("../test/test");
process.stdin.setEncoding("utf-8");
process.stdin.on("readable", function() {
  let input;
  let instruction;
  do {
    input = process.stdin.read();
    if (input !== null) {
      instruction = input.toString().trim();
      switch (instruction) {
        case "/exit":
          process.stdout.write("Quitting app!\n\n");
          process.exit();
          break;
        case "/sysLang":
          process.stdout.write(process.env.LANG + "\n\n");
          break;
        case "/nodeVer":
          process.stdout.write(process.version + "\n\n");
          break;
        case "/osInfo":
          osInfo.print();
          break;
        case "/help":
        case "help":
          process.stdout.write(helpText + "\n\n");
          break;
        default:
          process.stderr.write("Wrong instruction!\n\n");
          break;
      }
    }
  } while (input !== null);
});
