/**
 * Toggles the visibility of the accordion row under a clicked flight row.
 * Only one accordion is visible at a time.
 * @param {MouseEvent} event - The click event on a table row.
 */
export function toggleAccordion(event) {
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