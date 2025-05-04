/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 
 * 
 * This script simulates a simple "Hangman" game 
 * in a browser. 
 */

/**
 * Array of words that can be chosen for the guessing game.
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


let selectedWord = "";
let guessedLetters = [];
let wrongLetters = [];
let errors = 0;
let score = 0;

const wordDisplay = document.getElementById("word-display");
const inputLetter = document.getElementById("input-letter");
const message = document.getElementById("message");
const figureParts = document.querySelectorAll(".figure-part");
const scoreDisplay = document.getElementById("score");
const errorsDisplay = document.getElementById("errors-remaining");
const usedLettersDisplay = document.getElementById("used-letters");
const newGameButton = document.getElementById("restart-btn");

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

window.addEventListener("load", resetGame);

function displayWord() {
    const display = selectedWord
      .split("")
      .map(letter => guessedLetters.includes(letter) ? letter : "_")
      .join(" ");
      wordDisplay.textContent = display;
      // Used Letters Display
      usedLettersDisplay.textContent = "Used Letters: " + wrongLetters.join(", ");
}


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

function checkWin() {
    // Check if there are "_" in the wordDisplay
    if (!wordDisplay.innerHTML.includes("_")) {
      message.textContent = "🏆 You Win!";
      score++;  // increment score
      scoreDisplay.textContent = "Score: " + score;
      inputLetter.disabled = true;  // disable input
    }
}

function checkLoss() {
    if (errors >= figureParts.length) {
      message.textContent = "❌😢 Game Over! The word was: " + selectedWord;
      inputLetter.disabled = true;
    }
}

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

inputLetter.addEventListener("input", () => {
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
    }
);

newGameButton.addEventListener("click", resetGame);

