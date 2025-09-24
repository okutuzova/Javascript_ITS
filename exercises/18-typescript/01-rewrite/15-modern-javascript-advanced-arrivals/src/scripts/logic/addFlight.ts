import { flights } from "../data/data";
import { getRandomStatus, statusArrivedCheck } from "./statusHelpers";

/**
 * Adds a new flight to the arrivals table.
 * A flight is added by shifting the first flight from the `flights` array.
 * The flight status is randomly assigned.
 * The flight's row is appended to the table.
 * @param {HTMLElement} tableBody - The tbody element of the target table.
 */
export function addFlight(tableBody: HTMLTableSectionElement): void {
  // Add a flight to the table, deleting from the original list
  const flight = flights.shift();
  if (!flight) return;

  flight.status = getRandomStatus();

  // Simulate that the flight has been added and its status changes
  const { date, time, from, flightNumber, airline, gate, status } = flight;
 

  // Create the row
  const row = document.createElement("tr");
  row.classList.add("main-row");
  row.innerHTML = `
    <td>${date}</td>
    <td>${time}</td>
    <td>${from}</td>
    <td>${flightNumber}</td>
    <td>${airline}</td>
    <td>${gate}</td>
    <td class="${status.toLowerCase()}">${status}</td>
`;
  

  // hidden row to form an accordion
  const hiddenRow = document.createElement("tr");
  hiddenRow.classList.add("hidden-row");
  hiddenRow.innerHTML = `
            <td colspan="7"><div>Additional information on the flight</div></td>
            `;
  // If the status is "ARRIVED", remove the row after 60 seconds
  statusArrivedCheck(row, status);
  tableBody.appendChild(row);
  tableBody.appendChild(hiddenRow);
}
