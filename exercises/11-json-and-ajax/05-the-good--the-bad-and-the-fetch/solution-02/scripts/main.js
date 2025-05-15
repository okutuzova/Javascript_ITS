const cars = document.getElementById("carList");
const factory = document.getElementById("factoryDetails");

const factoryURL = 'https://jsonblob.com/api/1371508605303578624';
const carsURL = 'https://jsonblob.com/api/1371509988622786560';


function getData(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        if (URL === factoryURL) {
            showFactory(data);
        } else if (URL === carsURL) {
            showCars(data);
        }
      
    });
    
  };

function showFactory(data) {
  factory.innerHTML = `
  <li><span class="title">Name:</span> ${data.factoryName}</li>
  <li><span class="title">Location:</span> ${data.location}</li>
  <li><span class="title">Year of Foundation:</span> ${data.yearEstablished}</li>
  <li><span class="title">Production:</span> ${data.productionCapacity} cars per year</li>
  <li><span class="title">Cars Available for Sale:</span> ${data.inventory.availableForSale}</li>
  <li><span class="title">Used Cars Available:</span> ${data.usedCars}</li>
  <li><span class="title">Certification:</span> ${data.certified}</li>
  <li><span class="title">CEO:</span> ${data['General Managers'][0] + ', ' + data['General Managers'][1]}</li>
`;
}

function showCars(data) {
  
    data.forEach((car) => {
        const ul = document.createElement("ul");
        ul.innerHTML = `
        <li><span class="title">ID:</span> ${car.id}</li>
        <li><span class="title">Brand:</span> ${car.brand}</li>
        <li><span class="title">Model:</span> ${car.model}</li>
        <li><span class="title">Year:</span> ${car.year}</li>
        <li><span class="title">Color:</span> ${car.color}</li>
        <li><span class="title">Fuel:</span> ${car.fuel}</li>
        <li><span class="title">Transmission:</span> ${car.transmission}</li>
        <li><span class="title">Price:</span> ${car.price}</li>
        <li><span class="title">New:</span> ${car.new}</li>
        <li><span class="title">Features:</span> ${car.features}</li>
        <li><span class="title">Engine:</span> 
            Type: ${car.engine.type}, 
            Cylinders: ${car.engine.cylinders}, 
            Horsepower: ${car.engine.horsepower}, 
            Fuel Economy: ${car.engine.fuelEconomy.city} city / ${car.engine.fuelEconomy.highway} highway
        </li>
        <li><span class="title">Description:</span> ${car.description}</li>
        <br>  `;
        cars.appendChild(ul);
    
    });
}
getData(factoryURL);
getData(carsURL);