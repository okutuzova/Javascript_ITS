/**
 * @file: solution-3.js
 * @author: Olga Kutuzova
 * Exercise 02-reading-list
 *
 * This script an array of book objects, each containing: Title, Author, 
 * Reading Status (alreadyRead - true if already read, false if not). The map() method is used.
 */

/**
 * The array of books to be read.
 * @type {Array<Object>}
 */
let booksForReadingMap = [
    {
        'title': 'The Hobbit',
        'author': 'J.R.R. Tolkien',
        'alreadyRead': true
    },
    {
        'title': 'The Lord of the Rings',
        'author': 'J.R.R. Tolkien',
        'alreadyRead': true
    },
    {
        'title': 'The Great Gatsby',
        'author': 'F. Scott Fitzgerald',
        'alreadyRead': true
    },
    {
        'title': '1984',
        'author': 'George Orwell',
        'alreadyRead': true
    },
    {
        'title': 'To Kill a Mockingbird',
        'author': 'Harper Lee',
        'alreadyRead': false
    },
    {
        'title': 'Moby-Dick',
        'author': 'Herman Melville',
        'alreadyRead': false
    },
    {
        'title': 'Pride and Prejudice',
        'author': 'Jane Austen',
        'alreadyRead': true
    },
    {
        'title': 'The Catcher in the Rye',
        'author': 'J.D. Salinger',
        'alreadyRead': false
    },
    {
        'title': 'Brave New World',
        'author': 'Aldous Huxley',
        'alreadyRead': false
    },
    {
        'title': 'The Alchemist',
        'author': 'Paulo Coelho',
        'alreadyRead': true
    },
    {
        'title': 'War and Peace',
        'author': 'Leo Tolstoy',
        'alreadyRead': true
    },
    {
        'title': 'Anna Karenina',
        'author': 'Leo Tolstoy',
        'alreadyRead': true
    }
];

console.log('============================');
console.log('Using a map() method: ');
let messages = booksForReadingMap.map(book => 
    book.alreadyRead 
        ? `You already read "${book.title}" by ${book.author}` 
        : `You still need to read "${book.title}" by ${book.author}`
);

console.log(messages.join("\n"));
