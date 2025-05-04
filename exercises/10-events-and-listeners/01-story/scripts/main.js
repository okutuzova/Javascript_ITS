/**
 * @file main.js
 * @author Olga Kutuzova
 * @description 01-story
 * This script generates a whimsical story 
 * based on user input for noun, adjective, and person.
*/

// DOM element references
/** @type {HTMLInputElement} Input for noun */
const noun = document.querySelector('#noun');
/** @type {HTMLInputElement} Input for adjective */
const adjective = document.querySelector('#adjective');
/** @type {HTMLInputElement} Input for person's name */
const person = document.querySelector('#person');
/** @type {HTMLButtonElement} Button that triggers story generation */
const makeStoryButton = document.getElementById('gen-button');


/**
 * Event listener for the story generation button.
 * Constructs a short, imaginative story using user-provided noun,
 * adjective, and person.
 */
makeStoryButton.addEventListener('click', function () {
    const nounValue = noun.value;
    const adjectiveValue = adjective.value;
    const personValue = person.value;
    const textOfStory =  `One day, ${personValue} was walking through the forest and found a ${adjectiveValue} ${nounValue} 
    lying on the ground. Without thinking twice, they picked it up and shouted, "This is the best day ever!"
    Suddenly, the ${nounValue} started glowing and turned into a unicorn.
    "Whoa," said ${personValue}, "This is even more ${adjectiveValue} than I imagined!"
    And from that day on, they rode the magical ${nounValue} to ITS every morning.`;
    document.getElementById('story').textContent = textOfStory;
});
