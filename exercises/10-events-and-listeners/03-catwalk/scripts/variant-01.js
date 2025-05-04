/**
 * @file variant-01.js
 * @author Olga Kutuzova
 * @description 03-catwalk
 * Variant 1
 * This script makes an image move across the screen continuously by 
 * updating its left margin. Once the image moves off the screen, 
 * it resets and starts again.
*/

/**
 * Makes the image walk across the screen by updating its left margin.
 * Once the image passes the window's width, it resets and starts again 
 * from the left.
 */
function catWalk() {
    // Select the first <img> element in the document
    const img = document.querySelector('img');
     // Initial margin value
    let leftMargin = 0;
    // Move the image every 50 milliseconds
    setInterval(() => {
        // Increase the left margin by 10px on each interval
        leftMargin += 10;
        // Update the image's margin-left style to move it
        img.style.marginLeft = `${leftMargin}px`;
        // If the image has moved out of the screen, reset its position
        if (leftMargin > window.innerWidth) {
            leftMargin = -img.width;
        }
    }, 50);
}

catWalk();