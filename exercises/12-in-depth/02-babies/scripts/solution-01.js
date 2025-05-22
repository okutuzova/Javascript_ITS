let cats = [];

let kitty1 = {
    name: "Fluffy",
    months: 10,
    noises: ["meow", "purr"],
    favoriteFoods: ["chicken", "tuna", "prawns"]
}
let kitty2 = {
    name: "Whiskers",
    months: 6,
    noises: ["miaow", "purr"], 
    favoriteFoods: ["Kitekat", "Felix", "Friskies"]
}

let kitty3 = {
    name: "Thomas",
    months: 12,
    noises: ["meow", "purr", "grrr", "maum"],
    favoriteFoods: ["mice", "rats", "small birds"]
}

let kitty4 = {
   name: "Napoleon",
   months: 7,
   noises: ["miauum", "purr", "grrr", "maum"], 
   favoriteFoods: ["salmon", "sardines", "tuna"]
}


cats.push(kitty1, kitty2, kitty3, kitty4);

console.log(cats);

cats.map( cat => {
    for (const [key, value] of Object.entries(cat)) {
        console.log(`${key}: ${value}`);
      } 
    }
);

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random integer between min and max (inclusive).
 */
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let breeds = ["siamese", "tabby", "maine coon", "persian", "sphynx", "british shorthair"];
let fluffiness = ["low", "medium", "high"];
let colors = ["black", "white", "brown", "gray", "orange"];
cats.map(cat => {
    cat.outfit = { 
        color: colors[randInt(0, colors.length-1)], 
        fluffiness: fluffiness[randInt(0, fluffiness.length-1)], 
        breed: breeds[randInt(0, breeds.length - 1)]};
})
console.log(cats);

function printCatsNicely(cats) {
    cats.map(cat => {
        console.log(`Name: ${cat.name}
        Age: ${cat.months} months
        Favorite Foods: ${cat.favoriteFoods}
        Outfit: Color - ${cat.outfit.color}, Fluffiness - ${cat.outfit.fluffiness}, Breed - ${cat.outfit.breed}`);
    })
}

printCatsNicely(cats);