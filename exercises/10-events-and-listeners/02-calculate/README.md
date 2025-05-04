# Exercise: 02-calculate

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Add inputs for half number, percentage and circle area  
● Use the functions from the previous calculator exercises  
● For each operation, create an event listener for the button, and when it's 
clicked, find the value of the appropriate input and show the result of the 
calculation in the solution div  
● Afterwards, change the code so that you respond to key presses so that the 
user doesn't have to click the button  


## Solution
The solution was implemented as follows:

- An `index.html` file contains a simple UI with four number inputs and a button.
- JavaScript logic is handled in `main.js` (or `keys-solution.js`), which:
  - Reads values from each input field
  - Uses four utility functions:
    - `squareNumber()`
    - `halfNumber()`
    - `percentOf()`
    - `areaOfCircle()`
  - Updates the results dynamically in the page.
`main.js` file contains the script handling mouse click events. `keys-solution.js` file contains the script handling keyboard events.
- JSDoc annotations are used to improve code readability and development experience.



 


## Files:
- `index.html` - main page.
- `main.js` - external javascript file.
- `README.md` - exercise requirements and solution. 
