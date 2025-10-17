/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 02-validate-me
 * 
 * This file is the entry point for the application.
 * 
 * It imports the validatePassword function from the validatePassword.ts file.
 * It also imports the PasswordError class from the validatePassword.ts file.
 *
 * It then adds an event listener to the checkBtn button.
 * When the button is clicked, it gets the value of the passwordInput input field.
 * It then calls the validatePassword function with the password as an argument.
 * If the password is valid, it displays a message saying that the password is valid.
 * If the password is invalid, it displays a message saying that the password is invalid.
 */

import './style.css'
import { validatePassword, PasswordError } from "./validatePassword";

const input = document.getElementById("passwordInput") as HTMLInputElement;
const button = document.getElementById("checkBtn") as HTMLButtonElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

button.addEventListener("click", () => {
  const pwd = input.value;
  resultDiv.textContent = "";
  resultDiv.classList.remove("valid", "invalid");

  try {
    if (validatePassword(pwd)) {
      resultDiv.textContent = "Password is valid";
      resultDiv.classList.add("valid");
    }
  } catch (error: unknown) {
    if (error instanceof PasswordError) {
      resultDiv.textContent = error.message;
      resultDiv.classList.add("invalid");
    }
  }
});


