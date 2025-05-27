/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 06-reduce-all-forEach
 * 
 * This script contains a custom realization of the forEach method using a reduce method.
 */

/**
 * Custom implementation of Array.prototype.forEach using reduce.
 * @param {array} arr - The array to iterate over.
 * @param {} callback - The function to call for each element.
 * @returns {void}
 */
function myForEach(arr, callback) {
    arr.reduce((emptyAcc, current, index, array) => {
        callback(current, index, array);
        return emptyAcc; // accumulator not used
    }, undefined);
}

//  TESTING 
/**
 * A collection of numeric arrays used for testing.
 * @type {number[][]}
 */
let testGroup = [
    [ 1, 2, 3, 4, 5 ],
    [ 0, 0, 3, 4, 5 ],
    [ 7, 0, 9, 74, 85, 1, 42, 3, 88 ]
];
let secondTestGroup = [1, 2, 3, 4, 5, 6];

console.log('==== Testing Array.foreach() method ====');
testGroup.forEach(elem => console.log(elem));
testGroup.forEach(elem => {
    elem.push(100);
    console.log(elem);
});
secondTestGroup.forEach(elem => console.log(elem));

console.log('==== Testing myForEach() function ====');
myForEach(testGroup, elem => console.log(elem));
myForEach(testGroup, elem => {
    elem.push(100);
    console.log(elem);
});
myForEach(secondTestGroup, elem => console.log(elem));