/**
 * @file: bonus.js
 * @author: Olga Kutuzova
 * Exercise 04-capital
 * 
 * This script includes 3 functions that return a new string with all first letters capitalized. 
 * Different approaches are used.
 */


/**
 * Capitalizes the first letter of each word in the given string.
 * @param {string} initialString - The input string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
function capital(initialString) {
    let separatedArray = initialString.split(' ');
    let modifiedString = '';
    for (let word of separatedArray) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        modifiedString += word;
        modifiedString += ' ';
    }
    return modifiedString.trimEnd();
}
// Function calls
console.log(capital("hello world"));
console.log(capital("i love Javascript"));



/**
 * Capitalizes the first letter of each word in the given string using map() and join().
 * @param {string} initialString - The input string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
function capitalJoin(initialString) {
    return initialString
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Function calls
console.log(capitalJoin("hello world"));         // "Hello World"
console.log(capitalJoin("i love Javascript"));   // "I Love Javascript"


/**
 * Capitalizes the first letter of each word in the string using a regular expression.
 * @param {string} initialString - The input string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
function capitalRegExp(initialString) {
    return initialString.replace(/\b\w/g, char => char.toUpperCase());
}

// Function calls
console.log(capitalRegExp("hello world"));         // "Hello World"
console.log(capitalRegExp("i love Javascript"));   // "I Love Javascript"
