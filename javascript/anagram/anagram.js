var anagram = function (originalWord) {

    return {

        matches: function (input) {

            var potentialMatches = Array.isArray(input) ? input : [].slice.call(arguments),
                confirmedMatches = [];

            function convertStringToSortedArray(inputString) {

                return inputString.toLowerCase().split("").sort();
            }

            function confirmThatSortedArraysMatch(array1, array2) {

                return array1.length === array2.length &&
                    array1.every(function (value, index) {
                        return value === array2[index];
                    });
            }

            for (var i = 0; i < potentialMatches.length; i++) {

                var currentWord = potentialMatches[i],
                    dummyArray1 = convertStringToSortedArray(currentWord),
                    dummyArray2 = convertStringToSortedArray(originalWord);

                if (originalWord.toLowerCase() !== currentWord.toLowerCase() && confirmThatSortedArraysMatch(dummyArray1, dummyArray2) === true) {
                    confirmedMatches.push(currentWord);
                }
            }

            return confirmedMatches;
        }
    };
}

module.exports = anagram;