/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 04-abracadabra
 * 
 * This script contains an example of changing a letter in a word using a slice and a concat string methods.
 */
let initialWord = 'Abracadabra';
let firstPart = initialWord.slice(0, 3);
let lastPart = initialWord.slice(4);
let newLetter = 'X';
let changedWord = firstPart.concat(newLetter, lastPart);

console.log(changedWord);

