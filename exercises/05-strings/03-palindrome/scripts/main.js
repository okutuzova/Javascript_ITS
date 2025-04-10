/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 03-palindrome
 * 
 * This script includes a function that checks if a word is a palindrome. 
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


/**
 * Checks if the given string is a palindrome.
 * This function takes a string, reverses it, and compares it with the original string to determine
 * if the string reads the same forward and backward (i.e., palindrome).
 * @param {string} checkedString - The string to check for palindrome.
 * @returns {boolean} - Returns true if the string is a palindrome, otherwise false.
 */
function isPalindrome(checkedString) {
    return reverse(checkedString) == checkedString;
}

// Function calls
console.log(isPalindrome('madam'));
console.log(isPalindrome('madame'));
console.log(isPalindrome('wasitacatisaw'));