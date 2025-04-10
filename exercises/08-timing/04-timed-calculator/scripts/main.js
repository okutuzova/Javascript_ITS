/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 04-timed-calculator
 *
 * This script performs a series of mathematical calculations from previous exercise on functions
 * using an array of functions.
 */

/**
 * Performs a sequence of calculations with delays using setTimeout.
 * Each calculation runs with a 3-second delay.
 *
 * @param {number} userNumber - The number to perform calculations on.
 * @returns {void}
 */
function calculator(userNumber) {
    const halfNumber = userNumber / 2;
    const squaredHalfNumber = halfNumber ** 2;
    const areaOfCircle = Math.PI * squaredHalfNumber;
    const percentage = (areaOfCircle / squaredHalfNumber) * 100;


    /**
     * Array of functions, each representing a step in the calculation process.
     * Each function, when executed, logs a specific calculation result.
     * 
     * @type {Function[]}
     */
    const steps = [
        () => console.log(`Half of ${userNumber} is ${halfNumber}.`),
        () => console.log(`The square of ${halfNumber} is ${squaredHalfNumber}.`),
        () => console.log(`The area for a circle with radius ${squaredHalfNumber} is ${areaOfCircle}.`),
        () => console.log(`${areaOfCircle} is ${percentage}% of ${squaredHalfNumber}.`)
    ];

    steps.forEach((step, index) => {
        setTimeout(step, index * 3000); // Each step delayed by 3 seconds
    });
}

// Calling the calculator 
calculator(10);
