# Exercise: 12-cut-me-up

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
In the exercise folder create a .txt or .doc or .md file in which you explain the difference between 
the following string methods  
● slice()
● substring()
● substr()  
Explain the differences in terms of parameters and behavior  
Provide code examples to prove your point  


 
## Solution
### Differences Between slice(), substring(), and substr()

## 1. slice()
### Syntax:
```js
string.slice(startIndex, endIndex)
```
- Extracts part of a string.
- `startIndex`: The starting position (inclusive). An obligatory parameter. 
- `endIndex`: The ending position (exclusive). If omitted, it extracts to the end.
- Allows negative indices (counts from the end of the string).

### Example:
```js
let text = "JavaScript";
console.log(text.slice(0, 4));  // "Java"
console.log(text.slice(-6, -1));  // "Scrip"
```

## 2. substring()
### Syntax:
```js
string.substring(startIndex, endIndex)
```
- Similar to `slice()` but **does not support negative indices**.
- If `startIndex` is greater than `endIndex`, it swaps them.

### Example:
```js
let text = "JavaScript";
console.log(text.substring(0, 4));  // "Java"
console.log(text.substring(4, 0));  // "Java" (swaps the indices)
console.log(text.substring(-3, 4));  // "Java" (negative values are treated as 0)
```

## 3. substr() (Deprecated)
### Syntax:
```js
string.substr(startIndex, length)
```
- Extracts a substring based on a **starting index** and **length**.
- `startIndex`: The position to start extracting.
- `length`: The number of characters to extract.
- Supports negative indices for `startIndex`, but not for `length`.

### Example:
```js
let text = "JavaScript";
console.log(text.substr(0, 4));  // "Java"
console.log(text.substr(-6, 5));  // "Scrip"
```

## Key Differences
| Method      | Supports Negative Indices? | Parameters | Notes |
|------------|-------------------------|------------|------|
| `slice()`  | ✅ Yes                    | (start, end) | Preferred for general use |
| `substring()` | ❌ No                     | (start, end) | Swaps indices if `start > end` |
| `substr()` | ✅ Yes (only start)        | (start, length) | Deprecated, avoid using |

## Conclusion
- Use **`slice()`** for modern applications.
- Use **`substring()`** if swapping indices is needed.
- Avoid **`substr()`** as it is deprecated in modern JavaScript.





## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
