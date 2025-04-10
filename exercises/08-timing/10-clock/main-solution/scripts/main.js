/**
 * @file main.js
 * @author Olga Kutuzova
 * @description 10-clock
 *
 * This script prints the current time to the console every second.
 */

/**
 * Displays the current time in HH:MM:SS format every second.
 * It retrieves the current time, formats it properly with leading zeros, 
 * and logs it to the console.
 */
function javaScriptClock() {
    let currentTime = new Date();
    let hours = addZero(currentTime.getHours());
    let minutes = addZero(currentTime.getMinutes());
    let seconds = addZero(currentTime.getSeconds());
    console.log(`${hours}:${minutes}:${seconds}`);
}

/**
 * Adds a leading zero to numbers less than 10 to maintain a two-digit format.
 * @param {number} i - The number to format.
 * @returns {string} The formatted number as a two-digit string.
 */
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
// Start the clock function to update every second
setInterval(javaScriptClock, 1000);

