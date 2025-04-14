# Exercise: 01-about-me

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Add an external javascript file called main.js
● In JavaScript: 
○ Change the body style so it has a font-family of "Arial, sans-serif"
○ Replace each of the spans (nickname, favorites, hometown) with your own information
○ Iterate through each li and change the class to "list-item"
○ Create a new img element and set its src attribute to a picture of you
○ Append that element to the page
● Add an external css file using Javascript
○ The external css file should make items with the .list-item class white, bold and with an orange background
○ The external css file should be applied after 4 seconds  

 
## Solution
The `main.js` file was created and linked to the `index.html` file. The following actions were performed:  

- The body style was changed to have a font-family of "Arial, sans-serif". For this, the `document.body` element was selected and the `style` property was used to set the font-family.  
- Each of the spans (nickname, favorites, hometown) was replaced with my own information. For this, the `textContent` property was used to change the text content of each span. The method used is `document.getElementById`. This method returns the first element with the specified id.   
- Each li was iterated through and the class was changed to "list-item". For this purpose, the `querySelectorAll` method was used to select all li elements. This method returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors. The `forEach` method was used to iterate through each li element and the `classList` property was used to add the "list-item" class to each element. The `classList` property is safer than `className` because the `classList` property returns a DOMTokenList, which is a collection of space-separated tokens representing the class names of the element. This allows you to add, remove, and toggle classes on an element without occasionally changing the existing classes.  
- A new img element was created and set its src attribute to a picture. For this, the `createElement` method was used to create a new img element. The `src` property was used to set the src attribute of the img element. The `appendChild` method was used to append the img element to the page as a child of 'body' element.  
- The `setTimeout` method was used to delay the execution of the code by 4 seconds. The `setTimeout` method is used to execute a function after a specified delay. The first argument is the function to be executed, and the second argument is the delay in milliseconds.
- The `createElement` method was used to create a new link element. The `href` property was used to set the href attribute of the link element. The `textContent` property was used to set the text content of the link element. The `appendChild` method was used to append the link element to the page as a child of the 'head' element.

## Files:
- `index.html` - main page.
- `main.js` - external javascript file.
- `styles.css` - external css file.
- `README.md` - exercise requirements and solution. 
