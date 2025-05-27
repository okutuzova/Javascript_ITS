/**
 * @file: solution-02.js
 * @author: Olga Kutuzova
 * Exercise 01-soundwave
 * 
 * This script creates an array of noises, 
 * capitalizes letter by letter of each noise, 
 * and adds an exclamation point to each noise.
 * A flatMap method is used. 
 */

/**
 * Original array of noise strings.
 * @type {string[]}
 */
let noisesArray = ['quack', 'sneeze', 'boom'];

 /**
  * Capitalizes one letter at a time in a string and appends a corresponding number
  * of exclamation marks.
  * @param {string} string - The input string to transform.
  * @returns {string[]} An array of transformed strings.
  */
function capitalizeLetter(string) {
    let myArray = [];
    for (let i = 0; i < string.length; i++) {
        let capitalizedChar =  string.slice(0, i) + string.charAt(i).toUpperCase() + string.slice(i + 1) + '!'.repeat(i+1);
        myArray.push(capitalizedChar);
    }
    return myArray;
}

/**
 * Transforms all noises using `capitalizeLetter`, then flattens the resulting
 * array of arrays into a single array.
 *
 * @type {string[]}
 */
let noiseArray2 = noisesArray.flatMap(capitalizeLetter);

// Output the final result to the console
console.log(noiseArray2);


   