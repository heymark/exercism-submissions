"use strict";

var Robot = function () {

    this.name = this.generateName();
};

Robot.prototype.generateName = function () {

    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers = "000" + Math.floor(Math.random() * 1000).toString(),
        newName = function () {
            var str = "";
            str += letters.charAt(Math.floor(Math.random() * letters.length));
            str += letters.charAt(Math.floor(Math.random() * letters.length));
            str += numbers.slice(-3);
            return str;
        };

    return newName();
};

Robot.prototype.reset = function () {

    this.name = this.generateName();
};

module.exports = Robot;