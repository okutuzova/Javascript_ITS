# Exercise: 04-timed-calculator

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● We will modify ‘Calculator’ exercise from the lesson about functions  
● Rewrite the last function that performs all 4 operations so that there is a 
delay of 3 seconds between one operation and the next  


 
## Solution
In the `main.js` file I created a function `calculator` that takes a number as a parameter. To the four constants I assigned the mathematical operations from the previous exercise for the functions unity. 
Then I have created an array of functions that simply log out the results of the operations. Then I have used a `forEach()` method of the array to iterate over it. On every iteration the setTimeout() is called. As a delay I have set the index of the function of the array multiplied by 3000. Therefore, the order of the operations will be as follows: 
Here's what happens in real-time:
- The first operation `console.log("Half of the number")` runs immediately, as 0 * 3000 = 0.  
- The second operation `console.log("Square of half the number")` runs after 3 seconds, as 1 * 3000 = 3000.   
- The third operation `console.log("Area of circle")` runs after 6 seconds, as 2 * 3000 = 6000.  
- The fourth operation `console.log("Percentage calculation")` runs after 9 seconds, as 3 * 3000 = 9000.  

This approach avoids the nested callbacks and makes the code simplier and more understandable. 

In the `callback-hell-solution.js` file I have created a function `calculator` that takes a number as a parameter. In this solution the `setTimeout()` are nested one into another. The code becomes more complex and difficult to read. In complex projects it is advised to avoid nested callbacks.


## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `callback-hell-solution.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
