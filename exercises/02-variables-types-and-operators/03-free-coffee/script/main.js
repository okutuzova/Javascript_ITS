/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 03-free-coffee
 * 
 * This script logs a string to the console.
 */

// Initialize a variable to store the current age 
let currentAge = 37;
// Initialize a variable to store the max expected age 
let maxAge = 100;
// Initialize a variable to store the number of cups of coffee consumed per day
let coffeeCups = 1;

// Calculate the total number of coffee cups needed for the rest of the life 
// Assuming 1 cup per day, multiply by the remaining years and 365 days per year
let coffeeMax = (maxAge - currentAge) * 365 * coffeeCups;

// Use template literals to construct and log a sentence with the result
console.log(`You will need ${coffeeMax} cups of coffee to last you until the ripe old age of ${maxAge}.`);