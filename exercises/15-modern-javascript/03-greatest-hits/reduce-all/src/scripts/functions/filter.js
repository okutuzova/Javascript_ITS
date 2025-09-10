/**
 * Custom implementation of Array.prototype.filter using reduce.
 * @param {Array} arr - The array to be filtered.
 * @param {function} callback - A function that determines whether a value should be included.
 * @returns {Array} A new array containing only elements for which the callback returned true.
 */
export const myFilter = (arr, callback) =>
    arr.reduce((acc, currentElement) => {
      if (callback(currentElement)) {
        acc.push(currentElement);
      }
      return acc;
    }, []);
  