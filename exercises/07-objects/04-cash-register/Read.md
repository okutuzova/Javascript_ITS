# Exercise: 04-cash-register

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Write a function called cashRegister that takes a shopping cart object.   
● The object contains item names and prices (itemName: itemPrice).   
● The function returns the total price of the shopping cart, e.g. :  
```javascript
// Input
let cartForParty = {
 banana: "1.25",
 handkerchief: ".99",
 Tshirt: "25.01",
 apple: "0.60",
 nalgene: "10.34",
 proteinShake: "22.36"
};
// Output
cashRegister(cartForParty)); // 60.55
```


 
## Solution

In the main solution the function cashRegister takes one parameter that is an object. The Object.values(cart) method extracts all values from the cart object and returns them as an array. 
```javascript
let cart = { 
    apples: "5.55", 
    turkey: "4.99", 
    chicken: "5.01"
};

console.log(Object.values(cart)); 
// Output: ["5.55", "4.99", "5.01"]
```
The reduce() method iterates over the array and accumulates the total sum. 
The reduce() method in JavaScript takes a callback function and an initial value as its second argument.

Syntax:
``` javascript
array.reduce((accumulator, currentValue) => { /* logic */ }, initialValue);
```

The callback function (total, price) => total + parseFloat(price) does the following:

- total → Accumulator that keeps track of the running sum.

- price → The current item (price in string format) being processed.

- parseFloat(price) → Converts the string price into a floating-point number.

The initial value of total is 0. The zero (0) at the end of the reduce() function is the initial value of the accumulator (total).  
I believe this option is the best approach as the code is short and concise. However, for educational purposes I introduced two more options to solve the task. 

In the second solution a for loop is used. The for...in loop iterates over all enumerable properties, including ones inherited from the prototype chain. To prevent potential issues, I added a hasOwnProperty check to the loop. This is important in case of unexpected changes of the object. If someone extends Object.prototype with additional properties (e.g., Object.prototype.discount = "5.00";), those properties would incorrectly be included in the calculation without this check. Using Object.keys() or Object.values() is often a better choice than for...in. For educational purposes I introduced the for...in loop solution.   

In the third solution the Object.values() with forEach() methods are used. Object.values(cart) ensures that we are dealing only with own properties of the object, not inherited ones. So no need for hasOwnProperty check. parseFloat(price) is used to convert the strings to numbers. I also added the toFixed(2) method to avoid problems with a floating point precision issues. Thus the number of decimals is limited to two. 

## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `solution-2.js` - JavaScript.
- `solution-3.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
