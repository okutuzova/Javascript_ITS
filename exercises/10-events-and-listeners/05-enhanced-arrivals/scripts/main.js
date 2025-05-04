/**
 * @file main.js
 * @author Olga Kutuzova
 * @description 05-arrivals
 * This file contains the main JavaScript code for the 05-arrivals project.
 * It includes functions for adding flights to the table, updating flight statuses,
 * and generating random statuses for flights.
 *
 * @version 1.0.0
 * @date 2025-04-13
 *
 */

/**
 * A list of all flights.
 * @type {Array<{ id: number, flightNumber: string, from: string, 
 * time: string, date: string, gate: string, airline: string}>}
 */
const flights = [
    { id: 1, flightNumber: "HM001", from: "Diagon Alley", time: "12:45", date: "2025-04-13", gate: "9¾", airline: "Ministry Express"},
    { id: 2, flightNumber: "HM002", from: "King's Cross Station", time: "13:00", date: "2025-04-13", gate: "K1", airline: "Hogwarts Express Air"},
    { id: 3, flightNumber: "HM003", from: "Ministry of Magic", time: "13:20", date: "2025-04-13", gate: "M1", airline: "Auror Air"},
    { id: 4, flightNumber: "HM004", from: "Hogwarts", time: "13:35", date: "2025-04-13", gate: "H1", airline: "Hogwarts Owls"},
    { id: 5, flightNumber: "HM005", from: "Godric's Hollow", time: "13:50", date: "2025-04-13", gate: "G1", airline: "Phoenix Flyers"},
    { id: 6, flightNumber: "HM006", from: "Beauxbatons", time: "14:00", date: "2025-04-13", gate: "B1", airline: "BroomAir"},
    { id: 7, flightNumber: "HM007", from: "Durmstrang", time: "14:10", date: "2025-04-13", gate: "D1", airline: "DarkMark Airlines"},
    { id: 8, flightNumber: "HM008", from: "Little Whinging", time: "14:20", date: "2025-04-13", gate: "L2", airline: "Privet Jet"},
    { id: 9, flightNumber: "HM009", from: "Forbidden Forest", time: "14:30", date: "2025-04-13", gate: "F1", airline: "Centaur Charters"},
    { id: 10, flightNumber: "HM010", from: "Gringotts Bank", time: "14:45", date: "2025-04-13", gate: "G2", airline: "Vault Airlines"},
    { id: 11, flightNumber: "HM011", from: "Shell Cottage", time: "15:00", date: "2025-04-13", gate: "S1", airline: "Seaside Skies"},
    { id: 12, flightNumber: "HM012", from: "The Burrow", time: "15:15", date: "2025-04-13", gate: "B2", airline: "Weasley Wings"},
    { id: 13, flightNumber: "HM013", from: "Azkaban", time: "15:30", date: "2025-04-13", gate: "Z1", airline: "Dementor Air"},
    { id: 14, flightNumber: "HM014", from: "Ottery St. Catchpole", time: "15:45", date: "2025-04-13", gate: "O1", airline: "Ottery Owls"},
    { id: 15, flightNumber: "HM015", from: "Knockturn Alley", time: "16:00", date: "2025-04-13", gate: "N1", airline: "Shadow Flights"},
    { id: 16, flightNumber: "HM016", from: "Spinner's End", time: "16:10", date: "2025-04-13", gate: "S2", airline: "Severus Skyways"},
    { id: 17, flightNumber: "HM017", from: "Malfoy Manor", time: "16:25", date: "2025-04-13", gate: "M2", airline: "Snake Air"},
    { id: 18, flightNumber: "HM018", from: "Hogs Head Inn", time: "16:35", date: "2025-04-13", gate: "H2", airline: "InnSky"},
    { id: 19, flightNumber: "HM019", from: "Leaky Cauldron", time: "16:50", date: "2025-04-13", gate: "L3", airline: "Leaky Flights"},
    { id: 20, flightNumber: "HM020", from: "Ravenclaw Tower", time: "17:00", date: "2025-04-13", gate: "R1", airline: "House Airlines"},
    { id: 21, flightNumber: "HM021", from: "Slytherin Dungeons", time: "17:10", date: "2025-04-13", gate: "S3", airline: "Serpent Skies"},
    { id: 22, flightNumber: "HM022", from: "The Shrieking Shack", time: "17:20", date: "2025-04-13", gate: "T1", airline: "Howler Jets"},
    { id: 23, flightNumber: "HM023", from: "Grimmauld Place", time: "17:35", date: "2025-04-13", gate: "G3", airline: "Order Air"},
    { id: 24, flightNumber: "HM024", from: "Nurmengard", time: "17:50", date: "2025-04-13", gate: "N2", airline: "Duel Air"},
    { id: 25, flightNumber: "HM025", from: "Ilvermorny", time: "18:00", date: "2025-04-13", gate: "I1", airline: "Thunderbird Flights"}
  ];
  
/**
 * A list of possible flight statuses.
 * @type {Array<string>}
 */
const statuses = ["ON_TIME", "DELAYED", "DEPARTING", "DEPARTED", "EN_ROUTE", "ARRIVED", "CANCELLED"];

