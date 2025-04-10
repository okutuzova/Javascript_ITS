/**
 * @file: solution-3.js
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
let cartWeeklyGroceryShopping = { 
    apples: "5.55" , 
    turkey: "4.99" , 
    chicken: "5.01" , 
    tomatoes: "0.69" , 
    pasta: "1.34" , 
    chocolate: "12.36" 
};




/**
 * Calculates the total price of all items in a shopping cart.
 * @param {Object.<string, string>} cart - An object where keys are item names and values are prices as strings.
 * @returns {number} - The total cost of all items in the cart.
 */
function cashRegisterForEach(cart) { 
    let total = 0; 
    Object.values(cart).forEach(price => { 
        total += parseFloat(price); 
    }); 
    return total.toFixed(2);
}

console.log(cashRegisterForEach(cartWeeklyGroceryShopping));


