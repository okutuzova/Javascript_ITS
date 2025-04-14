/**
 * @file main.js
 * @author Olga Kutuzova
 * @description 01-about-me
 *
 * This script changes the content of the page. 
 * It changes the font-family, nickname, favorites, and hometown, and adds a photo.
 * It also connects the external CSS file. 
 */

// Change body font-family
document.body.style.fontFamily = 'Arial, sans-serif';

// replace each span 
document.getElementById('nickname').textContent = 'Olga';
document.getElementById('favorites').textContent = 'JavaScript, Python, MySql';
document.getElementById('hometown').textContent = 'Mykolayiv';

// Change class of every <li> to "list-item"
let allLi = document.querySelectorAll('li');
allLi.forEach(li => {
  li.classList.add('list-item');
});

// Create <img> and add a link to a photo
let img = document.createElement('img');
img.src = './img/photo-1543852786-1cf6624b9987.jpg';
img.alt = 'My photo';
document.body.appendChild(img);

// Connect the external CSS file
setTimeout(() => {
    let cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = './css/styles.css'; // external CSS file 
    document.head.appendChild(cssLink);
  }, 4000);