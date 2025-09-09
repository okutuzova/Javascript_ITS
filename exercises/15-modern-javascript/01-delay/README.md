# Exercise: 01-delay

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Use promises to implement a delay function that can be used like in the code below
● Your implementation should work for any type of Javascript function such as
○ regular functions
○ arrow functions
○ anonymous functions
delay(300).then(myFunction);


## Solution
```javascript
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
```
delay(ms) returns a new Promise object. When a promise is creates an executor invokes resolve => setTimeout(resolve, ms). Resolve is a function that is invoked to fullfill the promise. Inside the executor a setTimeout is invoked. A callback in browser API is registered that will be executed after ms milliseconds. After ms milliseconds a resolve function is invoked and a promise becomes fulfilled. Resolve is also invoked without parentheses, as in that case it would be executed immediately upon the creation of a promise. 

.then() accepts any callable function. 

setTimeout is a macrotask that after ms will execute a callback. Inside the callback resolve is invoked and .then callbacks will get inside a microtask queue. As soon as the microtask queue is empty, the callback will be executed.

## Files:
- `main.js` - external javascript file.
- `README.me` - exercise requirements and solution. 
