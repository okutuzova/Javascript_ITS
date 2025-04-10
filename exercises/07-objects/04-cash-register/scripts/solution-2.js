/**
 * @file: solution-2.js
 * @author: Olga Kutuzova
 * Exercise 04-cash-register
 *
 * This script defines a function `cashRegister`
 * that calculates the total cost of items in a shopping cart.
 */

/**
 * Represents a shopping cart with item prices as strings.
 * @type {Object.<string, string>}
 */
let cartForParty1 = { 
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
function cashRegisterForLoop(cart) { 
    let total = 0; 
    for (let item in cart) { 
        if (cart.hasOwnProperty(item)) {  // ✅ Ensuring only own properties are processed
            total += parseFloat(cart[item]); 
        }
    } 
    return total;
}

console.log(cashRegisterForLoop(cartForParty1));