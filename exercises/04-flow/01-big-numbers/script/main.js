/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 01-big-numbers
 * 
 * This script compares two numbers and returns the greater one. The functions are called with different arguments to test the functionality. Additionaly, the script checks if the passed arguments are of the same type. The ternary operator is used, as well as arrow functions.
 */

/**
 * This function returns the greater number of two numbers and logs it to the console. Additionlly it checks if the passed arguments are of the same type.
 * @param {number} firstNumber - the first number to compare
 * @param {number} secondNumber - the second number to compare
 * @returns {number} - the greater number
 */

function greaterNum(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        console.log(`The greater number of ${firstNumber} and ${secondNumber} is ${firstNumber}`);
        return firstNumber;
    } else if (firstNumber < secondNumber) {
        console.log(`The greater number of ${firstNumber} and ${secondNumber} is ${secondNumber}`);
        return secondNumber;
    } else {
        console.log(`The numbers ${firstNumber} and ${secondNumber} are equal.`);
    }
}

// Function calls
console.log('Compare numbers and return the greater one:');
greaterNum(3, 6); // The greater number of 3 and 6 is 6
greaterNum(8, 2); // The greater number of 8 and 2 is 8
greaterNum(5, 5); // The numbers 5 and 5 are equal.

/**
 * This function compares the types of two arguments and logs the result to the console. The ternary operator is used. 
 * @param {number} firstNumber - the first parameter to compare
 * @param {number} secondNumber - the second parameter to compare
 */
function compareTypes(firstNumber, secondNumber) {
    return typeof firstNumber === typeof secondNumber ?  console.log(`The arguments ${firstNumber} and ${secondNumber} are of the same type.`) : console.log(`The arguments ${firstNumber} and ${secondNumber} are of different types.`);   
}

// Function calls
console.log('Compare types of arguments with a ternary operator:');
compareTypes(3, 6); // The numbers 3 and 6 are of the same type.
compareTypes(8, '2'); // The numbers 8 and 2 are of different types.


// Arrow function with two parameters and a ternary operator assigned to a variable. This function does not cover the equlity case. Therefore, it is not recommended to use it. It is introduced for demonstration purposes only.
const compareNumbers = (firstNumber, secondNumber) => {
    return firstNumber > secondNumber ?  console.log(`The greater number of ${firstNumber} and ${secondNumber} is ${firstNumber}`) : console.log(`The greater number of ${firstNumber} and ${secondNumber} is ${secondNumber}`);   
}

// Arrow Function calls through the constant variable
console.log('Compare numbers with an arrow function. No equality case:');
compareNumbers(3, 6); // The greater number of 3 and 6 is 6
compareNumbers(8, 2); // The greater number of 8 and 2 is 8
console.log('This output is incorrect as the equality case is not handled:');
compareNumbers(5, 5); // This output is incorrect, as the function does not cover the equality case. The greater number of 5 and 5 is 5

// Correct use of an arrow function with two parameters and a ternary operator with a nested condition. This function covers the equality case.
const compareNumbersWithEquality = (a, b) => a > b ? "a is greater" : (a < b ? "b is greater" : "a and b are equal");

// Arrow Function calls through the constant variable
console.log('Compare numbers with an arrow function. Equality case is covered:');
console.log(compareNumbersWithEquality(3, 6)); // b is greater
console.log(compareNumbersWithEquality(8, 2)); // a is greater
console.log(compareNumbersWithEquality(5, 5)); // a and b are equal
