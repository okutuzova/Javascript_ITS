/**
 * Validates a credit card number against a set of rules:
 * 
 * Rules:
 * 1. Must contain exactly 16 digits.
 * 2. All characters must be numbers (after removing dashes).
 * 3. Must contain at least two different digits (not all the same).
 * 4. The sum of all digits must be greater than 16.
 * 5. The last digit must be even.
 *
 * @param {string} cardNumber - The credit card number as a string (may contain dashes).
 * @returns {{number: string, valid: boolean, error?: string}} 
 * An object containing:
 * - `number`: the original input number,
 * - `valid`: whether the card number passed validation,
 * - `error` (optional): reason for failure if not valid.
 */
export function validateCreditCard(cardNumber) {
    const clearedCardNumArray = cardNumber.split('-').join('').split('').map(Number);

    // Check the length of a card number
    if (clearedCardNumArray.length !== 16) {
        return {
            'number': cardNumber,
            'valid': false,
            'error': 'Wrong length'
        };
    }

    // Check all digits are numbers
     if (clearedCardNumArray.some(isNaN)) {
        return {
            'number': cardNumber,
            'valid': false,
            'error': 'Invalid characters'
        };
     }

     // Check all digits are the same
     if (new Set(clearedCardNumArray).size === 1) {
        return {
            'number': cardNumber,
            'valid': false,
            'error': 'Same digits'
        };
     }

     // Check the sum of digits
     if (clearedCardNumArray.reduce((acc, val) => acc + val, 0) <= 16) {
        return {
            'number': cardNumber,
            'valid': false,
            'error': 'Sum less than 16'
        };
     }

     // Check the last digit is even
     if (clearedCardNumArray[clearedCardNumArray.length - 1] % 2!== 0) {
        return {
            'number': cardNumber,
            'valid': false,
            'error': 'Last digit is odd'
        };
     }

     return {
        'number': cardNumber,
        'valid': true,
        'error': 'Passed'
     };
}

