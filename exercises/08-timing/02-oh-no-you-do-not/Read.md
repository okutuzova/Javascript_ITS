# Exercise: 02-oh-no-you-don't

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Write a function “useful” that does something useful in Javascript  
● Schedule it to run after 10 seconds  
● Write another function that cancels the scheduling of the first function  
● Use the second function to cancel the first one after 5 seconds and output 
‘function cancelled’ to the console  


 
## Solution
In the `main.js` file I created a `useful` function that outputs a message to the console. Then to a constant that plays the role of a timer identifier I assigned a setTimeout function that invokes the `useful` function with a delay of 10 seconds. 
Then I created a function `cancelUsefulTimeout` that clears the timer set for the `useful` function and logs a message to the console. 
Finally, I set a timer to invoke the `cancelUsefulTimeout` function with a delay of 5 seconds.
The sequence of events is as follows:
1. 0 seconds: The program starts. setTimeout is p[lanning to invoke the `useful` function after 10 seconds.
2. 5 seconds: The `cancelUsefulTimeout` function is invoked, which clears the timer set for the `useful` function.
3. 10 seconds: nothing happens as the function is already cancelled.

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
