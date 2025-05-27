/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 05-clone-strings
 * 
 * This script contains a custom realization of the clone function.
 * The function takes an object as an argument and returns a new object 
 * that is a deep copy of the original object. However, the properties are cloned,
 * only if they are strings.
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
 * Deeply clones a given object, selecting to clone the properties,
 * only if they are strings.
 *
 * @param {*} obj - The input value to clone, any type.
 * @returns {*} A deep copy of the input value.
 */
function clone(obj) {
    let copy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] instanceof Date) {
               continue; 
            }
            if (typeof obj[key] === 'string') {
                copy[key] = String(obj[key]);
            } else if (typeof obj[key] ==='object')  {
                copy[key] = clone(obj[key]);
            }    
        }
    }
    return copy;
}

let clonedObject = clone(myObject);
console.log("=====A cloned object only with string properties=====")
console.log(clonedObject);

