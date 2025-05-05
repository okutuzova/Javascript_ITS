# Exercise: 04-enhanced-catwalk

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● Start with the code from the previous ‘Catwalk’ exercise
● Add 4 buttons at the top of the page: ‘start’, ‘faster’, ‘slower’ and ‘stop’
● Add an area to display info
● When the start button is clicked the cat should start moving across the 
screen
● The cat should stop moving when the stop button is clicked
● The cat moves faster when the faster button is clicked and slower when the 
slower button is clicked
● Show the current speed on screen in the info area
● Disable the start/stop/faster/slower buttons at the appropriate times
○ e.g. the user shouldn't be able to click "stop" if the cat isn't currently moving 


## Solution
### 🔘 Buttons
- **Start**: Begins the cat's walking animation.
- **Stop**: Stops the cat's movement.
- **Faster**: Increases the walking speed.
- **Slower**: Decreases the walking speed.

### 🔘 Functions Breakdown
#### `catWalk()`
Starts the animation. The cat moves either to the right or left based on the current direction. When it hits the edge of the screen, it reverses direction and flips its image horizontally using CSS `transform`.
The interval is cleared in order to reset the previous animation. The current speed is displayed on the screen. intervalId starts an infinite loop. Inside the setInterval, the cat's movement direction is checked. If the cat is moving to the right, then the step is added to the left margin, moving the gif to the right. Then the position is checked, if the gif has reached the right windiw edge, the direction is changed and the gif is flipped. If the gif has reached the left window edge, the direction is changed and the gif is flipped.Finally, the position on the screen is updated by mainipulating the style attribute. 

#### `stopCatWalk()`
Stops the animation by clearing the interval. Also disables unnecessary buttons.

#### `catSpeedUp()`
Increases the speed by adding `10` to the step value. Restarts the animation with the new speed.

#### `catSlowDown()`
Decreases the speed by subtracting `10` from the step value. Also restarts the animation.

> ⚠️ Note: There is no limit on how slow (or even negative) the speed can go — which may result in unexpected behavior.

#### `changeSpeedOnDisplay(step)`
Updates the UI to show the current speed on the screen.

 


## Files:
- `index.html` - main page.
- `main.js` - external javascript file.
- `styles.css` - external css file.
- `README.md` - exercise requirements and solution. 
