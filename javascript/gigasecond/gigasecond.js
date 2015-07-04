"use strict";

var Gigasecond = function (date) {

    // Values below are in milliseconds 

    var exactTimeOfGigasecondBirthday = date.getTime() + 1000000000000;
    var midnightBeforeGigasecondBirthday = exactTimeOfGigasecondBirthday - (exactTimeOfGigasecondBirthday % 86400000);
    var correctionForCurrentTimezone = (date.getTimezoneOffset() * 60000) + 3600000;

    this.date = function () {
        return new Date(midnightBeforeGigasecondBirthday + correctionForCurrentTimezone);
    };
};

module.exports = Gigasecond;