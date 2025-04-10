/**
 * @file: solution-3.js
 * @author: Olga Kutuzova
 * Exercise 01-print-reverse
 * 
 * This script includes a single function that takes a string as a parameter 
 * and displays a reversed string. A for loop and a slice() method are used.
 */

/**
 * This function displays a reversed string using a slice method.
 * @param {string} reverseString an initial string
 * @returns {void}
 */
function printReverseSlice(reverseString) {
    let result = '';
    // the for loop starts from length - 1
    for (let i = reverseString.length - 1; i >= 0; i--) {
        // 1st iteration: char at (-1, -2) position is taken
        //2nd iteration char at (-2, -3) position is taken, etc
        result += reverseString.slice(i, i + 1);    
    }
     console.log(result);
    }

console.log('These are the results using a slice method.');
// Function calls
printReverseSlice('foobar');
printReverseSlice('Hello world');
printReverseSlice('12345');