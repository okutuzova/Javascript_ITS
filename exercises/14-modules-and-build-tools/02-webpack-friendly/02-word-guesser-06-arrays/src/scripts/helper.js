import { handleGuess } from "./game";

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

export function updateWordDisplay(guessedWord) {
    document.getElementById("wordDisplay").textContent = guessedWord.join(" "); 
}

export function showMessage(msg) {
  document.getElementById("message").textContent = msg;
}

/** Disables all letter buttons */
export function disableButtons() { 
    document.querySelectorAll(".letters button").forEach(btn => btn.disabled = true);
}

export function enableAllButtons() {
  document.querySelectorAll(".letters button").forEach(btn => btn.disabled = false);
}
