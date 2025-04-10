/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 05-one-to-many
 * 
 * This script contains three functions that take a noun and a number and return a string that represents the number and the noun in plural form if the number is greater than 1. 
 */

/**
 * The function takes a noun and a number and returns a string that represents the number and the noun in plural form if the number is greater than 1.
 * @param {*} noun - a noun that needs to be pluralized
 * @param {*} number - a number that determines if the noun should be pluralized
 * @returns {string} The string that represents the number and the noun in plural form if the number is greater than 1.
 */
function oneToMany(noun, number) {
    let result = '';
    if (number === 1) {
        result = `${number} ${noun}`;
    } else {
        result = `${number} ${noun}s`;
    }
    return result;
}

// 1. Test the function with different inputs
console.log('Testing oneToMany function');
console.log(oneToMany('cat', 1)); // 1 cat
console.log(oneToMany('cat', 2)); // 2 cats
console.log(oneToMany('cat', 0)); // 0 cats
console.log(oneToMany('cat', 10)); // 10 cats

/**
 * The function takes a noun and a number and returns a string that represents the number and the noun in plural form if the number is greater than 1.
 * The function includes collective nouns that are always singular (e.g. sheep, deer, fish, species, aircraft, spacecraft).
 * @param {*} noun - a noun that needs to be pluralized
 * @param {*} number a number that determines if the noun should be pluralized
 * @returns {string} The string that represents the number and the noun in plural form if the number is greater than 1. The function returns collective nouns that are always singular with no changes.
 */
function oneToManyCollectiveNounsIncluded(noun, number) {
    let result = '';
    if (number === 1) {
        result = `${number} ${noun}`;
    } else {
        if (noun === 'sheep' || noun === 'deer' || noun === 'fish' || noun === 'species' || noun === 'aircraft' || noun === 'spacecraft') {
            result = `${number} ${noun}`;
        } else {
            result = `${number} ${noun}s`;
        }
    }
    return result;
}

// 2. Test the function with different inputs
console.log('Testing oneToManyCollectiveNounsIncluded function');
console.log(oneToManyCollectiveNounsIncluded('cat', 1)); // 1 cat
console.log(oneToManyCollectiveNounsIncluded('cat', 2)); // 2 cats
console.log(oneToManyCollectiveNounsIncluded('fish', 2)); // 2 fish

/**
 * The function takes a noun and a number and returns a string that represents the number and the noun in plural form if the number is greater than 1.      
 * The function includes collective nouns that are always singular (e.g. sheep, deer, fish, species, aircraft, spacecraft).
 * The function uses a switch statement to determine if the noun should be pluralized.
 * @param {*} noun - a noun that needs to be pluralized
 * @param {*} number - a number that determines if the noun should be pluralized
 * @returns {string} The string that represents the number and the noun in plural form if the number is greater than 1. The function returns collective nouns that are always singular with no changes.
 */
function oneToManyCollectiveNounsIncludedSwitch(noun, number) {
    let result = '';
    if (number === 1) {
        result = `${number} ${noun}`;
    } else {
        switch (noun) {
            case 'sheep':
            case 'deer':
            case 'fish':
            case 'species':
            case 'aircraft':
            case 'spacecraft':
            case 'police':
            case 'staff':
            case 'series':
                result = `${number} ${noun}`;
                break;
            default:
                result = `${number} ${noun}s`;
        }
    }
    return result;
}

// 3. Test the function with different inputs
console.log('Testing oneToManyCollectiveNounsIncludedSwitch function');
console.log(oneToManyCollectiveNounsIncludedSwitch('cat', 1)); // 1 cat
console.log(oneToManyCollectiveNounsIncludedSwitch('cat', 2)); // 2 cats
console.log(oneToManyCollectiveNounsIncludedSwitch('fish', 2)); // 2 fish
console.log(oneToManyCollectiveNounsIncludedSwitch('staff', 2)); // 2 staff