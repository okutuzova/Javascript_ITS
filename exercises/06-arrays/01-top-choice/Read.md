# Exercise: 01-top-choice

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Create an array to hold your top choices (colors, pets, books, whatever).  
For each choice, log to the screen a string like: "My #1 choice is blue."  
Bonus: Change it to add the correct number suffix, e.g. "My 1st choice, "My 2nd
choice", "My 3rd choice", "My 4th choice", etc.  

 
## Solution
- I created an `index.html` file with basic HTML structure.
- In the `main.js` file an array containing preferred books is created. Below __.forEach()__ array method is implemented. This is a built-in JavaScript method used to iterate  over each element in an array. It takes a callback function as an argument, which is executed once for every element in the array.  
The callback function receives: the current element (in this case, book) and the index of the current element in the array (starting from 0). 

The callback arrow function used here is:

``(book, index) => {
console.log(`My #${index + 1} choice is ${book}.`);
}``
  
book → Represents the current book in the iteration.  
index → Represents the index of the current book in the array.  
index + 1 → Since JavaScript array indices start from 0, adding 1 makes the numbering more user-friendly (1-based instead of 0-based).  
The console.log() prints a formatted string to the console.  
The template literal (using backticks) is used to include variables inside the string dynamically.

- In the `bonus.js` file a function __addSuffix(bookIndex)__ is added. In the function a constant containing an array of suffices for the first three numbers is created. The constants lastDigit and lastTwoDigits capture the index.  
As for the numbers 11, 12, and 13 the suffixes [st, nd, rd] are not applicable, their cases must be checked separately. For this purpose an if statement is added that checks if index is between 11 and 13 inclusive. In this case [th] suffix is added and a formatted string is returned. Finally, the function returns a string that contains a book index + 1 (since the array starts with 0 enumeration) and a corresponding index for the cases [1st, 2nd, 3rd] addressing an element of the array by the index (square brackets lastDigit - 1). An alternation operator is used for the rest of the cases to return the [th] suffix. The foreach loop remained as in the main exercise.  

- In the `bonus-solution-01.js` file another approach is implemented. First, 1 is added to the book index, as array elements enumeration starts with 0. Then the number is converted to the string with __.toString()__ method.  
For the special casese of 11, 12, and 13 the if statement is used in which with the help of alternation operator the string is checked with __.endsWith()__ string method. Finally, the switch taking the last character of the string with __.slice()__ string method checks the cases for [1st, 2nd, 3rd] and sets default for the rest of cases. 




## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `bonus.js` - JavaScript.
- `bonus-solution-01.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
