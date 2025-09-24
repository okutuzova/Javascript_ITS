import { arrivalsTableBody, departuresTableBody, btnArrivals, btnDepartures, arrivals, departures, headerTitle } from './dom/elements';
import { addFlight } from './logic/addFlight';
import { updateStatuses } from './logic/updateStatuses';
import { toggleAccordion } from './logic/toggleAccordion';
import '../styles/main.css';


// Set initial title
headerTitle.textContent = 'Arrivals - Hogsmeade International Airport';
document.title = 'Arrivals | Hogsmeade International Airport (HGM)';



// Event listeners
document.addEventListener('click', toggleAccordion);
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
});

// Start adding flights with different intervals
setInterval(() => addFlight(arrivalsTableBody), 10000);
setInterval(() => addFlight(departuresTableBody), 5000);
// Update statuses every 10 seconds
setInterval(updateStatuses, 10000); 