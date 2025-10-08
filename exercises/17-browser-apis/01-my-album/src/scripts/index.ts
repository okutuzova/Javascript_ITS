/**
 * @file index.js
 * @author Olga Kutuzova
 * @description 01-my-album
 * This script is used to create a gallery of images. LocalStorage is used to store the images.
 * A Web Worker is used to load the images of cats from a free API.
 * 
 *  * Features:
 * - Web Workers: Used to asynchronously fetch cat images and compute Fibonacci numbers.
 * - LocalStorage: Stores images so the gallery persists between sessions.
 * - Drag & Drop: Allows reordering of images within the gallery.
 * - Bootstrap: Provides styling and layout for a responsive interface.
 */

import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// === DOM Elements ===
const gallery = document.querySelector('#gallery') as HTMLDivElement;
const addBtn = document.querySelector('#add-image') as HTMLButtonElement;
const clearBtn = document.querySelector('#clear-gallery') as HTMLButtonElement;
const fibNumber = document.getElementById('fib-number') as HTMLParagraphElement;

// === Web Worker: Fibonacci Sequence ===
const fibWorker = new Worker(new URL('./fibonacciWorker.ts', import.meta.url), { type: 'module' });
// Start a worker 
fibWorker.postMessage('start');
/**
 * Receives Fibonacci numbers from the Web Worker and updates the DOM.
 * @param {MessageEvent<number>} e - Message event containing the Fibonacci number.
 */
fibWorker.onmessage = (e) => {
  fibNumber.textContent = e.data.toString();
};

// An Array of images from the localStorage
let images: string[] = JSON.parse(localStorage.getItem('myAlbum') || '[]');
// upload 10 images on first load
if (images.length === 0) {
    for (let i = 0; i < 10; i++) {
      addNewCat();
    }
}

/**
 * Renders the image gallery to the DOM.
 * Creates a card for each image with drag-and-drop and remove functionality.
 */
function renderGallery(): void {
  gallery.innerHTML = '';
  images.forEach((data, index) => {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'card shadow-sm h-100 position-relative';
    
    const img = document.createElement('img');
    img.src = data;
    img.className = 'card-img-top';
    img.draggable = true;

    // Drag & Drop
    img.addEventListener('dragstart', (e) => {
      e.dataTransfer!.setData('text/plain', index.toString());
    });

    img.addEventListener('drop', (e) => {
      e.preventDefault();
      const fromIndex = Number(e.dataTransfer!.getData('text/plain'));
      [images[fromIndex], images[index]] = [images[index], images[fromIndex]];
      saveGallery();
      renderGallery();
    });

    img.addEventListener('dragover', (e) => e.preventDefault());

    // remove button for every image
    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn btn-sm btn-success position-absolute top-0 end-0 m-1';
    removeBtn.textContent = 'X';
    removeBtn.addEventListener('click', () => {
      images.splice(index, 1);
      saveGallery();
      renderGallery();
    });

    imgContainer.appendChild(img);
    imgContainer.appendChild(removeBtn);
    gallery.appendChild(imgContainer);
  });
}

// save gallery to the localStorage
function saveGallery(): void {
  localStorage.setItem('myAlbum', JSON.stringify(images));
}

// add a new cat with a web worker 
function addNewCat(): void {
    const worker = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });
    worker.postMessage('get-cat');
  
    worker.onmessage = (e) => {
      if (e.data !== 'error') {
        images.push(e.data);
        saveGallery();
        renderGallery();
      }
      worker.terminate();
    };
  }
  
  addBtn.addEventListener('click', addNewCat);

  // clear gallery button
  clearBtn.addEventListener('click', () => {
    images = [];
    localStorage.removeItem('myAlbum'); 
    renderGallery();
  });
  
  
  
  // Render the gallery 
  renderGallery();