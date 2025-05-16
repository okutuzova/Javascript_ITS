# Exercise: 03-remote-factory

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Use jsonblob to store JSON data about cars and a car factory
● You can use as many blobs as you need. Decide the structure in a way to 
reduce the amount of data you modify with HTTP requests
● Write an application that displays a factory with a list of cars
● Clicking on each car should display a collapsible panel with more 
information about the car
● It should be possible to edit the car details
● Save the modified data to jsonblob with an HTTP request
● Whenever data is modified you should reload the new data from jsonblob 
once the writing has finished
● You should handle all error cases in your application. If an HTTP request 
fails, you should display a message to the user
● Your project should include a folder called ‘json’ with all the initial json files 
that you upload to jsonblob (the initial state of your DB)
● Your readme (markdown) should include links to all the jsonblobs that you 
are using as well as a list of their IDs

## Solution
The JSON data has been uploaded to jsonblob.com. The JSON endpoints return mock data about:
- A car manufacturing factory (name, location, production, etc.).
- A list of cars in the inventory with details (brand, model, year, etc.).

Functions:
`handleError()` handles errors during data fetching and displays it in the container on the page.
`getDataXHR()` uses XMLHttpRequest to fetch data.
`showFactory()` displays factory details in a <factoryDetails> element.
`createCarHeader()` creates a header for a car with a button to expand the form.
`createEditPanel()` creates an expandable form for editing car details.
`setToggleButton()` sets up the toggle button for expanding/collapsing the form, using class manipulation.
`createSaveButton()` creates a button for saving changes to the car details. The updating function is invoked to provide reloading the new data from jsonblob. 
`showCars()` displays each car as a list item with an expandable form for editing. A foreach loop is used to iterate over the cars array and create the list items.
`updateCarData()` updates the details of a car with the provided data using PUT method for the request and JSON.stringify() to convert the object into JSON.

### Errors Handling
For simulation of errors:
- In the dev tools, on the network tab, right click on the request, select block domain request. This allows to test a network error.
- Delete or change a JSON blob ID in the URL to simulate the 404 error.

## JSON Blobs:
### Links:
https://jsonblob.com/api/1371508605303578624
https://jsonblob.com/api/1371824607446884352
### IDs:
1371508605303578624
1371824607446884352
## Files:
- `index.html` - main page.
- `main.js` - external javascript file.
- `styles.css` - external css file.
- `json` - folder with initial json files.
- `README.md` - exercise requirements and solution. 
