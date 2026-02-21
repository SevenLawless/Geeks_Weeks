class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
    };
}

const vid1 = new Video("frkous", "mohmad", "12h");
vid1.watch();
const vid2 = new Video("kbour", "sa3ida", "36h");
const vid3 = new Video("frkous3", "mohmad3", "3h");
const vid4 = new Video("frkous4", "mohmad4", "4h");
const vid5 = new Video("frkous5", "mohmad5", "5h");


const arr = [vid1, vid2, vid3, vid4, vid5];
arr.forEach(x => x.watch());