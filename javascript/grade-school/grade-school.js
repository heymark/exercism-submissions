"use strict";

var School = function () {

    var studentsByGrade = {};

    this.add = function (name, grade) {

        if (studentsByGrade.hasOwnProperty(grade)) {
            studentsByGrade[grade].push(name);
            studentsByGrade[grade].sort();
        } else {
            studentsByGrade[grade] = [name];
        }
    };

    this.grade = function (grade) {

        if (studentsByGrade.hasOwnProperty(grade)) {
            return studentsByGrade[grade];
        } else {
            return [];
        }
    };

    this.roster = function () {

        return studentsByGrade;
    };
};

module.exports = School;