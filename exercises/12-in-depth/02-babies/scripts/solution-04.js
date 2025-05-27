/**
 * @file: solution-04.js
 * @author: Olga Kutuzova
 * Exercise 02-babies
 * 
 * This script demonstrates another way of adding objects to an array
 * by assigning each cat object to a specific index in the array.
 */
let cats = [];

cats[1] = {
    name: "Fluffy",
    months: 10,
    noises: ["meow", "purr"],
    favoriteFoods: ["chicken", "tuna", "prawns"]
};
cats[2] = {
    name: "Whiskers",
    months: 6,
    noises: ["miaow", "purr"], 
    favoriteFoods: ["Kitekat", "Felix", "Friskies"]
};
cats[3] = {
    name: "Thomas",
    months: 12,
    noises: ["meow", "purr", "grrr", "maum"],
    favoriteFoods: ["mice", "rats", "small birds"]
};
cats[4] = {
   name: "Napoleon",
   months: 7,
   noises: ["miauum", "purr", "grrr", "maum"], 
   favoriteFoods: ["salmon", "sardines", "tuna"]
};
console.log(cats);