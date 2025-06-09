# Exercise: 02-strange-kebab

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
Add a method to the String prototype called toStrangeKebab() that transforms strings to kebab-case 
```javascript
// Given the following array
const source = [
 'MyNameIsMyPassportVerifyMe',
 'My Name Is My Passport Verify Me MMM',
 ' -- -My?Name&*is**my$$Passport???p??',
 'mY--name--- is- - 2023---',
 'mynameismypassport',
 '2022 my name is',
 '2024-my-name-is'
];
source.forEach(item => console.log(item.toStrangeKebab()));
```

The output should exactly match this:
my-name-is-my-passport-verify-me
my-name-is-my-passport-verify-me-m-m-m
my-name-is-my-passport-p
m-y-name-is-2023
mynameismypassport
my-name-is
my-name-is



## Solution
In this exercise, a method called toStrangeKebab() is created.  The method uses regular expressions to remove special characters and spaces, and then replaces the remaining spaces with hyphens. The method also converts the string to lowercase.
This method is applied to all strings in JS: 
```javascript
String.prototype.toStrangeKebab = function() {
```
First, the leading digits are replaced:
```javascript
str = str.replace(/^[0-9]+/, '');
```
Then, in a for loop the characters are transformed to lower case preceded by a hyphen. The rest is added to the returned string as it is. 
If the hyphens are repeated, they are replaced with a single hyphen.
```javascript
result = result.replace(/-+/g, '-');
```
The method returns the result trimming the hyphens in the start and end of the string. 
```javascript
return result.replace(/^-|-$/g, '');
```

## Files:
- `main.js` - external javascript file.
- `index.html` - html file.
- `README.me` - exercise requirements and solution. 
