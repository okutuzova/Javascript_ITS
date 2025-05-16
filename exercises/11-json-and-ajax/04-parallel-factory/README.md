# Exercise: 04-parallel-factory

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Create another version of the factory that uses the same jsonblobs that you 
created for the previous exercise
● Make sure that each car information is stored in a different jsonblob
● The page should display the list of cars with detailed information about 
each car directly visible without a collapsible panel
● Make sure that you request all jsonblobs in parallel (at the same time) not in 
sequence (one after another)
● Show a loader or a loading message while loading and show the list only 
when data has returned from all jsonblobs and all requests finished
● Make sure that your code handles all errors

## Solution
All car URLS have been saved as separate JSON blobs, please see the references below. 
The list of cars is displayed by sending the requests in the async mode. The `foreach` loop is used to iterate over the array of URLs and send a request for each URL. 
The progress bar is displayed to show the progress of the requests. A counter of the completed requests (loadedCars) is used to determine when all requests have finished.

Functions:
- `handleError()` - assigns the error message to the container in which the message is displayed.
- `updateProgress()` - the number of car data requests that have completed (either successfully or with error) is divided by the total number of car data URLs fetched. The fraction of completed requests (a value between 0 and 1) is multiplied by 100. The result is rounded to the nearest whole number.
ProgressBar, a visual representation of requests progress, with a width property receives a length change to match the percentage complete.
- `handleRequestComplete()` - the counter of reuqests completed is incremented by 1, the progress bar updates and if all requests have completed, the progress bar is hidden and the car list is displayed.
- `getDataXHR()` - creates an instance of the XMLHttpRequest object, sets the response type to JSON, sets the URL of the request to the URL passed as an argument, sets the callback function to be called when the request is completed, sets the callback function to be called when the request encounters an error, and sends the request. For details on errors handling, please see below
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
Handling an HTTP request errors:
``` javascript
if (request.readyState === XMLHttpRequest.DONE) {
    if (request.status === 200) {
        // Success
        const data = JSON.parse(request.responseText);
        callback(data);
    } else {
        // Erroe, 404, 500 etc..
        console.error(`Request failed with status: ${request.status} from ${URL}`);
        handleError(`Failed to fetch data from ${URL}. Error code: ${request.status}`);
    }
    // ...
}

```

Handling parsing errors:
``` javascript
try {
    const data = JSON.parse(request.responseText);
    callback(data);
} catch (parseError) {
    console.error('Error parsing JSON:', parseError);
    handleError('Error parsing JSON data.');
}
```

Network errors:
``` javascript
request.onerror = () => {
    console.error('Network error'); 
    handleError('Network error');
    loadedCars++;
    updateProgress();
    if (loadedCars === carsURLs.length) {
        loader.classList.add("hidden");
    }
};
```
For testing errors handling, in the dev tools, on the network tab, changing `No Throttling` to `Slow 3G` or `Fast 3G` or `Offline` allows to test how the different error messages are displayed. 


## Files:
- `index.html` - main page.
- `main.js` - external javascript file.
- `styles.css` - external css file.
- `json` - folder with initial json files.
- `README.md` - exercise requirements and solution. 
