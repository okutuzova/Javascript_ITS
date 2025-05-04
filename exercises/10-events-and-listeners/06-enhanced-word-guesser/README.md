# Exercise: 06-enhanced-word-guesser

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Begin with the 'Word Guesser' exercise from a previous lesson
● Incorporate the following enhancements
○ Implement an interface to allow users to input letters via an HTML `<input>` element
■ Integrate additional necessary HTML elements
■ Validate user input to ensure it consists of a single character and is of the correct type
○ Enhance the visual presentation of game results directly on the page
■ This can include the utilization of images or other graphics to enrich the experience
■ Display previous guesses, the remaining number of guesses, and other pertinent 
information to the user
○ Add additional features that would augment the game's appeal and interactivity

## Features
- Randomly selects a country name from a predefined list

- Displays correct guesses and tracks incorrect ones

- Hangman figure appears incrementally with each wrong guess

- Input validation and feedback for repeated or invalid letters

- Win/loss messages and a score tracker

- Responsive and styled with Pico CSS

✅ How to Play
1. Open index.html in a browser.

2. A hidden country name will be selected at random.

3. Type one letter at a time into the input field.

4. Correct letters will be revealed; incorrect ones will build the hangman figure.

5. You win by guessing all letters correctly before the figure is fully drawn.

6. Click New Game to restart anytime.

### Functions Breakdown
`displayWord()`
🔹 Shows the current state of the guessed word with:

Letters the player has guessed revealed

The rest shown as underscores _
🔹 Updates the display of letters that have been guessed incorrectly.

`updateFigure()`
🔹 Shows parts of the hangman figure as the player makes wrong guesses.
🔹 Each error reveals one new figure part.
🔹 Also updates the number of lives left.

`checkWin()`
🔹 Checks if there are no _ characters left (i.e., the word has been fully guessed).
🔹 Displays a win message and increases the score.
🔹 Disables input to prevent further letters.


`checkLoss()`
🔹 Checks if the number of errors has reached the max allowed (figure fully drawn).
🔹 Displays a game over message and disables input.

`resetGame()`
🔹 Starts a new game:
🔹Picks a new word
🔹Clears previous guesses and errors
🔹Resets messages and UI

`inputLetter.addEventListener("keydown", …)`
🔹Ensures input is a single valid character
🔹Upon enter key, cleans the input form
🔹Checks if the letter has already been guessed
🔹Adds correct or wrong letters to the appropriate arrays
🔹Updates stats


### Project Structure
06-enhanced-word-guesser/
│
├── index.html           # Main HTML structure
├── css/
│   └── styles.css       # All custom styles
├── scripts/
│   └── main.js          # Game logic
└── README.md            # You're here!

NB: SVG image from here:
https://codesandbox.io/p/sandbox/pwj1h?file=%2Findex.html%3A21%2C21 