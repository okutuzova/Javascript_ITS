/**
 * @file: main-function-calls.js
 * @author: Olga Kutuzova
 * Exercise 03-grade-master
 * 
 * This script contains the calls of a function assignGrade. 
 */

import { assignGrade } from './main.js';

//Function calls 
console.log(assignGrade(95)); // A
console.log(assignGrade(85)); // B
console.log(assignGrade(75)); // C
console.log(assignGrade(65)); // D
console.log(assignGrade(55)); // F
console.log(assignGrade(100)); // A
console.log(assignGrade(0)); // F