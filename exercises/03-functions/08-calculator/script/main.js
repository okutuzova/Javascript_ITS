/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 08-calculator
 * 
 * This script calculates four operations: half of the number, 
 * square of the number, area of the circle and percentage of 
 * the area of the circle in the square of the half of the number.
 */

import { squareNumber, halfNumber, percentOf, areaOfCircle } from '../../07-math-library/script/main.js';

/**
 * Calculates performing four operations . 
 * @param {number} userNumber - a number.
 * @returns {number} result - a rounded square root of the userNumber
 */
function calculateMath(userNumber) {
    let resultHalfNumber = halfNumber(userNumber);
    let resultSquarePreviousNumber = squareNumber(resultHalfNumber);
    let resultAreaOfCircle = areaOfCircle(resultSquarePreviousNumber);
    let finalResult = percentOf(resultAreaOfCircle, resultSquarePreviousNumber);
    
    return {resultHalfNumber, resultSquarePreviousNumber, resultAreaOfCircle, finalResult};      
}

calculateMath(5);


