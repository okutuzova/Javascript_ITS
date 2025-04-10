/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 04-cash-register
 *
 * This script defines a function `cashRegister`
 * that calculates the total cost of items in a shopping cart. The reduce() method is used.
 */

/**
 * Represents a shopping cart with item prices as strings.
 * @type {Object.<string, string>}
 */
let cartForParty = { 
    banana: "1.25" , 
    handkerchief: ".99" , 
    Tshirt: "25.01" , 
    apple: "0.60" , 
    nalgene: "10.34" , 
    proteinShake: "22.36" 
};

/**
 * Calculates the total price of all items in a shopping cart.
 * @param {Object.<string, string>} cart - An object where keys are item names and values are prices as strings.
 * @returns {number} - The total cost of all items in the cart.
 */
function cashRegister(cart) { 
    return Object.values(cart).reduce((total, price) => total + parseFloat(price), 0);
}

console.log(cashRegister(cartForParty));



