/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 02-DOM-factory
 * 
 * This script creates a car factory and a list of cars in JSON strings.
 * The strings are parsed into objects and displayed on the webpage.
 */

// JSON as a string
/**
 * A car factory simulating JSON string
 * @type {string}
 */
const factoryJSON = `{
    "factoryName": "Car Production & Co",
    "location": "Turin, TO",
    "yearEstablished": 1945,
    "productionCapacity": 50000,
    "inventory": {
        "totalCars": 1200,
        "availableForSale": 800
        
    },
    "usedCars": null,
    "certified": true,
    "General Managers": [
        "John Doe",
        "Jane Smith"
    ]
  }`;

/**
 * A list of car objects as JSON strings
 * @type {string}
 */
const carsJSON = `[
    {   "id": 1,
        "brand": "Toyota",
        "model": "Corolla",
        "year": "2020",
        "color": "red",
        "mileage": null,
        "fuel": "gasoline",
        "transmission": "automatic",
        "price": 40000,
        "new": true,
        "features": ["GPS", "Bluetooth", "Backup Camera", "Cruise Control", "Keyless Entry"],
        "engine": {
            "type": "inline-4",
            "cylinders": 4,
            "horsepower": 169,
            "fuelEconomy": {
                "city": "30 mpg",
                "highway": "38 mpg"
            }
        },
        "description": "A comfortable and reliable Toyota Corolla with a great fuel economy."
    },
    {
        "id": 2,
        "brand": "Honda",
        "model": "Civic",
        "year": "2019",
        "color": "blue",
        "mileage": null,
        "fuel": "gasoline",
        "transmission": "automatic",
        "price": 35000,
        "new": true,
        "features": ["GPS", "Bluetooth", "Backup Camera", "Cruise Control", "Keyless Entry"],
        "engine": {
            "type": "inline-4",
            "cylinders": 4,
            "horsepower": 169,
            "fuelEconomy": {
                "city": "30 mpg",
                "highway": "38 mpg"
            }
        }
    },
    {
        "id": 3,
        "brand": "Ford",
        "model": "Mustang",
        "year": "2021",
        "color": "red",
        "mileage": null,
        "fuel": "gasoline",
        "transmission": "automatic",
        "price": 60000,
        "new": true,
        "features": ["GPS", "Bluetooth", "Backup Camera", "Cruise Control", "Keyless Entry"],
        "engine": {
            "type": "inline-4",
            "cylinders": 4,
            "horsepower": 169,
            "fuelEconomy": {
                "city": "30 mpg",
                "highway": "38 mpg"
            }
        }
    },
    {
        "id": 4,
        "brand": "Nissan",
        "model": "Altima",
        "year": "2022",
        "color": "gray",
        "mileage": null,
        "fuel": "gasoline",
        "transmission": "automatic",
        "price": 38000,
        "new": true,
        "features": ["Bluetooth", "Backup Camera", "Cruise Control"],
        "engine": {
            "type": "inline-4",
            "cylinders": 4,
            "horsepower": 182,
            "fuelEconomy": {
                "city": "28 mpg",
                "highway": "39 mpg"
            }
        },
        "description": "A sleek and modern Altima with excellent highway efficiency."
    },
    {
        "id": 5,
        "brand": "Mazda",
        "model": "Mazda3",
        "year": "2021",
        "color": "white",
        "mileage": null,
        "fuel": "gasoline",
        "transmission": "automatic",
        "price": 37000,
        "new": true,
        "features": ["GPS", "Bluetooth", "Backup Camera", "Cruise Control"],
        "engine": {
            "type": "inline-4",
            "cylinders": 4,
            "horsepower": 186,
            "fuelEconomy": {
                "city": "27 mpg",
                "highway": "36 mpg"
            }
        },
        "description": "A sporty and responsive Mazda3, fun to drive and efficient."
    }
]
`;

/**
 * Parses the JSON strings into JavaScript objects
 */
let parsedFactory;
let parsedCars;
try {
    parsedFactory = JSON.parse(factoryJSON);
    parsedCars = JSON.parse(carsJSON);
} catch (error) {
    console.error("Error parsing JSON:", error); 
}



/** @type {HTMLElement} */
const cars = document.getElementById("carList");
/** @type {HTMLElement} */
const factory = document.getElementById("factoryDetails");

/**
 * Displays the factory details on the webpage
 */
factory.innerHTML = `
      <li><span class="title">Name:</span> ${parsedFactory.factoryName}</li>
      <li><span class="title">Location:</span> ${parsedFactory.location}</li>
      <li><span class="title">Year of Foundation:</span> ${parsedFactory.yearEstablished}</li>
      <li><span class="title">Production:</span> ${parsedFactory.productionCapacity} cars per year</li>
      <li><span class="title">Cars Available for Sale:</span> ${parsedFactory.inventory.availableForSale}</li>
      <li><span class="title">Used Cars Available:</span> ${parsedFactory.usedCars}</li>
      <li><span class="title">Certification:</span> ${parsedFactory.certified? "Certified in 2025" : "Awaiting Certification"}</li>
      <li><span class="title">CEO:</span> ${parsedFactory['General Managers'][0] + ', ' + parsedFactory['General Managers'][1]}</li>
    `;

/**
 * Displays the car details on the webpage
 */
parsedCars.forEach((car) => {
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
    <li><span class="title">New:</span> ${car.new ? "Yes" : "Used"}</li>
    <li><span class="title">Features:</span> ${car.features.join(", ")}</li>
    <li><span class="title">Engine:</span> 
        Type: ${car.engine.type}, 
        Cylinders: ${car.engine.cylinders}, 
        Horsepower: ${car.engine.horsepower}, 
        Fuel Economy: ${car.engine.fuelEconomy.city} city / ${car.engine.fuelEconomy.highway} highway
    </li>
    <li><span class="title">Description:</span> ${car.description || "No description available"}</li>
    <br>  `;
    cars.appendChild(ul);
});
