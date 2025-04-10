/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 03-weekday
 *
 * This script determines the weekday for a given date in English or Italian. 
 */

/**
 * Returns the abbreviated weekday name for a given date in the specified language.
 * 
 * @param {Date} date - The date object to determine the weekday for.
 * @param {string} [lang='en'] - The language code ('en' for English, 'it' for Italian). Defaults to 'en'.
 * @returns {string} The abbreviated weekday name (e.g., 'MO' for Monday in English, 'LU' in Italian),
 *                   or 'Invalid language' if the language code is not supported.
 */
function getWeekDay(date, lang = 'en') {
    const days = {
      en: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
      it: ['DO', 'LU', 'MA', 'ME', 'GI', 'VE', 'SA']
    };
    return days[lang]?.[date.getDay()] || 'Invalid language';
}

// Example usage
const myDate = new Date(2025, 2, 27); // 27 March 2025
console.log(getWeekDay(myDate, 'en')); // 'TH'
console.log(getWeekDay(myDate, 'it')); // 'GI'
console.log(getWeekDay(myDate, 'fr')); // 'Invalid language' (errors testing)
  