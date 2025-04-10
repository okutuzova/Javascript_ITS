/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 04-odd-or-even
 * 
 * This script contains a function that determines if a number is odd or even and a function with the same functionality that uses the ternary operator.
 */

/**
 * This function determines if a number is odd or even. The function uses a series of if...else statements.  
 * @param {number} number - the number to determine if it is odd or even
 * @returns {string} - the result of the check
 */
function checkOddorEven(number) {  
    if (number % 2 === 0) {
        return ' is even';
    } else {
        return ' is odd';
    }
}

/**
 * This function determines if a number is odd or even. The function uses the ternary operator.  
 * @param {number} number - the number to determine if it is odd or even
 * @returns {string} - the result of the check
 */
function checkOddOrEvenTernary(number) {  
    return number % 2 === 0 ? 'even' : 'odd';
}

/**
 * This function determines if a number is odd or even. The function uses an object to store the results of the check.  
 * @param {number} number - the number to determine if it is odd or even
 * @returns {string} - the result of the check
 */
function checkOddOrEvenObject(number) {
    const parity = { true: 'even', false: 'odd' };
    return parity[number % 2 === 0];
}

//Function calls in a loop
console.log("Using if...else: ");
for (let i = 0; i <= 20; i++) {
    console.log(i + checkOddorEven(i));
}

console.log("Using a ternary operator: ");
for (let i = 0; i <= 20; i++) {
    console.log(`${i} is ${checkOddOrEvenTernary(i)}`);
}

console.log("Using an object literal: ");
for (let i = 0; i <= 20; i++) {
    console.log(`${i} is ${checkOddOrEvenObject(i)}`);
}
