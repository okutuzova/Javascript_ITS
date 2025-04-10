# Exercise: 03-palindrome
## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Using your reverse() function from the previous exercise, write a simple function to check if a 
string is a palindrome  
● A palindrome is a word that reads the same backwards as forwards. For example, the word "madam" 
is a palindrome  
● Write a JavaScript function called isPalindrome which has one parameter, a string, and which 
returns true if that string is a palindrome, else false  
● For example, the call isPalindrome("madam") should return true, while isPalindrome("madame") 
should return false  

 
## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file that contains two functions. The first function is copied from the previous exercise and returns a reversed string. The second function takes one parameter and calling a reverse function returns true or false.  
- In the `solution-2.js` file array methods reverse and join are used. 
- In the `solution-3.js` file a two pointers algorithm is used. 
Two indices are initialized: i (starting from the first character) and j (starting from the last character). A flag palindromeString is set to true, assuming the string is a palindrome.
The while loop continues as long as i is less than j. It checks characters from both ends of the string.
If any mismatch is found between checkedString.charAt(i) and checkedString.charAt(j), the function sets palindromeString to false and breaks the loop.
Otherwise, the indices i and j are moved towards the middle (i.e., increment i and decrement j).
After the loop completes, the function returns the palindromeString flag. If it remains true, the string is a palindrome; otherwise, it's not.

- In the `solution-4.js` file I included another option to implement the required functionality. The function iterates over each character in the string (using the for...of loop) and adds each character to the front of the result string. 




## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript with the function.
- `solution-2.js` - array methods.
- `solution-3.js` - two pointers algorithm.
- `solution-4.js` - string concatenation.
- `Read.md` - exercise requirements and solution. 
