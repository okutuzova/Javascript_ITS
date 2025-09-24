import { statuses } from '../data/data';
import { statusArrivedCheck } from './statusHelpers';
/**
 * Updates the statuses of all flights in the table according to the next status in the sequence.
 * If the status reaches "ARRIVED", the row will be removed after 60 seconds.
 */
export function updateStatuses(): void {
    const rows: NodeListOf<HTMLTableRowElement> = document.querySelectorAll("#arrivals-table tbody tr");

    rows.forEach((row: HTMLTableRowElement) => {
        const statusCell: HTMLTableCellElement | null = row.querySelector("td:last-child");
        if (!statusCell || !statusCell.textContent) return;

        const currentStatus = statusCell.textContent.trim() as typeof statuses[number];

        if (currentStatus === "CANCELLED" || currentStatus === "ARRIVED") return;

        const currentIndex: number = statuses.indexOf(currentStatus);
        if (currentIndex !== -1 && currentIndex < statuses.length - 1) {
            const nextStatus = statuses[currentIndex + 1] as typeof statuses[number];
            statusCell.textContent = nextStatus;
            statusCell.className = nextStatus.toLowerCase();

            // If the status becomes "ARRIVED", remove the row after 60 seconds
            statusArrivedCheck(row, nextStatus);
        }
    });
}