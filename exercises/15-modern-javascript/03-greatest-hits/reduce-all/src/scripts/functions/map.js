/**
 * Custom implementation of the Array.prototype.map() method using reduce().
 *
 * @param {Array} arr - The array to map over.
 * @param {Function} callback - A function that will be called on each element.
 * @returns {Array} A new array with each element transformed by the callback.
 */
export const myMap =  (arr, callback ) => {
    return arr.reduce((acc, current) => {
        acc.push(callback(current));
        return acc;
     }, []);
}