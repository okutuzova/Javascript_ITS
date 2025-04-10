/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 02-word-guesser
 * 
 * This script simulates a simple "Hangman" game where a player guesses letters to complete a hidden word. 
 * The word is stored as an array of strings, and the player has a limited number of attempts (6 guesses) 
 * to reveal all the letters.
 */


/**
 * The word to be guessed, stored as an array of letters.
 * @constant {string[]}
 */
const lettersOfWord = ['C', 'A', 'T'];

/**
 * The current state of the guessed word, initially filled with underscores.
 * @constant {string[]}
 */
const guessedLetters = ['_', '_','_'];

/**
 * The number of remaining incorrect guesses allowed.
 * @type {number}
 */
let remainingGuesses = 6;


/**
 * Handles a player's letter guess and updates the game state accordingly.
 * @param {string} letter - The letter guessed by the player.
 * @returns {void} Outputs messages to the console about game progress.
 */
function guessLetter(letter) {
    if (remainingGuesses <= 0) {
        console.log('No more guesses left. Game over :(');
        return;
    } 

    let correctGuess = false;

    // Check if the guessed letter is in the word
    for (let i = 0; i < lettersOfWord.length; i++) {
        if (lettersOfWord[i] === letter) {
            guessedLetters[i] = letter;
            correctGuess = true;
        }
    }
    // Provide feedback to the user
    if (correctGuess) {
        console.log(`Congrats! You guessed a letter: ${letter}`);
    } else {
        console.log(`Incorrect guess: ${letter}`);
        remainingGuesses--;
    }
    
    // Display the progress and remaining guesses
    console.log(`Your word is: ${guessedLetters.join(' ')}`);
    console.log(`Guesses remaining: ${remainingGuesses}`);

    // Check for win/loss conditions
    if (!guessedLetters.includes('_')) {
        console.log("Congratulations! You win!");
        remainingGuesses = 0;  // End the game
    } else if (remainingGuesses === 0) {
        console.log("You lose! The word was: " + lettersOfWord.join(''));
        }
    }

    

/** 
 * Test Case 1: Some correct and incorrect guesses 
 * Expected Outcome: The game continues until all letters are guessed or guesses run out.
 */
// guessLetter('G');
// guessLetter('I');
// guessLetter('O');
// guessLetter('A');
// guessLetter('T');
// guessLetter('F');
// guessLetter('S');
// guessLetter('H');


/** 
 * Test Case 2: Losing the game by making 6 incorrect guesses
 * Expected Outcome: Displays "No more guesses left. Game over :(".
 */
// guessLetter('X');  // Wrong
// guessLetter('Y');  // Wrong
// guessLetter('Z');  // Wrong
// guessLetter('Q');  // Wrong
// guessLetter('W');  // Wrong
// guessLetter('M');  // Wrong  -> "You lose!" message appears
// guessLetter('C');  // "No more guesses left" message appears


/** 
 * Test Case 3: Winning the game by guessing all correct letters
 * Expected Outcome: Displays "Congratulations! You win!".
 */
guessLetter('G');
guessLetter('I');
guessLetter('O');
guessLetter('A');
guessLetter('T');
guessLetter('C');


