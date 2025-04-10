# Exercise: 01-big-numbers

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Write a function named greaterNum that:  
○ takes 2 parameters, both numbers.  
○ returns whichever number is the greater (higher) number.  
● Call that function 2 times with different number pairs, and log the output to 
make sure it works (e.g. "The greater number of 5 and 10 is 10.").  

## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file to write a function with 2 parameters.
- I created a function __greaterNum__ that takes two parameters and returns a greater number of two passed as arguments. The function also logs the output. The main purpose of the function is to compare two numbers. 
- I created a function __compareTypes__ that  compares types if the arguments passed upon calling the function. The ternary operator is used.
- Below I created an arrow function and assigned it it to a const. This function is comparing two numbers. However, the condition is not complete and covers only two cases - if a is greater than b or a is less than b. This comparison does not cover the equality case which leads to a wrong output.  
- I created another function and assigned it to a constant where equlity case is covered. The ternary operator with a nested condition is used. 

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript for storing variables and printing the fortune.
- `Read.md` - exercise requirements and solution. 
- JSDoc folder with documentation.