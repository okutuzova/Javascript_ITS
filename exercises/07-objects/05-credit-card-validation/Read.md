# Exercise: 05-credit-card-validation

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Write a function called “validateCreditCard” that checks credit card 
numbers according to the following rules:  
○ Number must be 16 digits, all of them must be numbers    
○ You must have at least two different digits represented (all of the digits cannot be the same)    
○ The final digit must be even  
○ The sum of all the digits must be greater than 16  
● The following credit card numbers are valid:  
○ 9999-9999-8888-0000  
○ 6666-6666-6666-1666  
● The following credit card numbers are invalid:  
○ a923-3211-9c01-1112 invalid characters  
○ 4444-4444-4444-4444 only one type of number  
○ 1111-1111-1111-1110 sum less than 16  
○ 6666-6666-6666-6661 odd final number  


 
## Solution

### 1. validateCreditCard Function  
The validateCreditCard function is responsible for checking whether a given credit card number is valid according to the rules mentioned above.

1. validateCreditCard(cardNumberString) function
Step 1: Removing Dashes and Cleaning the Card Number
```javascript
let clearedCardNumArray = cardNumberString.split('-').join('');
```
The card number string may contain dashes (-), so this step removes all dashes to make the card number easy to check.

Step 2: Validating Length and Digits
```javascript
let newRegExp = /^\d{16}$/;

if (!newRegExp.test(clearedCardNumArray)) {
    return {
        'number': cardNumberString,
        'valid': false,
        'error': ERROR_MESSAGES[0]
    };
}
```
This regular expression ^\d{16}$ checks that the card number contains exactly 16 digits (no letters or other characters).

If the card number is not exactly 16 digits, the function returns valid: false with an error message indicating either "invalid chars/wrong length".

Step 3: Checking for At Least Two Different Digits
```javascript

let arrayCardNumbersInStrings = clearedCardNumArray.split('');
let uniqueValues = new Set(arrayCardNumbersInStrings);
if (uniqueValues.length === 1) {
    return {
        'number': cardNumberString,
        'valid': false,
        'error': ERROR_MESSAGES[2]
    };
}
```
This code checks whether all digits in the card number are the same by converting the string into an array and then creating a Set (which stores only unique values).

If there is only one unique value, the function returns valid: false and an error message indicating "only 1 type of number".

Step 4: Checking if the Last Digit is Even
```javascript

let lastCardDigit = +arrayCardNumbersInStrings[arrayCardNumbersInStrings.length - 1];
if (lastCardDigit % 2 !== 0) {
    return {
        'number': cardNumberString,
        'valid': false,
        'error': ERROR_MESSAGES[1]
    };
}
```
This code checks whether the last digit in the card number is even.

If the last digit is odd, the function returns valid: false and an error message indicating "odd final number".

Step 5: Checking the Sum of Digits
```javascript

const arrayCardNumbersInNumbers = arrayCardNumbersInStrings.map(Number);
const sumOfDigits = arrayCardNumbersInNumbers.reduce((sum, num) => sum + num, 0);
if (sumOfDigits < 16) {
    return {
        'number': cardNumberString,
        'valid': false,
        'error': ERROR_MESSAGES[3]
    };
}
```
The function checks if the sum of the digits in the card number is greater than 16.

If the sum is less than 16, it returns valid: false with the error message "sum less than 16".

Step 6: Returning the Validation Result
```javascript

return {
    'number': cardNumberString,
    'valid': true
};
```
If all conditions are met, the card is considered valid, and the function returns an object with valid: true.

2. printCardDetails Function
The printCardDetails function is used to print out the result of the card validation in a formatted manner.
```javascript

console.log(''.padEnd(40, '='));
console.log(`= number : ${creditCardObject.number} `.padEnd(39, ' ') + '=');
console.log(`= valid  : ${creditCardObject.valid} `.padEnd(39, ' ') + '=');
if (!creditCardObject.valid) {
    console.log(`= error  : ${creditCardObject.error} `.padEnd(39, ' ') + '=');
}
console.log(''.padEnd(40, '='));
```
This function prints the card number, validity status, and any error message in a formatted manner, with each line being padded to ensure consistent output formatting.

The output is visually enclosed with "===" for clarity.


In the optimized solution several changes have been made to simplify the code.

1.
Step 1
A regular expression cleaning a credit card number from all dashes is used. 

```javascript
const CLEARED_CARD_NUM_ARRAY = cardNumberString.replace(/\D/g, '');
```

Step 2
Instead of using a variable for creating a new regular expression, the regular expression is used directly in the check.

```javascript
if (!/^\d{16}$/.test(CLEARED_CARD_NUM_ARRAY)) {
        return {
            number: cardNumberString,
            valid: false,
            error: 'invalid chars/wrong length'
        };
    }
```
Steps 3 and 4 remained unchanged.  
Step 5
```javascript
 const sumOfDigits = CLEARED_CARD_NUM_ARRAY.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    if (sumOfDigits < 16) {
        return {
            number: cardNumberString,
            valid: false,
            error: 'sum less than 16'
        };
    }

```

.reduce() executes a reducer function (the function passed to reduce()) on each element in the array, accumulating a single output value.

It takes two arguments:

The reducer function itself: ```(sum, digit) => sum + parseInt(digit, 10)```

The initial value of the accumulator (in this case, 0).


```(sum, digit) => sum + parseInt(digit, 10):```

This is an arrow function that defines how the sum is computed. It takes two arguments:

sum: This is the accumulator that stores the running total. It starts at 0 (the initial value specified at the end of reduce()).

digit: This represents each individual character (digit) in the array as we loop through it. It is initially a string, so parseInt(digit, 10) is used to convert it to a number.

parseInt(digit, 10): Converts the string digit into an integer, using base 10 (decimal system). For example, if digit is '2', it converts it into 2.

The sum + parseInt(digit, 10) adds the current digit (as a number) to the running total (sum).


2. printCardDetails Function
I used ```console.log('='.repeat(40));``` to create a string with repeating elements. 

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `optimized-solution.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
