/**
 * @file: arrow-functions.js
 * @author: Olga Kutuzova
 * Exercise 07-math-library
 * 
 * This script demonstrates the use of arrow functions in JavaScript.
 */

// Arrow functions
console.log("These are arrow functions.");

/**
 * Squares a given number.
 * @param {number} userNumber - The number to be squared.
 * @returns {number} The squared value of the input number.
 */
const squareNumberArrow = userNumber => userNumber ** 2;
console.log("The result of squaring the number is:", squareNumberArrow(5));

/**
 * Divides a given number by 2.
 * @param {number} userNumber - The number to be halved.
 * @returns {number} Half of the input number.
 */
const halfNumberArrow = userNumber => userNumber / 2;
console.log("The result of dividing the number by 2 is:", halfNumberArrow(10));

/**
 * Calculates what percentage the first number is of the second number.
 * @param {number} numberOne - The part value.
 * @param {number} numberTwo - The total value.
 * @returns {number} The percentage of numberOne relative to numberTwo.
 */
const percentOfArrow = (numberOne, numberTwo) => numberOne * 100 / numberTwo;
console.log("The first number makes:", percentOfArrow(10, 100), "% of the second number");

/**
 * Calculates the area of a circle and rounds it to two decimal places.
 * @param {number} radius - The radius of the circle.
 * @returns {number} The area of the circle rounded to two decimal places.
 */
const areaOfCircleArrow = (radius) => Math.round((Math.PI * radius ** 2) * 100) / 100;
console.log("The area of a circle equals:", areaOfCircleArrow(2));
