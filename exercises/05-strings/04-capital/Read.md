# Exercise: 04-capital

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Write a JavaScript function called capital which has one parameter, a string, and which returns 
that string with the first letter capitalized  
● For example, the call capital("hello world") should return the string "Hello world"  
Bonus  
Modify the function so that it capitalizes each word. capital2("my name is john") should return the 
string "My Name Is John".

 
## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file that contains a function to capitalize the first letter of a string. 
- charAt(0): This method returns the character at the first position (index 0) of the string.  
- toUpperCase(): This method converts the character to uppercase.  
- slice(1): This method returns a new string from the second character to the end (index 1 onwards). It doesn’t modify the original string.
The function concatenates the uppercase first letter with the rest of the string.  
## Solution Bonus
- In the `bonus.js` three different approaches to solving the task are presented.   
1. The string is split into an array of words using the .split(' ') method.
Each word’s first character is capitalized, and the rest of the word remains unchanged. The capitalized words are joined together with a space between them, and any trailing space is removed using .trimEnd().  
2. The string is split into words. Each word is transformed by capitalizing its first letter using .map(). The words are then joined back into a single string with spaces using .join(' ').  
3. The regular expression /\b\w/g matches the first letter of each word. The \b represents a word boundary, and \w represents any word character (letters, digits, or underscore). The replace() method applies the toUpperCase() function to each matched character, effectively capitalizing the first letter of each word.  
## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript with a function to capitalize the first letter of a string.
- `bonus.js` - JavaScript with functions to capitalize every word in the string. 
- `Read.md` - exercise requirements and solution. 
