# Exercise: 03-grade-master

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Write a function named assignGrade that:  
○ takes 1 parameter, a number score.  
○ returns a grade for the score, either "A", "B", "C", "D", or "F".  
● Call that function for a few different scores and log the result to make sure it 
works.  

 
## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file to write a function __assignGrade__ that takes one parameter numberScore. In the file `switch-function.js` I also created a function __assignGradeSwitch__ that uses a switch statement for the same purpose of returning the corresponding grade. 
If..else statement: when the interpreter elaborates the line with a function call, it goes to the first check __if (numberScore >= 90)__. If the argument does not correspond the condition, meaning it is False and therefore falsy, interpreter cotinues to the next check. 

Switch statement: interpreter checks every case as a logical statement. If no true value is found, the default statement will be executed. 

As the function __assignGrade__ is required in the exercise 07-grade-checker, the `package.json` file has been added, containing information that main.js file is a type: module. The respective changes to the `index.html`  file have been made. 



## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript for a function helloWorld.
- `Read.md` - exercise requirements and solution. 
- JSDoc folder with documentation.