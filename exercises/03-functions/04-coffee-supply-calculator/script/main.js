/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 04-coffee-supply-calculator
 * 
 * This script calculates how many cups of coffee a user will need to last them until the age of 99.
 */


// Using a usual function (hoisting is applicable), global scope

/**
 * Outputs a string 
 * @param {number} currentAge - age of a user
 * @param {number} dailyAmount - amount of cups of coffee per day
 * @returns {void} 
 */
function calculateSupply(currentAge, dailyAmount) {
    const maxAge = 99;
    let maxCoffeeAmount = (maxAge - currentAge) * 365 * dailyAmount;
    console.log(`You will need ${maxCoffeeAmount} cups of coffee to last you until the age of ${maxAge}.`);
   }


// Function calls
calculateSupply(15, 3);
calculateSupply(37, 1);
calculateSupply(53, 3);


// Bonus function

/**
 * Outputs a string 
 * @param {number} currentAge - age of a user
 * @param {number} dailyAmountinLtrs - how many liters of coffee will be needed
 * @returns {void} 
 */

function calculateSupplyBonus(currentAge, dailyAmountinLtrs) {
    const maxAge = 99;
    let maxCoffeeAmount = Math.round((maxAge - currentAge) * 365 * dailyAmountinLtrs);
    console.log(`You will need ${maxCoffeeAmount} liters of coffee to last you until the age of ${maxAge}.`);
   }

// Function calls
calculateSupplyBonus(25, 1.1);


// Using an arrow function (hoisting not applicable), global scope


/**
 * Outputs a string 
 * @param {number} currentAge - age of a user
 * @param {number} dailyAmountinLtrs - how many liters of coffee will be needed
 * @param {number} maxAge - 99 years by default
 * @returns {void} 
 */
const calculateCoffeeArrow = (currentAge, dailyAmountinLtrs, maxAge=99) =>  console.log(`You will need ${Math.round((maxAge - currentAge) * 365 * dailyAmountinLtrs)} liters of coffee to last you until the age of ${maxAge}.`);

console.log("Arrow function call");
// Function call
calculateCoffeeArrow(95, 0.5);


// Using an anonymous function (hoisting not applicable), out of global scope

const calculateCoffeeAnonym = function (currentAge, dailyAmountinLtrs, maxAge=99) {
    console.log(`You will need ${Math.round((maxAge - currentAge) * 365 * dailyAmountinLtrs)} liters of coffee to last you until the age of ${maxAge}.`);
};

console.log("Anonymous function call");
// Function call
calculateCoffeeAnonym(25, 1);



console.log("IIFE");

// Immediately Invoked Function Expression
(function(currentAge, dailyAmountinLtrs, maxAge=99) {
    console.log(`You will need ${Math.round((maxAge - currentAge) * 365 * dailyAmountinLtrs)} liters of coffee to last you until the age of ${maxAge}.`);
})(30, 0.3, 80); 
