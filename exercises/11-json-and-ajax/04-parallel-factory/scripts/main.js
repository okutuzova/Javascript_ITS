/**
 * URL to fetch factory data from JSONBlob
 * @type {string}
 */
const factoryURL = 'https://jsonblob.com/api/1371508605303578624';
/**
 * URL to fetch factory data from JSONBlob
 * @type {string}
 */
const toyotaURL = 'https://jsonblob.com/api/1372608303049400320';
/**
 * URL to fetch factory data from JSONBlob
 * @type {string}
 */
const fordURL = 'https://jsonblob.com/api/1372607394739314688';
/**
 * URL to fetch factory data from JSONBlob
 * @type {string}
 */
const nissanURL = 'https://jsonblob.com/api/1372608134555820032';
/**
 * URL to fetch factory data from JSONBlob
 * @type {string}
 */
const mazdaURL = 'https://jsonblob.com/api/1372607984781418496';
/**
 * URL to fetch factory data from JSONBlob
 * @type {string}
 */
const hondaURL = 'https://jsonblob.com/api/1372607781630304256';

const carsURLs = [toyotaURL, fordURL, nissanURL, mazdaURL, hondaURL];
/** @type {HTMLElement} */
const factory = document.getElementById("factoryDetails");
/** @type {HTMLElement} */
const cars = document.getElementById("carList");
/** @type {HTMLElement} */
const errorMessage = document.getElementById("errorMessage");
/** @type {HTMLElement} *//** @type {HTMLElement} */
const loader = document.getElementById("loader");
/** @type {HTMLElement} */
const progressBar = document.getElementById("progress-fill");
/** @type {HTMLElement} */
const progressText = document.getElementById("progress");
/**
 * Counter to track how many car requests have completed (success or error)
 * @type {number}
 */
let loadedCars = 0;

/**
 * Displays an error message on the page
 * @param {string} message - The error message to display
 */
function handleError(message) {
    errorMessage.textContent = message;
}

/**
 * Updates the progress bar on the page
 */
function updateProgress() {
    const progress = Math.round((loadedCars / carsURLs.length) * 100);
    progressBar.style.width = `${progress}%`;
    progressText.textContent = progress;
}

/**
 * Checks if all car requests have completed (success or error)
 */
function handleRequestComplete() {
    loadedCars++;
    updateProgress();
    if (loadedCars === carsURLs.length) {
        loader.classList.add("hidden");
    }
}


/**
 * Fetches JSON data from a URL using XMLHttpRequest
 * @param {string} URL - The URL to fetch data from
 * @param {Function} callback - The function to call with the parsed data
 */
function getDataXHR(URL, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', URL, true);
    request.onreadystatechange = function() {
        // Only check when request is complete
        if (request.readyState === XMLHttpRequest.DONE) {  
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
                console.error(`Request failed with status: ${request.status} from ${URL}`);
                handleError(`Failed to fetch data from ${URL}. Error code: ${request.status}`);
            }
            handleRequestComplete();
        }
    };
    // handling network errors
    request.onerror = () => {
        console.error('Network error'); 
        handleError('Network error');
        handleRequestComplete(); // still count as complete even if there's an error
    };
    request.send();
}

// Show loader before starting requests
loader.classList.remove("hidden");

/**
 * Displays factory details on the page
 * @param {Object} factoryData - The factory data to display
 */
function showFactory(factoryData) {
    factory.innerHTML = `
    <details>
    <summary> ${factoryData.factoryName}</summary>
    <li><span class="title">Location:</span> ${factoryData.location}</li>
    <li><span class="title">Year of Foundation:</span> ${factoryData.yearEstablished}</li>
    <li><span class="title">Production:</span> ${factoryData.productionCapacity} cars per year</li>
    <li><span class="title">Cars Available for Sale:</span> ${factoryData.inventory.availableForSale}</li>
    <li><span class="title">Used Cars Available:</span> ${factoryData.usedCars}</li>
    <li><span class="title">Certification:</span> ${factoryData.certified}</li>
    <li><span class="title">CEO:</span> ${factoryData['General Managers'].join(', ')}</li>
    </details>
  `;
}


/**
 * Displays car details on the page
 * @param {Object} carData - The car data to display
 */
function showCar(carData) {
    const ul = document.createElement("ul");
    const header = document.createElement("div");
    header.classList.add("carHeader");
    header.textContent = `${carData.brand} ${carData.model} ${carData.year} `;
    ul.innerHTML = `
    <li><span class="title">ID:</span> ${carData.id}</li>
    <li><span class="title">Brand:</span> ${carData.brand}</li>
    <li><span class="title">Model:</span> ${carData.model}</li>
    <li><span class="title">Year:</span> ${carData.year}</li>
    <li><span class="title">Color:</span> ${carData.color}</li>
    <li><span class="title">Fuel:</span> ${carData.fuel}</li>
    <li><span class="title">Transmission:</span> ${carData.transmission}</li>
    <li><span class="title">Price:</span> ${carData.price}</li>
    <li><span class="title">New:</span> ${carData.new ? "Yes" : "Used"}</li>
    <li><span class="title">Features:</span> ${carData.features.join(", ")}</li>
    <li><span class="title">Engine:</span> 
        Type: ${carData.engine.type}, 
        Cylinders: ${carData.engine.cylinders}, 
        Horsepower: ${carData.engine.horsepower}, 
        Fuel Economy: ${carData.engine.fuelEconomy.city} city / ${carData.engine.fuelEconomy.highway} highway
    </li>
    <li><span class="title">Description:</span> ${carData.description || "No description available"}</li>
    <br>  `;
    ul.insertBefore(header, ul.firstChild);
    cars.appendChild(ul);
}
// Fetch factory info
getDataXHR(factoryURL, showFactory);
// Fetch all cars info in parallel
carsURLs.forEach((URL) => {
    getDataXHR(URL, showCar);
});
