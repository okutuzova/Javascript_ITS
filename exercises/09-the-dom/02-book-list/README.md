# Exercise: 02-book-list

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Create a complete webpage with a title, description and all other HTML tags
● In the body add an h1 title of "My Book List"
● In javascript, iterate through the array of books.
○ For each book, create HTML element with the book title and author and append it to the 
page
○ Use a ul and li to display the books
○ Add a url property to each book object that contains the cover image of the book
○ Add the image to the HTML using Javascript
○ Using javascript change the style of the book depending on whether you have read it or not
● Add an external css file that applies after 5 seconds
○ Now change the style of the book depending on whether you have read it or not using both 
css and javascript (the CSS should use a different color for read books) 

 
## Solution
## Solution
The `index.html` file was created and the `main.js` file was linked to it. The array of books was created with each book being an object containing the following properties:
- `title` - The title of the book.
- `author` - The author of the book.
- `alreadyRead` - A boolean value indicating whether the book has been read (`true`) or not (`false`).
- `url` - The URL of the book cover image.

An unordered list (`<ul>`) element was created using the `createElement` method. This element was appended to the body of the page. For each book in the array:
- A list item (`<li>`) and a paragraph (`<p>`) were created.
- The book title and author were added to the paragraph element using the `textContent` property.
- An image element (`<img>`) was created and the source (`src`) was set to the book's URL.
- A ternary operator was used to check the `alreadyRead` property. If the book was read, the class `read` was added; if not, the class `unread` was added to the list item (`<li>`).
- The entire list item (`<li>`) was appended to the unordered list (`<ul>`) using the `querySelector` method.

The external CSS file was added to the head of the document after 5 seconds using the `setTimeout` method. This file applies the necessary styles to the list items based on whether the book is read or unread.
 


## Files:
- `index.html` - main page.
- `main.js` - external javascript file.
- `styles.css` - external css file.
- `README.md` - exercise requirements and solution. 
