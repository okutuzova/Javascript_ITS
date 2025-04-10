/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 02-fortune-calculator
 * 
 * This script calculates a person's fortune based on the provided data.
 */





// Using a normal function (hoisting is applicable), global scope

/**
 * Outputs a string 
 * @param {number} childrenNum - a number that indicates a number of children
 * @param {string} partnerName - a string that contains a partner's name
 * @param {string} geoLocation - a string that contains a geographic location
 * @param {string} jobTitle - a string that contains a job title
 * @returns {void} 
 */
function tellFortune(childrenNum, partnerName, geoLocation, jobTitle) {
    console.log(`You will be the ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${childrenNum} kids.`);
   }


// Function calls
tellFortune(6, "Donald", "Washington", "Assistant to Elon Musk");
tellFortune(1, "Emmanuel", "Paris", "Minister of Foreign Affairs");
tellFortune(2, "Giorgia", "Rome", "Secretary of 5 Stelle");



// Using an arrow function (hoisting not applicable), global scope
/**
 * Outputs a string 
 * @param {number} childrenNum - a number that indicates a number of children
 * @param {string} partnerName - a string that contains a partner's name
 * @param {string} geoLocation - a string that contains a geographic location
 * @param {string} jobTitle - a string that contains a job title
 * @returns {void} 
 */
const myFortune = (childrenNum, partnerName, geoLocation, jobTitle) =>  console.log(`You will be the ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${childrenNum} kids.`);

// Function call
myFortune(0, "Vladimir", "Moscow", "Federal Security Service Director");


// Using an anonymous function (hoisting not applicable), out of global scope

const fortuneTeller = function (childrenNum, partnerName, geoLocation, jobTitle) {
    console.log(`You will be the ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${childrenNum} kids.`);
};

// Function call
fortuneTeller(3, "Olaf", "Berlin", "Volkswagen General Manager")