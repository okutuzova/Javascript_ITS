/**
 * @file: setIntervalSolution.js
 * @author: Olga Kutuzova
 * Exercise 01-slow-list
 *
 * This script logs book titles to the console one by one every second 
 * using setInterval until all books are displayed.
 */

/**
 * Array of book titles to be displayed in sequence.
 * @constant {string[]}
 */
const books = [
    "To Kill a Mockingbird",
    "1984",
    "The Great Gatsby",
    "Pride and Prejudice",
    "The Catcher in the Rye",
    "Moby-Dick",
    "War and Peace",
    "Crime and Punishment",
    "The Lord of the Rings",
    "Brave New World",
    "Harry Potter and the Sorcerer's Stone",
    "The Hobbit",
    "Fahrenheit 451",
    "The Alchemist",
    "The Little Prince",
    "Don Quixote",
    "Wuthering Heights",
    "Jane Eyre",
    "Great Expectations",
    "The Odyssey",
    "The Divine Comedy",
    "Dracula",
    "The Picture of Dorian Gray",
    "Frankenstein",
    "Les Misérables",
    "Anna Karenina",
    "A Tale of Two Cities",
    "The Brothers Karamazov",
    "The Count of Monte Cristo",
    "Harry Potter and the Chamber of Secrets",
];

/**
 * Index tracker for the current book being logged.
 * @type {number}
 */
let initial = 0;

/**
 * Interval function to log book titles every second.
 * Stops when all books have been logged.
 */
const intervalId = setInterval(() => {
    console.log(books[initial]);
    initial += 1;

    // Stop the interval when all books are logged
    if (initial >= books.length) {
        console.log('Done');
        clearInterval(intervalId);
  }
}, 1000);

