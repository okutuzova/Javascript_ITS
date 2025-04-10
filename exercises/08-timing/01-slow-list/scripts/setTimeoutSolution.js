/**
 * @file: setTimeoutSolution.js
 * @author: Olga Kutuzova
 * Exercise 01-slow-list
 *
 * This script logs book titles to the console one by one every second 
 * using setTimeout until all books are displayed.
 */

/**
 * Array of book titles to be displayed in sequence.
 * @constant {string[]}
 */
const favBooks = [
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
    "One Hundred Years of Solitude"
];

/**
 * Recursively logs book titles to the console with a delay of 
 * 1 second between each.
 * @param {number} index - The current index of the book in the favBooks array.
 * @return {undefined}
 */
function printWithTimeout(index) {
    if (index < favBooks.length) {
      console.log(favBooks[index]);
      // Calling the function recursively after 1 second
      setTimeout(() => printWithTimeout(index + 1), 1000); 
    }
  }
  
  // Start the recursive function to print books
  printWithTimeout(0);