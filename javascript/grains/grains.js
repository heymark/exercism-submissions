"use strict";

var Grains = function () {};

Grains.prototype.square = function (square) {

    return Math.pow(2, square - 1);
};

Grains.prototype.total = function () {

    var total = 0;

    for (var square = 1; square <= 64; square++) {
        total += this.square(square);
    }

    return total;
};

module.exports = Grains;