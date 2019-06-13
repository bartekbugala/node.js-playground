'use strict';
let formatTime = require('../modules/formatTime');
module.exports = (totalSeconds, hours, minutes, seconds) => {
  console.log('Testing time formatting for: '.green + `${totalSeconds}`.yellow + ' seconds.'.green);
  let testedObject = formatTime(totalSeconds);
  console.log(testedObject);
  let testingValuesObject = {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
  console.log(testingValuesObject);
  if (
    testedObject.hours === testingValuesObject.hours &&
    testedObject.minutes === testingValuesObject.minutes &&
    testedObject.seconds === testingValuesObject.seconds
  ) {
    process.stderr.write('formatTime function test passed \n\n'.green);
    return;
  } else process.stdout.write(`Error: Time formatting for ${totalSeconds} seconds - output invalid \n`.red);
  process.exit();
};
