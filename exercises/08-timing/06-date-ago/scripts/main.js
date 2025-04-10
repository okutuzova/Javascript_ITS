/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 06-date-ago
 *
 * This script determines the date for a given number of days ago. 
 */


/**
 * Calculates the day of the month for a given number of days ago from the provided date.
 * 
 * @param {Date} date - The reference date from which to count backwards.
 * @param {number} days - The number of days to go back. Negative values are treated as positive.
 * @returns {number} The day of the month corresponding to the calculated past date.
 */
function getDateAgo(date, days) {
    // Create a copy of a date to avoid modifying the original one. 
    let newDate = new Date(date); 
    // Calculate the past date by subtracting the absolute value of days from the current date.
    newDate.setDate(date.getDate() - Math.abs(days)); 
    // Return only the day of the month.
    return newDate.getDate(); 
}

//Test cases
const birthday = new Date('August 19, 1975 23:15:30');
const myBirthday = new Date('February 06, 1988');

console.log(getDateAgo(birthday, 1));  // 18 (one day before)
console.log(getDateAgo(myBirthday, 7)); // 30 (January, sonce 6 February is 7 days)
console.log(getDateAgo(myBirthday, -7)); // 30 (same as above as the negative value is converted in positive with Math.abs())
