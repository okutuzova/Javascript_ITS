/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 04-abracadabra
 * 
 * This script contains an example of changing a letter in a word using the substring method 
 * and strings concatenation.
 */
let initialWord = 'Abracadabra';
let changedWord = initialWord.substring(0, 3) + 'X' + initialWord.substring(4);

console.log(changedWord);