/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 01-top-choice
 * 
 * This script includes  an array with the selection of books. 
 * In a loop each element of the array is logged. 
 */

/**
 * Array of favorite books.
 * @constant {string[]}
 */
const favouriteBooks = [
  'The Great Gatsby',
  'The Lord of the Rings',
  'Harry Potter and the Prisoner of Azkaban',
  'The Hobbit',
  'Crime and Punishment',
  'Anna Karenina'
];


/**
 * Iterates over the `favouriteBooks` array and logs each book with an index.
 */
favouriteBooks.forEach((book, index) => {
    console.log(`My #${index + 1} choice is ${book}.`);
});
