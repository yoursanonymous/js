const delayedColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
            async function rai(params) {
             console.log("rainbow is running")
            }
        }, delay)
    })
}
async function rainbow() {
    await delayedColor('red', 1000)
    await delayedColor('orange', 1000)
    await delayedColor('yellow', 1000)
    await delayedColor('green', 1000)
    await delayedColor('blue', 1000)
    await delayedColor('indigo', 1000)
    await delayedColor('violet', 1000)
}

// rainbow().then(()=>console.log("END OF RAINBOW"));
async function rain() {
    console.log("rainbow will run");
    await rainbow();
    await console.log("rainbow has runned")
}