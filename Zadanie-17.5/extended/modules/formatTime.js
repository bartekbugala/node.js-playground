'use strict';
const colors = require('colors');

function timeFromSeconds(timeInSeconds) {
  let time = timeInSeconds;
  let formatedTime = {};
  formatedTime.hours = Math.floor(time / 3600);
  formatedTime.minutes = Math.floor((time % 3600) / 60);
  formatedTime.seconds = Math.floor((time % 3600) % 60);
  exports.formatedTime = formatedTime;
  return formatedTime;
}

module.exports = calculateTime;

function displayTime(givenTime) {
  let formatedTime = timeFromSeconds(givenTime);
  return timeToString(formatedTime.hours, formatedTime.minutes, formatedTime.seconds);
}

module.exports.display = displayTime;

function timeToString(hours, minutes, seconds) {
  let hrsString = '';
  let minString = '';
  let secString = '';
  if (hours > 0) {
    hrsString = hours + ' hrs. ';
  }
  if (minutes > 0 || hours > 0) {
    minString = minutes + ' min. ';
  }
  secString = seconds + ' sec.';

  return hrsString + minString + secString;
}
