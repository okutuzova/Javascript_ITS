/**
 * @file main.js
 * @author Olga Kutuzova
 * @description 06-identity-hijack
 * This script changes Stanford University's website to Berkeley University's website.
 * It changes the title, text, and images of the page.
 * It also changes the links on the page to Berkeley University's website.
 *
 */


// 1. Change the title of the page
document.title = document.title.replaceAll('Stanford', 'Berkeley');

// 2. Change the text of the page
document.querySelectorAll('*').forEach(element => {
    if (element.innerHTML.includes('Stanford')) {
        element.innerHTML = element.innerHTML.replaceAll('Stanford', 'Berkeley');
    }
});


// 3. Replace Stanford logo/symbols
const images = document.getElementsByTagName('img');
for (let img of images) {
    if (img.src.includes('stanford')) {
        img.src = 'https://www.berkeley.edu/wp-content/uploads/2025/04/campus_Campanile_March2025_hero.jpg';
    }
}

// Select the <picture> element
const pictureElement = document.querySelector('picture[aria-hidden="true"]');

// Find the <source> element inside the <picture>
const sourceElement = pictureElement.querySelector('source');

// Update the srcset of the <source> element with Berkeley's image URL
sourceElement.setAttribute('srcset', 'https://www.berkeley.edu/wp-content/uploads/2025/04/campus_Campanile_March2025_hero.jpg 2560w');

// Optionally, update the <img> element's src (if you want to change it too)
const imgElement = pictureElement.querySelector('img');
imgElement.setAttribute('src', 'https://www.berkeley.edu/wp-content/uploads/2025/04/campus_Campanile_March2025_hero.jpg');



// 4. Change links from Stanford to Berkeley
const links = document.querySelectorAll('a');
links.forEach(link => {
    // Change the text inside the link if it contains "Stanford"
    if (link.textContent.includes('Stanford')) {
        link.textContent = link.textContent.replace('Stanford', 'Berkeley');
    }
    
    // Update the href if it points to Stanford's domain
    if (link.href.includes('stanford.edu')) {
        link.href = link.href.replace('stanford.edu', 'berkeley.edu');
    }
});


// 5. Change Stanford red color to Berkeley blue
// Select all elements in the document
const elementsWithStanfordColor = document.querySelectorAll('*');

// Loop through all elements
elementsWithStanfordColor.forEach(element => {
  // Get the current background color of the element
  const backgroundColor = window.getComputedStyle(element).backgroundColor;
  
  // Check if the background color is #b1040e (Stanford's red)
  if (backgroundColor === 'rgb(177, 4, 14)' || backgroundColor === '#b1040e') {
    // Change the background color to Berkeley's blue
    element.style.backgroundColor = '#002676';  // Berkeley blue
  }
});


const footerElementsWithStanfordColor = document.querySelectorAll('footer h2');
footerElementsWithStanfordColor.forEach(element => {
  // Get the current background color of the element
  const backgroundColor = window.getComputedStyle(element).backgroundColor;

  // Check if the background color is #b1040e (Stanford's red)
  if (backgroundColor === '820000' || backgroundColor === '#b1040e') {
    // Change the background color to Berkeley's blue
    element.style.backgroundColor = '#002676';  // Berkeley blue
  } 
})


// Change all occurrences of 'Stanford' to 'Berkeley' within the footer section
const footer = document.querySelector('footer');

// Change text content where 'Stanford' appears
footer.innerHTML = footer.innerHTML.replaceAll('Stanford', 'Berkeley');

// Update the URLs in the footer links (replace Stanford with Berkeley in the URL)
const links = footer.querySelectorAll('a');
links.forEach(link => {
    // Replace 'stanford.edu' with 'berkeley.edu' in href
    if (link.href.includes('stanford.edu')) {
        link.href = link.href.replace('stanford.edu', 'berkeley.edu');
    }
    // Replace any Stanford-specific page with a corresponding Berkeley page, or home page
    if (link.href.includes('stanford.edu')) {
        link.href = link.href.replace('stanford.edu', 'berkeley.edu');
    }
});

// Change the color of h3 elements with Stanford's red color (#820000) to Berkeley blue (#002676)
const h3Elements = footer.querySelectorAll('h3');
h3Elements.forEach(element => {
    const color = window.getComputedStyle(element).color;
    if (color === 'rgb(130, 0, 0)' || color === '#820000') {
        element.style.color = '#002676';  // Berkeley blue color
    }
});

// Optional: Change the background color of Stanford-specific elements to Berkeley blue
footer.querySelectorAll('*').forEach(element => {
    const backgroundColor = window.getComputedStyle(element).backgroundColor;
    if (backgroundColor === 'rgb(178, 4, 14)') { // Stanford red color
        element.style.backgroundColor = '#002676';  // Berkeley blue color
    }
});

// Optional: Change any text color associated with Stanford red to Berkeley blue
footer.querySelectorAll('*').forEach(element => {
    const color = window.getComputedStyle(element).color;
    if (color === 'rgb(178, 4, 14)') {  // Stanford red color
        element.style.color = '#002676';  // Berkeley blue color
    }
});
