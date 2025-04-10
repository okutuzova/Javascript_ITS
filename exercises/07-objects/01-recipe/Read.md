# Exercise: 01-recipe

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Create an object to hold information on your favorite recipe. It should have 
properties for title (a string), servings (a number), and ingredients (an 
array of strings).  
● On separate lines (one console.log statement for each), log the recipe 
information.
Bonus: Create an array that holds several recipes and log them all.  


 
## Solution

In this exercise, we define an object containing information about a favorite recipe and log its properties using both dot notation and bracket notation.

### Difference Between Dot Notation and Bracket Notation

In JavaScript, objects store data in key-value pairs, and we can access their properties using two different methods:

1️⃣ Dot Notation (object.property)

Usage:

```JavaScript
let recipe = {
    title: "Pizza Diavola",
    servings: 3,
    ingredients: ["flour", "water", "spicy bacon", "tomatoes", "mozarella"]
};

console.log(recipe.title);       // Output: Pizza Diavola
console.log(recipe.servings);    // Output: 3
```
✔ Pros:

Easy to read and write.

More commonly used in JavaScript.
✔ Best when: The property name is a valid identifier (no spaces, special characters, or dynamic values).

2️⃣ Bracket Notation (object["property"])

Usage:
```JavaScript
console.log(recipe["title"]);       // Output: Pizza Diavola
console.log(recipe["servings"]);    // Output: 3
```
✔ Pros:

Allows access to properties with special characters (e.g., object["my-property"]).

Useful for dynamic property names.
✔ Best when: The property name is stored as a variable or contains special characters.

Example with dynamic keys:
```JavaScript
let key = "ingredients";
console.log(recipe[key]);  // Output: ["flour", "water", "spicy bacon", "tomatoes", "mozarella"]
```
Conclusion

Better to use dot notation when property names are known and valid identifiers.

Better to use bracket notation when property names are dynamic, contain special characters, or come from variables.


## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `bonus.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
