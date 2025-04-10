/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 02-word-guesser-browser-solution
 * 
 * This script simulates a simple "Hangman" game in a browser. 
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


/**
 * The selected word chosen randomly from the words array.
 * @type {string}
 */
let word = words[Math.floor(Math.random() * words.length)].toLowerCase(); 

/**
 * Array representing the current state of the guessed word (with underscores for unguessed letters).
 * @type {string[]}
 */
let guessedWord = Array(word.length).fill('_'); 

/**
 * Maximum number of incorrect guesses allowed.
 * @type {number}
 */
let attempts = 6; 

const canvas = document.getElementById("hangmanCanvas"); 
const ctx = canvas.getContext("2d");  // 2D rendering context
document.getElementById("wordDisplay").textContent = guessedWord.join(" "); 
const lettersDiv = document.getElementById("letters"); 
const messageDiv = document.getElementById("message");

/** Generates letter buttons */
for (let i = 97; i <= 122; i++) { 
    let button = document.createElement("button");
    button.textContent = String.fromCharCode(i);
    button.onclick = () => guessLetter(button.textContent, button);
    lettersDiv.appendChild(button);
}

/**
 * Handles letter selection
 * @param {string} letter - The letter guessed
 * @param {HTMLElement} button - The button clicked
 */
function guessLetter(letter, button) { 
    button.disabled = true;
    if (word.includes(letter)) { 
        for (let i = 0; i < word.length; i++) { 
            if (word[i] === letter) guessedWord[i] = letter;
        } 
    } else { 
        attempts--; 
        drawHangman(6 - attempts);
    }
    document.getElementById("wordDisplay").textContent = guessedWord.join(" ");
    checkGameStatus();
}

/** Checks if the player has won or lost */
function checkGameStatus() { 
    if (!guessedWord.includes('_')) { 
        messageDiv.textContent = "🏆 You Win!";
        disableButtons(); 
    } else if (attempts === 0) { 
        messageDiv.textContent = `❌😢 Game Over! The word was: ${word}`;
        disableButtons();
    } 
}
/** Disables all letter buttons */
function disableButtons() { 
    document.querySelectorAll(".letters button").forEach(btn => btn.disabled = true);
}

/**
 * Draws different stages of a Hangman figure on the canvas.
 * @param {number} stage - The current stage (1-7) of the Hangman drawing.
 * @throws {Error} If `stage` is not between 1 and 7.
 */
function drawHangman(stage) {
    if (stage < 1 || stage > 7) {
        throw new Error("Invalid stage. Stage must be between 1 and 7.");
    }

    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";

    switch (stage) {
        case 1:
            // Draw the foundation (base platform)
            ctx.strokeRect(20, 200, 100, 10);
            break;

        case 2:
            // Draw the pole (vertical support)
            ctx.strokeRect(50, 50, 10, 150);
            break;

        case 3:
            // Draw the upper beam (horizontal top bar)
            ctx.strokeRect(50, 50, 60, 10);
            break;

        case 4:
            // Draw the head (circle)
            ctx.beginPath();
            ctx.arc(100, 80, 15, 0, Math.PI * 2);
            ctx.stroke();
            break;

        case 5:
            // Draw the body (vertical line)
            ctx.moveTo(100, 95);
            ctx.lineTo(100, 150);
            ctx.stroke();
            break;

        case 6:
            // Draw the arms
            ctx.moveTo(100, 110);
            ctx.lineTo(80, 130);
            ctx.stroke();
            ctx.moveTo(100, 110);
            ctx.lineTo(120, 130);
            ctx.stroke();
            break;

        case 7:
            // Draw the legs
            ctx.moveTo(100, 150);
            ctx.lineTo(80, 180);
            ctx.stroke();
            ctx.moveTo(100, 150);
            ctx.lineTo(120, 180);
            ctx.stroke();
            break;
    }
}


document.getElementById("newGameButton").addEventListener("click", newGame);

/** Starts a new game */
function newGame() {
    // select a new word
    word = words[Math.floor(Math.random() * words.length)].toLowerCase();
    
    // resetting game state
    guessedWord = Array(word.length).fill('_');
    attempts = 6;
    
    // reload interface
    document.getElementById("wordDisplay").textContent = guessedWord.join(" ");
    messageDiv.textContent = "";
    
    // buttons on
    document.querySelectorAll(".letters button").forEach(btn => {
        btn.disabled = false;
    });

    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
