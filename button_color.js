function rando() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return { r, g, b };
}
function invert({ r, g, b }) {
    return {
        r: 255 - r,
        g: 255 - g,
        b: 255 - b
    };
}
function rgb({ r, g, b, }) {
    return `rgb(${r},${g},${b})`;
}
function colork() {
    const back = rando();
    const text = invert(back);
    this.style.backgroundColor = rgb(back);
    this.style.color = rgb(text)
}
// function cback() {
//     this.style.color = rando();
// }
// function ctext() {
//     this.style.backgroundColor = invert({ r, g, b });
// }
const btns = document.querySelectorAll('button');
for (let btn of btns) {
    btn.addEventListener('click', colork)
}
const h1s = document.querySelectorAll('h1');
for (let h of h1s) {
    h.addEventListener('click', colork)
}