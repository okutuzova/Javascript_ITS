# Exercise: 02-webpack-friendly

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements 
● Implement some of exercises of the previous units as a webpack project
● The aims are
○ to rewrite the same exercises with modern JS syntax
○ to use webpack, and polyfills if necessary, to make the code compatible with the largest 
number of browsers
● Document any important configuration or code changes in readme.md
● Test the projects with the largest number of browsers you can 

## Solution
The exercises from previous unities have been refactored to use **Webpack** for module bundling.
All source files were moved to the `src/` directory. 

02 - word guesser browser solution. 
In the initial version, the script was contained in a single 'main.js' file. For this exercise, the script was split into several files: - 'main.js' – entry point of the application; 'game.js' – game logic (start, guess checking, state handling)
'hangman-drawing.js' – canvas drawing logic, 'helper.js' – UI-related helper functions, 'words.js' – word list used in the game. The most part of the functions received the export keyword.

The Webpack configuration file, 'webpack.config.js', was created to specify the entry point, output, and module rules. The 'babel-loader' was used to transpile ES6+ code to ES5. The 'html-webpack-plugin' was used to generate the HTML file with the bundled script. Webpack 5 with Babel, CSS extraction, HTML injection, and static file serving for local development. Ensures compatibility with modern browsers and optionally Internet Explorer 11.

## Files:
- 01-math-library-03-functions - refactored exercise 07-math-library of unity 03-functions.
- 02-word-guesser-06-arrays - refactored exercise word guesser of unity 06-arrays.
