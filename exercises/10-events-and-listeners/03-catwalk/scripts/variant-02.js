/**
 * @file variant-02.js
 * @author Olga Kutuzova
 * @description 03-catwalk
 * Variant 2
 *
*/

function catWalk() {
    const img = document.querySelector('img');
    let leftMargin = 0;
    let movingRightFlag = true;

    setInterval(() => {
        if (movingRightFlag) {
            leftMargin += 10;
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