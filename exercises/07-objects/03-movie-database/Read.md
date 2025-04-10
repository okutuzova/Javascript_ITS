# Exercise: 03-movie-database

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Create an object to store the following information about a movie: title (a 
string), duration (a number), and stars (an array of strings).  
● Create an Array of objects that can hold several movies.  
● Create a function to print out the movie information like so: "Puff the Magic 
Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."  
● Test the function by printing one movie.  
● Use the function to print all the movies in the Array.   


 
## Solution
One object containing information on a movie is created first. Then an array of objects following the previous pattern is created. Finally, a function that logs the information on each object of the array is created. Tha function takes one parameter that is expected to be an object. The template literals are used to format the output dynamically. .join(',') converts the array of strings into a comma-separated string for a better readibility. 


## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
