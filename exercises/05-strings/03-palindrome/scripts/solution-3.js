/**
 * @file: solution-3.js
 * @author: Olga Kutuzova
 * Exercise 03-palindrome
 * 
 * This script includes a single function that checks if a word is a palindrome 
 * using a two pointers algorithm.
 */


/**
 * Checks whether a given string is a palindrome.
 * @param {string} checkedString - The string to check for palindrome.
 * @returns {boolean} - Returns `true` if the string is a palindrome, otherwise returns `false`.
 */
function isPalindrome(checkedString) {
    let i = 0; // first char index
    let j = checkedString.length - 1; // last char index

    let palindromeString = true; // set a flag, assume a string is a palindrome
    while (i < j) { 
        if (checkedString.charAt(i) != checkedString.charAt(j)) { // mismatch found
            palindromeString = false;
            break;
        }
        i += 1; // increment the index of the first char
        j -= 1; // decrement the index of the last char
    }
    return palindromeString;
}

// function calls 
console.log(isPalindrome('madam'));
console.log(isPalindrome('madame'));
console.log(isPalindrome('wasitacatisaw'));