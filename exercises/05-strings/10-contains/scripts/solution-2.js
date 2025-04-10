/**
 * @file: solution-2.js
 * @author: Olga Kutuzova
 * Exercise 10-contains
 * 
 * This script includes a function that returns true or false checking 
 * if the first string contains the second.
 */

/**
 * Checks if the first string contains the second string.
 *
 * @param {string} firstString - The main string in which to search.
 * @param {string} secondString - The substring to check for within the first string.
 * @returns {boolean} - Returns `true` if `secondString` is found in `firstString`, otherwise `false`.
 */
function aContainsB(firstString, secondString) {
    return firstString.indexOf(secondString) !== -1;
}

// Function calls 
console.log(aContainsB('Another hello world', 'hell')); // true
console.log(aContainsB('Cats are the best', 'dogs')); // false
