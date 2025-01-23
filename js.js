let heroVideo = document.querySelector('.hero-video');
let nextBtn = document.querySelector('.next-btn');

let videoList = ['video-test/game-video.mp4', 'video-test/game-video2.mp4'];

let i = 0;

nextBtn.addEventListener('click', () => {
    i += 1;

    heroVideo.src = videoList[i];

    if(i === 1){
        i = -1;
    }
})

let suto = setInterval(() => {
    nextBtn.click();
}, 8500)


const nav = document.querySelector('.nav');
const icon = document.querySelector('.icon');

icon.addEventListener('click', () => {
    nav.classList.toggle('active');
    icon.classList.toggle('active')
})