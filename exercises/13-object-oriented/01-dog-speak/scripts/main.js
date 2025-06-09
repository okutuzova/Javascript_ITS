/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 01-dog-speak
 * This script contains a function that adds a new method to the String object.
 */

String.prototype.dogSpeak = function() {
    console.log(this + ' Woof!');
};
  
let s = 'We like to learn';
s.dogSpeak();
'Dogs are smart'.dogSpeak();


  