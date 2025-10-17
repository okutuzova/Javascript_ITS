# Exercise: 02-validate me

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26

## Exercise Requirements 
Write a function validatePassword() that returns true if a password meets the following requirements:
● Must be at least 8 characters long
● Must contain at least one uppercase letter, one lowercase letter, one digit and one symbol
If the password is invalid, the function should throw a custom error object with the message "Invalid 
password format" and the reason the password is not valid
This code tests the function. Add more cases to it
try {
 const validPassword = 'Abcdefg$1';
 const invalidPassword = 'abcdefg1';
 console.log(validatePassword(validPassword)); // true
 console.log(validatePassword(invalidPassword)); // throws error
} catch (error) {
 console.error(error.message); // "Invalid password format - no uppercase"
}

## Solutuion
The exercise is implemented using TypeScript and Vite.
### Installation

Instructions for building and running the project:
```javascript
npm install
npm run start (for development server).
```

### Scripts
'main.ts'
The necessary styles are imported.The DOM elements are selected for the DOM manipulation. Type casting is used to ensure that the elements are not null.
Event Listener on click event is added to the button. The function 'validatePassword' is called when the button is clicked. The function checks if the password is valid. If the password is valid, the function returns true. If the password is invalid, the function throws an error. The error is caught by the catch block and the error message is displayed.

The basic function is implemented in the file 'validatePassword.ts'. PasswordError class extends the Error class. Reason is set as a message for the password decline. It is passed as a parameter to the constructor of the PasswordError class. The function that returns true/false with regex tests the password input. 

Taking into account that the input is available on the page, the cases for testing have not been added to the function. The password test is conducted directly on the page with e respective message display.

### Files
- 'main.ts'
- 'validatePassword.ts'
- 'index.html'
- 'style.css'
- 'package.json'
- 'tsconfig.json'
- 'README.md'

### Dependencies
- 'typescript'
- 'vite'

