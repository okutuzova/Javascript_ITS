# Exercise: 04-custom-detective

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Choose a news website that you like  
● Use the devtools to view the DOM and write Javascript in the console  
● Use the DOM access methods to find:  
○ At least 10 different elements or collections of elements in the page  
○ Choose interesting elements that require complex selectors to reach  
● Produce a readme.md file with  
○ A link to the website that you chose  
○ snippets of your Javascript code   
○ explanations of what which elements they select  

 
## Solution
### Website: https://www.bbc.com/ 

### Snippets of my Javascript code:
1) Finding all news articles (cards) on the website
``` javascript
const allNewsArticles = document.querySelectorAll('div[data-testid="card-text-wrapper"]');
```
Here a complex selector was used to find all the news articles. The selector is composed of several parts:

- `div[data-testid="card-text-wrapper"]`: This part selects all `<div>` elements that have a `data-testid` attribute with the value "card-text-wrapper". The result of the search is a NodeList containing all the matching elements.


2) Finding all the news headers in different news sections 
``` javascript
const allNewsHeaders = document.querySelectorAll('div[data-testid="chester-card"]');
```
A complex selector was used to find all the news headers. The selector is composed of several parts:

- `div[data-testid="chester-card"]`: This part selects all `<div>` elements that have a `data-testid` attribute with the value "chester-card". The result of the search is a NodeList containing all the matching elements.


3) Finding all the social media links at the bottom of the page
``` javascript
const allSocialMediaLinks = document.querySelectorAll('.sc-97754ce7-5');
```
A NodeList of 6 nodes was returned. The selector is composed of:

- `'.sc-97754ce7-5'`: This part selects all elements with the class "sc-97754ce7-5". 

4) Finding all navigation items in a hidden navigation panel
``` javascript
const allNavigationItems = document.querySelectorAll('div[data-testid="navigationPanel-navItem-level0-/"');
```
The result of the search is a NodeList containing 14 matching elements which corresponds to the number of navigation items in the hidden navigation panel. The selector is composed of several parts:

- `div[data-testid="navigationPanel-navItem-level0-/"`: This part selects all `<div>` elements that have a `data-testid` attribute with the value "navigationPanel-navItem-level0-/". 

5) Finding all the images in the page
``` javascript
const allImages = document.querySelectorAll('img');
``` 
A Nodelist of 52 nodes was returned. 

6) Finding buttons in the page
``` javascript
const allButtons = document.querySelectorAll('button');
```
This selector selects all `<button>` elements (43) on the page. 
To be more specific, another selector for buttons was used: 

``` javascript
const allCardButtons = document.querySelectorAll('div[data-testid="card-button"]');
```
This query returns only three specific buttons. 

In order to select the last card button:

``` javascript
const lastCardButton = document.querySelector('div[data-testid="card-button"]:last-child');
```
This selector selects the last `<div>` element that has a `data-testid` attribute with the value "card-button". The `:last-child` pseudo-class is used to select the last child element of the parent element.

OR
``` javascript

const lastCardButton = document.querySelectorAll('div[data-testid="card-button"]')[2];

```

7) Finding all the odd spans of the page that include update information
``` javascript
const allOddUpdatedSpans = document.querySelectorAll('span[data-testid="card-metadata-lastupdated"]:nth-of-type(odd)');
```
Here a complex selector was used to find all the odd spans of the page that include update information. The selector is composed of several parts:

- `span[data-testid="card-metadata-lastupdated"]`: This part selects all `<span>` elements that have a `data-testid` attribute with the value "card-metadata-lastupdated".
- `:nth-of-type(odd)`: This part selects only the odd `<span>` elements among the ones selected by the previous part. The `:nth-of-type(odd)` pseudo-class is used to select elements based on their position among their siblings.

The Nodelist returned 70 nodes. 

8) Finding all links on the page
``` javascript
const allLinks = document.querySelectorAll('a');
```
This selector selects all `<a>` elements (162) on the page.

9) Finding all h1-h6 headings on the page
``` javascript
const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
```
This selector selects all `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>` elements on the page. The result of the search is a NodeList containing all the matching elements (123).

10) Finding all the first links inside chester-cards
``` javascript
const firstLinksInCards = document.querySelectorAll('div[data-testid="chester-card"] a:first-of-type');

```
This complex selector selects all `<a>` elements that are the first `<a>` of their type** inside each `<div>` with the `data-testid="chester-card"` attribute.  
The `:first-of-type` pseudo-class selects the first element of its type (in this case `<a>`) among its siblings**, not necessarily the first child of the parent.  
So if a `<div>` has multiple children and the first `<a>` is, for example, the third child, it will still be selected.

11) Finding all elements inside the <header> that have a class starting with "sc-".
``` javascript
const styledHeaderElements = document.querySelectorAll('header [class^="sc-"]');
```

The <header> element is typically used in the HTML structure to define the introductory content or navigational links of a page. This might include the title, logo, or main navigation menus.

[class^="sc-"]:

This is an attribute selector that targets all elements where the class attribute starts with the string "sc-".

^= is the operator used to match elements whose attribute value starts with the specified string.

This is useful in cases where the website or the application uses a dynamic CSS class naming system, like CSS-in-JS libraries or frameworks (e.g., styled-components in React). These libraries often generate class names with unique prefixes (like sc-), so using [class^="sc-"] allows you to target those specific styles without knowing the exact class name.
## Files:
- `README.md` - exercise requirements and solution. 
