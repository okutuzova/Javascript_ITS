/**
 * @file: 02-phone-number.js
 * @author: Olga Kutuzova
 * Exercise 02-phone-number
 * 
 * This script includes a phone number validation testing with a regular expression as a pattern.
 */

const patternTel = /^\+?([0-9]{1,3})([-\s]?[0-9]{1,4}){1,3}$/; 


// Test cases:
const testCases = [
  { phone: "+1 800 555 1234", expected: true }, 
  { phone: "1-800-555-1234", expected: true },  
  { phone: "+44 20 7123 4567", expected: true }, 
  { phone: "393792000397", expected: true },  
  { phone: "12345678", expected: true },  
  { phone: "+1 8005551234", expected: true },  
  { phone: "+123 456-7890", expected: true },  
  { phone: "123 456 78901234", expected: false },  // too long
  { phone: "+1-800", expected: false },  // too short
  { phone: "123-456-7890-123", expected: false },  // too long
];

// Testing:
testCases.forEach(({ phone, expected }) => {
  const result = patternTel.test(phone);
  console.log(`Testing "${phone}": ${result === expected ? 'PASS' : 'FAIL'}`);
});


