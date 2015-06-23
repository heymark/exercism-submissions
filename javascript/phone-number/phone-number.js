"use strict";

var PhoneNumber = function (input) {

    var phoneNumber = "0000000000",
        processedInput = "1".concat(input.replace(/\D+/g, '')),
        properInputLength = processedInput.length === 11 || processedInput.length === 12;

    if (properInputLength && processedInput.substr(-11).substr(0, 1) === "1") {
        phoneNumber = processedInput.substr(-10);
    }

    return {
        number: function () {
            return phoneNumber;
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