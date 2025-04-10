/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 02-reverse
 * 
 * This script includes a single function that takes a string as a parameter 
 * and returns a reversed string. A for loop and a charAt() method are used. 
 */


/**
 * The function takes a string and returns a reversed new string.
 * @param {string} reverseString - an initial string that needs to be reversed
 * @returns {string} a new reversed string 
 */

function reverse(reverseString) {
    let result = '';
    for (let i = reverseString.length - 1; i >= 0; i--) {
        result += reverseString.charAt(i);    
    }
    return result;
    }


// Function calls
console.log(reverse('foobar'));
console.log(reverse('12345'));
console.log(reverse('Hello world'));