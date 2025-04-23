/**
 * @file variant-01.js
 * @author Olga Kutuzova
 * @description 03-catwalk
 * Variant 1
 *
*/

function catWalk() {
    const img = document.querySelector('img');
    let leftMargin = 0;

    setInterval(() => {
        leftMargin += 10;
        img.style.marginLeft = `${leftMargin}px`;
        
        if (leftMargin > window.innerWidth) {
            leftMargin = -img.width;
        }
    }, 50);
}

catWalk();