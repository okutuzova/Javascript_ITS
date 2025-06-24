import { words } from "./words.js";
import { drawHangman } from "./hangman-drawing.js";
import { updateWordDisplay, showMessage, disableButtons, enableAllButtons } from "./helper.js";

let word = "", guessedWord = [], attempts = 6;
let canvas, ctx;

export function initGameElements(cnv) {
    
    canvas = cnv;
    ctx = canvas.getContext("2d"); // 2D rendering context
}

export function startNewGame() {
    word = words[Math.floor(Math.random() * words.length)].toLowerCase(); 
    guessedWord = Array(word.length).fill('_');
    attempts = 6; 
    updateWordDisplay(guessedWord);
    showMessage("");
    enableAllButtons();
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Handles letter selection
 * @param {string} letter - The letter guessed
 * @param {HTMLElement} button - The button clicked
 */
export function handleGuess(letter, button) {
    button.disabled = true;
    if (word.includes(letter)) { 
        for (let i = 0; i < word.length; i++) { 
            if (word[i] === letter) guessedWord[i] = letter;
        } 
    } else { 
        attempts--; 
        drawHangman(6 - attempts, ctx);
    }
    updateWordDisplay(guessedWord);
    checkStatus();
}

function checkStatus() {
    if (!guessedWord.includes('_')) { 
        showMessage("🏆 You Win!");
        disableButtons(); 
    } else if (attempts === 0) { 
        showMessage(`❌😢 Game Over! The word was: ${word}`);
        disableButtons();
    } 
}