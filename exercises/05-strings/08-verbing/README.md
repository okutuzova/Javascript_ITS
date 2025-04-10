# Exercise: 08-everbing

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Create a function called verbing  
● It should take a single parameter, a string. If its length is at least 3, it should add 'ing' to 
its end, unless it already ends in 'ing', in which case it should add 'ly' instead  
● If the string length is less than 3, it should leave it unchanged  


 
## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file that contains the function implementation. If the word is shorter than 3 characters, it remains unchanged. If the word already ends in "ing", "ly" is appended through concatenation mechanism.
If the word ends in "e", the "e" is removed before adding "ing", following common English grammar rules. Otherwise, "ing" is simply added to the end of the word. Several if conditions are provided to ensure the correct execution.

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
