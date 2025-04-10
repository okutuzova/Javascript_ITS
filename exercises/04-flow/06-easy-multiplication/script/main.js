/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 06-easy-multiplication
 * 
 * This script contains three for loops that print out the multiplication table for numbers 1 to 10.
 * The first loop prints out the multiplication table for the number 9. 
 * The second loop prints out the multiplication table for numbers 1 to 10, one below another.
 * The third loop prints out the multiplication table for numbers 1 to 10, grouped by 5 columns.
 */

// Print out the multiplication table for the number 9
console.log('Multiplication table for the number 9:');
for (let i = 0; i <= 10; i++) {
    console.log(`9 * ${i} = ${9 * i}`);
}

// Print out the multiplication table for numbers 1 to 10, one below another
console.log('\nMultiplication table for numbers 1 to 10:');
for (let i = 1; i <= 10; i++) {
    console.log('\n');
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }   
}

// Print out the multiplication table for numbers 1 to 10, grouped by 5 columns
console.log('\nMultiplication table for numbers 1 to 10, grouped by 5 columns:');
for (let start = 1; start <= 10; start += 5) { // Group by 5 columns
    for (let i = 1; i <= 10; i++) { // numbers 1 to 10 - second operand
        let row = '';
        for (let j = start; j < start + 5; j++) { // 5 columns in a row - first operand
            row += `${j} * ${i} = ${String(j * i).padStart(2)}\t\t`; // Add tabulation to align columns
        }
        console.log(row);
    }
    console.log('\n'); // Add new line after each group of 5 columns
}
