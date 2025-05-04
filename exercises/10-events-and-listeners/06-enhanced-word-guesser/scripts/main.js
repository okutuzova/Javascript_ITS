/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 06-enhanced-word-guesser
 * 
 * A browser-based Hangman game where the player tries to guess
 * a hidden country name by entering one letter at a time. Incorrect
 * guesses reveal parts of a stick figure. The game ends in a win
 * when the word is fully revealed, or a loss when all parts are shown.
 */

/**
 * List of available country names to randomly choose from.
 * @type {string[]}
 */
const words = ["ARGENTINA", "AUSTRALIA", "AUSTRIA", "BANGLADESH", "BELGIUM", "BRAZIL", "BULGARIA", "CANADA", 
    "CHILE", "CHINA", "COLOMBIA", "CROATIA", "CZECHIA", "DENMARK", "DOMINICA", "ECUADOR", 
    "EGYPT", "ESTONIA", "ETHIOPIA", "FINLAND", "FRANCE", "GEORGIA", "GERMANY", "GHANA", 
    "GREECE", "HUNGARY", "ICELAND", "INDIA", "INDONESIA", "IRAN", "IRAQ", "IRELAND", 
    "ISRAEL", "ITALY", "JAMAICA", "JAPAN", "JORDAN", "KENYA", "LATVIA", "LEBANON", 
    "LITHUANIA", "MALAYSIA", "MEXICO", "MOROCCO", "NEPAL", "NETHERLANDS", "NIGERIA", 
    "NORWAY", "PAKISTAN", "PERU", "PHILIPPINES", "POLAND", "PORTUGAL", "QATAR", "ROMANIA", 
    "RUSSIA", "SAUDIARABIA", "SENEGAL", "SERBIA", "SINGAPORE", "SLOVAKIA", "SLOVENIA", 
    "SOUTHAFRICA", "SOUTHKOREA", "SPAIN", "SWEDEN", "SWITZERLAND", "THAILAND", "TURKEY", 
    "UKRAINE", "UNITEDKINGDOM", "UNITEDSTATES", "URUGUAY", "VENEZUELA", "VIETNAM", "ZIMBABWE"]; 

// Currently chosen word
let selectedWord = "";
// Correctly guessed letters
let guessedLetters = [];
// Incorrect guesses
let wrongLetters = [];
// Number of incorrect attempts
let errors = 0;
// Player score (+1 if guessed a word)
let score = 0;

/** @type {HTMLElement} */
const wordDisplay = document.getElementById("word-display");
/** @type {HTMLInputElement} */
const inputLetter = document.getElementById("input-letter");
/** @type {HTMLElement} */
const message = document.getElementById("message");
/** @type {NodeListOf<HTMLElement>} */
const figureParts = document.querySelectorAll(".figure-part");
/** @type {HTMLElement} */
const scoreDisplay = document.getElementById("score");
/** @type {HTMLElement} */
const errorsDisplay = document.getElementById("errors-remaining");
/** @type {HTMLElement} */
const usedLettersDisplay = document.getElementById("used-letters");
/** @type {HTMLElement} */
const newGameButton = document.getElementById("restart-btn");

/**
 * Selects a random word from the list.
 * @returns {string} Random country name.
 */
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

// Initialize game on page load
window.addEventListener("load", resetGame);

/**
 * Updates the word display with guessed letters and underscores.
 * Also updates the display of used (wrong) letters.
 */
function displayWord() {
    const display = selectedWord
      .split("")
      .map(letter => guessedLetters.includes(letter) ? letter : "_")
      .join(" ");
      wordDisplay.textContent = display;
      // Used Letters Display
      usedLettersDisplay.textContent = "Used Letters: " + wrongLetters.join(", ");
}

/**
 * Reveals parts of the stick figure for each wrong guess.
 * Also updates the "lives remaining" counter.
 */
function updateFigure() {
    figureParts.forEach((part, index) => {
      // If index is less than errors, show part, otherwise hide
      if (index < errors) {
        part.classList.add("visible");
        part.classList.remove("hidden");
      } else {
        part.classList.add("hidden");
        part.classList.remove("visible");
      }
    });
    // Add remaining errors
    const remainingErrors = figureParts.length - errors;
    errorsDisplay.textContent = "Lives remaining: " + remainingErrors;
}

/**
 * Checks whether the player has guessed all letters.
 * If yes, shows a win message and updates the score.
 */
function checkWin() {
    // Check if there are "_" in the wordDisplay
    if (!wordDisplay.innerHTML.includes("_")) {
      message.textContent = "🏆 You Win!";
      score++;  // increment score
      scoreDisplay.textContent = "Score: " + score;
      inputLetter.disabled = true;  // disable input
    }
}

/**
 * Checks whether the player has run out of guesses.
 * If yes, shows a game over message with the correct word.
 */
function checkLoss() {
    if (errors >= figureParts.length) {
      message.textContent = "❌😢 Game Over! The word was: " + selectedWord;
      inputLetter.disabled = true;
    }
}

/**
 * Resets the game state to start a new round.
 * Chooses a new word and resets guesses, figure, messages, and inputs.
 */
function resetGame() {
    selectedWord = getRandomWord();
    guessedLetters = [];
    wrongLetters = [];
    errors = 0;
    message.textContent = "";
    inputLetter.disabled = false;
    displayWord();
    updateFigure();
    inputLetter.value = "";
    inputLetter.focus();
    usedLettersDisplay.textContent = "Letters used: ";
    errorsDisplay.textContent = "Lives remaining: " + figureParts.length;
}

/**
 * Handles user input: validates the letter, checks guess,
 * and updates game state accordingly.
 */
inputLetter.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const letter = inputLetter.value.toUpperCase();
    inputLetter.value = "";
    
    if (!/^[A-Z]$/.test(letter) || letter.length!== 1) {
        message.textContent = "Please enter a single letter.";
        return;
    }
    
    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) {
        message.textContent = "You've already guessed that letter.";
        return;
    }    
    
    if (selectedWord.includes(letter)) {
        guessedLetters.push(letter);
    } else {
        errors++; 
        wrongLetters.push(letter);
    }
    displayWord();
    updateFigure();
    checkWin();
    checkLoss();
    inputLetter.value = "";
    }
});

// Button listener to start a new game
newGameButton.addEventListener("click", resetGame);

