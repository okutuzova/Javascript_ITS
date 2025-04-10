/**
 * @file: bonus-solution-01.js
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
const favouriteBooksSwitch = [
    'The Great Gatsby',
    'The Lord of the Rings',
    'Harry Potter and the Prisoner of Azkaban',
    'The Hobbit',
    'Crime and Punishment',
    'Anna Karenina'  
];


function addSuffix(bookIndex) {
    const number = bookIndex + 1; // Convert 0-based index to 1-based
    const strNum = number.toString(); // Convert to string for checking last digits

    // Special case: 11th, 12th, 13th
    if (strNum.endsWith("11") || strNum.endsWith("12") || strNum.endsWith("13")) {
        return `${number}th`;
    }

    // Determine suffix based on the last digit
    switch (strNum.slice(-1)) {
        case "1": return `${number}st`;
        case "2": return `${number}nd`;
        case "3": return `${number}rd`;
        default: return `${number}th`;
    }
}

/**
 * Iterates over the `favouriteBooks` array and logs each book with its ordinal number.
 */
favouriteBooksSwitch.forEach((book, index) => {
    console.log(`My ${addSuffix(index)} choice is ${book}.`);
});

