/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 11-the-group
 * 
 * This script includes two functions that check if a string includes another string. 
 */

/**
 * Checks if the first string contains the second string.
 *
 * @param {string} firstString - The main string in which to search.
 * @param {string} secondString - The substring to check for within the first string.
 * @returns {boolean} - Returns `true` if `secondString` is found in `firstString`, otherwise `false`.
 */
function aContainsB(firstString, secondString) {
    return firstString.includes(secondString);
}

/**
 * Checks if `secondString` exists within `firstString` and logs a message.
 *
 * @param {string} firstString - The main text (e.g., a list of names or a group description).
 * @param {string} secondString - The word or phrase to search for within `firstString`.
 * @returns {void} - Outputs a message to the console.
 */
function group(firstString, secondString) {
    aContainsB(firstString, secondString) ? console.log(`${secondString} IS part of the group`) : console.log(`${secondString} is NOT part of the group`);
}

// Function calls
let names = "Mary, James, and John";
let oldGuy = "James";
let newGuy = "Philip";




// Test cases
group(names, oldGuy);   // Outputs: "James IS part of the group"
group(names, newGuy);   // Outputs: "Philip is NOT part of the group"




