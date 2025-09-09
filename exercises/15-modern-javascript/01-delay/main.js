/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 01-delay
 * 
 * In this script a promise is created to delay the execution of a function.
 */

/**
 * This function creates a promise to delay the execution of a function.
 * @param {Number} ms 
 * @returns {Promise}
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// Testing
// Usual function 
function myFunction() {
    console.log("Regular function after 3 sec");
}
delay(3000).then(myFunction);

// Arrow function
delay(5000).then(() => console.log("Arrow function after 5 sec"));

// Anonymous function
delay(7000).then(function() {
    console.log("Anonymous function after 7 sec");
});