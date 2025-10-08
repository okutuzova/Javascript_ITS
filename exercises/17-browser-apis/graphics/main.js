// get the canvas element from the HTML document
const canvas = document.getElementById('myCanvas');
// set the canvas dimensions
canvas.width = 500;
canvas.height = 500;
// get the canvas context, which is used for drawing
const ctx = canvas.getContext('2d');
// Set the background color to light blue
ctx.fillStyle = 'lightblue';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// draw a rectangle
ctx.fillStyle = '#bada55';
ctx.fillRect(10, 10, 50, 50);
// draw text
ctx.font = '30px Arial';
ctx.fillStyle = '#7555da';
ctx.fillText('Hello World', 20, 90);

// More complex example
// Set the initial ball position, size, and velocity
let x = 50;
let y = 50;
let radius = 20;
let dx = 5;
let dy = 5;

// Set the initial fill color and trail color
let fillColor = 'red';
let trailColor = 'rgba(255, 0, 0, 0.2)';
// Define the animation loop
function animate() {
 // Clear the canvas before drawing the next frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw the trail behind the ball
    ctx.fillStyle = trailColor;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  // Update the ball position
    x += dx;
    y += dy;
     // Check if the ball has hit the edges of the canvas
    if (x + radius > canvas.width || x - radius < 0) {
        dx = -dx;
        fillColor = getRandomColor();
    }
    if (y + radius > canvas.height || y - radius < 0) {
        dy = -dy;
        fillColor = getRandomColor();
    }
    // Draw the ball
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();

     // Request the next animation frame
    requestAnimationFrame(animate);
}

// Helper function to generate a random color
function getRandomColor() {
 const r = Math.floor(Math.random() * 256);
 const g = Math.floor(Math.random() * 256);
 const b = Math.floor(Math.random() * 256);
 return `rgb(${r}, ${g}, ${b})`;
}
// Start the animation loop
animate();

   
 