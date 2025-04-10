 /**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 05-geometry-library
 * 
 * This script calculates the circumference and area of a circle based on the provided radius.
 */

 // Using usual functions (hoisting is applicable), global scope

/**
 * Calculates the circumference of a circle. Outputs a string.
 * @param {number} radius - The radius of a circle. 
 * @returns {void} 
 */
function calcCircumference(radius) {
    let Circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${Circumference}.`);
  }

/**
 * Calculates the area of a circle. Outputs a string.
 * @param {number} radius - The radius of a circle. 
 * @returns  {void}  
 */
function calcArea(radius) {
    let Area = Math.PI * radius ** 2; // Using the exponentiation operator for squaring
    console.log(`The area is ${Area}.`);
  }
  
 
  // Call the functions and log the results to the console 
calcCircumference(10);
  // Expected output: 62.83185307179586
calcArea(10);
  // Expected output: 314.1592653589793


// Using arrow functions (hoisting not applicable), global scope

/**
 * Calculates the circumference of a circle. Outputs a string 
 * @param {number} radius - The radius of a circle. 
 * @returns  {void}  
 */
const calcCircumferenceArrow = (radius) => console.log(`The circumference is ${2 * Math.PI * radius}.`);

/**
 * Calculates the area of a circle. Outputs a string 
 * @param {number} radius - The radius of a circle. 
 * @returns  {void}  
 */
const calcAreaArrow = (radius) => console.log(`The area is ${Math.PI * radius ** 2}.`);

console.log("Arrow functions call");
// Functions call
calcCircumferenceArrow(10);
calcAreaArrow(10);


// Using an anonymous function (hoisting not applicable), out of global scope
const calcCircumferenceAnonym = function (radius) {
    console.log(`The circumference is ${2 * Math.PI * radius}.`);
};

const calcAreaAnonym = function (radius) {
    console.log(`The area is ${Math.PI * radius ** 2}.`);
};
console.log("Anonymous functions call");

// Functions call
calcCircumferenceAnonym(10);
calcAreaAnonym(10);


console.log("IIFE");
// Immediately Invoked Function Expression
(function(radius) {
    console.log(`The circumference is ${2 * Math.PI * radius}.`);
})(10); 
(function(radius) {
    console.log(`The area is ${Math.PI * radius ** 2}.`);
})(10); 
