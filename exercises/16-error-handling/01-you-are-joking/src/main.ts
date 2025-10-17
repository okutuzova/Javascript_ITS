/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 01-you-are-joking
 * 
 * This file is the entry point for the application.
 * It fetches a random joke from the API and displays it in the jokeContainer.
 * It also adds three buttons to fetch a random joke, 5 jokes or a programming joke.
 */

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import fetchRandomJoke  from './jokeCatcher';
import { fetchJokes } from './bonusJokeCatcher';

const jokeContainer = document.getElementById("jokeContainer") as HTMLDivElement;
const jokeButton = document.getElementById("jokeButton") as HTMLButtonElement;
const multiButton = document.getElementById("fetch-multi-btn") as HTMLButtonElement;
const typeButton = document.getElementById("fetch-type-btn") as HTMLButtonElement;

jokeButton.textContent = "Get a Joke";

jokeButton.addEventListener("click", async () => {
    jokeContainer.textContent = "Loading...";
    jokeContainer.classList.remove("fade-in");
    try {
        const joke = await fetchRandomJoke();
        jokeContainer.textContent = joke;
        
        setTimeout(() => {
            jokeContainer.classList.add("fade-in");
        }, 50);

    } catch (error) {
        jokeContainer.textContent = "No jokes today";
        setTimeout(() => {
            jokeContainer.classList.add("fade-in");
        }, 50);
    }
})

multiButton.addEventListener("click", async () => {
    jokeContainer.textContent = "Loading 5 jokes...";
    jokeContainer.classList.remove("fade-in");

    try {
        const jokes = await fetchJokes(5);
        jokeContainer.innerHTML = jokes.map(j => `<p>${j}</p>`).join("");
        setTimeout(() => jokeContainer.classList.add("fade-in"), 50);
    } catch {
        jokeContainer.textContent = "No jokes today 😢";
        setTimeout(() => jokeContainer.classList.add("fade-in"), 50);
    }
});


typeButton.addEventListener("click", async () => {
    jokeContainer.textContent = "Loading programming joke...";
    jokeContainer.classList.remove("fade-in");

    try {
        const [joke] = await fetchJokes(1, "programming");
        jokeContainer.textContent = joke;
        setTimeout(() => jokeContainer.classList.add("fade-in"), 50);
    } catch {
        jokeContainer.textContent = "No jokes today 😢";
        setTimeout(() => jokeContainer.classList.add("fade-in"), 50);
    }
});