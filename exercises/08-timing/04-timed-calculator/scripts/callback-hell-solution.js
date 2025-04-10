/**
 * @file: callback-hell-solution.js
 * @author: Olga Kutuzova
 * Exercise 04-timed-calculator
 *
 * This script performs a series of mathematical calculations from previous exercise on functions
 * using nested setTimeout methods.
 */

/**
 * Performs a sequence of calculations on a given number:
 * 1. Finds half of the number.
 * 2. Squares the half.
 * 3. Calculates the area of a circle using the squared half as the radius.
 * 4. Computes what percentage the area is of the squared half.
 * Each calculation is delayed using setTimeout.
 *
 * @param {number} userNumber - The number to perform calculations on.
 */
function calculator(userNumber) {
    let halfNumber = userNumber / 2;
    console.log(`Half of ${userNumber} is ${halfNumber}.`);

    setTimeout(() => {
        let squaredHalfNumber = halfNumber ** 2;
        console.log(`The square of ${halfNumber} is ${squaredHalfNumber}.`);

        setTimeout(() => {
            let areaOfCircle = Math.PI * squaredHalfNumber;
            console.log(`The area for a circle with radius ${squaredHalfNumber} is ${areaOfCircle}`);

            setTimeout(() => {
                let percentage = (areaOfCircle / squaredHalfNumber) * 100;
                console.log(`${areaOfCircle} is ${percentage}% of ${squaredHalfNumber}`);
            }, 3000); // Waiting 3 seconds before calculating the percentage

        }, 3000); // Waiting 3 seconds before calculating the area

    }, 3000); // Waiting 3 seconds before calculating the square
}

// Calling the calculator 
calculator(10);
