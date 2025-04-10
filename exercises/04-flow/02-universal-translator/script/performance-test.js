/**
 * @file: performance-test.js
 * @author: Olga Kutuzova
 * Exercise 02-universal-translator
 * 
 * This script measures the execution time of the original and optimized functions helloWorld. The functions are called with the same arguments and the execution time is compared. The performance.now() method is used to measure the time.
 */

// Measure the execution time of a function

/**
 * This function measures the performance of another function. 
 * @param {function} func - a function that will be tested
 * @param {string} lang - a language code
 * @param {number} iterations - number of iterations
 * @returns milliseconds
 */
const measureExecutionTime = (func, lang, iterations) => {
    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
        func(lang);
    }
    const end = performance.now();
    return end - start;
};

// Functions to test
const helloWorldOriginal = (languageCode) => {
    switch (languageCode) {
        case 'en': return 'Hello, World!';
        case 'es': return '¡Hola, Mundo!';
        case 'de': return 'Hallo, Welt!';
        case 'fr': return 'Bonjour, le Monde!';
        case 'ru': return 'Привет, Мир!';
        case 'ua': return 'Привіт, Світ!';
        case 'jp': return 'こんにちは、世界！';
        case 'it': return 'Ciao, Mondo!';
        case 'cn': return '你好，世界！';
        case 'kr': return '안녕, 세상!';
        case 'ar': return 'مرحبا بالعالم!';
        case 'pl': return 'Witaj, Świecie!';
        default: return 'en';
    }
};

const translations = {
    en: 'Hello, World!',
    es: '¡Hola, Mundo!',
    de: 'Hallo, Welt!',
    fr: 'Bonjour, le Monde!',
    ru: 'Привет, Мир!',
    ua: 'Привіт, Світ!',
    jp: 'こんにちは、世界！',
    it: 'Ciao, Mondo!',
    cn: '你好，世界！',
    kr: '안녕, 세상!',
    ar: 'مرحبا بالعالم!',
    pl: 'Witaj, Świecie!',
};

const helloWorldOptimizedTest = (languageCode) => translations[languageCode] || translations.en;

// Iterations number
const iterations = 1_000_000;

console.log("Original Function Time:", measureExecutionTime(helloWorldOriginal, 'de', iterations), "ms");
console.log("Optimized Function Time:", measureExecutionTime(helloWorldOptimizedTest, 'de', iterations), "ms");
