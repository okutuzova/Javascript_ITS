/**
 * @file variant-02.js
 * @author Olga Kutuzova
 * @description 03-catwalk
 * Variant 2
 * This script animates an image to move back and forth across the screen, 
 * flipping it horizontally when it reaches the edges.
 */
/**
 * Animates an image to move back and forth across the screen.
 * When the image reaches the right side, it flips horizontally 
 * and starts moving left.
 * When it reaches the left side, it flips back to its original 
 * orientation and starts moving right.
 */
function catWalk() {
    const img = document.querySelector('img');
    let leftMargin = 0;
    // Boolean flag to check whether the image is moving right or left.
    let movingRightFlag = true;

    setInterval(() => {
        if (movingRightFlag) {
            leftMargin += 10;
            // If the image has reached the right side.
            if (leftMargin > window.innerWidth - img.width) {
                // Set the flag to indicate the image should now move left.
                movingRightFlag = false;
                // Flip the image horizontally.
                img.style.transform = 'scaleX(-1)';
            }
            // If the image is moving to the left.
        } else {
            // Decrease the left margin to move the image to the left.
           leftMargin -= 10;
            if (leftMargin < 0) {
                // Set the flag to indicate the image should now move right.
                movingRightFlag = true;
                img.style.transform ='scaleX(1)';
            } 
        }
        img.style.marginLeft = `${leftMargin}px`;
    }, 50);
}

catWalk();