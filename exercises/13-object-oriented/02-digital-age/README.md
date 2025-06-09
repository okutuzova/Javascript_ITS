# Exercise: 02-digital-age

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
● A Video has the following methods and properties
○ title (a string)
○ seconds (a number)
○ watch(x seconds [optional]) prints "You watched X seconds of 'TITLE'" e.g. "You watched 
120 seconds of 'Lord of the rings'". If x is missing prints "You watched all SECONDS seconds 
of 'TITLE'" e.g. "You watched all 160 seconds of 'Lord of the rings'"
● A MusicVideo extends Video and has these extra methods and properties
○ artist (a string)
○ play() prints "You played 'TITLE' by 'ARTIST'" e.g. "You played 'Another Brick in the Wall' by 
'Pink Floyd'"
● Use the prototype method, not classes, to write a constructors for Video and 
MusicVideo
○ The constructor functions accept a single config object
○ All arguments are optional, use defaults if missing
● Create an array that contains a mix of Video and MusicVideo instances
● Loop on the Array and for each item 
○ call the watch() method 
○ call the play() method only if it's a MusicVideo. Hint: Use instanceof
● Optional:
○ in a new folder, repeat the exercise using the class syntax rather than the prototype method
○ All behaviors should be identical



## Solution
In this exercise, two approaches to creating prototypes are demonstrated.
First solution is using the prototype method.
A video prototype is created through the function-constructor, the properties are added using the single config object to keep code clean. If the values are not passed, the default ones will be used. To the video prototype, the watch method is added. It takes a number of seconds as an argument and prints the message. If the number of seconds is not passed, the default value is used.
A music video prototype is created, the properties are added using the single config object to keep code clean. The music video inherits from video prototype by usage of the call method. A new property is added to the music video prototype - artist.
To the music video prototype, the watch method is added and the play method is added.
An array is created and contains a mix of video and music video instances. This array is looped on and for each item, the watch method is called. When looping, the instanceof operator is used to check if the item is a music video.
If the item is a music video, the play method is called.
Second solution is using the class syntax. Behavior is identical to the first solution.

## Files:
- `main.js` - external javascript file.
- `index.html` - html file.
- `README.me` - exercise requirements and solution. 
