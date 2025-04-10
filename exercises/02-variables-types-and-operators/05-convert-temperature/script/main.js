/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 05-convert-temperature
 * 
 * This script contains two functions that convert temperature to Fahrenheit and Celcius. 
 */

/**
 * Converts Celsius to Fahrenheit
 * @param {number} celsius The temperature in Celsius.
 * @returns  {number} The temperature converted to Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

/**
 * Converts Fahrenheit to Celsius
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @returns  {number} The temperature converted to Celsius.
 */
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Initialize a variable to store a temperature in Celsius
let celsius = 25;

// Convert Celsius to Fahrenheit
let fahrenheit = celsiusToFahrenheit(celsius);
//Log the conversion results
console.log(`${celsius}°C is ${fahrenheit}°F`);
console.log(`${fahrenheit}°F is ${fahrenheitToCelsius(fahrenheit)}°C`);