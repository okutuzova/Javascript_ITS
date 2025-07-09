import { statuses } from '../data/statuses.js';
import { randInt } from '../utils/helpers.js';




/**
 * Returns a random status from the list of statuses.
 * @returns {string} A random status.
 */
export function getRandomStatus() {
    return statuses[randInt(0, statuses.length - 1)];
}

/**
 * Checks if a flight's status is "ARRIVED", and if so, 
 * removes the row from the table after 60 seconds.
 * @param {HTMLElement} row - The row element in the table representing the flight.
 * @param {string} status - The status of the flight.
 */
export function statusArrivedCheck(row, status) {
    if (status === "ARRIVED") {
        setTimeout(() => {
            row.remove();
        }, 60000); 
    }
}