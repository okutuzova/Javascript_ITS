# Exercise: 01-dog-speak

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
Add a method to the String prototype called dogSpeak() that works as follows:
```javascript
let s = 'We like to learn';
s.dogSpeak();
'Dogs are smart'.dogSpeak();
// Console output
// We like to learn Woof!
// Dogs are smart Woof!
```
Think about the following question
Is it a good idea to extend prototypes of built-in Javascript objects such as String, Array, etc?


## Solution
In order to add a method to the String prototype, you need to use the String.prototype property.
`String.prototype.dogSpeak` — adds a method to all the strings.
`this` — is the current string to which the method is applied.
`console.log(...)` — logs a string adding a ' Woof!'.

It is usually not a good idea to extend prototypes of built-in Javascript objects such as String, Array, etc, unless it is done for educational purposes.
The main reasons: 
- unexpected behaviour: other developers do not expect a string to have an unknown custom method. 
- future chages: in newer versions of JS the String.prototype may be changed.
- conflicts: if in other libraries there is a method with the same name, it may overwrite your custom method.

The best solution is to create a new function and use it instead of the String.prototype.dogSpeak.
## Files:
- `main.js` - external javascript file.
- `README.me` - exercise requirements and solution. 
