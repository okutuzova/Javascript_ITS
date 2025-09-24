import { statuses } from '../data/data';
import { randInt } from './helpers';



/**
 * Returns a random status from the list of statuses.
 * @returns {typeof statuses[number]} A random status.
 */
export function getRandomStatus(): typeof statuses[number] {
    return statuses[randInt(0, statuses.length - 1)];
}

/**
 * Checks if a flight's status is "ARRIVED", and if so, 
 * removes the row from the table after 60 seconds.
 * @param {HTMLTableRowElement} row - The row element in the table representing the flight.
 * @param {typeof statuses[number]} status - The status of the flight.
 */
export function statusArrivedCheck(
    row: HTMLTableRowElement, 
    status: typeof statuses[number]
): void {
    if (status === "ARRIVED") {
        setTimeout(() => {
            row.remove();
        }, 60000); 
    }
}