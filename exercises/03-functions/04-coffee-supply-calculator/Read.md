# Exercise: 04-coffee-supply-calculator

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements 
● Write a function named calculateSupply that:  
- takes 2 parameters: age, amount per day.  
- calculates the amount consumed for rest of the life (based on a constant max age).  
- outputs the result to the screen like so: "You will need NN cups of coffee to 
last you until the age of X"  
● Call that function three times, passing in different values each time  
● Bonus:   
- Calculate in liters, accepting floating point values for amount per day (0.3 liters of coffee)  
- Round the result to a round number  

## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file to initialize variables and output the amount of coffee.
- I created a function __calculateSupply__ that takes two parameters and returns void. The function takes current age of a user and a number of cups of coffee consumed per day. I put the constant maxAge inside the function to avoid polluting the global scope. A bonus function includes calculation with float numbers and Math.round of a final result. 
- I created an arrow function __calculateCoffeeArrow__  and an anonymous function __alculateCoffeeAnonym__. In both functions I pass three parameters to the functions, with the last one set to 99 years by default. 
- I also added an IIFE, passing three parameters, but when the function is invoked I changed the default value of maxAge that also executed correctly.
- The output is displayed in the browser's console when the page is loaded. Otherwise, in the VS Code Terminal with a node main js command from the file directory. 
- I created a JSDoc description of the functions and used a command "jsdoc -d JSDoc main.js" in order to create a folder with JSDoc documnetation. 

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript 
- `Read.md` - exercise requirements and solution. 
- JSDoc folder with documentation.