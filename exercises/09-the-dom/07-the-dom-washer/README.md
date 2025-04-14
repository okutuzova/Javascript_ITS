# Exercise: 07-the-dom-washer

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
Create a simulation of a dishwasher system using two stacks of dishes
● one stack represents dirty dishes, and the other represents clean dishes
● the dirty stack has a random number of plates 10 - 15
● useful functions
○ washDish - moves a dish from the dirty stack to the clean stack
○ drawStacks - displays the current state of both stacks in the page updating the DOM
○ runSimulation - simulate washing all dirty dishes adding a random delay between steps
● Use correct HTML and CSS as needed for this exercise
Bonus
1. have three stacks of dirty dishes and one clean stack
2. the dishwasher is able to wash two dishes at a time


 
## Solution
This simulation uses JavaScript arrays to represent stacks of dishes, following a **Last-In-First-Out (LIFO)** structure.

### Implementation Overview

#### ✅ Basic Version
- One array for dirty dishes.
- One array for clean dishes.
- Dishes are pushed and popped between stacks.
- The DOM is updated after each wash using `drawStacks()`.
- A random delay is created with `setInterval()` and `Math.random()`.

#### 🥇 Bonus Version
- Three separate dirty dish arrays: `dirtyStackOne`, `dirtyStackTwo`, `dirtyStackThree`.
- One clean dish array: `cleanStack`.
- At each interval:
  - Tries to pop dishes from the first two stacks.
  - If fewer than 2 dishes are collected, it attempts to take one more from the third stack.
  - The collected dishes are moved into the clean stack and displayed on screen.

#### Functions:
- `washDish()`: Moves a dish from the dirty stack to the clean stack.
- `drawStacks()`: Updates the DOM to display the current state of both stacks.

`document.getElementById('stack1')`
Looks for an element with the ID 'stack1' in the DOM and returns a reference to it.

`dirtyStackOne.map(...)`
Changes the array dirtyStackOne into an array of HTML strings. Each dish is represented as <div class="dish">Dish X</div>.

`.join('')`
Joins all the strings in the array into a single string.

`innerHTML = ...`
Writes the HTML string into the element with ID stack1.

- `runSimulation()`: Simulates washing all dirty dishes with a random delay.


## Files:
- `index.html` - main page.
- `main.js` - external javascript file.
- `styles.css` - external css file.
- `README.md` - exercise requirements and solution.
