/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 05-my-setInterval
 *
 * This script re-creates the setInterval function using setTimeout.
 */

/**
 * Custom implementation of setInterval using setTimeout.
 * Automatically stops after 15 intervals.
 * If the first argument is not a function, an error is thrown.
 * 
 * @param {Function} func - The function to execute at each interval.
 * @param {number} interval - The time (in milliseconds) between function executions.
 */
function mySetInterval(func, interval) {
    if (typeof func !== 'function') {
        throw new Error('The first argument must be a function.');
    }
    let count = 0;

    function execute() {
        // The if statemented may be commented out 
        // if infinite executions are needed
        if (count >= 15) 
            return; // Stop after 15 executions
        func();
        count++;
        setTimeout(execute, interval); // Recursive invoking with an interval
    }

    execute(); // Start the loop
}

function printHello() {
    console.log("Hello World!");
}

// Start the interval
mySetInterval(printHello, 1000);
