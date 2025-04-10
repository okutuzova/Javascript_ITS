/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 02-calculate-age
 * 
 * This script logs a string to the console.
 */


// Initialize a variable to store the birth year
let birthYear = 1988;
// Initialize a variable to store the future year
let futureYear = 2026
// Calculate the possible age in the future year (if birthday has already occurred)
let ageInFuture1 = futureYear - birthYear;
// Calculate the alternative possible age(if the birthday has not occurred yet)
let ageInFuture2 = ageInFuture1 - 1;
// Use template literals to construct and log a sentence with possible ages
console.log(`I will be either ${ageInFuture2} or ${ageInFuture1} in ${futureYear}.`);