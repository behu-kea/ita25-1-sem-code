const interval = 150;

function playTone(toneFrequency) {
    const sineWave = new Pizzicato.Sound({
        source: 'wave',
        options: {
            frequency: toneFrequency
        }
    });

    sineWave.play();
    // after 1 second stop the tone
    setTimeout(() => sineWave.stop(), interval)
}

document.querySelector("button.low").addEventListener("click", () => {
    playTone(300);
});

document.querySelector("button.high").addEventListener("click", () => {
    playTone(1000);
});

const dataPoints = [-1, 15, 20, 8, 25];

document.querySelector("button.tones").addEventListener("click", () => {
    dataPoints.forEach((dataPoint, i) => {
        setTimeout(() => {
            playTone((dataPoint + 2) * 15);
        }, i * interval);
    })
});









