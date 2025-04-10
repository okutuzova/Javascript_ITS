/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 04-capital
 * 
 * This script includes a function that returns a new string with a capitalized first character.
 */

/**
 * This function takes a string as input and returns a new string with the first character 
 * converted to uppercase and the rest of the characters unchanged. 
 * It does not alter the original string.
 * @param {string} initialString - The string to capitalize.
 * @returns {string} - The input string with the first letter capitalized and the rest unchanged.
 */
function capital(initialString) {
    return initialString.charAt(0).toUpperCase() + initialString.slice(1);
}

// Function calls
console.log(capital("hello world"));
console.log(capital("i love Javascript"));