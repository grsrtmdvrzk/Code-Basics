// TASK
//     В этом уроке вам нужно будет реализовать две функции isPalindrome() и isNotPalindrome()
//         1. Функция isPalindrome() определяет, является ли слово палиндромом или нет. Палиндром это слово, которое
//         читается одинаково в обоих направлениях.
//
//         Examples
//             isPalindrome('шалаш'); // true
//             isPalindrome('ага'); // true
//             isPalindrome('хекслет'); // false
//
//             // Слова в функцию могут быть переданы в любом регистре
//             // Поэтому сначала нужно привести слово в нижний регистр word.toLowerCase()
//             isPalindrome('Ага'); // true
//
//         Для определения палиндрома необходимо перевернуть строку и сравнить ее с исходной. Для этого воспользуйтесь
//         функцией reverse()
//
//         Examples
//             reverse('мама'); // амам
//
//         2. Функция isNotPalindrome() проверяет что слово НЕ является палиндромом:
//
//             Examples
//                 isNotPalindrome('шалаш'); // false
//                 isNotPalindrome('ага'); // false
//                 isNotPalindrome('хекслет'); // true
//
//         Для этого, вызовите функцию isPalindrome() внутри isNotPalindrome() и примените отрицание.

// SOLUTION
const isPalindrome = (word) => {
    const lowerWord = word.toLowerCase();
    return lowerWord === reverse(lowerWord);
};

const isNotPalindrome = (word) => !isPalindrome(word);