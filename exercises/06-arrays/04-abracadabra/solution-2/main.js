/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 04-abracadabra
 * 
 * This script contains an example of changing a letter in a word using split string method 
 * that returns an array. Then an element is changed by its index.
 * And array join method is used that returns a string connecting the elements of an array. 
 */

let initialWord = 'Abracadabra';
let changedIntoArray = initialWord.split('');
changedIntoArray[3] = 'X';
let finalWord = changedIntoArray.join('');
console.log(finalWord);
