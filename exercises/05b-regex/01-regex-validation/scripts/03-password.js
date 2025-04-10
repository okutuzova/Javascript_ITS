/**
 * @file: 03-password.js
 * @author: Olga Kutuzova
 * Exercise 03-password
 * 
 * This script includes a password validation testing with a regular expression as a pattern.
 */

const patternPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/;

// test Cases
const testPasswords = [
    'Password1@',  // ✅ Valid password
    'password123', // ❌ No special character
    '12345678@',   // ❌ No letter
    'Password!',   // ❌ No digit
    'P@ssw',       // ❌ Less than 8 characters
    '12345abc@',   // ❌ No uppercase
    'ABCDEF123@',  // ❌ No lowercase
    'password',    // ❌ No digit and no special character
    '1a2b3c4d5@',  // ❌ No uppercase
    'Abcd123@',    // ✅ Valid password
    'abcd12345@',  // ❌ No uppercase
    'abcdefgh',    // ❌ No digit, no uppercase, no special character
    'A1b2C3d4@',   // ✅ Valid password
    '1234@ABcd',   // ✅ Valid password
    '@Ab1cde',     // ❌ Too short
    '@ab1cde',     // ❌ No uppercase letter
  ];
  

  // testing:
testPasswords.forEach(password => {
    console.log(`${password}: ${patternPassword.test(password) ? 'Valid' : 'Invalid'}`);
  });