const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const trackName = document.getElementById('track-name');

const tracks = [
    { name: 'Song 1', src: '06 - Nuvvunte Naa Jathagaa (Reprise).mp3' },
    { name: 'Song 1', src: '[iSongs.info] 01 - Akkad Bakkad.mp3' },
];

let currentTrackIndex = 0;

function loadTrack(index) {
    audio.src = tracks[index].src;
    trackName.textContent = tracks[index].name;
}

function playTrack() {
    audio.play();
    playButton.textContent = 'Pause';
}

function pauseTrack() {
    audio.pause();
    playButton.textContent = 'Play';
}

playButton.addEventListener('click', () => {
    if (audio.paused) {
        playTrack();
    } else {
        pauseTrack();
    }
});

prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
});

nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
});
loadTrack(currentTrackIndex);
