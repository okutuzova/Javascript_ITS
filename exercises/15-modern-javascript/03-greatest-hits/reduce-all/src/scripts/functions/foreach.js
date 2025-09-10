/**
 * Custom implementation of Array.prototype.forEach using reduce.
 * @param {Array} arr - The array to iterate over.
 * @param {} callback - The function to call for each element.
 * @returns {void}
 */

export const myForEach = (arr, callback) =>
    arr.reduce((_, current, index, array) => {
      callback(current, index, array);
      return undefined;
    }, undefined);