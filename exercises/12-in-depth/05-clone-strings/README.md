# Exercise: 05-clone-strings

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
Write a function cloneStrings() that only clones string properties of an object
Starting with the example object of the previous exercise this should be the result
{ name: 'Green Mueller',
 email: 'Rigoberto_Muller47@yahoo.com',
 address: '575 Aiden Forks',
 bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
 bankInformation: 
 { amount: '802.04',
 business: 'Bernhard, Kuhn and Stehr',
 name: 'Investment Account 8624',
 type: 'payment',
 account: '34889694' }
}


## Solution
The function `clone()` is modified to handle coning of only string properties of an object. 
An empty object copy is created. In a for .. in loop the object properties are checked. First check if the property is not an inherited one using hasOwnProperty() method. Then check if the property is a date. If true, the loop passes to the next iteration. The check if the property is a string is implemented, if true then the property is cloed. String transformation is used just to make sure that the returned value is a string. Finally, if the passed object is an object, a clone() function is called recursively.



## Files:
- `index.html` - main page.
- `main.js` - external javascript files.
- `README.me` - exercise requirements and solution. 
