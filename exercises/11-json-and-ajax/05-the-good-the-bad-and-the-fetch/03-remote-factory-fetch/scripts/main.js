/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 03-remote-factory-fetch
 * 
 * This script fetches the factory details and the list of cars from the remote JSON sources, 
 * and displays them in the DOM.
 * The user can edit the car details and save the changes. Fetch API is used.
 */

/** @type {HTMLElement} */
const carList = document.getElementById("carList");
/** @type {HTMLElement} */
const factory = document.getElementById("factoryDetails");
/** @type {HTMLElement} */
const errorMessage = document.getElementById("errorMessage");
/**
 * URL to fetch factory data from JSONBlob
 * @type {string}
 */
const factoryURL = 'https://jsonblob.com/api/1371508605303578624';
/**
 * URL to fetch cars data from JSONBlob
 * @type {string}
 */
const carsURL = 'https://jsonblob.com/api/1371824607446884352';

/**
 * Displays an error message on the page
 * @param {string} message - The error message to display
 */
function handleError(message) {
    errorMessage.textContent = message;
}

function getData(URL) {
    fetch(URL) // returns Promise<Response>
        .then(response => {
            // Handle HTTP errors
            if (!response.ok) {
                    throw new Error(`Resource didn't load successfully. Error code: ${response.status}`);
            }
            // parse JSON → returns Promise<object>
            // Handle parsing errors
            return response.json().catch(parseError => {
                console.error('Error parsing JSON:', parseError);
                throw new Error('Error parsing JSON data.');
            });
        })
        .then(data => {
            // uncomment for debugging purpose to check the data fetched
            // console.log("Data received:", data);
            if (URL === factoryURL) {
                showFactory(data);
            } else if (URL === carsURL) {
                showCars(data);
            }
        })
        .catch(error => {
            // Handle network errors 
            if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
                handleError('Network error.');    
            } else {
                handleError(error.message);
            }
            console.error('Error fetching data:', error);
        });
}

/**
 * Renders the factory details inside a <factoryDetails> element
 * @param {Object} data - The factory data object
 */
function showFactory(data) {
    factory.innerHTML = `
    <details>
    <summary> ${data.factoryName}</summary>
    <li><span class="title">Location:</span> ${data.location}</li>
    <li><span class="title">Year of Foundation:</span> ${data.yearEstablished}</li>
    <li><span class="title">Production:</span> ${data.productionCapacity} cars per year</li>
    <li><span class="title">Cars Available for Sale:</span> ${data.inventory.availableForSale}</li>
    <li><span class="title">Used Cars Available:</span> ${data.usedCars}</li>
    <li><span class="title">Certification:</span> ${data.certified}</li>
    <li><span class="title">CEO:</span> ${data['General Managers'][0] + ', ' + data['General Managers'][1]}</li>
    </details>
  `;
}

/**
 * Creates the header section for a car list item with a toggle button
 * @param {Object} car - Car data object
 * @returns {{header: HTMLElement, toggleButton: HTMLButtonElement}} - The header element and its toggle button
 */
function createCarHeader(car) {
    const header = document.createElement("div");
    header.className = "carHeader";
    header.textContent = `${car.brand} ${car.model} `;
    const toggleButton = document.createElement("button");
    toggleButton.className = "toggleButton";
    toggleButton.textContent = "Show details";
    header.appendChild(toggleButton);
    return { header, toggleButton };
}

/**
 * Creates a panel containing editable input fields for a car
 * @param {Object} car - Car data object
 * @returns {HTMLElement} - The edit panel element
 */
function createEditPanel(car) {
    const panel = document.createElement("div");
    panel.className = "panel hidden";
    panel.innerHTML = `
        <label>Brand: <input type="text" value="${car.brand}"></label><br>
        <label>Model: <input type="text" value="${car.model}"></label><br>
        <label>Year: <input type="number" value="${car.year}"></label><br>
        <label>Color: <input type="text" value="${car.color}"></label><br>
        <label>Price: <input type="number" value="${car.price}"></label><br>
    `;
    return panel;
}

/**
 * Sets up the toggle behavior for showing/hiding a panel
 * @param {HTMLButtonElement} toggleButton - The button that toggles the panel
 * @param {HTMLElement} panel - The panel to show/hide
 */
function setToggleButton(toggleButton, panel) {
    toggleButton.addEventListener("click", () => {
        panel.classList.toggle("hidden"); 
        toggleButton.textContent = panel.classList.contains
        ("hidden") ? "Show details" : "Hide details"; // Update button text based on panel visibility
    });
}

/**
 * Creates a Save button that updates car data and re-renders the list
 * @param {Object} car - Car data object to update
 * @param {HTMLElement} panel - Panel containing input fields
 * @param {Array<Object>} carsData - Full list of cars to send back on save
 * @returns {HTMLButtonElement} - The Save button element
 */
function createSaveButton(car, panel, carsData) {
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
        const inputs = panel.querySelectorAll("input");
        car.brand = inputs[0].value;
        car.model = inputs[1].value;
        car.year = inputs[2].value;
        car.color = inputs[3].value;
        car.price = inputs[4].value;
        updateCarData(carsData);
    });
    return saveButton;
}

/**
 * Displays a list of cars and allows editing their basic info (brand, model, year, color, price).
 * @param {Array<Object>} carsData - Array of car objects
 */
function showCars(carsData) {
    carList.innerHTML = "";
    carsData.forEach((car) => {
        const li = document.createElement("li");
        // Create and append header with toggle button
        const { header, toggleButton } = createCarHeader(car);
        li.appendChild(header);
        // Create and append edit panel
        const panel = createEditPanel(car);
        li.appendChild(panel);
        // Setup toggle functionality
        setToggleButton(toggleButton, panel);
        // Create and append save button
        const saveButton = createSaveButton(car, panel, carsData);
        panel.appendChild(saveButton);
        carList.appendChild(li);
    });
}

/**
 * Sends updated car data to the remote server via PUT request
 * @param {Array<Object>} carsData - Updated car list to send
 */
function updateCarData(carsData) {
    fetch(carsURL, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(carsData),
    }) 
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network error. Status: ${response.status}`);
        } 
        return response.json();
    })
   .then(data => {
        showCars(data);
    }) 
    .catch(error => {
        console.error('Error sending data:', error);
        handleError(error.message); 
    });
}
getData(factoryURL);
getData(carsURL);