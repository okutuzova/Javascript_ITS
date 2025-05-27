/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 06-reduce-all-slice
 * 
 * This script contains a custom realization of the slice method using a reduce method.
 */
/**
 * Custom implementation of the Array.prototype.slice() method using reduce().

 * @param {Array} arr - The array to slice.
 * @param {number} start - The index at which to start extraction.
 * @param {number} end - The index before which to end extraction (non-inclusive).
 * @returns {Array} A shallow copy of a portion of the array into a new array.
 */
function mySlice(arr, start, end) {
    return arr.reduce((acc, current, index) =>  {
        if (index >= start && index < end) {
            acc.push(current);
        } 
        return acc;
    }, []);
}

//  TESTING 

/**
 * An array used for testing.
 * @type {array of strings}
 */
const testAnimals = ["ant", "bison", "camel", "duck", "bison"];
console.log('==== Testing Array.slice() method ====')
console.log(testAnimals.slice(2, 4));
// Expected output: ["camel", "duck"]

console.log('==== Testing mySlice() method ====')
console.log(mySlice(testAnimals, 2, 4));
// Expected output: ["camel", "duck"]



