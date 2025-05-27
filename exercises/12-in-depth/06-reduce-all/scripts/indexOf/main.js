function myIndexOf(arr, element ) {
    return arr.reduce((acc, current, index) => {
        current === element ? acc = index : acc;
        return acc;
    }, -1);   
}


const testAnimals = ["ant", "bison", "camel", "duck", "bison"];
console.log('==== Testing Array.indexOf() method ====')
console.log(testAnimals.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(testAnimals.indexOf("bison", 2));
// Expected output: 4

console.log(testAnimals.indexOf("giraffe"));
// Expected output: -1

console.log('==== Testing myIndexOf() method ====')
console.log(myIndexOf(testAnimals, "bison"));
// Expected output: 1

// Start from index 2
console.log(myIndexOf(testAnimals, "bison", 2));
// Expected output: 4

console.log(myIndexOf(testAnimals, "giraffe"));

