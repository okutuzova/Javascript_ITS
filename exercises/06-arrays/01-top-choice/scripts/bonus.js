/**
 * @file: bonus.js
 * @author: Olga Kutuzova
 * Exercise 01-top-choice
 * 
 * This script includes an array with the preferred books and a function 
 * which returns the properly formatted index. 
 */

/**
 * Array of favorite books.
 * @constant {string[]}
 */
const favouriteBooksSuffix = [
    'The Great Gatsby',
    'The Lord of the Rings',
    'Harry Potter and the Prisoner of Azkaban',
    'The Hobbit',
    'Crime and Punishment',
    'Anna Karenina'  
];

/**
 * Returns a properly formatted ordinal number (1st, 2nd, 3rd, etc.) for a given index.
 * @param {number} bookIndex - The index of the book (0-based).
 * @returns {string} The formatted ordinal number.
 */
function addSuffix(bookIndex) {
    const suffixes = ['st', 'nd', 'rd']; // Suffixes for 1st, 2nd, 3rd
    const lastDigit = (bookIndex + 1) % 10; // Get last digit of the number
    const lastTwoDigits = (bookIndex + 1) % 100; // Get last two digits for special cases

    // Special case for 11th, 12th, 13th
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return `${bookIndex + 1}th`;
    }

    // Assign proper suffix for 1st, 2nd, 3rd, else default to 'th'
    return `${bookIndex + 1}${suffixes[lastDigit - 1] || 'th'}`;
}

/**
 * Iterates over the `favouriteBooks` array and logs each book with its ordinal number.
 */
favouriteBooksSuffix.forEach((book, index) => {
    console.log(`My ${addSuffix(index)} choice is ${book}.`);
});
