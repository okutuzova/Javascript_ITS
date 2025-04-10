# Exercise: 02-fortune-calculator

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Write a function named tellFortune that:  
○ Takes 4 parameters: number of children, partner's name, geographic location, job title.  
○ outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N 
kids."  
● Call that function 3 times with 3 different values for the arguments

## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file to initialize variables and output the fortune to the console.
- I created a JSDoc description of the function tellFortune and used a command "jsdoc -d JSDoc main.js" in order to create a folder with JSDoc documnetation. 
I created a function __tellFortune__ that takes four parameters and returns void. This function is useful if hoisting is needed. 
- Below I created an arrow function __myFortune__ with the same functionality. For an arrow function hoisting is not working. 
- I created an anonymous function __fortuneTeller__ in order to use a function out of the global scope. The functionality remains the same. 
- The output is displayed in the browser's console when the page is loaded.

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript for storing variables and printing the fortune.
- `Read.md` - exercise requirements and solution. 
- JSDoc folder with documentation.