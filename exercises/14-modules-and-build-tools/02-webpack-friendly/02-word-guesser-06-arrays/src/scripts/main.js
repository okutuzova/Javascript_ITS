/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 02-word-guesser-browser-solution
 * 
 * This script simulates a simple "Hangman" game in a browser. 
 */
import '../css/style.css';
import { initGameElements, startNewGame, handleGuess } from "./game.js";
import { createLetterButtons } from "./helper.js";

const cnv = document.getElementById("hangmanCanvas"); 
initGameElements(cnv);

createLetterButtons(handleGuess);
document.getElementById("newGameButton").addEventListener("click", startNewGame);

startNewGame();


