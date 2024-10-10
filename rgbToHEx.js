// function hex(r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// function rgb(r, g, b) {
//     return `rgb(${r},${g},${b})`
// }
// // console.log(hex(255, 100, 25));
// // console.log(rgb(235,100,25));
// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g} ,${b})`;
//     };
//     color.hex = function () {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }
// const firstColor = makeColor(35, 225, 150);
// firstColor.hex();
// firstColor.rgb();
// const black = makeColor(0, 0, 0);
// black.rgb();
// black.hex();
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
// };
// Color.prototype.rgba = function (a ) {
//     const { r, g, b } = this;
//     return `rgba(${r},${g},${b},${a})`;
// }
// const color1 = new Color(40, 50, 60);
// const color2 = new Color(0, 0, 0);
class Color{
    constructor(r,g,b,a,name){
        this.r=r;
        this.g=g;
        this.b=b;
        this.a=a;
        this.name=name;
        this.calcHSL();
    }
    innerRGB(){
        const {r,g,b}=this;
        return `${r}, ${g},${b}`;
    }
    rgba(a){
        return `rgba(${this.innerRGB()},${a})`;    
    }
    rgb(){
        return `rgb(${this.innerRGB()})`;
    }
    hex(){
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    gree(){
        
        return `hello from ${this.name}!`;
    }
    hsl(){
        const {h,s,l}=this;
        return `hsl(${h},${s}%,${l}%)`
    }
    opposite(){
        const {h,s,l}=this;
        const newHue=(h+180)%360;
        return `hsl(${newHue},${s}%,${l}%)`
    }
    calcHSL(){
        let {r,g,b}=this;
        r/=255;
        g/=255;
        b/=255;
        let cmin= Math.min(r,g,b);
        let cmax=Math.max(r,g,b);
        let delta=cmax-cmin;
        let h=0;
        let s=0;
        let l=0;
        if(delta==0)h==0;
        else  if(cmax==r)
            h=((g-b)/delta)%6;
        else if(cmax==g)
            h=(b-r)/delta+2;
        else 
            h=(r-g)/delta+4;
        h=Math.round(h*60);
        if(h<0)h+=360;
        l=(cmax+cmin)/2;
        s=delta==0?0:delta/(1-Math.abs(2*l-1));
        s=+(s*100).toFixed(1);
        l=+(l*100).toFixed(1);
        this.h=h;
        this.s=s;
        this.l=l;
    }
}
class Cat{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
const red= new Color(255,67,89,'tomato');
const black = new Color(0,0,0,'black');