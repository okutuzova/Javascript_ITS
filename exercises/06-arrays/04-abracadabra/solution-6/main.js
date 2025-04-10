/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 04-abracadabra
 * 
 * This script contains an example of changing a letter in a word using a splice array method 
 * along with the split and join methods.
 */
let initialWord = 'Abracadabra';
let changedIntoArray = initialWord.split('');  
changedIntoArray.splice(3, 1, 'X');    // Replace the 4th letter (index 3) with 'X'
initialWord = changedIntoArray.join('');        
console.log(initialWord);          