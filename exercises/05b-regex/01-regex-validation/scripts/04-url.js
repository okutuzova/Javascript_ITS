/**
 * @file: 04-url.js
 * @author: Olga Kutuzova
 * Exercise 04-url
 * 
 * This script includes a URL validation testing with a regular expression as a pattern.
 */

const patternURL = /^(https?|ftp):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9/-]*)?(\?[a-zA-Z0-9&=]*)?(#[a-zA-Z0-9]*)?$/;

const testURLs = [
    'http://example.com',             // ✅ Valid URL
    'https://www.example.com',        // ✅ Valid URL
    'ftp://ftp.example.com',          // ✅ Valid URL
    'http://example.com/path',       // ✅ Valid URL with path
    'https://example.com?query=1',   // ✅ Valid URL with query string
    'https://example.com#fragment',  // ✅ Valid URL with fragment
    'http://example.com/path?query=1&value=2#fragment', // ✅ Valid URL with path, query, and fragment
    'http://example',                // ❌ Invalid URL (missing TLD)
    '://example.com',                // ❌ Invalid URL (missing protocol)
    'http://example.c0m',            // ❌ Invalid URL (invalid TLD with number)
    'http://example.com#',           // ✅ Valid URL with fragment
  ];
  
  testURLs.forEach(url => {
    console.log(`Testing URL "${url}": ${patternURL.test(url) ? 'Valid' : 'Invalid'}`);
  });
  

