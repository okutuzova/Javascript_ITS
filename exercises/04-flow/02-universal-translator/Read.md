# Exercise: 02-universal-translator

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Write a function named helloWorld that: 
○ takes 1 parameter, a language code (e.g. "es", "de", "en")  
○ returns "Hello, World" for the given language, for at least 3 languages. It should default to 
returning English.  
● Call that function for each of the supported languages and log the result to 
make sure it works.

 
## Solution
- I created an `index.html` file with basic HTML structure.
- I created a `main.js` file to write a function __helloWorld__ that takes one parameter languageCode. The switch statement with multiple cases is used. In every case a greeting in different language is returned. If upon the function call an unknown argument is passed, the default will return a greeting in English language.
- For practice I created a `optimized-script.js` file. In this file I initialized a constant __helloWorldOptimized__ to which an anonymous arrow function is assigned. const helloWorld = (languageCode) => {...}. The main difference with the previous version is the substitution of switch with object __translations__ that contains pairs key-value (language-greeting). 
The default case is simplified - when the language code is not found in the object, the greeting in english will be returned (return statement).  
**NB** When testing the optimized function peformance in different browser, it did not give the expected results as the function using switch was executed quicker in Chrome, Edge, Opera. Only Firefox gave the expected result. The problem is that every time the function is called, the new object translations is recreated which makes code slower. For the following file where I am actually testing the functions performance, I put the translations object outside of the function so that there is no need to recreate the object on every iteration. Another observation - such browsers as Chrome and Opera use the V8 engine which optimizes execution with a Just-In-Time compilation mechanism. It may happen that on small switch cases, the browser itself transforms switch into an object structure. 
- In order to test the solutions I created a file
`performance-test.js`. For this test I used a method __performance.now()__. This is a precise method calculating up to microseconds. It does not depend on the system clock and is useful to measure the functions performance. This method returns a number of ms starting from the page load. I copied both functions from the original files - one with a switch, another - with an object. Then I cretaed a constant with iterations number. The 1_000_000 is a way of writing big numbers to ease understanding. It is called a numeric separator that simplifies a number readability. The next step is to log the results calling the measure function and passing the function - first original, with a language code and iterations, second - the optimized one. 
The expected result is that an optimized function is executed in a shorter time as search on object {} is faster - O(1). 

## RESULTS

| Browser  | Original Func with `switch` | Optimized Func with `{}` | Comments |
|----------|----------------------------|--------------------------|-------------|
| **Chrome**  | 5.1 ms  | 4.8 ms  | Slight difference, V8 is optimizing both functions. |
| **Firefox** | 11 ms   | 1 ms    | SpiderMonkey (Firefox) is slower with `switch`, but quicker with objects. |
| **Edge**    | 4.4 ms  | 4.1 ms  | Same as Chrome due to V8 engine. |
| **Opera**   | 6.1 ms  | 5 ms    | Also uses V8. |


## Conclusion
Function using switch is working well in the browsers with V8. However, function using object is easier to read and comprehend. 


## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript for a function helloWorld.
- `optimized-script.js` - an optimized version. 
- `performance-test.js` - comparing two versions' performance.
- `Read.md` - exercise requirements and solution. 
- JSDoc folder with documentation.