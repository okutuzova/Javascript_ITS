# Exercise: 06-mixup

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Create a function called mixUp  
● It should take in two strings, and return the concatenation of the two strings (separated by a 
space) slicing out and swapping the first 2 characters of each  
● You can assume that the strings are at least 2 characters long  


 
## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` with the first function that splits two input strings into two parts:
The first two characters (syllable) from each string.
The remaining characters after the first two characters.
It then swaps the first two characters between the two strings and combines them into a new string, with the swapped parts separated by a space.
Output: A new string with the swapped characters.
- The second function has the same purpose, but it is slightly optimized.Instead of storing intermediate variables for the parts of the strings, it directly slices and concatenates the necessary parts in one line. 



## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript for a function helloWorld.
- `Read.md` - exercise requirements and solution. 
