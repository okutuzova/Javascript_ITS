/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 02-roulette
 * 
 * In this script 
 */

function round(label="round", delay=500) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5? resolve(`${label}: won!`) : reject(new Error(`${label}: lost!`));
        }, delay);
    })
}

Promise.all([
    round("round 1", 1000),
    round("round 2", 1000),
    round("round 3", 1000)
])
.then(results => {
    results.forEach(r => console.log(r));
    
})
.catch(err => {
    console.error(err.message);
    
})
.finally(() => {
    console.log("Game over") 
});