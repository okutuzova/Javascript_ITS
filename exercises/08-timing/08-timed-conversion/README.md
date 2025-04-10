# Exercise: 08-timed-conversion

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● We will modify ‘Temperature conversion’ exercise from the lesson about 
functions  
● Call celsiusToFahrenheit on temperatures from 0 to 100 so that one 
temperature is printed to the console every second  
○ Use setInterval to achieve this goal.  
○ Do the same thing using setTimeout.  


 
## Solution
In the file `main.js` a function `celsiusToFahrenheit()`  converts a given temperature from Celsius to Fahrenheit. It starts at **0°C** and increases by **1°C** every second. The script stops automatically when it reaches **100°C**.

Function `celsiusToFahrenheit()` converts **Celsius** to **Fahrenheit** using the formula and logs the result to the console. `setInterval()` schedules `celsiusToFahrenheit()` every 1 second. Once 100C is reached, 'Done' is logged.

In the second solution that uses setTimeout() instead of setInterval() the recursion in the function `printWithTimeout(index)` is used to create a loop-like behavior. The function calls itself every 1 second while index < 100. When 100°C is reached, it logs "Done" and stops execution.
This approach is better because it is more flexible. If the function takes longer to execute than the interval (e.g., due to delays or heavy computations), multiple calls can overlap, causing timing drift. With recursion (setTimeout()), each call waits for the previous one to finish before scheduling the next, ensuring precise timing.



## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `setTimeoutSolution.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
