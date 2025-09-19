# Exercise: 02-roulette

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Write a function called round that returns a promise with a 50/50 
probability of resolving or rejecting
● The function should take 2 optional parameters:
○ label, a label for the round, otherwise the default is "round"
○ delay, a delay in which to resolve the promise, otherwise 500ms
● Call the function 3 times and use the Promise API to create an output as in 
the following page
● Remember to handle any possible errors cleanly

When any round is lost (and terminate)
round x: lost!
Game over
When all rounds are won (and terminate)
round 1:won!
round 2:won!
round 3:won!
Game over

## Solution
A function round takes two params set by default. As the requirements of an exercise are followed, the parameters are set in this mode: 
```javascript
function round(label="round", delay=500)
```
However, it is to be noted that if the first parameter is not given in a function invocation like this: 'round(1000)', 1000 will automatically become the first parameter, as Javascript does not understand the order of the parameters passed. This is a frequent problem of a function with two optional parameters. The best practice is to pass the parameters in this way: 
```javascript
function round({ label = "round", delay = 500 } = {}) 
```

The function round returns a promise. A promise may be either resolved or rejected. SetTimeout awaits 'delay' ms before executing the inner function.
```javascript
Math.random() > 0.5
    ? resolve(`${label}: won!`)
    : reject(new Error(`${label}: lost!`));
```
Math.random() generates a random number from 0 to 1. With a 50/50 probability, the promise is resolved or rejected.


The function is called three times with different parameters. Promise API Promise.all checks the resolution of promises and if any of them fails, returns the failed one. The promise is handled with the then() method. The catch() method is used to handle errors. The finally() method is used to log the message "Game over".

## Files:
- `main.js` - external javascript file.
- `README.me` - exercise requirements and solution. 
