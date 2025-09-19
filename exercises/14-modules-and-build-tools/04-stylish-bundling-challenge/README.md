# Exercise: 04-stylish-bundling-challenge

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26

## Exercise Requirements 
Create a small project with HTML,  SCSS, JavaScript files, and images  
● Use Webpack to:  
1. Build SCSS files into a single CSS bundle  
2. Handle various image types with automatic decision between inlining   
and emitting based on file size (e.g., 50KB)  
● Include a README.md file with a brief explanation of your Webpack
configuration and how it handles SCSS and images  

## Solutuion

For the project, I chose a website that was developed for the final exam of "HTML, CSS, and SEO" course. The website "Armonia Musicale" is a single page website using scss and Bootstrap that is connected through CDN. Bootstrap as a separate package for the project is not installed.  

### Scripts
'package.json' file contains the following scripts:
``` json
"start": "webpack serve --mode development" 
"build": "webpack --mode production"
```
"start" script is used to run the project in development mode served by Webpack Dev Server.    
"build" script is used to build the project in production mode.

### Webpack Configuration
- Path and HTMLWebpackPlugin are imported:
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
```
Path module is used to resolve the paths of the files. HTMLWebpackPlugin automatically generates an HTML file.

- main export of Webpack configuration - an object that describes how to build the project.
``` javascript
module.exports = {
}
```

- mode shows in which mode the project is built. In 'package.json' in scripts a production mode is set.
``` javascript
mode: 'development',
```

- entry point of the project. The entry point is the file that Webpack starts building the project from.
``` javascript
entry: './src/index.js',
```

- output describes where the bundled files will be saved.
``` javascript
output: {
    path: path.resolve(__dirname, 'dist'), // path to the output folder
    filename: 'bundle.js', // name of the output file
    clean: true, // clean the output folder before each build
  },
```

- local server configuration.
``` javascript
devServer: {
    static: './dist', // path to the output folder,
    open: true, // open the browser after the server starts
    hot: true, // enable hot module replacement
    },
```
- loaders configuration.
``` javascript
module: {
    rules: [
    ]
}
```
Here the loaders are configured, the order is important, as they are applied from bottom to top. To avoid double processing of the same file, the order is to check.

- Loaders used:
1. html-loader - to handle HTML files, to extract resources like images and add to the build.
2. sass-loader->css-loader->style-loader - compile SCSS to CSS files, transform CSS to JS-modules, and inject CSS into the DOM.
3. Asset Modules - built-in module for handling assets.
```javascript
 {
          test: /\.(png|jpe?g|gif|svg|webp|avif|ico)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 50 * 1024, // 50kb - small files will be inlined as base64
            },
          },
          generator: {
            filename: 'images/[name][ext]', // big files 
          },
        },
```
Asset Modules allow to handle various image types with automatic decision between inlining and emitting based on file size.
If the file size is less than 50KB, it will be inlined. Otherwise, it will be emitted in order not to overload the bundle. This is needed to improve the performance. When small files are inlined, the requests to the server are reduced. The big files are separated and the code is loaded when needed quicker. For handling favicon, the 'ico' is also included.

- plugins configuration.
``` javascript
plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // path to the template file
      favicon: './src/img/favicon.ico'
    }),
  ],
```
HtmlWebpackPlugin automatically generates a final HTML file. It takes the template file and injects the bundle.js file into it. Favicon is also included.

NB: As the production mode is not required by the exercise task, the mode is set to development and CSS extraction and minification are not used.

Instructions for building and running the project:
```javascript
npm install
npm run build
npm run start (for development server).
```