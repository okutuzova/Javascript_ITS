import { myFilter } from "./functions/filter";
import { myMap } from "./functions/map";
import { myIndexOf } from "./functions/indexOf";
import { mySlice } from "./functions/slice";
import { myForEach } from "./functions/foreach";


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function testFilter() {
    return myFilter(numbers, n => n % 2 === 0);
}

export function testMap() {
    return myMap(numbers, n => n * 2);
}

export function testForEach() {
    console.log("myForEach:", myForEach(numbers, n => console.log(n)));
}

export function testIndexOf() {
    return myIndexOf(numbers, 5);
}

export function testSlice() {
    return mySlice(numbers, 2, 4);
}