/**
 * @file main.js
 * @author Olga Kutuzova
 * @description Exercise 10-clock
 *
 * This script displays the current time in an HTML element with ID "clock".
 * It updates every second using `setInterval()`.
 */

// Start updating the clock every second
window.onload = setInterval(javaScriptClock,1000);

/**
 * Updates the clock every second and displays the current time 
 * in the console and in an HTML element with ID "clock".
 */
function javaScriptClock() {
    let currentTime = new Date();
    let hours = addZero(currentTime.getHours());
    let minutes = addZero(currentTime.getMinutes());
    let seconds = addZero(currentTime.getSeconds());
    document.getElementById("clock").innerHTML=`${hours}:${minutes}:${seconds}`;
}

/**
 * Adds a leading zero to numbers less than 10 to ensure a two-digit format.
 * @param {number} i - The number to format.
 * @returns {string} The formatted number as a two-digit string.
 */
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}



