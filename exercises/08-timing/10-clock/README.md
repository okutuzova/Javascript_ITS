# Exercise: 10-clock

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Implement a javascript clock that prints the current time to the console 
every second  
● The output should be in the format HH:mm:ss e.g. 17:03:06  

 
## Solution
In the `main-solution` folder I have created a script that displays the current time in the console every second. I have created a function javaScriptClock(), inside of which a initialized a variable with current time that is created with a date object constructor. Using the methods of the date I have extracted the hours, minutes and seconds from the current time. I have also implemented a function that adds leading zeros to each interval if it is a single digit number. Then, using the SetInterval the timer is logged to the console.

In the `simple-browser-solution` I have added the HTML element with an id that contains the clock. Therefore, the clock is displayed in the browser. 

In the `nice-browser-solution` I have added three buttons that allow to switch between the different modes of displaying the date and time. The function bindMode(name) creates a function that sets mode to "full", "date", or "time". Onclick event listeners are assigned to buttons to change modes. Update() updates the text inside the clock element. 
setInterval(update, 1000) ensures the clock updates every second. Format(formatMode) determines how the date/time is displayed:

"full" → Full date and time (e.g., 03/30/2025 12:34:56).  

"date" → Only the date (e.g., 03/30/2025).  

"time" → Only the time (e.g., 12:34:56).  

## Files:
- `main-solution` - a folder with the initial solution following the exercise requirements.
- `simple-browser-solution` - a folder with the project with a simple JS clock displayed in the browser.
- `nice-browser-solution` - a folder with the project .
- `Read.md` - exercise requirements and solution. 
