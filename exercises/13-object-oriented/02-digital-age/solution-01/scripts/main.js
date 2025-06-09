/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 02-digital-age
 * This script defines constructors for Video and MusicVideo, and demonstrates
 * their use through a mixed array of video objects.
 */


function Video(config) {
    this.title = config.title || 'Untitled';
    this.seconds = config.seconds || 400; 
}

Video.prototype.watch = function(x) {
    if (x === undefined) {
        console.log(`You watched all ${this.seconds} seconds of ${this.title}`);
    } else {
        console.log(`You watched ${x} seconds of ${this.title}`);
    }
}

function MusicVideo(config) {
    Video.call(this, config);
    this.artist = config.artist;
}
MusicVideo.prototype = Object.create(Video.prototype);
MusicVideo.prototype.play = function() {
    console.log(`You played ${this.title} by ${this.artist}`);
}

let videoMusicVideoMix = [];
let song1 = new MusicVideo({
    title: 'Song 1',
    seconds: 200,
    artist: 'Artist 1'
});

videoMusicVideoMix.push(song1);
let song2 = new MusicVideo({
    title: 'Song 2',
    seconds: 300,
    artist: 'Artist 2'
});

let video1 = new Video({
    title: 'Video 1',
    seconds: 400
});

videoMusicVideoMix.push(video1);


videoMusicVideoMix.push(song2);

videoMusicVideoMix.forEach(video => {
    video instanceof MusicVideo ? video.play() : video.watch(); // ternary operator
    
});