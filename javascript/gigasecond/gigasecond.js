"use strict";

var Gigasecond = function (birthDate) {

    var exactTimeOfGigasecondBirthday = new Date(birthDate.getTime() + Math.pow(10, 12));
    var midnightBeforeGigasecondBirthday = new Date(exactTimeOfGigasecondBirthday.getFullYear(), 
                                                    exactTimeOfGigasecondBirthday.getMonth(), 
                                                    exactTimeOfGigasecondBirthday.getDate());

    this.date = function () {
        return midnightBeforeGigasecondBirthday;
    };
};

module.exports = Gigasecond;