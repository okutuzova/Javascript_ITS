# Exercise: 06-geometry-library

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements 
● Create a function called celsiusToFahrenheit:   
Store a celsius temperature into a variable.  
Convert it to fahrenheit and output "NN°C is NN°F".   
● Create a function called fahrenheitToCelsius:  
Now store a fahrenheit temperature into a variable.  
Convert it to celsius and output "NN°F is NN°C."  

## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file to define variables and output the the temperature conversion.
- I created two functions __celsiusToFahrenheit__ and __fahrenheitToCelsius__ that take no parameters and have variables stored inside the function. The variable is temperature in Celsius that is converted to Fahrenheit following a formula. 
- I created two functions that take a parameter as well, these functions return fahrenheit and celsius temperatures and make an output in console. 
- I created an arrow function __celsiusToFahrenheitArrow__,  an anonymous function __fahrenheitToCelsiusAnonym__, and an immediately invoked function expression. 
- The output is displayed in the browser's console when the page is loaded. Otherwise, in the VS Code Terminal with a node main js command from the file directory. 
- I created a JSDoc description of the functions and used a command "jsdoc -d JSDoc main.js" in order to create a folder with JSDoc documnetation. 

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript 
- `Read.md` - exercise requirements and solution. 
- JSDoc folder with documentation.