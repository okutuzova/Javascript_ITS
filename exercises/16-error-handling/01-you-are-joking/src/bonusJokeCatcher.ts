/**
 * Interface representing a Joke object returned by the API.
 */
interface Joke {
    setup: string;
    punchline: string;
}
/**
 * Fetches jokes from the Random Joke API.
 *
 * @param {number} [count=1] - Number of jokes to fetch. Defaults to 1.
 * @param {string} [type] - Optional joke type (e.g., "programming", "general", "knock-knock").
 * @returns {Promise<string[]>} - A promise that resolves with an array of joke strings in the format "setup — punchline".
 *
 * @throws Will throw an error if the fetch fails after 3 retries.
 */
export async function fetchJokes(count = 1, type?: string): Promise<string[]> {
    let endpoint = "";

    if (type) {
        endpoint = `https://official-joke-api.appspot.com/jokes/${type}/random`;
    } else {
        endpoint = `https://official-joke-api.appspot.com/random_ten`;
    }

    let retries = 0;

    const tryFetch = async (): Promise<Joke[]> => {
        try {
            const res = await fetch(endpoint);
            if (!res.ok) throw new Error(`Network response: ${res.status} ${res.statusText}`);
            const data = await res.json();
            return Array.isArray(data) ? data.slice(0, count) : [data];
        } catch (err) {
            retries++;
            if (retries < 3) return tryFetch();
            else throw err;
        }
    };

    const jokes = await tryFetch();
    return jokes.map(j => `${j.setup} — ${j.punchline}`);
}
