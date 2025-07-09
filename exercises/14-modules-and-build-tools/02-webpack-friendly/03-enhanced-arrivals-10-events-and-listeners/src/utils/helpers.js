/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random integer between min and max (inclusive).
 */
export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}