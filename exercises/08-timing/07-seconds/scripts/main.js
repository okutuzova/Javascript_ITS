/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 07-seconds
 *
 * This script determines the number of seconds that have passed today 
 * and the number of seconds left until tomorrow.
 */

/**
 * Calculates the number of seconds that have passed since today's midnight.
 * @returns {number} The number of seconds that have passed since midnight today.
 */
function getSecondsToday() {
     // Get current timestamp in milliseconds
    let today = Date.now();
    // Convert timestamp to a Date object
    let todayFormat = new Date(today);
    // Set the time to midnight to get the start of today
    todayFormat.setHours(0, 0, 0, 0);
     // Get midnight timestamp for today
    let startofToday = todayFormat.getTime();
    // Convert calculated difference between now and midnight to seconds
    let secondsFromTodayMidnight = (today - startofToday) / 1000;
    console.log(`From the midnight of today have passed ${secondsFromTodayMidnight} seconds`);
    return secondsFromTodayMidnight;
}


/**
 * Calculates the number of seconds remaining until the next midnight.
 * @returns {number} The number of seconds left until midnight.
 */
function getSecondsToTomorrow() {
    // Get current date and time
    let now = new Date();
    // Clone current date
    let tomorrow = new Date(now);
    // Move to the next day
    tomorrow.setDate(tomorrow.getDate() + 1);
    // Set time to midnight of next day
    tomorrow.setHours(0, 0, 0, 0);
    // Calculate difference in seconds between now and midnight of the next day
    let secondsFromNowTillTomorrow = (tomorrow.getTime() - now.getTime()) / 1000;
    console.log(`From now till the beginning of tomorrow ${secondsFromNowTillTomorrow} seconds left`);
    return secondsFromNowTillTomorrow;
}


// Testing Functions
getSecondsToday();
getSecondsToTomorrow();