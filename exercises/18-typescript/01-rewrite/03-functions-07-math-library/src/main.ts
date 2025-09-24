/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 07-math-library
 * 
 * This script contains a library of math functions rewritten in TypeScript.
 */

/**
 * Calculates a squared number. Logs the result in the output. 
 * @param {number} userNumber - a number.
 * @returns {number} result - a rounded square root of the userNumber
 */
function squareNumber(userNumber: number): number {
    let result = userNumber ** 2;
    console.log(`The result of squaring the number ${userNumber} is ${result}.`);
    return result;    
}

/**
 * Divides a number by 2. Logs the result in the output. 
 * @param {number} userNumber - a number.
 * @returns {number} result - a userNumber divided by 2.
 */
function halfNumber(userNumber: number): number {
    let result = userNumber / 2;
    console.log(`Half of ${userNumber} is ${result}.`);
    return result;
}

/**
 * Calculates what percent the first number represents of the second number. Logs the result in the output. 
 * @param {number} numberOne 
 * @param {number} numberTwo 
 * @returns {number} result - percentage of the 1st number in the 2nd number.
 */

function percentOf(numberOne: number, numberTwo: number): number {
    let result = numberOne * 100 / numberTwo;
    console.log(`${numberOne} is ${result}% of ${numberTwo}.`);
    return result;
}

/**
 * Calculates the area of a circle. Logs the result in the output. 
 * @param {number} radius 
 * @returns {number} result - area of a circle.
 */
function areaOfCircle(radius: number): number {
    let circleArea = Math.PI * radius ** 2;
    console.log(`The area for a circle with radius ${radius} is ${circleArea}. The rounded result is ${Math.round(circleArea * 100) / 100}.`);
    return circleArea;
}

squareNumber(5);
halfNumber(9);
percentOf(2, 4);
areaOfCircle(2);





