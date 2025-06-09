/**
 * @file: main.js
 * @author: Olga Kutuzova
 * Exercise 02-digital-age
 * This script defines class constructors for Video and MusicVideo, and demonstrates
 * their use through a mixed array of video objects.
 */

/**
 * Represents a generic video.
 */
class Video {
    /**
     * Creates a new Video instance.
     * @param {Object} config - Configuration object.
     * @param {string} config.title - The title of the video.
     * @param {number} [config.seconds=400] - Duration of the video in seconds.
     */
    constructor(config) {
        this.title = config.title;
        this.seconds = config.seconds || 400;
    }
    /**
     * Simulates watching the video.
     * @param {number} [x] - The number of seconds watched. If omitted, logs watching the entire video.
     */
    watch(x) {
        if (x === undefined) {
            console.log(`You watched all ${this.seconds} seconds of ${this.title}`);
        } else {
            console.log(`You watched ${x} seconds of ${this.title}`);}
    }
}

/**
 * Represents a music video, extending the base Video class.
 */
class MusicVideo extends Video {
    /**
     * Creates a new MusicVideo instance.
     * @param {Object} config - Configuration object.
     * @param {string} config.title - The title of the music video.
     * @param {number} [config.seconds=400] - Duration of the music video in seconds.
     * @param {string} config.artist - The artist of the music video.
     */
    constructor(config) {
        super(config);
        this.artist = config.artist;
    }
    /**
     * Simulates playing the music video.
     */
    play() {
        console.log(`You played ${this.title} by ${this.artist}`);
    }
}
// Array holding a mix of Video and MusicVideo instances
let videoMusicVideoMix = [];

let song1 = new MusicVideo({
    title: 'Yellow Submarine',
    seconds: 200,
    artist: 'Beatles'
});
let song2 = new MusicVideo({
    title: 'Feeling Good',
    seconds: 300,
    artist: 'Gorillaz'
});

let video1 = new Video({
    title: 'Cats',
    seconds: 400
});

videoMusicVideoMix.push(video1);
videoMusicVideoMix.push(song1);
videoMusicVideoMix.push(song2);

// Loop through all videos and call appropriate method
videoMusicVideoMix.forEach(video => {
    video instanceof MusicVideo ? video.play() : video.watch();
});