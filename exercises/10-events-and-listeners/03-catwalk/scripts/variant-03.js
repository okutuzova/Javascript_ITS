/**
 * @file variant-03.js
 * @author Olga Kutuzova
 * @description 03-catwalk
 * Variant 3
 *
*/


const img = document.querySelector('img');
const screenWidth = window.innerWidth;
const halfScreenWidth = screenWidth / 2;
const originalImage = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
const newCatPicUrl = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg';

function imageReset() {
    img.src = newCatPicUrl;
    img.style = "position:absolute; width: 200px; height: 200px;";    
}

function catWalk() {
    let leftMargin = 0;
    let movingRightFlag = true;
    let isPaused = false;

    setInterval(() => {
        if (isPaused) return;

        // Check for middle position in both directions
        if (Math.abs(leftMargin - halfScreenWidth) < 10) {
            isPaused = true;
            imageReset();
            
            setTimeout(() => {
                img.src = originalImage;
                isPaused = false;
            }, 10000);
        }

        if (movingRightFlag) {
            leftMargin += 10;
            if (leftMargin > screenWidth - img.width) {
                movingRightFlag = false;
                img.style.transform = 'scaleX(-1)';
            }
        } else {
            leftMargin -= 10;
            if (leftMargin < 0) {
                movingRightFlag = true;
                img.style.transform = 'scaleX(1)';
            }
        }
        img.style.marginLeft = `${leftMargin}px`;
    }, 50);
}

catWalk();