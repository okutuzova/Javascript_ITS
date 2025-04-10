# Exercise: 03-DOM-detective

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Go to www.gog.com  
● Use the devtools to view the DOM and write Javascript in the console  
● Use the DOM access methods to find the following:  
○ Every image on the page  
○ The main menu at the top of the page  
○ All the news items under "News"  
○ The footer  
○ All the social media links at the bottom of the page  
● Produce a readme.md file with  
○ snippets of your Javascript code   
○ explanations of which elements they select  

 
## Solution
### Every image on the page:
The method used:
```javascript
document.querySelectorAll("img");
```
Result snippet (Full result contains 233 elements):
```javascript
NodeList(233) [img, img, img, ...]
```
The document method `querySelectorAll()` "returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors...The elements are in document order — that is, parents before children, earlier siblings before later siblings." (source: MDN). 

### The main menu at the top of the page:
The method used:
```javascript
document.querySelector("nav");
```
Result snippet:
```javascript
<nav gog-menu="" class="menu menu-prices-in-usd menu--windows menu-curr-symbol-before menu-language-en-us"><div class="menu__container"><a href="/en" ...
```

"The Document method querySelector() returns the first Element within the document that matches the specified CSS selector, or group of CSS selectors. If no matches are found, null is returned." (source: MDN).

In the case of the studied page the 'nav' element was not a child of the 'header' element, but the child of a 'div ng-app="menuCompanion"'. If the header were a parent of a nav element, the method `querySelector("header nav")` would have returned the correct result.

### All the news items under "News":
After studying the DOM of the page, it was determined that each news item is contained in a custom HTML element with the tag name 'news-tile'. Therefore, the method used:

```javascript
document.querySelectorAll("news-tile");
```
Result snippet (Full result contains 11 elements):
```javascript
NodeList(11) [news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted, news-tile.ng-star-inserted]
```

### The footer:
The method used:
```javascript
document.querySelector("footer");
```

Result snippet:
```javascript
<footer class="footer-microservice main-footer"><div class="footer-microservice__top footer-microservice-content"><ul class="footer-microservice-mainlinks"><li class="footer-microservice-mainlinks__item" hook-test="footerRedeemCode"><a class="footer-microservice-mainlinks__link" href="/redeem">
    </div></div></footer>
```
The footer element is chosen. It contains information about the company, links to social networks, etc.

### All the social media links at the bottom of the page:

After studying the DOM of the page, it was determined that all social media links are contained in a div with a class name 'footer-microservice-socials'. Each link is contained in an anchor element with a class name 'footer-microservice-socials__item'. Therefore, the method used:
```javascript
document.querySelectorAll('footer a.footer-microservice-socials__item');
```
The result returned contains 6 elements, all the social media links are duplicated. This means that the adaptove design was used, and the links are displayed in different sizes depending on the screen size. In order to check the number of divs containing social media links, the following method was used:
```javascript
document.querySelectorAll('.footer-microservice-socials');
```
The result returned contains 2 elements, one for each screen size. The first element from the array with an index [0] is checked. A property of DOM `.offsetParent` is used to check if the element is displayed. The result `null` means that the element is not displayed. (source: https://www.w3schools.com/jsref/prop_element_offsetparent.asp)
Therefore, the method used:
```javascript
document.querySelectorAll('.footer-microservice-socials')[0].offsetParent !== null;
```
The result returned `true`. The second element from the array with an index [1] is checked. The result returned `false`. Therefore, the first element from the array with an index [0] contains the social media links visible for the desktop version. 

## Files:
- `Read.md` - exercise requirements and solution. 
