'use strict';
let formatTime = require('../modules/formatTime');
module.exports = (totalSeconds, hours, minutes, seconds) => {
  let testedObject = formatTime(totalSeconds);
  console.log(testedObject);
  let testingValuesObject = {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
  console.log(testingValuesObject);
  if (
    testedObject[0] !== testingValuesObject[0] ||
    testedObject[1] !== testingValuesObject[1] ||
    testedObject[2] !== testingValuesObject[2]
  ) {
    process.stderr.write('Error: Time formatting for ' + totalSeconds + ' seconds - output invalid \n');
    process.exit();
  } else process.stdout.write('formatTime function test passed \n\n');
};
