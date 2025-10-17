/**
 * Fetches a single random joke from the Random Joke API.
 *
 * @returns {Promise<string>} - A promise that resolves with a single joke string 
 * in the format "setup punchline".
 *
 * @throws Will throw an error if the fetch fails after 3 retries.
 */
export default function fetchRandomJoke(): Promise<string>   {
    const endpoint = "https://official-joke-api.appspot.com/random_joke";
    let retries = 0;
    return new Promise((resolve, reject) => {
        const tryFetch = () => {
            fetch(endpoint)
                .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                resolve(data.setup + " " + data.punchline);
            })
           .catch((error) => {
                retries++;
                if (retries < 3) {
                    tryFetch();
                } else {
                    reject(error);
                }
            });
        }
        tryFetch();
    });
}
