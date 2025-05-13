
const factoryURL = 'https://jsonblob.com/api/1371508605303578624';
const carsURL = 'https://jsonblob.com/api/1371824607446884352';
const carList = document.getElementById("carList");
const factory = document.getElementById("factoryDetails");
const errorMessage = document.getElementById("errorMessage");



function getDataXHR(URL, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', URL);
    request.onload = function() {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(data);
        } else {
            console.error('Error:', request.statusText);
        }
    };
    request.onerror = () => {
        
        console.error('Error:', request.statusText); 
    }
    // send the request
    request.send();
}



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

function showCars(carsData) {
    carList.innerHTML = "";
    carsData.forEach((car, index) => {
        const li = document.createElement("li");
        const header = document.createElement("div");
        header.textContent = `${car.brand} ${car.model} ${car.year} `;
        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Show details";
        header.appendChild(toggleButton);
        li.appendChild(header); // add the header to the list item

       

        // hidden panel
        const panel = document.createElement("div");
        panel.style.display = "none";
        panel.innerHTML = `
        <label>Brand: <input type="text" value="${car.brand}"></label><br>
        <label>Model: <input type="text" value="${car.model}"></label><br>
        <label>Year: <input type="number" value="${car.year}"></label><br>
        `;
        li.appendChild(panel);

        // toggle button
        
        toggleButton.addEventListener("click", () => {
            if (panel.style.display === "none") {
                panel.style.display = "block";
                toggleButton.textContent = "Hide details";
            } else {
                panel.style.display = "none";
                toggleButton.textContent = "Show details";
            }
        });


        // Save button
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", () => {
            const inputs = panel.querySelectorAll("input");
            car.brand = inputs[0].value;
            car.model = inputs[1].value;
            car.year = inputs[2].value;
            // update the car list
            updateCarData(carsData);
            
        });
        panel.appendChild(saveButton);
        carList.appendChild(li);
        // ul.innerHTML = 
        
        // <li><span class="title">Brand:</span> ${car.brand}</li>
        // <li><span class="title">Model:</span> ${car.model}</li>
        // <li><span class="title">Year:</span> ${car.year}</li>
        // <li><span class="title">Color:</span> ${car.color}</li>
        // <li><span class="title">Fuel:</span> ${car.fuel}</li>
        // <li><span class="title">Transmission:</span> ${car.transmission}</li>
        // <li><span class="title">Price:</span> ${car.price}</li>
        // <li><span class="title">New:</span> ${car.new}</li>
        // <li><span class="title">Features:</span> ${car.features}</li>
        // <li><span class="title">Engine:</span> 
        //     Type: ${car.engine.type}, 
        //     Cylinders: ${car.engine.cylinders}, 
        //     Horsepower: ${car.engine.horsepower}, 
        //     Fuel Economy: ${car.engine.fuelEconomy.city} city / ${car.engine.fuelEconomy.highway} highway
        // </li>
        // <li><span class="title">Description:</span> ${car.description}</li>
        // <br>  `;
        // cars.appendChild(ul);
    
    });
}

function updateCarData(carsData) {
    const request = new XMLHttpRequest();
    request.open('PUT', carsURL);
    request.setRequestHeader('Content-Type', 'application/json'); 
    request.onload = function() {
        if (request.status === 200) {

        
           getDataXHR(carsURL, showCars); 
        } else {
            console.error('Error:', request.statusText);
        }
    };
    
    request.send(JSON.stringify(carsData));
};



getDataXHR(factoryURL, showFactory);
getDataXHR(carsURL, showCars);
  