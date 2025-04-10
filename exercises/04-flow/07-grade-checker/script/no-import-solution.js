/**
 * @file: no-import-solution.js
 * @author: Olga Kutuzova
 * Exercise 07-grade-checker
 * 
 * This script contains an assignGrade and a for loop that iterates from 60 to 100.
 *  Inside the loop, the assignGrade function is called with the current loop index as an argument. 
 * The result of the function call is then logged to the console.

 */

/**
 * This function returns a grade based on the score passed as an argument. The function uses a series of if...else statements.  
 * @param {number} numberScore - the score to determine the grade
 * @returns {string} - the grade based on the score       
 */
function assignGrade(numberScore) {
    if (numberScore >= 90) {
        return 'A';
    } else if (numberScore >= 80) {
        return 'B';
    } else if (numberScore >= 70) {
        return 'C';
    } else if (numberScore >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

for (let i = 60; i <= 100; i++) {
    if (i >= 90 && i <= 100) {
        console.log(`For ${i}, you got an ${assignGrade(i)}.`);
        continue;
    }
    console.log(`For ${i}, you got a ${assignGrade(i)}.`);
}