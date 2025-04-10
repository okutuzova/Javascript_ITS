/**
 * @file main.js
 * @author Olga Kutuzova
 * @description 08-timed-conversion
 * This script continuously converts Celsius to Fahrenheit every second,
 * starting from 0°C and increasing by 1°C each time, until it reaches 100°C.
 * When the conversion reaches 100°C, the process stops, and "Done" is logged.
 */

/**
 * Converts a given temperature from Celsius to Fahrenheit and logs the result.
 *
 * @param {number} celsiusTemperature - The temperature in degrees Celsius.
 */
function celsiusToFahrenheit(celsiusTemperature) {
    let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
    console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);
}

/** @type {number} The starting temperature in Celsius. */
let initial = 0;

/** 
 * @constant {number} intervalId - The ID of the interval timer. 
 * Used to clear the interval when reaching 100°C.
 */
const intervalId = setInterval(() => {
      celsiusToFahrenheit(initial);
      initial += 1;
      // Stop the interval when the temperature reaches 100°C
      if (initial === 100) {
          console.log('Done');
          clearInterval(intervalId);
    }
  }, 1000);
  
