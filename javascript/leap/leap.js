"use strict";

var isLeapYear = function (year) {

    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

module.exports = isLeapYear;