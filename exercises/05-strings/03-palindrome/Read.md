# Exercise: 06-easy-multiplication

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Write a for loop that will iterate from 0 to 10.    
● For each iteration of the for loop, it will multiply the number by 9 and log 
the result (e.g. "2 * 9 = 18").  
● Bonus: Use a nested for loop to show the tables for every multiplier from 1 
to 10 (100 results total).  


 
## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file that contains 3 for loops. The first one is a simple loop that iterates from 0 to 10 and logs the result of multiplication by 9.  
- The second loop logs the results of multiplication for every multiplier from 1 to 10. There are two loops - an outer that iterates through 1 to 10 that is the first operand, an inner loop that iterates from 1 to 10 as the second operand and logs therefore 10 results for each multiplier of the outer loop. The results are grouped by 10 and divided by an empty row that preceeds the inner loop.  
- The third loop contains two nested loops. The first outer loop `for (let start = 1; start <= 10; start += 5)` receives a variable __start__ that indicates from which table the group of table starts. 'start' equals 1, and 'start' equals 6 (+=5) as this loop iterates only twice - first group (1, 2, 3, 4, 5); second group (6, 7, 8, 9, 10).
- Middle nested loop `for (let i = 1; i <= 10; i++)` is the second operand (1×1, 1×2, 1×3 ... 1×10). When i=1, it calculates 1×1, 2×1, 3×1. When i=2, it calculates 1×2, 2×2, 3×2 etc.  
- Next an empty row is declared. In this row we put 5 expressions per row. For each new iteration of the middle loop, it empties itself.
- Inner loop `for (let j = start; j < start + 5; j++)`. 'j' is the first operand. When start = 1, j becomes 1, 2, 3, 4, 5 (first group).
When start = 6, j becomes 6, 7, 8, 9, 10 (second group).
- This loop has the following statement `row += '${j} * ${i} = ${String(j * i).padStart(2)}\t';`


Details:

`${j} * ${i}` — multiplication expression (for example, 2 * 3).  
`${j * i}` — result of (2 * 3 = 6).  
`String(j * i).padStart(2)` — Transforms the result into a string, padStart(2) makes numbers occupy minimum two characters, (for example, 6 becomes " 6", to keep the indentation).  
`\t` — adds tabulation between columns.  
 `console.log(row);` logs a row after all 5 columns are elaborated.  




## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript for a function helloWorld.
- `Read.md` - exercise requirements and solution. 
