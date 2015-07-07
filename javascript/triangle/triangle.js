"use strict";

var Triangle = function () {

    var sides = [].slice.apply(arguments).map(function (value) {
        return value > 0 ? value : 0;
    }).sort(function (a, b) {
        return a > b;
    });

    return {
        kind: function () {
            if (sides[0] === 0 || sides.length !== 3 || sides[2] > sides[0] + sides[1]) {
                throw new Error("Invalid input.");
            }
            if (sides[0] === sides[2]) { return "equilateral"; } 
            else if (sides[1] === sides[2]) { return "isosceles"; } 
            else { return "scalene"; }
        }
    };
};

module.exports = Triangle;