/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 12-cut-me-up
 * 
 * This script includes the examples of following string methods: .slice(), .subString(), .substr()
 */


console.log('The examples of .slice() method usage');
let text = 'JavaScript';
console.log(text.slice(0, 4));  // "Java"
console.log(text.slice(-6, -1));  // "Scrip"

console.log('The examples of .subString() method usage');
let textSubString = "JavaScript";
console.log(textSubString.substring(0, 4));  // "Java"
console.log(textSubString.substring(4, 0));  // "Java" (swaps the indices)
console.log(textSubString.substring(-3, 4));  // "Java" (negative values are treated as 0)

console.log('The examples of .substr() method usage');
let textSubstr = "JavaScript";
console.log(textSubstr.substr(0, 4));  // "Java"
console.log(textSubstr.substr(-6, 5));  // "Scrip"