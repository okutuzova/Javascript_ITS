/**
 * @file main.js
 * @author Olga Kutuzova
 * @description 04-enhanced-catwalk
 * 
*/
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const fasterButton = document.querySelector('#faster');
const slowerButton = document.querySelector('#slower');
let step = 0;  // Changed initial step to 0
let intervalId;
const img = document.querySelector('img');
let leftMargin = 0;
let movingRightFlag = true;

// Initialize speed display
changeSpeedOnDisplay(step);

startButton.addEventListener('click', catWalk);
stopButton.addEventListener('click', stopCatWalk);
fasterButton.addEventListener('click', catSpeedUp);
slowerButton.addEventListener('click', catSlowDown);


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

function stopCatWalk() {
    clearInterval(intervalId);
    changeSpeedOnDisplay(0);
    startButton.disabled = false;
    stopButton.disabled = true;
    fasterButton.disabled = true;  
    slowerButton.disabled = true;  
}


function catSpeedUp() {
    step += 10;
    catWalk();
    changeSpeedOnDisplay(step);
    startButton.disabled = true;
    stopButton.disabled = false;
    fasterButton.disabled = false;
    slowerButton.disabled = false;
}

function catSlowDown() {
    step -= 10;
    catWalk();
    changeSpeedOnDisplay(step);
    startButton.disabled = true; 
    stopButton.disabled = false;
    fasterButton.disabled = false;
    slowerButton.disabled = false;
}

function changeSpeedOnDisplay(step) {
    const speedDisplay = document.querySelector('#speed');
    speedDisplay.textContent = `${step}`; 
}