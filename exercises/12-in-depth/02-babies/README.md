# Exercise: 02-babies

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Create an empty array of babies  
● Each baby should have the following properties  
○ "name" (a string)   
○ "months" (age in months as number)   
○ "noises" (an array of strings) 
○ "favoriteFoods" (an array of strings) 
● Add 4 different babies to the array using as many different ways as possible  
● Iterate through the array printing key and value pairs e.g [name:”Lyla”]  
● Now add an "outfit" property to each baby in the array  
○ Outfit should describes at least 3 parts of their clothing using different properties, for 
example, "shirt": "blue"  
○ Print each baby again with their outfit in a nicely formatted object  

## Solution
In the `solution-01-06.js` files the different ways to add elements to the array are shown. Then, the rest of the script for the exercise continues in the `solution-01.js` file. 
The ways to add elements to the array used are: 
- `push()`;
- `unshift()`;
- `splice()`;
- `concat()`;
- assigning by index.
Each created object received the respective properties. First, the whole array is logged as it is.
Then, using forEach method and Object.entries() method, the array is logged with the keys and values.
A function from the previous exercises allowing to select a random integer is used to select the outfit for each baby.
Three arrays (breeds, fluffiness, colors) contain the sets of values for the outfit. Using a map method, the values are assigned to the outfit property. 
Finally, a function `printCatsNicely()` is used to print the array with the outfits in a nicely formatted object.


## Files:
- `index.html` - main page.
- `solution-01-06.js` - external javascript files.
- `README.me` - exercise requirements and solution. 
