/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 03-baby-processing
 * 
 * This script contains a list of cats and their information.
 * Random outfit attributes (color, fluffiness, breed) are also assigned 
 * to each cat. 
 * Cat details are handled in a separate function. 
 * The cat's fav food is shuffled and a sentence is generated to
 * print it out. 
 *
 */
/** @type {Cat[]} */
let cats = [];
/**
 * @type {Object} Cat
 * @property {string} name - The cat's name.
 * @property {number} months - The age of the cat in months.
 * @property {string[]} noises - Array of noises the cat makes.
 * @property {string[]} favoriteFoods - Array of the cat's favorite foods.
 * @property {Object} [outfit] - The outfit description for the cat.
 * @property {string} outfit.color - The color of the cat.
 * @property {string} outfit.fluffiness - The fluffiness level of the cat.
 * @property {string} outfit.breed - The breed of the cat.
 */
let kitty1 = {
    name: "Fluffy",
    months: 10,
    noises: ["meow", "purr"],
    favoriteFoods: ["chicken", "tuna", "prawns", "cod", "trout"]
};
let kitty2 = {
    name: "Whiskers",
    months: 6,
    noises: ["miaow", "purr"], 
    favoriteFoods: ["Kitekat", "Felix", "Friskies", "Whiskas", "Purina"]
};
let kitty3 = {
    name: "Thomas",
    months: 12,
    noises: ["meow", "purr", "grrr", "maum"],
    favoriteFoods: ["mice", "rats", "small birds", "insects"]
};
let kitty4 = {
   name: "Napoleon",
   months: 7,
   noises: ["miauum", "purr", "grrr", "maum"], 
   favoriteFoods: ["salmon", "sardines", "tuna", "oysters"]
};
cats.push(kitty1, kitty2, kitty3, kitty4);

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random integer between min and max (inclusive).
 */
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Arrays of possible outfit attributes
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
 * Fisher-Yates shuffle algorithm
 * @param {array} array 
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements at indices i and j
    }
    return array;
}

/**
 * Returns a formatted string describing the cat's outfit.
 * @param {Cat} cat - The cat whose outfit to describe.
 * @returns {string} A descriptive sentence of the cat's outfit.
 */
function getCatOutfit(cat) {
    return `Kitty ${cat.name} is ${cat.outfit.color}, has a ${cat.outfit.fluffiness} amount of fluffiness and is a ${cat.outfit.breed}`;
}
// Print each cat's outfit description
cats.forEach(cat => {
    console.log(getCatOutfit(cat));
});

/**
 * Generates a sentence describing the cat's food preferences,
 * with the food list shuffled for variation.
 * @param {Cat} cat - The cat to describe.
 * @returns {string} A sentence of shuffled favorite foods.
 */
function feedCat(cat) {
    let arrayFavFood = cat.favoriteFoods;
    let shuffledArray = shuffleArray(arrayFavFood);
    let stringToComplete = `${cat.name} prefers to eat `;
    for (let food of shuffledArray) {
       
        if (shuffledArray.indexOf(food) == shuffledArray.length - 1) {
          stringToComplete += `and ${food}.`; 
          break;
        }
        stringToComplete += `${food}, `;
    }
    return stringToComplete;
}
// Print the food preference sentence for each cat
cats.forEach(cat => {
    console.log(feedCat(cat));
});