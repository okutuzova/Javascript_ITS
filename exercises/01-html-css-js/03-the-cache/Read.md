# Exercise: 03-the-cache

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● What does ?v=1.0 do?   
● How does the browser cache work?


## Solution
● It is a query string to manage the browser cache. In this case, it indicates the version of the CSS file. Upon modification of the styles.css file, the version number change will force a browser to download the new version and not the cached one.

● Browser cache is a mechanism for improving performance and reducing the loading time of web pages. When a user visits a web page, a browser downloads such resources as images, CSS, JS script. For the folloing visit the browser checks if the resources are already present in the cache. Cached resources have a limited lifespan that can be controlled through HTTP headers. A line like ?v=1.0 will trick the browser into loading the new version, thus avoiding conflicts with previous versions. 