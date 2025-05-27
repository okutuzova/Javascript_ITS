/**
 * @file: solution-06.js
 * @author: Olga Kutuzova
 * Exercise 02-babies
 * 
 * This script demonstrates another way of adding objects to an array
 * using splice method.
 */
let cats = [];
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
cats.splice(0,0,kitty1,kitty2,kitty3,kitty4);
console.log(cats);