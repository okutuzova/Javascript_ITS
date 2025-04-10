/**
 * @file: 01-email-address.js
 * @author: Olga Kutuzova
 * Exercise 01-email-address
 * 
 * This script includes an email validation testing with a regular expression as a pattern.
 */

const patternEmail = /^.+@.+\.[A-Za-z]{2,4}$/;

const patternOptimized = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;




const testEmails = [
  'olga.kutuzova@edu-its.it',  // ✅ Valid email
  'hello@domain.com',               // ✅ Valid email
  'user@domain.co.uk',              // ✅ Valid email
  'user@domain.c',                  // ❌ Top Level Domain is too short
  'user@domain.abcdef',             // ❌ TLD is too long
  '@domain.com',                    // ❌ No characters before `@`
  'user@.com',                      // ✅ Allowed but invalid in real use
  'user@domain.',                   // ❌ No TLD after `.` 
  'user@domain..com',               // ❌ Consecutive dots in domain
  'user@domain#example.com',        // ❌ Invalid character `#`
  'user@domain_com.com',            // ❌ Invalid character `_`
  'user@domain.c0m',                // ❌ Numbers in TLD (not allowed in this regex)
  'user@com',                       // ❌ Missing TLD
  'user@domain.comm',               // ✅ Valid TLD, but too long for this pattern
  'user@domain.com '                // ❌ Trailing space
];

// Loops for testing the array
testEmails.forEach(email => {
  console.log(`${email}: ${patternEmail.test(email) ? 'Valid' : 'Invalid'}`);
});

console.log('Optimized RegExp');

testEmails.forEach(email => {
  console.log(`${email}: ${patternOptimized.test(email) ? 'Valid' : 'Invalid'}`);
});


