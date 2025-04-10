# Exercise: 09-merger

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements 
Write a function called merger() that takes two parameters and performs the 
following operation:  
● If both parameters are numbers, return the sum  
● If both parameters are strings, return the concatenation of the strings  
● If the parameters are anything else, return null  
Include a doc file in which you explain why two operators might have the same 
symbol but work differently based on the type of the parameters  


## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file with a function.
- The two operators have the same symbol __+__. However, in JavaScript, some operators, such as +, have different behaviors depending on the types of the operands they operate on. This is known as operator overloading. This happens because JavaScript is a dynamically typed language, meaning it attempts to convert values automatically when an operation is performed between different types. This is called type coercion.

If both operands are numbers → Addition  
If one operand is a string → JavaScript converts the other operand to a string and performs concatenation.

The `+` operator is a great example of how an operator can have **multiple meanings** depending on the operand types.

| Operand 1 | Operand 2 | Operation Performed | Example | Result |
|-----------|-----------|--------------------|---------|--------|
| Number    | Number    | Addition           | `5 + 3` | `8` |
| String    | String    | Concatenation      | `"Hello" + " World"` | `"Hello World"` |
| Number    | String    | Type Coercion (Concatenation) | `5 + "3"` | `"53"` |
| String    | Number    | Type Coercion (Concatenation) | `"5" + 3` | `"53"` |


## Example of Unexpected Behavior
```javascript
console.log(5 + "10");  // Output: "510" (string concatenation)
console.log("10" + 5);  // Output: "105" (string concatenation)
console.log(5 + 10);    // Output: 15 (numeric addition)
console.log(5 + true);  // Output: 6 (true is treated as 1)
console.log("5" - 3);   // Output: 2 (because `-` is not overloaded for strings, so "5" is converted to a number)
```


## Other Operators That Behave Differently
- `==` vs `===`
  - `==` allows type coercion (`5 == "5"` → `true`)
  - `===` checks type **and** value (`5 === "5"` → `false`)

- `-`, `*`, `/`
  - Always try to **convert operands to numbers**
  - Example: `"10" - 5` → `5` (string `"10"` is converted to `10`)

## How to Avoid Confusion
- Use `===` instead of `==` for strict comparisons.
- Explicitly convert values using `Number()`, `String()`, etc.
- Be aware of implicit type coercion when using mixed types.

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript 
- `Read.md` - exercise requirements and solution. 
- JSDoc folder with documentation.






