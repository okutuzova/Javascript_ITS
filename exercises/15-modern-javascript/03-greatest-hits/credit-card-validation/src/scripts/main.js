/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 03-greatest-hits-credit-card-validation
 *
 * This script validates credit card numbers according to the following rules:
 * 1. The number must be 16 digits and contain only numeric characters.
 * 2. There must be at least two different digits (not all digits can be the same).
 * 3. The last digit must be even.
 * 4. The sum of all digits must be greater than 16.
 */
import {  validateCreditCard } from "./helper.js";
import "../styles/main.css";  

const printCardResult = ({ number, valid, error }) => {
    console.log(''.padEnd(40, '='));
    console.log(`= number : ${number} =`);
    console.log(`= valid  : ${valid} =`);
    if (!valid) console.log(`= error  : ${error}  =`);
    console.log(''.padEnd(40, '='));
};

const cards = [
    '9999-9999-8888-0000',
    '6666-6666-6666-1666',
    'a923-3211-9c01-1112',
    '4444-4444-4444-4444',
    '1111-1111-1111-1110',
    '6666-6666-6666-6661'
];

cards.forEach(card => printCardResult(validateCreditCard(card)));


const resultsTable = document.getElementById("results");
cards.forEach(card => {
    const result = validateCreditCard(card);
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${result.number}</td>
        <td class="${result.valid ? "valid" : "invalid"}">${result.valid}</td>
        <td>${result.error}</td>`;

    resultsTable.appendChild(row);
})
