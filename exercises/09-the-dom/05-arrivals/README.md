# Exercise: 05-arrivals

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Implement the arrivals page of an airport such as this one http://www.aeroportoditorino.it/en/tofly/flights/departs-arrivals
○ Create a complete proper webpage with a title, description and all other HTML tags 
○ Add Javascript and CSS files
○ Include as much detail as you can to each flight row
○ Add a Status to each flight. Status can be DEPARTING, DELAYED, ON_TIME, ARRIVED, etc
● Simulate a real arrivals list
○ The list should start empty and update every 10 seconds
○ Flights that have arrived should be removed after 60 seconds
○ Flights should change status in time. E.g. departing>on_time>delayed>arrived
○ Flights that are delayed should be displayed in red
○ New flights should be added to the bottom of the list
○ The list should be sorted by date and hour

 
## Solution

### Structure Overview

This project consists of three main files:

- `index.html`: The main HTML file that contains the structure of the webpage, including the table that will display flight information.
- `styles.css`: The external CSS file that defines the layout, design, and styles of the page, including color schemes and responsive design.
- `main.js`: The external JavaScript file that manages the logic for adding, updating, and removing flights, as well as changing their statuses.

### Detailed Explanation

1. **HTML (`index.html`)**:
   - The webpage consists of a **header**, a **table** for displaying flight information, and a **footer**.
   - The table includes headings for Date, Arrival Time, From, Flight Number, Airline, Gate, and Status.
   - JavaScript and CSS files are linked to this HTML file.

2. **CSS (`styles.css`)**:
   - The page uses a dark theme with purple and orange accents, which fits the concept of an airport in a fictional world (inspired by Hogsmeade).
   - The table has alternating row colors (light purple for odd rows and darker purple for even rows).
   - Flight statuses are color-coded for easy identification:
     - **Delayed** and  **Cancelled** flights have a red background.
     - **On-time** flights use the default background with normal text.
     - **Arrived** flights are processed dynamically via JavaScript (removal after 60 seconds).
   - Basic responsive design ensures that the webpage works well on different screen sizes.

3. **JavaScript (`main.js`)**:
   - A **list of flights** is predefined with all the necessary data: flight number, from location, time, date, gate, and airline.
   - Every **10 seconds**, the next flight is added to the table.
   - Flight statuses are randomly selected from a list of possible statuses (`ON_TIME`, `DELAYED`, `DEPARTING`, `ARRIVED`, etc.).
   - The **status update** cycle automatically progresses (e.g., from `DEPARTING` to `ON_TIME` to `DELAYED` to `ARRIVED`).
   - If a flight's status becomes `ARRIVED`, it is **removed after 60 seconds**.
   - Flights are **added to the bottom of the list** and the table **updates automatically** every 10 seconds. 


### Technologies Used
- **HTML5:** For the structure of the page.
- **CSS3:** For styling and layout design.
- **JavaScript (ES6+):** For dynamic functionality, including random flight status generation and updating the table in real-time.

### Implementation Note
❗ Note:
Although the task specifies that the list should be sorted by date and time, the provided flight data is already pre-sorted in chronological order within the array. Since the data is added sequentially at regular intervals, explicit sorting was not implemented, as it would have no visible effect on the current dataset.

## Files:
- `index.html` - main page.
- `main.js` - external javascript file.
- `styles.css` - external css file.
- `README.md` - exercise requirements and solution. 
