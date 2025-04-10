/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 05-money
 * 
 * This script includes a function that returns an amount of money available. 
 */


/**
 * Returns a string representation of the given amount of money.
 * 
 * The function formats the `amount` depending on its value:
 * - If the amount is exactly 1, it returns "1 dollar".
 * - If the amount is exactly 1,000,000, it returns "1,000,000 dollars ;)".
 * - If the amount is 0, it returns "No money".
 * - For any other value, it returns the amount followed by "dollars".
 * @param {number} amount - The amount of money.
 * @returns {string} - A string representation of the amount with appropriate formatting.
 */
function money(amount) {
    switch (amount) {
        case 1:
            return `${amount} dollar`;
        case 1_000_000:
            return `${amount} dollars ;)`;
        case 0:
            return 'No money';
        default:
            return `${amount} dollars`

    }
    
}

// Function calls
console.log(money(1));
console.log(money(5));
console.log(money(1000000));
console.log(money(0));
