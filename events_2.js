const btn = document.querySelector('#v2')
btn.onclick = function () {
    console.log("you clicked mee!!!!!!");
    console.log("agaain!!!!!!!");
}
function scream() {
    console.log("AAAAAAAA");
    console.log("bcccccccccc")
}
btn.onmouseenter = scream;
document.querySelector('h1').onclick = function () {
    alert('you clicked the h1!')
}
const btns = document.querySelector('#v3');
btns.addEventListener('dblclick', function () {
    alert('jine mera dil luteya ')
    let input = prompt('type the next lyric');
    if (input == 'oho') {
        alert('right')
    }
    else {
        alert('wrong');
    }
})
const btuns = document.querySelector('#v4');
btuns.addEventListener('click', function () {
 alert('jine mera dil luteya ')
 let input = prompt('type the next lyric');
if (input == 'oho') {
alert('right')
 }
else {
alert('wrong');
}
})
const botuns = document.querySelector('#v5');
botuns.addEventListener('mouseup', function () {
 alert('jine mera dil luteya ')
 let input = prompt('type the next lyric');
if (input == 'oho') {
alert('right')
 }
else {
alert('wrong');
}
})
const bottuns = document.querySelector('#v6');
bottuns.addEventListener('mouseup',scream);
function twist(){
    console.log("twist!");
}
function Shout(){
    console.log("shout!!");
}
const tass= document.querySelector('#tas');
tass.onclick=twist;
tass.onclick=Shout;
//we can only assign 1 property that is the last property
tass.addEventListener('click',twist);
tass.addEventListener('click',Shout);
//if we use the addEventListener both will execute one after the other 
// by using both addEvenetListener and function type we get shout then twist and then shout 
const once=document.querySelector('#once');
once.addEventListener('click',Shout,{once:true});