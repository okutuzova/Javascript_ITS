# Exercise: 06-date-ago

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements

● Create a function getDateAgo(date, days) that returns the day of the month 
n days ago from the given date  
● For instance, if today is the 20th, then getDateAgo(new Date(), 1) should be 
19th and getDateAgo(new Date(), 2) should be 18th  
● Test the function to make sure it works reliably with any valid Date object  
● Decide what to do with a negative 'days' parameter  
○ e.g. getDateAgo(new Date(), -2)  


 
## Solution
In the `main.js` file I have created a `getDateAgo` function that takes two parameters: a date object from which we will calculate the second parameter (days ago). Inside the fucntion a copy of the passed date object is created first of all, to avoid the occasional modification of the original date object. `date.getDate()`method retrieves the day of the month, like 19 from August 19, 2025. Math.abs(days) ensures that the days parameter passed is converted in a positive number. `newDate.setDate(date.getDate() - Math.abs(days))` sets the date of the newDate object to the day of the month minus the absolute value of the days parameter. Finally, the function returns a calculated day of the month.



## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
