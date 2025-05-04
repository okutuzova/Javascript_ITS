const img = document.querySelector('img');
let position = 0;
let direction = 1;
let intervalId;

const screenWidth = window.innerWidth;
const halfScreenWidth = screenWidth / 2;
const step = 10;
const originalImage = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
const newCatPicUrl = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg';

function catWalk() {
    position += direction * step;
    img.style.left = `${position}px`;

    if (position < 0 || position > screenWidth - img.width) {
        direction *= -1;
        img.style.transform = `scaleX(${direction})`;
    }

    if (Math.abs(position - halfScreenWidth) < step) {
        clearInterval(intervalId);
        img.src = newCatPicUrl;
        img.style.width = '300px';
        img.style.height = '300px';
        img.style.position = 'absolute';
        
        setTimeout(() => {
            img.src = originalImage;
            img.style.width = ''; // Remove fixed width
            img.style.height = ''; // Remove fixed height
            img.style.transform = `scaleX(${direction})`;
            intervalId = setInterval(catWalk, 50);
        }, 10000);
    }
}

// Set initial position style
img.style.position = 'absolute';
intervalId = setInterval(catWalk, 50);