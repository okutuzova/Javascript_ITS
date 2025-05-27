# Exercise: 06-reduce-all

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
Make sure that you fully understand the Array reduce method  
Write functions that use the reduce method to implement your version of the following Array methods: 
forEach() , map(), filter() , indexOf() , slice()  
For each method, implement parameters and return values as in the documentation  
● do not use Array.prototype  
● your functions receive as a first parameter the array on which to operate  
● all other parameters should be identical to the documentation  
● except for the thisArg parameter, you don't have to implement it  
For example your implementation of forEach could be something like this:  
``` javascript
function myForEach(arr, ... ) {
}
``` 
Testing:  
● write tests that compare the output of your functions to those of the Array methods  
● write several and comprehensive tests for each method  
● make sure that your methods give the same output as the originals  
``` javascript
// Example of testing myMap
// group of arrays used for testing
let testGroup = [
 [ 1, 2, 3, 4, 5 ],
 [ 0, 0, 3, 4, 5 ],
 [ 7, 0, 9, 74, 85, 1, 42, 3, 88 ]
];
// test function for testing map - can be any function as long as the parameters are what map 
expects
let testFunc = function(num) {
 return num * 2;
};
// replace this with your implementation of map using reduce
function myMap(arr, ... ) {
}
console.log('==== Testing Array.map() method ====');
testGroup.forEach(function(arr) {
 console.log(arr.map(testFunc));
});
console.log('\n==== Testing the function myMap() ====');
testGroup.forEach(function(arr) {
 console.log(myMap(arr, testFunc));
});
```

## Solution

### 1. Filter()
```javascript
function myFilter(arr, callback ) {
    return arr.reduce((acc, current) => {
       callback(current) ? acc.push(current) : acc;
        return acc;
     }, []);
    
}
```
The function takes two params: an array and a callback function. An array to which a reduce method is applied, is returned. The reduce method here takes an accumulator and a current element. To each current element a callback function is applied. If it passes the test contained in the callback function, then the element is pushhed to the accumulator, whose initial value is an empty array. If it doesn't pass the test, then the accumulator is returned.

#### Testing  
A simple function checking if a number is greater than 3 is used for testing both the original filter method and the function myFilter. The result is logged to the console.

### 2. forEach()
```javascript
function myForEach(arr, callback) {
    arr.reduce((emptyAcc, current, index, array) => {
        callback(current, index, array);
        return emptyAcc; // accumulator not used
    }, undefined);
}
```
The function takes two params an array and a callback function. As the original forEach method actually does not perform anything, and just executes side effects, the undefined initial value for the accumulator is used. As the reduce method has to obligatory return sth, the undefined is returned to imitate the original forEach method. The reduce method receives three params as the original method - the current element, the index and the array. The callback function is applied to each current element, and the index and the array are passed as the second and third params.

#### Testing  
Testing is performed on an array of numeric arrays; on the same arrays to which the additional number is pushed, and on a simple array of numbers to be logged to the console. 

### 3. indexOf()



### 4. map()
```javascript
function myMap(arr, callback ) {
    return arr.reduce((acc, current) => {
        acc.push(callback(current));
        return acc;
     }, []);
}
```
The function takes two params: an array and a callback function. The accumulator receives an initial value of an enpty array to which the current element on which a callback foo has been applied, is pushed. The accumulator is returned to the reduce method.

#### Testing
Testing is performed on an array of numeric arrays; a simple function which multiplies a number by 2 is used for testing both the original map method and the function myMap. The result is logged to the console.

### 5. slice()
```javascript
function mySlice(arr, start, end) {
    return arr.reduce((acc, current, index) =>  {
        if (index >= start && index < end) {
            acc.push(current);
        } 
        return acc;
    }, []);
}
```
The function takes three params: an array, a start index and an end index. The accumulator receives an initial value of an empty array. A check if the index is less or equal to the passed start, and index is less than the passed end, is performed. If true, the element is pushed to the accumulator. The accumulator is returned to the reduce method.

#### Testing
Testing is performed on an array of strings. The result is logged to the console.

## Files:
- `main.js` - external javascript files inside the respective folders for each method tested.
- `README.me` - exercise requirements and solution. 
