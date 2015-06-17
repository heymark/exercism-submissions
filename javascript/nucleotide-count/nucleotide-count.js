"use strict";

var dna = function (input) {

    if (input && input.match(/[^atcg]/i)) {

        throw new Error("Invalid input. DNA string should contain only the letters A, T, C and G.");
    }

    return {

        dnaString: input,
        count: function (searchString) {

            return this.dnaString ? (this.dnaString.match(new RegExp(searchString, 'gi')) || []).length : 0;
        },
        histogram: function () {

            return {

                A: this.count('A'),
                T: this.count('T'),
                C: this.count('C'),
                G: this.count('G')
            };
        }
    };
};

module.exports = dna;