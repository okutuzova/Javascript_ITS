# Exercise: 09-format-date

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
Write a function formatDate(date) that accepts a date and outputs it as follows:  
● If less than a second has passed since the date, output "right now"  
● If less than a minute has passed since the date, output "n sec. ago"  
● If less than an hour has passed since the date, output "m min. ago"  
● Otherwise, output the date in this format "DD.MM.YY HH:mm"  
○ e.g. 17.04.16 10:00  

 
## Solution

In the file `main.js` a function `formatDate(date)`is created. The function takes a date object as a parameter and returns a string that represents the time difference between the current time and the input date. The function uses the `Date` object to get the current time and the input date. The first if statement checks if the difference is less than zero, which means the date is in future and that message is logged to the console. Then the calculated difference is compared to different time intervals and respective messages are logged to the console. 
In order to format the data in case of one digit numbers, the function `padStart()` is used. 



## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
