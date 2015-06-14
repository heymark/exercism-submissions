"use strict";

var Beer = {

    verse: function (numberOfBottles) {

        var currentVerse;

        if (numberOfBottles > 2) {

            currentVerse = numberOfBottles + " bottles of beer on the wall, " +
                numberOfBottles + " bottles of beer.\nTake one down and pass it around, " +
                (numberOfBottles - 1) + " bottles of beer on the wall.\n";

        } else if (numberOfBottles === 2) {

            currentVerse = "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n";

        } else if (numberOfBottles === 1) {

            currentVerse = "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";

        } else {

            currentVerse = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
        }

        return currentVerse;
    },
    sing: function (start, stop) {

        var song = "",
            startVerse = start,
            stopVerse = stop ? stop : 0;

        for (var i = startVerse; i >= stopVerse; i--) {

            song += this.verse(i);

            if (i !== stopVerse) {

                song += "\n";
            }
        }

        return song;
    }
};

module.exports = Beer;