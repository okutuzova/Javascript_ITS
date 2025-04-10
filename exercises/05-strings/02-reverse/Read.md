# Exercise: 02-reverse

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Write a JavaScript function called reverse which has one parameter, a string, and which returns 
that string in reverse  
● For example, the call reverse("foobar") should return the string "raboof"

 
## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file that contains a function that takes one parameter and returns a reversed string. In the function a variable __result__ is initialized (an empty string), then a for loop is implemented. The loop iterates through the initial string in a reverse order, takes a single character  with a string charAt method and adds to the empty string.  
- In the `solution-2.js` file the array methods are use to create a function of the same functionality. Inside the function that takes one parameter a variable result is initialized. The initial string is split with the split() method of a string, that returns an array. Then to the array created a reverse() array method is applied, followed by the join array method that returns a new string with all array elements joined. 
- In the `solution-3.js` file I included another option to implement the required functionality. Inside the function a variable containing an empty string is initialized. The for loop starts from the end of the initial string and using a slice method takes character by chartacter and adds it to the empty string. 
 



## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript with the function.
- `solution-2.js` - JavaScript with the function.
- `solution-3.js` - JavaScript with the function.
- `Read.md` - exercise requirements and solution. 

