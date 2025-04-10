/**
 * @file: bonus.js
 * @author: Olga Kutuzova
 * Exercise 05-money
 * 
 * This script includes a function that returns an amount of money available converted to euros.
 */


/**
 * Converts the given amount in dollars to euros and returns a formatted string.
 * @param {number} amount - The amount in dollars to convert to euros.
 * @returns {string} - A formatted string showing the conversion from dollars to euros.
 */
function money(amount) {
    const euros = (amount * 0.92).toFixed(2); 

    switch (amount) {
        case 1:
            return `${amount} dollar is ${euros} euros`;
        case 1_000_000:
            return `${amount} dollars are ${euros} euros;)`;
        case 0:
            return 'No money';
        default:
            return `${amount} dollars are ${euros} euros`

    }
    
}

// Function calls
console.log(money(1));
console.log(money(5));
console.log(money(10));
console.log(money(1000000));
console.log(money(0));