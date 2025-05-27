/**
 * @file: solution-01.js
 * @author: Olga Kutuzova
 * Exercise 02-babies
 * 
 * This script contains a list of cats and their information.
 * It also contains a function to generate a random integer between min and max (inclusive).
 * The script also contains a function to print the cats' information in a nice way.
 * Random outfit attributes (color, fluffiness, breed) are also assigned to each cat.
 */

/**
 * List of cat objects.
 * @type {Object[]}
 */
let cats = [];

/**
 * A single cat object example.
 * @typedef {Object} Cat
 * @property {string} name - The name of the cat.
 * @property {number} months - The cat's age in months.
 * @property {string[]} noises - Noises the cat makes.
 * @property {string[]} favoriteFoods - List of the cat's favorite foods.
 * @property {Object} [outfit] - Randomly generated outfit info.
 * @property {string} outfit.color - Color of the outfit.
 * @property {string} outfit.fluffiness - Fluffiness level.
 * @property {string} outfit.breed - Breed of the cat.
 */
let kitty1 = {
    name: "Fluffy",
    months: 10,
    noises: ["meow", "purr"],
    favoriteFoods: ["chicken", "tuna", "prawns"]
};

let kitty2 = {
    name: "Whiskers",
    months: 6,
    noises: ["miaow", "purr"], 
    favoriteFoods: ["Kitekat", "Felix", "Friskies"]
};

let kitty3 = {
    name: "Thomas",
    months: 12,
    noises: ["meow", "purr", "grrr", "maum"],
    favoriteFoods: ["mice", "rats", "small birds"]
};

let kitty4 = {
   name: "Napoleon",
   months: 7,
   noises: ["miauum", "purr", "grrr", "maum"], 
   favoriteFoods: ["salmon", "sardines", "tuna"]
};
// 1st example of adding elements to the array
cats.push(kitty1, kitty2, kitty3, kitty4);

// output to the console
console.log(cats);

// Log each cat's details using Object.entries()
cats.forEach(cat => {;
    for (const [key, value] of Object.entries(cat)) {
      console.log(`${key}:`, value);
    }
});
  

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random integer between min and max (inclusive).
 */
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random options for cat outfits
let breeds = ["siamese", "tabby", "maine coon", "persian", "sphynx", "british shorthair"];
let fluffiness = ["low", "medium", "high"];
let colors = ["black", "white", "brown", "gray", "orange"];
// Assign random outfit to each cat
cats.map(cat => {
    cat.outfit = { 
        color: colors[randInt(0, colors.length-1)], 
        fluffiness: fluffiness[randInt(0, fluffiness.length-1)], 
        breed: breeds[randInt(0, breeds.length - 1)]};
});


/**
 * Prints each cat's details in a clean, readable format.
 * @param {Cat[]} cats - The array of cat objects to print.
 */
function printCatsNicely(cats) {
    cats.map(cat => {
        console.log(`Name: ${cat.name}
        Age: ${cat.months} months
        Favorite Foods: ${cat.favoriteFoods}
        Outfit: Color - ${cat.outfit.color}, Fluffiness - ${cat.outfit.fluffiness}, Breed - ${cat.outfit.breed}`);
    });
}

printCatsNicely(cats);