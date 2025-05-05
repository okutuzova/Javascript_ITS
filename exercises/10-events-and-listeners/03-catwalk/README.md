# Exercise: 03-catwalk

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● The cat should start from the left side of the screen  
● Write a function ‘catWalk()’ that moves the cat 10 pixels to the right  
● Make the cat move across the screen by calling that function every 50ms  
● Write different versions of the function to handle the following variants:  
○ Variant 1: When the cat reaches the right side of the screen it should restart from the left  
○ Variant 2: When the cat reaches the right side of the screen, it should move backwards.   
When it reaches the left it should move forwards  
○ Variant 3: When the cat reaches the middle of the screen, replace the img with a different   
cat image. Keep it in the middle for 10 seconds, and then replace the img with the original   
image and have it continue the walk as in variant 2   


## Solution
### Variant 1:
A simple animation code that moves the cat 10 pixels to the right.
The cat starts from the left side of the screen and moves to the right.
When the cat reaches the right side of the screen, it starts from the left again. The walk is imitated by setting the interval to 50ms. The image is moved by adjusting its margin-left property and resetting once the image has fully passed the window's width using (leftMargin = -img.width).

### Variant 2:
A boolean flag that indicates the direction of movement is added. The image moves to the right and when the right edge of the image reaches the window's right side, the direction changes and image is flipped horizontally. The image is moved to the left and when the left edge of the image reaches the window's left side, the direction changes and image is flipped horizontally. The walk is imitated by setting the interval to 50ms. The image is moved by adjusting its margin-left property.

### Variant 3:
This variant enhances the cat walk animation with a special middle-screen interaction. The cat moves across the screen as in Variant 2, but when it reaches the middle, a new static cat image appears and stays for 10 seconds. During this pause, the movement stops. After the timeout, the original walking cat gif returns and continues its journey, maintaining the directional movement from Variant 2 (moving right to left and flipping the image accordingly). The animation uses position tracking to determine the middle point and setTimeout for managing the image swap and pause duration.


## Files:
- `index.html` - main page.
- `main.js` - external javascript file.
- `README.md` - exercise requirements and solution. 
