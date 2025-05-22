let cats = [];

let kitty1 = {
    name: "Fluffy",
    months: 10,
    noises: ["meow", "purr"],
    favoriteFoods: ["chicken", "tuna", "prawns", "cod", "trout"]
}
let kitty2 = {
    name: "Whiskers",
    months: 6,
    noises: ["miaow", "purr"], 
    favoriteFoods: ["Kitekat", "Felix", "Friskies", "Whiskas", "Purina"]
}

let kitty3 = {
    name: "Thomas",
    months: 12,
    noises: ["meow", "purr", "grrr", "maum"],
    favoriteFoods: ["mice", "rats", "small birds", "insects"]
}

let kitty4 = {
   name: "Napoleon",
   months: 7,
   noises: ["miauum", "purr", "grrr", "maum"], 
   favoriteFoods: ["salmon", "sardines", "tuna", "oysters"]
}


cats.push(kitty1, kitty2, kitty3, kitty4);

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




function getCatOutfit(cat) {
    return `Kitty ${cat.name} is ${cat.outfit.color}, 
            has a ${cat.outfit.fluffiness} amount of fluffiness 
            and is a ${cat.outfit.breed}`;
}

cats.map(cat => {
    console.log(getCatOutfit(cat));
})

function getRandomFood(cat) {
    let arrayFavFood = cat.favoriteFoods;   
    return arrayFavFood.pop(arrayFavFood[randInt(0, arrayFavFood.length - 1)]);
}

function feedCat(cat) {
    return `${cat.name}'s favourite food is ${getRandomFood(cat)}, even more he likes ${getRandomFood(cat)}, and the most preferred food is ${getRandomFood(cat)}`;
}
cats.map(cat => {
    console.log(feedCat(cat));
})