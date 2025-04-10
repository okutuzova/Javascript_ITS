# Exercise: 02-reading-list

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Create an array of objects, where each object describes a book and has 
properties for the title (a string), author (a string), and alreadyRead (a 
boolean indicating if you read it yet).  
● Iterate through the array of books. For each book, log the book title and 
book author like so: "The Hobbit by J.R.R. Tolkien".  
● Now use an if/else statement to change the output depending on whether 
you read it yet or not. If you read it, log a string like 'You already read "The 
Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read 
"The Lord of the Rings" by J.R.R. Tolkien.'  


 
## Solution

In this exercise ('main.js' file), we define an array of books and iterate through it using the forEach() method. The script does the following:  
Logs all book titles and authors.  
Checks the reading status:  

If a book is already read, it logs: You already read "[Title]" by [Author].  

If not read, it logs: You still need to read "[Title]" by [Author].  

I added two optional solutions for this exercise. One option is to iterate over an array in a for loop using a ternary operator for logging if a book has already been read. The second option includes the map() method to process an array of book objects and create an array of formatted messages based on whether each book has been read or not.


map() transforms the array into an array of strings:

``` javascript
let messages = booksForReadingMap.map(book => 
    book.alreadyRead 
        ? `You already read "${book.title}" by ${book.author}` 
        : `You still need to read "${book.title}" by ${book.author}`
);
```

map() iterates over each book in booksForReadingMap. It returns a new array (messages) where each book is represented as a formatted string.

The ternary operator (? :) checks book.alreadyRead:

✅ If true: "You already read [Title] by [Author]"

❌ If false: "You still need to read [Title] by [Author]"

Joins the messages into a single string and logs them

``` javascript
console.log(messages.join("\n"));
```
messages.join("\n") converts the array into a single string, where each message is separated by a new line (\n).

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `solution-2.js` - JavaScript.
- `solution-3.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
