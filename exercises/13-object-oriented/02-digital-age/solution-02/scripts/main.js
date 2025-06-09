class Video {
    constructor(config) {
        this.title = config.title;
        this.seconds = config.seconds || 400;
    }
    watch(x) {
        if (x === undefined) {
            console.log(`You watched all ${this.seconds} seconds of ${this.title}`);
        } else {
            console.log(`You watched ${x} seconds of ${this.title}`);}
    }
}

class MusicVideo extends Video {
    constructor(config) {
        super(config);
        this.artist = config.artist;
    }
    play() {
        console.log(`You played ${this.title} by ${this.artist}`);
    }
}

let videoMusicVideoMix = [];

let video1 = new Video({
    title: 'Video 1',
    seconds: 400
});

let song1 = new MusicVideo({
    title: 'Song 1',
    artist: 'Artist 1'
});
let song2 = new MusicVideo({
    title: 'Song 2',
    seconds: 300,
    artist: 'Artist 2'
});

videoMusicVideoMix.push(video1);
videoMusicVideoMix.push(song1);
videoMusicVideoMix.push(song2);

videoMusicVideoMix.forEach(video => {
    video instanceof MusicVideo ? video.play() : video.watch();
});