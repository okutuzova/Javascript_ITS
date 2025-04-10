# Exercise: 05-money

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Create a function called money  
● It should take a single parameter, an amount, and return '<amount> dollars'  
● Add a smiley at the end if the amount is 1 million. Deal with edge cases    
Bonus  
add to the function the ability to convert dollars to euros
money(10): 10 dollars are 9.31 euros  


 
## Solution
- I created an `index.html` file with basic HTML structure.
- In the `main.js` file the function uses a switch statement to evaluate the amount and determine the appropriate string to return:
If the amount is exactly 1, it returns "1 dollar" (singular).
If the amount is exactly 1,000,000, it returns "1,000,000 dollars ;)" (with a special emoticon).
If the amount is 0, it returns "No money".
For all other amounts, it returns the number followed by the word "dollars" (plural). 

## Bonus Solution
The function first calculates the equivalent amount in euros by multiplying the amount by 0.92 (conversion rate from dollars to euros).  
The result is then rounded to two decimal places using the .toFixed(2) method.  
The function uses a switch statement to handle special cases and formats the result accordingly:  
Case 1: If the amount is 1 dollar, it returns "1 dollar is X euros", where X is the calculated euro amount.  
Case 1,000,000: If the amount is 1 million dollars, it returns "1000000 dollars are X euros;)", with a smiley face emoticon.  
Case 0: If the amount is 0, it returns "No money", indicating the absence of money.  
Default Case: For all other amounts, it returns the formatted string with the amount of dollars followed by its euro equivalent.  

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript with a function.
- `bonus.js` - JavaScript with an additional function.
- `Read.md` - exercise requirements and solution. 
