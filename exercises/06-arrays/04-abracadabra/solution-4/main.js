/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 04-abracadabra
 * 
 * This script contains an example of changing a letter in a word using a regular expression 
 * and replace method.
 */
let initialWord = 'Abracadabra';
let changedWord = initialWord.replace(/^(.{3})./, '$1X');

console.log(changedWord);

