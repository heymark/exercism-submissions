"use strict";

var ConvertToRomanNumeral = function (number) {

    var romanNumeral = "",
        map = { 1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL", 50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M" },
        keys = Object.keys(map).sort(function (a, b) { return +b - +a; });
    
    function buildRomanNumeral(remainder, i) {
        var index = i || 0;
        if (remainder / keys[index] | 0) { romanNumeral += new Array((remainder / keys[index] | 0) + 1).join(map[keys[index]]); }
        return keys[index + 1] ? buildRomanNumeral(remainder % keys[index], index + 1) : romanNumeral;
    }

    return buildRomanNumeral(number);
};

module.exports = ConvertToRomanNumeral;