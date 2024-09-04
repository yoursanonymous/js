const p1Btn = document.querySelector('#p1Button');
const p2Btn = document.querySelector('#p2Button');
const reset= document.querySelector('#reset');
const playTo=document.querySelector('#playto');


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
        p1Display.classList.add('winner');
        p2Display.classList.add('loser');
    }
    p1Display.innerText = p1Score;
    }
})

p2Btn.addEventListener('click', function (e) {
    if(!gameOver){
    p2Score++;
    if(p2Score===winningScore){
        gameOver=true;
        p2Display.classList.add('winner');
        p1Display.classList.add('loser');
    }
    p2Display.innerText = p2Score;
   }
})

playTo.addEventListener('click',function(){
    playTo=parseInt(this.value);
    reset();
})

reset.addEventListener('click',reset())
function reset(){
    gameOver=false
    p2Score=0;
    p1Score=0;
    p1Display.innerText=0;
    p2Display.innerText=0;
    p2Display.classList.remove('winner','loser');
    p1Display.classList.remove('winner','loser');
}