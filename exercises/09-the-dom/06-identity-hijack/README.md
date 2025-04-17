# Exercise: 06-identity-hijack

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
Change the Stanford website using elements from the Berkeley website
● Brand and name
○ Find any elements with the word 'Stanford' and replace it with 'Berkeley'
○ Remember to change the title of the page as well
○ Replace any symbols of Stanford University with Berkeley
● Colors
○ Find all elements with the 'Stanford' color(s) and replace them with the 'Berkeley' color(s)
● Links
○ Manually find all the links in the navigation area and replace them with references to the 
Berkeley website if there are similar pages there. Otherwise links should point to the 
Berkeley homepage
● Submit a Javascript file with all the changes

 
## Solution
1. Changed the title of the page using a string method:
``` javascript
document.title = document.title.replaceAll('Stanford', 'Berkeley');
```
2. 
`document.querySelectorAll('*')`
This selects all elements on the page — every tag from <html> down to <span>, <a>, etc.
It creates a NodeList of every element in the DOM tree.

`.forEach(el => { ... })`
We loop through each element (el) in that list.

`if (el.children.length === 0)`
We check if this element has no child elements. If `el.children.length === 0`, that means it's a `leaf node` — it only contains text, not other HTML tags inside.
This is checked to avoid breaking nested elements when replacing text. 
`el.textContent.includes('Stanford')`**
Before doing any changes, check if the element’s text actually contains `"Stanford"`.
`el.textContent = el.textContent.replaceAll('Stanford', 'Berkeley');`
If we passed the checks, now we safely replace the word `"Stanford"` with `"Berkeley"` in the textContent.`textContent` is safe to update on leaf nodes because there's no HTML structure to break inside.


3. Replace Stanford logo/symbols 
I changed a background picture in the header of the page. 
``` javascript
const pictureElement = document.querySelector('picture[aria-hidden="true"]');
```
I received the picture element using `document.querySelector()` and the `picture[aria-hidden="true"]` selector.

``` javascript
const sourceElement = pictureElement.querySelector('source');
```
I selected the `<source>` element inside the `<picture>` element. 

``` javascript
sourceElement.setAttribute('srcset', 'https://www.berkeley.edu/wp-content/uploads/2025/04/campus_Campanile_March2025_hero.jpg 2560w');
```
I updated the `srcset` attribute of the `<source>` element to the new image URL.

4. Changing links
I received a Nodelist of all `<a>` elements on the page using `document.querySelectorAll('a')`. Then iterated through the list using a .forEach() method and replaced the href attribute of each link, as well as the textContent.

5. Changing colors
I used `document.querySelectorAll('*')` to select all elements on the page. An asterisk is a wildcard selector, that grabs all elements of the page. Then I iterated through the list using a.forEach() method and retrieved a computed style of each element using `window.getComputedStyle(el)`. This method returns the actual color being displayed on the screen, regardless of how it was defined in CSS. There is a check if the background color is Stanford's red, and if it is, it is replaced with Berkeley's blue.

6. Changing color of the footer elements
The footer elements styling I changed separately. H3 elements and the footer background Color were adkusted accordingly. 

## Files:
- `README.md` - exercise requirements and solution. 
