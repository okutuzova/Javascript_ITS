/**
 * @file main.js
 * @author Olga Kutuzova
 * @description 07-the-dom-washer
 *
 * This script simulates a dishwasher by creating a random number of dirty dishes.
 * Then the dishwasher washes the dishes one by one and displays 
 * the current state of the stacks.
 * The simulation stops when all dishes are washed.
 */

// an empty stack for clean dishes
let cleanStack = [];
// an empty stack for dirty dishes
let dirtyStack = [];

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random integer between min and max (inclusive).
 */
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generate a random number of dirty dishes
let dirtyStackLength = randInt(10, 50);
// fill the dirty stack with dishes
for (let i = 0; i < dirtyStackLength; i++) {
    dirtyStack.push(`Dish ${i + 1}`);
}

/**
 * Removes the last dish from the dirty stack and adds it to the clean stack.
 * @returns {void}
 */
function washDish() {
    let lastDirtyPlate = dirtyStack.pop();
    cleanStack.push(lastDirtyPlate);
    console.log(`Washed: ${lastDirtyPlate}`);
    drawStacks();
}

/**
 * Displays the current state of the stacks in the DOM.
 * @returns {void}
 */
function drawStacks() {
    document.getElementById("dirty").innerHTML = dirtyStack.map(dish => `<div class="dish">${dish}</div>`).join('');
    // Update clean stack in the DOM
    document.getElementById('clean').innerHTML = cleanStack.map(dish => `<div class="dish">${dish}</div>`).join('');
}

/**
 * Runs the dishwasher simulation.
 * @returns {void}
 */
function runSimulation() {
    console.log("Starting Dishwasher");
    drawStacks();

    // setting a random timer for washing dishes
    const intervalId = setInterval(() => {
        if (dirtyStack.length > 0) {
            washDish();
        } else {
            console.log("Washing completed!");
            clearInterval(intervalId);
        }
    }, Math.random() * 1000);
}

// start the dishwasher simulation
runSimulation();


