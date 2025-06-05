// TASK
//     Реализуйте функцию guessNumber(), которая принимает число и проверяет, равно ли число заданному (пусть это будет
//     42). Если равно, то функция должна вернуть строку 'You win!', в противном случае нужно вернуть строку 'Try
//     again!'.
//
//     Examples
//         guessNumber(42) // You win!
//         guessNumber(61) // Try again!

// SOLUTION
const guessNumber = (guess) => {
    if (guess === 42) {
        return 'You win!';
    }

    return 'Try again!';
};