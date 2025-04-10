/**
 * @file: solution-regexp.js
 * @author: Olga Kutuzova
 * Exercise 07-fixstart
 * 
 * This script includes includes a function that substitutes the characters equal to the first character 
 * with an asterisk. A regular expression is used.
 */

/**
 * Replaces all occurrences of the first character of the input string with an asterisk, 
 * except for the first occurrence with the help of a created regex.
 * @param {string} initialString - The string to be processed.
 * @returns {string} - A new string with all occurrences of the first character replaced by an asterisk, 
 * except for the first one.
 */
function fixStart(initialString) {
    let firstChar = initialString.charAt(0); // initialString[0]
    // Create a regular expression to replace all matches starting from index 1 
    let regex = new RegExp(firstChar.toLowerCase(), 'g'); // 'g' - global flag to replace all matches
    return firstChar + initialString.slice(1).replace(regex, '*');
}

// Function calls
console.log(fixStart('babble'));  
console.log(fixStart('daddy'));
console.log(fixStart('pretty'));
