$(document).ready(function () {
    const videoTimings = [0, 9, 15, 23, 30,38];
    const video = document.getElementById('video');
    $('.about__switches').on('click', function () {
        clearTimeout(window.timeOut);
        const nextPart = $(this).data('value');
        const time = videoTimings[nextPart];
        const stopTime = videoTimings[nextPart + 1] ? (videoTimings[nextPart+1] - videoTimings[nextPart]): null;
        video.currentTime = time;
        video.play();
        if (stopTime) {
            window.timeOut = setTimeout(function () {
                video.pause();
            }, stopTime *1000 + 1000);
        }
    })
});
