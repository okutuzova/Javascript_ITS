/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 04-abracadabra
 * 
 * This script contains an example of changing a letter in a word using slice method 
 * and strings concatenation.
 */

let initialWord = 'Abracadabra';
let changedWord = initialWord.slice(0, 3) + 'X' + initialWord.slice(4);
console.log(changedWord);