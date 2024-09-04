const p1Btn = document.querySelector('#p1Button');
const p2Btn = document.querySelector('#p2Button');
const reset= document.querySelector('#reset');

const p2Display = document.querySelector('#p2Display');
const p1Display = document.querySelector('#p1Display');

let p2Score=0;
let p1Score = 0;
let winningScore= 5;
let gameOver=false;

p1Btn.addEventListener('click', function (e) {
    if(!gameOver){
    p1Score++;
    if(p1Score===winningScore){
        gameOver=true;
    }
    p1Display.innerText = p1Score;
    }
})

p2Btn.addEventListener('click', function (e) {
    if(!gameOver){
    p2Score++;
    if(p2Score===winningScore){
        gameOver=true;
    }
    p2Display.innerText = p2Score;
   }
})

reset.addEventListener('click',function(e){
    p2Score=0;
    p1Score=0;
})