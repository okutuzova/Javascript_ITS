# Exercise: 01-soundwave

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
- Given the following array  
``` javascript
let noisesArray = ['quack', 'sneeze', 'boom'];
```
Produce the following array, then print it to the console  
``` javascript
['Quack!','qUack!!','quAck!!!','quaCk!!!!','quacK!!!!!','Sneeze!','sNeeze!!','snEeze!!!','sneEze!!!!
','sneeZe!!!!!','sneezE!!!!!!','Boom!','bOom!!','boOm!!!','booM!!!!']
```

## Solution
- A function `calpitalizeLetter()` takes a string as a parameter, then in a for loop using the indices, slice method, charAt method, and concatenation, every letter is converted to the upper case and an exclamation mark is added. Then, the result is pushed to the array.
- A new array using a map method that applies the function to every element of the array is created. Reduce method is used to concatenate the arrays. An accumulator is initially an empty array, while curr takes every subarray from the initial array. Finally, the concat method flattens the array. 
- The second solution is shorter, and a modern flatMap() method is used replacing the reduce and concat methods combination. flatMap applies a function to every element, and flattens the result. 




## Files:
- `index.html` - main page.
- `main.js` - external javascript file.
- `solution-02.js` - external javascript file.
- `README.me` - exercise requirements and solution. 
