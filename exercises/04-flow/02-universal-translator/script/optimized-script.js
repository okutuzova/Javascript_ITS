/**
 * @file: optimized-script.js
 * @author: Olga Kutuzova
 * Exercise 02-universal-translator
 * 
 * This script contains an optimized script of the exercise 02-universal-translator. The function helloWorld is rewritten using an object instead of a switch statement. The function is called with different arguments to test the functionality.
 */

/**
 * This function returns a greeting in different languages based on the language code passed as an argument. The function uses an object to store translations. If the language is not found, English will be returned.
 * @param {string} languageCode - the language code to determine the greeting
 * @returns {string} - the greeting in the specified language
 * 
 */ 
const helloWorldOptimized = (languageCode) => {
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

    return translations[languageCode] || translations.en; 
};

// Function call
console.log('Hello, World! in different languages:');
['en', 'es', 'de', 'fr', 'ru', 'ua', 'jp', 'it', 'cn', 'kr', 'ar', 'pl', 'xyz']
    .forEach(code => console.log(`${code}: ${helloWorldOptimized(code)}`));
