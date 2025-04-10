/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 04-easy-geometry
 * 
 * In this script there are two functions that calculate the circumference and the area of a circle. 
 */

/**
 * Calculates the circumference of a circle.
 * @param {number} radius - The radius of a circle. 
 * @returns {number} The circumference of a circle. 
 */
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }

/**
 * Calculates the area of a circle. 
 * @param {number} radius The radius of a circle. 
 * @returns  {number} The area of a circle. 
 */
  function calculateArea(radius) {
    return Math.PI * radius ** 2; // Using the exponentiation operator for squaring
  }
  
  // Declare a variable to store a radius
  let radius = 10;

  // Call the functions and log the results to the console 
  console.log("The circumference is ", calculateCircumference(radius));
  console.log("The area is ", calculateArea(radius));
  // Expected output: 62.83185307179586