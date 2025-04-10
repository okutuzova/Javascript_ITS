# Exercise: 03-weekday

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Write a function getWeekDay(date) to show the weekday in short format: 
‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’  
● Write another function that does the same in Italian  
● Add a language parameter to the function that accepts ‘en’ or ‘it’ and 
outputs the day in the correct language  



## Solution
In the `main.js` file, I have created three functions:  
- `getWeekDay(date)` - returns the weekday in short format: 'MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'.  
- `getWeekDayInItalian(date)` - returns the weekday in Italian short format: 'LU', 'MA', 'ME', 'GI', 'VE', 'SA', 'DO'.  
- `getDateInEngOrInIt(date, language)` - returns the weekday in the specified language.

The first two functions return the corresponding element of an array, receiving the day from the passed date. The third function handles the switch with three cases: 'en' and 'it', default.  

In the `optimized-solution.js` file, I have created a single function that takes the date and language as parameters. By default the language parameter is set to English.
In the function, I have created an object `days` that consists of two properties: 'en' and 'it'. Each property contains an array of days in English and Italian, respectively. In the return statement, the optional chaining operator `?.` is used to access the array of days for the specified language. If the language is not found, the default value is used. First, the respective day in the array is acessed through the object property. Optional chaining ( ?. ) is a safe way to access nested object properties, even when an intermediate property doesn't exist. If the property does not exist, JAvaScript will return undefined instead of throwing an error. The loggical OR (||) operator is used to return the default value if the property is not found.



## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `optimized-solution.js` - JavaScript. 
- `Read.md` - exercise requirements and solution. 
