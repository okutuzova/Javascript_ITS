# Exercise: 03-baby-processing

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
Using the babies array from the previous exercise:  
● Write a getBabyOutfit() function that returns a description a baby's outfit
○ e.g "Lyla is wearing a blue shirt and red pants and a green hat"  
● Write a feedBaby() function that prints what a baby is eating.  
○ e.g. "Lyla is eating food3, food1, food4 and food2"  
○ All foods in favoriteFoods should appear but randomly each time the function is called  
● Run both function on all the babies  

## Solution
Steps from the previous exercise to create an array of objects are repeated. 
The function `shuffleArray()` is also copied from the previous exercises. The function operates in the following way: 
1. ```for (let i = array.length - 1; i > 0; i--)```
Take the last index of the array. Each iteration of the loop, the last index is reduced by 1. Thus, the loop will run until the index reaches 0.


2. ```const j = Math.floor(Math.random() * (i + 1))```
Generate a random index j in the range from 0 to i (inclusive). This is the new position for the current element i.

3. ```[array[i], array[j]] = [array[j], array[i]]```
Swap the elements at indices i and j. This effectively moves the element at index i to a new random position.

`getCatOutfit()` function returns a description of a cat. 
`feedCat()` function shuffles the array of favorite foods using the aforementioned algorithm. Each food is added to an empty string, then the index is checked to secure that the last element ofthe array is added with an 'and' preposition.  
Therefore, in two ways the random properties are selected to describe each object from the initial array.

## Files:
- `index.html` - main page.
- `main.js` - external javascript files.
- `README.me` - exercise requirements and solution. 
