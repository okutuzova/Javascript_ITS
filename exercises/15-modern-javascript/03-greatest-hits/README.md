# Exercise: 03-greatest-hits

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Rewrite some previous exercises in modern JS syntax
○ Credit Card Validation
○ Advanced Arrivals
○ Reduce All
● Try to use as many modern features as you can
● In readme.md document any important changes
● Bonus:
○ Use webpack, make your code compatible with older browsers


## Solution

As the usage of Webpack is required, for each project the following commands are launched as the first step:
- `npm init` - to create a `package.json` file.

Webpack installation:
```shell
npm i -D babel-loader @babel/core @babel/preset-env 
npm i -D webpack webpack-dev-server webpack-cli 
npm i -D html-webpack-plugin
npm i -D css-loader mini-css-extract-plugin
npm i core-js@3
```
Then, a webpack.config.js file is created. 
In package.json, the following scripts are added:
```json
"scripts": {
    "watch": "webpack --watch",
    "start": "webpack serve --open",
    "build": "webpack"
}
```

### Credit Card Validation
In the index.html file, a table is created, in its body the results are passed dynamically identifying the body with an id 'results'. In the 'main.css' file basic styles were added, including the selection of a class for a valid/invalid credit card number.

In the 'helper.js' file, the main logic is executed. The file inludes an exported function validateCreditCard that takes a card number as an argument. 
The modern JS syntax used in the function includes:
- export of a function - modern module system. 
- arrow function - modern function syntax.
- template literals - modern string interpolation syntax.
- new Set() - ES6 data structure used for storing unique values.

In the 'main.js' file, the validateCreditCard function is imported. The results are displayed both in the console as it was required in the original exercise, and on a page. Here also the modern JS syntax is used:

- import of a function - modern module system.
- forEach() method - modern iteration method.
- ternary operator - modern conditional operator.

I have kept a copy of a helper file that includes the same function but written with a help of ternary operator. While the code is more compact, it becomes much harder to read. Therefore, the approach with if conditions is preferred. 


### Advanced Arrivals
All HTML and styles are kept as in the original exercise. All the logic that was previously contained in one file, is separated in different folders. 
'data.js' file contains the data for the flights and statuses. The modern JS syntax is used:
- export of an object - modern module system.
- arrow functions
- template literals
- String.prototype.padStart() - ES6 method for padding a string.
- an array is generated dynamically without hard coding. Array.from() method is used.
```javascript
Array.from({ length: 25 }, (_, i) => ...) 
```
'elements.js' includes array destructuring:
```javascript
export const [btnArrivals, btnDepartures] = [
    document.querySelector('#link-arrivals'),
    document.querySelector('#link-departures')
];
```

An object is passed with a length key, then an arrow function that is invoked for each element. 
In 'addFlight.js' file, the following modern JS syntax is used:
- object flight destructuring.
- optional chaining ```if (!flight || !tableBody) return;```

### Reduce All
In this exercise not many modern features have been added, as a previous realization already included many modern features, such as ternary operators, arrow functions, template literals, etc. 
The features added in this exercise are:
- export/import - modern module system, using export of a const instead of a function. 
- added arrow functions. 
- default parameters.
Also the structure of the project has been changed. Tests were placed in a separate file that is addressed in the entry point "main.js". Inside "main.js" also the data is dynamically added to the page using textContent property and querySelector.


## Files:
- `main.js` - external javascript file.
- `README.me` - exercise requirements and solution. 
