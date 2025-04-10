 /**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 06-temperature-conversion
 * 
 * This script converts temperatures from Celsius to Fahrenheit and vice versa.
 */

 
 
 // Functions that take no parameters. Variables are stored inside the function.
 function celsiusToFahrenheit() {
    let celsiusTemperature = 25;
    let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
    console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);
  }

console.log("This is celsius to fahrenheit");
celsiusToFahrenheit();


function fahrenheitToCelsius() {
    let fahrenheitTemperature = 77;
    let celsiusTemperature = (fahrenheitTemperature - 32) * 5/9;
    console.log(`${fahrenheitTemperature}°F is ${celsiusTemperature}°C`);
}

console.log("This is fahrenheit to celsius");
fahrenheitToCelsius();


 // Functions that take one parameter. Parameter will have a function scope.

/**
* Converts Celsius to Fahrenheit
* @param {number} celsius - The temperature in Celsius.
* @returns {number} The temperature converted to Fahrenheit.
*/
 function celsiusToFahrenheitParameter(celsius=25) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheit}°F`);
    return fahrenheit;
  }

console.log("This is celsius to fahrenheit - a function with a default parameter");
celsiusToFahrenheitParameter();


/**
* Converts Fahrenheit to Celsius
* @param {number} fahrenheit - The temperature in Fahrenheit.
* @returns {number} The temperature converted to Celsius.
*/
function fahrenheitToCelsiusParameter(fahrenheit = 77) {
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius}°C`);
    return celsius;
}

console.log("This is fahrenheit to celsius - a function with a default parameter");
fahrenheitToCelsiusParameter();


// Arrow function
console.log("This is an arrow function converting Celsius to Fahrenheit");
const celsiusToFahrenheitArrow = (celsius=25) => console.log(`${celsius}°C is ${(celsius * 9/5) + 32}°F`);

celsiusToFahrenheitArrow();

// Anonymous function
const fahrenheitToCelsiusAnonym = function (fahrenheit = 77) {
    console.log(`${fahrenheit}°F is ${(fahrenheit - 32) * 5/9}°C`);
};

console.log("This is an anonymous function converting Fahrenheit to Celsius");
fahrenheitToCelsiusAnonym();


console.log("This is an Immediately Invoked Function Expression");

//IIFE
(function(celsius) {
    console.log(`${celsius}°C is ${(celsius * 9/5) + 32}°F`);
})(25); 