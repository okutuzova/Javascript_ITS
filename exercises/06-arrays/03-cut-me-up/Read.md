# Exercise: 03-cut-me-up

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26

## Exercise Requirements
● In the exercise folder create a .txt or .doc or .md file in which you explain 
the difference between the following array methods:
○ slice(), splice()  
○ Explain the differences in terms of parameters and behavior  
○ Provide code examples to prove your point 


## Solution

## 1. slice()
### **Definition:**
The `slice()` method **returns a shallow copy** of a portion of an array **without modifying** the original array.

### **Parameters:**
```javascript
array.slice(start, end);
```
- `start` (optional): The index at which to begin extraction (inclusive).
- `end` (optional): The index at which to stop extraction (exclusive). If omitted, it slices till the end of the array.

### **Behavior:**
- Does **not** modify the original array.
- Returns a **new array** containing the selected elements.

### **Example:**
```javascript
const fruits = ["apple", "banana", "cherry", "date", "fig"];
const slicedFruits = fruits.slice(1, 4);

console.log(slicedFruits); // ["banana", "cherry", "date"]
console.log(fruits); // Original array remains unchanged
```

---

## 2. splice()
### **Definition:**
The `splice()` method **modifies** an array by adding, removing, or replacing elements **in place**.

### **Parameters:**
```javascript
array.splice(start, deleteCount, item1, item2, ...);
```
- `start`: The index at which to start modifying the array.
- `deleteCount` (optional): The number of elements to remove. If `0`, no elements are removed.
- `item1, item2, ...` (optional): Elements to add at the `start` position.

### **Behavior:**
- **Modifies** the original array.
- Returns an array containing the removed elements (if any).

### **Example:**
#### **Removing Elements:**
```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 2);

console.log(numbers); // [1, 2, 5] (Elements at index 2 and 3 are removed)
```

#### **Adding Elements:**
```javascript
const colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");

console.log(colors); // ["red", "yellow", "purple", "green", "blue"]
```

#### **Replacing Elements:**
```javascript
const letters = ["A", "B", "C", "D"];
letters.splice(1, 2, "X", "Y");

console.log(letters); // ["A", "X", "Y", "D"]
```

---

## 3. Key Differences
| Feature         | slice()                           | splice()                          |
|---------------|---------------------------------|---------------------------------|
| **Modifies original array?** | ❌ No (returns new array)  | ✅ Yes (changes original array) |
| **Returns**   | New array with extracted elements | Array of removed elements       |
| **Usage**     | Extracting part of an array      | Adding, removing, replacing elements |

### **Example to Show the Difference:**
```javascript
const arr = ["one", "two", "three", "four", "five"];

// Using slice()
const sliced = arr.slice(1, 3);
console.log(sliced); // ["two", "three"]
console.log(arr); // ["one", "two", "three", "four", "five"] (unchanged)

// Using splice()
const spliced = arr.splice(1, 3);
console.log(spliced); // ["two", "three", "four"]
console.log(arr); // ["one", "five"] (modified)
```

---

### **Conclusion:**
- Use `slice()` when you need to **copy part of an array** without modifying the original.
- Use `splice()` when you need to **modify the array** by adding, removing, or replacing elements.

