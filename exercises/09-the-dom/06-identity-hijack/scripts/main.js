/**
 * @file main.js
 * @author Olga Kutuzova
 * @description 06-identity-hijack
 * This script transforms a Stanford-branded page into a Berkeley-themed one.
 * It updates text, colors, images, and links to reflect UC Berkeley branding.
 */

// 1. Change the page title
document.title = document.title.replaceAll('Stanford', 'Berkeley');

// There is a class 'su-brand' that prevents some elements 
// from being changed by the script. It is removed from all elements.
const elements = document.querySelectorAll('.su-brand');

elements.forEach(el => {
  el.classList.remove('su-brand');
});

// 2. Replace all visible 'Stanford' text with 'Berkeley'
document.querySelectorAll('*').forEach(el => {
    if (el.children.length === 0 && el.textContent.includes('Stanford')) {
      el.textContent = el.textContent.replaceAll('Stanford', 'Berkeley');
  }
});

// 3. Replace Stanford logos or images with Berkeley image
const berkeleyImageUrl = 'https://www.berkeley.edu/wp-content/uploads/2025/04/campus_Campanile_March2025_hero.jpg';
const pictureElement = document.querySelector('picture[aria-hidden="true"]');
if (pictureElement) {
    const sourceElement = pictureElement.querySelector('source');
    if (sourceElement) {
        sourceElement.setAttribute('srcset', `${berkeleyImageUrl} 2560w`);
  }
}

// 4. Update all links from Stanford to Berkeley
document.querySelectorAll('a').forEach(link => {
    if (link.textContent.includes('Stanford')) {
        link.textContent = link.textContent.replaceAll('Stanford', 'Berkeley');
  }
    if (link.href.includes('stanford.edu')) {
        link.href = link.href.replace('stanford.edu', 'berkeley.edu');
  }
});

// 5. Replace Stanford red with Berkeley blue 
const elementsWithStanfordColor = document.querySelectorAll('*');
elementsWithStanfordColor.forEach(element => {
  // Get the current background color of the element
    const backgroundColor = window.getComputedStyle(element).backgroundColor;
    // Check if the background color is #b1040e (Stanford's red)
    if (backgroundColor === 'rgb(177, 4, 14)' || backgroundColor === '#b1040e') {
    // Change the background color to Berkeley's blue
        element.style.backgroundColor = '#002676';  // Berkeley blue
    }
});

// 6. Customize footer appearance
const footer = document.querySelector('footer');
// Change the color of h3 elements with Stanford's red color (#820000) to Berkeley blue (#002676)
const h3Elements = footer.querySelectorAll('h3');
h3Elements.forEach(element => {
    const color = window.getComputedStyle(element).color;
    if (color === 'rgb(130, 0, 0)' || color === '#820000') {
        element.style.color = '#002676';  // Berkeley blue color
    }
});

const globalFooter = document.getElementById('footer__global-footer');
globalFooter.style.backgroundColor = '#002676';  

