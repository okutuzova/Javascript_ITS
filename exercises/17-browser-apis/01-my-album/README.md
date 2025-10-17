# Exercise: 01-my-album

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26

## Exercise Requirements 
Create a page with 10 random images that are dynamically loaded using 
requests when the user opens the page
The images should be of the same height and width. There should be 4 images 
per row, so a 4x3 grid that fits the 10 images
The user can click buttons to load a new image in real time, or remove an image
The user can also arrange the images in the gallery using drag and drop
The gallery should remember the loaded images and their order so that if the 
user returns to the page, the same images are loaded and keep the same order

## Solutuion
For the exercise, the following technologies were used:
- HTML
- CSS
- Typescript
- Webpack
- Bootstrap
- API 'https://cataas.com/'

### Scripts
'index.ts'
The necessary styles including Bootstrap are imported.
The DOM elements are selected for the DOM manipulation. 
A separate worker for endless Fibonacci sequence stamping is created.
```typescript
new URL('./fibonacciWorker.ts', import.meta.url)
```
Here an absolute URL is received. type module creates a module for a worker. As the calculation is endless, the worker is not terminated. 

Next, on the first page load a random gallery of ten images is loaded. If the page has been reloaded, the images are saved n local storage and remain the same. 

Drag and drop functionality is implemented.

When a user starts dragging an image, a dragstart event is triggered. e.dataTransfer is an object that contains data that is being dragged. setData('text/plain', index.toString()) saves the image index to the dataTransfer object. text/plain is a data type for simplicity. dataTransfer! is a TS non-null assertion operator.

The drop event is triggered when an image is released on another spot. .preventDefault ensures that browser will not perform the standard action like file opening. Then the images are swapped using destructuring. 

dragover is triggered when an image is dragged over another image. preventDefault is used to prevent the browser from performing the standard action.

A remove button is also added to every image. Using a splice method, the image is removed from the array and the gallery is re-rendered.

saveGallery allows to save the gallery in local storage.

A new worker that pulls the images from the free API is created. It is connected to a button. 
A clear gallery button is also implemented. It removes the albim from the local storage, so on the new page load other 10 images will be loaded. 

'fibonacciWorker.ts'
IntervalID stores an interval that is null at the start and might be cleared later. 
ReturnType<T> is a built in type that takes of type function and returns a type of what is returned by the function. 
```typescript
self.addEventListener('message', (e) => {
  ...
});
```
A worker listens to the messages coming from the main thread. If start message is freceived the Fibonacci calculation starts every 2 secs. Check `if (intervalId !== null)` protects from the repeated start. The commands reset and stop are also handled in case the calculations have to start from the beginning or get stopped. The worker is not terminated, as the purpose is demostration of endless calculation. 


'randomCatWorker'
This is an adapted worker, as an initial idea was to make a gallery that was loading random cats. 
Therefore, the main logic remained in sendCat: 
response.blob transforms the data received from the URL to a Blob (binary object). Await is needed to finish an async operation. 
FileReader object allows to read binary data and transform them in a string that is to be passed with postMessage. Without this transformation it will not work, as you may not pass a Blob in postmessage. 
reader.onloadend is an event that triggers when blob reading is completed. reader.result is a string representing an image. Base64 is a string that maybe saved in localstorage. 

Instructions for building and running the project:
```javascript
npm install
npm run start (for development server).
```