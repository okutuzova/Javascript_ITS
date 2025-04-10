/**
 * @file: switch-function.js
 * @author: Olga Kutuzova
 * Exercise 03-grade-master
 * 
 * This script contains a function that returns a grade based on the score passed as an argument, and uses switch instead of if...else statements.
 */

// Switch
/**
 * This function returns a grade based on the score passed as an argument. The function uses a switch statement.  
 * @param {number} numberScore - the score to determine the grade
 * @returns {string} - the grade based on the score       
 */
function assignGradeSwitch(numberScore) {
    console.log('Your grade is counted with a switch statement: ');
    switch (true) {
        case numberScore >= 90:
            return 'A';
        case numberScore >= 80:
            return 'B';
        case numberScore >= 70:
            return 'C';
        case numberScore >= 60:
            return 'D';
        default:
            return 'F';
    }
}

//Function calls
console.log(assignGradeSwitch(95)); // A
console.log(assignGradeSwitch(85)); // B    
console.log(assignGradeSwitch(75)); // C
console.log(assignGradeSwitch(65)); // D
console.log(assignGradeSwitch(55)); // F
console.log(assignGradeSwitch(100)); // A
console.log(assignGradeSwitch(0)); // F
console.log(assignGradeSwitch(45)); // F