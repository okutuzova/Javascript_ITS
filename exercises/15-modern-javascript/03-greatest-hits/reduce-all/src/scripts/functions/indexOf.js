/**
 * Finds the first index of the specified element in the array, starting from the given index.
 * @param {Array} arr - The array to search within.
 * @param {*} element - The element to find.
 * @param {number} [fromIndex=0] - The index to start the search from (inclusive).
 * @returns {number} The index of the first occurrence of the element after fromIndex, or -1 if not found.
 */
export const myIndexOf = (arr, element, fromIndex=0 ) => {
    return arr.reduce((acc, current, index) => {
        if (index >= fromIndex && acc === -1) {
            acc = current === element? index : -1;
        }
        return acc;
    }, -1);   
}