/**
 * @file main.js
 * @author Olga Kutuzova
 * @description Dishwasher simulation bonus
 *
 * This script simulates a dishwasher by creating three dirty dishes stacks 
 * and one clean stack.
 * The dishwasher can clean two dishes simultaneously.
*/

// an empty stack for clean dishes
let cleanStack = [];
// empty stacks for dirty dishes
let dirtyStackOne = [];
let dirtyStackTwo = [];
let dirtyStackThree = [];

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random integer between min and max (inclusive).
 */
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// adding a random number of dirty dishes to stacks
for (let i = 0; i < randInt(10, 50); i++) dirtyStackOne.push(`Dish ${i + 1} from Stack One`);
for (let i = 0; i < randInt(5, 25); i++) dirtyStackTwo.push(`Dish ${i + 1} from Stack Two`);
for (let i = 0; i < randInt(10, 30); i++) dirtyStackThree.push(`Dish ${i + 1} from Stack Three`);

/**
 * Removes the last dish from the dirty stack and adds it to the clean stack.
 * @returns {void}
 */
function washDish() {
    let washedDishesTemp = [];

    // checking if there are dishes in the dirty stacks
    if (dirtyStackOne.length > 0) washedDishesTemp.push(dirtyStackOne.pop());
    if (dirtyStackTwo.length > 0) washedDishesTemp.push(dirtyStackTwo.pop());
    // if only one dish was taken, then take from the third stack
    if (washedDishesTemp.length < 2 && dirtyStackThree.length > 0) washedDishesTemp.push(dirtyStackThree.pop());
    //moving washed dishes to the clean stack
    cleanStack = cleanStack.concat(washedDishesTemp).flat();
    drawStacks();
    //logging the washed dishes
    console.log(`Washed: ${washedDishesTemp.join(", ")}`);
}

/**
 * Displays the current state of the stacks in the DOM.
 * @returns {void}
 */
function drawStacks() {
    document.getElementById('stack1').innerHTML = dirtyStackOne.map(dish => `<div class="dish">${dish}</div>`).join('');
    document.getElementById('stack2').innerHTML = dirtyStackTwo.map(dish => `<div class="dish">${dish}</div>`).join('');
    document.getElementById('stack3').innerHTML = dirtyStackThree.map(dish => `<div class="dish">${dish}</div>`).join('');
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
        if (dirtyStackOne.length > 0 || dirtyStackTwo.length > 0 || dirtyStackThree.length > 0) {
            washDish();
        } else {
            console.log("Washing completed!");
            clearInterval(intervalId);
        }
    }, Math.random() * 1000);
}

// start the dishwasher simulation
runSimulation();


