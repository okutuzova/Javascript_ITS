/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 06-reduce-all-filter
 * 
 * This script contains a custom realization of the filter method using a reduce method.
 */

/**
 * Custom implementation of Array.prototype.filter using reduce.
 * @param {Array} arr - The array to be filtered.
 * @param {function} callback - A function that determines whether a value should be included.
 * @returns {Array} A new array containing only elements for which the callback returned true.
 */
function myFilter(arr, callback ) {
    return arr.reduce((acc, current) => {
       callback(current) ? acc.push(current) : acc;
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
 * A simple test callback function used to filter numbers greater than 3.
 *
 * @param {number} num - The number to test.
 * @returns {boolean} True if the number is greater than 3, false otherwise.
 */
let testFunc = function(num) {
    return num > 3; 
};

console.log('==== Testing Array.filter() method ====');
testGroup.forEach(function(arr) {
    console.log(arr.filter(testFunc));
});

console.log('\n==== Testing the function myFilter() ====');
testGroup.forEach(function(arr) {
    console.log(myFilter(arr, testFunc));
});   