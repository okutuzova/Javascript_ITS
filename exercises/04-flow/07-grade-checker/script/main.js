/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 07-grade-checker
 * 
 * This script contains an import statement that imports the assignGrade function from the grade-master script. Below the import statement, there is a for loop that iterates from 60 to 100. Inside the loop, the assignGrade function is called with the current loop index as an argument. The result of the function call is then logged to the console.

 */


import { assignGrade } from '../../03-grade-master/script/main.js';

for (let i = 60; i <= 100; i++) {
    if (i >= 90 && i <= 100) {
        console.log(`For ${i}, you got an ${assignGrade(i)}.`);
        continue;
    }
    console.log(`For ${i}, you got a ${assignGrade(i)}.`);
}