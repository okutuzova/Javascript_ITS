/**
 * @file variant-03.js
 * @author Olga Kutuzova
 * @description 03-catwalk
 * Variant 3
 *
*/

const url = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg';

function imageReset () {
    const img = document.querySelector('img');
    img.src = url;
    img.style="position:absolute;";    
}

function catWalk() {
    const img = document.querySelector('img');
    let leftMargin = 0;
    let movingRightFlag = true;
    let imageChanged = false;

    setInterval(() => {
        if (movingRightFlag) {
            leftMargin += 10;
            if (leftMargin >= (window.innerWidth / 2) && !imageChanged) {
                setTimeout(imageReset, 10000);
                imageChanged = true;
            }
            if (leftMargin > window.innerWidth - img.width) {
                movingRightFlag = false;
                img.style.transform = 'scaleX(-1)';
            }
        } else {
           leftMargin -= 10;
            if (leftMargin < 0) {
                movingRightFlag = true;
                img.style.transform ='scaleX(1)';
            } 
        }
        img.style.marginLeft = `${leftMargin}px`;
    }, 50);
}

catWalk();