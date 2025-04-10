/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 02-universal-translator
 * 
 * This script contains a function that returns a greeting in different languages based on the language code passed as an argument. 
 */

/**
 * This function returns a greeting in different languages based on the language code passed as an argument. The default language is English. The function uses a switch statement.
 * @param {string} languageCode - the language code to determine the greeting
 * @returns {string} - the greeting in the specified language       
 */
function helloWorld(languageCode) {
    switch (languageCode) {
        case 'en':
            return 'Hello, World!';
        case 'es':
            return '¡Hola, Mundo!';
        case 'de':
            return 'Hallo, Welt!';
        case 'fr':
            return 'Bonjour, le Monde!';
        case 'ru':
            return 'Привет, Мир!';  
        case 'ua':
            return 'Привіт, Світ!'; 
        case 'jp':
            return 'こんにちは、世界！';    
        case 'it':
            return 'Ciao, Mondo!';  
        case 'cn':
            return '你好，世界！';  
        case 'kr':
            return '안녕, 세상!';   
        case 'ar':
            return 'مرحبا بالعالم!';
        case 'pl':
            return 'Witaj, Świecie!';
        default:
            return 'Hello, World!';
    }
}

// Function calls
console.log('Hello, World! in different languages:');   
console.log(helloWorld('en')); // Hello, World!
console.log(helloWorld('es')); // ¡Hola, Mundo!     
console.log(helloWorld('de')); // Hallo, Welt!
console.log(helloWorld('fr')); // Bonjour, le Monde!
console.log(helloWorld('ru')); // Привет, Мир!
console.log(helloWorld('ua')); // Привіт, Світ!
console.log(helloWorld('jp')); // こんにちは、世界！
console.log(helloWorld('it')); // Ciao, Mondo!
console.log(helloWorld('cn')); // 你好，世界！
console.log(helloWorld('kr')); // 안녕, 세상!
console.log(helloWorld('ar')); // مرحبا بالعالم!
console.log(helloWorld('pl')); // Witaj, Świecie!
console.log(helloWorld('xyz')); // 'en'
console.log(helloWorld(''));    // 'en'
console.log(helloWorld(null));  // 'en'
console.log(helloWorld(42));    // 'en'

