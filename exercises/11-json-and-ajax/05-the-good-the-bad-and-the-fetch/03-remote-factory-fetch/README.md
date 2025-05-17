# Exercise: 03-remote-factory-fetch

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Rewrite all the code examples in this unit that use XMLHttpRequest using 
the modern fetch method
● Ensure the rewritten code replicates the exact same behavior

## Solution
The JSON data has been uploaded to jsonblob.com. The JSON endpoints return mock data about:
- A car manufacturing factory (name, location, production, etc.).
- A list of cars in the inventory with details (brand, model, year, etc.).

Functions:
`handleError()` handles errors during data fetching and displays it in the container on the page.
`getDataXHR()` uses fetch method to fetch data.
Detailed explanation:
    `fetch(URL)` - initiates a GET request to the URL provided. 
```javascript
    .then(response => {
      if (!response.ok) {
        throw new Error('Resource didn\'t load successfully');');
      }
    })
``` 
The response.ok property is checked to ensure the response status is in the range of 200-299. If it's not (e.g.. 400 or 500), an error is thrown.
```javascript
            return response.json().catch(parseError => {
                console.error('Error parsing JSON:', parseError);
                throw new Error('Error parsing JSON data.');
            });
```
Here the parsing is checked. If the body is not a valid JSON, an error is thrown. 
```javascript 
        
        .then(data => {
            if (URL === factoryURL) {
                showFactory(data);
            } else if (URL === carsURL) {
                showCars(data);
            }
        })

```
The URL check to determine which function to invoke. 

```javascript
            .catch(error => {
            if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
                handleError('Network error.');    
            } else {
                handleError(error.message);
            }
            console.error('Error fetching data:', error);
        });
}
```
The catch block is used to handle any errors that occur during the fetch operation. If the error is a TypeError with a message indicating a failed network request, a specific error message is displayed. Otherwise, the error message is displayed.

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
