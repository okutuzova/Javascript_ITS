/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 01-print-reverse
 * 
 * This script includes a single function that takes a string as a parameter 
 * and displays a reversed string. A for loop and a charAt() method are used.
 */

/**
 * The function takes a string and displays a reversed new string.
 * @param {string} reverseString - an initial string that needs to be reversed
 * @returns {void} A new reversed string is printed in the console
 */

function printReverse(reverseString) {
    let result = '';
    for (let i = reverseString.length - 1; i >= 0; i--) {
        result += reverseString.charAt(i);    
    }
    console.log(result);
    }


// Function calls
printReverse('foobar');
printReverse('Hello world');
printReverse('12345');