/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 09-merger
 * 
 * This script takes two parameters, 
 * checks if they are numbers or strings or else.
 */

/**
 * This function takes two parameters, checks if they are numbers or strings or else.
 * @param {} may be a number or a string or sth else
 * @param {} may be a number or a string or sth else
 * @returns a numeric sum if arguments are numbers, a string concatenation if arguments are strings, null otherwise
 */
function merger(InputOne, InputTwo) {
    if (typeof InputOne === 'number' && typeof InputTwo === 'number') {
        return InputOne + InputTwo;
    }
    else if (typeof InputOne === 'string' && typeof InputTwo === 'string') {
        return InputOne + InputTwo;
    }
    else {
        return null;
    }
}

// Test cases
console.log(merger(5, 8)); // both operands are numbers
console.log(merger("hello, ", "world")); // both operands are strings
console.log(merger("hello, ", 1)); // operands are different types
console.log(merger(2, "world"));    // operands are different types
console.log(merger(true, []));  // operands are different types