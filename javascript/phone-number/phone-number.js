"use strict";

var PhoneNumber = function (input) {

    return {

        number: function () {

            var processedInput = "1".concat(input.replace(/\D+/g, ''));

            return (([11, 12].indexOf(processedInput.length) !== -1) && processedInput.substr(-11).substr(0, 1) === "1") ? processedInput.substr(-10) : "0000000000";
        },
        areaCode: function () {

            return this.number().substr(0, 3);
        },
        toString: function () {

            return "(" + this.areaCode() + ") " + this.number().substr(3, 3) + "-" + this.number().substr(6);
        }
    };
};

module.exports = PhoneNumber;