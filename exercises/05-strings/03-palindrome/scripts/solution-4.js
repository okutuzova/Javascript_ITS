/**
 * @file: solution-4.js
 * @author: Olga Kutuzova
 * Exercise 03-palindrome
 * 
 * This script includes a single function that checks if a word is a palindrome 
 * using string concatenation mechanism.
 */


/**
 * Checks whether a given string is a palindrome by reversing the string.
 * @param {string} checkedString - The string to check for palindrome.
 * @returns {boolean} - Returns `true` if the string is a palindrome, otherwise returns `false`.
 */
function isPalindrome(checkedString) {
    let result = '';
    for (let char of checkedString) { // iterates through each char in a string
        result = char + result;
    }

    return result === checkedString; 
}

// function calls 
console.log(isPalindrome('madam'));
console.log(isPalindrome('madame'));
console.log(isPalindrome('wasitacatisaw'));