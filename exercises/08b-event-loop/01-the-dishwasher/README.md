# Exercise: 01-the-dishwasher

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
Create a simulation of a dishwasher system using two stacks of dishes
● one stack represents dirty dishes, and the other represents clean dishes
● the dirty stack has a random number of plates 10 - 50
● useful functions
○ washDish - moves a dish from the dirty stack to the clean stack
○ displayStacks - displays the current state of both stacks in the console
○ runSimulation - simulate washing all dirty dishes adding a random delay between steps
Bonus
1. have three stacks of dirty dishes and one clean stack
2. the dishwasher is able to wash two dishes at a time

 
## Solution
In the `main.js` file the dishwasher simulation is created according to the first part of the exercise. I created two empty stacks (arrays) to keep clean and dirty dishes. The arrays will work as staks following the principle LIFO, Last In First Out. Next, I created a function that will generate a random number using min and max params. The function uses Math.random method() that will generate a random floating-point number between 0 and 1. This number will be multiplied by the difference between max and min - in this case 50 - 10, plus one to include the maximum value. Math.floor() method will round the result down to get an integer, and then the min is added to force the start from the minimum value.  
Then I created a random number `DirtyStackLength` using this function, and filled an array with dirty dishes with a for loop and a push() array method. 
Next, a washDish() function is created. The function uses the array pop() method to return the last element of the array and push() array method to add it to the clean dishes stack, The function logs the result to the console.  
The `displayStacks()` function demonstrates the currents state of both stacks, logging the information on the cleaning process to the console. 
The `runSimulation()` function starts the process, invoking the displayStacks() function. Then the variable intervalId is initialized, to which a setInterval() window method is assigned. The if statement checks if the dirty dishes stack is empty or not, if not the washDish() function is invoked, followed by displaying the currents stacks state. If the dirty dishes stack is empty, the respective message is logged and the setInterval() method is cleared using clearInterval() window method. The interval is set randomly using Math.random() method.  

In the `bonus.js` file the two functionalities have been added. The number of dirty stacks was increased to 3, and the simulation of washing two dishes at the same time was added. 
Details:  
I have created four empty stacks(arrays), one for clean dishes and three for dirty ones. Used a randInt function to pick up random length for three stacks. In three for loops I have filled the arrays with dirty dishes. As there is only one instruction following the for statement, the square brackets may be omitted. 

```JavaScript
// adding a random number of dirty dishes to stacks
for (let i = 0; i < randInt(10, 50); i++) dirtyStackOne.push(`Dish ${i + 1} from Stack One`);
for (let i = 0; i < randInt(5, 25); i++) dirtyStackTwo.push(`Dish ${i + 1} from Stack Two`);
for (let i = 0; i < randInt(10, 30); i++) dirtyStackThree.push(`Dish ${i + 1} from Stack Three`);

```
The washDish() function take two dishes - one from dirty stack number one, another from dirty stack number two. If only one plate was taken, one from the dirty stack number three will be taken. All cleaned dishes are added to a temporary array washedDishesTemp. Then this temporary stack is concatenated with the clean stack using array concat() method and flat() method to unpack the concatenated array. 
In the function displayStacks() I added the current state of all stacks for logging. 
In the function runSimulation() in the if statement I added a condition to check if all dirty stacks are empty. If not, the washDish() function is invoked, followed by displaying the current state of all stacks. If all dirty stacks are empty, the respective message is logged and the setInterval() method is cleared using clearInterval() window method. The interval is set randomly using Math.random() method.

Finally, in the `index.html` file the scripts files are not used simultaneously to avoid the conflict as the functions use the same names in both files. In order to use one of the scripts, the other one should be commented out.




## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
