/**
 * Custom implementation of the Array.prototype.slice() method using reduce().

 * @param {Array} arr - The array to slice.
 * @param {number} start - The index at which to start extraction.
 * @param {number} end - The index before which to end extraction (non-inclusive).
 * @returns {Array} A shallow copy of a portion of the array into a new array.
 */
export const mySlice = (arr, start = 0, end = arr.length) =>
    arr.reduce((acc, current, index) => {
      if (index >= start && index < end) acc.push(current);
      return acc;
    }, []);