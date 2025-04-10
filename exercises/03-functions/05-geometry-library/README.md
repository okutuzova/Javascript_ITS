# Exercise: 05-geometry-library

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements 
● Create a function called calcCircumference:   
Pass the radius to the function  
Calculate the circumference based on the radius, and output "The circumference is NN"  
● Create a function called calcArea:  
Pass the radius to the function.  
Calculate the area based on the radius, and output "The area is NN"  

## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file to define variables and output the Circumference and Area of a circle.
- I created a function __calcCircumference__ that takes one parameter and returns void. The function takes a radius and calculates the circumference of a circle. Another function created is __calcArea__ that also takes a single parameter and outputs a string. 
- I created two arrow functions __calcCircumferenceArrow__ and __calcAreaArrow__,  two anonymous functions __calcCircumferenceAnonym__ and __calcAreaAnonym__, as well as two immediately invoked function expressions. All the functions take one parameter and output the result either the circle circumference or the circle area. 
- The output is displayed in the browser's console when the page is loaded. Otherwise, in the VS Code Terminal with a node main js command from the file directory. 
- I created a JSDoc description of the functions and used a command "jsdoc -d JSDoc main.js" in order to create a folder with JSDoc documnetation. 

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript 
- `Read.md` - exercise requirements and solution. 
- JSDoc folder with documentation.