/**
 * @file main.js
 * @author Olga Kutuzova
 * @description 01-the-dishwasher
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
}

/**
 * Displays the current state of the stacks.
 * @returns {void}
 */
function displayStacks() {
    console.log("\nCurrent State:");
    console.log("Dirty Stack:", dirtyStack.length, "dishes");
    console.log("Clean Stack:", cleanStack.length, "dishes\n"); 
}

/**
 * Runs the dishwasher simulation.
 * @returns {void}
 */
function runSimulation() {
    console.log("Starting Dishwasher");
    displayStacks();

    // setting a random timer for washing dishes
    const intervalId = setInterval(() => {
        if (dirtyStack.length > 0) {
            washDish();
            displayStacks();
        } else {
            console.log("Washing completed!");
            clearInterval(intervalId);
        }
    }, Math.random() * 1000);
}

// start the dishwasher simulation
runSimulation();


