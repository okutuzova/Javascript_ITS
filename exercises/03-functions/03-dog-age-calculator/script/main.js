/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 03-dog-age-calculator
 * 
 * This script calculates a dog's age in dog years based on the provided human years. 
 */

// Using a usual function (hoisting is applicable), global scope

/**
 * Outputs a string 
 * @param {number} dogAgeInHumanYears - a number that indicates the dog's age in human years
 * @returns {void} 
 */
function calculateDogAge(dogAgeInHumanYears) {
    let dogAgeConversion = dogAgeInHumanYears * 7
    console.log(`Your dog is ${dogAgeConversion} years old in dog years!`);
   }


// Function calls
calculateDogAge(6);
calculateDogAge(1);
calculateDogAge(2);


// Bonus function

/**
 * Outputs a string 
 * @param {number} dogAgeInHumanYears - a number that indicates the dog's age in human years
 * @param {number} yearsConversionRate - a number that indicates the conversion rate of human to dog years
 * @returns {void} 
 */

// for an experiment measuring execution time of a usual function 
console.time("Execution Time Usual Function");

function calculateDogAgeWithRate(dogAgeInHumanYears, yearsConversionRate) {
    let dogAgeConversion = dogAgeInHumanYears * yearsConversionRate
    console.log(`Your dog is ${dogAgeConversion} years old in dog years!`);
   }

// Function calls
calculateDogAgeWithRate(6, 5);
console.timeEnd("Execution Time Usual Function"); // ending timer
calculateDogAgeWithRate(1, 5);
calculateDogAgeWithRate(2, 5);

// Using an arrow function (hoisting not applicable), global scope

// for an experiment measuring execution time of an arrow function 
console.time("Execution Time Arrow Function");
/**
 * Outputs a string 
 * @param {number} dogAgeInHumanYears - a number that indicates the dog's age in human years
 * @param {number} yearsConversionRate - a number that indicates the conversion rate of human to dog years
 * @returns {void} 
 */
const dogsAgeConvertArrow = (dogAgeInHumanYears, yearsConversionRate) =>  console.log(`Your dog is ${dogAgeInHumanYears * yearsConversionRate} years old in dog years!`);

// Function call
dogsAgeConvertArrow(5, 5);
console.timeEnd("Execution Time Arrow Function"); // ending timer

// Using an anonymous function (hoisting not applicable), out of global scope
// for an experiment measuring execution time of an anonymous function 
console.time("Execution Time Anonymous Function");

const dogAgeCountAnonym = function (dogAgeInHumanYears,yearsConversionRate) {
    console.log(`Your dog is ${dogAgeInHumanYears * yearsConversionRate} years old in dog years!`);
};

// Function call
dogAgeCountAnonym(3, 1)
console.timeEnd("Execution Time Anonymous Function"); // ending timer


// Immediately Invoked Function Expression

// for an experiment measuring execution time of an IIFE 
console.time("Execution Time IIFE");
(function(dogAgeInHumanYears, yearsConversionRate) {
    console.log(`Your dog is ${dogAgeInHumanYears * yearsConversionRate} years old in dog years!`);
})(1, 7); 
console.timeEnd("Execution Time IIFE"); // ending timer