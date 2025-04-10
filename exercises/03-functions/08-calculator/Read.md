# Exercise: 08-calculator

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements 
Write a function that will take one parameter (a number) and perform the 
following operations, using the functions you wrote earlier:
● Take half of the number and store the result
● Square the result of #1 and store that result
● Calculate the area of a circle with the result of #2 as the radius
● Calculate what percentage that area is of the squared result (#3)

## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file where I import the functions from the exercise 07-math-library. In order to use the import/export possibilities for node.js I  I added "type": "module" line in "package.json" file that was created using "npm init -y" at the root level of the folder "08-calculator". Also in order to make the code work in a browser console, in the "idex.html" file I added  "<script type="module" src="./script/main.js"></script>". 

- I created a function __calculateMath__ that takes one parameter. Inside the fucntion i assigned to different variables the four functions imported from the previous exercise. The function one by one store the results in the variables, on which the following function performs an operation. 

- I created a JSDoc description of the functions and used a command "jsdoc -d JSDoc main.js" in order to create a folder with JSDoc documnetation. 

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript 
- `Read.md` - exercise requirements and solution. 
- JSDoc folder with documentation.