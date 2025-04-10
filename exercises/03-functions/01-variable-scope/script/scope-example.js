/**
 * @file: scope-example.js
 * @author: Olga Kutuzova
 * Exercise 01-variable-scope
 * 
 * This script demonstrates the concept of variable scope in
 * JavaScript.
 */


// Global Scope: Accessible everywhere
var globalVar = "I'm a global var";  
let globalLet = "I'm a global let";  
const globalConst = "I'm a global const";  

function demoScope() {
    // Local Scope: These exist only inside this function
    var localVar = "I'm a local var";  
    let localLet = "I'm a local let";  
    const localConst = "I'm a local const";  

    console.log("Inside function:");
    console.log(globalVar, globalLet, globalConst); // ✅ Accessible
    console.log(localVar, localLet, localConst); // ✅ Accessible

    if (true) {
        // Block Scope: `let` and `const` are block-scoped
        var blockVar = "I'm a block var";  // ❌ Not block-scoped (still function-scoped)
        let blockLet = "I'm a block let";  // ✅ Block-scoped
        const blockConst = "I'm a block const";  // ✅ Block-scoped

        console.log("Inside block:");
        console.log(blockVar, blockLet, blockConst); // ✅ Accessible here
    }

    console.log(blockVar);  // ✅ Still accessible (var is function-scoped)
    // console.log(blockLet);  // ❌ Uncaught ReferenceError
    // console.log(blockConst);  // ❌ Uncaught ReferenceError
}

// Call function
demoScope();

// Accessing local variables outside the function (will cause errors)
console.log(globalVar, globalLet, globalConst); // ✅ Accessible
// console.log(localVar, localLet, localConst); // ❌ ReferenceError

// `var` inside function is function-scoped, so it's not accessible here
// console.log(blockVar); // ❌ ReferenceError
