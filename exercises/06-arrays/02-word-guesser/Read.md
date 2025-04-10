# Exercise: 02-word-guesser

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26

## Exercise Requirements
● Create two arrays:   
○ one for the letters of the word (e.g. 'C', 'A', 'T')  
○ Another for the current guessed letters (start with '_', '_', '_' and add the correct letters to it).  
● Write a function called guessLetter that should:  
○ Take one parameter, a letter.   
○ Have a maximum number of guesses (e.g. 6)  
○ Check if the letter is in the word array.  
○ If the letter matches, add it in the correct position of the guessed array.  
○ Show the user the current guessed letters.  
○ Tell the user if they guessed a correct letter.  
○ Tell the user how many guesses remain.  
○ Tell the user if they won or lost the game.  
Call your function to make guesses:  
guessLetter('G');  
guessLetter('I');  
guessLetter('O');  
guessLetter('A');  
guessLetter('T');  
● Bonus  
○ Add a random reward for correct guesses and subtract a random amount for failed 
guesses.  
○ Show the user the total reward (positive or negative).  
○ Draw a hangman image to the console log after each guess.  
○ Add a function that generates the letters to guess randomly.  
○ Add a function that chooses the initial word to guess from an array of words.  

## Solution
- I created an `index.html` file with basic HTML structure.
- In the `main.js` file a "Hangman"-style game where a word is stored as an array of letters is imitated. The player must guess letters to complete the word before running out of attempts. The game tracks correct and incorrect guesses and provides feedback accordingly.  

A secret word (e.g., "CAT") is stored in an array of strings.  
Another array with three underscore chars is created to imitate free spaces of letters. 
The player makes letter guesses that is stored in a variable with value of 6 guesses.
A function __guessLetter(letter)__ is implemented. If statement controls the number of guesses remaining and returns a message if there are no more guesses left. A flag `correctGuess` is set to false. A for loop goes through each letter in lettersOfWord array. If the guessed letter matches the letter at index i, then:
The guessedLetters array (which tracks user progress) updates at the correct position. The flag correctGuess is set to true.
Then the if statement checks if the user has guessed a letter and shows a respective message, otherwise an incorrect letter is demonstrated and remainingGuesses is reduced. 
The current progress is shown with an array converted to a string followed by number of guesses remaining. 
Finally, the if statement controls if there are no more underscores in an array, and returns congratulations message if true. Otherwise, if the number of guesses remaining is 0, the game is lost. Several test cases are offered. 

- In the `bonus.js` file the game functionality is widened.  

### 1. **Word Selection**
```javascript
const words = ["GOAT", "APPLE", "MANGO", "ZEBRA", "TIGER", "PLANE", "HOUSE", "CAT", "HOTEL", "TENNIS"];
let selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
```
- The `words` array contains possible words.
- `Math.random()` generates a random decimal between 0 and 1.
- Multiplying by `words.length` scales it to the number of words.
- `Math.floor()` rounds down to an integer, selecting a valid index.
- The chosen word is converted to uppercase for uniformity.

### 2. **Game State Variables**
```javascript
let wordArray = selectedWord.split("");
let guessedArray = Array(wordArray.length).fill("_");
let guessedLetters = [];
let maxGuesses = 6;
let wrongGuesses = 0;
let totalReward = 0;
const rewards = [10, 20, 30, 40, 50];
```
- `wordArray`: The chosen word split into individual letters.
- `guessedArray`: Represents the player's progress, initialized with `_`.
- `guessedLetters`: Stores already guessed letters.
- `maxGuesses`: The allowed incorrect guesses.
- `wrongGuesses`: Tracks incorrect guesses.
- `totalReward`: Tracks reward points.
- `rewards`: An array of point values given or deducted.

### 3. **ASCII Hangman Stages**
```javascript
const hangmanStages = [
    `
     --------
     |      |
     |      
     |      
     |      
     |      
     -
    `,
    // More stages leading up to full hangman
];
```
- Each index in `hangmanStages` represents the game state as incorrect guesses increase.

### 4. **Generating a Random Letter**
```javascript
function getRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}
```
- Returns a random letter from the alphabet.
- Uses `Math.random()` and `Math.floor()` to select an index.

### 5. **Handling a Guess**
```javascript
function guessLetter(letter) {
    if (guessedLetters.includes(letter)) {
        console.log(`You already guessed '${letter}'. Try another letter.`);
        return;
    }

    guessedLetters.push(letter);
    if (wordArray.includes(letter)) {
        for (let i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === letter) {
                guessedArray[i] = letter;
            }
        }
        let reward = rewards[Math.floor(Math.random() * rewards.length)];
        totalReward += reward;
        console.log(`✅ Correct! You earned ${reward} points!`);
    } else {
        wrongGuesses++;
        let penalty = rewards[Math.floor(Math.random() * rewards.length)];
        totalReward -= penalty;
        console.log(`❌ Wrong guess! You lost ${penalty} points.`);
    }
    console.log(hangmanStages[wrongGuesses]);
    console.log(`Word: ${guessedArray.join(" ")}`);
    console.log(`Remaining guesses: ${maxGuesses - wrongGuesses}`);
    console.log(`💰 Total Reward: ${totalReward} points`);
}
```
- Checks if the letter was already guessed.
- If correct, updates `guessedArray` and adds a reward.
- If incorrect, increments `wrongGuesses` and applies a penalty.
- Displays the current game state.

### 6. **Game Execution**
```javascript
function playGame() {
    while (wrongGuesses < maxGuesses && guessedArray.includes("_")) {
        let letter = getRandomLetter();
        guessLetter(letter);
    }

    if (!guessedArray.includes("_")) {
        console.log("🎉 You won! The word was:", selectedWord);
    } else {
        console.log("☠️ You lost! The word was:", selectedWord);
    }
}
playGame();
```
- Loops until the player wins or loses.
- Calls `guessLetter()` with a random letter each iteration.
- Ends with a win/loss message.

## Summary
- **Random word selection** ensures variety.
- **Tracking guessed letters** prevents duplicate inputs.
- **ASCII hangman stages** visually indicate progress.
- **Rewards/Penalties** add an extra challenge.
- **Random letter selection** automates gameplay.




## Files:
- `basic-solution-01` folder:
    - `index.html` - Basic HTML structure.
    - `main.js` - JavaScript.
- `bonus` folder:
    - `index.html` - Basic HTML structure.
    - `main.js` - JavaScript.

- `Read.md` - exercise requirements and solution. 