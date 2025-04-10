/**
 * @file: solution-2.js
 * @author: Olga Kutuzova
 * Exercise 02-reverse
 * 
 * This script includes a single function that takes a string as a parameter and returns a reversed string.
 *  Array methods reverse() and join() are used, as well as the string method split().
 */


/**
 * The function takes a string and returns a reversed new string.
 * @param {string} reverseString - an initial string that needs to be reversed
 * @returns {void} A new reversed string is returned
 */
function reverseArray(reverseString) {
    return reverseString.split('').reverse().join('');
}

console.log('These are the results using array methods.');
// Function calls
console.log(reverseArray('foobar'));
console.log(reverseArray('Hello world'));
console.log(reverseArray('12345'));
