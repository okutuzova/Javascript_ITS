/**
 * @file: setIntervalSolution.js
 * @author: Olga Kutuzova
 * Exercise 02-oh-no-you-don't
 *
 * This script schedules a function to run after 10 seconds 
 * but cancels it after 5 seconds.
 */

/**
 * A function that simulates a useful operation.
 * It will be scheduled to run after 10 seconds.
 */
function useful() {
    console.log("I am doing something useful");
}

/**
 * Schedules the `useful` function to execute after 10 seconds.
 * @constant {number} usefulTimeoutId - The timeout ID returned by setTimeout.
 */
const usefulTimeoutId = setTimeout(useful, 10000);

/**
 * Cancels the execution of the `useful` function if it has not run yet.
 * Logs a cancellation message to the console.
 */
function cancelUsefulTimeout() {
    clearTimeout(usefulTimeoutId); 
    console.log("function Useful cancelled");  
}

/**
 * Schedules the cancellation of the `useful` function after 5 seconds.
 */
setTimeout(cancelUsefulTimeout, 5000);