/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 06-reduce-all-map
 * 
 * This script contains a custom realization of the map method using a reduce method.
 */
/**
 * Custom implementation of the Array.prototype.map() method using reduce().
 *
 * @param {Array} arr - The array to map over.
 * @param {Function} callback - A function that will be called on each element.
 * @returns {Array} A new array with each element transformed by the callback.
 */
function myMap(arr, callback ) {
    return arr.reduce((acc, current) => {
        acc.push(callback(current));
        return acc;
     }, []);
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

/**
 * A simple test callback function used to multiply numbers by two.
 *
 * @param {number} num - The number to test.
 * @returns {number} number multiplied by 2.
 */
let testFunc = function(num) {
    return num * 2;
};
 
console.log('==== Testing Array.map() method ====');
testGroup.forEach(function(arr) {
    console.log(arr.map(testFunc));
});

console.log('\n==== Testing the function myMap() ====');
testGroup.forEach(function(arr) {
    console.log(myMap(arr, testFunc));
});   