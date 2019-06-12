"use strict";
let formatTime = require("../modules/formatTime");

let testSeconds = (value1, output1, value2, output2) => {
  if (formatTime(value1) !== output1) {
    process.stderr.write("Error: formatTime function for value: " + value1 + " output invalid \n");
    process.exit();
  }
  if (formatTime(value2) !== output2) {
    process.stderr.write("Error: formatTime function for value: " + value2 + " output invalid \n");
    process.exit();
  } else process.stdout.write("formatTime function - tests passed \n\n");
};

exports.test = testSeconds(3700, "1 hrs. 1 min. 40 sec.", 125, "2 min. 5 sec.");