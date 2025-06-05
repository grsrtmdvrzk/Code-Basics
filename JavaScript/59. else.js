// TASK
//     Реализуйте функцию normalizeUrl(), которая выполняет так называемую нормализацию данных. Она принимает адрес
//     сайта и возвращает его с https:// в начале.
//
//     Функция принимает адреса в виде АДРЕС или https://АДРЕС, но всегда возвращает адрес в виде https://АДРЕС
//
//     Можно использовать метод startsWith(), чтобы проверить, начинается ли строка с префикса https://. А потом на
//     основе этого добавлять или не добавлять https://.
//
//     Примеры вызова:
//         normalizeUrl("google.com"); // "https://google.com"
//         normalizeUrl("https://ai.fi"); // "https://ai.fi"

// SOLUTION
const normalizeUrl = (site) => {
    let normalizedUrl;

    if (site.startsWith('https://')) {
        normalizedUrl = site;
    } else {
        normalizedUrl = `https://${site}`;
    }

    return normalizedUrl;
};