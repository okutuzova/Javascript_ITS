# Exercise: 01-story

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Add an event listener to the button so that it calls a makeStory function 
when clicked.  
● In the makeStory function, retrieve the current values of the form input 
elements, make a story from them, and output  that in the story div (like 
"Joseph really likes pink cucumbers.")  


## Solution
The solution was implemented as follows:

- An HTML form with three input fields (noun, adjective, person) and a button was created in `index.html`.
- An external JavaScript file `main.js` was created and linked to the HTML file.
- In `main.js`, the `makeStory` function retrieves values from the form, builds a formatted story string, and updates the content of the `#story` element.
- An event listener was added to the button to trigger the story generation on click.



 


## Files:
- `index.html` - main page.
- `main.js` - external javascript file.
- `README.md` - exercise requirements and solution. 
