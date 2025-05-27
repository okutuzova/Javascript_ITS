# Exercise: 04-clone

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
Write a function clone() that clones any object  
● Test it on the object in the next slide  
● Change the name of the cloned object and make sure that the original did not change  
Important:  
Write the function yourself, do not use built-in functions such as Object.assign(), jQuery.extend() or 
JSON.parse(JSON.stringify())
The object to clone and test:
```javascript
{
 name: 'Green Mueller',
 email: 'Rigoberto_Muller47@yahoo.com',
 address: '575 Aiden Forks',
 bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
 active: false,
 salary: 37993,
 birth: Sun Apr 18 1965 13:38:00 GMT+0200 (W. Europe Daylight Time),
 bankInformation: 
 { amount: '802.04',
 date: Thu Feb 02 2012 00:00:00 GMT+0100 (W. Europe Standard Time),
 business: 'Bernhard, Kuhn and Stehr',
 name: 'Investment Account 8624',
 type: 'payment',
 account: '34889694' }
}
```

## Solution
The function `clone()` is implemented as follows:
- A check if the passed object is not an object is performed, securing that a primitive value as a property is passed as it is. 
- A check if a passed object is a date is performed. If true, a new date object is created and returned. getTime() method allows to receive the number of milliseconds since January 1, 1970, 00:00:00 UTC from the passed initial date, then new Date creates a date object from the passed milliseconds.
- A check if a passed argument is an array is performed using a ternary operator. If it is an array, a new empty array is returned, otherwise, a new empty object is returned.
- Then in a for .. in loop used for the objects, each property of the passed object is checked using the hasOwnProperty() method. This allows to control that a property belongs to the passed object and not inherited from the prototype chain. If the property belongs to the object then it is cloned invoking the `clone()` function recursively.
The test changing the name propperty of the cloned object is performed to ensure that the original object is not changed, thus, the deep cloning is done.

## Files:
- `index.html` - main page.
- `main.js` - external javascript files.
- `README.me` - exercise requirements and solution. 
