/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 09-not-bad
 * 
 * This script includes 
 */


/**
 * Replaces the phrase "not ... bad" with "good" in a given string.
 * @param {string} initialString - The input string that may contain "not ... bad".
 * @returns {string} - The modified string with "not ... bad" replaced by "good",
 *                     or the original string if no replacement is needed.
 *
 * @example
 * notBad("This dinner is not that bad!") // "This dinner is good!"
 * notBad("The weather is not bad at all.") // "The weather is good at all."
 * notBad("This is bad, not good.") // "This is bad, not good."
 */
function notBad(initialString) {
    let notIndex = initialString.indexOf('not');
    let badIndex = initialString.indexOf('bad');

    // If either 'bad' or 'not' is absent or 'bad' preceeds 'not', an initial string is returned 
    if (notIndex === -1 || badIndex === -1 || badIndex < notIndex) {
        return initialString;
    } 
    
    // replace all from "not" to "bad" with "good"
    return initialString.slice(0, notIndex) + 'good' + initialString.slice(badIndex + 3);
}

// Function Calls:
console.log(notBad("This dinner is not that bad!"));  // "This dinner is good!"
console.log(notBad("This movie is not so bad"));      // "This movie is good"
console.log(notBad("This dinner is bad"));      // "This dinner is bad"
console.log(notBad("This weather is bad, not great"));// "This weather is bad, not great"
console.log(notBad("not bad at all"));               // "good at all"
console.log(notBad("It's bad but not terrible"));    // "It's bad but not terrible" 
