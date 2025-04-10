/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 03-weekday
 *
 * This script determines the weekday for a given date in English or Italian. 
 */

/**
 * Returns the English abbreviation of the weekday for a given date.
 * @param {Date} date - The date object.
 * @returns {string} The weekday abbreviation (e.g., 'MO' for Monday).
 */
function getWeekDay(date) {
  const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']; 
  return days[date.getDay()];
}

/**
 * Returns the Italian abbreviation of the weekday for a given date.
 * @param {Date} date - The date object.
 * @returns {string} The weekday abbreviation in Italian (e.g., 'LU' for Monday).
 */
function getWeekDayInItalian(date) {
  const days = ['DO', 'LU', 'MA', 'ME', 'GI', 'VE', 'SA'];
  return days[date.getDay()];
}

/**
 * Determines the weekday abbreviation in English or Italian.
 * @param {Date} date - The date object.
 * @param {string} language - The language code ('en' for English, 'it' for Italian).
 * @returns {string} The weekday abbreviation or 'Invalid language' 
 * if the language is not supported.
 */
function getDateInEngorInIt(date, language) {
    switch (language) {
        case 'en':
            return getWeekDay(date);
        case 'it':
            return getWeekDayInItalian(date);  
        default:
            return 'Invalid language';
    }
}

// Example usage
const myDateInEnglish = new Date(2025, 2, 31);
console.log(getDateInEngorInIt(myDateInEnglish, 'en'));

const myDateInItalian = new Date(2025, 3, 1);
console.log(getDateInEngorInIt(myDateInItalian, 'it'));
