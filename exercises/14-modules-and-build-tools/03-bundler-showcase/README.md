# Exercise: 03-bundler-showcase

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements 
Explore Parcel or another bundler of your choice
● Create a small project with HTML, CSS, and JavaScript files
● Use the bundler to build and serve your project
● Ensure the output is optimized and the project runs correctly on various 
browsers
● Include a README.md with a brief explanation of how the bundler handled 
your files and any notable features or issues

## Solution
For this exercise, I chose Vite bundler. This bundler is a fast and efficient tool for building modern web applications. It supports a wide range of features, including hot module replacement, code splitting, and tree shaking.

In order to use Vite, the node.js and node package manager must be installed. 
``` bash
npm create vite@latest bundler-showcase -- --template vanilla
```
This command starts a new vite project named "bundler-showcase", and skipping the config, the template vanilla is set from the start. Available options also include react, vue, etc. Javascript as the default language is selected. Vite creates a new directory with the project files and installs the necessary dependencies.

To run the project, the following command is used:
``` bash
cd bundler-showcase
  npm install
  npm run dev
```
A standard server on port 5173 is started. 

``` bash
npm run build
```
This command builds the project for production and creates a dist folder with the optimized files. Inside dist folder, the index.html file is the entry point for the application; the assets folder contains all the static assets, including the JavaScript, and CSS. All the files are minified and optimized for performance.
For the index.html file Vite automatically injected the required <script> tags for JavaScript and resolved any linked assets.
Imported in the JavaScript using import './style.css'. Vite processed the CSS, added vendor prefixes if needed (through PostCSS), and included it in the final bundle.ES Modules (import/export) were handled natively during development. Vite used Rollup under the hood to bundle the JavaScript efficiently. Rollup is a tool that gathers code, deletes unused code, and bundles it into a single file.
As the project is simple, the vite.config.js file is not created.





## Files:
bundler-showcase/
├── src/
    |--main.js
    |--style.css
├── index.html
├── package-lock.json
├── package.json
── README.md

