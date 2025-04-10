# Exercise: 07-fixstart

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Create a function called fixStart
● It should take a single parameter, a string, and return a version where all occurrences of its 
first character have been replaced with '*', except for the first character itself 
● You can assume that the string is at least one character long


 
## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` with the required function that operates as follows.
The first character of the string is stored in the variable firstChar using charAt(0). The rest of the string (excluding the first character) is accessed using slice(1). Then, replaceAll is used to replace every occurrence of the firstChar in that portion of the string with *. The original first character is then concatenated with the modified string (with * in place of other occurrences of the first character).
- In the file `solution-regexp.js` the process is different.
A regular expression (regex) is created with new RegExp(firstChar, 'g'). The g flag ensures the regular expression matches all occurrences of the first character in the string (after the first character). The string is processed using slice(1) to exclude the first character. Then, replace(regex, '*') replaces all occurrences of the first character with * in the rest of the string. Finally, the function concatenates the unchanged first character with the modified rest of the string and returns the result.

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript for a function fixstart.
- `solution-regexp.js` - JavaScript for a function fixstart.
- `Read.md` - exercise requirements and solution. 
