/**
 * Reference to the arrivals table body element.
 */
export const arrivalsTableBody = document.querySelector<HTMLTableSectionElement>('#arrivals-table tbody')!;
/**
 * Reference to the departures table body element.
 */
export const departuresTableBody = document.querySelector<HTMLTableSectionElement>('#departures-table tbody')!;
/**
 * Buttons to show Departures and Arrivals pages.
 */
export const btnArrivals = 
    document.querySelector<HTMLButtonElement>('#link-arrivals')!;
export const btnDepartures = 
    document.querySelector<HTMLButtonElement>('#link-departures')!;
/**
 * Sections for Arrivals, Departures, and a title.
 */
export const arrivals =
  document.querySelector<HTMLElement>('#arrivals')!;
export const departures =
  document.querySelector<HTMLElement>('#departures')!;
export const headerTitle =
  document.querySelector<HTMLHeadingElement>('#title')!;