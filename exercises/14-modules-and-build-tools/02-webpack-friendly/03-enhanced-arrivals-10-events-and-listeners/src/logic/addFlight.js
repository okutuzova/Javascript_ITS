import { getRandomStatus, statusArrivedCheck } from "./statusHelpers.js";
import { flights } from '../data/flights.js';

/**
 * Adds a new flight to the arrivals table.
 * A flight is added by shifting the first flight from the `flights` array.
 * The flight status is randomly assigned.
 * The flight's row is appended to the table.
 * @param {HTMLElement} tableBody - The tbody element of the target table.
 */
export function addFlight(tableBody) {
    // Add a flight to the table, deleting from the original list
    const flight = flights.shift(); 
    // If there are flights left, add the new one
    if (flight) {
        // Simulate that the flight has been added and its status changes
        flight.status = getRandomStatus();
        // const tableBody = document.querySelector('#arrivals-table tbody');
        const row = document.createElement('tr');
        row.classList.add('main-row');
        row.innerHTML = `
            <td>${flight.date}</td>
            <td>${flight.time}</td>
            <td>${flight.from}</td>
            <td>${flight.flightNumber}</td>
            <td>${flight.airline}</td>
            <td>${flight.gate}</td>
            <td class="${flight.status.toLowerCase()}">${flight.status}</td>
        `;
        // hidden row to form an accordion
        const hiddenRow = document.createElement('tr');
        hiddenRow.classList.add('hidden-row');
        hiddenRow.innerHTML = `
            <td colspan="7"><div>Additional information on the flight</div></td>
            `;
        // If the status is "ARRIVED", remove the row after 60 seconds
        statusArrivedCheck(row, flight.status);
        tableBody.appendChild(row);
        tableBody.appendChild(hiddenRow);
    }
}