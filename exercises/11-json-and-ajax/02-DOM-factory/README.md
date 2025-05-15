# Exercise: 02-DOM-factory

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Write your cars and factory objects as JSON strings in a variable
● Parse them with JSON.parse();
● Write each of them to the DOM in a list
○ You should use a styled CSS <ul><li> list with no bullets
○ Don’t use <table>

## Solution
The script works with two main JSON structures:
1. Factory Data - Contains information about the car manufacturing facility
2. Cars Data - An array of car objects with detailed specifications
JSON parsing is implemented with `JSON.parse()`. The parsed data is then used to populate the DOM.
The property `innerHTML` is used to update the content of the DOM elements with the details of the factory, and cars. For each car, a list item is created and appended to the DOM.

## Files:
- `index.html` - main page.
- `main.js` - external javascript file.
- `README.md` - exercise requirements and solution. 
