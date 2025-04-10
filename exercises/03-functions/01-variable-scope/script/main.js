/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 01-variable-scope
 * 
 * This script demonstrates the concept of variable scope in JavaScript.
 */

// Global variable (accessible everywhere)
let globalCounter = 0;

/**
 * This function adds two numbers and prints the result
 * @param {*} a 
 * @param {*} b 
 */
function addNumbers(a, b) {
    // Local variable (accessible only inside the function addNumbers)
    let result = a + b;

    // Using a global variable inside the function, incrementing its value with a post-increment unary operator
    globalCounter++;

    console.log(`Result of addition: ${result}`);
    console.log(`Function has been called ${globalCounter} times`);

    // Block scope variable example
    if (result > 10) {
        let message = "The result is greater than 10"; // Block-scoped variable (only accessible inside this block)
        console.log(message);
    }

    // console.log(message); // ❌ Uncaught ReferenceError: message is not defined (because it's block-scoped)
}

// Calling the function multiple times
addNumbers(5, 10);
addNumbers(2, 3);
addNumbers(7, 4);

// Accessing the global variable outside the function
console.log(`Global counter value outside function: ${globalCounter}`);

// Trying to access local variable outside the function (will cause an error)
console.log(result); // ❌ ReferenceError: result is not defined
