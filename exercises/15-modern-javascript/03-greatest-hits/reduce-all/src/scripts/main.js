/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 03-greatest-hits-reduce-all
 *
 * In this exercise modern Javascript is used to implement custom Array methods.
 * The methods are implemented using reduce().
 */

import "../styles/main.css";  
import { testFilter, testMap, testForEach, testIndexOf, testSlice } from "./tests.js";


const filter = document.querySelector(".filter");
filter.textContent = testFilter();
const map = document.querySelector(".map");
map.textContent = testMap();
const indexOf = document.querySelector(".indexOf");
indexOf.textContent = testIndexOf();
const slice = document.querySelector(".slice");
slice.textContent = testSlice();
testForEach();
