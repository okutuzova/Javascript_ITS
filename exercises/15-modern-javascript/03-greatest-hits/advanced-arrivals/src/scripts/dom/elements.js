/**
 * Reference to the arrivals table body element.
 * @type {HTMLElement}
 */
export const arrivalsTableBody = document.querySelector('#arrivals-table tbody');
/**
 * Reference to the departures table body element.
 * @type {HTMLElement}
 */
export const departuresTableBody = document.querySelector('#departures-table tbody');
/**
 * Buttons to show Departures and Arrivals pages.
 * @type {HTMLElement}
 */
export const [btnArrivals, btnDepartures] = [
    document.querySelector('#link-arrivals'),
    document.querySelector('#link-departures')
];
/**
 * Sections for Arrivals, Departures, and a title.
 * @type {HTMLElement}
 */
export const [arrivals, departures, headerTitle] = [
    document.querySelector('#arrivals'),
    document.querySelector('#departures'),
    document.querySelector('#title')
];