// helper functions

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random integer between min and max (inclusive).
 */
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a random status from the list of statuses.
 * @returns {string} A random status.
 */
function getRandomStatus() {
    return statuses[randInt(0, statuses.length - 1)];
}

/**
 * Checks if a flight's status is "ARRIVED", and if so, 
 * removes the row from the table after 60 seconds.
 * @param {HTMLElement} row - The row element in the table representing the flight.
 * @param {string} status - The status of the flight.
 */
function statusArrivedCheck(row, status) {
    if (status === "ARRIVED") {
        setTimeout(() => {
            row.remove();
        }, 60000); 
    }
}

const arrivalsTableBody = document.querySelector('#arrivals-table tbody');
const departuresTableBody = document.querySelector('#departures-table tbody');

/**
 * Adds a new flight to the arrivals table.
 * A flight is added by shifting the first flight from the `flights` array.
 * The flight status is randomly assigned.
 * The flight's row is appended to the table.
 */
function addFlight(tableBody) {
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
            `
        // If the status is "ARRIVED", remove the row after 60 seconds
        statusArrivedCheck(row, flight.status);
        tableBody.appendChild(row);
        tableBody.appendChild(hiddenRow);
    }
}

// Start adding flights with different intervals
setInterval(() => addFlight(arrivalsTableBody), 10000);
setInterval(() => addFlight(departuresTableBody), 5000);


/**
 * Updates the statuses of all flights in the table according to the next status in the sequence.
 * If the status reaches "ARRIVED", the row will be removed after 60 seconds.
 */
function updateStatuses() {
    const rows = document.querySelectorAll("#arrivals-table tbody tr");

    rows.forEach(row => {
        const statusCell = row.querySelector("td:last-child");
        let currentStatus = statusCell.textContent.trim();

        if (currentStatus === "CANCELLED" || currentStatus === "ARRIVED") return;

        const currentIndex = statuses.indexOf(currentStatus);
        if (currentIndex !== -1 && currentIndex < statuses.length - 1) {
            const nextStatus = statuses[currentIndex + 1];
            statusCell.textContent = nextStatus;
            statusCell.className = nextStatus.toLowerCase();

            // If the status becomes "ARRIVED", remove the row after 60 seconds
            statusArrivedCheck(row, nextStatus);
        }
    });
}
// Update statuses every 10 seconds
setInterval(updateStatuses, 10000); 

// Event listener for accordion
// const tbody = document.querySelector('#arrivals-table tbody');

// tbody.addEventListener('click', (event) => {
//     // Find the clicked row
//     const clickedRow = event.target.closest('.main-row');
//     if (clickedRow) {
//         // Toggle the active class on the clicked row
//         const nextRow = clickedRow.nextElementSibling;
//         if (nextRow && nextRow.classList.contains('hidden-row')) {
//             nextRow.classList.toggle('active');
//         }
        
//     }
// })

function toggleAccordion(event) {
    const clickedRow = event.target.closest('.main-row');
    if (!clickedRow) return;

    const allHiddenRows = document.querySelectorAll('.hidden-row');
    const currentHidden = clickedRow.nextElementSibling;

    allHiddenRows.forEach(row => {
        if (row !== currentHidden) {
          row.classList.remove('active'); // Closing all the hidden rows
        }
      });

     // Toggling hidden rows
     if (currentHidden && currentHidden.classList.contains('hidden-row')) {
        currentHidden.classList.toggle('active');
      }

}

document.addEventListener('click', toggleAccordion);
  
    
  
    

  


// document.addEventListener('click', function (event) {
//     const clickedRow = event.target.closest('.main-row');

//     if (!clickedRow) return;
  
//     const allHiddenRows = document.querySelectorAll('.hidden-row');
//     const currentHidden = clickedRow.nextElementSibling;
  
//     allHiddenRows.forEach(row => {
//       if (row !== currentHidden) {
//         row.classList.remove('active'); // Closing all the hidden rows
//       }
//     });
  
//     // Toggling hidden rows
//     if (currentHidden && currentHidden.classList.contains('hidden-row')) {
//       currentHidden.classList.toggle('active');
//     }
//   });
  
const btnArrivals = document.querySelector('#link-arrivals');
const btnDepartures = document.querySelector('#link-departures');
const arrivals = document.querySelector('#arrivals');
const departures = document.querySelector('#departures');
const headerTitle = document.querySelector('#title');

// Set initial title
headerTitle.textContent = 'Arrivals - Hogsmeade International Airport';
document.title = 'Arrivals | Hogsmeade International Airport (HGM)';

btnArrivals.addEventListener('click', () => {
    headerTitle.textContent = 'Arrivals - Hogsmeade International Airport';
    document.title = 'Arrivals | Hogsmeade International Airport (HGM)';
    arrivals.classList.add('active');
    departures.classList.remove('active');
});
btnDepartures.addEventListener('click', () => {
    headerTitle.textContent = 'Departures - Hogsmeade International Airport';
    document.title = 'Departures | Hogsmeade International Airport (HGM)';
    arrivals.classList.remove('active');
    departures.classList.add('active'); 
})