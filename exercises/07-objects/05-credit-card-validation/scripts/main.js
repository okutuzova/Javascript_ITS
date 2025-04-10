/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 05-credit-card-validation
 *
 * This script validates credit card numbers according to the following rules:
 * 1. The number must be 16 digits and contain only numeric characters.
 * 2. There must be at least two different digits (not all digits can be the same).
 * 3. The last digit must be even.
 * 4. The sum of all digits must be greater than 16.
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
function validateCreditCard(cardNumberString) {

    const ERROR_MESSAGES = [
        'invalid chars/wrong length', 'odd final number', 
        'only 1 type of number', 'sum less than 16'
    ];

    // cleared a string from dashes and joined back in a string
    let clearedCardNumArray = cardNumberString.split('-').join('');
    // created a new regexp to test the string
    let newRegExp = /^\d{16}$/;

    if (!newRegExp.test(clearedCardNumArray)) {
        return {
            'number': cardNumberString,
            'valid': false,
            'error': ERROR_MESSAGES[0]
        };
    }


    //checking if all numbers are different

    //create an array
    let arrayCardNumbersInStrings = clearedCardNumArray.split('');
    let uniqueValues = new Set(arrayCardNumbersInStrings);
    if (uniqueValues.size === 1) {
        return {
            'number': cardNumberString,
            'valid': false,
            'error': ERROR_MESSAGES[2]
        };
    }

    //check if last number is even
    let lastCardDigit = +arrayCardNumbersInStrings[arrayCardNumbersInStrings.length - 1];
    if (lastCardDigit % 2 !== 0) {
        return {
            'number': cardNumberString,
            'valid': false,
            'error': ERROR_MESSAGES[1]
        };
    }

    // check if the sum is greater than 16
    const arrayCardNumbersInNumbers = arrayCardNumbersInStrings.map(Number);
    const sumOfDigits = arrayCardNumbersInNumbers.reduce((sum, num) => sum + num, 0);
    if (sumOfDigits < 16){
        return {
            'number': cardNumberString,
            'valid': false,
            'error': ERROR_MESSAGES[3]

        };
    }
    return {
        'number': cardNumberString,
        'valid': true
    };
}

function printCardDetails(creditCardObject) {
    console.log(''.padEnd(40, '='));
    console.log(`= number : ${creditCardObject.number} `.padEnd(39, ' ') + '=');
    console.log(`= valid  : ${creditCardObject.valid} `.padEnd(39, ' ') + '=');
    if (!creditCardObject.valid) {
        console.log(`= error  : ${creditCardObject.error} `.padEnd(39, ' ') + '=');
    }
    
    console.log(''.padEnd(40, '='));
}

// Checking validateCreditCard() function
// console.log(validateCreditCard('9999-9999-8888-0000')); 
// console.log(validateCreditCard('4444-4444-4444-4444'));
// console.log(validateCreditCard('6666-6666-6666-1666'));
// console.log(validateCreditCard('a923-3211-9c01-1112'));
// console.log(validateCreditCard('9923-3211-9601-1111'));
// console.log(validateCreditCard('923-321-901-1111'));

printCardDetails(validateCreditCard('9999-9999-8888-0000'));
printCardDetails(validateCreditCard('4444-4444-4444-4444'));
printCardDetails(validateCreditCard('6666-6666-6666-1666'));
printCardDetails(validateCreditCard('a923-3211-9c01-1112'));
printCardDetails(validateCreditCard('9923-3211-9601-1111'));
printCardDetails(validateCreditCard('923-321-901-1111'));