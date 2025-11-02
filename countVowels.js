// green - minimum code to pass the test

// function countVowels(str) {
//     if (typeof str !== 'string')
//         return "";
//     const vowels = 'aeiouAEIOU';
//     return [...str].filter(char => vowels.includes(char)).length;
// }

// refactor - improved code that still passes

function countVowels(str) {
    if (typeof str !== 'string' || str.length === 0)
        return "";
    const vowels = 'aeiou';
    return [...str.toLowerCase()].filter(char => vowels.includes(char)).length;
}

module.exports = {
    countVowels
};