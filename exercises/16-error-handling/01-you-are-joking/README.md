# Exercise: 01-you-are-joking

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26

## Exercise Requirements 
Create a function called fetchRandomJoke() that fetches one random joke from a Random joke API and 
returns a promise that resolves with the text of the joke
Create a page that uses the function and displays the joke on the page or an error message if the 
promise rejects
The function
● Should use error handling to handle errors that may occur during the fetching
● Should return a Promise that resolves with the joke text, not the joke text itself
● If the fetch operation fails, the function should retry the operation up to 3 times before 
giving up
● If the fetch operation fails after 3 attempts, the function should reject the promise
Bonus
Create variants that can fetch jokes by number and by type

## Solutuion
The exercise is implemented using TypeScript and Webpack.
### Installation

Instructions for building and running the project:
```javascript
npm install
npm run start (for development server).
```

### Scripts
'main.ts'
The necessary styles including Bootstrap are imported.
The DOM elements are selected for the DOM manipulation. Type casting is used to ensure that the elements are not null.
Event Listeners on click event are added to the buttons. Fade-in animation with setTimeout is used.

The basic function is implemented in the file 'jokeCatcher.ts'. It returns a Promise that resolves with the joke text. The function uses error handling to handle errors that may occur during the fetching. If the fetch operation fails, the function retries the operation up to 3 times before giving up. If the fetch operation fails after 3 attempts, the function rejects the promise. In the file  'bonusJokeCatcher.ts' the function checks if an endpoint with 5 jokes is to be addressed or an endpoint with a programming joke.

### Files
- 'main.ts'
- 'jokeCatcher.ts'
- 'bonusJokeCatcher.ts'
- 'index.html'
- 'index.css'
- 'webpack.config.js'
- 'package.json'
- 'tsconfig.json'
- 'README.md'

### Dependencies
- 'typescript'
- 'webpack'
- 'webpack-cli'
- 'ts-loader'
- 'html-webpack-plugin'
- 'webpack-dev-server'
- 'bootstrap'

