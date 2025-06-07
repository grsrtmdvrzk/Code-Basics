// TASK
//     Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию. У копии каждый n-ный
//     элемент должен быть переведен в верхний регистр. n – задается на входе в функцию.
//
//     Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.
//
//     Examples
//         const text = 'I never look back';
//         // Каждый третий элемент
//         makeItFunny(text, 3); // 'I NevEr LooK bAck'

// SOLUTION
const makeItFunny = (str, n) => {
    let i = 0;
    let result = '';
    while (i < str.length) {
        const current = str[i];
        if ((i + 1) % n === 0) {
            result = `${result}${current.toUpperCase()}`;
        } else {
            result = `${result}${current}`;
        }
        i++;
    }

    return result;
};