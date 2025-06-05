// TASK
//     Реализуйте функцию sayHurrayThreeTimes(), которая возвращает строку 'hurray! hurray! hurray!'.
//
//     Examples
//         const hurray = sayHurrayThreeTimes();
//         console.log(hurray); // => hurray! hurray! hurray!

// SOLUTION
const sayHurrayThreeTimes = () => {
    const word = 'hurray!';
    return `${word} ${word} ${word}`;
};