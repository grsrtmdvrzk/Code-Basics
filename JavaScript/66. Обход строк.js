// TASK
//     Реализуйте функцию printReversedWordBySymbol(), которая печатает переданное слово посимвольно, как в примере из
//     теории, но делает это в обратном порядке.
//
//     Examples
//         const word = 'Hexlet';
//
//         printReversedWordBySymbol(word);
//         // => t
//         // => e
//         // => l
//         // => x
//         // => e
//         // => H

// SOLUTION
const printReversedWordBySymbol = (word) => {
    let i = word.length - 1;
    while (i >= 0) {
        console.log(word[i]);
        i = i - 1;
    }
};