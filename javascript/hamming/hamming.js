var hamming = {

    compute: function (dnaString1, dnaString2) {

        if (dnaString1.length === dnaString2.length) {

            var hammingDistance = 0;

            for (var i = 0; i < dnaString1.length; i++) {

                if (dnaString1[i] !== dnaString2[i]) {
                    hammingDistance++;
                }
            }

            return hammingDistance;

        } else {

            throw "DNA strands must be of equal length.";
        }
    }
};

module.exports = hamming;