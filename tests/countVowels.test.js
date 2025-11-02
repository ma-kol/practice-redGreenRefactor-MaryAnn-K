const { countVowels } = require('../countVowels.js');

// red - failing test

test("counts vowels in the word 'guitar'", () => {
    expect(countVowels("guitar")).toBe(3); // 'u', 'i', and 'a'
});
