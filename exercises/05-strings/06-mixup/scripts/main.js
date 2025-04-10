/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 06-mixup
 * 
 * This script includes functions that swap the first two characters of two passed strings. 
 */

/**
 * Swaps the first two characters (syllables) of two strings and concatenates them.
 * Example:
 * - mixUp('mix', 'pod') => 'pox mid'
 * - mixUp('dog', 'dinner') => 'dig donner'
 * 
 * @param {string} firstStringToConcat - The first string to perform the mix-up operation on.
 * @param {string} secondStringToConcat - The second string to perform the mix-up operation on.
 * @returns {string} - A new string where the first two characters of both strings are swapped 
 * and joined with a space.
 */
function mixUp(firstStringToConcat, secondStringToConcat) {
    let firstSyllab = firstStringToConcat.slice(0, 2);
    let restOfFirstString = firstStringToConcat.slice(2);
    let secondSyllab = secondStringToConcat.slice(0, 2);
    let restOfSecondString = secondStringToConcat.slice(2);
    return secondSyllab + restOfFirstString + ' ' + firstSyllab + restOfSecondString;
}

// Function Calls
console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));

/**
 * Optimized version of the mix-up function that swaps the first two characters (syllables) of two strings 
 * and concatenates them.
 * 
 * This function works similarly to the previous `mixUp` function, but with a more concise approach.
 * It swaps the first two characters between the two strings and joins them with a space in between, 
 * without storing intermediate variables.
 * 
 * Example:
 * - mixUpOptimized('mix', 'pod') => 'pox mid'
 * - mixUpOptimized('dog', 'dinner') => 'dig donner'
 * 
 * @param {string} firstStringToConcat - The first string to perform the mix-up operation on.
 * @param {string} secondStringToConcat - The second string to perform the mix-up operation on.
 * @returns {string} - A new string where the first two characters of both strings are swapped 
 * and joined with a space.
 */
function mixUpOptimized(firstStringToConcat, secondStringToConcat) {
    return secondStringToConcat.slice(0, 2) + firstStringToConcat.slice(2) + ' ' + 
           firstStringToConcat.slice(0, 2) + secondStringToConcat.slice(2);
}

// Function calls
console.log(mixUp('mix', 'pod'));       // "pox mid"
console.log(mixUp('dog', 'dinner'));   // "dig donner"
