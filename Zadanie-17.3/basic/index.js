"use strict";
process.stdin.setEncoding("utf-8");
process.stdin.on("readable", function() {
  let input = process.stdin.read();
  let instruction = input.toString().trim();

  switch (instruction) {
    case "/exit":
      process.stdout.write("Quitting app!\n\n");
      process.exit();
      break;
    case "/sys-lang":
      process.stdout.write(process.env.LANG + "\n\n");
      break;
    case "/node-ver":
      process.stdout.write(process.version + "\n\n");
      break;
    default:
      process.stderr.write("Wrong instruction!\n\n");
      break;
  }
});
