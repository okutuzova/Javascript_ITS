# Exercise: 07-math-library

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements 
● Write a function called squareNumber that will take one parameter (a 
number), square that number, and return the result. It should also log a 
string like "The result of squaring the number 3 is 9."  
● Write a function called halfNumber that will take one parameter (a 
number), divide it by 2, and return the result. It should also log a string like 
"Half of 5 is 2.5."  
● Write a function called percentOf that will take two numbers, figure out 
what percent the first number represents of the second number, and return 
the result. It should also log a string like "2 is 50% of 4."  
● Write a function called areaOfCircle that will take one parameter (the 
radius), calculate the area based on that, and return the result. It should also 
log a string like "The area for a circle with radius 2 is 
12.566370614359172."  
● Bonus: round the result so there are only two digits after the decimal  

## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file to write four functions. I created the functions __squareNumber__,  __halfNumber__, __percentOf__, __areaOfCircle__ that take either one or two parameters and perform such mathematical operations as calculating a squared number, dividing a number by 2, calculating the percent of a number with reference to the second number, calculatng an are of a circle. All the functions return the results and log them in output. All functions are preceded by an "export" keyword that allows to reuse the functions in another file.  

- For training purpose I created a separate file __arrow-functions.js__ where repeated the same functions in an arrow form. This file is not used further.  

- Since Node.js is used, I will have to explicitly indicate that I am using ESM - ES module for export/import. Therefore, with a command npm init -y, a "package.json" file in the root folder is created. In this file I added "type": "module" line. In order to make the code work in a browser console, in the "idex.html" file I added  "<script type="module" src="./script/main.js"></script>". If the index.html file is opened from the folder containing the project, a CORS-policy constraint is encountered. If the live server of the VS Code is used, "index.html" file is executed correctly. 

- In order to check the import of the functions I created a file __import-check.js__. The first line of the file includes a keyword "input", curly brackets with the functions' names inside, and a path to the file "main.js" from where the functions are exported. 

- I created a JSDoc description of the functions and used a command "jsdoc -d JSDoc main.js" in order to create a folder with JSDoc documnetation. 

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript, functions only.
- `arrow-functions.js` - functions in arrow form. 
- `import-check.js` - imported functions calls.
- `Read.md` - exercise requirements and solution. 
- JSDoc folder with documentation.