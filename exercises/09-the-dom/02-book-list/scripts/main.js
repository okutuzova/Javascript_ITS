/**
 * @file main.js
 * @author Olga Kutuzova
 * @description 02-book-list
 * The script creates a list of books and displays them on the page. 
 * The styles are applied after 5 seconds.
 */


/**
 * @type {Array}
 * @description An array of book objects.
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 * @property {boolean} alreadyRead - Indicates if the book has been read.
 * @property {string} url - The URL of the book cover image.
 */
 
let books = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      alreadyRead: false,
      url: 'https://m.media-amazon.com/images/I/619ncDeLijL.jpg'
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
      url: 'https://m.media-amazon.com/images/I/61r+XBTSLKL.jpg'
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      alreadyRead: true,
      url: 'https://m.media-amazon.com/images/I/81F90H7hnML._AC_UF1000,1000_QL80_.jpg'
    },
    {
      title: 'Deep Work',
      author: 'Cal Newport',
      alreadyRead: false,
      url: 'https://m.media-amazon.com/images/I/91nujEwIpYL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      alreadyRead: true,
      url: 'https://m.media-amazon.com/images/I/713jIoMO3UL.jpg'
    }
  ];

let ul = document.createElement('ul');
document.body.appendChild(ul);

// Loop through the books array and create list items
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = `${book.title} by ${book.author}`; 
    // Create list item
    let li = document.createElement('li');
    let text = document.createElement('p');
    // Add text node with the book information
    text.textContent = bookInfo;
    // Add image
    let img = document.createElement('img');
    img.src = book.url;
    img.alt = book.title;
    // Add class based on the book's read status
    li.className = book.alreadyRead ? 'read' : 'unread';
    li.appendChild(text);
    li.appendChild(img);
    document.querySelector('ul').appendChild(li);    
}

// Connect the external CSS file after 5 seconds
setTimeout(() => {
    let cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = './css/styles.css'; 
    document.head.appendChild(cssLink);
  }, 5000);