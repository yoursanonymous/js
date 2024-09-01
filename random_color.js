const button = document.querySelector('button');
const h = document.querySelector('h1');
const h2 = document.querySelector('#name');
const h3=document.querySelector('#alt');
button.addEventListener('click', function () {
    const newColor= rando();
    // const altColor1 = rando(210);
    // const altColor = rando(255);
    const inverseColor=invertColor(newColor)
    document.body.style.backgroundColor = newColor;
    // h.style.color = altColor1;
    h2.style.color = inverseColor;
    // h2.style.color = altColor;
    // h3.innerText=altColor ;
})
function rando(x){
    const r =(x- Math.floor(Math.random() * 255));
    const g =(x- Math.floor(Math.random() * 255));
    const b =(x - Math.floor(Math.random() * 255));
    return `rgb(${r},${g},${b})`;
}
function invertColor(rgb){
    const [r,g,b]=rgb.match(/\d+/g).map(Number);
    const invR = 255 - r;
    const invG = 255 - g;
    const invB = 255 - b;
    return `rgb(${invR},${invG},${invB})`;
}