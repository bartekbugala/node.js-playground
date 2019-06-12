'use strict'

module.exports = (timeInSeconds) => {
    let time = timeInSeconds;
    let formatedTime = {};
    formatedTime.hours = Math.floor(time / 3600);
    formatedTime.minutes = Math.floor((time % 3600) / 60);
    formatedTime.seconds = Math.floor((time % 3600) % 60);
    
    return displayTime(formatedTime.hours, formatedTime.minutes, formatedTime.seconds);
}

function displayTime(hours,minutes,seconds) {
    let hrsString = '';
    let minString = '';
    let secString = '';
    if (hours > 0) {
        hrsString = hours + ' hrs. ';
    }
    if (minutes > 0 || hours > 0) {
        minString = minutes + ' min. ';
    }
    secString = seconds + ' sec. ';

    return hrsString + minString + secString;
}
