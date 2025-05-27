/**
 * @file: solution-02.js
 * @author: Olga Kutuzova
 * Exercise 02-babies
 * 
 * This script demonstrates another way of adding to the array.
 * Here, each cat object is pushed directly into the array without using a variable.
 */

/**
 * List of cat objects.
 * @type {Object[]}
 */
let cats = [];
// Directly pushing cat objects into the cats array
cats.push({
    name: "Fluffy",
    months: 10,
    noises: ["meow", "purr"],
    favoriteFoods: ["chicken", "tuna", "prawns"]
});

cats.push({
    name: "Whiskers",
    months: 6,
    noises: ["miaow", "purr"], 
    favoriteFoods: ["Kitekat", "Felix", "Friskies"] 
});

cats.push({
    name: "Thomas",
    months: 12,
    noises: ["meow", "purr", "grrr", "maum"],
    favoriteFoods: ["mice", "rats", "small birds"] 
});

cats.push({
    name: "Napoleon",
    months: 7,
    noises: ["miauum", "purr", "grrr", "maum"], 
    favoriteFoods: ["salmon", "sardines", "tuna"] 
});

console.log(cats);