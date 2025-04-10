/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 08-verbing
 * 
 * This script includes a function that adds different endings to a string.
 */


/**
 * Modifies an input string according to the following rules:
 * - If the string length is less than 3, return it unchanged.
 * - If the string already ends with "ing", append "ly".
 * - If the string ends in "e", remove "e" and add "ing".
 * - Otherwise, append "ing" to the string.
 * @param {string} initialString - The word to be modified.
 * @returns {string} - The transformed word.
 */
function verbing(initialString) {
    if (initialString.length < 3) {
        return initialString;
    } 
    
    if (initialString.slice(-3) === 'ing') {
        return initialString + 'ly';
    } 
    
    if (initialString.slice(-1) === 'e') {
        return initialString.slice(0, -1) + 'ing'; 
    } 
    
    return initialString + 'ing';
}

// Function calls:
console.log(verbing('swim'));      // "swimming"
console.log(verbing('swimming'));  // "swimmingly"
console.log(verbing('dance'));     // "dancing" 
console.log(verbing('paste'));     // "pasting" 
console.log(verbing('yell'));      // "yelling"
console.log(verbing('wash'));      // "washing"
console.log(verbing('make'));       // "making" 
console.log(verbing('go'));        // "go" 
