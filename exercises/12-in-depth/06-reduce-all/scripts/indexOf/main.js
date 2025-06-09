/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 06-reduce-all-indexOf
 * 
 * This script contains a custom realization of the indexOf method using a reduce method.
 */

/**
 * Finds the first index of the specified element in the array, starting from the given index.
 * @param {Array} arr - The array to search within.
 * @param {*} element - The element to find.
 * @param {number} [fromIndex=0] - The index to start the search from (inclusive).
 * @returns {number} The index of the first occurrence of the element after fromIndex, or -1 if not found.
 */
function myIndexOf(arr, element, fromIndex=0 ) {
    return arr.reduce((acc, current, index) => {
        if (index >= fromIndex && acc === -1) {
            acc = current === element? index : -1;
        }
        return acc;
    }, -1);   
}

//  TESTING 

/**
 * An array used for testing.
 * @type {array of strings}
 */
const testAnimals = ["ant", "bison", "camel", "duck", "bison"];
console.log('==== Testing Array.indexOf() method ====')
console.log(testAnimals.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(testAnimals.indexOf("bison", 2));
// Expected output: 4

console.log(testAnimals.indexOf("giraffe"));
// Expected output: -1

console.log('==== Testing myIndexOf() method ====')
console.log(myIndexOf(testAnimals, "bison"));
// Expected output: 1

// Start from index 2
console.log(myIndexOf(testAnimals, "bison", 2));
// Expected output: 4

console.log(myIndexOf(testAnimals, "giraffe"));
// Expected output: -1
