/**
 * @file main.js
 * @author Olga Kutuzova
 * @description 04-enhanced-catwalk
 * The script controls a cat image walking back and 
 * forth across the screen with adjustable speed.
*/
/** @type {HTMLButtonElement} */
const startButton = document.querySelector('#start');
/** @type {HTMLButtonElement} */
const stopButton = document.querySelector('#stop');
/** @type {HTMLButtonElement} */
const fasterButton = document.querySelector('#faster');
/** @type {HTMLButtonElement} */
const slowerButton = document.querySelector('#slower');
/** @type {number} Current speed of the cat in pixels per step */
let step = 0;  // Changed initial step to 0
/** @type {number|undefined} ID of the current interval */
let intervalId;
/** @type {HTMLImageElement} */
const img = document.querySelector('img');
/** @type {number} Current left margin of the image */
let leftMargin = 0;
/** @type {boolean} Direction flag: true for right, false for left */
let movingRightFlag = true;

// Initialize speed display
changeSpeedOnDisplay(step);

// Button event listeners
startButton.addEventListener('click', catWalk);
stopButton.addEventListener('click', stopCatWalk);
fasterButton.addEventListener('click', catSpeedUp);
slowerButton.addEventListener('click', catSlowDown);

/**
 * Starts the cat walk animation, toggling direction when reaching screen edges.
 */
function catWalk() {
    clearInterval(intervalId);
    changeSpeedOnDisplay(step);
    intervalId = setInterval(() => {
        if (movingRightFlag) {
            leftMargin += step;
            if (leftMargin > window.innerWidth - img.width) {
                movingRightFlag = false;
                img.style.transform = 'scaleX(-1)';
            }
        } else {
           leftMargin -= step;
            if (leftMargin < 0) {
                movingRightFlag = true;
                img.style.transform ='scaleX(1)';
            } 
        }
        img.style.marginLeft = `${leftMargin}px`;
    }, 50);
    startButton.disabled = true;
    stopButton.disabled = false;
    fasterButton.disabled = false;
    slowerButton.disabled = false;
}
/**
 * Stops the cat walk animation and disables speed controls.
 */
function stopCatWalk() {
    clearInterval(intervalId);
    changeSpeedOnDisplay(0);
    startButton.disabled = false;
    stopButton.disabled = true;
    fasterButton.disabled = true;  
    slowerButton.disabled = true;  
}
/**
 * Increases the cat's speed and restarts animation at new speed.
 */
function catSpeedUp() {
    step += 10;
    catWalk();
    changeSpeedOnDisplay(step);
    startButton.disabled = true;
    stopButton.disabled = false;
    fasterButton.disabled = false;
    slowerButton.disabled = false;
}
/**
 * Decreases the cat's speed and restarts animation at new speed.
 */
function catSlowDown() {
    step -= 10;
    catWalk();
    changeSpeedOnDisplay(step);
    startButton.disabled = true; 
    stopButton.disabled = false;
    fasterButton.disabled = false;
    slowerButton.disabled = false;
}
/**
 * Updates the on-screen display of the current speed.
 * @param {number} step - Current speed in pixels per move step
 */
function changeSpeedOnDisplay(step) {
    const speedDisplay = document.querySelector('#speed');
    speedDisplay.textContent = `${step}`; 
}