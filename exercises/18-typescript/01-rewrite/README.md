# Exercise: 01-rewrite

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Create a basic typescript project that contains
○ src/ dist/ folders
○ a tsconfig.json file
○ a main.ts file
○ an index.html file that links to the compiled .js file in the dist/ folder
● Choose any of your previous Javascript exercises or projects
○ Rewrite it using typescript
○ Think where typescript can improve the safety of your code or simplify it
○ Compile your code and make sure it works like the original version, or maybe better


## Solution
### 06-arrays-02-word-guesser
Changes made: 
```javascript
function guessLetter(letter: string): void {
    if (remainingGuesses <= 0) {
        console.log('No more guesses left. Game over :(');
        return;
    } 
```
As without an explicit type for the parameter, the compiler indicated the param type as any, the type string was added. 
In tsconfig.json file, the target is set to "ES2015". However, the property includes appeared only in ES2015. 
```javascript
if (!guessedLetters.includes('_')) {
        console.log("Congratulations! You win!");
```
To fix the error, "lib": ["ES2016", "DOM"] was added to tsconfig.json. This allows a TS compiler to recognize the includes() method. Basically, it means that in the script there are methods from ES2016 and the script is written for browser, therefore, DOM is included.

### 15-modern-javascript-advanced-arrivals
For this exercise, Webpack was used to bundle the scripts. Therefore, the project includes webpack.config.js, package.json (generated automatically), tsconfig.json. 
Webpack installation: 
```bash
npm install webpack webpack-cli --save-dev
npm install --save-dev typescript ts-loader
npm install --save-dev html-webpack-plugin
``` 
Typescript loader was also added.

package.json file was updated to include the scripts:
```json
"scripts": {
    "build": "webpack --mode production",
    "start": "webpack serve --mode development"
  },
```
In data.ts file, following changes were made:
- To limit the possible statuses, instead of using an array of strings, a readonly tuple of fixed values was used with const assertion.
```typescript
export const statuses = [
  "ON_TIME",
  "DELAYED",
  "DEPARTING",
  "DEPARTED",
  "EN_ROUTE",
  "ARRIVED",
  "CANCELLED"
] as const;

export type Status = typeof statuses[number];
```
- statuses[number] means any value from the statuses tuple. typeof statuses[number] is a type that represents any value from the statuses tuple. Therefore, the Status type is a union of all possible values from the statuses tuple.

- an interface Flight was added. This provides additional type checking for the properties of the Flight object.
```typescript
interface Flight {
  id: number;
  flightNumber: string;
  from: string;
  time: string;
  date: string;
  gate: string;
  airline: string;
  status: Status;
}
```

In elements.ts file the non-null assertion operator (!) was used to remove the possibility of null or undefined values for the elements. For each querySelector a generic type was added (<HTMLTableSectionElement>, <HTMLButtonElement>, <HTMLElement>, <HTMLHeadingElement>).

NB: 
If there is an import from a file with ts extension, the extension is omitted.
```typescript
import { flights } from "../data/data";
```

In statusHelpers.ts file, typeof statuses[number] was used. This is a type that represents any value from the statuses tuple. Therefore, the Status type is a union of all possible values from the statuses tuple.

In toggleAccordion.ts file, event: MouseEvent is typed, so Typescript can understand properties of the target. ```(event.target as HTMLElement)?``` is a type guard. If the target is an HTMLElement, it will be assigned to the target variable. Otherwise, the target variable will be undefined.

In order to avoid a conflict of devserver, the following command was used:
```bash
npm run build
npm run start
```
### Instructions for running the scripts
