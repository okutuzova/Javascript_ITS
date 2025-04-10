// function fixStart(string) {
//     let string1 = string.slice(1);
//     return string.charAt(0) + string1.replaceAll(string.charAt(0), '*');
// }

// console.log(fixStart("bubble"));

function fixStart(initialString) {
    let firstChar = initialString.charAt(0); // initialString[0]
    // Create a regular expression to replace all matches starting from index 1 
    let regex = new RegExp(firstChar.toLowerCase(), 'g'); // 'g' - global flag to replace all matches
    return firstChar + initialString.slice(1).replace(regex, '*');
}

// Function calls
console.log(fixStart('Babble'));  
console.log(fixStart('daddy'));
console.log(fixStart('pretty'));
