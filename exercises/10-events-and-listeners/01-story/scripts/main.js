/**
 * @file main.js
 * @author Olga Kutuzova
 * @description 01-story
 *
*/


const noun = document.querySelector('#noun');
const adjective = document.querySelector('#adjective');
const person = document.querySelector('#person');
const makeStoryButton = document.getElementById('gen-button');
const storyPlaceholder = document.getElementById('story');

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
