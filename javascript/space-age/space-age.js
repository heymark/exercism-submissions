"use strict";

var SpaceAge = function (seconds) {

    this.seconds = seconds;
    this.earthYearInSeconds = 31557600;
    this.orbitalPeriodInEarthYears = {
        Earth: 1,
        Mercury: 0.2408467,
        Venus: 0.61519726,
        Mars: 1.8808158,
        Jupiter: 11.862615,
        Saturn: 29.447498,
        Uranus: 84.016846,
        Neptune: 164.79132
    };

    var generateAgeMethodForPlanet = function (planet) {
        var ageMethodName = "on" + planet;
        this[ageMethodName] = function () {
            return this.convertSecondsToAgeInPlanetaryYears(planet);
        };
    };

    Object.keys(this.orbitalPeriodInEarthYears).forEach(generateAgeMethodForPlanet, this);
};

SpaceAge.prototype.convertSecondsToAgeInPlanetaryYears = function (planet) {

    return Number((this.seconds / (this.earthYearInSeconds * this.orbitalPeriodInEarthYears[planet])).toFixed(2));
};

module.exports = SpaceAge;