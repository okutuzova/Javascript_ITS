/**
 * @file keys-solution.js
 * @author Olga Kutuzova
 * @description 02-calculate
 *
*/

const squareInput = document.querySelector('#square-input');
const halfInput = document.querySelector('#half-input');
const percentageInput = document.querySelector('#percentage-input');
const areaInput = document.querySelector('#area-input');
const calculateButton = document.getElementById('square-button');


squareInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && squareInput.value) {
      let result = squareNumber(squareInput.value);
      squareInput.value = ''; 
      addResultToDiv(result); 
    }
  });

  
halfInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && halfInput.value) {
      let result = halfNumber(halfInput.value);
      halfInput.value = ''; 
      addResultToDiv(result); 
    }
  });


percentageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && percentageInput.value) {
      let result = percentOf(percentageInput.value, 100);
      let tempPercentageInput = percentageInput.value;
      percentageInput.value = ''; 
      addResultToDiv(`${tempPercentageInput} is ${result}% of 100.`); 
    }
  });

areaInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && areaInput.value) {
      let result = areaOfCircle(areaInput.value);
      let tempAreaInput = areaInput.value;
      areaInput.value = ''; 
      addResultToDiv(`The area for a circle with radius ${tempAreaInput} is ${result}.
//         The rounded result is ${Math.round(result * 100) / 100}.`); 
    }
  });



function addResultToDiv(result) {
    document.getElementById('solution').textContent = result;
}


/**
 * Calculates a squared number. Logs the result in the output. 
 * @param {number} userNumber - a number.
 * @returns {number} result - a rounded square root of the userNumber
 */
function squareNumber(userNumber) {
    let result = userNumber ** 2;
    console.log(`The result of squaring the number ${userNumber} is ${result}.`);
    return result;    
}

/**
 * Divides a number by 2. Logs the result in the output. 
 * @param {number} userNumber - a number.
 * @returns {number} result - a userNumber divided by 2.
 */
function halfNumber(userNumber) {
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

function percentOf(numberOne, numberTwo) {
    let result = numberOne * 100 / numberTwo;
    console.log(`${numberOne} is ${result}% of ${numberTwo}.`);
    return result;
}

/**
 * Calculates the area of a circle. Logs the result in the output. 
 * @param {number} radius 
 * @returns {number} result - area of a circle.
 */
function areaOfCircle(radius) {
    let circleArea = Math.PI * radius ** 2;
    console.log(`The area for a circle with radius ${radius} is ${circleArea}. The rounded result is ${Math.round(circleArea * 100) / 100}.`);
    return circleArea;

}
