/**
 * @file: solution-2.js
 * @author: Olga Kutuzova
 * Exercise 03-palindrome
 * 
 * This script includes a function that checks if a word is a palindrome. 
 * Array methods reverse and join are used. 
 */


function isPalindrome(checkedString) {
   return checkedString === checkedString.split('').reverse().join('');
}

// function calls 
console.log(isPalindrome('madam'));
console.log(isPalindrome('madame'));
console.log(isPalindrome('wasitacatisaw'));

    
