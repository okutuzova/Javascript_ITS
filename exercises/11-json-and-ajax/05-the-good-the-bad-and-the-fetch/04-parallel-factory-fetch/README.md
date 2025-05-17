# Exercise: 04-parallel-factory-fetch

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
●Rewrite all the code examples in this unit that use XMLHttpRequest using 
the modern fetch method
● Ensure the rewritten code replicates the exact same behavior

## Solution
All car URLS have been saved as separate JSON blobs, please see the references below. 
The list of cars is displayed by sending the requests in the async mode. The `foreach` loop is used to iterate over the array of URLs and send a request for each URL. 
The progress bar is displayed to show the progress of the requests. A counter of the completed requests (loadedCars) is used to determine when all requests have finished.

Functions:
- `handleError()` - assigns the error message to the container in which the message is displayed.
- `updateProgress()` - the number of car data requests that have completed (either successfully or with error) is divided by the total number of car data URLs fetched. The fraction of completed requests (a value between 0 and 1) is multiplied by 100. The result is rounded to the nearest whole number.
ProgressBar, a visual representation of requests progress, with a width property receives a length change to match the percentage complete.
- `handleRequestComplete()` - the counter of reuqests completed is incremented by 1, the progress bar updates and if all requests have completed, the progress bar is hidden and the car list is displayed.
- `fetchJSON()` - sends a GET request to the specified URL using the fetch API. The check if the response has been successful is introduced, if not an error is thrown. Else, the response is converted to JSON format using the json() method and an object is returned.
- `getData()` - invokes teh fetchJSON() function to receive data. WHen the data is received, it is passed to the callback function to display the  details. The errors for fetching data are handled. In the finally block, the check for the completion of all requests is performed. 

- `showFactory()` - displays factory details in a <factoryDetails> element.
- `showCar()` - creates a DOM ul element, a header element, and list elements for each property of the car object passed as an argument. The header is inserted as a first child of the ul element. 

## JSON Blobs:
### Links:
Factory:
https://jsonblob.com/api/1371508605303578624
Ford:
https://jsonblob.com/api/1372607394739314688
Honda:
https://jsonblob.com/api/1372607781630304256
Mazda:
https://jsonblob.com/api/1372607984781418496
Nissan:
https://jsonblob.com/api/1372608134555820032
Toyota:
https://jsonblob.com/api/1372608303049400320

### IDs:
1371508605303578624 - Factory
1372607394739314688 - Ford
1372607781630304256 - Honda
1372607984781418496 - Mazda
1372608134555820032 - Nissan
1372608303049400320 - Toyota

### Errors Handling:
Handling HTTP request errors:
``` javascript
function fetchJSON(URL) {
    return fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error. Status: ${response.status}`);
            }

```

Handling parsing errors:
``` javascript
return response.json().catch(error => {
                throw new Error(`Error parsing JSON: ${error.message}`);
            });
```

Network errors:
``` javascript
function getData(URL, callback) {
    fetchJSON(URL)
       .then(data => callback(data))
       .catch(error => {
            console.error('Error fetching data:', error);
            handleError('Failed to fetch data.');
        })
```
For testing errors handling, in the dev tools, on the network tab, changing `No Throttling` to `Slow 3G` or `Fast 3G` or `Offline` allows to test how the different error messages are displayed. 


## Files:
- `index.html` - main page.
- `main.js` - external javascript file.
- `styles.css` - external css file.
- `json` - folder with initial json files.
- `README.md` - exercise requirements and solution. 
