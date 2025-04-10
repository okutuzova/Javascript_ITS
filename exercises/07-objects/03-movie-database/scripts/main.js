/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 03-movie-database
 *
 * This script defines an array of movie objects, each containing:
 * - `title`: The movie's title (string)
 * - `duration`: The movie's duration in minutes (number)
 * - `stars`: An array of main actors (array of strings)
 * 
 * A function `printOutMovieInfo()` is implemented to display the details 
 * of a given movie in a structured and readable format.
 */


let oneMovieToTest = {
    title: "The Dark Knight",
    duration: 152,
    stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
};

/**
 * Array of movie objects containing title, duration, and stars.
 * @type {Array<Object>}
 */
let moviesDatabase = [
    {
        title: "Inception",
        duration: 148,
        stars: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
        title: "The Matrix",
        duration: 136,
        stars: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
        title: "Interstellar",
        duration: 169,
        stars: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    },
    {
        title: "The Godfather",
        duration: 175,
        stars: ["Marlon Brando", "Al Pacino", "James Caan"]
    }
];

/**
 * Logs details of a single movie in a formatted way.
 * @param {Object} movie - The movie object.
 * @param {string} movie.title - The movie title.
 * @param {number} movie.duration - The duration in minutes.
 * @param {string[]} movie.stars - Array of main actors.
 * @returns {void}
 */
function printOutMovieInfo(movie) {
    console.log(`${movie.title} lasts for ${movie.duration} minutes.`);
    console.log(`Stars: ${movie.stars.join(", ")}`);
}

// Calling the function to display movie details (one movie only)
printOutMovieInfo(oneMovieToTest);

// calling the function for each movie in a database
for (let movie of moviesDatabase) {
    printOutMovieInfo(movie);
}