var words = function (input) {

    var wordsInInput = input.match(/\S+/g),
        wordsByCount = {};

    for (var i = 0; i < wordsInInput.length; i++) {

        var currentWord = wordsInInput[i];

        if (wordsByCount.hasOwnProperty(currentWord)) {
            wordsByCount[currentWord] += 1;
        } else {
            wordsByCount[currentWord] = 1;
        }
    }

    return wordsByCount;
};

module.exports = words;