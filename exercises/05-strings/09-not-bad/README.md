# Exercise: 09-not-bad

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Create a function called notBad that takes a single parameter, a string  
● It should find the first appearance of the substring 'not' and 'bad'  
● If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 
'good' and return the result  
● If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original 
sentence  


 
## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file that contains a function replacing the phrase "not ... bad" with "good". The variables __notIndex__ and __badIndex__ are initialized. They recieve the index of "not" and "bad" in the string. If either "not" or "bad" is missing, or "bad" appears before "not", the function returns the original string. If "not" appears before "bad", the function constructs a new string:
Everything before "not" remains unchanged.  
The phrase "not ... bad" (including "not", "bad", and anything in between) is replaced with "good".
The remaining part of the string after "bad" is added unchanged.  
If "bad" appears before "not", no replacement is done.
If "not" and "bad" are separated by other words, the function still works correctly.
Only the first occurrence of "not ... bad" is replaced.


## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
