/**
 * @file main.js
 * @author Olga Kutuzova
 * @description 02-book-list
 *
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

for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = `${book.title} by ${book.author}`; 
    
    let li = document.createElement('li');
    let text = document.createElement('p')
    text.textContent = bookInfo;
    let img = document.createElement('img');
    img.src = book.url;
    img.alt = book.title;
    li.className = book.alreadyRead ? 'read' : 'unread';

    li.appendChild(text);
    li.appendChild(img);
    document.querySelector('ul').appendChild(li);
    
}



// Connect the external CSS file
setTimeout(() => {
    let cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = './css/styles.css'; // external CSS file 
    document.head.appendChild(cssLink);
  }, 5000);