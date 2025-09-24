/**
 * Toggles the visibility of the accordion row under a clicked flight row.
 * Only one accordion is visible at a time.
 * @param {MouseEvent} event - The click event on a table row.
 */
export function toggleAccordion(event: MouseEvent): void {
    const clickedRow = (event.target as HTMLElement)?.closest<HTMLTableRowElement>('.main-row');
    if (!clickedRow) return;

    const allHiddenRows = document.querySelectorAll<HTMLTableRowElement>('.hidden-row');
    const currentHidden = clickedRow.nextElementSibling as HTMLTableRowElement | null;

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