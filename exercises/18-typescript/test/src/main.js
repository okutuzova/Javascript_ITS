"use strict";
/**
 * @file: main.ts
 * @author: Olga Kutuzova
 *
 * In this script generic function is tested for educational purposes.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerRandomElement = gerRandomElement;
/**
 * Returns a random element from an array.
 * @param array - an array of elements
 * @returns a random element from the array
 */
function gerRandomElement(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
}
// Usage example
var numbers = [10, 32, 89, 4, 115];
var randomNumber = gerRandomElement(numbers);
console.log(randomNumber); // Output: a random number from the array
var animals = ["cat", "dog", "bird", "fish"];
var randomAnimal = gerRandomElement(animals);
console.log(randomAnimal); // Output: a random animal from the array
