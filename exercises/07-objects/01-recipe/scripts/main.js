/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 01-recipe
 *
 * This script defines an object representing a favorite recipe
 * and logs its details to the console using both dot notation 
 * and bracket notation.
 */


/**
 * The Object containing a recipe.
 * @type {Object}
 */
let myFavouriteRecipe = {
    title: 'Pizza Diavola',
    servings: 3,
    ingredients: ['flour', 'water', 'spicy bacon', 'tomatoes', 'mozarella']
};


// ✅ Logging recipe details using **dot notation**
console.log('Title:', myFavouriteRecipe.title);
console.log('Servings:', myFavouriteRecipe.servings);
console.log('Ingredients:', myFavouriteRecipe.ingredients);

// ✅ Logging recipe details using **bracket notation**
console.log("\n📜 My Recipe:");
console.log('Title:', myFavouriteRecipe['title']);  
console.log('Servings:', myFavouriteRecipe['servings']);

// ✅ Logging ingredients in a formatted way using forEach()
console.log("\n📝 Ingredients List:");
myFavouriteRecipe.ingredients.forEach(ingredient => {
    console.log("- " + ingredient); 
});