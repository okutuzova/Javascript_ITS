# Exercise: 07-seconds

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
Write two functions that based on the current date and time output the number 
of seconds:  
● getSecondsToday() returns the number of seconds from the beginning of 
today  
● getSecondsToTomorrow() returns the number of seconds till tomorrow  



## Solution

In the `main.js` file I have created two functions.  
The function `getSecondsToday()` calculates the number of seconds that have passed since the beginning of the current day (midnight, 00:00:00).

First, the current timestamp is received using Date.now(), which returns the number of milliseconds elapsed since the Unix Epoch. Next, with the help of a constructor new Date(), the timestamp is convertes to a Date object. Using the setter method, I have set thetoday's time to midnight and calculated the the time difference (in seconds) between the current time and midnight.

The function `getSecondsToTomorrow()` calculates the number of seconds remaining until the next day (midnight of tomorrow). First, I receive the current date and time using new Date() constructor. Then, the current date is copied to a variable tomorrow. Then I have added one to the date to get the date of the tomorrow and set the time to midnight. Finally, the difference is calculated in seconds between the current time and midnight of tomorrow.


## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
