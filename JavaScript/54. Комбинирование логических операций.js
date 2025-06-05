// TASK
//     Реализуйте функцию, которая проверяет формат указанного телефона. Если телефон начинается с +, значит это
//     международный формат.
//
//     Examples
//         isInternationalPhone('89602223423'); // false
//         isInternationalPhone('+79602223423'); // true

// SOLUTION
const isInternationalPhone = (phone) => phone[0] === '+';