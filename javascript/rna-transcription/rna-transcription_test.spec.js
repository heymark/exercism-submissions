var toRna = require('./rna-transcription');

describe("toRna()", function () {
    it("transcribes cytosine to guanine", function () {
        expect(toRna('C')).toEqual('G');
    });

    it("transcribes guanine to cytosine", function () {
        expect(toRna('G')).toEqual('C');
    });

    it("transcribes adenine to uracil", function () {
        expect(toRna('A')).toEqual('U');
    });

    it("transcribes thymine to adenine", function () {
        expect(toRna('T')).toEqual('A');
    });

    it("transcribes all dna nucleotides to their rna complements", function () {
        expect(toRna('ACGTGGTCTTAA'))
            .toEqual('UGCACCAGAAUU');
    });

    it("throws an error on invalid input", function () {
        expect(toRna.bind(null, 'TUNA')).toThrow();
    });

    it("throws an error on empty input", function () {
        expect(toRna.bind(null, '')).toThrow();
    });

    it("throws an error on no input", function () {
        expect(toRna.bind(null)).toThrow();
    });
});