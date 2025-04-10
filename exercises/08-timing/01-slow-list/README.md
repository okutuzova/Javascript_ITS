# Exercise: 01-slow-list

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Create an array that holds a list of 30 items (food, books, etc.)
● Print one item of the list every second until the list is completely printed
○ Use setInterval to achieve this goal
○ Do the same thing using setTimeout


 
## Solution
I created two files with different approaches.
- `setIntervalsolution.js` - using setInterval  
- `setTimeoutsolution.js` - using setTimeout  
In the `setIntervalsolution.js` file I used `setInterval` function to print one item of the list every second until the list is completely printed.
First I created an array with 30 items. Then i initialized a variable `initial` to 0. This is the index of the first item in the array.  
To the constant `intervalId` I assigned a function `setInterval`. This function takes an arrow function as the first parameter, and the interval of 1000 milliseconds as the second. Inside the anonymous arrow function the array element (a book) is printed to the console. After each iteration the `initial` variable is incremented by 1. This is the index of the next item in the array. Then I introduced an if statement that checks if the iterations have reached the end of the array. If the `initial` variable is equal to the length of the array, the `clearInterval` function is called with the `intervalId` as the parameter. This stops the interval. No need for a separate call of a function.   

The main drawback of this approach is that if the processing of the array takes more time than the interval, the next item will be printed after the interval has passed. 
In the `setTimeoutsolution.js` file I used `setTimeout` function to print one item of the list every second until the list is completely printed. In this case I created a function `printWithTimeout`
that takes a current index of the element as a parameter. The function returns undefined as no explicit return has been specified.
Inside the function I implemented an if statement that checks if the current index is less than the length of the array. If true, the current element is logged to the console. Then with the function `setTimeout` the `printWithTimeout` function is invoked with the next index as a parameter. This is the recursion. The recursion is stopped when the current index is equal to the length of the array.  
In this case each timeout is set independently. 

In the `index.html` file I included both solutions, however, commenting out the one that is not used. This is done in order to avoid the execution of two solutions at the same time. For checking the second solution, comment out the `setInterval.js` file and uncomment the `setTimeout.js` file.

## Files:
- `index.html` - Basic HTML structure.
- `setInterval.js` - JavaScript.
- `setTimeout.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
