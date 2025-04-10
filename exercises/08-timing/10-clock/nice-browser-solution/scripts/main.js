/**
 * @file main.js
 * @author Olga Kutuzova
 * @description Exercise 10-clock
 *
 * This script updates an HTML clock display with three different modes:
 * - "full"  → Shows both date and time.
 * - "date"  → Shows only the date.
 * - "time"  → Shows only the time.
 * 
 * The display updates every second, and users can switch modes using buttons.
 */

/** @type {HTMLElement} The clock display element */
const clock = document.getElementById('clock');

/** @type {HTMLElement} Button to switch to full date-time mode */
const fullBtn = document.getElementById('full');

/** @type {HTMLElement} Button to switch to date-only mode */
const dateBtn = document.getElementById('date');

/** @type {HTMLElement} Button to switch to time-only mode */
const timeBtn = document.getElementById('time');

/** @type {'full' | 'date' | 'time'} Current display mode (default: 'time') */
let mode = 'time';

/**
 * Creates a function that sets the clock display mode.
 * 
 * @param {'full' | 'date' | 'time'} name - The mode to set.
 * @returns {Function} A function that updates the mode and refreshes the display.
 */
function bindMode(name) {
    return function() {
        mode = name;
        update();
    }
}

// Assign click event listeners to buttons
fullBtn.onclick = bindMode('full');
dateBtn.onclick = bindMode('date');
timeBtn.onclick = bindMode('time');

// Initial clock update
update();

// Update the clock display every second
setInterval(update, 1000);

/**
 * Updates the clock display based on the current mode.
 */
function update() {
   clock.textContent = format(mode); 
}

/**
 * Formats the current date and time based on the selected mode.
 * 
 * @param {'full' | 'date' | 'time'} formatMode - The display mode.
 * @returns {string} The formatted date/time string.
 */
function format(formatMode) {
    const now = new Date();
    switch (formatMode) {
        case 'full':
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        case 'date':
            return now.toLocaleDateString();
        case 'time':
            return now.toLocaleTimeString();
        default:
            return now.toLocaleTimeString();
        
    }
}






// window.onload = setInterval(Orologio,1000);
// function addZero(i) {
// if (i < 10) {
//     i = "0" + i;
// }
// return i;
// }
// function Orologio(){
// var d = new Date();
// var date = d.getDate();
// var ora = addZero(d.getHours());
// var min = addZero(d.getMinutes());
// var sec = addZero(d.getSeconds());
// document.getElementById("orologio").innerHTML=ora+":"+min+":"+sec;
// }
