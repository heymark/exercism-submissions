var Bob = function () {};

Bob.prototype.hey = function (input) {

    var NO_INPUT = "Fine. Be that way!",
        SHOUTING = "Whoa, chill out!",
        QUESTION = "Sure.",
        ALL_ELSE = "Whatever.",
        myAnswer = ALL_ELSE;

    if (input.trim() === "") {
        myAnswer = NO_INPUT;
    } else if (input.match(/[a-z]/i) && input === input.toUpperCase()) {
        myAnswer = SHOUTING;
    } else if (input.slice(-1) === "?") {
        myAnswer = QUESTION;
    }

    return myAnswer;
};

module.exports = Bob;