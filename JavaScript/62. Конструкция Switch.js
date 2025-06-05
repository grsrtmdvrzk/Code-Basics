// TASK
//     Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа.
//     Если для числа нет объяснения, то возвращается just a number. Объяснения есть только для следующих чисел:
//         - 666 - devil number
//         - 42 - answer for everything
//         - 7 - prime number
//
//     Примеры вызова функции:
//         getNumberExplanation(8);   // just a number
//         getNumberExplanation(666); // devil number
//         getNumberExplanation(42);  // answer for everything
//         getNumberExplanation(7);   // prime number

// SOLUTION
const getNumberExplanation = (number) => {
    switch (number) {
        case 666:
            return 'devil number';
        case 7:
            return 'prime number';
        case 42:
            return 'answer for everything';
        default:
            return 'just a number';
    }
};