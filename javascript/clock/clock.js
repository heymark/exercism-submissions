"use strict";

var Clock = function (currentHour, currentMinute) {
    this.hours = currentHour || 0;
    this.minutes = currentMinute || 0;
};

Clock.prototype.equals = function (clockToCompare) {
    return this.hours === clockToCompare.hours && this.minutes === clockToCompare.minutes;
};

Clock.prototype.minus = function (minutesToSubtract) {
    this.plus(-minutesToSubtract);
    return this;
};

Clock.prototype.plus = function (minutesToAdd) {
    var minutesPastMidnight = 1440 + (this.hours * 60 + this.minutes + minutesToAdd) % 1440;
    this.hours = (minutesPastMidnight / 60 | 0) % 24;
    this.minutes = minutesPastMidnight % 60;
    return this;
};

Clock.prototype.toString = function () {
    return ("00" + this.hours.toString()).substr(-2) + ":" + ("00" + this.minutes.toString()).substr(-2);
};

module.exports = {
    at: function (currentHour, currentMinute) {
        return new Clock(currentHour, currentMinute);
    }
};