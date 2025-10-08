/**
 * @file: main.ts
 * @author: Olga Kutuzova
 * 
 * In this script generic function is tested for educational purposes.
 */

/**
 * Returns a random element from an array.
 * @param array - an array of elements
 * @returns a random element from the array
 */
export function gerRandomElement<T>(array: T[]): T {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

// Usage example
const numbers = [10, 32, 89, 4, 115];
const randomNumber = gerRandomElement(numbers);
console.log(randomNumber); // Output: a random number from the array

const animals = ["cat", "dog", "bird", "fish"];
const randomAnimal = gerRandomElement(animals);
console.log(randomAnimal); // Output: a random animal from the array