# Exercise: 04-cabracadabra

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26

## Exercise Requirements
● Code 3 different solutions to change the 4th letter in the following string 
"Abracadabra" into an "X"  
● Each solution should be in a separate folder.   
○ Name them solution-1, solution-2, etc.   
● Also include a doc file in which you explain what 3 ways you used  
● Bonus: There are many ways to replace a character in a string. Code other 
solutions than the above 3
  

## Solution
In JavaScript, strings are immutable, meaning that we cannot directly change a character in a string. Instead, we must create a new modified string using different techniques. I found six different approaches to solve the problem.   

## 1. Using `slice()` and Concatenation
### **Code:**
```javascript
let changedWord = initialWord.slice(0, 3) + 'X' + initialWord.slice(4);
```
### **Explanation:**
- `slice(0, 3)` extracts the first three characters.
- `'X'` is inserted at index `3`.
- `slice(4)` extracts the remaining part from index `4` onward.


---

## 2. Using `split()`, Array Modification, and `join()`
### **Code:**
```javascript
let changedIntoArray = initialWord.split('');
changedIntoArray[3] = 'X';
let finalWord = changedIntoArray.join('');  
console.log(finalWord);
```
### **Explanation:**
- `split('')` converts the string into an array of characters.
- The character at index `3` is replaced in the array.
- `join('')` converts the array back into a string.
- **Very efficient for multiple modifications.**

---

## 3. Using `substring()` and Concatenation
### **Code:**
```javascript
let changedWord = initialWord.substring(0, 3) + 'X' + initialWord.substring(4);
```
### **Explanation:**
- Similar to `slice()`, but `substring()` does not accept negative indexes.
- Works correctly for this use case.
- **Similar to the `slice()` approach.**

---

## 4. Using `replace()` with a Regular Expression
### **Code:**
```javascript
let changedWord = initialWord.replace(/^(.{3})./, '$1X');
```
### **Explanation:**
- `^(.{3}).` captures the first three characters (`.{3}`) and the fourth character (`.`).  
^ ensures the match starts from the beginning of the string.  
(.{3}) captures the first three characters (Abr in "Abracadabra").  
. matches the fourth character ('a' in "Abracadabra").  
- `$1X` keeps the first three characters (`$1`) and replaces the fourth character with `'X'`.  
$1 is replaced with the first capturing group (Abr).  
$1 is a backreference that retrieves the content of the first capturing group ((.{3})).  
Instead of discarding the first three characters, $1 reinserts them in the replacement string.
X replaces the matched fourth character ('a' → 'X').  

- **An advanced approach using regex but less readable.**
---

## 5. Using `concat()`
### **Code:**
```javascript
let firstPart = initialWord.slice(0, 3);
let lastPart = initialWord.slice(4);
let newLetter = 'X';
let changedWord = firstPart.concat(newLetter, lastPart);
console.log(changedWord);
```
### **Explanation:**
- Uses `slice()` to extract parts.
- Uses `concat()` to merge them.
- **Same result as the `slice()` approach but with `concat()` instead of `+` operator.**

---

## 6. Using `split()` with `splice()` and `join()`
### **Code:**
```javascript
let initialWord = 'Abracadabra';
let changedIntoArray = initialWord.split('');
changedIntoArray.splice(3, 1, 'X');    
initialWord = changedIntoArray.join('');        
console.log(initialWord);
```
### **Explanation:**
- `splice(3, 1, 'X')` replaces the 4th letter at index 3.


---

## 🔍 **Comparison Table**

| Approach                         | Works as Expected? | Modifies Original String? | Readability | Efficiency |
|----------------------------------|-------------------|-------------------------|-------------|------------|
| `slice()` with `+` concatenation | ✅ Yes | ❌ No | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| `split()`, modify array, `join()` | ✅ Yes | ❌ No | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| `substring()` with `+`           | ✅ Yes | ❌ No | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| `replace()` with RegEx           | ✅ Yes | ❌ No | ⭐ (Complex) | ⭐⭐⭐ |
| `slice()` with `concat()`        | ✅ Yes | ❌ No | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| `splice()` with `split()`, `join()`        | ✅ Yes | ✅ Yes (Array) | ⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## **Conclusion**
- If **you need simple replacement at an exact index**, use **`slice()` or `substring()` with concatenation**.
- If **you need multiple modifications**, use **`split()` → modify array → `join()`**.
- If **you prefer regex**, you can use **`replace()` with a regular expression**, but it’s **less readable**.


