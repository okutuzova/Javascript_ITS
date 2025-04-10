/**
 * @file: optimized-solution.js
 * @author: Olga Kutuzova
 * Exercise 05-credit-card-validation
 *
 * This script repeats the code from main.js with an optimized approach. 
 */


/**
 * Validates the credit card number based on specific rules.
 * 
 * 1. Card number must have exactly 16 digits.
 * 2. The card must contain at least two different digits.
 * 3. The final digit must be even.
 * 4. The sum of the digits must be greater than 16.
 * 
 * @param {string} cardNumberString - A string representing the credit card number, 
 * possibly containing dashes (e.g., '9999-9999-8888-0000').
 * @returns {Object} The validation result object with the following properties:
 *   - {string} number - The input card number.
 *   - {boolean} valid - Whether the card number is valid.
 *   - {string} [error] - The error message, if the card is invalid.
 */
function validateCreditCardOptimized(cardNumberString) {
    // Remove all non-numeric characters (like dashes) in one step
    const CLEARED_CARD_NUM_ARRAY = cardNumberString.replace(/\D/g, '');

    // Check if card number is exactly 16 digits long
    if (!/^\d{16}$/.test(CLEARED_CARD_NUM_ARRAY)) {
        return {
            number: cardNumberString,
            valid: false,
            error: 'invalid chars/wrong length'
        };
    }

    // Check if all digits are the same
    const uniqueDigits = new Set(CLEARED_CARD_NUM_ARRAY);
    if (uniqueDigits.size === 1) {
        return {
            number: cardNumberString,
            valid: false,
            error: 'only 1 type of number'
        };
    }

    // Check if the last digit is even
    const lastCardDigit = parseInt(CLEARED_CARD_NUM_ARRAY[CLEARED_CARD_NUM_ARRAY.length - 1], 10);
    if (lastCardDigit % 2 !== 0) {
        return {
            number: cardNumberString,
            valid: false,
            error: 'odd final number'
        };
    }

    // Check if the sum of digits is greater than 16
    const sumOfDigits = CLEARED_CARD_NUM_ARRAY.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    if (sumOfDigits < 16) {
        return {
            number: cardNumberString,
            valid: false,
            error: 'sum less than 16'
        };
    }

    // If all checks pass, return a valid card result
    return {
        number: cardNumberString,
        valid: true
    };
}

/**
 * Prints the details of a credit card validation result.
 * 
 * @param {Object} creditCardObject - The credit card validation result object.
 * @param {string} creditCardObject.number - The credit card number.
 * @param {boolean} creditCardObject.valid - Whether the card is valid.
 * @param {string} [creditCardObject.error] - The error message if invalid.
 */
function printCardDetailsOptimized(creditCardObject) {
    console.log('='.repeat(40));
    console.log(`= number : ${creditCardObject.number} `.padEnd(39, ' ') + '=');
    console.log(`= valid  : ${creditCardObject.valid} `.padEnd(39, ' ') + '=');
    if (!creditCardObject.valid) {
        console.log(`= error  : ${creditCardObject.error} `.padEnd(39, ' ') + '=');
    }
    console.log('='.repeat(40));
}

// Checking validateCreditCard() function
// console.log(validateCreditCard('9999-9999-8888-0000')); 
// console.log(validateCreditCard('4444-4444-4444-4444'));
// console.log(validateCreditCard('6666-6666-6666-1666'));
// console.log(validateCreditCard('a923-3211-9c01-1112'));
// console.log(validateCreditCard('9923-3211-9601-1111'));
// console.log(validateCreditCard('923-321-901-1111'));


// Example usage
printCardDetailsOptimized(validateCreditCardOptimized('9999-9999-8888-0000'));
printCardDetailsOptimized(validateCreditCardOptimized('4444-4444-4444-4444'));
printCardDetailsOptimized(validateCreditCardOptimized('4444-4444-4444-4444'));
printCardDetailsOptimized(validateCreditCardOptimized('6666-6666-6666-1666'));
printCardDetailsOptimized(validateCreditCardOptimized('a923-3211-9c01-1112'));
printCardDetailsOptimized(validateCreditCardOptimized('9923-3211-9601-1111'));
printCardDetailsOptimized(validateCreditCardOptimized('923-321-901-1111'));
