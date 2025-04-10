# Exercise: 03-dog-age-calculator

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Calculate a puppy’s age in dog years  
● Write a function named calculateDogAge that:  
○ takes 1 parameter: the dog's age in human years  
○ calculates the dog's age based on the conversion rate of 1 human year to 7 dog years  
○ outputs the result to the screen like so: "Your dog is NN years old in dog years!"  
● Call the function three times with different sets of values  
● Bonus:  
○ Add another parameter to the function that takes the conversion rate of human to dog years  

## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file to define variables and output the dog's age to the console.
- I created a function __calculateDogAge__ that takes one parameter and returns void. The function takes a number which represents the age of a dog and multiplies it by 7.
- Below I created a bonus function __calculateDogAgeWithRate__ that takes two parameters and multiplies them, then stores in a variable. The variable has the block scope as it is declared with let keyword. 
- I created an arrow function __dogsAgeConvertArrow__  and an anonymous function __dogAgeCountAnonym__. In both functions an additional variable is not needed, thus they both take less memory. 
- For educational purposes I decided to compare the time needed for four different functions execution. Therefore, I added console.time("Execution Time"); and console.timeEnd("Execution Time"); for three functions - usual function  __calculateDogAgeWithRate__, arrow function __dogsAgeConvertArrow__ and anonymous function __dogAgeCountAnonym__. I also added an anonymous Immediately Invoked Function Expression, IIFE.
- I executed my file with a command "node main.js" in the Terminal of VS Code. The results show that a usual function is executed in  **0.273ms**, an arrow function in **0.21ms**, an anonymous function in **0.264ms**, IIFE in **0.151ms**.
- Execution in a browser console showed different results. A usual function is executed in **0.07ms**, an arrow function in **0.08ms**, an anonymous function in **0.02ms**, IIFE in **0.07ms**
- I concluded that an arrow function works faster, but might be confusing to read if the logic is complicated if used on server side. However, usual functions work faster in browser. IIFE works extremely quickly in both environments.
- The output is displayed in the browser's console when the page is loaded.
- I created a JSDoc description of the functions and used a command "jsdoc -d JSDoc main.js" in order to create a folder with JSDoc documnetation. 

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript 
- `Read.md` - exercise requirements and solution. 
- JSDoc folder with documentation.