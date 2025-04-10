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

/**
 * Recursively calls itself every second to convert Celsius to Fahrenheit.
 * Starts from a given temperature and stops when it reaches 100°C.
 *
 * @param {number} index - The current temperature in Celsius.
 */
function printWithTimeout(index) {
    if (index === 100) {
      celsiusToFahrenheit(index);
      setTimeout(() => printWithTimeout(index + 1), 1000); // Calling the function recursively after 1 second
    }
  }

  printWithTimeout(0);