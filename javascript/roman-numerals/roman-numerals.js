"use strict";

var ConvertToRomanNumeral = function (number) {

    var romanNumeralString = "",
        MAP = { 1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL", 50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M" };
        
    // Since property keys are returned in numerical order as of ES2015, create a sorted array to loop through MAP in reverse
    var keyArray = Object.keys(MAP).reverse();
    
    // Build the Roman numeral string recursively by iterating over each place value, from largest to smallest
    function buildromanNumeralString(remainder, keyArrayIndex) {
        
        var numberOfTimesToRepeatRomanNumeralForCurrentPlaceValue = Math.floor(remainder / keyArray[keyArrayIndex]),
            romanNumeralStringForCurrentPlaceValue = new Array(numberOfTimesToRepeatRomanNumeralForCurrentPlaceValue + 1).join(MAP[keyArray[keyArrayIndex]]); // e.g. "XX" for the tens position in 23, or "III" for the ones position
        
        romanNumeralString += romanNumeralStringForCurrentPlaceValue;
        
        // If we haven't processed each place value, call this function again with the unprocessed remainder
        return keyArray[keyArrayIndex + 1] ? buildromanNumeralString(remainder % keyArray[keyArrayIndex], keyArrayIndex + 1) : romanNumeralString;
    }

    return buildromanNumeralString(number, 0);
};

module.exports = ConvertToRomanNumeral;