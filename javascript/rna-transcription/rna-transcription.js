"use strict";

var toRna = function (dnaString) {

    if (!dnaString || dnaString.match(/[^atcg]/i)) {

        throw new Error("Invalid input. DNA string should contain only the letters A, T, C and G.");
    }

    var mapDnaToRna = {

        A: "U",
        T: "A",
        C: "G",
        G: "C"
    };

    var rnaString = dnaString.replace(/a|t|c|g/gi, function (match) {

        return mapDnaToRna[match.toUpperCase()];
    });

    return rnaString;
};

module.exports = toRna;