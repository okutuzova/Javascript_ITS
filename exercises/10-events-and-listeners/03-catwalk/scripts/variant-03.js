/**
 * @file variant-03.js
 * @author Olga Kutuzova
 * @description 03-catwalk
 * Variant 3
 * Cat animation that walks back and forth across the screen.
 * When the cat reaches the middle of the screen, it pauses for 10 seconds,
 * switches to a new image, and then resumes walking.
*/

// screen dimensions in px
/** @type {number}*/
const screenWidth = window.innerWidth;
/** @type {number}*/
const halfScreenWidth = screenWidth / 2;
/** @type {HTMLImageElement}*/
const img = document.querySelector('img');
// images URLs
// had to change to the local gif in img folder
// firefox did not allow http link
const originalImage = './img/cat-walk.gif';
const newCatPicUrl = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg';
//starting position and direction
let leftMargin = 0;
let movingRightFlag = true;
//flags for pause in the middle
let isPaused = false;
// prevents pausing twice in the same pass
let hasPausedInThisPass = false;

/**
 * Initiates the walking animation.
 * The cat moves horizontally across the screen, reverses direction at edges,
 * pauses at the center, changes its image for 10 seconds, then continues walking.
 */
function catWalk() {
    // checks if the cat is paused, if so, returns
    if (isPaused) return;
    // moving the cat
    if (movingRightFlag) {
        leftMargin += 10;
        // reversing direction
        if (leftMargin > window.innerWidth - img.width) {
            movingRightFlag = false;
            img.style.transform = 'scaleX(-1)';
            hasPausedInThisPass = false;
        }
        // same for the left side
    } else {
        leftMargin -= 10;
        if (leftMargin < 0) {
            movingRightFlag = true;
            img.style.transform = 'scaleX(1)';
            hasPausedInThisPass = false;
        }
    }
    // updating the position of the cat
    img.style.marginLeft = `${leftMargin}px`;

    // check if the cat is at the center and if has not paused in this pass
    if (!hasPausedInThisPass && Math.abs(leftMargin - halfScreenWidth) < 10) {
        isPaused = true;
        hasPausedInThisPass = true;

        img.src = newCatPicUrl;
        img.style.width = '300px';
        img.style.height = '300px';
        // Reset the image after 10 seconds, clear the dimensions
        setTimeout(() => {
            img.src = originalImage;
            img.style.width = '';
            img.style.height = '';
            isPaused = false;
        }, 10000);
    }
}

// set the starting position as absolute to move the cat
img.style.position = 'absolute';
setInterval(catWalk, 50);
