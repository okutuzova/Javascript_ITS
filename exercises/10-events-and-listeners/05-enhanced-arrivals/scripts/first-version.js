/**
 * @file first-version.js
 * @author Olga Kutuzova
 * @description 05-arrivals
 *
 * The script receives an array of flights, each with a flight number, 
 * departure time, gate, and airline. The script adds a new row to the
 * arrivals table every 10 seconds, with the flight's date, time,
 * departure location, flight number, airline, and gate.
 * The script also removes the row after 60 seconds if the flight has 
 * arrived. The statuses are not changed in time, just picked randomly.
 */



const flights = [
    { id: 1, flightNumber: "HM001", from: "Diagon Alley", time: "12:45", date: "2025-04-13", gate: "9¾", airline: "Ministry Express", timestamp: Date.now() },
    { id: 2, flightNumber: "HM002", from: "King's Cross Station", time: "13:00", date: "2025-04-13", gate: "K1", airline: "Hogwarts Express Air", timestamp: Date.now() },
    { id: 3, flightNumber: "HM003", from: "Ministry of Magic", time: "13:20", date: "2025-04-13", gate: "M1", airline: "Auror Air", timestamp: Date.now() },
    { id: 4, flightNumber: "HM004", from: "Hogwarts", time: "13:35", date: "2025-04-13", gate: "H1", airline: "Hogwarts Owls", timestamp: Date.now() },
    { id: 5, flightNumber: "HM005", from: "Godric's Hollow", time: "13:50", date: "2025-04-13", gate: "G1", airline: "Phoenix Flyers", timestamp: Date.now() },
    { id: 6, flightNumber: "HM006", from: "Beauxbatons", time: "14:00", date: "2025-04-13", gate: "B1", airline: "BroomAir", timestamp: Date.now() },
    { id: 7, flightNumber: "HM007", from: "Durmstrang", time: "14:10", date: "2025-04-13", gate: "D1", airline: "DarkMark Airlines", timestamp: Date.now() },
    { id: 8, flightNumber: "HM008", from: "Little Whinging", time: "14:20", date: "2025-04-13", gate: "L2", airline: "Privet Jet", timestamp: Date.now() },
    { id: 9, flightNumber: "HM009", from: "Forbidden Forest", time: "14:30", date: "2025-04-13", gate: "F1", airline: "Centaur Charters", timestamp: Date.now() },
    { id: 10, flightNumber: "HM010", from: "Gringotts Bank", time: "14:45", date: "2025-04-13", gate: "G2", airline: "Vault Airlines", timestamp: Date.now() },
    { id: 11, flightNumber: "HM011", from: "Shell Cottage", time: "15:00", date: "2025-04-13", gate: "S1", airline: "Seaside Skies", timestamp: Date.now() },
    { id: 12, flightNumber: "HM012", from: "The Burrow", time: "15:15", date: "2025-04-13", gate: "B2", airline: "Weasley Wings", timestamp: Date.now() },
    { id: 13, flightNumber: "HM013", from: "Azkaban", time: "15:30", date: "2025-04-13", gate: "Z1", airline: "Dementor Air", timestamp: Date.now() },
    { id: 14, flightNumber: "HM014", from: "Ottery St. Catchpole", time: "15:45", date: "2025-04-13", gate: "O1", airline: "Ottery Owls", timestamp: Date.now() },
    { id: 15, flightNumber: "HM015", from: "Knockturn Alley", time: "16:00", date: "2025-04-13", gate: "N1", airline: "Shadow Flights", timestamp: Date.now() },
    { id: 16, flightNumber: "HM016", from: "Spinner's End", time: "16:10", date: "2025-04-13", gate: "S2", airline: "Severus Skyways", timestamp: Date.now() },
    { id: 17, flightNumber: "HM017", from: "Malfoy Manor", time: "16:25", date: "2025-04-13", gate: "M2", airline: "Snake Air", timestamp: Date.now() },
    { id: 18, flightNumber: "HM018", from: "Hogs Head Inn", time: "16:35", date: "2025-04-13", gate: "H2", airline: "InnSky", timestamp: Date.now() },
    { id: 19, flightNumber: "HM019", from: "Leaky Cauldron", time: "16:50", date: "2025-04-13", gate: "L3", airline: "Leaky Flights", timestamp: Date.now() },
    { id: 20, flightNumber: "HM020", from: "Ravenclaw Tower", time: "17:00", date: "2025-04-13", gate: "R1", airline: "House Airlines", timestamp: Date.now() },
    { id: 21, flightNumber: "HM021", from: "Slytherin Dungeons", time: "17:10", date: "2025-04-13", gate: "S3", airline: "Serpent Skies", timestamp: Date.now() },
    { id: 22, flightNumber: "HM022", from: "The Shrieking Shack", time: "17:20", date: "2025-04-13", gate: "T1", airline: "Howler Jets", timestamp: Date.now() },
    { id: 23, flightNumber: "HM023", from: "Grimmauld Place", time: "17:35", date: "2025-04-13", gate: "G3", airline: "Order Air", timestamp: Date.now() },
    { id: 24, flightNumber: "HM024", from: "Nurmengard", time: "17:50", date: "2025-04-13", gate: "N2", airline: "Duel Air", timestamp: Date.now() },
    { id: 25, flightNumber: "HM025", from: "Ilvermorny", time: "18:00", date: "2025-04-13", gate: "I1", airline: "Thunderbird Flights", timestamp: Date.now() }
  ];
  

const statuses = ["EN_ROUTE", "ON_TIME", "DELAYED", "ARRIVED", "CANCELLED", "DEPARTED"];




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

function getRandomStatus() {
    return statuses[randInt(0, statuses.length - 1)];
}

function statusArrivedCheck(status) {
    return status === "ARRIVED";
}

// Add a flight 
function addFlight() {
    // Add a flight to the table
    const flight = flights.shift(); // Udalyayem odin reys iz massiv
    if (flight) {
        // Immitiruyem to, chto reys byl dobavlen i ego status meyatsya
        flight.status = getRandomStatus();
        const tableBody = document.querySelector('#arrivals-table tbody');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${flight.date}</td>
            <td>${flight.time}</td>
            <td>${flight.from}</td>
            <td>${flight.flightNumber}</td>
            <td>${flight.airline}</td>
            <td>${flight.gate}</td>
            <td class="${flight.status.toLowerCase()}">${flight.status}</td>
        `;
        // Esli status "ARRIVED", udalyaem reys posle 60 sekund
        if (statusArrivedCheck(flight.status)) {
            setTimeout(() => {
                row.remove();
            }, 10000);  // Udalyat' row posle 60 sekund
        }
        tableBody.appendChild(row);
    }
}

// Start s intervalom dobavleniya reysa kazhdyye 10 sekund
setInterval(addFlight, 1000);

