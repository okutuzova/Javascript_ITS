# Exercise: 01-variable-scope

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Write a .js file that uses both local and global variables in the same project  
● Recreate the local and global scope examples in your browser  
● Try to call the function “addNumbers” a few more times  
● Make sure that you understand exactly what’s happening at every stage

## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file that contains variables with three types of scope. I initialized a variable __globalCounter__ that has the global scope as it is intiailized outside of any functions or code blocks. This variable is accessible from any point of the code. 
- I created a function __addNumbers__. Inside this function another variable named __result__ is initialized. This is a variable of local or function scope. It is accessible only inside the function. Any call of the variable outside it, will result in Reference Error. __globalCounter__ is accessible from inside the function __addNumbers__. I added a condition block inside the function. Inside the condition I initialized a variable __message__. This variable has only a block scope and is not accessible outside of it. 

- I created a file `scope-example.js`, where initialized global, local and block scoped variables with let, var and const. 

NB: The Temporal Dead Zone refers to the period in the execution of a JavaScript program where a variable exists but cannot be accessed.
### 🔍 Key Differences:

| Variable Type | Scope Type      | Hoisting | Reassignable? | Block Scoped? |
|--------------|----------------|----------|--------------|--------------|
| `var`        | Function Scope  | Yes (initialized as `undefined`) | Yes | ❌ No |
| `let`        | Block Scope     | No (TDZ: Temporal Dead Zone) | Yes | ✅ Yes |
| `const`      | Block Scope     | No (TDZ: Temporal Dead Zone) | ❌ No (Must be initialized) | ✅ Yes |


- I created a JSDoc description of the function tellFortune and used a command "jsdoc -d JSDoc main.js" in order to create a folder with JSDoc documnetation. 
- The output is displayed in the browser's console when the page is loaded.

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript with a function.
- `scope-example.js`- Javascript with different variables.
- `Read.md` - exercise requirements and solution. 
- JSDoc folder with documentation.