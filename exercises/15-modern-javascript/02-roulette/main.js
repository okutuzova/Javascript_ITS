/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 02-roulette
 * 
 * In this script a simple roulette game is simulated. Each round has a 50/50
 * chance of being won or lost. Promises are used to handle the asynchronous
 * nature of each round.
 */

/**
 * Simulates a roulette round that resolves or rejects after a delay.
 * 
 * @param {string} [label="round"] - A label describing the round (e.g., "round 1").
 * @param {number} [delay=500] - The delay in milliseconds before the round is resolved or rejected.
 * @returns {Promise<string>} A promise that resolves with a "won!" message or rejects with a "lost!" error.
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