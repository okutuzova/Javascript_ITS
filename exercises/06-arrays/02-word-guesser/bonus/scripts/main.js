/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 02-word-guesser-bonus
 *
 * This script simulates a simple "Hangman" game where a player guesses letters to complete a hidden word. 
 * The word is stored as an array of strings, and the player has a limited number of attempts (6 guesses) 
 * to reveal all the letters.
 * Random rewards are added or subtracted, and a function selecting a random letter is implemented.
 */

/**
 * Array of words that can be chosen for the guessing game.
 * @type {string[]}
 */
const words = ["GOAT", "APPLE", "MANGO", "ZEBRA", "TIGER", "PLANE", "HOUSE", "CAT", "HOTEL", "TENNIS"];

/**
 * Array of possible reward points for correct guesses.
 * @type {number[]}
 */
const rewards = [10, 20, 30, 40, 50]; // Possible rewards

/**
 * The selected word chosen randomly from the words array.
 * @type {string}
 */
// let selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

let selectedWord = getRandom(words);


/**
 * Returns a random element from the given sequence (array or string).
 *
 * @param {Array|string} sequence - The sequence (array or string) to select a random element from.
 * @returns {*} A random element from the sequence.
 */
function getRandom(sequence) {
    return sequence[Math.floor(Math.random() * sequence.length)]
}

/**
 * Array representing the word to be guessed with each letter separated.
 * @type {string[]}
 */
let wordArray = selectedWord.split("");

/**
 * Array representing the current state of the guessed word (with underscores for unguessed letters).
 * @type {string[]}
 */
let guessedArray = Array(wordArray.length).fill("_");

/**
 * Array of guessed letters so far.
 * @type {string[]}
 */
let guessedLetters = [];

/**
 * Maximum number of incorrect guesses allowed.
 * @type {number}
 */
let maxGuesses = 6;

/**
 * The number of incorrect guesses made so far.
 * @type {number}
 */
let wrongGuesses = 0;

/**
 * The total reward points accumulated by the player during the game.
 * @type {number}
 */
let totalReward = 0;

/**
 * Array representing the stages of the hangman game, displayed as ASCII art.
 * @type {string[]}
 */
const hangmanStages = [

    // Initial state
     `
     --------
     |      |
     |
     |
     |
     |
     -
  `,
    // Only head
    `
    --------
    |      |
    |      O
    |
    |
    |
    -
    `,
    // Head and torso
    `
       --------
       |      |
       |      O
       |      |
       |      |
       |
       -
    `,
    // Head, torso, one arm
    `
       --------
       |      |
       |      O
       |     \\|
       |      |
       |
       -
    `,
    // Head, torso, both arms
    `
       --------
       |      |
       |      O
       |     \\|/
       |      |
       |
       -
    `,
    // Head, torso, both arms, one leg
    `
       --------
       |      |
       |      O
       |     \\|/
       |      |
       |     /
       -
    `,
    // Final state: head, torso, both arms, both legs
    `
       --------
       |      |
       |      O
       |     \\|/
       |      |
       |     / \\
       -
    `
];

/**
 * Generates a random letter from the English alphabet.
 * @returns {string} A randomly selected letter from A-Z.
 */
function getRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return getRandom(alphabet);
}

/**
 * The main function to handle a guess. It processes the letter guessed by the player,
 * checks if it's correct, updates the game state, and prints the result.
 * @param {string} letter - The letter guessed by the player.
 */
function guessLetter(letter) {

    // Check if already guessed
    if (guessedLetters.includes(letter)) {
        console.log(`You already guessed '${letter}'. Try another letter.`);
        return;
    }

    // Add the guessed letter to the array of guessed letters
    guessedLetters.push(letter);


    // If the letter is in the word, update the guessed array
    if (wordArray.includes(letter)) {

        for (let i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === letter) {
                guessedArray[i] = letter;
            }
        }

        // // Add a random reward for the correct guess
        let reward = getRandom(rewards);
        totalReward += reward;
        console.log(`✅ Correct! You earned ${reward} points!`);
        console.log(`🔤 Your letter was ${letter}!`);
    } else {
        // If the guess is wrong, increment the wrong guess count and deduct a penalty
        wrongGuesses++;
        let penalty = getRandom(rewards);
        totalReward -= penalty;
        console.log(`❌ Wrong guess! You lost ${penalty} points.`);
        console.log(`🔤 Your letter was ${letter}!`);
    }

    // Display the current hangman stage, word progress, remaining guesses, and total reward
    console.log(hangmanStages[wrongGuesses]);
    console.log(`Word: ${guessedArray.join(" ")}`);
    console.log(`Remaining guesses: ${maxGuesses - wrongGuesses}`);
    console.log(`💰 Total Reward: ${totalReward} points`);
}

/**
 * Starts and manages the Hangman game loop.
 *
 * The function continuously makes guesses until the player either:
 * - Wins by guessing all letters correctly.
 * - Loses by reaching the maximum allowed wrong guesses.
 *
 * It ensures that a win/loss message is always displayed at the end of the game.
 *
 * @function
 * @returns {void} This function does not return anything; it only logs the game progress to the console.
 */
function playGame() {
    while (wrongGuesses < maxGuesses && guessedArray.includes("_")) {
        let letter = getRandomLetter();  // Guess a random letter
        guessLetter(letter);
    }

    // Ensure a win/loss message is displayed at the end
    if (!guessedArray.includes("_")) {
        console.log("🎉 You won! The word was:", selectedWord);
    } else if (wrongGuesses >= maxGuesses) {
        console.log("☠️ You lost! The word was:", selectedWord);
    }
}

// Start the game
playGame();
