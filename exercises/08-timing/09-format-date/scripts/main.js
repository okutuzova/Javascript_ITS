/**
 * @file main.js
 * @author Olga Kutuzova
 * @description Exercise 09-format-date
 *
 * This script formats a given date based on how recent it is.
 * If the date is:
 * - Less than 1 second ago → Displays "Right now".
 * - Less than 60 seconds ago → Displays "X sec. ago".
 * - Less than 60 minutes ago → Displays "X min. ago".
 * - Otherwise → Formats the date as "DD.MM.YY HH:MM".
 */

/**
 * Formats a date based on how long ago it was.
 * 
 * @param {Date} date - The date to format.
 * @returns {void} Logs the formatted date/time to the console.
 */
function formatDate(date) {
    // Get the current date and time
    let now = new Date();
    // Calculate the time difference in milliseconds
    let diff = now - date;

    // Check if the date is in the future
    if (diff < 0) {
        console.log("In the future");
        return;
    }

    // Convert milliseconds to seconds
    let diffInSeconds = Math.floor(diff / 1000);
    // Convert milliseconds to minutes
    let diffInMinutes = Math.floor(diff / 60000);

    // If the difference is less than 1 second, print "Right now"
    if (diffInSeconds < 1) {
        console.log("Right now");
        // If less than 60 sec, print "X sec. ago"
    } else if (diffInSeconds < 60) {
        console.log(`${diffInSeconds} sec. ago`);
        // If less than 60 min, print "X min. ago"
    } else if (diffInMinutes < 60) {
        console.log(`${diffInMinutes} min. ago`);
    } else {
        // Format the date as "DD.MM.YY HH:mm"
        // Add leading zeros to make a day 2-digit number
        let day = String(date.getDate()).padStart(2, '0');
        // Add leading zeroes to make a month 2-digit number and 
        // add 1 to make months start from 1 instead of 0
        let month = String(date.getMonth() + 1).padStart(2, '0');
        // Get the last 2 digits of the year
        let year = String(date.getFullYear()).slice(-2);
        // Add leading zeros to make hours and minutes 2-digit numbers
        let hours = String(date.getHours()).padStart(2, '0');
        let minutes = String(date.getMinutes()).padStart(2, '0');
        
        console.log(`${day}.${month}.${year} ${hours}:${minutes}`);
    }
}

// Testing the function with different dates
let myDate = new Date(2016, 3, 17, 10, 0);
formatDate(myDate);

let today = new Date();
formatDate(today);

let myDateToday = new Date(2025, 2, 29, 12, 11);
formatDate(myDateToday);

let myDateTodayMinutes = new Date(2025, 3, 1, 14, 10);
formatDate(myDateTodayMinutes);

let myFutureDate = new Date(2026, 3, 1, 14, 10);
formatDate(myFutureDate);