# Exercise: 05-one-to-many

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Write a function named oneToMany() that:  
○ takes 2 parameters, a noun and a number.  
○ returns the number and pluralized form, like "5 cats" or "1 dog".  
● Call that function for a few different scores and log the result to make sure it 
works.  
● Bonus: Make it handle a few collective nouns like "sheep" and "geese".  

 
## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file to write a function __oneToMany__ that takes two parameters - a noun and a number and checks if a noun needs to take a plural form. An if statement is used with a first condition checking the case when a number equals 1 and no change to the noun is needed. In all other cases and 's' is added to the noun. The function is tested on 4 cases, including passing a 0 to the function.   

- An additional function __oneToManyCollectiveNounsIncluded__ was created. Still the if statement is used, but in this function an else condition includes a nested if statement that checks if a passed argument belongs to one of the collective nouns that do not take a plural form. THis function is also tested with several calls.   

- For practice purposes one more function was created named __oneToManyCollectiveNounsIncludedSwitch__. This function instead of a nested if statement to handle collective nouns got a switch that includes different collective nouns cases, a break and a default that will return a pluralized form. 



## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript for a function helloWorld.
- `Read.md` - exercise requirements and solution. 
- JSDoc folder with documentation.