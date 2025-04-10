/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 01-recipe-bonus
 *
 * In this script, an object holding information on a favourite recipe is created 
 * and logged to the console in two different formats using the forEach() method. 
 */


/**
 * The array of favourite recipes.
 * @type {Array}
 */
let myFavouriteRecipes = [
    {
        'title': 'Pasta con Pesto', 
        'servings': 3, 
        'ingredients': ['pasta', 'homemade pesto', 'salt', 'tuna']
        
    }, {
        'title': 'Piadina',
        'servings': 2, 
        'ingredients': ['piadina', 'prosciutto', 'cheese', 'tomatoes']

    }, {
        'title': 'Mashed Potatoes',
        'servings': 4, 
        'ingredients': ['potatoes', 'milk', 'pepper', 'salt']

    }, {
        'title': 'Chicken with tomato sauce',
        'servings': 5, 
        'ingredients': ['chicken filet', 'tomatoes', 'spices', 'salt', 'pepper']
    }
];

// Logging all recipes non-formatted
myFavouriteRecipes.forEach(item => {
    console.log(item.title, item.servings, item.ingredients);
});

// Logging recipes in a formatted mode
console.log("\n===================");
console.log("📜 All Recipes:");
console.log("===================");

myFavouriteRecipes.forEach(recipe => {
    console.log("\nTitle:", recipe.title);
    console.log("Servings:", recipe.servings);
    console.log("Ingredients:");
    recipe.ingredients.forEach(ingredient => console.log("- " + ingredient));
});