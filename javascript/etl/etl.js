"use strict";

var transform = function (lettersByPointValue) {

    var pointValuesByLetter = {};

    function assignPointValuesToLetters(pointValue) {

        var currentLetters = lettersByPointValue[pointValue];

        for (var i = 0; i < currentLetters.length; i++) {

            var currentLetter = currentLetters[i];

            pointValuesByLetter[currentLetter.toLowerCase()] = Number(pointValue);
        }
    }

    Object.keys(lettersByPointValue).forEach(assignPointValuesToLetters);

    return pointValuesByLetter;
};

module.exports = transform;