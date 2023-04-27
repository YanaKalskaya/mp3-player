let audio = document.getElementById("audio");
let time = document.querySelector(".time");
let btnPlay = document.querySelector(".play");
let btnPause = document.querySelector(".pause");
let btnPrev = document.querySelector(".prev");
let btnNext = document.querySelector(".next");
let name = document.querySelector(".name");
let author = document.querySelector(".author");

let playlist = [
    {
        name: "Now You're Gone",
        author: "Basshunter",
        src: "Basshunter_NowYou'reGone.mp3",
    },
    {
        name: "A Sky Full of Stars",
        author: "Coldplay, Avicii",
        src: "Coldplay,Avicii_ASkyFullofStars.mp3",
    },
    {
        name: "Dance Monkey",
        author: "Dance Monkey",
        src: "DanceMonkey_DanceMonkey.mp3",
    },
    {
        name: "If Only You",
        author: "Danny Saucedo, Therese",
        src: "DannySaucedo,Therese_IfOnlyYou.mp3",
    },
];

let track;

window.onload = () => {
    track = 0;
}

function switchTrack(numTreck) {
    audio.src = 'songs/' + playlist[numTreck].src;
    audio.currentTime = 0;
    play();
    setName(playlist[numTreck].name);
    setAuthor(playlist[numTreck].author);
}

function setName(song) {
    name.textContent = song;
}

function setAuthor(name) {
    author.textContent = name;
}

function play() {
    audio.play();
    btnPlay.classList.add("invisible");
    btnPause.classList.remove("invisible");
}

btnPlay.addEventListener("click", () => {
    play();
    audioPlay = setInterval(() => {
        let audioTime = Math.round(audio.currentTime);
        let audioLength = Math.round(audio.duration)
        time.style.width = (audioTime * 100) / audioLength + '%';

        if (audioTime == audioLength && track < playlist.length - 1) {
            track++;
            switchTrack(track);
        } else if (audioTime == audioLength && track >= playlist.length - 1) {
            track = 0;
            switchTrack(track);
        }
    }, 10)
});

btnPause.addEventListener("click", () => {
    audio.pause();
    btnPause.classList.add("invisible");
    btnPlay.classList.remove("invisible");
    clearInterval(audioPlay);
});

btnPrev.addEventListener("click", () => {
    if (track > 0) {
        track--;
        switchTrack(track);
    } else {
        track = playlist.length - 1;
        switchTrack(track);
    }
});

btnNext.addEventListener("click", () => {
    if (track < playlist.length - 1) {
        track++;
        switchTrack(track);
    } else {
        track = 0;
        switchTrack(track);
    }
});
