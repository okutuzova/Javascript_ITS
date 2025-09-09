import { statuses } from '../data/data.js';
import { statusArrivedCheck } from './statusHelpers.js';
/**
 * Updates the statuses of all flights in the table according to the next status in the sequence.
 * If the status reaches "ARRIVED", the row will be removed after 60 seconds.
 */
export function updateStatuses() {
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