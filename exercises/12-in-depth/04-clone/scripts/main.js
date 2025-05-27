/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 04-clone
 * 
 * This script contains a custom realization of the clone function.
 * The function takes an object as an argument and returns a new object that is a deep copy of the original object.
 * The function uses recursion to copy all properties of the object, including nested objects and arrays.
 *
 */
/**
 * @type {Object}
 * An example object with various properties.
 */
let myObject = {
    name: 'Green Mueller',
    email: 'Rigoberto_Muller47@yahoo.com',
    address: '575 Aiden Forks',
    bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
    active: false,
    salary: 37993,
    birth: new Date('1965-04-18T13:38:00'),
    bankInformation: {
        amount: '802.04',
        date: new Date('2012-02-02'),
        business: 'Bernhard, Kuhn and Stehr',
        name: 'Investment Account 8624',
        type: 'payment',
        account: '34889694'
    }
};

/**
 * Deeply clones a given object, including nested objects, arrays, and Date instances.
 *
 * @param {*} obj - The input value to clone, any type.
 * @returns {*} A deep copy of the input value.
 */
function clone(obj) {
    if (typeof obj !== 'object') {
        return obj; // Return primitive values as it is
    }
    // Check if it's a date
    if (obj instanceof Date) {
        // get a timestamp of an original date and create a new date from that timestamp
        return new Date(obj.getTime()); // Date copy
    }
    // Check if it's an array or an object and create a new instance of the same type
    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        // Check if the property belongs directly to the object and not to its prototype
        if (obj.hasOwnProperty(key)) {
            copy[key] = clone(obj[key]); // Recursion cloning
        }
    }
    return copy;
}

let clonedObject = clone(myObject);
console.log("=====The output of an object cloned from myObject=====")
console.log(clonedObject);
clonedObject.name = "Blau Schwarz";
console.log("=====The original object after name change of the cloned one=====")
console.log(myObject);
console.log("=====The cloned object after name change of the original one=====")
console.log(clonedObject);

