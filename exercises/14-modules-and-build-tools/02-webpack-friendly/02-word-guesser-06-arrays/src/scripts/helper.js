import { handleGuess } from "./game";

/**
 * Creates letter buttons (A-Z) and appends them to the "letters" container.
 * Each button will call the `handleGuess` function when clicked.
 * 
 * @param {Function} callback - (Optional) Callback function for additional use, not currently utilized.
 */
export function createLetterButtons(callback) {
    const lettersDiv = document.getElementById("letters"); 
    /** Generates letter buttons */
    for (let i = 97; i <= 122; i++) { 
        let button = document.createElement("button");
        button.textContent = String.fromCharCode(i);
        button.onclick = () => handleGuess(button.textContent, button);
        lettersDiv.appendChild(button);
    }
}

/**
 * Updates the displayed word on the screen based on guessed letters.
 * 
 * @param {string[]} guessedWord - An array representing the current guessed word (e.g. ['h', '_', 'l', 'l', 'o']).
 */
export function updateWordDisplay(guessedWord) {
    document.getElementById("wordDisplay").textContent = guessedWord.join(" "); 
}

/**
 * Displays a message to the user (e.g. win/lose message).
 * 
 * @param {string} msg - The message to display.
 */
export function showMessage(msg) {
  document.getElementById("message").textContent = msg;
}

/**
 * Disables all letter buttons to prevent further input.
 */
export function disableButtons() { 
    document.querySelectorAll(".letters button").forEach(btn => btn.disabled = true);
}
/**
 * Enables all letter buttons to allow user interaction.
 */
export function enableAllButtons() {
  document.querySelectorAll(".letters button").forEach(btn => btn.disabled = false);
}
