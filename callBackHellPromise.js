
const delayedColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}
delayedColor('red', 1000)
    .then(() => delayedColor('orange', 1000))
    .then(() => delayedColor('green', 1000))
    .then(() => delayedColor('blue', 1000))
    .then(() => delayedColor('indigo', 1000))
    .then(() => delayedColor('violet', 1000))