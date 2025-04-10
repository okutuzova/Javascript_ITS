/**
 * @file: solution-2.js
 * @author: Olga Kutuzova
 * Exercise 01-print-reverse
 * 
 * This script includes a single function that takes a string as a parameter and displays a reversed string.
 *  Array methods reverse() and join() are used, as well as the string method split().
 */


/**
 * The function takes a string and displays a reversed new string.
 * @param {string} reverseString - an initial string that needs to be reversed
 * @returns {void} A new reversed string is printed in the console
 */
function printReverseArray(reverseString) {
    let result = reverseString.split('').reverse().join('');
    console.log(result);
}

console.log('These are the results using array methods.');
// Function calls
printReverseArray('foobar');
printReverseArray('Hello world');
printReverseArray('12345');
