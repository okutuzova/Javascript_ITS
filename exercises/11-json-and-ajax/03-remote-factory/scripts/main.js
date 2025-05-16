/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 03-remote-factory
 * 
 * This script fetches the factory details and the list of cars from the remote JSON sources, 
 * and displays them in the DOM.
 * The user can edit the car details and save the changes. 
 */

/**
 * URL to fetch factory data from JSONBlob
 * @type {string}
 */
const factoryURL = 'https://jsonblob.com/api/1371508605303578624';
/**
 * URL to fetch factory data from JSONBlob
 * @type {string}
 */
const carsURL = 'https://jsonblob.com/api/1371824607446884352';
/** @type {HTMLElement} */
const carList = document.getElementById("carList");
/** @type {HTMLElement} */
const factory = document.getElementById("factoryDetails");
/** @type {HTMLElement} */
const errorMessage = document.getElementById("errorMessage");

/**
 * Displays an error message on the page
 * @param {string} message - The error message to display
 */
function handleError(message) {
    errorMessage.textContent = message;
}

/**
 * Fetches JSON data from a URL using XMLHttpRequest
 * @param {string} URL - The URL to fetch data from
 * @param {Function} callback - The function to call with the parsed data
 */
function getDataXHR(URL, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', URL);
    request.onload = function() {
        if (request.status === 200) {
            // handling parsing errors
            try {
                const data = JSON.parse(request.responseText);
                callback(data);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                handleError('Error parsing JSON data.');
            }
            // handling http errors
        } else {
            handleError(`Request didn't load successfully. Error code: ${request.status}`);
        }
    };
    // handling network errors
    request.onerror = () => {
        handleError('Network error'); 
    };
    // send the request
    request.send();
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
        toggleButton.textContent = panel.
        classList.contains("hidden") ? "Show details" : "Hide details"; // Update button text based on panel visibility
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
    const request = new XMLHttpRequest();
    request.open('PUT', carsURL);
    request.setRequestHeader('Content-Type', 'application/json'); 
    request.onload = function() {
        if (request.status === 200) {
           getDataXHR(carsURL, showCars); 
        } else {
            handleError(`Request didn't load successfully. Error code: ${request.status}`);
        }
    };
    request.onerror = () => {
        handleError('Network error');
    };
    try {
        request.send(JSON.stringify(carsData));
    } catch (error) {
        handleError(`Error sending data: ${error.message}`);
    }
    
}

getDataXHR(factoryURL, showFactory);
getDataXHR(carsURL, showCars);
  