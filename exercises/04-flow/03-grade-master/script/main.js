/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 03-grade-master
 * 
 * This script contains a function that returns a grade based on the score passed as an argument. 
 */

/**
 * This function returns a grade based on the score passed as an argument. The function uses a series of if...else statements.  
 * @param {number} numberScore - the score to determine the grade
 * @returns {string} - the grade based on the score       
 */
export function assignGrade(numberScore) {
    console.log('Your grade is: ');
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



