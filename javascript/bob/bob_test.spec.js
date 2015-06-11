var Bob = require('./bob.js');

describe("Bob", function () {
    var bob = new Bob();

    it("stating something", function () {
        var result = bob.hey('Tom-ay-to, tom-aaaah-to.');
        expect(result).toEqual('Whatever.');
    });

    it("shouting", function () {
        var result = bob.hey('WATCH OUT!');
        expect(result).toEqual('Whoa, chill out!');
    });

    it("asking a question", function () {
        var result = bob.hey('Does this cryogenic chamber make me look fat?');
        expect(result).toEqual('Sure.');
    });

    it("talking forcefully", function () {
        var result = bob.hey("Let's go make out behind the gym!");
        expect(result).toEqual('Whatever.');
    });

    it("using acronyms in regular speech", function () {
        var result = bob.hey("It's OK if you don't want to go to the DMV.");
        expect(result).toEqual('Whatever.');
    });

    it("forceful questions", function () {
        var result = bob.hey('WHAT THE HELL WERE YOU THINKING?');
        expect(result).toEqual('Whoa, chill out!');
    });

    it("shouting numbers", function () {
        var result = bob.hey('1, 2, 3 GO!');
        expect(result).toEqual('Whoa, chill out!');
    });

    it("only numbers", function () {
        var result = bob.hey('1, 2, 3');
        expect(result).toEqual('Whatever.');
    });

    it("question with only numbers", function () {
        var result = bob.hey('4?');
        expect(result).toEqual('Sure.');
    });

    it("shouting with special characters", function () {
        var result = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
        expect(result).toEqual('Whoa, chill out!');
    });

    it("shouting with umlauts", function () {
        var result = bob.hey("\xdcML\xc4\xdcTS!");
        expect(result).toEqual('Whoa, chill out!');
    });

    it("calmly speaking about umlauts", function () {
        var result = bob.hey("\xfcML\xe4\xdcTS");
        expect(result).toEqual('Whatever.');
    });

    it("shouting with no exclamation mark", function () {
        var result = bob.hey('I HATE YOU');
        expect(result).toEqual('Whoa, chill out!');
    });

    it("statement containing question mark", function () {
        var result = bob.hey('Ending with a ? means a question.');
        expect(result).toEqual('Whatever.');
    });

    it("prattling on", function () {
        var result = bob.hey('Wait! Hang on.  Are you going to be OK?');
        expect(result).toEqual('Sure.');
    });

    it("silence", function () {
        var result = bob.hey('');
        expect(result).toEqual('Fine. Be that way!');
    });

    it("prolonged silence", function () {
        var result = bob.hey('   ');
        expect(result).toEqual('Fine. Be that way!');
    });

    // Custom tests

    it("statement with accented characters", function () {
        var result = bob.hey('Please abandon this fa\u00E7ade vis-\u00E0-vis El Ni\u00F1o.');
        expect(result).toEqual('Whatever.');
    });

    it("shouting with accented characters", function () {
        var result = bob.hey('OL\u00C9 OL\u00C9 OL\u00C9.');
        expect(result).toEqual('Whoa, chill out!');
    });

    it("question with accented characters", function () {
        var result = bob.hey('Speaking of \u00C5rhus, have you met my fianc\u00E9, S\u00F8ren Solk\u00E6r?');
        expect(result).toEqual('Sure.');
    });

    it("statement with only accented characters", function () {
        var result = bob.hey('\u00C7\u00F2.');
        expect(result).toEqual('Whatever.');
    });

    it("shouting with only accented characters", function () {
        var result = bob.hey('\u00C7\u00D2!');
        expect(result).toEqual('Whoa, chill out!');
    });
});