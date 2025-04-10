/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 07-fixstart
 * 
 * This script includes a function that substitutes the characters equal to the first character 
 * with an asterisk.
 */


/**
 * Replaces all occurrences of the first character of the input string with an asterisk, 
 * except for the first occurrence.
 * @param {string} initialString - The string to be processed.
 * @returns {string} - A new string with all occurrences of the first character replaced by an asterisk, 
 * except for the first one.
 */
function fixStart(initialString) {
    let firstChar = initialString.charAt(0);
    return firstChar + initialString.slice(1).replaceAll(firstChar.toLowerCase(), '*');
}

// Function calls
console.log(fixStart('Babble'));
console.log(fixStart('daddy'));
console.log(fixStart('pretty'));

